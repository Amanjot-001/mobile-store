import PropTypes from 'prop-types';
import { CardWrapper } from '../assets/styles/card';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';
import { NavLink } from 'react-router-dom';

const Card = ({ data }) => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const isAdded = cartItems.some(item => item.id === data.id);

    const handleAddItem = (dataToChange) => {
        if (!isAdded)
            dispatch(addItem(dataToChange));
        else
            dispatch(removeItem(dataToChange));
    }
    return (
        <CardWrapper>
            <NavLink to={`/${data.id}`}>
                <div className="image">
                    <img src={data.image_url} alt="phone-image" />
                </div>
            </NavLink>
            <div className="content">
                <NavLink to={`/${data.id}`}>
                    <div className="name">
                        {data.name}
                    </div>
                </NavLink>
                <div className="price">
                    Rs. {data.price[0]}
                </div>
                <div className="add-btn" onClick={() => handleAddItem(data)}>
                    {isAdded ? '- Remove' : '+ Add'}
                </div>
            </div>
        </CardWrapper>
    )
}

Card.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Card;