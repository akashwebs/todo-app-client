
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import SocialLogin from './SocialLogin';
import './Login.css'


const Login = () => {
    const { register, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleLogin = async logininfo => {
        const loginEmail=logininfo.email;
        await signInWithEmailAndPassword(loginEmail, logininfo.password);
       
    };
    let errorMessage;

    if (error) {
        
        errorMessage = <p className='text-danger'>{error?.message}</p>;
    }

   if (user) {
        navigate(from, { replace: true });
        
   }


    return (
        <div className='mx-auto'>
            <div className='login-form'>

                <h2>Login into your account</h2>
                <form className='' onSubmit={handleSubmit(handleLogin)}>
                    <input type={'email'} {...register("email")} placeholder='Enter Email' required />
                    <input type={'password'} {...register("password")} placeholder='Enter Password' required />
                    <input className='btn btn-primary' type="submit" value={'Login'} />
                </form>
                <Link to={'/forgotPassword'}>forgot your password?</Link>

                <hr />

                {errorMessage}

                <SocialLogin></SocialLogin>
                <p className='text-center my-2'>
                    Don't have an account? <Link to={'/registration'}>Registration here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;