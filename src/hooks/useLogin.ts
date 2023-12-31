import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthenticated } from "../store/authSlice";
import useToast from "./useToast";

const useLogin = (apiUrl: string) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { handleToast } = useToast();

    const handleLogin = async () => {
        try {
            const res = await fetch(apiUrl + "login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
                console.log(data);
                dispatch(setAuthenticated(true));
                handleToast(true, data.message);
                navigate("/dashboard");
            } else {
                handleToast(true, "Login failed");
                console.error("Login failed:", res.statusText);
            }
        } catch (error) {
            handleToast(true, "Error during login");
            console.error("Error during login:", error);
        }
    };

    return { email, password, setEmail, setPassword, handleLogin };
};

export default useLogin;
