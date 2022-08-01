import React, { useState } from 'react'

export default function BandsDetail() {
    const [name, setName] = useState('')

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

    const handleChange = async (e) => {
        setName({ ...name, [e.target.name]: e.target.value })
        console.log(name)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const csrftoken = await getCookie('csrftoken');

        const requestOptions = {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "X-CSRFToken": csrftoken
            },
            body: JSON.stringify(name),
        };
        fetch("/main_app/create-band", requestOptions)
            .then((res) => res.json())
            .then((data) => {
                // this.props.history.push("/room/" + data.code)
                console.log(data)
            })
    }

    return (
        <div>
            <h1>Add A Band</h1>

            {/* <!-- Leaving the action empty makes the form post to the same url used to display it --> */}
            <form onSubmit={handleSubmit}>
                Name: <input type="text" onChange={handleChange} name="name"/>
                <input type="submit" value="Add Band!" class="btn" />
            </form>
            <br /><br />

        </div>
    )
}
