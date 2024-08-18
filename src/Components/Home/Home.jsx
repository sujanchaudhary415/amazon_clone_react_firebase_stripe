import React from "react";
import "../Home/Home.css";
import Product from "./../Product/Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product id="1" title='The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback' price='29.99' image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"rating={5}/>

          <Product id="2" title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' price='239.0' image="https://imgs.search.brave.com/v985lH02zd-Q9pB2t9mn6UVVbQZb6f4PHZyM2qXx2Lc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFSWENhNG5qakwu/anBn"
          rating={4} />
        
        </div>

        <div className="home__row">
           <Product id="3" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={199.99} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>

          <Product id="4" title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={98.99} rating={5} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"/>

          <Product  id="5" title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation) " price={598.99} rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>
        </div>

        <div className="home__row">
          <Product id="6" title="Samsung LC49RG90SSUXEN 49' Curved LED GAming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={1094.98} rating={4} image="https://imgs.search.brave.com/BIlpp0JiuBBv4Xef8PSui4SxdZukZjx2yHfrtdrv_b0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFydXMwVUZoc0wu/anBn" />
        </div>
      </div>
    </div>
  );
};

export default Home;
