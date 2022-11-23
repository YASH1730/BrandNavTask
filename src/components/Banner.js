import React from 'react';

// css 
import '../asset/css/Banner.css'

//images
import banner from '../asset/images/Illustration_1.svg'
import server from '../asset/images/Server.svg'
import location from '../asset/images/location.svg'
import user from '../asset/images/user.svg'

const Banner = () => {
    return (
        <>
        <div className="containerBanner">
            <div id="bannerText">
                <span>Want anything to be easy with <strong>LaslesVPN.</strong></span>
                <p>Provide a network for all your needs with ease and fun using <strong>LaslesVPN</strong> discover interesting features from us.</p>
            <button>Get Started</button>
            </div>
            <div id="item2">
            <img src = {banner} alt = 'banner.svg'></img>
            </div>
        </div>

        {/* // statistics   */}
        <div className='containerStatistics'>
            <div>
            <img src = {user} alt = 'user.svg'></img>
            <p><strong>90+</strong><p>Users</p></p>
            </div>
            <div id = 'location'>
            <img src = {location} alt = 'user.svg'></img>
            <p><strong>30+</strong><p>Locations</p></p>
            </div>
            <div>
            <img src = {server} alt = 'user.svg'></img>
            <p><strong>50+</strong><p>Servers</p></p>
            </div>
        </div>
            
        </>
    );
}

export default Banner;
