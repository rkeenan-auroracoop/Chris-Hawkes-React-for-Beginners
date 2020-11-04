import React from 'react';

function Button (props) {
    const myClick = function () {
        alert('you clicked the button!')
    }

    return  (
        <button id={props.id} onClick={myClick}>Press Me</button>
        
    )
}

export default Button;