import React, { useState } from 'react'
import 'antd/dist/antd.css';
import Carousel from "react-elastic-carousel";
import Item from "./item";
import './market.css'

function Market() {

    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);



    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3,itemsToScroll: 2 },
        { width: 1200, itemsToShow: 4,itemsToScroll: 2 }
    ];

    return (
        <div className='market'>
            <div>
                <p className='market-title'>GAME MARKET</p>
            </div>
            <div className='slideMarket'>
                <Carousel breakPoints={breakPoints}>
                    {items.map((item) => (
                        // <Item key={item}>
                            
                        // </Item>
                        <div  className='items'>
                        <div className='slideImg'>
                            <img src='../images/image-slide.png' alt='' />
                        </div>
                        <div className='slideText'>
                            <h3 className='slideText-top'>Mu Kingdom Mobie</h3>
                            <p className='slideText-bottom'>2020</p>
                        </div>
                    </div>

                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Market;
