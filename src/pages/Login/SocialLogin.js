import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, gLoading, googleError] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

   
    if (googleUser) {
        navigate(from, { replace: true });
    }
    const handleGoogleLogin = () => {
        signInWithGoogle()

    } 
    let errorMessage;
    if(googleError){
        errorMessage= <p>{googleError.message}</p>
    } 
    
    return (
        <div>
            <div className='text-center'>
                <h4>Another Login: </h4>

                <span className='text-danger d-block'>{googleError?.message} </span>
                <button onClick={handleGoogleLogin} className='btn btn-danger py-2 px-3'>Google</button> <br />
                

            </div>
        </div>
    );
};

export default SocialLogin;