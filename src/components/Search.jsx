import Filter from "./Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { osFilter, processorFilter, storageFilter, memoryFilter } from "../utils/filterOptions";
import { SearchWrapper, FilterDiv, SearchDiv } from "../assets/styles/search";
import { useState } from "react";

const Search = ({ onSearch, onFilterChange, onFilterApply }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = () => {
        onSearch(searchQuery);
    };

    const handleFilterChange = (filterType, selectedValue) => {
        onFilterChange(filterType, selectedValue);
    };

    const handleFilterApply = () => {
        onFilterApply();
    };

    return (
        <SearchWrapper>
            <SearchDiv>
                To Search :
                <input type="text" value={searchQuery} onChange={handleSearchInputChange}/>
                <button className="bg-sky-800 flex justify-center items-center" onClick={handleSearchSubmit}>
                    Enter
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </SearchDiv>
            <FilterDiv className="flex flex-col justify-center items-start gap-2">
                <Filter title="OS" entries={osFilter} onFilterChange={(value) => handleFilterChange("os", value)}/>
                <Filter title="Processor" entries={processorFilter} onFilterChange={(value) => handleFilterChange("processor", value)} />
                <Filter title="Storage" entries={storageFilter} onFilterChange={(value) => handleFilterChange("storage", value)} />
                <Filter title="Memory" entries={memoryFilter} onFilterChange={(value) => handleFilterChange("memory", value)} />
                <button className="bg-sky-800 flex justify-center items-center" onClick={handleFilterApply}>
                    Filter
                    <FontAwesomeIcon icon={faFilter} />
                </button>
            </FilterDiv>
        </SearchWrapper>
    )
}

export default Search;