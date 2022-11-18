import "./Modal.css";
import ProductGallery from "./ProductGallery";

function Modal(props) {
  return (
    <div className="modal-container">
      <div className="flex-wrapper">
        <svg
          className="icon-close"
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          onClick={props.handleCloseModal}
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fillRule="evenodd"
          />
        </svg>
        <div
          className="arrow-background left-bg"
          onClick={props.handleArrowLeft}
        >
          <svg
            className="icon-arrow icon-previous"
            width="12"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1 3 9l8 8"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div
          className="arrow-background right-bg"
          onClick={props.handleArrowRight}
        >
          <svg
            className="icon-arrow icon-next"
            width="13"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2 1 8 8-8 8"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <ProductGallery
          currentImage={props.currentImage}
          setCurrentImage={props.setCurrentImage}
          setShowModal={props.setShowModal}
        />
      </div>
      <div className="modal-bg" onClick={props.handleCloseModal}></div>
    </div>
  );
}

export default Modal;
