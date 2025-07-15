import React from "react";
import styles from "./WelcomeStyle.module.css";

function FunctionEventHandler() {
    const handleClick = (event) => {
        alert("Button clicked!");

        console.log("Button clicked!", event);
    };

    return (
        <div>
            <h1>Function with Event Handler</h1>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default FunctionEventHandler;