import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { Link, useParams } from 'react-router-dom'

export default function VenuesCreate() {
    const [venue, setVenue] = useState([])
    const { band_id } = useParams()
    const options = [
        { value: 'Not Contacted', label: 'Not Contacted' },
        { value: 'Contacted', label: 'Contacted' }
    ]

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
        setVenue({ ...venue, [e.target.name]: e.target.value })
    }

    // Upon submit, attempt to create a new Venue using a POST route
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

    useEffect(() => {
        (async () => {
            console.log(venue)
        })()
    }, [venue])

    return (
        <div>
            <h3>Add A Venue</h3>
            <div class="row">
                <div class="card">
                    <div class="card-content">
                        <form onSubmit={handleSubmit}>
                            State: <input onChange={handleChange} type="text" name="state" />
                            City: <input onChange={handleChange} type="text" name="city" />
                            Email: <input onChange={handleChange} type="text" name="email" />
                            Phone: <input onChange={handleChange} type="text" name="phone" />
                            Note: <input onChange={handleChange} type="text" name="note" />
                            Status:
                            <Select
                                onChange={handleChange}
                                value={venue.status}
                                options={options}
                            >
                            </Select>
                            <br />
                            <input type="submit" class="btn" value="Add Venue" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}