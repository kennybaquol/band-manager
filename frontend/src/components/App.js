import React from "react"
import { render } from "react-dom"
import Home from "./Home"
import NavBar from "./NavBar"
import BandsDetail from "./BandsDetail"
import BandsIndex from "./BandsIndex"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    // Redirect,
} from "react-router-dom"

export default function App() {
    return (
        <div>
        <Router>
            <header class="navbar-fixed">
                <nav>
                    <div class="nav-wrapper">
                        <ul>
                            <li><a href="/" class="left brand-logo">&nbsp;&nbsp;Band Manager</a></li>
                        </ul>
                        <ul class="right">
                            {/* <li><Link to='/home'>Fake Home Link</Link></li>
                            <li><Link to='/about'>Fake About Link</Link></li> */}
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
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/bands/:id" component={BandsDetail} />
                    <Route path="/bands" component={BandsIndex} />
                </Switch>
            </Router>

            <footer class="page-footer">
                <div>All Rights Reserved, &copy; 2022 Band Manager &nbsp;</div>
            </footer>
        </div>
    )
}

const appDiv = document.getElementById('app')
render(<App />, appDiv)