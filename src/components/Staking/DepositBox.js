import React, { useState } from 'react'
import { Modal, Button , Input } from 'antd';

const DepositBox = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const contentModal = (
        <>
            <div className="box-modal-deposit">
                <h4 className="title-amount">
                    Enter amount
                </h4>
                <div className="box-input-value">
                    <Input placeholder="0.0" />
                    <Button type="primary"  className="button-max">
                        Max
                    </Button>
                    <span className="name-token">
                        KDG
                    </span>
                </div>
                <div className="box-confirm">
                    <Button type="primary" onClick={handleOk}  className="button-confirm">
                        Confirm
                    </Button>
                    <Button type="primary" onClick={handleCancel} className="button-cancel">
                        Cancel
                    </Button>
                </div>
            </div>
        </>
    )
    return (
        <>
            <div className="box-deposit">
                <Button type="primary" onClick={showModal}  className="button-stake">
                    +
                </Button>
                <Button type="primary" onClick={showModal} className="button-harvest">
                    -
                </Button>
            </div>
            <Modal className="modal-deposit" title="Stake KDG Tokens" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {contentModal}
            </Modal>
        </>
    )
}
export default DepositBox