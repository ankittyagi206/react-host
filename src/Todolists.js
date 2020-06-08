import React from 'react';

const Todolists = (props) =>{

	
	return ( 
	<div className="todo_style">
	<i onClick={()=>{
		props.onSelect(props.id)

	}}
	 className="fa fa-times" aria-hidden="true"></i>
	<li className="liststyle">{props.text}</li>

	</div>
	)

};

export default Todolists;