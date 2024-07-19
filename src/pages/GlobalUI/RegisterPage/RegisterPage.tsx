import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../../store/rootReducer";
import useRegister from "../../../hooks/useRegister";
import Register from "../../../components/global/Register/Register";

const RegisterPage = () => {
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );


    const {
        name,
        email,
        password,
        setName,
        setEmail,
        setPassword,
        handleRegister,
    } = useRegister();

    if (isAuthenticated) return <Navigate to={"/dashboard"} />;

    return (
        <Register {...{
            name,
            email,
            password,
            setName,
            setEmail,
            setPassword,
            handleRegister
        }} />


    );
};

export default RegisterPage;
