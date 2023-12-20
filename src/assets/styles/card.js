import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    height: max-content;
    width: 25vw;

    .image {
        height: 30vh;
        width: 100%;

        img {
            height: 100%;
            width: 100%;

            object-fit: contain;
            object-position: center;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        gap: 0.2rem;
    }

    .name {
        font-family: 'dela-gothic-one', sans-serif;
        font-size: 1.2rem;
        color: #000;
        word-spacing: 5px;
    }

    .price {
        font-family: futura, sans-serif;
    }

    .add-btn {
        border: 1px solid #000;
        border-radius: 5px;
        padding: 0.1rem 0.3rem;
        color: #213875;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    .add-btn:hover {
        background-color: #075985;
        color: #fff;
    }

    @media (max-width: 769px) {
        .image {
            height: 25vh;
        }

        .name {
            font-size: 1rem;
        }

        .add-btn {
            padding: 0.1rem 0.2rem;
            font-size: 0.8rem;
        }
    }

    @media (max-width: 480px) {
        .image {
            height: 20vh;
        }

        .name {
            font-size: 0.9rem;
        }

        .price {
            font-size: 0.8rem;
        }

        .add-btn {
            padding: 0.1rem 0.2rem;
            font-size: 0.65rem;
        }
    }

`;