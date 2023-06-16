import { ADD_TO_CARD, REMOVE_TO_CARD } from "../ActionTypes/ActionTypes";

 const ActionTypes = (product) => {
    return {
        type: ADD_TO_CARD,
        payload: product
    }
}

export default ActionTypes;

export const RemoveToCart = (product) => {
    return{
        type: REMOVE_TO_CARD,
        payload: product
    }
}

