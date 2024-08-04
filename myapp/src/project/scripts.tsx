// Code 02 :

// import React, { Component } from 'react'; 
// class Counter extends Component { 
// state = {
//  count: 0
//  }; increment = () => {
//  this.setState({ count: this.state.count + 1 }); 
// }; 
// render() { 
// return 
// ( <div> 
// <p>Count: {this.state.count}</p> 
// <button onClick={this.increment}>Increment</button> 
// </div> );
//  }
//  } 
// export default Counter;



//Converting to TypeScript
import React, { Component }from "react";

//Define the type for the state
interface CounterState {
    count: number;
}

class Counter extends Component<{}, CounterState> {
    //Call the constructor
    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0
        };

    //Binding the increment method to the class
    this.increment = this.increment.bind(this)
}

//Increment method with proper typing
increment() {
    this.setState((prevState) => ({ count: prevState.count + 1}))
}

render() {
    return (
        <div>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
        </div>
    )
}

}


export default Counter;



