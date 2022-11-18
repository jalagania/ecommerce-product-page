import "./ProductGallery.css";
import arrowLeft from "../images/icon-previous.svg";
import arrowRight from "../images/icon-next.svg";
import img1 from "../images/image-product-1.jpg";
import img2 from "../images/image-product-2.jpg";
import img3 from "../images/image-product-3.jpg";
import img4 from "../images/image-product-4.jpg";
import thumb1 from "../images/image-product-1-thumbnail.jpg";
import thumb2 from "../images/image-product-2-thumbnail.jpg";
import thumb3 from "../images/image-product-3-thumbnail.jpg";
import thumb4 from "../images/image-product-4-thumbnail.jpg";

function ProductGallery(props) {
  function handleModalOpen() {
    if (window.screen.width > 500) {
      props.setShowModal(true);
    }
  }

  return (
    <div className="product-gallery">
      <img
        className="arrow previous"
        src={arrowLeft}
        alt="left arrow"
        onClick={props.handleArrowLeft}
      />
      <img
        src={img1}
        alt="product image"
        className={`image-product ${props.currentImage === 1 ? "" : "hidden"}`}
        onClick={handleModalOpen}
      />
      <img
        src={img2}
        alt="product image"
        className={`image-product ${props.currentImage === 2 ? "" : "hidden"}`}
        onClick={handleModalOpen}
      />
      <img
        src={img3}
        alt="product image"
        className={`image-product ${props.currentImage === 3 ? "" : "hidden"}`}
        onClick={handleModalOpen}
      />
      <img
        src={img4}
        alt="product image"
        className={`image-product ${props.currentImage === 4 ? "" : "hidden"}`}
        onClick={handleModalOpen}
      />
      <img
        className="arrow next"
        src={arrowRight}
        alt="next icon"
        onClick={props.handleArrowRight}
      />
      <img
        src={thumb1}
        alt="product thumbnail image-avatar"
        className={`image-product__thumbnail ${
          props.currentImage === 1 ? "image-border" : ""
        }`}
        onClick={() => props.setCurrentImage(1)}
      />
      <img
        src={thumb2}
        alt="product thumbnail image-avatar"
        className={`image-product__thumbnail ${
          props.currentImage === 2 ? "image-border" : ""
        }`}
        onClick={() => props.setCurrentImage(2)}
      />
      <img
        src={thumb3}
        alt="product thumbnail image-avatar"
        className={`image-product__thumbnail ${
          props.currentImage === 3 ? "image-border" : ""
        }`}
        onClick={() => props.setCurrentImage(3)}
      />
      <img
        src={thumb4}
        alt="product thumbnail image-avatar"
        className={`image-product__thumbnail ${
          props.currentImage === 4 ? "image-border" : ""
        }`}
        onClick={() => props.setCurrentImage(4)}
      />
    </div>
  );
}

export default ProductGallery;
