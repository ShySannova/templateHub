import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import DialogBox from "../DialogBox/DialogBox";

const Header = () => {


    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

    return (
        <header>
            <Link id="logo" to={"/"} style={{color:"white", fontSize:"2rem"}}>Template-Hub</Link>
            
            <nav>
                <button className="menu_bar"></button>
                <input type="checkbox" />
                <ul className="nav_list">
                    <li className="list_items"><NavLink to={"/"}>home</NavLink></li>
                    <li className="list_items"><NavLink to={"/about"}>about us</NavLink></li>
                    <li className="list_items"><NavLink to={"/contact"}>contact</NavLink></li>
                </ul>
                <button
                    className="header_btn"
                    onClick={() => { setIsDialogOpen(!isDialogOpen) }}
                >login</button>
                {isDialogOpen && <DialogBox setIsDialogOpen={setIsDialogOpen} />}
                <div className="menu_bar"></div>
            </nav>
        </header>
    );
};

export default Header;
