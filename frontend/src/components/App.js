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
                    <Route path="/" component={BandsDetail} />
                    
                </Switch>
            </Router>
            <h1>Testing React Code Shorty Got A Lotzzzzzz</h1>
            <a href="home/">Lel</a>
            <h4>Testing More July 29</h4>

            <footer class="page-footer">
                <div>All Rights Reserved, &copy; 2022 Band Manager &nbsp;</div>
            </footer>
        </div>
    )
}

const appDiv = document.getElementById('app')
render(<App />, appDiv)