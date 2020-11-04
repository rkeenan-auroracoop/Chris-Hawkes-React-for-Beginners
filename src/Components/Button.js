import React from 'react';

function Button (props) {
    const myClick = function () {
        alert('you clicked the button!')
    }

    return  (
        <button id={props.id} dataname={props.dataName} onClick={myClick}>Press Me</button>
        
    )
}

export default Button;