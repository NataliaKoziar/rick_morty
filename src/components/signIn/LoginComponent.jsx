import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons'
import { auth } from '../../firebase/config/firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { facebookProvider, googleProvider } from '../../firebase/config/authMethods';
import { signInWithEmailAndPassword } from "firebase/auth"
import { Link } from "react-router-dom"
import { useForm, } from "react-hook-form"
import logo from '../../images/logo.png'
import s from './style.module.scss'
import { useNavigate } from "react-router-dom"
export const LoginComponent = () => {

    const { register, formState: { errors, }, handleSubmit, reset, } = useForm();
    const navigate = useNavigate();

    const handleLogin = async (data) => {
        // try {

        //     await signInWithEmailAndPassword(auth, data.email, data.password)
        //     const user = {
        //         name: res.user.displayName,
        //         email: res.user.email
        //     };
        //     localStorage.setItem('user', JSON.stringify(user))
        //     navigate('/characters');
        //     console.log('login ok');

        // }
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((res)=>{
            const user = {
                name: res.user.displayName,
                email: res.user.email
            };
            localStorage.setItem('user', JSON.stringify(user))
            navigate('/')
        })
        .catch((err) => {
            console.log(err);
            alert('Invalid email or password, please try again!')
            navigate('/login')
        });
    }

    const onSubmit = (data) => {
        reset()
        handleLogin(data)
    }

    const socialMediaAuth = (provider) => {
        signInWithPopup(auth, provider)
            .then((res) => {
                const user = {
                    name: res.user.displayName,
                    email: res.user.email
                };
                localStorage.setItem('user', JSON.stringify(user))
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                alert('Please, try again!')
                navigate('/login')
            });
    };
    return (
        <>
        <div className={s.overlay}></div>
        <div className={s.container}>
            <h2>Welcome</h2>
            <img src={logo} alt="logo" style={{ width: '90%' }} />
            <p>Sign In to continue</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label >Email
                    <input {...register('email', {
                        required: "This field is required!",
                        pattern: { value: /^([A-z0-9._-]+)(@[A-z0-9.-]+)(\.[A-z]{2,3})$/, message: "Invalid email!" },

                    })} />
                </label>
                <label>Password
                    <input
                        type={'password'}
                        {...register('password', {
                            required: "This field is required!", pattern: /^[\w-_.]{6,15}$/,
                        })} />
                </label>
                <div className={s.message}>{(errors?.email || errors?.password) && <p> Invalide email or password!!!</p>}</div>
                <input type="submit" value={'Sign in'} className={s.btn} />
            </form>
            <p>Don`t have an account yet?
                <Link to={'/signup'}> Log Up</Link>
            </p>
            <hr />
            <h4>OR</h4>

            <FacebookLoginButton onClick={() => socialMediaAuth(facebookProvider)} style={{ height: '40px', margin: 10 }} />
            <GoogleLoginButton onClick={() => socialMediaAuth(googleProvider)} style={{ height: '40px', margin: 10 }} />
        </div>
        </>
    )
}