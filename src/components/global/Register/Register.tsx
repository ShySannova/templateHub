import React from "react";
import "./Register.css";
import { Link, useLocation } from "react-router-dom";

interface RegisterProps {
    name: string;
    email: string;
    password: string;
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    handleRegister: () => void;
}

const Register: React.FC<RegisterProps> = ({ name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    handleRegister }) => {

    const pathname = useLocation().pathname;


    return (
        <main className="auth">

            <form id="sign_up">
                <h2>Register {pathname === "/register-developer" ? `{Developer}` : null}</h2>
                <div className="input-box">
                    {/* <!--Email and password input are contained here and within--> */}
                    <div className="username">
                        <input
                            id="username"
                            type="text"
                            onChange={(e) => {
                                e.preventDefault();
                                setName(e.target.value);
                            }}
                            required
                        />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="email">
                        <input
                            id="email"
                            type="email"
                            onChange={(e) => {
                                e.preventDefault();
                                setEmail(e.target.value);
                            }}
                            autoComplete="true"
                            required
                        />
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className="password">
                        <input
                            id="confirm_password"
                            type="password"
                            onChange={(e) => {
                                e.preventDefault();
                                setPassword(e.target.value);
                            }}
                            required
                        />
                        <label htmlFor="confirm_password">Password</label>
                    </div>
                </div>

                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        handleRegister();
                    }}
                    disabled={!name || !email || !password}>
                    Register
                </button>

                <p>
                    Already have an account,
                    &nbsp;
                    <Link to={"/login"}>Sign In</Link>
                    &nbsp;
                    here
                </p>
            </form>
        </main>

    );
};

export default Register;
