import React from 'react';

class  Paragraph extends React.Component {
    //constructor takes basic props for the component
    constructor(props) {
        super(props);
        }
    render() {
        return(
            <p>{this.props.text}</p>
        )
    }
}

export default Paragraph;