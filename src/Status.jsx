import React, { useContext, useEffect } from "react";
import { AuthContext } from "./contexts/AuthContext";
import "./Status.css"; // Import CSS for styling

const Status = () => {
    const { user } = useContext(AuthContext);

    useEffect(() => {
        console.log(user);
    }, [user]);

    const handleRefresh = () => {
        alert("Notice: Login again if your plan is updated.");
    };

    return (
        <div className="status-container">
            <h1 className="status-header">User Status</h1>
            {user ? (
                <>
                    <div className="status-item">
                        <p className="status-label">Name:</p>
                        <p className="status-value">{user.name || "N/A"}</p>
                    </div>
                    <div className="status-item">
                        <p className="status-label">Sr No:</p>
                        <p className="status-value">{user.srno || "N/A"}</p>
                    </div>
                    <div className="status-item">
                        <p className="status-label">Current Plan:</p>
                        <p className="status-value">{user.currplan || "N/A"}</p>
                    </div>
                    <div className="status-item">
                        <p className="status-label">Subscription Start Date:</p>
                        <p className="status-value">
                            {user.starting_date
                                ? new Date(user.starting_date).toLocaleDateString()
                                : "N/A"}
                        </p>
                    </div>
                    <div className="status-item">
                        <p className="status-label">Subscription End Date:</p>
                        <p className="status-value">
                            {user.ending_date
                                ? new Date(user.ending_date).toLocaleDateString()
                                : "N/A"}
                        </p>
                    </div>
                    <div className="status-item">
                        <p className="status-label">Remaining Days:</p>
                        <p className="status-value">
                            {user.ending_date
                                ? Math.ceil(
                                      (new Date(user.ending_date).getTime() - new Date().getTime()) /
                                          (1000 * 60 * 60 * 24)
                                  )
                                : "N/A"}{" "}
                            days
                        </p>
                    </div>
                    <button className="refresh-button" onClick={handleRefresh}>
                        Refresh
                    </button>
                </>
            ) : (
                <p className="status-info">No user data available.</p>
            )}
        </div>
    );
};

export default Status;