import Card from "./Card";
import Data from "../utils/db";
import { DisplayWrapper } from "../assets/styles/display";

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