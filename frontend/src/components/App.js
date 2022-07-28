import React from "react"
import { render } from "react-dom"
import Home from "./Home"


export default function App() {
        return (
            <div>
                <Home />
                <h1>Testing React Code Shorty Got A Lot</h1>
                <a href="home/">Lel</a>
                <h4>Testing More Shorties</h4>
            </div>
        )
}

const appDiv = document.getElementById('app')
render(<App />, appDiv)