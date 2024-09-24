import React, { useEffect, useState } from "react";
import { getProductById } from "../../utils/FetchProduct";
import "./Modal.css";

const Modal = ({ onSubmit, onCancel, onClose, desProd }) => {

//   const [product, setProduct] = useState();
  //   const id = useParams();
  console.log(desProd);

//   useEffect(() => {
//     getProductById(id).then((data) => {
//       setProduct(data);
//       console.log(product)
//     });
//   }, []);

  return (
    <div className="modal-container">
      <div className="modall">
        <div className="modal-header">
          <p className="close" onClick={() => onClose()}>
            &times;
          </p>
        </div>
        <div className="modal-content">
          <h4 className="mx-auto">{desProd.productName}</h4>
          <h5 className="text-end mb-3">{desProd.quantity}</h5>
          <p className="text-center">{desProd.description}</p>
        </div>
        <div className="modal-footer">
          {/* <button className="btn btn-success" onClick={() => onSubmit()}>
            Submit
          </button> */}
          <button className="btn btn-danger" onClick={() => onCancel()}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
