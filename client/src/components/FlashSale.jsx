import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/FlashSale.css';

const FlashSale = () => {
    const navigate = useNavigate();

  return (
    <div className="flashSaleContainer">
        <h3><b><center>Flash Sale</center></b></h3>
        <div className="flashSale-body">

            <div className="flashSaleCard" onClick={() => navigate('/category/Mobiles')}>
                <img src="https://img.freepik.com/free-vector/realistic-display-smartphone-with-different-apps_52683-30241.jpg" alt="Smartphone" />
                <div className="flashSaleCard-data">
                    <h6>Smartphone</h6>
                    <p>Latest model with advanced features and high-speed performance.</p>
                    <h5>50% off</h5>
                </div>
            </div>

            <div className="flashSaleCard" onClick={()=>navigate('/category/Electronics')}>
                <img src="https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074297.jpg" alt="Wireless Earbuds" />
                <div className="flashSaleCard-data">
                    <h6>Wireless Earbuds</h6>
                    <p>High-quality sound with noise-cancellation and long battery life.</p>
                    <h5>30% off</h5>
                </div>
            </div>

            <div className="flashSaleCard" onClick={()=>navigate('/category/Electronics')}>
                <img src="https://img.freepik.com/free-photo/still-life-tech-device_23-2150722656.jpg" alt="Bluetooth Speaker" />
                <div className="flashSaleCard-data">
                    <h6>Bluetooth Speaker</h6>
                    <p>Portable speaker with excellent sound quality and waterproof design.</p>
                    <h5>30% off</h5>
                </div>
            </div>

            <div className="flashSaleCard" onClick={()=>navigate('/category/Groceries')}>
                <img src="https://m.media-amazon.com/images/I/71WHaeZt8PL._AC_UF1000,1000_QL80_.jpg" />
                <div className="flashSaleCard-data">
                    <h6>Nutella</h6>
                    <p>Nutella Chocolate Spread 350g.</p>
                    <h5>30% off</h5>
                </div>

            </div>
            <div className="flashSaleCard" onClick={()=>navigate('/category/Furniture')}>
                <img src="https://ii1.pepperfry.com/media/catalog/product/k/a/494x544/kaylee-velvet-3-seater-sofa-in-teal-blue-colour-kaylee-velvet-3-seater-sofa-in-teal-blue-colour-czhsyn.jpg" />
                <div className="flashSaleCard-data">
                    <h6>Sofa</h6>
                    <p>Experience luxury with this modern sofa set, perfect for your living room.</p>
                    <h5>15% off</h5>
                </div>
            </div>
            <div className="flashSaleCard" onClick={()=>navigate('/category/Electronics')}>
                <img src="https://img.freepik.com/free-psd/computer-monitor-wooden-table-with-view-sea_1142-53864.jpg" alt="4K TV" />
                <div className="flashSaleCard-data">
                    <h6>4K TV</h6>
                    <p>Ultra HD television with stunning picture quality and smart features.</p>
                    <h5>15% off</h5>
                </div>
            </div>

        </div>
    </div>
  )
}

export default FlashSale