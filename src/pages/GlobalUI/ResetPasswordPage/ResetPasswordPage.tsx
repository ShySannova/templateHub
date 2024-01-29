import React from "react"
import useResetPassword from "../../../hooks/useResetPassword"
import "./ResetPassworPage.css"


const ResetPasswordPage: React.FC = () => {

    const { setNewPassword, setConfirmPassword, newPassword, confirmPassword, handleNewPassSubmit } = useResetPassword()

    return (
        <main className="forgot-reset-password">
            <section className='frg-container'>
                <h2>Change your password</h2>
                <p>Enter a new password below to change your password</p>
                <input type="text" placeholder='Enter your password' onChange={(e) => { setNewPassword(e.target.value) }} />
                <input type="text" placeholder='Confirm your password' onChange={(e) => { setConfirmPassword(e.target.value) }} />
                <button disabled={!newPassword || !confirmPassword || !(newPassword === confirmPassword)} onClick={handleNewPassSubmit}>Change Password</button>
            </section>

        </main>

    )
}

export default ResetPasswordPage