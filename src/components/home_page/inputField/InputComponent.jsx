import icon from '../../../images/icon.png'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { charactersActions } from '../../../redux/action/charactersActions'
import s from './style.module.scss'

export const InputComponent = ()=>{
    const inputValue=useSelector(state=>state.characters.inputValue);
    const [value, setValue]=useState(inputValue)
    const dispatch = useDispatch();
  
    useEffect(()=>{
      const delayDebounceFn = setTimeout(() => {
       dispatch(charactersActions.changeSearch(inputValue))
      
      }, 1000)
  
      return ()=>clearTimeout(delayDebounceFn)
    }, [value])
    
    return(
        <div className={s.input_field}>
            <img src={icon} alt="icon" />
            <input type='text'
            placeholder='Filter by name...'
             value={value}
             onChange={(event)=>setValue(event.target.value)}/>
        </div>
    )
}