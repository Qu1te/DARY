import React,{useState,useRef} from "react";

const Content = () => {
	

	return(
		<main className="MainContent">
			<div className="Title">
				<h1>Deary</h1>
			</div>
			<div className="TEXT">
				<textarea  cols="30" rows="10"></textarea>
			</div>
			<div className="Save">
				<div className="SaveButton">
					<button>Save</button>
				</div>
			</div>
		</main>
	)
}

export default Content;