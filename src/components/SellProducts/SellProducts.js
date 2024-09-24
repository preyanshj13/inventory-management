import React, { useState } from "react";
import "./SellProducts.css";
import axios from "axios";
import { createLogs } from "../../utils/FetchProduct";

function SellProducts() {
  const [formData, setFormData] = useState({
    id: "",
    productName: "",
    quantity: "",
    sellPrice: "",
    buyer: "",
    date: "",
    amount: "",
    transaction: "Sold",
  });

  const onInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "quantity" || e.target.name === "sellPrice") {
      setFormData((prevData) => ({
        ...prevData,
        amount: prevData.sellPrice * prevData.quantity,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createLogs(formData).then((data) => {
      if (data) {
        setFormData({
          id: "",
          productName: "",
          quantity: "",
          sellPrice: "",
          buyer: "",
          date: "",
          amount: "",
          transaction: "Sold",
        });
      } else {
        alert("Error in Selling");
      }
    });

    // axios
    //   .post("http://localhost:3001/products", formData)
    //   .then((res) => {
    //     setFormData(res.data);
    //     setFormData({
    //       id: "",
    //       productName: "",
    //       quantity: "",
    //       sellPrice: "",
    //       buyer: "",
    //       date: "",
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <form className="form mx-auto" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group row1">
          <label className="" htmlFor="product">
            <strong>Product *</strong>
          </label>
          <select
            className="form-control my-2"
            id="product"
            value={formData.productName}
            onChange={onInputChange}
            name="productName"
          >
            <option>Select a product</option>
            <option value="Cocopeat block 5kg">Cocopeat block 5kg</option>
            <option value="Vermi-Compost 5kg">Vermi-Compost 5kg</option>
            <option value="Vermi-Compost 10kg">Vermi-Compost 10kg</option>
            <option value="Neem Khali 1kg">Neem Khali 1kg</option>
            <option value="Neem Oil">Neem Oil</option>
            <option value="Sea-weed Oil">Sea-weed Oil</option>
            <option value="Vermiculite">Vermiculite</option>
            <option value="Perlite">Perlite</option>
            <option value="Seed Tray">Seed Tray</option>
          </select>
        </div>

        <div className="form-group row1">
          <label htmlFor="quantity">
            <strong>Quantity *</strong>
          </label>
          <input
            type="number"
            className="form-control my-2"
            id="quantity"
            placeholder="Enter the quantity"
            required
            value={formData.quantity}
            name="quantity"
            onChange={onInputChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group row1">
          <label htmlFor="sellPrice">
            <strong>At Price *</strong>
          </label>
          <input
            type="number"
            className="form-control my-2"
            id="sellPrice"
            placeholder="Enter Selling Price"
            required
            value={formData.sellPrice}
            name="sellPrice"
            onChange={onInputChange}
          />
        </div>
        <div className="form-group row2">
          <label htmlFor="totalAmount">
            <strong>Total Amount</strong>
          </label>
          <input
            type="number"
            className="form-control my-2"
            id="totalAmount"
            // placeholder="Enter Selling Price"
            // required
            disabled
            value={formData.amount}
            name="amount"
            // onChange={onInputChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="soldTo">
          <strong>Sold To *</strong>
        </label>
        <input
          type="text"
          className="form-control my-2"
          id="soldTo"
          placeholder="Enter the Customer/Company Name"
          value={formData.buyer}
          onChange={onInputChange}
          name="buyer"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="dateOfSell">
          <strong>Date of Product Sold *</strong>
        </label>
        <input
          type="date"
          className="form-control my-2"
          id="dateOfSell"
          value={formData.date}
          onChange={onInputChange}
          name="date"
          // placeholder="Enter the quantity"
        />
      </div>
      {/* <label>Product name
      <input type="text" />
      </label>

      <label>Quantity
      <input type="number" />
      </label> */}
      <div className="buttonSell">
        <button className="btn btn-primary mt-2 px-4">
          <strong>Sell</strong>
        </button>
      </div>
    </form>
  );
}

export default SellProducts;
