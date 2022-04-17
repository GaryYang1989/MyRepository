import React from "react";

function SetCount(props){
    var inputStyle ={
    width: "3em",
    marginRight: "5px",
    }
  
    var buttonStyle = {
        cursor: "pointer",
        height: "1.6em",
        marginTop: "5px",
        marginBottom: "5px"
    }
  
    const onSubmit = (e) => {
      // prevent reload entire page due to submit default setting
      e.preventDefault();  
  
      //get value from first item [0] which is the input of the form
      props.onChangeCount(e.target[0].value); 
    };
  
    return (
        <form onSubmit={onSubmit}>
           <label >Change ball counts: </label>
           <input style={inputStyle} type="number" defaultValue={props.count} min="1" max="400"></input>
           <button style={buttonStyle} type="submit">change</button>
        </form>
    )

}
export default SetCount;