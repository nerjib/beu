import React from 'react'

function ProductCard({
  img,
  title,
  text,
  price,
  url,
  setSelectedProduct,
  setPreviewImg,
  data,
}) {
  return (
    <div className='w-100 h-100 mx-3'>
      <div style={{ height: 200, width: 200}}>
      {
        img ? <img alt='beauty hub' src={img} className="object-fill" /> : ""
      }
      </div>
      <div className='text-secondary p-2'>
        <p className='fs-6 lh-base text-break' dangerouslySetInnerHTML={{__html: title}} />
      </div>
      <div style={{ display: 'flex', flexDirection:'row'}}>
      <p className='fs-6 text-red-700 lh-base text-break' dangerouslySetInnerHTML={{__html: 'NGN ' + price}} />
      </div>
      <div style={{ display: 'flex', flexDirection:'row'}}>
      <div className='mx-auto text-gray-900'>
      <button onClick={() => {
        setSelectedProduct(data);
        setPreviewImg(true);
      }}>preview</button>
      <button>+ cart</button>
      </div>
      </div>
    </div>
  )
}

export default ProductCard