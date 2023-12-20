import styled from "styled-components";
import Filter from "./Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { osFilter, processorFilter, storageFilter, memoryFilter } from "../utils/filterOptions";

const SearchWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const SearchDiv = styled.div`
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
`;

const FilterDiv = styled.div`
    button {
        gap: 0.5rem;
        border: 1px solid black;
        border-radius: 5px;
        padding: 0.2rem;
        color: #fff;
    }
`

const Search = () => {
    
    return (
        <SearchWrapper>
            <SearchDiv>
                To Search :
                <input type="text" />
                <button className="bg-sky-800 flex justify-center items-center">
                    Enter
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
            </SearchDiv>
            <FilterDiv className="flex flex-col justify-center items-start gap-2">
                <Filter title="OS" entries={osFilter}/>
                <Filter title="Processor" entries={processorFilter}/>
                <Filter title="Storage" entries={storageFilter}/>
                <Filter title="Memory" entries={memoryFilter}/>
                <button className="bg-sky-800 flex justify-center items-center">
                    Filter
                    <FontAwesomeIcon icon={faFilter} />
                </button>
            </FilterDiv>
        </SearchWrapper>
    )
}

export default Search;