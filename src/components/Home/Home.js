import React, { useEffect, useRef, useState } from "react";
import { fetchTable } from "../../utils/FetchProduct";
import Card from "../Card/Card";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [popup, setPopup] = useState(false);
  const ref = useRef(null);

  const handleModalClick = () => {
    ref.current.click();
    console.log("Btn Clicked");
  };

  const handleClick = () => {
    setPopup(true);
  };
  const handleClosePopup = () => {
    setPopup(false);
  };

  useEffect(() => {
    fetchTable().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="bg">
      {/* <div>Hello there</div> */}
      <div className="heading">Catalog</div>
      <div onClick={handleClick}>
        <Card products={products} />
      </div>
    </div>
  );
}

export default Home;
