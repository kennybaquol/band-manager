import React, {useContext} from "react"
import { render } from "react-dom"
import PrivateRoute from "../utils/PrivateRoute"
import AuthContext from "../context/AuthContext"
import { AuthProvider } from "../context/AuthContext"

import Home from "./Home"
import BandsDetail from "./BandsDetail"
import BandsIndex from "./BandsIndex"
import BandForm from "./BandsCreate"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    // Redirect,
} from "react-router-dom"
import Login from "./Registration/login"

export default function App() {

    return (
        <div>
            <Router>
                <AuthProvider>
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
                                    <li><Link to='/bands/create'>Add A Band</Link></li>
                                    <li><Link to='/bands'>View My Bands</Link></li>
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
                        <Route exact path="/login" component={Login} />
                        <PrivateRoute path='/bands/create' component={BandForm} />
                        <PrivateRoute path="/bands/:id" component={BandsDetail} />
                        <PrivateRoute path="/bands" component={BandsIndex} />
                    </Switch>
                </AuthProvider>
            </Router>

            <footer class="page-footer">
                <div>All Rights Reserved, &copy; 2022 Band Manager &nbsp;</div>
            </footer>
        </div>
    )
}

const appDiv = document.getElementById('app')
render(<App />, appDiv)