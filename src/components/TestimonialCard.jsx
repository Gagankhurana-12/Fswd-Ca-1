import React from 'react';

function TestimonialCard(props){
    return(
        <>
        <div className='container'>
     <h1>Name: {props.name} </h1>
     <p>Review: {props.review}</p>

        </div>
        </>
    );
};

export default TestimonialCard;