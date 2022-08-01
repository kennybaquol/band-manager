import React, {useContext} from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function NavBar() {
    let { user } = useContext(AuthContext)
    return (
        <header class="navbar-fixed">
            <nav>
                <div class="nav-wrapper">
                    <ul>
                        <li><a href="/" class="left brand-logo">&nbsp;&nbsp;Band Manager</a></li>
                    </ul>
                    <ul class="right">
                        {user ?
                            <>
                                <li><Link to='/bands/create'>Add A Band</Link></li>
                                <li><Link to='/bands'>View My Bands</Link></li>
                                <li><Link to='/logout'>Logout</Link></li>
                            </>
                            :
                            <>
                                <li><Link to='/signup'>Sign Up</Link></li>
                                <li><Link to='/login'>Log In</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}