import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Menu, Button } from 'antd';
import './banner.css'

function Banner() {
    const [current, setCurrent] = useState('mail')
    const icon = () => {
        return (
            <img src='../images/icon.png' />
        )
    }
    return (

        <div className='banner'>
            <div className='imgBanner' >
                <img src='../images/textBanner.png' />
                <div className='textBanner'>
                    <p className='text'>Ankfv sdnslv dlinslv sldbskv lsdivsddvn</p>
                </div>


            </div>
            <div className='btnBanner'>
                <button style={{border:'none', background:'none'}} >
                    <img src='../images/icon.png' />
                </button>
            </div>


        </div>

    );
}

export default Banner;
