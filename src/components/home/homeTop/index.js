import React from 'react'
import 'antd/dist/antd.css';
import './homeTop.css'

function HomeTop() {
    return (

        <div className='banner'>
            <div className='imgBanner' >
                <img className='bannerTop' src='../images/textBanner.png' alt='' />
                

            </div>
            <div className='textBanner'>
                    <p className='text'>A cutting-edge gamefi laundpad and huge game market for gamers</p>
                </div>

            <div className='btnBanner'>
                <button className='btn' style={{border:'none', background:'none'}} >
                    <img src='../images/icon.png' alt='' />
                </button>
            </div>


        </div>

    );
}

export default HomeTop;
