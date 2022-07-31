import React, { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom'

// SOURCE: https://www.youtube.com/watch?v=xjMP0hspNLE&t=7099s
// const AuthContext = createContext()
const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(null)
    const [user, setUser] = useState(null)

    let loginUser = async (e) => {
        e.preventDefault()
        console.log("Testing loginUser from AuthContext!")
        // await fetch("/token/", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ 'username': null, 'password': null })
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data)
        //     })
    }

    let contextData = {
        loginUser: loginUser
    }

    return (
        <AuthContext.Provider value={{ 'name': 'kbaquol' }}>
            {children}
        </AuthContext.Provider>
    )
}