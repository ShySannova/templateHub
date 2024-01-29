<<<<<<< HEAD
import { Outlet } from "react-router-dom";

const DashLayout = () => {
    return (
        <>
            <Outlet />
        </>
=======
import "./DashLayout.css"
import React from "react";
import { Outlet } from "react-router-dom";
import useUserInfo from "../../../hooks/useUserInfo";
import Sidebar from "../Sidebar/Sidebar";



const DashLayout: React.FC = () => {


    const { loading, userInfo } = useUserInfo();

    return (
        <div className="dashboard-body dashboard">
            <Sidebar userInfo={userInfo} loading={loading} />
            <Outlet context={[userInfo, loading]} />
        </div>
>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936
    );
};

export default DashLayout;
