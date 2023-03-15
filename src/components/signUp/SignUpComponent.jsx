
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase/config/firebase-config'
import { Link } from "react-router-dom"
import { useForm, } from "react-hook-form"
import logo from '../../images/logo.png'
import s from '../signIn/style.module.scss'

export const SignUpComponent = () => {
    const { register, formState: { errors, }, handleSubmit, reset, } = useForm();
    const navigate = useNavigate();

    const handleSignUp = async (data) => {
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password,)
            updateProfile(auth.currentUser, {
                displayName: `${data.name}`
            })
            const user = {
                name: data.name,
                email: data.email
            };
            localStorage.setItem('user', JSON.stringify(user))
            navigate('/')
        } catch (e) {
            console.log(e)
            alert('Account with this email already exists!')
            navigate('/login')
        }
    }
    const onSubmit = (data) => {
        reset();
        handleSignUp(data)
    }



    return (
        <>
        <div className={s.overlay}></div>
        <div className={s.container}>
            <h2>Welcome</h2>
            <img src={logo} alt="logo" style={{ width: '90%' }} />
            <p>Sign Up to continue</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Full name
                    <input {...register('name',
                        { required: "This field is required!", }
                    )} />
                </label>
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
                <div className={s.message}>{(errors?.email || errors?.password) && <p> All fields are reqiured!!!</p>}</div>
                <input type="submit" value={'Sign up'} className={s.btn} />
            </form>
            <p>Already have an account?
                <Link to={'/login'}> Log In</Link>
            </p>
        </div>
        </>
    )
}