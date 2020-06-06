import React from 'react';
import './App.css';


const Todolist = (props) =>{

return(
	<div className="todo_style">
	
	<li className="list"> {props.text}</li>
	</div>
	)


}

export default Todolist;