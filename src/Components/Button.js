import React from 'react';
import styles from  '../Styles/Button.module.css'

function Button (props) {
    const myClick = function () {
        alert('you clicked the button!')
    }

    return  (
        //React.Fragment allows you to return two things
        <React.Fragment>
            <h1 className={styles.customHeader}>Testing</h1>
            <button id={props.id} dataname={props.dataName} onClick={myClick}>Press Me</button>
        </React.Fragment>
    )
}

export default Button;