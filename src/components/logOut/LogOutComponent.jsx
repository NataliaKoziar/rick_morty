import {auth} from '../../firebase/config/firebase-config'
import {signOut} from 'firebase/auth'
import s from './style.module.scss'
export const LogOutComponent=({signOutUser})=>{

    const handleSignOut = async () => {
        await signOut(auth)
        localStorage.setItem('user', null)
        signOutUser();
        
    }

    return(
        <button className={s.logOut } onClick={handleSignOut}>LogOut</button>
    )
}