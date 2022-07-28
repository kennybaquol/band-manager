import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <Link to='/about'>Fake About Link</Link>
            <Link to='/change'>Add A Band</Link>
            <Link to='/change'>View My Bands</Link>
            <Link to='/change'>Fake About Link</Link>
        </div>
    )
}