import { Link } from "react-router-dom"
import "./ForgotPasswordPage.css"
import useForgotPassword from "../../../hooks/useForgotPassword"

const ForgotPasswordPage = () => {


    const { handleForgotPassword, setEmail } = useForgotPassword()



    return (
        <main className="forgot-reset-password">
            <section className='container frg-container'>
                <h2>Forgot Password</h2>
                <p>Enter the email address associated with your Template-Hub account and we'll send you a link to reset password.</p>
                <input type="text" placeholder='Enter your email' onChange={(e) => { setEmail(e.target.value) }} />
                <button onClick={handleForgotPassword}>send mail</button>
                <p>Don't have an account?<Link to="/">sign up</Link></p>
            </section>

        </main>
    )
}

export default ForgotPasswordPage