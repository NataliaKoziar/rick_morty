
import { actionTypes } from "./action/actionTypes";


const initialState ={
    characters:[],
    inputValue:'',
    loading:false
}

export const CharactersReducer = (state= initialState, action)=>{
    switch(action.type){
        case actionTypes.ADD_INIT:
            return {
                ...state,
                characters: action.payload
            }
        case actionTypes.CHANGE_SEARCH_VALUE:
            return {
                ...state,
                inputValue: action.payload

            };
        
        case actionTypes.LOADING:
            return {
                ...state,
                loading: action.payload

            };
        default:
            return state;
    }
}