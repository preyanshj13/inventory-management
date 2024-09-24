import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import { fetchInventory, fetchTable } from "../../utils/FetchProduct";
import "./Ledger.css";

function Ledger() {
  const [products, setProducts] = useState([]);
  const pagination = true;
  const paginationPageSize = 8;
  const paginationPageSizeSelector = [8, 16, 24];

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    {
      headerName: "S.No.",
      field: "serialNumber",
      valueGetter: (params) => params.node.rowIndex + 1,
      width: "90%",
    },
    { headerName: "Product", field: "productId.productName", filter: true },
    { headerName: "Quantity", field: "quantity",width: "125%" },
    { headerName: "Price/Piece", field: "pricePerItem",width: "135%", },
    { headerName: "Total Amount", field: "amount" },
    { headerName: "Transaction Type", field: "transactionType", filter: true },
    { headerName: "Seller/Buyer", field: "companyName" },
  ]);

  useEffect(() => {
    fetchInventory().then((data) => {
      console.log(data);
      setProducts(data);
    });
  }, []);

  return (
    <div className="bg">
      <div className="heading">Ledger</div>
      {/* AG Grid Table Code */}
      <div
        className="ag-theme-quartz agGrid mx-auto mt-4" // applying the Data Grid theme
        style={{ height: 450, width: "90%" }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={products}
          columnDefs={colDefs}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
        />
      </div>

      {/* Bootstrap Table code */}
      {/* <table className=" tableLedger table-bordered mx-auto mt-4">
        <thead>
          <tr>
            <th className="px-3 py-2" scope="col">
              S.No.
            </th>
            <th className="px-3 py-2" scope="col">
              Product
            </th>
            <th className="px-3 py-2" scope="col">
              Quantity
            </th>
            <th className="px-3 py-2" scope="col">
              Price/Piece
            </th>
            <th className="px-3 py-2" scope="col">
              Total Amount
            </th>
            <th className="px-3 py-2" scope="col">
              Transaction Type
            </th>
            <th className="px-3 py-2" scope="col">
              Seller/Buyer
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={product._id}>
              <th className="tableData" scope="row">
                {i + 1}.
              </th>
              <td className="tableData">{product.productId.productName}</td>
              <td className="tableData">{product.quantity}</td>
              <td className="tableData">{product.pricePerItem}</td>
              <td
                className={`${
                  product.transactionType === "Purchased"
                    ? "purchased tableData"
                    : "sold tableData"
                }`}
              >
                {product.amount}
              </td>
              <td className="tableData">{product.transactionType}</td>
              <td className="tableData">{product.companyName}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default Ledger;
