import { GoBackComponent } from "./arrowBack/GoBackComponent"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { charactersActions } from '../../redux/action/charactersActions'
import { useNavigate } from "react-router-dom"
import s from './style.module.scss'

export const CharactersPage = () => {
    const user = JSON.parse(localStorage.getItem('user')) || null;
    const [item, setItem] = useState();
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(charactersActions.setLoading(true))
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(response => {
                setItem(response);
                dispatch(charactersActions.setLoading(false))
            })
            .catch(err => console.error(err));

    }, [id])


    return (
        <>
        {user != null? <div className={s.wrapper}>
            <GoBackComponent />
            <div className={s.container}>
                <div className={s.avatar} style={{ backgroundImage: `url(${item?.image})` }}></div>
                <div className={s.name}>{item?.name}</div>
                <div className={s.title}>Information</div>
                <div className={s.items}>
                    <div className={s.item}>
                        <div className={s.category}>Gender</div>
                        <div className={s.information}>{item?.gender}</div>
                    </div>
                    <div className={s.item}>
                        <div className={s.category}>Status</div>
                        <div className={s.information}>{item?.status}</div>
                    </div>
                    <div className={s.item}>
                        <div className={s.category}>Specie</div>
                        <div className={s.information}>{item?.species}</div>
                    </div>
                    <div className={s.item}>
                        <div className={s.category}>Origin</div>
                        <div className={s.information}>{item?.origin?.name}</div>
                    </div>
                    <div className={s.item}>
                        <div className={s.category}>Type</div>
                        <div className={s.information}>{item?.type.length ? item?.type : 'Unknown'}</div>
                    </div>

                </div>
            </div>
        </div>: navigate('/login')}
        </>)
}