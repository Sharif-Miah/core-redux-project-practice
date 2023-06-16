import { ADD_TO_CARD, REMOVE_TO_CARD } from "../ActionTypes/ActionTypes";

const initialState = {
    cart: []
};


const productReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CARD:
        return{
            ...state,
            cart: [...state.cart, action.payload]
        }
        case REMOVE_TO_CARD:
        return{
            ...state,
            cart: state.cart.filter(product => product._id !== action.payload._id)
        }

        default:
        return state
    }
}

export default productReducer;