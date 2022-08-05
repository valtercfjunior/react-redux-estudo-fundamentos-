import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from "../actions/actionTypes";

const initialState = {
	min: 50,
	max: 100,
};

export default function numerosReducers(state = initialState, action) {
	switch (action.type) {
		case NUM_MIN_ALTERADO:
			return {
				...state,
				min: action.payload,
			};
		case NUM_MAX_ALTERADO:
			return {
				...state,
				max: action.payload,
			};
		default:
			return state;
	}
}
