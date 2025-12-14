import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useToast from "./useToast";
import { REGISTER_DEVELOPER_URL, REGISTER_EMPLOYEE_URL, REGISTER_URL } from "../utils/constant";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import useRefresh from "./useRefresh";

const useRegister = () => {
    const [employer, setEmployer] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const userInfo = useSelector(
        (state: RootState) => state?.auth?.userInfo
    );

    const pathname = useLocation().pathname;

    const navigate = useNavigate();

    const { handleToast } = useToast();
    const { handleRefresh } = useRefresh();

    const handleRegister = async () => {
        try {
            const handleUrl = pathname === "/register-developer" ? REGISTER_DEVELOPER_URL : REGISTER_URL;
            const res = await fetch(handleUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
                handleToast(true, data.message);
                navigate("/login");
            } else {
                console.error("User Exists...!:", res.statusText);
                handleToast(true, "User Exists...!:");
            }
        } catch (error) {
            console.error("Error during login:", error);
            handleToast(true, "Error during login");
        }
    };


    const handleEmployeeRegister = async (): Promise<boolean> => {
        try {
            const res = await fetch(REGISTER_EMPLOYEE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password, employerId: employer ? employer : userInfo?._id }),
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
                handleToast(true, data.message);
                return true
            } else {
                if (res.status === 401) {
                    const success = await handleRefresh();
                    if (success) {
                        return handleEmployeeRegister()
                    } else {
                        handleToast(true, "No Employees Found")
                        console.error("No Employees Found", res.statusText);
                        return false
                    }
                }
                const data = await res.json();
                handleToast(true, data.message)
                return false

            }
        } catch (error) {
            console.error("Some Internal Error:", error);
            handleToast(true, "Some Internal Error");
            return false
        }
    };

    return {
        employer,
        name,
        email,
        password,
        setEmployer,
        setName,
        setEmail,
        setPassword,
        handleRegister,
        handleEmployeeRegister,
    };
};

export default useRegister;
