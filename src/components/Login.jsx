import { LoginWrapper } from "../assets/styles/login";

const Login = () => {
    return (
        <LoginWrapper>
            <div className="heading">
                Register
            </div>
            <div className="username">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    placeholder="Enter your username"
                    id="username"
                />
            </div>
            <div className="pass">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    id="password"
                />
            </div>
            <div className="auth-btn">
                Create
            </div>
            <div className="down-sec">
                Login instead
            </div>
        </LoginWrapper>
    )
}

export default Login;