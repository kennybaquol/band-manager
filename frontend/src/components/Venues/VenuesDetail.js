import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

export default function VenuesDetail() {
    const [venue, setVenue] = useState([])
    const [deletePressed, setDeletePressed] = useState(false)
    const { band_id, venue_id } = useParams()
    const history = useHistory()

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

    // Upon submit, attempt to create a new Venue using a POST route
    const handleDelete = async (e) => {
        e.preventDefault()
        console.log('delete button pressed AND confirmed')

        const csrftoken = await getCookie('csrftoken');
        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrftoken
            },
            body: JSON.stringify(venue),
        };
        fetch(`/main_app/bands/${band_id}/venues/${venue_id}/delete`, requestOptions)
            .then((res) => {
                res.json()
                history.push(`/bands`)
            })
            .then(() => {
                history.push(`/bands`)
            })
    }

    // Upon submit, attempt to create a new Venue using a POST route
    const handleClick = async (e) => {
        e.preventDefault()
        console.log('delete button pressed')
        setDeletePressed(true)
    }

    // Upon first load, get the details of the current venue
    useEffect(() => {
        (async () => {
            fetch(`/main_app/bands/${band_id}/venues/${venue_id}/get-venue/`)
                .then(res => res.json())
                .then((data) => {
                    setVenue(data)
                })
        })()
    }, [])

    // For testing*
    useEffect(() => {
        (async () => {
            console.log(venue)
        })()
    }, [venue])

    return (
        <div>
            {venue !== 'undefined' ?
                <>
                    <h1>{venue.name}</h1>

                    <div class="row">
                        <div class="card">
                            <div class="card-content">
                                <h3>State: {venue.state}</h3>
                                <h3>City: {venue.city}</h3>
                                <h3>Email: {venue.email}</h3>
                                <h3>Phone: {venue.phone}</h3>
                                <h3>Note:{venue.note}</h3>
                                <h3>Status: {venue.status}</h3>
                            </div>
                            <div class="card-action">
                                <button><Link to={`/bands/${band_id}/venues/${venue.id}/edit`}>Edit</Link></button>
                                {/* <Link to={`/bands/${band_id}/venues/${venue.id}/delete`}>Delete</Link> */}
                                <button onClick={handleClick}><Link>Delete</Link></button>
                            </div>
                            {deletePressed === true ?
                                <>
                                    <div class="card-action">
                                        <h5>Are you SURE you want to delete {venue.name}?</h5>
                                        <button onClick={handleDelete}><Link>Yes, Delete Forever</Link></button>
                                    </div>
                                </>
                                :
                                <h3></h3>
                            }
                        </div>
                    </div>
                </>
                :
                <h3>Venue Not Found</h3>
            }
        </div>

    )
}