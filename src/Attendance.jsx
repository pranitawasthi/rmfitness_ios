import React, { useState, useContext } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { AuthContext } from "./contexts/AuthContext";
import axios from "axios";
import "./Attendance.css"; // Import CSS for styling
import { useNavigate } from "react-router-dom";

export default function Attendance() {
    const [scanned, setScanned] = useState(false);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const markAttendance = async () => {
        if (!user || !user.token) {
            alert("Please log in first!");
            return;
        }

        try {
            const { data } = await axios.post("https://rmfitness-2.onrender.com/attendance/create", {
                token: user.token,
            });
            alert("Attendance marked successfully!");
            console.log("IST Entry Time:", new Date(data.attentry.entryTime).toLocaleString("en-IN"));
            navigate("/home");
        } catch (error) {
            console.error("Attendance error:", error.response?.data || error.message);
            alert("Failed to mark attendance.");
        } finally {
            setTimeout(() => setScanned(false), 2000);
        }
    };

    const handleScan = (result) => {
        if (result && !scanned) {
            setScanned(true);
            console.log(result)
            if (result[0].rawValue === 'rmfitnessattendancescanner') {
                markAttendance();
                
                
            } else {
                alert("Invalid QR Code. Please try again.");
            }
        }
    };

    return (
        <div className="attendance-container">
            {/* <h1>QR Attendance Scanner</h1> */}
            <Scanner
                onScan={handleScan}
                onError={(error) => console.error(error?.message)}
                constraints={{ facingMode: "environment" }} // Use the rear camera
                scanDelay={300}
                styles={{ width: "100%", maxWidth: "300px", margin: "0 auto" }}
            />
            {scanned && <p>Scanning...</p>}
        </div>
    );
}