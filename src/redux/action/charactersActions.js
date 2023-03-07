import {actionTypes} from './actionTypes'


export const charactersActions={
    addInit:(payload)=>({type:actionTypes.ADD_INIT, payload}),
    changeSearch:(payload)=>({type:actionTypes.CHANGE_SEARCH_VALUE, payload}),
    setLoading:(payload)=>({type:actionTypes.LOADING, payload}),
}