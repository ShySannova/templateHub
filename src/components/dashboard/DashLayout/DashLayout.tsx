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
    );
};

export default DashLayout;
