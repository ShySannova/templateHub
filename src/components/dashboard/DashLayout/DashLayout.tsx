import "./DashLayout.css"
import React from "react";
import { Outlet } from "react-router-dom";
import useUserInfo from "../../../hooks/useUserInfo";
import Sidebar from "../Sidebar/Sidebar";



const DashLayout: React.FC = () => {



    const { userInfo } = useUserInfo();

    return (
        <div className="dashboard-body dashboard">
            <Sidebar userInfo={userInfo} />
            <Outlet context={[userInfo]} />
        </div>
    );
};

export default DashLayout;
