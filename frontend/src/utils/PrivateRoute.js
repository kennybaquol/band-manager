import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// SOURCE: https://www.youtube.com/watch?v=xjMP0hspNLE&t=7099s
export default function PrivateRoute(children, ...rest) {
    const authenticated = false
    return(
        <Route {...rest}>{!authenticated ? <Redirect to="/login" /> : children}</Route>
    )
}