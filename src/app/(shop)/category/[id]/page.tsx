import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
// import { notFound } from "next/navigation";

interface Props {
  params: {
    id: Category;
  }
}
const products = initialData.products;


export default function CategoryPage({ params }: Props) {
  const { id } = params;
  const productsFiltered = products.filter(product => product.gender === id);

  const labels: Record<Category, string> = {
    'men': 'para hombres',
    'women': 'para mujeres',
    'kid': 'para niños',
    'unisex' : 'para todos'
  }

  // if( id === 'kids'){
  //   notFound();
  // }

  return (
    <>
      <Title
        title={`Articulos de ${labels[id]}`}
        subtitle='Todos los productos'
        className="" />

      <ProductGrid products={productsFiltered} />
    </>
  );
}