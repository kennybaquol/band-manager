import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function Home() {
  let { user } = useContext(AuthContext)
  return (
    <div>
      {user ?
        <>
          <h1>Welcome, {user.username}</h1>
        </>
        :
        <>
          <h1>Band Manager</h1>
          <h3>So easy that a singer could use it!</h3>
        </>
      }
    </div>
  )
}