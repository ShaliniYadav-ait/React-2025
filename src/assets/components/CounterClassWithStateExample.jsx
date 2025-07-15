import React from "react";
import styles from "./WelcomeStyle.module.css";

class CounterClassWithStateExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button className={styles.increment} onClick={this.increment}>Increment</button>
                <button className={styles.decrement} onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}

export default CounterClassWithStateExample;