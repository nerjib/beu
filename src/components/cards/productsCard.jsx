import React from 'react'

function ProductCard({
  img,
  title,
  text,
  price,
  url,
}) {
  return (
    <div className='w-100 h-100 mx-3'>
      {
        img ? <img alt='beauty hub' src={img} className="w-100 h-150p img-fluid" /> : ""
      }
      <div className='text-secondary p-2'>
        <p className='fs-6 lh-base text-break' dangerouslySetInnerHTML={{__html: title}} />
        <span className='text-break' dangerouslySetInnerHTML={{__html: text}} />
      </div>
      <div style={{ display: 'flex', flexDirection:'row'}}>
      <p className='fs-6 text-red-700 lh-base text-break' dangerouslySetInnerHTML={{__html: price}} />
      </div>
      <div style={{ display: 'flex', flexDirection:'row'}}>
      <div className='mx-auto text-gray-900'>
      <button>preview</button>
      <button>+ cart</button>
      </div>
      </div>
    </div>
  )
}

export default ProductCard