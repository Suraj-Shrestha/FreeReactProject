import React, { Component } from 'react';

const Joke = (props) => {
    return(
     <div>
         <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
         <h3 style={{color: !props.question && "#888"}}>Answer: {props.punchLine}</h3>
         <hr/>
     </div>
    )
}

export default Joke;