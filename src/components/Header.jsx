import { HeaderWrapper, LeftSection, Logo, RightSection } from "../assets/styles/header";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

const Header = () => {
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <HeaderWrapper className="flex justify-between items-center">
            <LeftSection className="flex">
                <div className="android">
                    Android
                </div>
                <div className="ios">
                    ios
                </div>
            </LeftSection>
            <Logo>
                <NavLink className='links' to='/'>
                    Mobile-store
                </NavLink>
            </Logo>
            <RightSection className="flex">
                <NavLink className='links' to='/login'>
                    <div className="login-btn">
                        Login
                    </div>
                </NavLink>
                <NavLink className='links' to='/cart'>
                    <div className="cart-btn">
                        Cart ({cartItems.length})
                    </div>
                </NavLink>
            </RightSection>
        </HeaderWrapper>
    )
}

export default Header;