import React from 'react';
import HomePage from '../components/HomeHero';
import Table from '../components/Table';
import Hero from '../components/SignHero';
import Footer from '../components/Footer';
import vector from '../assets/mainSmall.png';

function Home(props){
    return(
        <div>
            <div className='box hero'>
                <HomePage subTitle={props.subTitle} text={props.text} />
                <img alt="vector" className='photo mr-1' src={vector} />
            </div>
            <div className='hero'>
                <Hero />
            </div>
            <div className="mt-2 tablect" >
                <Table />
            </div>
            <div className="text-center">
                <Footer />
            </div>
        </div>
    );
}

export default Home;