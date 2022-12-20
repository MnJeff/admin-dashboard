import Table from "../../components/table/Table";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./User.scss"


const User = ()=>{
    return (
        <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="listTitle">Giao dịch gần đây</div>
          <Table />
        </div>
      
    </div>
    )
}

export default User
 