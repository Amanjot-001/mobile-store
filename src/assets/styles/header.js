import styled from "styled-components"

export const HeaderWrapper = styled.div`
    color: #213875;
    border-bottom: 1px solid #dea1ea;

    .links {
    text-decoration: none;
    color: inherit;
}
`;

export const BaseDiv = styled.div`
    height: 100%;
    font-family: 'futura', sans-serif;
    div {
        font-size: 1.3rem;
        padding: 1rem;
        height: 100%;
    }

    @media (max-width: 769px) {
        div {
            font-size: 1.1rem;
            padding: 0.8rem;
        }
    }

    @media (max-width: 480px) {
        div {
            font-size: 1rem;
            padding: 0.6rem;
        }
    }
`

export const LeftSection = styled(BaseDiv)`
    div {
        cursor: pointer;
        border-right: 1px solid #dea1ea;
    }

    div:hover .underline{
        width: 100%;
    }
`;

export const Logo = styled.div`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5rem;
    cursor: pointer;

    @media (max-width: 769px) {
        font-size: 1.2rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const RightSection = styled(BaseDiv)`
    div {
        cursor: pointer;
        border-left: 1px solid #dea1ea;
    }
`;