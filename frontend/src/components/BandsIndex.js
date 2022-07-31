import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function BandsDetail() {
    const [bands, setBands] = useState([])

    // const { id } = useParams()

    useEffect(() => {
        (async () => {
            console.log('Running BandsIndex useEffect!')
            fetch('/main_app/get-all-bands')
                .then(res => res.json())
                .then((data) => {
                    console.log(data)
                    setBands(data)
                })
        })()
    }, [])

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
                                    <p>Put Memebers Names Here</p>
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