import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function VenuesIndex() {
    const [venues, setVenues] = useState([])
    const { id } = useParams()

    // let user = 'Shorty'
    // let user = useContext(AuthContext)

    // Upon first load, get all of the user's bands
    useEffect(() => {
        (async () => {
            fetch(`/main_app/bands/${id}/get-venues/`)
                .then(res => res.json())
                .then((data) => {
                    setVenues(data)
                })
        })()
    }, [])

    // useEffect(() => {
    //     (async () => {
    //         console.log('venues updated')
    //         console.log(venues)
    //         console.log(venues[0].status)
    //     })()
    // }, [venues])

    // For every band that belongs to the user, 
    // list a card that links to each band's detail page
    return (
        <div class="center-align">
            <h2>Venues</h2>
            <div class="row">
                <Link to={`/bands/${id}/venues/create`}>
                    <input type="button" class="btn" value="Add Venue" />
                </Link>
            </div>
            {venues.length > 0 ?
                <>
                    {venues.map(venue => (
                        <div class="card">
                            <Link to={`/bands/${id}/venues/${venue.id}`}>
                                <div class="card-content">
                                    <span class="card-title">{venue.name}</span>
                                    <div class="card-content">
                                        <p>{venue.status}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </>
                :
                <h3>No Venues Found</h3>
            }
        </div>

    )
}