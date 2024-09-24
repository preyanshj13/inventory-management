import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const header = {
//   "Access-Control-Allow-Origin": "*"
// }
export const fetchTable = async () => {
  return await axios
    .get("http://localhost:4000/api/products")
    .then((res) => {
      // console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchInventory = async () => {
  return await axios
    .get("http://localhost:4000/api/inventory")
    .then((res) => {
      // console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateInventory = async (formData) => {
  return await axios
    .put("http://localhost:3002/inventory/id", { quantity: formData.quantity })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createLogs = async (data) => {
  return await axios
    .post("http://localhost:4000/api/inventory", data)
    .then((res) => {
      console.log(res);
      if (res.status === 201) {
        // toast.success("Success Notification !", {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        
        return "Transaction successful";
        // return true;
      }
      return false;
      //   return(res.data);
    })
    .catch((error) => {
      // alert(error.response?.data.error)
      if (error.response.status === 400) {
        alert(error.response.data.error);
      }
      // else if(error.response.status === 400){
      //   alert(error.response.data.error)
      // }
      console.log(error);
    });
};

export const getProductById = async (id) => {
  return await axios
    .get(`http://localhost:4000/api/product/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
