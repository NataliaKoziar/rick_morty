import { Link} from "react-router-dom";
import s from './style.module.scss'
export const CardComponent = ({data}) => {
    return (
      <div className={s.container}>
      <Link to ={`/characters/${data?.id}`} style={{textDecoration:"none"}}>
        <div className={s.card}>
            <div className={s.media} style={{backgroundImage:`url(${data.image})`}}></div>
            <div className={s.headline}>
                <div className={s.title}>{data.name}</div>
                <div className={s.subtitle}>{data.species}</div>
            </div>
        </div>
      </Link>
      </div>
    )
}