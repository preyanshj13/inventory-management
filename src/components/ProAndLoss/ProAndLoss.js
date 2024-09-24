import React, { useEffect, useState } from "react";
import { fetchInventory } from "../../utils/FetchProduct";

function ProAndLoss() {
  // let buyTransactions = 0;
  // let sellTransactions = 0;
  // let buyAmount = 0;
  // let sellAmount = 0;
  const [buyAmount, setBuyAmount] = useState(0)
  const [sellAmount, setSellAmount] = useState(0)

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchInventory().then((data) => {
      setProducts(data);
      console.log(data);
      let inc = 0;
      let dec = 0;
      data.map((product) =>
      
        product.transactionType === "Purchased"?
          (inc += product.amount)
          : (dec += product.amount)
      )
      setBuyAmount(inc)
      setSellAmount(dec)
      // for (let i = 0; i < data.length; i++) {
      // if (data.transactionType === "Purchased") {
      //   buyAmount += data.amount;
      //   // console.log(buyTransactions);
      // } else if (data.transactionType === "Sold") {
      //   sellAmount += data.amount;
      //   // console.log(sellTransactions);
      // }
      // }
      //   setProducts(data);
    });
  }, []);

  return (
    <div className="bg">
      <div className="heading">Total Purchase Amount :- - {buyAmount}</div>
      <div className="heading">Total Sold Amount :- + {sellAmount}</div>
      <div className="heading">Total Profit/Loss :- {- buyAmount + sellAmount} </div>
    </div>
  );
}

export default ProAndLoss;
