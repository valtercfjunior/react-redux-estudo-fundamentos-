import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

const Sorteio = function (props) {
	const aleatorio =
		parseInt(Math.random() * (props.numeros.max - props.numeros.min)) +
		props.numeros.min;
	return (
		<Card title="Sorteio do um numeros" purple>
			<div>
				<span>Resultado:</span>
				<strong>{aleatorio}</strong>
			</div>
		</Card>
	);
};
function mapStateToProps(state) {
	return {
		numeros: state.numeros,
	};
}

export default connect(mapStateToProps)(Sorteio);
