import "./Layout.css";
import { Outlet } from "react-router-dom";
import ToastMsg from "../ToastMsg/ToastMsg";

const Layout = () => {
    return (
<<<<<<< HEAD
        <div className="layout">
            <Outlet />
            <ToastMsg />
        </div>
=======
        <>
            <Outlet />
            <ToastMsg />
        </>
>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936
    );
};

export default Layout;
