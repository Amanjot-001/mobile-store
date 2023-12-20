import styled from "styled-components";

export const ExpandWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    height: 80vh;

    .image {
        width: 50%;
        height: 100%;
        padding: 1rem;

        img {
            width: 100%;
            height: 100%;

            object-fit: contain;
            object-position: center;
        }
    }

    .close {
        display: flex;
        font-size: 1.5rem;
        width: max-content;
        height: max-content;
        cursor: pointer;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        position: relative;

        .image {
            margin: auto;
        }

        .close {
            position: absolute;
            top: 0;
            right: 0;
            margin-right: 0.8rem;
            z-index: 2;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-content: start;
    gap: 1rem;
    padding: 0.5rem;

    div {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1rem;
        font-family: futura, sans-serif;
        font-size: 1.5rem;

        span {
            font-family: sans-serif;
            font-size: 1.2rem;
        }
    }

    @media (max-width: 480px) {
        div {
            font-size: 1.2rem;

            span {
                font-size: 1rem;
            }
        }
    }
`;