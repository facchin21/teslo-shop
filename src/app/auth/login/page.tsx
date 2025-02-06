

import { titleFont } from '@/config/fonts';
import { LoginForm } from './ui/LoginForm';


export const metadata = {
 title: 'Login Page',
 description: 'Pagina para iniciar sesion en la aplicacion',
};

export default function  LoginPage () {
  return (
    <main className="flex flex-col min-h-screen pt-32 sm:pt-52">

      <h1 className={`${titleFont.className} text-4xl mb-5`}>Ingresar</h1>

      <LoginForm/>
    </main>
  );
}