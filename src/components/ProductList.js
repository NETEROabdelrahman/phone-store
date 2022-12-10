import Product from "./Product";
import styled from "styled-components";
import Title from "./Title";
import { useGlobalContext } from "../Context";
const ProductList = () => {
    const {products} = useGlobalContext()
    return ( 
        
        <ProductWrapper className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
                        {products.map((product) => {
                            return (
                                <Product {...product} key={product.id} />
                            )
                        })}
            </div>
          </div>
        </ProductWrapper>
        
     );
}
 
export default ProductList;

const ProductWrapper = styled.section``;