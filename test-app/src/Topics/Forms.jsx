import React from "react";
import { useState } from "react";

const Forms = () =>{
    const [text,setText]= useState("");
    const  [letters,setLetters] = useState(0)
    const change = (e) =>{
            setText(e.target.value)
        setLetters(text.length)

    }


    const count = (e) =>{
        e.preventDefault()
        setLetters(text.length)
    }
    return(
        <>
            <form>
                <label htmlFor="ip">Username</label>
                <input onChange={change} type="text" value={text} id="ip"/>
                <input onClick={count} type="submit" value="Send" />
                <label htmlFor="">Total Letter are : {letters}</label>
            </form>
        </>
    );
}

export default Forms;