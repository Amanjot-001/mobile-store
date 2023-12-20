import styled from "styled-components"

const HeaderWrapper = styled.div`
    color: #213875;
    border-bottom: 1px solid #dea1ea;
`;

const BaseDiv = styled.div`
    height: 100%;
    font-family: 'futura', sans-serif;
    div {
        font-size: 1.3rem;
        padding: 1rem;
        height: 100%;
    }
`

const LeftSection = styled(BaseDiv)`
    div {
        cursor: pointer;
        border-right: 1px solid #dea1ea;
    }

    div:hover .underline{
        width: 100%;
    }
`;

const Logo = styled.div`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5rem;
`;

const RightSection = styled(BaseDiv)`
    div {
        cursor: pointer;
        border-left: 1px solid #dea1ea;
    }
`;

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