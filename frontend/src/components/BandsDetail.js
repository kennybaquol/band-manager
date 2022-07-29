import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function BandsDetail() {
    const [band, setBand] = useState({name: 'Lel', user: 'Bo Bell'})

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
        <div>
            <h3>Band Name Here</h3>
            <h5>{ band.name }</h5>
        </div>
    )
}