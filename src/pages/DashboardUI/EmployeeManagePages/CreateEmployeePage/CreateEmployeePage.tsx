import "./CreateEmployeePage.css"
import useRegister from "../../../../hooks/useRegister";
import { Navigate } from "react-router-dom";
import useRoleAccess from "../../../../hooks/useRoleAccess";


const CreateEmployeePage = () => {
    const {
        employer,
        name,
        email,
        password,
        setEmployer,
        setName,
        setEmail,
        setPassword,
        handleEmployeeRegister,
    } = useRegister();


    const { adminAccess, developerAccess } = useRoleAccess()

    if (!adminAccess && !developerAccess) return <Navigate to="/login" />



    return <main className="auth">

        <form id="sign_in">
            <h2>Register Employee</h2>
            <div className="input-box">
                {/* <!--Email and password input are contained here and within--> */}
                {adminAccess ?
                    <div className="employerId">
                        <input
                            id="employerId"
                            type="text"
                            onChange={(e) => {
                                e.preventDefault();
                                setEmployer(e.target.value);
                            }}
                            required
                        />
                        <label htmlFor="employerId">Employer-Id</label>
                    </div>
                    : null
                }

                <div className="username">
                    <input
                        id="username"
                        type="text"
                        onChange={(e) => {
                            e.preventDefault();
                            setName(e.target.value);
                        }}
                        autoComplete="true"
                        required
                    />
                    <label htmlFor="username">Username</label>
                </div>
                <div className="email">
                    <input
                        id="email"
                        type="email"
                        onChange={(e) => {
                            e.preventDefault();
                            setEmail(e.target.value);
                        }}
                        autoComplete="true"
                        required
                    />
                    <label htmlFor="email">Email</label>
                </div>

                <div className="password">
                    <input
                        id="confirm_password"
                        type="password"
                        onChange={(e) => {
                            e.preventDefault();
                            setPassword(e.target.value);
                        }}
                        required
                    />
                    <label htmlFor="confirm_password">Password</label>
                </div>
            </div>

            <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    handleEmployeeRegister();
                }}
                disabled={
                    (adminAccess && !employer) ||
                    !name ||
                    !email ||
                    !password
                }>
                Register
            </button>

        </form>
    </main>

}

export default CreateEmployeePage