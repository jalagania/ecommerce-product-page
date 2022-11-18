import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductInfo from "./components/ProductInfo";
import Attribution from "./components/Attribution";
import ProductGallery from "./components/ProductGallery";
import Modal from "./components/Modal";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [itemPrice, setItemPrice] = useState(125);
  const [itemAmount, setItemAmount] = useState("");
  const [productAmount, setProductAmount] = useState(0);
  const [currentImage, setCurrentImage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  // ---------- Event Handlers ----------

  // Show/Hide Cart
  function handleCartClick() {
    setShowCart((prevState) => !prevState);
  }

  useEffect(() => {
    document.addEventListener("click", function (event) {
      if (
        !event.target.closest(".cart-display") &&
        !event.target.closest(".icon-cart")
      ) {
        setShowCart(false);
      }
    });
  }, []);

  // Decrease Item Amount
  function handleMinusClick() {
    if (productAmount > 0) {
      setProductAmount((prevState) => prevState - 1);
    }
  }

  // Increase Item Amount
  function handlePlusClick() {
    if (productAmount < 10) {
      setProductAmount((prevState) => prevState + 1);
    }
  }

  // Add Items To Cart
  function handleAddToCart() {
    if (productAmount > 0) {
      setItemAmount(productAmount);
      setProductAmount(0);
    }
  }

  // Remove Items From Cart
  function handleItemDelete() {
    setItemAmount("");
  }

  // Hide Modal Window
  function handleCloseModal() {
    setShowModal(false);
  }

  // Slide Images Left or Right
  function handleArrowLeft() {
    setCurrentImage((prevState) => prevState - 1);
    if (currentImage === 1) {
      setCurrentImage(4);
    }
  }

  function handleArrowRight() {
    setCurrentImage((prevState) => prevState + 1);
    if (currentImage === 4) {
      setCurrentImage(1);
    }
  }

  return (
    <div className="grid-container">
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          handleArrowLeft={handleArrowLeft}
          handleArrowRight={handleArrowRight}
          handleCloseModal={handleCloseModal}
        />
      )}
      <Header
        showCart={showCart}
        itemPrice={itemPrice}
        itemAmount={itemAmount}
        handleCartClick={handleCartClick}
        handleItemDelete={handleItemDelete}
      />
      <main>
        <ProductGallery
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          handleArrowLeft={handleArrowLeft}
          handleArrowRight={handleArrowRight}
          setShowModal={setShowModal}
        />
        <ProductInfo
          itemPrice={itemPrice}
          productAmount={productAmount}
          handleMinusClick={handleMinusClick}
          handlePlusClick={handlePlusClick}
          handleAddToCart={handleAddToCart}
        />
      </main>
      <Attribution />
    </div>
  );
}

export default App;
