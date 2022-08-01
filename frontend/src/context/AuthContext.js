import React, { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom'

// SOURCE: https://www.youtube.com/watch?v=xjMP0hspNLE&t=7099s
const AuthContext = createContext(null)

export default AuthContext

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(null)
    const [user, setUser] = useState(null)

    // SOURCE: https://www.techiediaries.com/django-react-forms-csrf-axios/
    // Get the csrf token to use when using the POST method
    const getCookie = async (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    let loginUser = async (e) => {
        e.preventDefault()
        const csrftoken = await getCookie('csrftoken');
        console.log("Testing loginUser from AuthContext!")
        console.log(e.target.username.value)
        console.log(e.target.password.value)
        let response = await fetch("http://127.0.0.1:8000/main_app/token/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "X-CSRFToken": csrftoken
            },
            body: JSON.stringify({ 'username': e.target.username.value, 'password': e.target.username.value })
        })
        // .then((res) => res.json())
        // .then((data) => {
        //     console.log(data)
        // })
        let data = await response.json()
        console.log(data)
    }

    const contextData = {
        loginUser: loginUser
    }

    console.log('Loading AuthProvider')
    console.log(children)


    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}