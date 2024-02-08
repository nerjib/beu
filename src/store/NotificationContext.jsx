import React, { createContext, useState, useEffect } from 'react';
import swal from 'sweetalert';

// export const userId = localStorage.getItem('userId');

export const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
  const { children } = props;
  const [reload, setReload] = useState(false);
  const [allCart, setAllCart] = useState([]);

  // console.log('this is Bname', Bname);
  const getAllCart = async (userId) => {
    const allCart = JSON.parse(localStorage.getItem('cart')) ?? []
      setAllCart(allCart);
 
  };

  useEffect(() => {
    getAllCart();
  }, [reload]);

  return (
    <NotificationContext.Provider
      value={{
        reload,
        setReload,
        allCart,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
