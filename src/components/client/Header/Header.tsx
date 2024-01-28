import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {



    return (
        <header>
            <div className="container header-container">

                <nav className="main-nav">
                    <div className="nav-bar">
                        <i className='bx bx-menu sidebarOpen' ></i>
                        <span className="logo navLogo"><Link to={"/"}>TemplateHub</Link></span>
                        <div className="menu">
                            <div className="logo-toggle">
                                <span className="logo"><Link to={"/"}>TemplateHub</Link></span>
                                <i className='bx bx-x siderbarClose'></i>
                            </div>
                            <ul className="nav-links">
                                <li><NavLink to={"/"}>Home</NavLink></li>
                                <li><NavLink to={"/about"}>About</NavLink></li>
                                <li><NavLink to={"/"}>Services</NavLink></li>
                                <li><NavLink to={"/contact"}>Contact</NavLink></li>
                                <li><NavLink to={"/login"}>Developer</NavLink></li>
                            </ul>
                        </div>
                        <div className="darkLight-searchBox">
                            <div className="dark-light">
                                <i className='bx bx-moon moon'></i>
                                <i className='bx bx-sun sun'></i>
                            </div>
                            <div className="searchBox">
                                <div className="searchToggle">
                                    <i className='bx bx-x cancel'></i>
                                    <i className='bx bx-search search'></i>
                                </div>
                                <div className="search-field">
                                    <input type="text" placeholder="Search..." />
                                    <i className='bx bx-search'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </header>
    );
};

export default Header;
