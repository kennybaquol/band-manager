import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

export default function BandsDetail() {
    const [name, setName] = useState('')
    // const { id } = useParams()

    useEffect(() => {
        (async () => {
            console.log('Running BandForm useEffect!')
            // fetch('/main_app/bands/create')
            //     .then(res => res.json())
            //     .then((data) => {
            //         console.log(data)
            //         setBand(data)
            //     })
        })()
    }, [])

    const handleChange = async (e) => {
        e.preventDefault()
        setName = ({...name, [e.target.name]: e.target.value})
        console.log(name)
    }

    return (
        <div>
            <h1>Add A Band</h1>

            {/* <!-- Leaving the action empty makes the form post to the same url used to display it --> */}
            <form action="" method="POST">
            Name: <input type="text" onChange={handleChange}/>
            <input type="submit" value="Add Band!" class="btn" />
            </form>
                <br /><br />

        </div>
    )
}
