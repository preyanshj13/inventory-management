import React, { useEffect, useState } from "react";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddProducts.css";
import {
  createLogs,
  fetchTable,
  updateInventory,
} from "../../utils/FetchProduct";
import { ToastContainer } from "react-toastify";

function AddProducts() {
  const [products, setProducts] = useState([]);
  // console.log(products);
  const initialValues = {
    productId: "",
    quantity: "",
    pricePerItem: "",
    companyName: "",
    date: "",
    amount: "",
    transactionType: "",
  };
  const [radio, setRadio]= useState("");

  const [formData, setFormData] = useState(initialValues);
  // console.log(formData)

  useEffect(() => {
    fetchTable().then((data) => {
      setProducts(data);
    });
  }, []);

  // const [amount, setAmount] = useState()

  const onInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if(e.target.name === 'transactionType'){
      setRadio(e.target.value)
    }

    if (e.target.name === "quantity" || e.target.name === "pricePerItem") {
      setFormData((prevData) => ({
        ...prevData,
        amount: prevData.pricePerItem * prevData.quantity,
      }));
    }
  };

  // const resetForm = () => {
  //   setFormData()
  // }

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    if(!radio){
      alert('Please select one option');
      return
    }

    createLogs(formData).then((data) => {
      console.log(data);
      if (data) {
        setFormData(initialValues);
        // setRadio('');
        alert("Product Bought Successfully")
        // <ToastContainer />
      } else if (data === false) {
        alert("Error in Transaction");
      }
    });
    // updateInventory(formData);
    // axios
    //   .post("http://localhost:3001/products", formData)
    //   .then((res) => {
    //     setFormData(res.data);
    //     setFormData({
    //       id: "",
    //       productName: "",
    //       quantity: "",
    //       buyPrice: "",
    //       seller: "",
    //       date: "",
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <form className="form mx-auto pt-5" onSubmit={handleSubmit}>
      <div className="form-row">

        <div className="form-group row1">
          <label className="" htmlFor="product">
            <strong>Product *</strong>
          </label>
          <select
            className="form-control my-2"
            id="product"
            value={formData.productId}
            onChange={onInputChange}
            name="productId"
          >
            <option>Select a product</option>
            {products.map((product) => {
              return (
                <option key={product._id} value={product._id}>
                  {product.productName}
                </option>
              );
            })}
            {/* <option value="Vermi-Compost 5kg">Vermi-Compost 5kg</option>
            <option value="Vermi-Compost 10kg">Vermi-Compost 10kg</option>
            <option value="Neem Khali 1kg">Neem Khali 1kg</option>
            <option value="Neem Oil">Neem Oil</option>
            <option value="Sea-weed Oil">Sea-weed Oil</option>
            <option value="Vermiculite">Vermiculite</option>
            <option value="Perlite">Perlite</option>
            <option value="Seed Tray">Seed Tray</option> */}
          </select>
        </div>

        

        <div className="form-group row1">
          <label className="" htmlFor="quantity">
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
        <div className="form-group row2">
          <label htmlFor="pricePerItem">
            <strong>At Price *</strong>
          </label>
          <input
            type="number"
            className="form-control my-2"
            id="pricePerItem"
            placeholder="Enter Purchase Price"
            required
            value={formData.pricePerItem}
            name="pricePerItem"
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
            // placeholder="Total"
            // required
            disabled
            value={formData.amount}
            name="amount"
            // onChange={onInputChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="companyName">
          <strong>Company Name*</strong>
        </label>
        <input
          type="text"
          className="form-control my-2"
          id="companyName"
          placeholder="Enter the company/person name"
          value={formData.companyName}
          onChange={onInputChange}
          name="companyName"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="dateOfPurchase">
          <strong>Date*</strong>
        </label>
        <input
          type="date"
          className="form-control my-2"
          id="dateOfPurchase"
          value={formData.date}
          onChange={onInputChange}
          name="date"
          // placeholder="Enter the quantity"
        />
      </div>
      <div className="radioButtons my-3">
        <div className="form-check purchaseRadioBtn">
          <input
            className="form-check-input"
            type="radio"
            value="Purchased"
            name="transactionType"
            id="transactionTypePurchase"
            onChange={onInputChange}
            checked={formData.transactionType === "Purchased"}
          />
          <label className="form-check-label" htmlFor="transactionTypePurchase">
            Purchased
          </label>
        </div>
        <div className="form-check soldRadioBtn">
          <input
            className="form-check-input"
            type="radio"
            value="Sold"
            name="transactionType"
            id="transactionTypeSold"
            onChange={onInputChange}
            checked={formData.transactionType === "Sold"}
          />
          <label className="form-check-label" htmlFor="transactionTypeSold">
            Sold
          </label>
        </div>
      </div>
      {/* <label>Product name
        <input type="text" />
        </label>

        <label>Quantity
        <input type="number" />
        </label> */}
      <div className="buttonBuy">
        <button className="btn btn-primary mt-2 px-4">
          <strong>{formData.transactionType || "Send"}</strong>
        </button>
      </div>
      {/* <button
        type="reset"
        onClick={() => resetForm()}
        className="btn btn-danger mt-2"
      >
        Reset
      </button> */}
    </form>
  );
}

export default AddProducts;
