import React, { Component } from 'react';

const ContactCard = (props) => {
    return (
        <div className="">
            <img src={props.contact.imageUrl}/>
            <h3>{props.contact.name}</h3>
            <p>{props.contact.phone}</p>
            <p>{props.contact.email}</p>
        </div>
    )
}

export default ContactCard;