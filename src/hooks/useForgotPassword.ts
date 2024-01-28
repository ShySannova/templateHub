import { useState } from "react"
import { FORGOT_PASSWORD_URL } from "../utils/constant"
import useToast from "./useToast"


const useForgotPassword = () => {

    const [email, setEmail] = useState("")
    const { handleToast } = useToast()

    const handleForgotPassword = async () => {
        try {
            const res = await fetch(FORGOT_PASSWORD_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            })

            const data = await res.json()

            handleToast(true, data.message)


        } catch (error) {
            console.error(error)
            handleToast(true, "sever error please try agian later")
        }




    }
    return { handleForgotPassword, setEmail }
}

export default useForgotPassword