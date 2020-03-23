import React from 'react';
import SignHero from '../components/SignHero';
import Form from '../components/InputForm';
import vector from '../assets/logintwoSmall.png';


function SignIn(props){
    return(
        <div className="box2">
            
            <div className="form">
                {/* <SignHero /> */}
                <Form />
            </div>
            
            <div className="im">
                <img alt="vector" className='photoSign' src={vector} />
            </div>

        </div>
    );
}

export default SignIn;