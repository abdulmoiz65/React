import React from "react";

// fetching the data dynamically with props 

function User(props) {

    return(
        <>
        <h1>I am {props.name}</h1>
        <p>i am a {props.expertise}</p>
        </>

    );
    
}

export default User;