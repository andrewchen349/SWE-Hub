import React from 'react';
import Form from '../components/InputForm';
import vector from '../assets/logintwoSmall.png';

function SignIn(props){
    return(
        <div className="box2">
            <div className="form">
                <Form />
                <div className="formextra ml-2">
                    <div>
                        <a className='link' onClick={event => window.open('/register', '_blank')}><p>Register </p></a>
                    </div>
                    <div className="ml-3">
                        <a className='link' target="_blank" onClick={event => window.open('/forgot', '_blank')}>Forgot Password?</a>
                    </div>
                </div>
            </div>
            <div className="im">
                <img alt="vector" className='photoSign' src={vector} />
            </div>
        </div>
    );
}
export default SignIn;