import "./Header.css";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import productThumbnail from "../images/image-product-1-thumbnail.jpg";
import { useState } from "react";

function Header(props) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <nav>
        <svg
          className="menu-icon"
          width="16"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setShowMenu(true)}
        >
          <path
            d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
            fill="#69707D"
            fillRule="evenodd"
          />
        </svg>
        <a href="#">
          <img className="logo" src={logo} />
        </a>
        <ul className={`menu ${showMenu ? "show" : ""}`}>
          <li className="menu-items">
            <svg
              className="menu-close"
              width="14"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setShowMenu(false)}
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fillRule="evenodd"
              />
            </svg>
          </li>
          <li className="menu-items">
            <a href="#">Collections</a>
          </li>
          <li className="menu-items">
            <a href="#">Men</a>
          </li>
          <li className="menu-items">
            <a href="#">Women</a>
          </li>
          <li className="menu-items">
            <a href="#">About</a>
          </li>
          <li className="menu-items">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className={`menu-bg ${showMenu ? "" : "hidden"}`}></div>
        <div className="profile-box">
          <svg
            className="icon-cart"
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={props.handleCartClick}
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fillRule="nonzero"
            />
          </svg>
          <p className={`item-amount ${props.itemAmount ? "" : "hidden"}`}>
            {props.itemAmount}
          </p>
          <img src={avatar} alt="profile photo" className="profile-photo" />
          <div className={`cart-display ${props.showCart ? "" : "hidden"}`}>
            <div className="cart-display-head">
              <p className="cart">Cart</p>
            </div>
            <div className="cart-display-body">
              {!props.itemAmount && (
                <p className="cart-message">Your cart is empty.</p>
              )}
              <div
                className={`cart-content ${props.itemAmount ? "" : "hidden"}`}
              >
                <div className="flex-cart">
                  <img
                    src={productThumbnail}
                    alt="cart item image"
                    className="item-thumbnail"
                  />
                  <div className="item-info">
                    <p className="item-name">Fall Limited Edition Sneakers</p>
                    <p className="item-price-total">{`$${props.itemPrice}.00 x ${props.itemAmount}`}</p>
                    <span className="item-price-sum">{` $${
                      props.itemAmount * props.itemPrice
                    }.00`}</span>
                  </div>
                  <svg
                    className="icon-delete"
                    width="14"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    onClick={props.handleItemDelete}
                  >
                    <defs>
                      <path
                        d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                        id="a"
                      />
                    </defs>
                    <use fillRule="nonzero" xlinkHref="#a" />
                  </svg>
                </div>
                <button className="btn btn-checkout">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
