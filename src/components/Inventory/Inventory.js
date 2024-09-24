import React, { useState, useEffect, useContext } from "react";
import { fetchTable } from "../../utils/FetchProduct";
// import axios from 'axios';
import "./Inventory.css";

function Inventory() {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // console.log(fetchTable());
    fetchTable().then((data) => {
      console.log(data)
      setProducts(data);
    });
  }, []);

  return (
    <div className="bg">
      <div className="heading">Inventory</div>
      <table className="table inventoryTable table-striped my-3 mx-auto">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product,i) => (
            <tr key={product.id}>
              <th scope="row">{i+1}</th>
              <td>{product.productName}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
