import { Link, NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

// nav is block ele
//

const Menu = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>About Us</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"dashboard/login"}>Login</NavLink>
          </li>
          <li className="sm:hidden">
            <button className="border-2 px-6 py-2 flex items-center rounded gap-2">
              <TiShoppingCart />
              <h3>Sign Up</h3>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <header className="flex justify-between items-center bg-light-red px-8 py-6 text-red-600">
        <div>
          <Link to={"/"}>Template Hub</Link>
        </div>
        <div>
          <nav className="flex justify-between gap-10 items-center sm:hidden md:flex lg:flex xl:flex 2xl:flex">
            <ul className="flex gap-10 items-center">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>About Us</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"dashboard/login"}>Login</NavLink>
              </li>
              <li>
                <button className="border-2 px-6 py-2 flex items-center rounded gap-2">
                  <TiShoppingCart />
                  <h3>Sign Up</h3>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center  md:hidden lg:hidden xl:hidden 2xl:hidden">
          <div>
            <Link to={"/"}>
              <button className="border-2 px-6 py-2 flex items-center rounded gap-2 sm:p-1 mx-6">
                <TiShoppingCart />
                <h3>Sign Up</h3>
              </button>
            </Link>
          </div>
          {toggleMenu ? (
            <RiCloseLine onClick={() => setToggleMenu(false)} />
          ) : (
            <RiMenu3Line onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <span className="flex gap-4 md:hidden lg:hidden xl:hidden 2xl:hidden">
              <div className="flex justify-end absolute items-end flex-col text-end p-6 top-10 right-0 mt-8  bg-light-red rounded">
                <Menu />
              </div>
            </span>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
