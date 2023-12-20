import PropTypes from 'prop-types';
import styled from "styled-components";

const FilterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Filter = ({ entries, title }) => {
    return (
        <FilterWrapper>
            <label>{title}:</label>
            <select >
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
};

export default Filter;