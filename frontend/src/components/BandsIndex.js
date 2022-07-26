import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

export default function BandsIndex() {
    const [bands, setBands] = useState([])
    const [userId, setUserId] = useState('')
    let { user } = useContext(AuthContext)

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

    // Upon first load, get all of the user's bands
    useEffect(() => {
        (async () => {
            setUserId(user.user_id)
        })()
    }, [])

    useEffect(() => {
        (async () => {
            console.log('user id is: ')
            console.log(userId)
            const csrftoken = await getCookie('csrftoken')
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrftoken,

                },
                body: JSON.stringify(userId),
            }
            if (userId > 0) {
                fetch('/main_app/get-all-bands/', requestOptions)
                    .then(res => res.json())
                    .then((data) => {
                        setBands(data)
                    })
            }

        })()
    }, [userId])

    // For every band that belongs to the user, 
    // list a card that links to each band's detail page
    return (
        <div class="center-align">
            <h1>My Bands</h1>
            {bands.length > 0 ?
                <>
                    {bands.map(band => (
                        <div class="card">
                            <Link to={`/bands/${band.id}`}>
                                <div class="card-content">
                                    <span class="card-title">{band.name}</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </>
                :
                <h3>No Bands Found</h3>
            }
        </div>
    )
}