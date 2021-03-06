import React, { useState } from 'react'
import 'antd/dist/antd.css';
import './footer.css'
import { Layout, Row, Col, } from 'antd';
const { Header, Content, Footer } = Layout;

function Footers() {

  return (
    <>
      <Footer className='footer'>
        <div className='footer-top'>
          <Row justify="center">
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <div  style={{ textAlign: 'start' }}>
                <img src='../images/logo.png' alt='logo' />
                <div className='footer-icon' >
                  <a className='iconMedia1' href='/'>
                    <img src='../images/tele.png' alt='logo' />
                  </a>
                  <a className='iconMedia' href='/'>
                    <img src='../images/tw.png' alt='logo' />
                  </a>
                  <a className='iconMedia' href='/'>
                    <img src='../images/youtobe.png' alt='logo' />
                  </a>
                  <a className='iconMedia' href='/'>
                    <img src='../images/fb.png' alt='logo' />
                  </a>
                  <a className='iconMedia' href='/'>
                    <img src='../images/Vector.png' alt='logo' />
                  </a>

                </div>

              </div>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <div className='footer-tab'>
                <p className='footer-title'>
                  Features
                </p>
                <p className='footer-content'><a className='footer-link' href='/'>Kinglive Streaming</a></p>
                <p className='footer-content'><a className='footer-link' href='/'>NFT Market Place</a></p>
                <p className='footer-content'><a className='footer-link' href='/'>KingdomStarter</a></p>
              </div>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <div className='footer-tab'>
                <p className='footer-title'>Project</p>
                <p className='footer-content'><a className='footer-link' href='/'>Roadmap</a></p>
                <p className='footer-content'><a className='footer-link' href='/'>Tokennomics</a></p>
                <p className='footer-content'><a className='footer-link' href='/'>Documents</a></p>
              </div>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <div className='footer-tab'>
                <p className='footer-title'>Information</p>
                <p className='footer-content'><a className='footer-link' href='/'>Official Token</a></p>
                
              </div>
            </Col>
           
          </Row>
        </div>


      </Footer>
      <div className='footer-coppy'>
        <p className='footer-coppy-text'>Copyright ?? 2020 KingdomGame.Org All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footers;
