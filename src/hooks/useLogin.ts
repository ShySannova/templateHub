import useToast from "./useToast";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated } from "../store/authSlice";
import { LOGIN_URL } from "../utils/constant";
import useCookiesRemover from "./useCookiesRemover";
import usePersist from "./usePersist";
import { RootState } from "../store/rootReducer";

const useLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isTrusted, setIsTrusted] = useState(false);
    const dispatch = useDispatch();
    const { handleToast } = useToast();

<<<<<<< HEAD
    const {handleCookieRemover} = useCookiesRemover()

    const [persist] =usePersist()
=======
    const { handleCookieRemover } = useCookiesRemover()

    const [persist] = usePersist()
>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );

<<<<<<< HEAD
    useEffect(()=>{
        if(!persist && !isAuthenticated) handleCookieRemover()
    },[])
    
=======
    useEffect(() => {
        if (!persist && !isAuthenticated) handleCookieRemover()
    }, [persist, isAuthenticated, handleCookieRemover])

>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936
    const handleLogin = async () => {
        try {
            const res = await fetch(LOGIN_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
<<<<<<< HEAD
                credentials:"include"
=======
                credentials: "include"
>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936
            });

            if (res.ok) {
                const data = await res.json();
<<<<<<< HEAD
                const {userInfo}=data
                isTrusted?localStorage.setItem("persist","true"):localStorage.setItem("persist","false")
                dispatch(setAuthenticated({isAuthenticated:true,userInfo}))
                handleToast(true, data.message);
                
=======
                const { userInfo } = data
                isTrusted ? localStorage.setItem("persist", "true") : localStorage.setItem("persist", "false")
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

>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936
            } else {
                handleToast(true, "Login failed");
                console.error("Login failed:", res.statusText);
            }
        } catch (error) {
            handleToast(true, "Error during login");
            console.error("Error during login:", error);
        }
    };

<<<<<<< HEAD
    return { email, password, setEmail, setPassword, handleLogin , setIsTrusted};
=======
    return { email, password, setEmail, setPassword, handleLogin, handleDemoLogin, setIsTrusted };
>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936
};

export default useLogin;
