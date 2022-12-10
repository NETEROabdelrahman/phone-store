import { useHistory } from "react-router-dom";
import Title from "../components/Title";
import { useGlobalContext } from "../Context";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import EmptyCart from "./EmptyCart";

const Cart = () => {
    const { cart } = useGlobalContext();
    const history = useHistory()
    
    console.log(cart)
    return ( 
        <>
        {!cart.length>0&&<EmptyCart />}
        
    
        {cart.length>0&&<section>
            <Title name='your' title='cart' />
            <CartColumns />
            
            {cart.map((item) => {
                console.log(item)
                return (
                    
                    <CartItem {...item} key={item.id} />
                    
                    
                    
                    )
            })
                
                }
                <CartTotals history={history}  />
        </section>}
        </>
     );
}
 
export default Cart;