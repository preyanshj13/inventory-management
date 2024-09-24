import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
// import { fetchTable } from "../../utils/FetchProduct";
import "./Card.css";

function Card({ products, handleModalClick }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [desProd, setDesProd] = useState();

  const handleButtonClick = () => {
    setModalOpen(false);
  };

  const handleInfoClick = (product) => {
    console.log(product)
    setDesProd(product)
    setModalOpen(true);
    // <Modal />
  };

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetchTable().then((data) => {
  //     setProducts(data);
  //   });
  // }, []);

  return (
    <div className="cards">
      {products.map((product) => (
        <div className="card my-3" key={product._id}>
          <img
            src={product.image}
            className="card-img-top cardProductImage"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title cardPoductName">{product.productName}</h5>
            {/* <span>{product.quantity}</span> */}
            <p className="card-text cardProductDescription">
              {product.description}
            </p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
          {/* <Link className="btn nav-link" to={`/${product._id}`}>info</Link> */}

          <button
            className="btn btn-primary"
            onClick={() => handleInfoClick(product)}
          >
            Get Info
          </button>
        </div>
      ))}
      {modalOpen && (
        <Modal
          onSubmit={handleButtonClick}
          onCancel={handleButtonClick}
          onClose={handleButtonClick}
          desProd={desProd}
        />
      )}
    </div>
  );
}

export default Card;
