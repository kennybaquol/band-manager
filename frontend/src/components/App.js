import React from "react"
import { render } from "react-dom"
import Home from "./Home"
import NavBar from "./NavBar"
import BandsDetail from "./BandsDetail"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link,
    // Redirect,
} from "react-router-dom"

export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/bands/:id" component={BandsDetail} />
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