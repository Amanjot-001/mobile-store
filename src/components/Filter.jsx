import PropTypes from 'prop-types';
import styled from "styled-components";

const FilterWrapper = styled.div`
    width: 100%;

    select {
        background-color: #075985;
        color: #fff;
        padding: 0.3rem 0.5rem;
        border: none;
        border-radius: 5px;
        outline: none;
    }

    option {
        color: #000;
        background-color: #5894b4;
    }
`

const Filter = ({ entries, title }) => {
    return (
        <FilterWrapper className='flex justify-between items-center gap-1'>
            <label>{title} :</label>
            <select>
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