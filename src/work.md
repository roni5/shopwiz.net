import React, { Component } from 'react';
// import pad from './pad'
import {omit} from "lodash";
// import logo from './logo.svg';  <img src={logo} className="App-logo" alt="logo" />
import './App.css';
// import Button from './components/button'
/**
 *  <a className="App-link"href="https://reactjs.org"
 *           target="_blank"
 *           rel="noopener noreferrer" >
 */
// interface IProps {
//   text: string;
//   age?: number;
// }
type Props = {
  email: string;
  name: string;
}

interface IState {
 email: string;
 name: string;
}
class App extends Component < Props,IState> {
 state : IState = {
   email: "",
   name: ""
 };

  handleClick = (e: React.FormEvent<HTMLInputElement>) => {
    const {name, value }: any = e.target;
    this.setState({
      [name]: value
    });
  }

  public render() {
    //  const {text} = omit(this.props, 'age');
     const { name } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload it.
           {/* { pad} */}
            {/* <Button onClick={this.handleClick}></Button>/> */}
          </p>
        </header>
        {/* <div> {text}</div> */}
        <input name='name' value={name} onChange={this.handleClick} />
        </div>
    );
  }
}

export default App;
