import React from "react";
import PropTypes from "prop-types";
import { cards } from "../../data/info";

const Card = () => {
	return (
	<div className="card container-md col-md-3">
		{
		cards.opt.map(({ link }, index) => {
			return (<img src={link} key={index} className="card-img-top" alt="..." />)
		})}
		<div className="card-body">
			<h5 className="card-title">Card title</h5>
			<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		</div>
		<div className="card-footer row justify-content-center">
			<a href="#" className="btn btn-primary d-flex col-5">Go somewhere</a>
			</div>
	</div>)
}
cards.propTypes = {
	cards: PropTypes.object.isRequired
}
export default Card;