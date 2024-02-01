import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {



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
                            <NavLink className="btn" to={"/login"}>Login</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
