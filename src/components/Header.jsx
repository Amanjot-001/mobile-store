import { HeaderWrapper, LeftSection, Logo, RightSection } from "../assets/styles/header";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import { logout } from "../utils/authSlice";

const Header = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const loggedIn = useSelector((store) => store.auth.isLoggedIn);
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            const logoutUser = await fetch('https://mobile-store-backend-x0wq.onrender.com/users/logout', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (logoutUser.status === 200) {
                console.log('Logout successful');
                dispatch(logout());
            }
        } catch (error) {
            console.error('Error in logout:', error);
        }
    }

    return (
        <HeaderWrapper className="flex justify-between items-center">
            <LeftSection className="flex">
                <div className="android">
                    Android
                </div>
                <div className="ios">
                    ios
                </div>
            </LeftSection>
            <Logo>
                <NavLink className='links' to='/'>
                    Mobile-store
                </NavLink>
            </Logo>
            <RightSection className="flex">
                <NavLink className='links' to={!loggedIn ? '/login' : '/'} onClick={!loggedIn ? null : handleLogout}>
                    <div className="login-btn">
                        {!loggedIn ? 'Login' : 'Logout'}
                    </div>
                </NavLink>
                <NavLink className='links' to='/cart'>
                    <div className="cart-btn">
                        Cart ({cartItems.length})
                    </div>
                </NavLink>
            </RightSection>
        </HeaderWrapper>
    )
}

export default Header;