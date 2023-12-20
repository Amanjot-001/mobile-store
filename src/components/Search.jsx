import styled from "styled-components";
import Filter from "./Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
    
`

const Search = () => {
    const filterOptions = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ];
    
    return (
        <SearchWrapper>
            <SearchDiv>
                To Search:
                <input type="text" />
                <button className="bg-sky-800 flex justify-center items-center">
                    Enter
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
            </SearchDiv>
            <FilterDiv>
                <Filter title="OS" entries={filterOptions}/>
                <Filter title="Processor" entries={filterOptions}/>
                <Filter title="Storage" entries={filterOptions}/>
                <Filter title="Memory" entries={filterOptions}/>
            </FilterDiv>
        </SearchWrapper>
    )
}

export default Search;