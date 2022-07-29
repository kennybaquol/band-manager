import React from "react"
import { render } from "react-dom"
import Home from "./Home"
// import NavBar from "./NavBar"
import {
    BrowserRouter as Router,
    Switch,
    // Route,
    // Link,
    // Redirect,
} from "react-router-dom";

export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    {/* <Route exact path="/"> */}
                        {/* <NavBar /> */}
                    {/* </Route> */}
                    {/* <Route path="/join" component={RoomJoinPage} />
                    <Route path="/create" component={CreateRoomPage} /> */}
                </Switch>
            </Router>
            <Home />
            <h1>Testing React Code Shorty Got A Lotzzzzzz</h1>
            <a href="home/">Lel</a>
            <h4>Testing More July 29</h4>
        </div>
    )
}

const appDiv = document.getElementById('app')
render(<App />, appDiv)