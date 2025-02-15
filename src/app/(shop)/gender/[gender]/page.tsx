export const revalidate = 60;

import { getPaginatedProductWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";

import { Gender } from "@prisma/client";
import { redirect } from "next/navigation";


interface Props {
  params: {
    gender: string;
  },
  searchParams: {
    page?: string;
  }
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { gender } = params;

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } = await getPaginatedProductWithImages({
    page,
    gender: gender as Gender
  });

  if (products.length === 0) {
    redirect(`/gender/${gender}`)
  }

  const labels: Record<string, string> = {
    'men': 'para hombres',
    'women': 'para mujeres',
    'kid': 'para niños',
    'unisex': 'para todos'
  }

  // if( id === 'kids'){
  //   notFound();
  // }

  return (
    <>
      <Title
        title={`Articulos de ${labels[gender]}`}
        subtitle='Todos los productos'
        className="" />

      <ProductGrid products={products} />

      <Pagination
        totalPage={totalPages}
      />
    </>
  );
}