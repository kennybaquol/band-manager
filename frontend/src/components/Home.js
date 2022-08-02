import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
// import '../../static/css/index.css'

export default function Home() {
  let { user } = useContext(AuthContext)
  return (
    <div>
      {user ?
        <>
          <h1 class="center-align">Welcome!</h1>
        </>
        :
        <>
          <h1 class="center-align">Band Manager</h1>
          <h3 class="center-align">So easy that a singer could use it!</h3>
        </>
      }
    </div>
  )
}