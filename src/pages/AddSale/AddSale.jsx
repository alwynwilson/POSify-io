import { Link } from "react-router-dom";
import "./addsale.css"
import CloseIcon from '@mui/icons-material/Close';

const AddSale = () => {
  return (
    <div className="list">
      <div className="listContainer">
        <div className="list-Container">
          <div className="header">
            <h1>Sale</h1>
            <Link to="/dashboard" style={{ textDecoration: "none" }}><div><CloseIcon className="icon"/></div></Link>
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
              <div >Item No</div>
              <div>Product Name</div>
              <div>MRP</div>
              <div>Qty</div>
              <div>Price</div>
              <div>Discount</div>
              <div>Total Amount</div>
            </div>
            <div className="itemsRow">
              <div>1</div>
              <div><input type="text" /></div>
              <div>120</div>
              <div><input type="text" /></div>
              <div>100</div>
              <div><input type="text" /></div>
              <div>100</div>
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
