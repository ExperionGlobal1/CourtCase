import {React, useEffect} from 'react'
import AuthService from '../../api/authService';

function Register() {

    useEffect(() => {
        var service = new AuthService();
        service.test().then(res=>{
            console.log(res);
        })
    }, []);
  return (
    <div>Register</div>
  )
}

export default Register