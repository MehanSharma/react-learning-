import React from 'react'

const Conditional = () => {
  let age = 2;

const renderer = ()=>{
  if(age>18){
  return  <h1> COmp:Congrats you are above 18 </h1>
  }else{
    return <h1>Congrats you are not above 18 </h1>
  }
}

let a;
const checkAge = ()=>{
  a = document.getElementById("age").value
  if(a>18){
    document.getElementById("op").innerHTML =  "<h1>Your age is valid for vote</h1>"
  }else{
    document.getElementById("op").innerHTML =  "<h1>Your age is not valid for vote</h1>"

  }
}

  return (
    <>
         {/*Simple  if else  */}
        {/* {renderer()} */}
        {/* and */}
        {/* {age>18 && <h1> && : Congrats you are above 18 </h1>} */}
        {/* {(age>18 )?<h1>Welcome</h1>:<h1>Not Welcome</h1>} */}
        <input type="text" name="age" id="age" />
        <button onClick={checkAge}>Check</button>
        <h1 id='op'></h1>
    </>
  )}

export default Conditional  