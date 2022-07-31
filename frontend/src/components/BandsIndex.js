import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function BandsDetail() {
    const [bands, setBands] = useState({ name: 'Lel', user: 'Bo Bell' })

    // const { id } = useParams()

    useEffect(() => {
        console.log('bands index has loaded')
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
            {/* {% if band.user.username == user.username %} */}
            {/* <h1>{ bands[0].name }</h1> */}
            <div class="row">
                <h4><Link to={`${data}`}>Venues</Link></h4>
                
            </div>
        </div>
    )
}