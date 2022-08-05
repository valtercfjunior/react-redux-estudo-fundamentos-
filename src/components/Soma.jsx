import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

const Soma = function (props) {
	const { min, max } = props.numeros;
	return (
		<Card title="Soma dos numeros" blue>
			<div>
				<span>Resultado:</span>
				<strong>{Number(min + max)}</strong>
			</div>
		</Card>
	);
};

function mapStateToProps(state) {
	return {
		numeros: state.numeros,
	};
}

export default connect(mapStateToProps)(Soma);
