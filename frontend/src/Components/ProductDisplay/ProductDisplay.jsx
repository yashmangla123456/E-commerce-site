import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";

import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export const ProductDisplay = (props) => {

  const { product } = props;
  const {addToCart}=useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-image">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price} 
          </div>
          <div className="productdisplay-right-price-new">
          &nbsp;&nbsp;${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Good quality fabric , durable, strong, colorfast, and aesthetically
          pleasing, useally knitted,pullove shirt , close-fitted,a round
          neckline and a short sleeves, worn as an undershirt or oversized
          garment.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
        <p className="productdisplay-right-category">
          <span>Category:</span>Women,T-shirt,Crop-Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span>Moden,Latest
        </p>
      </div>
    </div>
  );
};
