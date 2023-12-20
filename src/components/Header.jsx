import { HeaderWrapper, LeftSection, Logo, RightSection } from "../assets/styles/header";
import { useSelector } from 'react-redux';

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
                Mobile-store
            </Logo>
            <RightSection className="flex">
                <div className="login-btn">
                    Login
                </div>
                <div className="cart-btn">
                    Cart ({cartItems.length})
                </div>
            </RightSection>
        </HeaderWrapper>
    )
}

export default Header;