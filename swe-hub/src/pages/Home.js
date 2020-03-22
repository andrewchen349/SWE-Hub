import React from 'react';
import HomePage from '../components/HomeHero';
import vector from '../assets/mainSmall.png';

function Home(props){
    return(
        <div className='box'>
            <HomePage subTitle={props.subTitle} text={props.text} />
            <img alt="vector" className='photo pl-5' src={vector} />
        </div>
    );
}

export default Home;