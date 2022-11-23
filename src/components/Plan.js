import React from 'react';

//css 
import '../asset/css/Plan.css'

//image 
import cardImg from '../asset/images/Free.svg'

const Plan = () => {
    return (
        <>
            <div className="containerPlan">
                <div id='heading'>
                    <span>Choose Your Plan</span>
                    <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
                </div>
                <div className='card'>
                    <div>
                        <img src = {cardImg} alt = 'cardImage'></img>
                        <strong>Free Plan</strong>
                        <ul>
                            <li>Unlimited Bandwidth</li>
                            <li>Encrypted Connection</li>
                            <li>No Traffic Logs</li>
                            <li>Works on All Devices</li>
                        </ul>
                        <span>Free</span>
                        <button>Select</button>
                    </div>
                    <div>
                        <img src = {cardImg} alt = 'cardImage'></img>
                        <strong>Standard Plan</strong>
                        <ul>
                            <li>Unlimited Bandwidth</li>
                            <li>Encrypted Connection</li>
                            <li>Yes Traffic Logs</li>
                            <li>Works on All Devices</li>
                            <li>Connect Anywhere</li>
                        </ul>
                        <span>$9 <b>/ mo</b></span>
                        <button>Select</button>
                    </div>
                    <div>
                        <img src = {cardImg} alt = 'cardImage'></img>
                        <strong>Premium Plan</strong>
                        <ul>
                            <li>Unlimited Bandwidth</li>
                            <li>Encrypted Connection</li>
                            <li>No Traffic Logs</li>
                            <li>Works on All Devices</li>
                            <li>Connect Anywhere</li>
                            <li>Get New Features</li>
                        </ul>
                        <span>$12 <b>/ mo</b></span>
                        <button>Select</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Plan;
