import React from 'react';
//css
import '../asset/css/GlobalMap.css'
//images
import map from '../asset/images/HugeGlobal.svg'
import Sponsored from '../asset/images/Sponsored.svg'

const GlobalMap = () => {
    return (
        <>
            <div className='containerMap'>
                <div id='heading'>
                    <span>Huge Global Network of Fast VPN</span>
                    <p>See <strong>LaslesVPN</strong> everywhere to make it easier for you when you move locations..</p>
                </div>
                <div id='map'>
                    <img src={map} alt="map.svg" />
                </div>
                < div id= 'companySection'>
                    <img src={Sponsored} alt="Sponsored" />
                </div>
            </div>
        </>
    );
}

export default GlobalMap;
