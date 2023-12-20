import { CartWrapper } from "../assets/styles/cart";
import { useSelector } from "react-redux";
import Card from "./Card";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <CartWrapper>
            {cartItems.length > 0 ? cartItems.map((item) => (
                <Card key={item.id} data={item} />
            )) :
                <div className="empty-msg">
                    Add items to cart!
                </div>}
        </CartWrapper>
    )
}

export default Cart;