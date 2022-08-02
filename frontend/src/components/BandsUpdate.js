import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

export default function BandsDetail() {
    const [band, setBand] = useState({ name: 'Lel', user: 'Bo Bell' })
    // const { id } = useParams()

    // *THIS PAGE IS STILL UNDER CONSTRUCTION*







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

    return (
        <div>
            {/* {% if band.user.username == user.username %} */}
            {band ?
                <>
                    <h1>Edit <span class="teal-text">{band.name}</span></h1>
                </>
                :
                <h1>Add Band</h1>
            }

            {/* <!-- Leaving the action empty makes the form post to the same url used to display it --> */}
            <form action="" method="POST">
                <table>
                    {/* <!-- Render the inputs inside of <tr>s & <td>s --> */}
                </table>
            </form>

            {band ?
                <>
                    <input type="submit" value="Submit Changes" class="btn" />
                </>
                :
                <input type="submit" value="Add Band!" class="btn" />
            }

        </div>
    )
}
