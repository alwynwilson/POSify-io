import "./listproduct.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { allProductsAPI } from "../../Services/allAPI";
import { Link } from "react-router-dom";


const ListProduct = () => {

  const [allProducts,setAllProducts] = useState([])
  const [searchKey,setSearchKey] = useState("")


  useEffect(()=>{
    getAllProductsList()
  },[searchKey])
  
  const getAllProductsList = async () =>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      try{
        const result = await allProductsAPI(searchKey,reqHeader);
        console.log(result);
        if(result.status==200){
          setAllProducts(result.data)
        }
      }catch(err){
        console.log("Bad request");
      }
    }
    
  }
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        
        <div className="bottom">
          <div className="head">
              <h1 className="title">Product List</h1>
              <Link to="/addproduct">
                <button className="btn btn-primary">Add Product</button>
              </Link>
          </div>
          <div style={{width:'500px',borderRadius:"15px"}} className="d-flex justify-content-left">
            <input onChange={e=>setSearchKey(e.target.value)} type="text" className='form-control' placeholder='Search Products here' />
          </div>

          <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">Product ID</TableCell>
                  <TableCell className="tableCell">Product Name</TableCell>
                  <TableCell className="tableCell">Max Retail Price</TableCell>
                  <TableCell className="tableCell">Cost</TableCell>
                  <TableCell className="tableCell">Quantity</TableCell>
                  <TableCell className="tableCell">Change</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allProducts.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">{row.id}</TableCell>
                    <TableCell className="tableCell"><div className="cellWrapper">{row.productName}</div></TableCell>
                    <TableCell className="tableCell">{row.maxPrice}</TableCell>
                    <TableCell className="tableCell">{row.cost}</TableCell>
                    <TableCell className="tableCell">{row.quantity}</TableCell>
                    <TableCell className="tableCell">
                      <div className="d-flex">
                        <button className="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button className="delete"><i class="fa-solid fa-trash"></i></button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </div>
      </div>
    </div>
  );
};

export default ListProduct;
