import React, { useContext, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "./LoginScreen.css";

export default function LoginScreen() {
    const navigate = useNavigate();
    const {login} = useContext(AuthContext); // Get context safely
    // const { login } = authContext; // Now extract login

    const [formData, setFormData] = useState({
        srno: "",
        password: ""
    });

    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent form from refreshing the page
        console.log(formData)
        const userData = await login(formData); // Use returned user data
        if (userData) {
            console.log(userData);
            navigate("/status");
        } else {
            alert("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-title">LOGIN</h1>
            <form onSubmit={handleSubmit}> {/* Wrap inside a form */}
                <input
                    type="number"
                    placeholder="SRNO"
                    value={formData.srno}
                    onChange={(e) => handleChange("srno", e.target.value)}
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    className="login-input"
                />
                <button className="login-button" type="submit">Login</button> {/* Use type="submit" */}
            </form>
            <p className="signup-text">
                Don't have an account?{' '}
                <span className="link" onClick={() => navigate("/signup")}>Sign Up</span>
            </p>
        </div>
    );
}
