import React from 'react';
import Form from '../components/InputFormForgot';
import vector from '../assets/logintwoSmall.png';

function ForgotPassword(props){
    return(
        <div className="box2">
            <div className="form">
                <Form />
            </div>
            <div className="im">
                <img alt="vector" className='photoSign' src={vector} />
            </div>
        </div>

    );
}

export default ForgotPassword;