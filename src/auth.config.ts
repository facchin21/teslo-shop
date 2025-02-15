import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import prisma from './lib/prisma';
import bcryptjs from 'bcryptjs';

export const authConfig: NextAuthConfig = {
    pages: {
        signIn: '/auth/login',
        newUser: '/auth/new-account',
    },

    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.data = user;
            }
            return token;

        },
        session(session, token, user) {


            return session;
        }


    },

    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCreentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (!parsedCreentials.success) {
                    return null;
                }

                const { email, password } = parsedCreentials.data;

                // Buscar el correo.
                const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });

                if (!user) return null;

                // Verificar el password.
                if (!bcryptjs.compareSync(password, user.password)) return null;


                // Regresar el usuario sin el password.
                const { password: _, ...rest } = user;

                return rest;
            }
        })
    ]
}


export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);