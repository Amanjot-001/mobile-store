import styled from "styled-components";

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60vh;
    gap: 1rem;

    .heading {
        font-family: futura, sans-serif;
        font-size: 2rem;
    }

    .username, .pass {
        display: flex;
        flex-direction: column;
    }

    label {
        font-family: sans-serif;
    }

    input {
        font-family: sans-serif;
        padding: 0.5rem;
        outline: none;
        border: 1px solid #000;
        border-radius: 5px;
    }

    .auth-btn, .down-sec {
        font-family: sans-serif;
        font-weight: 800;
        text-decoration: underline;
        cursor: pointer;
    }

    @media (max-width: 480px) {
        .heading {
            font-size: 1.5rem;
        }

        label {
            font-size: 0.8rem;
        }

        input {
            padding: 0.3rem;
        }

        .auth-btn, .down-sec {
            font-size: 0.9rem;
        }
    }
`