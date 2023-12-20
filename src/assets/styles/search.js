import styled from "styled-components";

export const SearchWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const SearchDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 0.5rem;
    
    input {
        border: 1px solid black;
        border-radius: 5px;
        outline: none;
        padding: 0.5rem;
    }

    button {
        gap: 0.5rem;
        border: 1px solid black;
        border-radius: 5px;
        padding: 0.2rem;
        color: #fff;
    }

    @media (max-width: 769px) {
        font-size: 0.8rem;
    }

    @media (max-width: 480px) {
        font-size: 0.6rem;
    }
`;

export const FilterDiv = styled.div`
    button {
        gap: 0.5rem;
        border: 1px solid black;
        border-radius: 5px;
        padding: 0.2rem;
        color: #fff;
    }

    @media (max-width: 769px) {
        font-size: 0.8rem;
    }

    @media (max-width: 480px) {
        font-size: 0.6rem;
    }
`