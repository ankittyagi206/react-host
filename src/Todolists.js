import React from 'react';


const Todolist = (props) =>{

return(
	<div>
	
	<li className="list"> {props.text}</li>
	</div>
	)


}

export default Todolist;