import styled from "styled-components";

export const CartWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    .empty-msg {
        font-family: 'dela-gothic-one', sans-serif;
        font-size: 1.2rem;
        color: #000;
        word-spacing: 5px;
    }
`;
