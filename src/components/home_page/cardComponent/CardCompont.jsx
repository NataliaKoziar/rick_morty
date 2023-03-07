import s from './style.module.scss'
export const CardComponent = () => {
    return (
        <div className={s.card}>
            <div className={s.media}></div>
            <div className={s.headline}>
                <div className={s.title}>Rick Sanchez</div>
                <div className={s.subtitle}>Human</div>
            </div>
        </div>
    )
}