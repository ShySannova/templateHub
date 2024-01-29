import "./Sidebar.css"
import React from 'react'
import { NavLink } from 'react-router-dom';
import useLogout from '../../../hooks/useLogout';
import { UserInfo } from '../../../utils/types';


interface SidebarProps {
    userInfo?: UserInfo | null;
    loading: boolean;
}


const Sidebar: React.FC<SidebarProps> = ({ userInfo, loading }) => {

    const { handleLogout } = useLogout()

    return (
        <div className="sidebar">
            <div className="userInfo">
                <div className="user-img-container">
                    <img src="#" alt="" />
                </div>
                <h2 className="username">
                    {loading ? "loading" : <p>{userInfo?.name}</p>}
                </h2>
            </div>


            <nav>
                <ul className="links">
                    <li>
                        <NavLink to={'/dashboard'} end>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/templates'} end>All Templates</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/templates/create'} end>Add Template</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/media'} end>Media</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/users/profile'} end>Users</NavLink>
                    </li>
                    <button
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.preventDefault();
                            handleLogout();
                        }}>
                        Logout
                    </button>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar