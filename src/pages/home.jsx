
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import './home.scss'
import {useContext, useEffect, useState} from 'react'
import { ComplexNavbar } from '../components/header/topnav';
import ProductCard from '../components/cards/productsCard';
import hero from '../assets/hero1.jpg'
import { Button, Card, Input, Modal } from 'antd';
import { baseUrl, httpGet } from '../actions/https';
import SearchDropdown from '../components/input/search';
import { NotificationContext } from '../store/NotificationContext';
// import { Modal, ModalBody } from 'reactstrap';

function Home() {
  const {reload, setReload } = useContext(NotificationContext);
  const [previewImg, setPreviewImg] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [products, setProducts] = useState([]);
  const [searchData, setSearchData] = useState([]);


  const getAllProducts = async () => {
    const res = await httpGet(`${baseUrl}/products`, true);
    if (res?.status) {
      setProducts(res?.data);
    } else {
      console.log(res);
    }
  } 
  useEffect(() => {
    getAllProducts();
  }, [])

  const newArrivals = [
    {
      imgurl: 'https://fragrances.com.ng/media/wysiwyg/all_of_me.jpeg',
      title: 'Christian Dior Sauvage Parfum 100ml Perfume',
      summary: 'Christian Dior Sauvage Parfum 100ml Perfume',
      price: 'NGN 300,000'
    },
    {
      imgurl: 'https://static.thcdn.com/images/medium/webp/widgets/290-en/42/original-MascaraTerrybly_2022_Packshot_Creative_PinkBackground_1000x1000-110442.jpg',
      title: 'hhh',
      summary: 'BBB',
      price: 'NGN100'
    },
    {
      imgurl: 'https://fragrances.com.ng/media/catalog/product/cache/c81bc647bcf9be1e13a1fe4b36e3d4b2/a/r/ard_al_zaafaran_al_sayad_edp_100ml_for_men.jpg',
      title: 'Ard Al Zaafaran',
      summary: 'Alf Layl wal layl',
      price: '$1000'
    },
    {
      imgurl: 'https://fragrances.com.ng/media/catalog/product/cache/3c5784514da70671cbf256d920343e32/a/r/armaf_club_nuit_intense_edp_100ml_perfume_for_men2.jpg',
      title: 'Armaf Club de Nuit Intense EDT 105ml Perfume',
      summary: 'Armaf Club de Nuit Intense EDT 105ml Perfume',
      price: 'NGN 100,000'
    },
    {
      imgurl: 'https://static.thcdn.com/images/medium/webp/widgets/290-en/42/original-MascaraTerrybly_2022_Packshot_Creative_PinkBackground_1000x1000-110442.jpg',
      title: 'Niche Emarati Perfumes',
      summary: 'Niche Emarati Perfumes',
      price: 'NGN 99,000'
    },
    
  ];
  const handleSearch = async (e) => {
    const { value } = e.target;
    if (!value) {
      setSearchData([]);
      return;
    }
    const res = await httpGet(`${baseUrl}/products/${value}`, true);
    if (res?.status) {
      setSearchData(res?.data);
    } else {
      setSearchData([])
    }

  }
  const handleSelectedItem = (e) => {
    console.log({e})
    setPreviewImg(true);
    setSelectedProduct(e)
  }
  const handleAddToCart = (item) => {
    const cartP = JSON.parse(localStorage.getItem('cart')) ?? [];
    cartP.push(item);
    localStorage.setItem('cart', JSON.stringify(cartP));
    setReload(!reload);
    console.log({cartP});
  }
  return (
    <div className='w-100'>
      <div className='w-100' id='homesection'>
      <div className="bg-gray-300">
          <ComplexNavbar setSelectedItem={handleSelectedItem} />
      </div>
      <div className="hidden items-center gap-x-2 lg:flex">
          <div className="relative flex w-full gap-2 md:w-max">
          <div style={{ position: 'relative' }} class="col-md-12">
          <div className="my-2">
            {/* <Input
              type="search"
              placeholder="Search"
              onChange={handleSearch}
              containerProps={{
                className: "min-w-[288px]",
              }}
              className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            /> */}
            <SearchDropdown options={searchData} setSelectedItem={handleSelectedItem} />
            </div>
            </div>
            <div className="!absolute left-3 top-[13px]">
              <svg
                width="13"
                height="14"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                  fill="#CFD8DC"
                />
                <path
                  d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                  stroke="#CFD8DC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
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
      <Modal
      open={previewImg}  onCancel={() => setPreviewImg(false)}
      centered
      footer={[
        <Button key="back" onClick={() => setPreviewImg(false)}>
          Return
        </Button>,
        <Button key="submit" onClick={()=> handleAddToCart(selectedProduct)}>
          + cart
        </Button>,
        // <Button
        //   key="link"
        //   href="https://google.com"
        //   type="primary"
        //   loading={loading}
        //   onClick={handleOk}
        // >
        //   Search on Google
        // </Button>,
      ]}

      >   <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div className="text-center">
              <img alt="modalviewer" className="w-100 h-100" src={selectedProduct?.imgurl} />
            </div>
            <div>
            <Card title={selectedProduct?.name} bordered={false} style={{ width: 300 }}>
              <p>Category:{selectedProduct?.category}</p>
              <p>Description: {selectedProduct?.description}</p>
              <p>Price: NGN {selectedProduct?.price}</p>

              </Card>
            </div>
          </div>
      </Modal>
      <h1>Welcome to the Home of Authentic Beauty Products</h1>
      </div>

      <h1>NEW ARRIVALS</h1>
      <div className={`w-100`}>

        <div className='row px-md-5'  style={{ display: 'flex', flexDirection: 'row'}}>
            {
              products?.map((val)=> (
                <div key={val.id} className={`col-md-3 my-2 minH-200p`}>
                  <a to="/">
                    <div className='rounded-5 shadow-sm h-100'>
                      <ProductCard
                        img={val.imgurl}
                        title={val?.name}
                        text={val.description}
                        price={val.price}
                        setSelectedProduct={setSelectedProduct}
                        setPreviewImg={setPreviewImg}
                        data={val}
                        handleAddToCart={handleAddToCart}
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
              products?.map((val)=> (
                <div key={val.id} className={`col-md-3 my-2 minH-200p`}>
                  <a to="/">
                    <div className='rounded-5 shadow-sm h-100'>
                      <ProductCard
                         img={val.imgurl}
                         title={val?.name}
                         text={val.description}
                         price={val.price}
                         setSelectedProduct={setSelectedProduct}
                         setPreviewImg={setPreviewImg}
                         data={val}
                         handleAddToCart={handleAddToCart}
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