import "./listpurchase.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const ListPurchase = () => {

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitles">Purchase List</div>
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
                {/* {allProducts.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">{row.id}</TableCell>
                    <TableCell className="tableCell"><div className="cellWrapper">{row.productName}</div></TableCell>
                    <TableCell className="tableCell">{row.maxPrice}</TableCell>
                    <TableCell className="tableCell">{row.cost}</TableCell>
                    <TableCell className="tableCell">{row.quantity}</TableCell>
                    <TableCell className="tableCell">edit and delete button</TableCell>
                  </TableRow>
                ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default ListPurchase;
