import React from "react";

function ConditionalRendering(props) {
    return (
        <div>
        {props.showMessage && <p>Welcome to React rendering!</p>}
        </div>
    );
}

export default ConditionalRendering;