import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function BandsDetail() {
    const [band, setBand] = useState({name: 'Lel', user: 'Bo Bell'})

    const { id } = useParams()

    useEffect(() => {
        (async () => {
            fetch('/main_app/get-band' + '?id=' + this.id)
                .then((response) => response.json)
                .then((data) => {
                    // this
                })
        })()
    }, [])

    return (
        <div>
            <h3>Band Name Here</h3>
            <h5>{ band.name }: { band.user}</h5>
            <h6>{ id }</h6>
        </div>
    )
}