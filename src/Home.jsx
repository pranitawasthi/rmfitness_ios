import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext"; // Adjust the import path as needed
import "./Home.css"; // Import CSS for styling

function Home() {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="home-container">
            {user ? (
                <>
                    <h1 className="home-title">Welcome, {user.name}!</h1>
                    <p className="home-subtitle">What would you like to do today?</p>

                    <button
                        className="home-button-primary"
                        onClick={() => navigate("/status")}
                    >
                        View Status
                    </button>

                    <button
                        className="home-button-primary"
                        onClick={() => navigate("/attendance")}
                    >
                        Mark Attendance
                    </button>

                    {/* <button
                        className="home-button-primary"
                        onClick={() => navigate("/profile")}
                    >
                        Profile
                    </button> */}

                    <button
                        className="home-button-outline"
                        onClick={logout}
                    >
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <h1 className="home-title">Welcome to RM FITNESS!</h1>
                    <p className="home-subtitle">Log in to access personalized features:</p>

                    <button
                        className="home-button-primary"
                        onClick={() => navigate("/login")}
                    >
                        Login / Sign Up
                    </button>

                    {/* <button
                        className="home-button-outline"
                        onClick={() => navigate("/status")}
                    >
                        View Public Status
                    </button> */}
                </>
            )}
        </div>
    );
}

export default Home;