import React from "react"
import { Navigate } from "react-router-dom";
import useVerificationAccount from "../../../hooks/useVerificationAccount";


const VerifyAccountPage: React.FC = () => {

    const { setCode, email, handleVerfiyAccount, handleNewVerificationCodeRequest } = useVerificationAccount()

    if (!email) return <Navigate to="/" />


    return (
        <main>
            <section>
                <h2>You Need To Verify Your Account To Enjoy Our Services</h2>
                <div>
                    <input type="text" onChange={(e) => { setCode(e.target.value) }} placeholder="enter verification code" />
                </div>
                <button onClick={handleVerfiyAccount}>Verify</button>
                <button onClick={handleNewVerificationCodeRequest}>Send New Verification Code</button>
            </section>
        </main>
    )
}

export default VerifyAccountPage