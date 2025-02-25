import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import Signup from "./Signup";
import Status from "./Status";
import Attendance from "./Attendance";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./Navbar";
import Home from "./Home";
// import Home from "./Home";

function App() {
    return (
      <AuthProvider>

     
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/status" element={<Status />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
        </AuthProvider>
    );
}

export default App;