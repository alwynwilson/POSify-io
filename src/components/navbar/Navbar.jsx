import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";


const Navbar = () => {

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <button className="btn btn-danger text-light"><i className="fa-solid fa-plus"></i>Add Sale</button>
          </div>
          <div className="item">
            <button className="btn text-light"><i className="fa-solid fa-cart-shopping">  </i>Purchase</button>
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
            />
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://www.clevelanddentalhc.com/wp-content/uploads/2018/03/sample-avatar-1024x1024.jpg"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;