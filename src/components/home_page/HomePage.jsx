import { useDispatch, useSelector } from "react-redux"
import { CardComponent } from "./cardComponent/CardCompont"
import { charactersActions } from "../../redux/action/charactersActions"
import { useEffect } from "react"
import logo from '../../images/logo.png'
import s from './style.module.scss'
import { InputComponent } from "./inputField/InputComponent"


export const HomePage = () => {
    const data = useSelector(state => state.characters.characters);
    const inputValue = useSelector(state => state.characters.inputValue);
    const isloading = useSelector(state => state.characters.loading);
    const dispatch = useDispatch();

    const checkName = (obj, wordArr)=>{
        return wordArr.some(el=>obj.name.toLowerCase().includes(el.toLowerCase()))
    }
    const findMatch = ()=>{
        data.sort((a,b)=>a.name.localeCompare(b.name))
        if(inputValue.trim().length>0){
            const arr = inputValue.trim().split(' ');
            const filterArr = data.filter(el=>checkName(el, arr))
            return filterArr
        }
        return data
    }
    const getData = () => {
        dispatch(charactersActions.setLoading(true))
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(response => {
                dispatch(charactersActions.addInit(response.results))
                dispatch(charactersActions.setLoading(false))
            })
            .catch(err => console.error(err));
    }
    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            <div className={s.logo}>
                <img src={logo} alt="logo" />
            </div>
            <InputComponent />
            <div className={s.container}>{findMatch().map(el => <CardComponent key={el.id} data={el} />)}</div>
        </>
    )
}