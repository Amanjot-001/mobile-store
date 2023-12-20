import { LoginWrapper } from "../assets/styles/login";
import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mode, setMode] = useState(true);

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
                        document.querySelector('.pass input').value = '';
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
                document.querySelector('.pass input').value = '';
                document.querySelector('.username input').placeholder = 'Username already exists';
            }
        } catch (error) {
            console.error('Error checking user existence:', error);
        }
    };

    const handleLogin = async () => {
        try {
            const loginUser = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
            if (loginUser.status === 200) {
                console.log('Login successful');
            } else {
                document.querySelector('.username input').value = '';
                document.querySelector('.pass input').value = '';
                document.querySelector('.username input').placeholder = 'Invalid username or password';
            }

        } catch (error) {
            console.error('Error loggin in user:', error);
        }
    }

    const handleValidation = () => {
        if (username.length === 0) {
            document.querySelector(".username input").placeholder =
                "Enter a username";
        }

        if (username.length === 25) {
            document.querySelector(".username input").placeholder =
                "Enter lessthan 25 chars";
        }

        if (password.length === 0) {
            document.querySelector(".pass input").placeholder =
                "Enter a password";
        }

        if (password.length === 50) {
            document.querySelector(".pass input").placeholder =
                "Enter lessthan 50 chars";
        }

        if (username.length !== 0 && password.length !== 0) {
            if (!mode) {
                handleRegister();
            } else {
                handleLogin();
            }
        }
    }

    const handleChangeMode = () => {
        setUsername('');
        setPassword('');
        setMode((prev) => !prev); 
      };

    return (
        <LoginWrapper>
            <div className="heading">
                {mode ? 'Login' : 'Register'}
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
                {mode ? 'Login' : 'Create'}
            </div>
            <div className="down-sec" onClick={handleChangeMode}>
                {mode ? 'Create a User' : 'Login instead'}
            </div>
        </LoginWrapper>
    )
}

export default Login;