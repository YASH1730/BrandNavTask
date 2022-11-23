import React, {useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'; // this functions will help us the withdraw and deposits the state changes to the global store

// components
import Navbar from './Navbar';
import Banner from './Banner';
import Features from './Features';
import Plan from './Plan';
import GlobalMap from './GlobalMap';
import Testimonials from './Testimonials';
import Footer from './Footer';

// Actions
import {AddNum,SubNum} from '../Redux/Action/index'

const Home = () => {
    
    const number = useSelector(state=>state.changeNumber); // for acquiring the specific state
    const dispatch = useDispatch(); // for function throwing


    return (
        <>
        <Navbar></Navbar>
        <Banner></Banner>
        <Features></Features>
        <Plan></Plan>
        <GlobalMap></GlobalMap>
        <Testimonials></Testimonials>
        <Footer></Footer>
        </>
    );
}

export default Home;
