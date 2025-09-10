import React from 'react'

const Card = ({name,std}) => {
  return (
    <div className='card'>
        <h1 className='name'>Name : {name}</h1>
        <h1 className='class'>Class : {std}</h1>
         <button className='btn'>View Profile</button>
    </div>
  )
}

export default Card         