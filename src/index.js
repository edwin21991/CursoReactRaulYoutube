/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import ReactDOM from 'react-dom'

const user ={
  firstName: 'Edwin ',
  lastName: 'Sanchez',
  avatar:'https://s.gravatar.com/avatar/9ad96a9864bad9509f414bdd8002a228?s=80'
}

function getName(user){
  return `${user.firstName}${user.lastName}`
}

function getGreeting(user){
  if (user){
    return( 
     <h1>{getName(user)}</h1>
    )
  }
  
  return<h1>Hello Stranger</h1>
  
}

const element = (
  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar} />
  </div>
) 

const container = document.getElementById('root')

ReactDOM.render(element, container)
