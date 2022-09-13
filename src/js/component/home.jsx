import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./cards.jsx";
import Footer from "./footer.jsx";
//include images into your bundle

import { navbar } from "../../data/info";
import {footer} from "../../data/info"
import { jumbotron } from "../../data/info";
import { card } from "../../data/info";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar navbar={navbar}/> 

			<div >
				<Jumbotron jumbotron={jumbotron}/>
<div className="container">
				<div className="row my-5">
					<Card card={card} />
					<Card card={card} />
					<Card card={card}/>
					<Card card={card} />
				</div>
				</div>
			</div>

			<Footer footer={footer}/>
		</>
	);
};
export default Home
