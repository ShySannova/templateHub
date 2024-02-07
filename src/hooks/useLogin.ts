import useToast from "./useToast";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated } from "../store/authSlice";
import { LOGIN_URL } from "../utils/constant";
import useCookiesRemover from "./useCookiesRemover";
import usePersist from "./usePersist";
import { RootState } from "../store/rootReducer";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isTrusted, setIsTrusted] = useState(false);
    const dispatch = useDispatch();
    const { handleToast } = useToast();

    const { handleCookieRemover } = useCookiesRemover()

    const [persist] = usePersist()
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );

    useEffect(() => {
        if (!persist && !isAuthenticated) handleCookieRemover()
    }, [persist, isAuthenticated, handleCookieRemover])

    const handleLogin = async () => {
        try {
            const res = await fetch(LOGIN_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
                credentials: "include"
            });

            if (res.ok) {
                const data = await res.json();
                const { userInfo } = data
                isTrusted ? localStorage.setItem("persist", "true") : localStorage.setItem("persist", "false")
                dispatch(setAuthenticated({ isAuthenticated: true, userInfo }))
                handleToast(true, data.message);

            } else if (res.status === 302) {
                const data = await res.json();
                navigate(data.url, { state: { email } })
            } else {
                handleToast(true, "Login failed");
                console.error("Login failed:", res.statusText);
            }
        } catch (error) {
            handleToast(true, "Error during login");
            console.error("Error during login:", error);
        }
    };
    const handleDemoLogin = async () => {
        try {
            const res = await fetch(LOGIN_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: "demoAdmin@nomail.com", password: "12345678" }),
                credentials: "include"
            });

            if (res.ok) {
                const data = await res.json();
                const { userInfo } = data
                localStorage.setItem("persist", "true")
                dispatch(setAuthenticated({ isAuthenticated: true, userInfo }))
                handleToast(true, data.message);

            } else {
                handleToast(true, "Login failed");
                console.error("Login failed:", res.statusText);
            }
        } catch (error) {
            handleToast(true, "Error during login");
            console.error("Error during login:", error);
        }
    };

    return { email, password, setEmail, setPassword, handleLogin, handleDemoLogin, setIsTrusted };
};

export default useLogin;
