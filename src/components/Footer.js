import React from 'react';
//css
import '../asset/css/Footer.css';
//images
import logo from '../asset/images/Logo.svg'
import Facebook from '../asset/images/Facebook.svg'
import Twitter from '../asset/images/Twitter.svg'
import Instagram from '../asset/images/Instagram.svg'

const Footer = () => {
    return (
        <>
            <div className='containerFooter'>
                <div className='subscribe'>
                    <div>
                        <span>Subscribe Now for Get Special Features!</span>
                        <p>Let's subscribe with us and find the fun.</p>
                    </div>
                    <div><button>Subscribe Now</button></div>
                </div>
                <div className='lastPanel'>
                    <div className = 'footerItem'>
                        <img src={logo} alt='logo.svg' />
                        <p><strong>LaslesVPN</strong> is a private virtual network that has unique features and has high security.</p>
                        <div className='socialIcons'>
                            <img src={Facebook} alt="facebook" />
                            <img src={Twitter} alt="twitter" />
                            <img src={Instagram} alt="instagram" />
                        </div>
                        <div ><p style={{ color: '#AFB5C0 !important' }}>©2020LaslesVPN</p></div>
                    </div>
                    <div className = 'footerItem'>
                        <h5>Product</h5>
                        <ul>
                            <li>Download</li>
                            <li>Pricing</li>
                            <li>Locations</li>
                            <li>Server</li>
                            <li>Countries</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className = 'footerItem'>
                        <h5>Engage</h5>
                        <ul>
                            <li>LaslesVPN ?</li>
                            <li>FAQ</li>
                            <li>Tutorials</li>
                            <li>About Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div className = 'footerItem'>
                        <h5>Earn Money</h5>
                        <ul>
                            <li>Affiliate</li>
                            <li>Become Partner</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
