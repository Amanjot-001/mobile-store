import { HeaderWrapper, LeftSection, Logo, RightSection } from "../assets/styles/header";

const Header = () => {
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
                    Cart
                </div>
            </RightSection>
        </HeaderWrapper>
    )
}

export default Header;