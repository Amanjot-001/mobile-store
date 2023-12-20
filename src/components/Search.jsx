import Filter from "./Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { osFilter, processorFilter, storageFilter, memoryFilter } from "../utils/filterOptions";
import { SearchWrapper, FilterDiv, SearchDiv } from "../assets/styles/search";

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