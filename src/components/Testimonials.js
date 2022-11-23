import React, {useState} from 'react';
//css
import '../asset/css/Testimonials.css'
//images
import avatar1 from '../asset/images/avatar1.png' 
import avatar2 from '../asset/images/avatar2.png' 
import avatar3 from '../asset/images/avatar3.png' 
import star from '../asset/images/star.svg' 

const Testimonials = () => {

    const [shift,setShift] = useState({
        position : 50,
        count : 0
    })

    const testimonial = [
        {
            name : 'Viezh Robert',
            title : 'Warsaw, Poland',
            image : avatar3,
            content : '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.',
            rating : 4.5
        },
        {
            name : 'Yessica Christy',
            title : 'Shanxi, China',
            image : avatar2,
            content : '““I like it because I like to travel far and still can connect with high speed.”.”.',
            rating : 4.5
        },
        {
            name : 'Kim Young Jou',
            title : 'Seoul, South Korea',
            image : avatar1,
            content : '“This is very unusual for my business that currently requires a virtual private network that has high security.”.',
            rating : 4.5
        },
        {
            name : 'Viezh Robert',
            title : 'Warsaw, Poland',
            image : avatar3,
            content : '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.',
            rating : 4.5
        },
        {
            name : 'Yessica Christy',
            title : 'Shanxi, China',
            image : avatar2,
            content : '““I like it because I like to travel far and still can connect with high speed.”.”.',
            rating : 4.5
        },
        {
            name : 'Kim Young Jou',
            title : 'Seoul, South Korea',
            image : avatar1,
            content : '“This is very unusual for my business that currently requires a virtual private network that has high security.”.',
            rating : 4.5
        },
        {
            name : 'Viezh Robert',
            title : 'Warsaw, Poland',
            image : avatar3,
            content : '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.',
            rating : 4.5
        },
        {
            name : 'Yessica Christy',
            title : 'Shanxi, China',
            image : avatar2,
            content : '““I like it because I like to travel far and still can connect with high speed.”.”.',
            rating : 4.5
        },
        {
            name : 'Kim Young Jou',
            title : 'Seoul, South Korea',
            image : avatar1,
            content : '“This is very unusual for my business that currently requires a virtual private network that has high security.”.',
            rating : 4.5
        },
    ]

    const shiftLeft = ()=>{
        if(shift.count > 0)
        {
        setShift({
            position : shift.position + 100,
            count : shift.count-1
        })
    }
    else {
        setShift({
            position : 100,
            count : 0
        })
    }
    }

    const shiftRight = ()=>{

     if(shift.count < 2 )
        {setShift({
            position : shift.position - 50,
            count : shift.count+1
        })}
    else {
        setShift({
            position : 50,
            count : 0
        })
    }
    }

    return (
        <>
        {console.log(shift)}
            <div className='containerTestimonials'>
                <div id='heading'>
                    <span>Trusted by Thousands of Happy Customer</span>
                    <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
                </div>
                <div className='slider-wrapper'>
                    <div className='slider' id = 'innerSlider' style = {{left : `${shift.position}%`}}>
                        {
                            testimonial.map((row)=><div className='box'
                            >
                                <div className='intro'>
                                    <div>
                                        <img src={row.image} alt="" />
                                    </div>
                                    <div>
                                        <span>{row.name}</span>
                                        <p>{row.title}</p>
                                    </div>
                                    <div className = 'rating'>
                                        <p>{row.rating}</p>
                                        <img src = {star} alt = 'star'/>
                                    </div>
                                </div>
                                <div className='content'>
                                    <p>{row.content}</p>
                                </div>

                            </div>)
                        }
                    </div>
                </div>
                <div className = 'controller'>
                    <ul>
                        <li style = {{color : shift.count === 0 ? '#F53838' : 'black'}} ></li>
                        <li style = {{color : shift.count === 1 ? '#F53838' : 'black'}} ></li>
                        <li style = {{color : shift.count === 2 ? '#F53838' : 'black'}} ></li>
                    </ul>
                    <div>

                <button onClick = {shiftLeft}><h1>&larr;</h1></button>
                <button onClick = {shiftRight}><h1>&rarr;</h1></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testimonials;
