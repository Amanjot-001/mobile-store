import Card from "./Card";
import Data from "../utils/db";
import { DisplayWrapper } from "../assets/styles/display";
import Search from "./Search";
import { useEffect, useState } from "react";

const Display = () => {
    const [filteredData, setFilteredData] = useState(Data);
    const [osFilter, setOsFilter] = useState("");
    const [processorFilter, setProcessorFilter] = useState("");
    const [storageFilter, setStorageFilter] = useState("");
    const [memoryFilter, setMemoryFilter] = useState("");

    const handleSearch = (query) => {
        const newData = Data.filter((entry) =>
            entry.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(newData);
    };

    const handleFilterChange = (filterType, selectedValue) => {
        switch (filterType) {
            case "os":
                setOsFilter(selectedValue);
                break;
            case "processor":
                setProcessorFilter(selectedValue);
                break;
            case "storage":
                setStorageFilter(selectedValue);
                break;
            case "memory":
                setMemoryFilter(selectedValue);
                break;
            default:
                break;
        }
    };

    const applyFilters = () => {
        const newData = Data
            .filter(entry => !osFilter || entry.os === osFilter)
            .filter(entry => !processorFilter || entry.processor === processorFilter)
            .filter(entry => !storageFilter || entry.storage.includes(storageFilter))
            .filter(entry => !memoryFilter || entry.ram.includes(memoryFilter));

        setFilteredData(newData);
    };

    useEffect(() => {
        applyFilters();
    }, [osFilter, processorFilter, storageFilter, memoryFilter]);

    return (
        <>
            <Search onSearch={handleSearch} onFilterChange={handleFilterChange} onFilterApply={applyFilters}/>
            <DisplayWrapper>
                {filteredData.map((entry) => (
                    <Card key={entry.id} data={entry} />
                ))}
            </DisplayWrapper>
        </>
    )
}

export default Display;