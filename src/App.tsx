import React, { Component } from 'react';
// import pad from './pad'
// import logo from './logo.svg';  <img src={logo} className="App-logo" alt="logo" />
import './App.css';
// import Button from './components/button'
 import MyComponent from './components/mycomp'
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload it.
           {/* { pad} */}
            {/* <Button onClick={handleClick}></Button>/> */}
          </p>
          <MyComponent name="bar" />
        </header>
      </div>
    );
  }
}

export default App;
