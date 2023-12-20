import styled from "styled-components"

const HeaderWrapper = styled.div`
    padding: 1rem;
`;

const LeftSection = styled.div`
    div {
        width: 20px;
        height: 20px;
    }
`;

const Logo = styled.div`
  
`;

const RightSection = styled.div`
    display: flex;

    div {
        width: 20px;
        height: 20px;
    }
`;

const Header = () => {
    return (
        <HeaderWrapper className="flex justify-between items-center">
            <LeftSection className="flex">
                <div className="android"></div>
                <div className="ios"></div>
            </LeftSection>
            <Logo>
                Mobile-store
            </Logo>
            <RightSection className="flex">
                <div className="login-btn"></div>
                <div className="search-btn"></div>
                <div className="cart-btn"></div>
            </RightSection>
        </HeaderWrapper>
    )
}

export default Header;