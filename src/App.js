import './App.css';
import SetCount from './Input.js';
import SelectColor from './Setbg.js';
import Balls from './Balls.js';
import React, {Component} from "react";

function App(){
  const [count, setCount] = React.useState(50);
  const [color, setColor] = React.useState("rgb(56, 220, 250)");

  var compStyle = {
    display: "flex",
    height: "60px",
    marginLeft:"auto",
    marginRight: "auto",
    backgroundColor:"lightgray",
    flexDirection: "column",
    alignItems: "center",
    padding:"5px"
  };

  return (
  <div style={compStyle}>
      <SetCount count={count} onChangeCount={(newCount)=>{setCount(newCount)}}/>
      <SelectColor color={color} onChangeColor={(newColor)=>{setColor(newColor)}}/>
      <Balls color={color} count={count}></Balls>
    </div>
  )
}
export default App;