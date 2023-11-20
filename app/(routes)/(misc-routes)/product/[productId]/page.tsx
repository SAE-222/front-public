import Container from "@/components/container/container";
import Product from "@/components/product/product"

interface ProductPageProps {
  params: { productId: string };
}

const ProductPage = ({ params }: ProductPageProps) => {
  return (
    <Container>
      <Product productId={+params.productId} />
    </Container>
  )
}

export default ProductPage