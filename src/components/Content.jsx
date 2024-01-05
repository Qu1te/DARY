import React from "react";

const Content = () => {
	return(
		<main className="contentMain">
			<div className="content">
				<div className="contentContainer">
					<div className="Title">
						<h1>DIARY</h1>
					</div>
					<div className="Inputfield">
						<input type="text" />
						<input type="text" />
						<input type="text" />
						<input type="text" />
						<input type="text" />
						<input type="text" />
						<input type="text" />
						<input type="text" />
					</div>
					<div className="saveButton">
						<button>Save</button>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Content;