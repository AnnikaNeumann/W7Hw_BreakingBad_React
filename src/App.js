import './App.css';
import React from 'react';
import BreakingBadBox from './container/BreakingBadBox';

<link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>

function App() {
  return (
    <div className="App" >

      <h1>Find your Meth Lab Partner</h1> 
      <img className="logoImage" src={require("./images/BBlogo.jpeg")} alt='Breaking Bad Image'/>

      <BreakingBadBox/>
    </div>
  );

}


export default App;
