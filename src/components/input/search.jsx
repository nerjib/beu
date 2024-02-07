import React from 'react';
import { DropDownWrapper } from './style';
import { Avatar } from '@mui/material';

export default function SearchDropdown(props) {
  const { options, handleClick, setSelectedItem, setSearchData } = props;

  return (
    <DropDownWrapper style={!options?.length ? { display: 'none' } : {zIndex: 100}}>
      {options?.length
        ? options?.map((item) => (
            <div
              className='d-flex text-start  overflow-visible'
              key={Math.random()}
              style={{
                borderBottom: '1px solid #EDEAEA',
                // padding: '10px 20px',
              }}
              onClick={() => {
                setSelectedItem(item)
                setSearchData([]);
              }}
            >
              <div className='profile-div'>
                <div className='image-div' >
                  {item?.imgurl ? (
                  <img
                    src={item?.imgurl}
                    alt='placeholder'
                    className='img-fluid'
                    style={{ width: '100%', heigth: 150}}
                  /> 
                  ) : (
                    <Avatar />
                  )}
                </div>
                <div className='text-div flex-col'>
                {/* <span>{`${item.surname} ${item.firstName}`}</span> */}
                <span>{item.name}<br/>
                    <h6 className='text-gray-400 italic text-sm'>{item.category}</h6>
                </span>
                <br />
                <span style={{ fontSize: 12 }}>NGN{item.price}</span>
                </div>
              </div>
            </div>
          ))
        : ''}
    </DropDownWrapper>
  );
}
