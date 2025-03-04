import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function LoginModal({ isOpen, closeModal, handleLogin }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.loginEmail.value;
        const password = e.target.loginPassword.value;
        console.log("Login attempt with:", { email, password });
        alert("Login successful!");
        handleLogin("User"); // Mock name; adjust with your new code
    };

    return (
        <div className={`modal ${isOpen ? "active" : ""}`} onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-modal" onClick={closeModal}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
                <h2>Login</h2>
                <form id="loginForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="loginEmail">Email</label>
                        <input type="email" id="loginEmail" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="loginPassword">Password</label>
                        <input type="password" id="loginPassword" required />
                    </div>
                    <div className="form-group remember-me">
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button type="submit" className="btn-primary">Login</button>
                    <p className="form-footer">
                        Don't have an account? <a href="#">Sign up</a>
                    </p>
                    <p className="form-footer">
                        <a href="#">Forgot password?</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginModal;