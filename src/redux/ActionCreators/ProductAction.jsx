import { ADD_TO_CARD } from "../ActionTypes/ActionTypes"

const addToCard = (product) => {
    return{
        type: ADD_TO_CARD,
        payload: product
    }
}

export default addToCard;