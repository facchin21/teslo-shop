import { Title } from "@/components";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  }
}


export default function CategoryPage({ params }: Props) {
  const { id } = params;

  if( id === 'kids'){
    notFound();
  }
  
  return (
    <>
      <Title 
        title='Tienda'
        subtitle="Todos los productos"
        className=""/>
    </>
  );
}