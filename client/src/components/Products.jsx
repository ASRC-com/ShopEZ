import React, { useEffect, useState } from 'react';
import '../styles/Products.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Products = (props) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);

  const sampleProducts = [
    {
      _id: '1',
      mainImg: 'https://ii1.pepperfry.com/media/catalog/product/k/a/494x544/kaylee-velvet-3-seater-sofa-in-teal-blue-colour-kaylee-velvet-3-seater-sofa-in-teal-blue-colour-czhsyn.jpg',
      title: 'Comfortable Sofa Set',
      description: 'Experience luxury with this modern sofa set, perfect for your living room.',
      price: 25000,
      discount: 15,
      category: 'Furniture',
      gender: 'Unisex'
    },
    {
      _id: '2',
      mainImg: 'https://m.media-amazon.com/images/I/71QFx-Hs4nL._AC_UF894,1000_QL80_.jpg',
      title: 'Elegant Dining Table',
      description: 'Upgrade your dining experience with this stylish dining table for family meals.',
      price: 18000,
      discount: 10,
      category: 'Furniture',
      gender: 'Unisex'
    },
    {
      _id: '3',
      mainImg: 'https://images-cdn.ubuy.co.in/635aafad94b48e6fab5b5c72-canon-eos-m50-mark-ii-content-creator.jpg',
      title: 'Professional Camera Kit',
      description: 'Capture stunning moments with this high-performance camera kit for photographers.',
      price: 55000,
      discount: 12,
      category: 'Electronics',
      gender: 'Unisex'
    },
    {
      _id: '4',
      mainImg: 'https://pyxis.nymag.com/v1/imgs/921/c0c/d56eeaa21522d8918ee1cedde9dea91293.rsquare.w600.jpg',
      title: 'Smart Fitness Tracker',
      description: 'Stay fit and healthy with this advanced fitness tracker that monitors your activities.',
      price: 4000,
      discount: 20,
      category: 'Electronics',
      gender: 'Unisex'
    },
    {
      _id: '5',
      mainImg: 'https://assets.ajio.com/medias/sys_master/root/20230526/Hycs/6470b726d55b7d0c6316ecda/-473Wx593H-466200496-grey-MODEL.jpg',
      title: 'Designer Handbag',
      description: 'Accessorize with this premium designer handbag, perfect for any occasion.',
      price: 15000,
      discount: 8,
      category: 'Fashion',
      gender: 'Women'
    },
    {
      _id: '6',
      mainImg: 'https://m.media-amazon.com/images/I/71NZxcWS+rS._AC_UY350_.jpg',
      title: 'Classic Men\'s Watch',
      description: 'Enhance your style with this classic men\'s watch, a blend of elegance and functionality.',
      price: 12000,
      discount: 15,
      category: 'Fashion',
      gender: 'Men'
    },
    {
      _id: '7',
      mainImg: 'https://m.media-amazon.com/images/I/71oCc2P+-7L._AC_UF1000,1000_QL80_.jpg',
      title: 'Wireless Headphones',
      description: 'Immerse yourself in music with these high-quality wireless headphones, designed for comfort.',
      price: 6000,
      discount: 25,
      category: 'Electronics',
      gender: 'Unisex'
    },
    {
      _id: '8',
      mainImg: 'https://carltonlondon.co.in/cdn/shop/files/a7404069.jpg?v=1687347304',
      title: 'Luxury Perfume Set',
      description: 'Indulge in luxury with this exclusive perfume set, a perfect gift for any occasion.',
      price: 8000,
      discount: 18,
      category: 'Fashion',
      gender: 'Unisex'
    },
    {
      _id: '9',
      mainImg: 'https://m.media-amazon.com/images/I/61UaIPr0l-L._AC_UF894,1000_QL80_.jpg',
      title: 'Gourmet Coffee Machine',
      description: 'Start your day right with this gourmet coffee machine, offering the perfect brew every time.',
      price: 25000,
      discount: 10,
      category: 'Electronics',
      gender: 'Unisex'
    },
    {
      _id: '10',
      mainImg: 'https://d2j6dbq0eux0bg.cloudfront.net/images/24989555/1309300078.jpg',
      title: 'Outdoor Adventure Backpack',
      description: 'Explore the outdoors with this durable backpack, equipped for all your adventures.',
      price: 5000,
      discount: 20,
      category: 'Sports Equipments',
      gender: 'Unisex'
    },
    {
      _id: '11',
      mainImg: 'https://www.getsupp.com/static/media/__resized/images/products/AWEI2S9XQAB6TSEX9-d3a92212-c8ca-4ed0-acce-fae18fdbfd4f-thumbnail_webp-1080x1080-70.webp',
      title: 'MyFitness - Original Peanut Butter',
      description: ' with 25g Protein, Nut Butter Spread - for Maintain Good Cholesterol, Blood Sugar, and Blood Pressure - 2500 gm',
      price: 1300,
      discount: 25,
      category: 'Groceries',
      gender: 'Unisex'
    }
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:6001/fetch-products');
      const fetchedProducts = response.data.length > 0 ? response.data : sampleProducts;

      if (props.category === 'all') {
        setProducts(fetchedProducts);
        setVisibleProducts(fetchedProducts);
      } else {
        const filteredProducts = fetchedProducts.filter(product => product.category === props.category);
        setProducts(filteredProducts);
        setVisibleProducts(filteredProducts);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts(sampleProducts);
      setVisibleProducts(props.category === 'all' ? sampleProducts : []);
    }

    try {
      const categoryResponse = await axios.get('http://localhost:6001/fetch-categories');
      setCategories(categoryResponse.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const [sortFilter, setSortFilter] = useState('popularity');
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [genderFilter, setGenderFilter] = useState([]);

  const handleCategoryCheckBox = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setCategoryFilter([...categoryFilter, value]);
    } else {
      setCategoryFilter(categoryFilter.filter(category => category !== value));
    }
  };

  const handleGenderCheckBox = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setGenderFilter([...genderFilter, value]);
    } else {
      setGenderFilter(genderFilter.filter(gender => gender !== value));
    }
  };

  const handleSortFilterChange = (e) => {
    const value = e.target.value;
    setSortFilter(value);
    if (value === 'low-price') {
      setVisibleProducts([...visibleProducts].sort((a, b) => a.price - b.price));
    } else if (value === 'high-price') {
      setVisibleProducts([...visibleProducts].sort((a, b) => b.price - a.price));
    } else if (value === 'discount') {
      setVisibleProducts([...visibleProducts].sort((a, b) => b.discount - a.discount));
    }
  };

  useEffect(() => {
    if (categoryFilter.length > 0 && genderFilter.length > 0) {
      setVisibleProducts(products.filter(product => categoryFilter.includes(product.category) && genderFilter.includes(product.gender)));
    } else if (categoryFilter.length === 0 && genderFilter.length > 0) {
      setVisibleProducts(products.filter(product => genderFilter.includes(product.gender)));
    } else if (categoryFilter.length > 0 && genderFilter.length === 0) {
      setVisibleProducts(products.filter(product => categoryFilter.includes(product.category)));
    } else {
      setVisibleProducts(products);
    }
  }, [categoryFilter, genderFilter, products]);

  return (
    <div className="products-container">
      <div className="products-filter">
        <h4>Filters</h4>
        <div className="product-filters-body">
          <div className="filter-sort">
            <h6>Sort By</h6>
            <div className="filter-sort-body sub-filter-body">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="filter-sort-radio1" value="popularity" checked={sortFilter === 'popularity'} onChange={handleSortFilterChange} />
                <label className="form-check-label" htmlFor="filter-sort-radio1">Popular</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="filter-sort-radio2" value="low-price" checked={sortFilter === 'low-price'} onChange={handleSortFilterChange} />
                <label className="form-check-label" htmlFor="filter-sort-radio2">Price (low to high)</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="filter-sort-radio3" value="high-price" checked={sortFilter === 'high-price'} onChange={handleSortFilterChange} />
                <label className="form-check-label" htmlFor="filter-sort-radio3">Price (high to low)</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="filter-sort-radio4" value="discount" checked={sortFilter === 'discount'} onChange={handleSortFilterChange} />
                <label className="form-check-label" htmlFor="filter-sort-radio4">Discount</label>
              </div>
            </div>
          </div>
          {props.category === 'all' &&
            <div className="filter-categories">
              <h6>Categories</h6>
              <div className="filter-categories-body sub-filter-body">
                {categories.map((category) => (
                  <div className="form-check" key={category}>
                    <input className="form-check-input" type="checkbox" value={category} id={'productCategory' + category} checked={categoryFilter.includes(category)} onChange={handleCategoryCheckBox} />
                    <label className="form-check-label" htmlFor={'productCategory' + category}>{category}</label>
                  </div>
                ))}
              </div>
            </div>
          }
          <div className="filter-gender">
            <h6>Gender</h6>
            <div className="filter-gender-body sub-filter-body">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Men" id="filter-gender-check-1" checked={genderFilter.includes('Men')} onChange={handleGenderCheckBox} />
                <label className="form-check-label" htmlFor="filter-gender-check-1">Men</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Women" id="filter-gender-check-2" checked={genderFilter.includes('Women')} onChange={handleGenderCheckBox} />
                <label className="form-check-label" htmlFor="filter-gender-check-2">Women</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Unisex" id="filter-gender-check-3" checked={genderFilter.includes('Unisex')} onChange={handleGenderCheckBox} />
                <label className="form-check-label" htmlFor="filter-gender-check-3">Unisex</label>
              </div>
            </div>
          </div>
        </div>
      
      <div class="ad-section">
       <div class="ad-carousel">
        <div class="ad-slide"><img src="https://digitalsynopsis.com/wp-content/uploads/2023/12/creative-ads-coke-long-can.jpg" alt="Ad 1"></img></div>
        <div class="ad-slide"><img src="https://image.adsoftheworld.com/ck99bbpk49dgpv0y9w3si8chny1l" alt="Ad 2"></img></div>
        
       </div>
      </div>
      <div class="ad-section">
       <div class="ad-carousel">
        <div class="ad-slide"><img src="https://image.adsoftheworld.com/65bfpiteroq1oo5ueeg9h3o1bw5y" alt="Ad 1"></img></div>
        <div class="ad-slide"><img src="https://i0.wp.com/copyhackers.com/wp-content/uploads/2016/06/Converse-Shoe.png" alt="Ad 2"></img></div>
       
       </div>
      </div>
    </div>
      <div className="products-body">
        <h3>All Products</h3>
        <div className="products">
          {visibleProducts.length > 0 ? (
            visibleProducts.map((product) => (
              <div className="product-item" key={product._id} >
                <div className="product" onClick={() => navigate(`/product/${product._id}`)}>
                  <img src={product.mainImg} alt={product.title} id={product._id} />
                  <div className="product-data">
                    <h6>{product.title}</h6>
                    <p>{product.description.slice(0, 30) + '....'}</p>
                    <h5>&#8377; {parseInt(product.price - (product.price * product.discount) / 100)} <s>{product.price}</s><p>({product.discount}% off)</p></h5>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
