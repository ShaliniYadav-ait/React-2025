import React, { Component } from "react";

class ClassWithoutBinding extends React.Component {
    constructor() {
        super();
        this.state = { message: 'Hello, World!' };
        this.showMessage = this.showMessage.bind(this);
    }

    showMessage() {
        alert(this.state.message);
    }

    render() {
        return <button onClick={this.showMessage}>Show Message</button>;
    }
}

export default ClassWithoutBinding;