import React from "react";
import "../Header/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://imgs.search.brave.com/6-Ag3qlJQvMJgtjLvfxeckI81Yma6vlDr-PjXGnPR98/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/cG5nbG9nby5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTcxNTQ4Nzk5/OGFtYXpvbi1sb2dv/LXRyYW5zcGFyZW50/LnBuZw"
        alt=""
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon"/>
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineone">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineone">Returns</span>
          <span className="header__optionLineTwo">Order</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineone">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

         <div className="header__optionBasket">
                      <ShoppingBasketIcon/>
                     <span className="header__optionLineTwo header__basketCount">0</span> 
         </div>


      </div>
    </div>
  );
};

export default Header;
