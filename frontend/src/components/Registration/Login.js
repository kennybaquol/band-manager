import React, { useContext } from "react"
import AuthContext from "../../context/AuthContext"

export default function Login() {
    const [username, setUsername] = ('')
    let { loginUser } = useContext(AuthContext)

    // SOURCE: https://www.techiediaries.com/django-react-forms-csrf-axios/
    // Get the csrf token to use when using the POST method
    // const getCookie = async (name) => {
    //     let cookieValue = null;
    //     if (document.cookie && document.cookie !== '') {
    //         let cookies = document.cookie.split(';');
    //         for (let i = 0; i < cookies.length; i++) {
    //             let cookie = jQuery.trim(cookies[i]);
    //             if (cookie.substring(0, name.length + 1) === (name + '=')) {
    //                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    //                 break;
    //             }
    //         }
    //     }
    //     return cookieValue;
    // }

    // const handleChange = async (e) => {
    //     setName({ ...name, [e.target.name]: e.target.value })
    //     console.log(name)
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const csrftoken = await getCookie('csrftoken');

    //     const requestOptions = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "X-CSRFToken": csrftoken
    //         },
    //         body: JSON.stringify(name),
    //     };
    //     fetch("/main_app/create-band", requestOptions)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             // this.props.history.push("/room/" + data.code)
    //             console.log(data)
    //         })
    // }

    return (
        <>
            <h1>Log In</h1>

            <form onSubmit={loginUser}>
                Username: <input type="text" name="username" />
                Password: <input type="text" name="password" />
                <input type="submit" class="btn" value="login" />
                {/* <input type="hidden" name="next" value="{{ next }}" /> */}
            </form>
        </>
    )
}