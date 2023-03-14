import icon from '../../../images/arrow.png'
import { useNavigate } from 'react-router-dom'
import s from './style.module.scss'
export const GoBackComponent = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1)
    return (
        <div className={s.btn_back} onClick={goBack}>
            <img src={icon} alt="arrow" />
            <div>GO BACK</div>
        </div>
    )
}