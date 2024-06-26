import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Table from "../../components/table/Table";


const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="list-Container">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
      
    </div>
  )
}

export default List