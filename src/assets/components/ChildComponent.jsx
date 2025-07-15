import React from "react";

function ChildComponent(props) {
    return (
        <button onClick={() => props.greetHandler(" Shalini Yadav")}>
            Greet Parent </button>
    );
}

export default ChildComponent;