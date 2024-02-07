import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToast from "./useToast";
import { REGISTER_DEVELOPER_URL, REGISTER_EMPLOYEE_URL, REGISTER_URL } from "../utils/constant";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";

const useRegister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const userInfo = useSelector(
        (state: RootState) => state?.auth?.userInfo
    );

    const navigate = useNavigate();

    const { handleToast } = useToast();

    const handleRegister = async () => {
        try {
            const res = await fetch(REGISTER_URL, {
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

    const handleDeveloperRegister = async () => {
        try {
            const res = await fetch(REGISTER_DEVELOPER_URL, {
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
            } else {
                console.error("User Exists...!:", res.statusText);
                handleToast(true, "User Exists...!:");
            }
        } catch (error) {
            console.error("Error during login:", error);
            handleToast(true, "Error during login");
        }
    };

    const handleEmployeeRegister = async () => {
        try {
            const res = await fetch(REGISTER_EMPLOYEE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password, employerId: userInfo?._id }),
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
                handleToast(true, data.message);
            } else {
                console.error("User Exists...!:", res.statusText);
                handleToast(true, "User Exists...!:");
            }
        } catch (error) {
            console.error("Error during login:", error);
            handleToast(true, "Error during login");
        }
    };

    return {
        name,
        email,
        password,
        setName,
        setEmail,
        setPassword,
        handleRegister,
        handleDeveloperRegister,
        handleEmployeeRegister,
    };
};

export default useRegister;
