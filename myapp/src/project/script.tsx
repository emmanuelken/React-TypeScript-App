//CODE 01

//JavaScript Code

// import React from 'react'; 
// const Greeting = ({ name }) => { 
// return <div>Hello, {name}!</div>;
//  };
//  export default Greeting;


//Converting to TypeScript

import React from 'react';

// Define the type for the props
interface GreetingProps {
  name: string;
}

// Use the props type in the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;