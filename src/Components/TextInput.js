import React, {useState, useEffect, useRef} from 'react';

let TextInput = () => {
    let [ourText, updateTextFunction] = useState("");
    let inputRef = useRef();

    useEffect(() => {
        //both of the lines below do the same thing. The second line is the recommended way to do it.
        //document.querySelector('#findThisTextInput').focus();
        inputRef.current.focus();
    })
    
    return (
        <div>
            <br/>
            <h2>{ourText}</h2>
            <label id="findThis" htmlFor="textInput">Enter Some Text:</label>
            <br />
            <input ref={inputRef} id="findThisTextInput" onChange={(event) => {updateTextFunction(event.target.value)}} type="text" name='textInput'/>
        </div>
    )
}

export default TextInput;