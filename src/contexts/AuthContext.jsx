import { createContext, useEffect, useState } from "react";
import axios from "axios";

const SERVER_URL = "https://rmfitness-2.onrender.com";

// Provide a default value to avoid destructuring issues
export const AuthContext = createContext({
    user: null,
    setUser: () => {},
    signup: async () => {},
    login: async () => {},
    logout: () => {}
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userinfo = localStorage.getItem("userinfo");
        if (userinfo) {
            setUser(JSON.parse(userinfo)); // Load stored user data
        }
    }, []);

    const signup = async (formData) => {
        try {
            const { data } = await axios.post(`${SERVER_URL}/users/signup`, formData);
            localStorage.setItem("userinfo", JSON.stringify(data));
            setUser(data);
        } catch (error) {
            console.error("Signup error:", error);
        }
    };

    const login = async (formData) => {
        try {
            console.log("Form data:");
            const { data } = await axios.post(`${SERVER_URL}/users/login`, formData);
            localStorage.setItem("userinfo", JSON.stringify(data));
            setUser(data);
            return data; // Return the user data
        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed. Please try again.");
            return null;
        }
    };

    const logout = () => {
        localStorage.removeItem("userinfo");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
