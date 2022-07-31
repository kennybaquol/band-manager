import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

export default function BandsDetail() {
    const [bands, setBands] = useState([])

    // let {user} = useContext(AuthContext)

    // Upon first load, get all of the user's bands
    useEffect(() => {
        (async () => {
            fetch('/main_app/get-all-bands')
                .then(res => res.json())
                .then((data) => {
                    setBands(data)
                })
        })()
    }, [])

    // For every band that belongs to the user, 
    // list a card that links to each band's detail page
    return (
        <div>
            <h1>My Bands</h1>
            {bands.length > 0 ?
                <>
                    {bands.map(band => (
                        <div class="card">
                            <Link to={`${band.id}`}>
                                <div class="card-content">
                                    <span class="card-title">{band.name}</span>
                                    <p>Members: </p>
                                    <p>Username here</p>
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