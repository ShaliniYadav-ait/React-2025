import React, { useState } from "react";
import styles from "./WelcomeStyle.module.css";

function CounterFunctionWithHooks() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Hook Counter: {count}</h1>
            <button className={styles.decrement} onClick={increment}>Increment</button>
            <button className={styles.increment} onClick={decrement}>Decrement</button>
        </div>
    );
}

export default CounterFunctionWithHooks;