import '../NavBar/NavBar.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function NavBar() {
    return(
    <nav className='navbar navbar-expand navbar-dark bg-info'>
        <a href="/" className="navbar-brand">&nbsp;&nbsp;Band Manager</a>
        <div className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to={"/bands/"} className="nav-link">
                    View My Bands
                </Link>
                {/* <a href="{% url 'home' %}" className='navbar-brand'>Home</a> */}
            </li>
            {/* <li className="nav-item"><a href="{% url 'about' %}">About</a></li> */}
            {/* {% if user.is_authenticated %} */}
            <li className="nav-item"><a href="{% url 'bands_create' %}">Add a Band</a></li>
            <li className="nav-item"><a href="{% url 'bands_index' %}">View My Bands</a></li>
            <li className="nav-item"><a href="{% url 'logout' %}">Log Out</a></li>
            {/* {% else %} */}
            <li className="nav-item"><a href="{% url 'signup' %}">Sign Up</a></li>
            <li className="nav-item"><a href="{% url 'login' %}">Log In</a></li>
            {/* {% endif %} */}
        </div>
    </nav >
    )
}