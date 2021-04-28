// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create React component
const App = () =>
{
    const buttonText ={text:"rohith"};
    return (
    <div>
    <label className="label" htmlFor="name">Enter Name:</label>
    <input id="name" type="text" />
    <button style={{backgroundColor: 'blue',color:'white'}}> {buttonText.text} </button>
  </div>
    );
};
// Take react component and show it on the screen

ReactDOM.render(<App />,document.querySelector('#root'));