
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import './home.scss'
import {useEffect, useState} from 'react'
import { ComplexNavbar } from '../components/header/topnav';
import ProductCard from '../components/cards/productsCard';
import hero from '../assets/hero1.jpg'

function Home() {
  
  useEffect(() => {
  }, [])

  const newArrivals = [
    {
      imgUrl: 'https://static.thcdn.com/images/medium/webp/widgets/290-en/42/original-MascaraTerrybly_2022_Packshot_Creative_PinkBackground_1000x1000-110442.jpg',
      title: 'hhh',
      summary: 'humra',
      price: 'NGN100'
    },
    {
      imgUrl: 'https://static.thcdn.com/images/medium/webp/widgets/290-en/42/original-MascaraTerrybly_2022_Packshot_Creative_PinkBackground_1000x1000-110442.jpg',
      title: 'hhh',
      summary: 'BBB',
      price: 'NGN100'
    },
    {
      imgUrl: 'https://static.thcdn.com/images/medium/webp/widgets/290-en/42/original-MascaraTerrybly_2022_Packshot_Creative_PinkBackground_1000x1000-110442.jpg',
      title: 'hhh',
      summary: 'Alf Layl wal layl',
      price: '$1000'
    },
    {
      imgUrl: 'https://static.thcdn.com/images/medium/webp/widgets/290-en/42/original-MascaraTerrybly_2022_Packshot_Creative_PinkBackground_1000x1000-110442.jpg',
      title: 'hhh',
      summary: 'BBB',
      price: 'NGN100'
    },
    {
      imgUrl: 'https://static.thcdn.com/images/medium/webp/widgets/290-en/42/original-MascaraTerrybly_2022_Packshot_Creative_PinkBackground_1000x1000-110442.jpg',
      title: 'hhh',
      summary: 'humra',
      price: 'NGN100'
    },
    
  ];
  return (
    <div className='w-100'>
      <div className='w-100' id='homesection'>
      <div className="bg-gray-300 sticky">
          <ComplexNavbar />
      </div>
    <div
      className="px-2 bg-cover bg-center lg:px-2 w-full lg:h-[calc(100vh-5rem)] h-[calc(100vh-5rem)] tint flex flex-col justify-center"            
      style={{
        // backgroundSize: "fit",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundImage: `url(${hero})`,
        height: '100vh'
        }}
      > 
      <h1>Welcome to the Home of Authentic Beauty Products</h1>
      </div>

      <h1>NEW ARRIVALS</h1>
      <div className={`w-100`}>

        <div className='row px-md-5'  style={{ display: 'flex', flexDirection: 'row'}}>
            {
              newArrivals?.map((val)=> (
                <div key={val.id} className={`col-md-3 my-2 minH-200p`}>
                  <a to="/">
                    <div className='rounded-5 shadow-sm h-100'>
                      <ProductCard
                        img={val.imgUrl}
                        title=""
                        text={val.summary}
                        price={val.price}

                      />
                    </div>
                </a>
              </div>
              ))
            }
        </div>
      </div>

      <h1>Top Rated</h1>
      <div className={`w-100`}>

        <div className='row px-md-5'  style={{ display: 'flex', flexDirection: 'row'}}>
            {
              newArrivals?.map((val)=> (
                <div key={val.id} className={`col-md-3 my-2 minH-200p`}>
                  <a to="/">
                    <div className='rounded-5 shadow-sm h-100'>
                      <ProductCard
                        img={val.imgUrl}
                        title=""
                        text={val.summary}
                      />
                    </div>
                </a>
              </div>
              ))
            }
        </div>
      </div>

      </div>
    </div>

  )
}

export default Home