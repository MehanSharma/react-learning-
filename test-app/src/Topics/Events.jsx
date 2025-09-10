import React from 'react'
import Button from '../Componenets/Button'

const Events = () => {
    const logIn = () =>{
        document.getElementById("heading").innerText="Hello"
        alert("Logged in successfully")
    }

      const register = () =>{
         document.getElementById("heading").innerText="Hey"
        alert("registered successfully")
    }
    const contact = () =>{
         document.getElementById("heading").innerText="Hi"
        alert("Contacted successfully")
    }
     const reload = () =>{
         document.getElementById("heading").innerText="Bye"
        alert("Page reloaded successfully")
    }
  return (
    <> 
        <h1 id='heading'> Events</h1>
        <Button func={logIn} text="Log In"/>
        <Button func={register} text="Register"/>
        <Button func={contact}  text="Contact"/>
        <Button func={reload} text="Reload"/>
    </>
  )
}

export default Events  