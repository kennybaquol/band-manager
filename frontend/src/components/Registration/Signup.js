import React from "react"

export default function Signup() {
    function refreshPage() {
        window.location.reload(false)
    }

    return (
        <div class="card-content">
            <br />
            <button class="btn" onClick={refreshPage}>Sign Up Today!</button>
            <br /><br />
        </div>
    )
}