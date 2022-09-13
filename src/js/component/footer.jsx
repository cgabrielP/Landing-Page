import React from "react";
import PropTypes from "prop-types";

export const Footer = ({footer}) => (
	<footer className="bg-dark py-3 text-center ">
		<p className="text-white">{footer.text}</p>
	</footer>
);
Footer.propTypes = {
	footer: PropTypes.object.isRequired
  }

export default Footer;