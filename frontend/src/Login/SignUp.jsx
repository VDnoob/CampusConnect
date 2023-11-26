import React, { useState } from "react";
import img from "../img.jpg";
import { Link, useNavigate } from "react-router-dom";
import RadioButton from "./RadioButton";

function SignUpForm() {
    const navigate = useNavigate();
    const [isFormSubmitted, setFormSubmitted] = useState(false);
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "", // New field for confirm password
    });

    const [value, setValue] = useState("Student");

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value,
        });
    };


    const handleOnSubmit = async (evt) => {
        evt.preventDefault();

        const { firstName, lastName, email, password, confirmPassword } = state;

        // Basic required field validation
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert("All fields are required");
            return;
        }

        // Password and confirmPassword match validation
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const signupData = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType: value,
        };
        localStorage.setItem('signupData', JSON.stringify(signupData));

        try {
            const response = await fetch("https://campusconnectbackend.onrender.com/api/v1/auth/sendotp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    accountType: value,
                }),
            });

            const result = await response.json();

            if (result.success) {
                console.log(result);
                alert("OTP has been sent to your email");
                // Optionally, redirect the user or perform other actions.
                setFormSubmitted(true);
                navigate("/login/OTP"); // Navigate to OTP page
            } else {
                alert("Error registering user");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Internal server error");
        }
    };

    return (
        <div className="form-container sign-up-container">
            <form onSubmit={handleOnSubmit} className="form">
                <div className="logo">
                    <p>
                        <img src={img} alt=" " /> Campus connect
                    </p>
                </div>
                <h1>Create Account</h1>
                <div id="fullname">
                    <input
                        type="text"
                        name="firstName"
                        className="i1"
                        value={state.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        className="i2"
                        value={state.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        required
                    />
                </div>
                <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                    placeholder="Password"
                    id="password"
                    required
                />
                <input
                    type="password"
                    name="confirmPassword"
                    value={state.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    id="confirm_password"
                    required
                />
                <RadioButton value={value} handleChange={(evt) => setValue(evt.target.value)} />
                {isFormSubmitted ? (
                    <Link to="/OTP" style={{ textDecoration: 'none' }}>
                        <button type="submit">Sign Up</button>
                    </Link>
                ) : (
                    <button type="submit" id="bt">Sign Up</button>
                )}
                <div className="alt-s">
                    <span>OR</span>
                </div>
                <div className="social-container">
                    <a href="#" className="social">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="#" className="social">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;