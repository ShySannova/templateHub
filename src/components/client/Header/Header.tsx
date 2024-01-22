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
                <input type="checkbox" />
                <button className="menu_bar"></button>
                
                <ul className="nav_list">
                    <NavLink to={"/"}>home</NavLink>
                    <NavLink to={"/about"}>about us</NavLink>
                    <NavLink to={"/contact"}>contact</NavLink>
                </ul>
                <button
                    className="header_btn btn"
                    onClick={() => { setIsDialogOpen(!isDialogOpen) }}
                >login</button>
                {isDialogOpen && <DialogBox setIsDialogOpen={setIsDialogOpen} />}
                <div className="menu_bar"></div>
            </nav>
        </header>
    );
};

export default Header;
