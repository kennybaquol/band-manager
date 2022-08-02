import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function BandsDetail() {
    const [band, setBand] = useState({ name: 'Lel', user: 'Bo Bell' })

    const { id } = useParams()

    useEffect(() => {
        (async () => {
            console.log('Running banddetail useEffect!')
            fetch('/main_app/get-band' + '?id=' + id)
                .then(res => res.json())
                .then((data) => {
                    console.log(data)
                    setBand(data)
                })
        })()
    }, [])

    return (
        <div class="center-align">
            {/* {% if band.user.username == user.username %} */}
            <h1>{ band.name }</h1>
            <div>
                <h3 class="blue-text"><Link to={`${id}/venues`}>Venues</Link></h3>
                
            </div>
        </div>
    )
}