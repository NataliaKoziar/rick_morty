import { useNavigate } from "react-router-dom"

export const CharactersPage = ()=>{
const navigate = useNavigate();
const goBack = ()=>{
    navigate(-1);
}

    return (
        <div>Characters page</div>
    )
}