import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import Verify from '../../Pages/Verify/Verify';
import Loading from '../Loading/Loading';

const PrivateAuth = ({children}) => {
    const [user,loading,error] = useAuthState(auth)
    const location = useLocation()
    if(loading){
        return <Loading></Loading>
    }
    if(user?.emailVerified === false){
        return <Verify></Verify>
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateAuth;