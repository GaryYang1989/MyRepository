import React, {Component} from "react";

function SelectColor(props){
    var selectStyle = {
      padding: '2px',
      cursor: "pointer"
    };
  
    return (
      <div> 
        <label htmlFor="colorSelector">Select background color:  </label>
         <select style={selectStyle} id="colorSelector" onChange={(event)=>props.onChangeColor(event.target.value)}>
            <option value="rgb(56, 220, 250)">Ligh Blue</option>
            <option value="rgb(255,160,122)">lightsalmon</option>
            <option value="#90EE90">lightgreen</option>
            <option value="#F5F5DC">beige</option>
            <option value="White">White</option>
            <option value="rgb(255,255,224)">lightyellow</option>
          </select>
      </div>
    )
  }
export default SelectColor  