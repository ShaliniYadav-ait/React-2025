import React from "react";

function ChildComponent(props) {
    return (
        <button onClick={() => props.greetHandler("Hello from Child Component!")}>
            Greet Parent </button>
    );
}

export default ChildComponent;