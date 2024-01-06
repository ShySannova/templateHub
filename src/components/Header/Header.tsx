import { Link, NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

// import "./Header.css";

// const Header = () => {
//   return (
//     <header className="flex justify-between">
//       <nav>
//         <ul>
//           <Link to={"/"}>Template-Hub</Link>
//         </ul>
//         <ul>
//           <NavLink className="bg-red-700" to={"/"}>
//             <h1 className="bg-red-700">Home</h1>
//           </NavLink>
//           <NavLink to={"/"}>About us</NavLink>
//           <NavLink to={"/"}>Contact</NavLink>
//           <NavLink to={"/"}>Login</NavLink>
//         </ul>
//       </nav>
//     </header>
//   );
// };

const Header = () => {
  return (
    <>
      <header className="flex justify-between bg-light-red px-8 py-6 text-red-600">
        <div>
          <Link to={"/"}>
            <h1>Template Hub</h1>
          </Link>
        </div>
        <div className="flex justify-between gap-10 ">
          <NavLink to={"/"}>
            <h3 className="">Home</h3>
          </NavLink>
          <NavLink to={"/"}>
            <h3 className="">About Us</h3>
          </NavLink>
          <NavLink to={"/"}>
            <h3 className=""> Contact</h3>
          </NavLink>
          <NavLink to={"/"}>
            <h3 className="">Login</h3>
          </NavLink>
          <NavLink to={"/"}>
            <button className="border-2 px-10 flex items-center rounded">
              <TiShoppingCart />
              Sign In
            </button>
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
