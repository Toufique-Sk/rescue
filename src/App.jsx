import React,{Component} from 'react';
import Homepage from './components/homepage/index.jsx'
import SignUp from './components/signup/index'
import './App.css';

export default class App extends Component {
  render(){
  return (
    <div className="App">
        <Homepage/>
        <SignUp/>
    </div>
  );
}
}

