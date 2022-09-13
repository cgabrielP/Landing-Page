import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./cards.jsx";
import Footer from "./footer.jsx";
//include images into your bundle

import { navbar } from "../../data/info";
import {footer} from "../../data/info"
import { jumbotron } from "../../data/info";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar navbar={navbar}/> 

			<div >
				<Jumbotron jumbotron={jumbotron}/>

				<div className="row m-5">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>

			<Footer footer={footer}/>
		</>
	);
};
export default Home
