import { useDispatch, useSelector } from "react-redux"
import { CardComponent } from "./cardComponent/CardCompont"
import {charactersActions} from "../../redux/action/charactersActions"



export const HomePage= ()=>{
    const data = useSelector(state=>state.characters.characters)
    
    const dispatch = useDispatch();
    const getData = ()=>{
        dispatch(charactersActions.setLoading(true))
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(response => {
                // console.log(response)
              dispatch(charactersActions.addInit(response.results))
              dispatch(charactersActions.setLoading(false))
            })
            .catch(err => console.error(err));  
    }

    

    return(
        <div><CardComponent/></div>
    )
}