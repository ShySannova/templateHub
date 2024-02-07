import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useToast from "./useToast";
import { REQUEST_NEW_VERIFICATION_CODE_URL, VERIFY_ACCOUNT_URL } from "../utils/constant";


const useVerificationAccount = () => {
    const [code, setCode] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const [email] = useState(location?.state?.email)

    const { handleToast } = useToast()



    const handleVerfiyAccount = async () => {
        try {
            const res = await fetch(VERIFY_ACCOUNT_URL, {
                method: "POST",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify({ code, email }),
                credentials: "include"
            })

            const data = await res.json()

            if (data.success) {
                navigate("/login")
                handleToast(true, data.message)
            }
        } catch (error) {
            console.error(error)
        }

    }

    const handleNewVerificationCodeRequest = async () => {
        try {
            const res = await fetch(REQUEST_NEW_VERIFICATION_CODE_URL, {
                method: "POST",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify({ email }),
                credentials: "include"
            })

            const data = await res.json()
            if (data.success) {
                handleToast(true, data.message)
            }
        } catch (error) {
            console.error(error)
        }
    }
    return { code, setCode, email, handleVerfiyAccount, handleNewVerificationCodeRequest }
}

export default useVerificationAccount