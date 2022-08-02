import React, { useContext } from "react"
import AuthContext from "../../context/AuthContext"

export default function Login() {
    const [username, setUsername] = ('')
    let { loginUser } = useContext(AuthContext)

    return (
        <>
            <h1>Log In</h1>

            <form onSubmit={loginUser}>
                Username: <input type="text" name="username" />
                Password: <input type="password" name="password" />
                <input type="submit" class="btn" value="login" />
                {/* <input type="hidden" name="next" value="{{ next }}" /> */}
            </form>
        </>
    )
}