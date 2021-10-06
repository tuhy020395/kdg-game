import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import './about.css'

function About() {

    return (
        <div className='about'>
            <div class='titleAbout'>
                <Row>
                    <Col span={12} offset={6}>
                        <h2 style={{ color: '#ffff', paddingTop: '35px' }}>WHY JOIN WITH US?</h2>
                        <p>The boom in blockchain gaming was inevitable nowadays. Kingdom Game Hub provides a selection of the industry’s most creative playgroud for game project owner, investors or traders and gamers.</p>
                    </Col>
                </Row>

            </div>
            <div className='colum' >
                <Row>
                    <Col span={8}>
                        <div className='iconAbout'>
                            <img src='../images/icon1.png' alt='icon' />
                            <p>Game Projects</p>
                        </div>
                        <div>
                            <ul className='contentAbout'>
                                <li>Get crowdfunding for game development through IGO launchpad</li>
                                <li>Easily promote the game online and offline</li>
                                <li>Access the brand new blockchain payment platform</li>
                                <li>Release games at low costs and high efficiency</li>
                                <li>Keep user rentention</li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className='iconAbout'>
                            <img src='../images/icon2.png' alt='icon' />
                            <p>Game Investor</p>
                        </div>
                        <div>
                            <ul className='contentAbout'>
                                <li>Get every first info about gamefi launchpad</li>
                                <li>Be able to access to major games' tokens</li>
                                <li>Have better liquidity for game assets</li>
                                <li>Track closely their yields and item net values</li>
                                <li>Have more choices in investment</li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className='iconAbout'>
                            <img src='../images/icon3.png' alt='icon' />
                            <p>Game Player</p>
                        </div>
                        <div>
                            <ul className='contentAbout'>
                                <li>Play games on diverse game ecosystems</li>
                                <li>Have access to attractive referral programs</li>
                                <li>Earn stable income</li>
                                <li>Get prompt support from the game platforms</li>
                                <li>Integrate digital wallets into payment</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>

    );
}

export default About;
