import "./App.css";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProducts from "./components/AddProducts/AddProducts";
import SellProducts from "./components/SellProducts/SellProducts";
import ModifyProducts from "./components/ManageProducts/ManageProducts";
import Inventory from "./components/Inventory/Inventory";
import Ledger from "./components/Ledger/Ledger";
import ProAndLoss from "./components/ProAndLoss/ProAndLoss";
import Modal from "./components/Modal/Modal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/buy" element={<AddProducts />}/>
        <Route path="/sell" element={<SellProducts />}/>
        <Route path="/manage" element={<ModifyProducts />}/>
        <Route path="/inventory" element={<Inventory />}/>
        <Route path="/ledger" element={<Ledger />}/>
        <Route path="/pnl" element={<ProAndLoss />}/>
        <Route path="/:id" element={<Modal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
