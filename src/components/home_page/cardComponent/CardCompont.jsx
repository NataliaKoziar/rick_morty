import s from './style.module.scss'
export const CardComponent = ({data}) => {
    return (
        <div className={s.card}>
            <div className={s.media} style={{backgroundImage:`url(${data.image})`}}></div>
            <div className={s.headline}>
                <div className={s.title}>{data.name}</div>
                <div className={s.subtitle}>{data.species}</div>
            </div>
        </div>
    )
}