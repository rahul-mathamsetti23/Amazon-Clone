import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1"
          title="Apple iPhone 11 (64GB) - Black"
          price={1000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
        />
        <Product
          id="2"
          title="Apple Watch Series 5 (GPS + Cellular, 40mm) - Space Gray Aluminium Case with Black Sport Band"
          price={500}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71SFgqisjCL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="New Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Space Grey (2nd Generation)"
          price={700}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._SL1500_.jpg"
        />
        <Product
          id="4"
          title="Apple TV 4K (32GB)"
          price={300}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41LpF5n38kL._SL1024_.jpg"
        />
        <Product
          id="5"
          title="Apple AirPods Pro"
          price={200}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
          price={1500}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
