import React, { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom'

// SOURCE: https://www.youtube.com/watch?v=xjMP0hspNLE&t=7099s
const AuthContext = createContext(null)

export default AuthContext

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(null)
    const [user, setUser] = useState(null)

    let loginUser = async (e) => {
        e.preventDefault()
        console.log("Testing loginUser from AuthContext!")
        console.log(e.target)
        await fetch("http://127.0.0.1:8000/main_app/token/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'username': e.target.username.value, 'password': e.target.username.value })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
        // return 'K Moniessss'
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