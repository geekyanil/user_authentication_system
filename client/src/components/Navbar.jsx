import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { useAuth } from '../store/auth'

const Navbar = () => {
    const { isLoggedIn } = useAuth()
    return (
        <>
            <div className="container">
                <div>
                    <a href="/">User Authentication System</a>
                </div>

                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        {isLoggedIn ? (<><li><NavLink to="/logout">Logout</NavLink></li>
                            <li><NavLink to="/profile/profileDetails">Profile</NavLink></li></>) : (
                            <><li><NavLink to="/signup">SignUp</NavLink></li>
                                <li><NavLink to="/login">Login</NavLink></li></>
                        )}
                        {/* <li><NavLink to="/signup">SignUp</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li> */}

                    </ul>
                </nav>


            </div>


        </>
    )
}

export default Navbar