import "./ClientLayout.css";

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ClientLayout = () => {
    return (
        <div className="client-body">
            <Header />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default ClientLayout;
