import React, { useState } from "react";
import './ManageProducts.css'
import AddProducts from "../AddProducts/AddProducts";
import SellProducts from "../SellProducts/SellProducts";

function ManageProducts() {
  const [check, setCheck] = useState(false);

  function isChecked() {
    setCheck(!check);
  }
  return (
    <div className="bg">
      {/* bg-gradient-to-r from-slate-800 to-blue-600 */}
      {/* <Navbar /> */}
      {/* Welcome to homepage */}
      {/* <div></div> */}
      {/* <div className="pt-5">
        <div className="text-center text-xl font-serif font-semibold">
          <span className="mx-4">Product Bought </span>
          <span className="mx-4">Product Sold</span>
          <input
            className="checkbox"
            type="checkbox"
            id="reg-log"
            name="reg-log"
            onChange={isChecked}
          />
          <label htmlFor="reg-log"></label>
        </div>
        // { (TransitionEvent)  }
        {check === false ? <AddProducts /> : <SellProducts />}
      </div> */}
      {/* <div>HomeScreen</div> */}
      {/* <button className="btn btn-primary" onClick={() => navigate("/signup")}>
        Sign Up
      </button> */}
      <AddProducts />
    </div>
  );
}

export default ManageProducts;
