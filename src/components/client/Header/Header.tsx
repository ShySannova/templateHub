import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import useLogout from "../../../hooks/useLogout";
import useRoleAccess from "../../../hooks/useRoleAccess";

const Header = () => {

    const { userAccess, dashboardAccess } = useRoleAccess();
    const { handleLogout } = useLogout()

    return (
        <header>
            <nav className="container header-container">
                <div className="logo-container">
                    <h1>
                        <Link to={"/"}>
                            TemplateHub
                        </Link>
                    </h1>
                </div>
                <div className="navigation">
                    <ul className="links">
                        <li>
                            <NavLink to={"/"}>home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>about</NavLink>
                        </li>

                        <li>
                            {dashboardAccess ? <Link to={"/dashboard"}>Dashboard</Link> : userAccess ? <Link to={"/profile"}>Profile</Link> : <NavLink className="btn" to={"/login"}>Login</NavLink>}
                        </li>
                        {userAccess && <li>
                            <button onClick={handleLogout}>logout</button>
                        </li>}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
