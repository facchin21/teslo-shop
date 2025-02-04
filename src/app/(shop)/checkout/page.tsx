import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
  initialData.products[4],
]

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-2">

      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar Orden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>
            <Link href={'/cart'} className="underline mb-5">
              Editar carrito
            </Link>

            {/* Items */}
            <div>
              {
                productsInCart.map(product => (
                  <div key={product.slug} className="flex mb-5">
                    <Image
                      src={`/products/${product.images[0]}`}
                      width={100}
                      height={100}
                      alt={product.title}
                      className="mr-5 rounded"
                      style={{
                        width: '100px',
                        height: '100px',
                      }}
                    />
                    <div>
                      <p className="font-semibold">{product.title}</p>
                      <p>${product.price} x 3</p>
                      <p className="font-bold">Subtotal: ${product.price * 3}</p>

                      <button className="underline mt-3">
                        Remover
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          {/* Checkout - Resumen de la compra */}
          <div className="bg-white rounded-xl shadow-xl p-7">

            <h2 className="text-2xl mb-2">Direccion de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Fermin Facchin</p>
              <p className="font-bold">Av. Siempre viva 123</p>
              <p>Col. Centro</p>
              <p>Alcaldia Cauhtemo</p>
              <p>Cuidad de Mexico</p>
              <p>CP 121212</p>
              <p>123.123.123</p>
            </div>
            {/* DIVISOR */}
            <div className=" w-full bg-gray-200 rounded mb-10 h-0.5" />

            <h2 className="text-2xl mb-2">Resumen de la orden</h2>
            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 articulos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span className="text-2xl mt-5">Total:</span>
              <span className="mt-5 text-2xl text-right">$ 100</span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <p className="mb-5">
                <span className="text-xs">
                  Al hacer clic en &quot;Colocar Orden&quot;, aceptas los <Link href="/terms" className="underline">terminos y condiciones</Link> de la tienda.
                </span>
              </p>

              <Link href={'/orders/123'}
                className="flex justify-center btn-primary ">
                Colocar Orden
              </Link>
            </div>

          </div>


        </div>

      </div>

    </div>
  );
}