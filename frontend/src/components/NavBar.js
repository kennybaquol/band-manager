import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <header class="navbar-fixed">
            <nav>
                <div class="nav-wrapper">
                    <ul>
                        <li><a href="/" class="left brand-logo">&nbsp;&nbsp;Band Manager</a></li>
                    </ul>
                    <ul class="right">
                        <li><Link to='/home'>Fake Home Link</Link></li>
                        <li><Link to='/about'>Fake About Link</Link></li>
                        {/* {% if user.is_authenticated %} */}
                        <li><Link to='/bands'>Add A Band</Link></li>
                        <li><Link to='/about'>View My Bands</Link></li>
                        <li><Link to='/logout'>Logout</Link></li>
                        {/* {% else %} */}
                        <li><Link to='/signup'>Sign Up</Link></li>
                        <li><Link to='/login'>Log In</Link></li>
                        {/* {% endif %} */}
                    </ul>
                </div>
            </nav>
        </header>
    )
}