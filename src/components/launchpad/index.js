import React, { useState } from 'react'
import { isMobile } from 'react-device-detect';
import 'antd/dist/antd.css';
import './style.css'
import { Row, Col, Card, Button, Progress } from 'antd';

function LaunchPad() {
  const [itemsNext, setItemsNext] = useState([1, 2, 3]);
  const [itemsComming, setItemsComming] = useState([1, 2, 3]);
  const [itemsComplated, setItemsComplated] = useState([1, 2]);

  const ComplatedItem = () => {
    if (!isMobile) {
      return (
        itemsComplated.map((item, key) => (
          <div key={item} className='comp-item'>
            <Row justify="center">
              <Col span={18}>
                <div className='complete-item'>
                  <div className='complete-logo'>
                    <img src='../images/comp-logo.png' alt='icon' />
                  </div>
                  <div className='complete-name'>
                    <div className='complete-name-top'>
                      <p className='complete-stt'>Public</p>
                      <p className='complete-clam'>CLAMABLE</p>
                    </div>
                    <p className='complete-name-bot'>
                      MU Kingdom Mobie
                    </p>
                  </div>
                  <div className='complete-total'>
                    <p className='complete-title'>Total Raise</p>
                    <p className='complete-value'>100.000 BUSD</p>
                  </div>
                  <div className='complete-parti'>
                    <p className='complete-title'>Participants</p>
                    <p className='complete-value'>500</p>
                  </div>
                  <div className='complete-process'>
                    <p className='process-top'>Progcess
                      <Progress
                        strokeColor={{
                          '0%': '#FAC800',
                          '100%': '#FAC800',
                        }}
                        percent={100} />
                      <div className='value-process' >
                        <p className='first-process' >100%</p>
                        <p className='end-process'>50/100 KDG</p>
                      </div>
                    </p>

                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ))
      )
    }
    return (
      itemsComplated.map((item, key) => (
        <Row key={item} justify="center">
          <div className='itemLP'>
            <Col span={8}>
              <Card style={{ width: 300 }}>
                <div style={{ display: 'flex' }}>
                  <div className='complete-logo-mb'>
                    <img src='../images/comp-logo.png' alt='icon' />
                  </div>
                  <div className='complete-name-mb'>
                    <div className='complete-name-top-mb'>
                      <p className='complete-stt-mb'>Public</p>
                      <p className='complete-clam-mb'>CLAMABLE</p>
                    </div>
                    <p className='complete-name-bot-mb'>
                      MU Kingdom Mobie
                    </p>
                  </div>
                </div>
                <div style={{ paddingTop: '11px' }}>
                  <div className='totalRate'>
                    <p className='totalText'>Total rate</p>
                    <p className='totalPrice'>100.000$</p>
                  </div>
                  <div className='totalRate'>
                    <p className='totalText'>Rate</p>
                    <p className='totalPrice'>1 MECH = 0.04 BUSD</p>
                  </div>
                  <div className='complete-process-mb'>
                    <p className='process-top-mb'>Progcess
                      <Progress
                        strokeColor={{
                          '0%': '#FAC800',
                          '100%': '#FAC800',
                        }}
                        percent={100} />
                      <div className='value-process-mb'>
                        <p className='first-process-mb' >(100%)</p>
                        <p className='end-process-mb'>50/100 KDG</p>
                      </div>
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
          </div>
        </Row>
      ))
    )
  }

  const NextItem = () => {
    return (
      itemsNext.map((item, key) => (
        <div key={item} className='itemLP'>
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
                <div style={{ paddingTop: '5px', display:'flex' }}>
                  <Button className='btnItem-wl' >Whitelist end in
                    <img src='../images/wl-icon.png' alt='icon' />
                    <p className='countDown'>03 days</p>
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        </div>
      )
      )
    )
  }

  const CommingItem = () => {
    return (
      itemsComming.map((item) => (
        <div key={item} className='itemLP'>
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
      ))
    )
  }

  return (
    <div>
      <div className='bg-top'></div>
      <div className='body'>
        <div className='next'>
          <div className='title'>
            <p>Next to launch</p>
          </div>
          <div className='next-item'>
            <div className='listLP' >
              <Row justify="center">
                <NextItem />
              </Row>
            </div>
          </div>
        </div>

        <div className='comming'>
          <div className='title'>
            <p>UPCOMMING</p>
          </div>
          <div className='comming-item'>
            <div className='listLP' >
              <Row justify="center">

                <CommingItem />

              </Row>
            </div>
          </div>
        </div>

        <div className='complete'>
          <div className='title'>
            <p>COMPLETED SALES</p>
          </div>

          <ComplatedItem />

        </div>
      </div>
    </div>
  )
}

export default LaunchPad;
