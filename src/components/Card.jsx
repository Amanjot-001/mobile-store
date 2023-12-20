import PropTypes from 'prop-types';
import { CardWrapper } from '../assets/styles/card';

const Card = ({ data }) => {
    return (
        <CardWrapper>
            <div className="image">
                <img src={data.image_url} alt="phone-image" />
            </div>
            <div className="content">
                <div className="name">
                    {data.name}
                </div>
                <div className="price">
                    Rs. {data.price[0]}
                </div>
                <div className="add-btn">
                    + Add
                </div>
            </div>
        </CardWrapper>
    )
}

Card.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Card;