import { Button, Modal } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { NotificationContext } from '../../store/NotificationContext'
import { Cancel } from '@mui/icons-material';



const CartItemsModal = ({showModal, hideModal}) => {
    const {allCart, reload, setReload} = useContext(NotificationContext);
    const [total, setTotal] =useState(0);

const handleCancel = (i) => {
    console.log(i);
    const myCart =[];
    allCart?.map((e,x) => {
    if (i !==x ) myCart.push(e);
})
    localStorage.setItem('cart', JSON.stringify(myCart));
    setReload(!reload);
}
useEffect(() => {
    const sum = allCart.reduce((accumulator, currentValue) => {
        return accumulator + Number(currentValue?.price) ?? 0;
      }, 0);
      setTotal(sum);
}, [reload])

return(
    <Modal
    open={showModal}  onCancel={() => hideModal(false)}
    centered
    footer={[
        <Button key="back" onClick={() => hideModal(false)}>
          Close
        </Button>,
        <Button key="submit">
          Checkout
        </Button>,
    ]}
    >
        {allCart?.map((e, i) =>
        <div key={i}>
            <img src={e?.imgurl} width={50} height={50} />
        <div className='row'> 
            {e?.name} NGN {e?.price}
            <div className='text-end my-auto'>
                <Cancel onClick={()=>handleCancel(i)} />
            </div>
        </div>
        </div>
        )}
        <div className='text-end fw-3'>
            Total amount NGN{total}
        </div>
    </Modal>
)
}

export default CartItemsModal;