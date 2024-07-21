import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import Products from '../components/Products'
import Footer from '../components/Footer'
import FlashSale from '../components/FlashSale'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import SaleBanner from '../components/SaleBanner'


const Home = () => {

  const navigate = useNavigate();

  return (
    
    <div className="HomePage">
     <div>
        <SaleBanner/>
     </div>

      <div className="home-categories-container">

        <div className="home-category-card" onClick={()=>navigate('/category/Fashion')}>
          <img src="https://img.freepik.com/premium-photo/couples-couple-love-couple-husband-wife-two-people-pair-together-concept_743758-7474.jpg" alt="" />
          <h5>Fashion</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Electronics')}>
          <img src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-white-background_155003-3942.jpg" alt="" />
          <h5>Electronics</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Mobiles')}>
          <img src="https://img.freepik.com/free-psd/dark-mobile-device-mockup_149660-801.jpg" alt="" />
          <h5>Mobiles</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Groceries')}>
          <img src="https://img.freepik.com/premium-photo/shopping-bag-full-fresh-fruits-vegetables-with-assorted-ingredients_8087-2232.jpg" alt="" />
          <h5>Groceries</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Furniture')}>
          <img src="https://m.media-amazon.com/images/I/71u3F2NZ9gL.jpg" alt="" />
          <h5>Furniture</h5>
        </div>

      </div>
      
      <FlashSale/>

      <div id='products-body'></div>
      <Products category = 'all'  />


      <Footer />
    </div>
  )
}

export default Home