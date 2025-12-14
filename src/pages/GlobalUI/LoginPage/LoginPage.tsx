import "./LoginPage.css";
import { Link, Navigate } from "react-router-dom";
import useLogin from "../../../hooks/useLogin";
import { useState } from "react";
import useRoleAccess from "../../../hooks/useRoleAccess";


const LoginPage = () => {
    const { email, password, setEmail, setPassword, handleLogin, handleDemoLogin, setIsTrusted } = useLogin();


    const [isDemoLoginClicked, setisDemoLoginClicked] = useState<boolean>(false)


    const { userAccess, dashboardAccess } = useRoleAccess()

    if (dashboardAccess) return <Navigate to={"/dashboard"} />;
    if (userAccess) return <Navigate to={"/"} />


    return (
        <main className="auth">

            <form id="sign_in">
                <h2>Sign in</h2>
                {/* <!--Email and password input are contained here and within--> */}

                <div className="input-box">

                    <div className="email">
                        <input
                            id="email"
                            type="email"
                            autoComplete="true"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Enter email</label>
                    </div>
                    <div className="password">
                        <input
                            id="password"
                            type="password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Enter password</label>
                    </div>
                </div>




                <div className="trusted-check-container">
                    <input type="checkbox" name="checkbox" id="checkbox" onChange={(e) => { setIsTrusted(e.target.checked) }} />
                    <label htmlFor="checkbox">Trust this device</label>
                </div>
                <div>
                    <Link to={"/forgot-password"}>Forgot Password ?</Link>
                </div>
                <button
                    type="submit"
                    disabled={!email || !password}
                    onClick={(e) => {
                        e.preventDefault();
                        handleLogin();
                    }}>
                    Sign in
                </button>

                <button
                    type="submit"
                    disabled={isDemoLoginClicked}
                    onClick={(e) => {
                        e.preventDefault();
                        handleDemoLogin()
                        setisDemoLoginClicked(true)
                    }}>
                    {isDemoLoginClicked ? "Please Wait" : "Demo Admin"}
                </button>

                <p>
                    Don't have an account,
                    &nbsp;
                    <Link to={"/register"}>Register</Link>
                    &nbsp;
                    here
                </p>

            </form>
        </main>

    );
};

export default LoginPage;
