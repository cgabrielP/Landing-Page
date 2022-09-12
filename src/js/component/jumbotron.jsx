import React from "react";
import { jumbotron } from "../../data/info";

const Jumbotron = () => {
	return (
        <div className="container">
		<div className="jumbotron p-5 bg-light">
            <h1 className="display-4">{jumbotron.title}</h1>
            <p className="lead">{jumbotron.subtitle}</p>
            <a className="btn btn-primary btn-lg my-3" href={jumbotron.button.link} role="button">
                {jumbotron.button.label}
            </a>
	    </div>
        </div>
	);
};
export default Jumbotron
