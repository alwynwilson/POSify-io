import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from '@mui/icons-material/Delete';
import "./addsale.css";

const AddSale = () => {
  const [products, setProducts] = useState([{ productName: "", quantity: 1, discount: 0, total: 100 }]);

  // Handle input changes
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedProducts = [...products];
    updatedProducts[index][name] = value;

    // Update total for each row
    if (name === "quantity" || name === "discount") {
      updatedProducts[index].total = calculateTotal(updatedProducts[index]);
    }

    setProducts(updatedProducts);
  };

  const calculateTotal = (product) => {
    const price = 100; // static price for simplicity
    const total = product.quantity * price - product.discount;
    return total > 0 ? total : 0;
  };

  const handleAddRow = () => {
    setProducts([...products, { productName: "", quantity: 1, discount: 0, total: 100 }]);
  };

  const handleRemoveRow = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(products); // Here you can handle saving the sale
  };

  return (
    <div className="list">
      <div className="listContainer">
        <div className="list-Container">
          <div className="header">
            <h1>Sale</h1>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <div>
                <CloseIcon className="icon" />
              </div>
            </Link>
          </div>
          <div className="billingDetails">
            <div className="billingColumn">
              <input type="text" placeholder="Billing Name" />
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Address" />
            </div>
            <div className="billingColumn">
              <input type="text" placeholder="Bill Number" />
              <input type="date" placeholder="Date" />
              <input type="time" placeholder="Time" />
            </div>
          </div>
          <div className="itemsList">
            <div className="itemsHeader row">
              <div>Item No</div>
              <div>Product Name</div>
              <div>MRP</div>
              <div>Qty</div>
              <div>Price</div>
              <div>Discount</div>
              <div>Total Amount</div>
            </div>

            {products.map((product, index) => (
              <div className="itemsRow" key={index}>
                <div>{index + 1}  <DeleteIcon onClick={() => handleRemoveRow(index)}/></div>
                <div>
                  <input
                    type="text"
                    name="productName"
                    value={product.productName}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </div>
                <div>120</div>
                <div>
                  <input
                    type="number"
                    name="quantity"
                    value={product.quantity}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </div>
                <div>100</div>
                <div>
                  <input
                    type="number"
                    name="discount"
                    value={product.discount}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </div>
                <div>{product.total}</div>
              </div>
            ))}

            <button className="addButton" onClick={handleAddRow}>
              Add Product
            </button>
          </div>
          <div className="totalAmount">
            <div>Total:</div>
            <div>1000</div>
          </div>
          <button className="saveButton" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddSale;
