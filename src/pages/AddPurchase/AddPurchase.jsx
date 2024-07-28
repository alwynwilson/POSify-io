import { Link } from "react-router-dom";
import "./addpurchase.css"
import CloseIcon from '@mui/icons-material/Close';

const AddSale = () => {
  return (
    <div className="list">
      <div className="listContainer">
        <div className="list-Container">
          <div className="header">
            <h1>Purchase</h1>
            <Link to="/dashboard" style={{ textDecoration: "none" }}><div><CloseIcon className="icon"/></div></Link>
          </div>
          <div className="billingDetails">
            <div className="billingColumn">
              <input type="text" placeholder="Supplier" />
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Address" />
            </div>
            <div className="billingColumn">
              <input type="text" placeholder="Invoice Number" />
              <input type="date" placeholder="Date" />
              <input type="time" placeholder="Time" />
            </div>
          </div>
          <div className="itemsList">
            <div className="itemsHeaders row">
              <div className="plist">Item No</div>
              <div className="plist">Product Name</div>
              <div className="plist">MRP</div>
              <div className="plist">Qty</div>
              <div className="plist">Cost</div>
              <div className="plist">Total Amount</div>
            </div>
            <div className="itemsRows">
              <div className="plist">1</div>
              <div className="plist"><input type="text" /></div>
              <div className="plist">120</div>
              <div className="plist"><input type="text" /></div>
              <div className="plist">100</div>
              <div className="plist">100</div>
            </div>
            {/* Add more rows as needed */}
          </div>
          <div className="totalAmount">
            <div>Total:</div>
            <div>1000</div>
          </div>
          <button className="saveButton">Save</button>
        </div>
      </div>
    </div>
  )
}

export default AddSale
