import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

const Media = function (props) {
	const { min, max } = props.numeros;
	return (
		<Card title="Media dos numeros" green>
			<div>
				<span>Resultado:</span>
				<strong>{(min + max) / 2}</strong>
			</div>
		</Card>
	);
};

function mapStateToProps(state) {
	return {
		numeros: state.numeros,
	};
}

export default connect(mapStateToProps)(Media);
