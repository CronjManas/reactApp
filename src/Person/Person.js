import React from 'react';

const person = (props) => {
    return (
        <h1>This is {props.name} and i am {props.age} years old.</h1>
    );
};

export default person;