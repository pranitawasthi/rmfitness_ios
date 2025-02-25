import React, { useContext, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Import CSS for styling

export default function Signup() {
    const { signup } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        srno: '',
        name: '',
        Fathers: '',
        age: '',
        disease: '',
        Address: '',
        Contact: '',
        password: '',
        currplan: 'monthly',
    });

    const [modalVisible, setModalVisible] = useState(false);
    const plans = ['monthly', 'quarterly', 'half-yearly', 'yearly'];

    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        await signup(formData);
        navigate("/home");
    };

    return (
        <div className="signup-container">
            <h1 className="signup-title">Sign Up</h1>
            {['srno', 'name', 'Fathers', 'age', 'disease', 'Address', 'Contact', 'password'].map((field) => (
                <input
                    key={field}
                    type={field === 'password' ? 'password' : 'text'}
                    placeholder={field === 'Fathers' ? "Father's Name" : field.charAt(0).toUpperCase() + field.slice(1)}
                    value={formData[field]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    className="signup-input"
                />
            ))}

            <div className="dropdown" onClick={() => setModalVisible(true)}>
                <p className="dropdown-text">{formData.currplan.charAt(0).toUpperCase() + formData.currplan.slice(1)}</p>
            </div>

            {modalVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        {plans.map((plan) => (
                            <div
                                key={plan}
                                className="modal-item"
                                onClick={() => {
                                    handleChange('currplan', plan);
                                    setModalVisible(false);
                                }}
                            >
                                <p className="modal-item-text">{plan.charAt(0).toUpperCase() + plan.slice(1)}</p>
                            </div>
                        ))}
                        <button className="modal-close" onClick={() => setModalVisible(false)}>Cancel</button>
                    </div>
                </div>
            )}

            <button className="signup-button" onClick={handleSubmit}>Sign Up</button>
            <p className="login-link" onClick={() => navigate("/login")}>Already have an account? Login</p>
        </div>
    );
}