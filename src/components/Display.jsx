import styled from "styled-components";
import Card from "./Card";
import Data from "../utils/db";

const DisplayWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
`;

const Display = () => {
    return (
        <DisplayWrapper>
            {Data.map((entry) => (
                <Card key={entry.id} data={entry} />
            ))}
        </DisplayWrapper>
    )
}

export default Display;