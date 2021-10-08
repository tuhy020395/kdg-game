import React from 'react'
import 'antd/dist/antd.css';
import { Row, Col, Card, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import './launchpad.css'

function LaunchPad() {
    return (
        <div className='launchpad'>
            <div class='titleLaunch'>
                <Row justify="center">
                    <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                        <h2 className='titleLaunch-text' >KINGDOM LAUNCHPAD </h2>
                        <p className='titleLaunch-content'>Game Finance brings you much more benefits than ever.</p>
                        <p className='titleLaunch-content'>Gain early access to public and special token sales at a lower price before they hit the market.</p>
                    </Col>
                </Row>

            </div>
            <div className='listLP' >
                <Row justify="center">
                    <div className='itemLP'>
                        <Col span={8}>
                            <Card
                                style={{ width: 300, paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px' }}
                                cover={
                                    <a href="/launchpaddetail">
                                        <img
                                        alt="example"
                                        src="../images/img-lp1.png"
                                        />
                                    </a>
                                }
                            >
                                <div className='status'>
                                    <p className='status-text'>Public</p>
                                </div>
                                <div className='nameLP'>
                                    <p className='textNameLP'>MU Kingdom Mobie</p>
                                    <div className='imgLP'>
                                        <img src='../images/icon4.png' alt='icon' />
                                    </div>
                                </div>
                                <div>
                                    <div className='totalRate'>
                                        <p className='totalText'>Total rate</p>
                                        <p className='totalPrice'>100.000$</p>
                                    </div>
                                    <div className='totalRate'>
                                        <p className='totalText'>Rate</p>
                                        <p className='totalPrice'>1 MECH = 0.04 BUSD</p>
                                    </div>
                                    <div className='totalRate'>
                                        <p className='totalText'>Supported</p>
                                        <p className='totalPrice'>BUSD</p>
                                    </div>
                                    <div style={{ paddingTop: '5px' }}>
                                        <Button className='btnItem' >TBA</Button>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </div>
                    <div className='itemLP'>
                        <Col span={8}>
                            <Card
                                style={{ width: 300, paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px' }}
                                cover={
                                    <a href="/launchpaddetail">
                                        <img
                                        alt="example"
                                        src="../images/img-lp2.png"
                                        />
                                    </a>
                                }

                            >
                                <div className='status'>
                                    <p className='status-text'>Public</p>
                                </div>
                                <div className='nameLP'>
                                    <p className='textNameLP'>MU Kingdom Mobie</p>
                                    <div className='imgLP'>
                                        <img src='../images/icon4.png' alt='icon' />
                                    </div>

                                </div>
                                <div>
                                    <div className='totalRate'>
                                        <p className='totalText'>Total rate</p>
                                        <p className='totalPrice'>100.000$</p>
                                    </div>
                                    <div className='totalRate'>
                                        <p className='totalText'>Rate</p>
                                        <p className='totalPrice'>1 MECH = 0.04 BUSD</p>
                                    </div>
                                    <div className='totalRate'>
                                        <p className='totalText'>Supported</p>
                                        <p className='totalPrice'>BUSD</p>
                                    </div>
                                    <div style={{ paddingTop: '5px' }}>
                                        <Button className='btnItem' >TBA</Button>
                                    </div>
                                </div>
                            </Card>
                        </Col>

                    </div>
                    <div className='itemLP'>
                        <Col span={8}>
                            <Card
                                style={{ width: 300, paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px' }}
                                cover={
                                    <a href="/launchpaddetail">
                                        <img
                                        alt="example"
                                        src="../images/img-lp3.png"
                                        />
                                    </a>
                                }

                            >
                                <div className='status'>
                                    <p className='status-text'>Public</p>
                                </div>
                                <div className='nameLP'>
                                    <p className='textNameLP'>MU Kingdom Mobie</p>
                                    <div className='imgLP'>
                                        <img src='../images/icon4.png' alt='icon' />
                                    </div>

                                </div>
                                <div>
                                    <div className='totalRate'>
                                        <p className='totalText'>Total rate</p>
                                        <p className='totalPrice'>100.000$</p>
                                    </div>
                                    <div className='totalRate'>
                                        <p className='totalText'>Rate</p>
                                        <p className='totalPrice'>1 MECH = 0.04 BUSD</p>
                                    </div>
                                    <div className='totalRate'>
                                        <p className='totalText'>Supported</p>
                                        <p className='totalPrice'>BUSD</p>
                                    </div>
                                    <div style={{ paddingTop: '5px' }}>
                                        <Button className='btnItem' >TBA</Button>
                                    </div>
                                </div>
                            </Card>
                        </Col>

                    </div>
                </Row>
            </div>
            <div>
                <Button className='btnJoinNow'>
                    Join now
                    <ArrowRightOutlined />
                </Button>
            </div>
        </div>

    );
}

export default LaunchPad;
