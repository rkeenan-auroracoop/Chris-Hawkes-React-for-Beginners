import React from 'react';
import styles from '../Styles/Video.module.css';

let Video = (props) => {
    return (
        <React.Fragment>
            <h2 className={`text-enter ${styles.videoTitle}`}>{props.title}</h2>
            <iframe src={props.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </React.Fragment>
    )
}

export default Video;