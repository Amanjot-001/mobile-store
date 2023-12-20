import { LoginWrapper } from "../assets/styles/login";
import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const checkUserExist = await fetch('http://localhost:8080/checkUser', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
            if (checkUserExist.status === 404) {
                try {
                    const registerUser = await fetch('http://localhost:8080/register', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ username }),
                    });
                    if (registerUser.status === 201) {
                        document.querySelector('.username input').value = '';
                        document.querySelector('.password input').value = '';
                        document.querySelector('.username input').placeholder = 'Registered succesfully';
                    } else {
                        console.log("Failed to register user");
                    }
                } catch (error) {
                    console.error('Error registering user:', error);
                }
            }
            else if (checkUserExist.status === 200) {
                document.querySelector('.username input').value = '';
                document.querySelector('.password input').value = '';
                document.querySelector('.username input').placeholder = 'Username already exists';
            }
        } catch (error) {
            console.error('Error checking user existence:', error);
        }
    };

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
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
            </div>
            <div className="pass">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </div>
            <div className="auth-btn" onClick={handleValidation}>
                Create
            </div>
            <div className="down-sec">
                Login instead
            </div>
        </LoginWrapper>
    )
}

export default Login;