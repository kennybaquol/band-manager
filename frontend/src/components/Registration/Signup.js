import React, { useContext } from "react"
import AuthContext from "../../context/AuthContext"

export default function Login() {
    const [username, setUsername] = ('')
    // let { loginUser } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        // const csrftoken = await getCookie('csrftoken');

        const requestOptions = {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                // "X-CSRFToken": csrftoken
            },
            body: JSON.stringify(e.target.username.value, e.target.password.value),
        };
        fetch("/main_app/create-user", requestOptions)
            .then((res) => res.json())
            .then((data) => {
                // this.props.history.push("/room/" + data.code)
                console.log(data)
            })
    }

    return (
        <>
            <h1>Sign Up</h1>

            <form onSubmit={loginUser}>
                Username: <input type="text" name="username" />
                Password: <input type="text" name="password" />
                <input type="submit" class="btn" value="login" />
                {/* <input type="hidden" name="next" value="{{ next }}" /> */}
            </form>
        </>
    )
}