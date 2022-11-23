import React from 'react';
// css
import '../asset/css/Features.css'

// image 
import banner from '../asset/images/Illustration_2.svg';


const Features = () => {
    return (
        <>
          <div className = 'containerFeatures'>
          <div id="image"><img src={banner} alt = 'feature_img'></img></div>
          <div id="content">
            <span>We Provide Many Features You Can Use</span>
            <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
            <ul>
                <li>Powerful online protection.</li>
                <li>Internet without borders.</li>
                <li>Supercharged VPN</li>
                <li>No specific time limits.</li>
            </ul>
          </div>
          </div>  
        </>
    );
}

export default Features;
