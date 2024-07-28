import "./navbar.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link, useNavigate } from "react-router-dom";
import user from '../../assets/user.png'


const Navbar = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate()

  const handleLogout = ()=>{
    sessionStorage.clear()
    navigate('/')
  }

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <Link to="/addsale" style={{ textDecoration: "none" }}>
            <div className="item">
              <button className="btn btn-danger text-light"><i className="fa-solid fa-plus"></i>Add Sale</button>
            </div>
          </Link>
          <Link to="/addpurchase" style={{ textDecoration: "none" }}>
            <div className="item">
              <button className="btn text-light"><i className="fa-solid fa-cart-shopping">  </i>Add Purchase</button>
            </div>
          </Link>
          <div style={{cursor:"pointer"}} className="item user-logout text-center">
            <img
              src={user} alt="" style={{height:"20px",width:"20px"}}
              className="avatar"
              onClick={handleOpen}
            />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
             <div className="rounded-5" style={{borderRadius:"25px"}}>
                <Box style={{
                    position:'absolute',
                    border: '0.5px solid #000',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    backgroundColor: 'whitesmoke',
                    boxShadow: '2',
                    padding: '40px'
                  }} >
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Account
                  </Typography>
                  <Typography style={{textAlign:'center'}} id="modal-modal-description" sx={{ mt: 2 }}>
                    Do you want to logout?
                  </Typography>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button onClick={handleLogout} style={{width:"120px",textAlign:"center",color:"white",backgroundColor:"blue",marginLeft:"105px",marginTop:"30px"}}>Logout</Button>
                  </Link>
                </Box>
             </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Navbar;

