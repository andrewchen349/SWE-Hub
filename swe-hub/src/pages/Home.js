import React from 'react';
import HomePage from '../components/HomeHero';
import Table from '../components/Table';
import Hero from '../components/SignHero';
import vector from '../assets/mainSmall.png';

function Home(props){
    return(
        <div>
            <div className='box'>
                <HomePage subTitle={props.subTitle} text={props.text} />
                <img alt="vector" className='photo mr-1' src={vector} />
            </div>
            <div>
                <Hero />
            </div>
            <div className="mt-2">
                <Table />
            </div>
        </div>
    );
}

export default Home;