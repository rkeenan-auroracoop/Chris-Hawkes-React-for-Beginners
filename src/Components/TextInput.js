import React, {useState} from 'react';

let TextInput = () => {
    let [ourText, updateTextFunction] = useState("");
    return (
        <div>
            <br/>
            <h2>{ourText}</h2>
            <label for="textInput">Enter Some Text:</label>
            <br />
            <input onChange={(event) => {updateTextFunction(event.target.value)}} type="text" name='textInput'/>
        </div>
    )
}

export default TextInput;