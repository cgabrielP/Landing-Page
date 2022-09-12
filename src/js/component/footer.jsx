import React from "react";
import {footer} from "../../data/info"
export const Footer = () => (
	<footer className="bg-dark py-3 text-center ">
		<p className="text-white">{footer.text}</p>
	</footer>
);

export default Footer;