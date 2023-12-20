import PropTypes from 'prop-types';
import { FilterWrapper } from '../assets/styles/filter';

const Filter = ({ entries, title, onFilterChange }) => {
    const handleFilterChange = (e) => {
        const selectedValue = e.target.value;
        onFilterChange(selectedValue);
    };

    return (
        <FilterWrapper className='flex justify-between items-center gap-1'>
            <label>{title} :</label>
            <select onChange={handleFilterChange}>
                <option value="">Select an option</option>
                {entries.map((entry, index) => (
                    <option key={index} value={entry.value}>
                        {entry.label}
                    </option>
                ))}
            </select>
        </FilterWrapper>
    )
}

Filter.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ).isRequired,
    title: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

export default Filter;