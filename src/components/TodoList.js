
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleTask from "./SingleTask";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [listValue, setListValue] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));

    if (storedTodos) {
      setListValue(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(listValue));
  }, [listValue]);

  const pushListValue = () => {
    // localStorage.removeItem("todos");

    setListValue([
      { id: Date.now(), title: inputValue, done: false },
      ...listValue,
    ]);
    setInputValue("");
  };

  const doneHandler = (todoId) => {
    const index = listValue.findIndex((emp) => emp.id === todoId);

    const newTodo = [...listValue];

    newTodo[index] = {
      id: listValue[index].id,
      title: listValue[index].title,
      done: !listValue[index].done,
    };
    setListValue(newTodo);
  };

  const delHandler = (todoId) => {
    if (window.confirm("Are you sure ? ")) {
      const updatedList = listValue.filter((item) => item.id !== todoId);
      setListValue(updatedList);
    }
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="list your task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input_box"
        />
        <Button variant="outlined" onClick={pushListValue}>
          {" "}
          Add Task
        </Button>
      </div>
      <div style={{ height: "50vh", position: "relative", left: "25%" }}>
        {listValue.map((v, i) => {
          return (
            <SingleTask
              i={i}
              v={v}
              doneHandler={doneHandler}
              delHandler={delHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;

/*
import React, { useEffect, useState } from 'react'
import SingleTask from './SingleTask';


const TodoList = () => {
    const [state, setState] = useState("");
    const [state1,setState1]=useState(3);
    const[state2,setState2]=useState("sakshi");
    const [toToggle,setToToggle]=useState(false);
    const [inputValue,setInputValue]=useState("");
    const [listValue,setListValue]=useState([]);
  
    // const handleChange = () => {
    //   setState1(state1 + 1);
    // } ;
    // const handleChangeDec = () =>{
    //   if(state1<1)
    //      setState1(0);
    //   else  
    //      setState1(state1-1);
    //};
    // const ToggleButton = ()=>{
    //   setToToggle(!toToggle);
    // };
    // useEffect(()=>{
    //   setToToggle(!toToggle);
    // },[setState1]);
  
    // useEffect(()=>{
    //   setToToggle(!toToggle);
    // },[inputText]);
  
    
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));

    if (storedTodos) {
      setListValue(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(listValue));
  }, [listValue]);

  const pushListValue = () => {
    // localStorage.removeItem("todos");

    setListValue([
      { id: Date.now(), title: inputValue, done: false },
      ...listValue,
    ]);
    setInputValue("");
  };

  const doneHandler = (todoId) => {
    const index = listValue.findIndex((emp) => emp.id === todoId);

    const newTodo = [...listValue];

    newTodo[index] = {
      id: listValue[index].id,
      title: listValue[index].title,
      done: !listValue[index].done,
    };
    setListValue(newTodo);
  };

  const delHandler = (todoId) => {
    if (window.confirm("Are you sure ? ")) {
      const updatedList = listValue.filter((item) => item.id !== todoId);
      setListValue(updatedList);
    }
  };

    return (
        <div className="App">
           {/* <div>THE CURRENT VALUE IS:- {state1} </div>
             <button onClick={handleChange}> INCREASES </button>
             <button onClick={handleChangeDec}> DECREASES </button>
        
              <div>Toggle value is:{JSON.stringify(toToggle)}</div>
             <button onClick={ToggleButton}>Toggle me!!</button>
              <div style={{background:toToggle?"grey":"red",height:"50vh",width:"50%"}}/>
             <button onClick={ ()=> setState1(Math.random())}> Run use effect</button>
              <input type="te
              xt" value={inputText} onChange={(event)=> handleTextChange(event)}/>
              </div> }
              {/* {JSON.stringify(listValue)}; }
                    <input
              type="text"
              placeholder="list your task..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={pushListValue}> Add Task</button>

            <div style={{ background: "blue", height: "50vh" }}>
              {listValue.map((v, i) => {
                return (
                 <SingleTask v={v} delHandler={delHandler} doneHandler={doneHandler}  />
                );
              })}
            </div>
         </div>
    );
}

export default TodoList
*/