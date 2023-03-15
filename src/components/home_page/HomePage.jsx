import { useDispatch, useSelector } from "react-redux"
import { CardComponent } from "./cardComponent/CardCompont"
import { charactersActions } from "../../redux/action/charactersActions"
import { useEffect, useState } from "react"
import logo from '../../images/logo.png'
import s from './style.module.scss'
import { InputComponent } from "./inputField/InputComponent"
import { LogOutComponent } from "../logOut/LogOutComponent"
import { useNavigate } from "react-router-dom"

export const HomePage = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)
    const data = useSelector(state => state.characters.characters);
    const inputValue = useSelector(state => state.characters.inputValue);
    const isloading = useSelector(state => state.characters.loading);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const signOutUser = () => {
        setUser(null)
    }

    const checkName = (obj, wordArr) => {
        return wordArr.some(el => obj.name.toLowerCase().includes(el.toLowerCase()))
    }
    const handleFindMatch = () => {
        data.sort((a, b) => a.name.localeCompare(b.name))
        if (inputValue.trim().length > 0) {
            const arr = inputValue.trim().split(' ');
            const filterArr = data.filter(el => checkName(el, arr))
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

            {user != null ? <>
                <LogOutComponent signOutUser={signOutUser}/>
                <div className={s.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <InputComponent />
                {!isloading && <div className={s.container}>{handleFindMatch().map(el => <CardComponent key={el.id} data={el} />)}</div>}

            </> : navigate('/login')}
        </>
    )
}