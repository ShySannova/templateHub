import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {



    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><NavLink to={"/about"}>about us</NavLink></li>
                            <li><NavLink to={"/services"}>our services</NavLink></li>
                            <li><NavLink to={"/privacy"}>privacy policy</NavLink></li>
                            <li><NavLink to={"/program"}>affiliate program</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><NavLink to={"/faq"}>FAQ</NavLink></li>
                            <li><NavLink to={"/shipping"}>shipping</NavLink></li>
                            <li><NavLink to={"/returns"}>returns</NavLink></li>
                            <li><NavLink to={"/orders"}>order status</NavLink></li>
                            <li><NavLink to={"/payments"}>payment options</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>online shop</h4>
                        <ul>
                            <li><NavLink to={"/watch"}>watch</NavLink></li>
                            <li><NavLink to={"/bag"}>bag</NavLink></li>
                            <li><NavLink to={"/shoes"}>shoes</NavLink></li>
                            <li><NavLink to={"/dress"}>dress</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <NavLink to={"/facebook"}><i className="fab fa-facebook-f"></i></NavLink>
                            <NavLink to={"/twitter"}><i className="fab fa-twitter"></i></NavLink>
                            <NavLink to={"/instagram"}><i className="fab fa-instagram"></i></NavLink>
                            <NavLink to={"/linkeden"}><i className="fab fa-linkedin-in"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
