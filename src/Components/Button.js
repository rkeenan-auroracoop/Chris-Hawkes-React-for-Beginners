import React from 'react';

function Button () {
    const myClick = function () {
        alert('you clicked the button!')
    }

    return  (
        <button id='myButton' onClick={myClick}>Press Me</button>
        
    )
}

export default Button;