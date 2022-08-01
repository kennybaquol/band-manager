import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function VenuesDetail() {
    const [venue, setVenue] = useState([])
    const { band_id, venue_id } = useParams()

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
                                <Link to={`/bands/${band_id}/venues/${venue.id}/edit`}>Edit</Link>
                                <Link to={`/bands/${band_id}/venues/${venue.id}/delete`}>Delete</Link>
                            </div>
                        </div>
                    </div>
                </>
                :
                <h3>Venue Not Found</h3>
            }
        </div>

    )
}