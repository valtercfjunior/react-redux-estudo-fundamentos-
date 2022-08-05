import "./Intervalo.css";
import { connect } from "react-redux";

import Card from "./Card";

import {
	alterarNumeroMaximo,
	alterarNumeroMinimo,
} from "../store/actions/numeros";

const Intervalo = function (props) {
	const { min, max } = props.numeros;

	return (
		<Card title="Intervalo de numeros" red>
			<div className="Intervalo">
				<span>
					<strong>Minimo:</strong>
					<input
						type="number"
						value={min}
						onChange={(e) => props.alteraMinimo(+e.target.value)}
					/>
				</span>
				<span>
					<strong>Maximo:</strong>
					<input
						type="number"
						value={max}
						onChange={(e) => props.alteraMaximo(+e.target.value)}
					/>
				</span>
			</div>
		</Card>
	);
};

function mapStateToProps(state) {
	return {
		numeros: state.numeros,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		alteraMinimo(novoNumero) {
			const action = alterarNumeroMinimo(novoNumero);
			dispatch(action);
		},
		alteraMaximo(novoNumero) {
			const action = alterarNumeroMaximo(novoNumero);
			dispatch(action);
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
