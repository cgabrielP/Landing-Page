import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./cards.jsx";
import Footer from "./footer.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar /> 

			<div >
				<Jumbotron />

				<div>
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>

			<Footer />
		</>
	);
};
export default Home
