/*
import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

  const [state,setState]= useState("");
  const [state1,setState1]= useState(4);

  const handleChange=()=>{
    setState1(state1+1);
  };

    const handleChangeDec = () =>{
      setState1(state1-1);
    };


  return (
    <div className="App">
    <div className="my_first_div">
    <div>value of is :- {state1}</div>
    <button onClick={handleChange}>increase</button>
    <button onClick={handleChange}>decrease</button>
    </div>
    </div>
  );
}

export default App;


import logo from "./logo.svg";
import "./App.css";
import {useEffect,useState } from "react";

function App() {
  const [state, setState] = useState("");
  const [state2, setState2] = useState(3);
  const [state3, setState3] = useState("ravi");
  const [toToggle, setToToggle] = useState(false);

  const handleChange = () => {
    setState2(state2 + 1);
  };
  const handleChangeDec = () => {
    if (state2 < 1) {
      setState2(0);
    } else {
      setState2(state2 - 1);
    }
  };
  

  const toggleButton = () => {
    setToToggle(!toToggle);
  };

  return (
    <div className="App">
      <div className="my_first_div">
        <div> The current value is : {state2} </div>
        <button onClick={handleChange}> Increase </button>
        <button onClick={handleChangeDec}> Decrease </button>
        {========================== }
        <div> Toggle Value is : {JSON.stringify(toToggle)} </div>
        <button onClick={toggleButton}> Toggle Me!!</button>
        {=============================}
        <label for="fname">NAME:</label>
        <input type="text" id="fname" name="fname"></input>
      </div>
    </div>
  );
}

export default App;
*/

import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState} from "react";
import ButtonAppBar from "./components/Navbar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <ButtonAppBar/>
     
      <TodoList />
    </>
  );
}

export default App;
