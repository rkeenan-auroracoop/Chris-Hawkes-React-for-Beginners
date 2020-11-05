import React from 'react';

class  Paragraph extends React.Component {
    //constructor takes basic props for the component
    constructor(props) {
        super(props);
        }
    
    componentDidMount() {
        alert(document.getElementById("grabThis"));
    }

    render() {
        return(
            <p id="grabThis">{this.props.text}</p>
        )
    }
}

export default Paragraph;