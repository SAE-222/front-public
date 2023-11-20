import Product from "@/components/product/product"

interface ProductPageProps {
  params: { productId: string };
}

const ProductPage = ({ params }: ProductPageProps) => {
  return (
    <div>
      <Product productId={+params.productId} />
    </div>
  )
}

export default ProductPage