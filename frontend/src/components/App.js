import React, { createContext, useContext } from "react"
import { render } from "react-dom"
import PrivateRoute from "../utils/PrivateRoute"
import { AuthProvider } from "../context/AuthContext"

import Home from "./Home"
import BandsDetail from "./BandsDetail"
import BandsIndex from "./BandsIndex"
import BandForm from "./BandsCreate"

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom"

import Login from "./Registration/Login"
import Signup from "./Registration/Signup"
import VenuesIndex from "./Venues/VenuesIndex"
import VenuesDetail from "./Venues/VenuesDetail"
import VenuesCreate from "./Venues/VenuesCreate"
import VenuesUpdate from "./Venues/VenuesUpdate"
import NavBar from "./NavBar"

export default function App() {

    return (
        <div>
            <Router>
                <AuthProvider>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/main_app/accounts/signup" component={Signup} />
                        <PrivateRoute exact path="/bands" component={BandsIndex} />
                        <PrivateRoute exact path="/bands/create" component={BandForm} />
                        <PrivateRoute exact path="/bands/:id" component={BandsDetail} />
                        <PrivateRoute exact path="/bands/:band_id/venues/create" component={VenuesCreate} />
                        <PrivateRoute exact path="/bands/:band_id/venues/:venue_id/edit" component={VenuesUpdate} />
                        <PrivateRoute exact path="/bands/:band_id/venues/:venue_id" component={VenuesDetail} />
                        <PrivateRoute exact path="/bands/:id/venues" component={VenuesIndex} />
                    </Switch>
                </AuthProvider>
            </Router>

            <footer class="page-footer deep-purple darken-3 right-align">
                <div>All Rights Reserved, &copy; 2022 Band Manager &nbsp;</div>
            </footer>
        </div>
    )
}

const appDiv = document.getElementById('app')
render(<App />, appDiv)