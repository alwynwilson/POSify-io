import { Link } from "react-router-dom";
import "./addproduct.css";
import CloseIcon from "@mui/icons-material/Close";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const AddProduct = () => {
  return (
    <div className="list">
      <div className="listContainer">
        <div className="list-Container">
          <div className="header">
            <h1>Add Product</h1>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <div>
                <CloseIcon className="icon" />
              </div>
            </Link>
          </div>
          <div className="form-table">
            <form className="detail">
                  <div className="formGroup details">
                    <label style={{width:'300px',padding:'10px',margin:'0px',textAlign:"left"}}>Product ID:</label>
                    <input style={{padding:'10px',margin:'0px'}} type="text" name="productid" placeholder="Enter product ID" required />
                  </div>
                  <div className="formGroup details">
                    <label style={{width:'185px',padding:'10px',marginLeft:'0px',textAlign:"left"}}>Product Image:</label>
                    <input style={{padding:'10px',margin:'0px',width:'290px'}} type="file" name="productimg"  required />
                  </div>
                  <div className="formGroup details">
                    <label style={{width:'300px',padding:'10px',margin:'0px',textAlign:"left"}}>Product Name:</label>
                    <input style={{padding:'10px',margin:'0px'}} type="text" name="productname" placeholder="Enter Product Name" required />
                  </div>
                  <div className="formGroup details">
                    <label style={{width:'300px',padding:'10px',margin:'0px',textAlign:"left"}}>Max Retail Price:</label>
                    <input style={{padding:'10px',margin:'0px'}} type="number" name="maxretailprice" placeholder="Enter Max Retail Price" required />
                  </div>
                  <div className="formGroup details">
                    <label style={{width:'300px',padding:'10px',margin:'0px',textAlign:"left"}}>Cost:</label>
                    <input style={{padding:'10px',margin:'0px'}} type="number" name="cost" placeholder="Enter cost" required />
                  </div>
                  <div className="formGroup details">
                    <label style={{width:'300px',padding:'10px',margin:'0px',textAlign:"left"}}>Quantity:</label>
                    <input style={{padding:'10px',margin:'0px'}} type="number" name="quantity" placeholder="Enter Quantity" required />
                  </div>      
                  <button className="addproduct">Add Product</button>

          </form>

          </div>  
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
