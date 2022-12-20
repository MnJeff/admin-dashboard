import { DatatableKH } from "../../components/datatableKH/datatableKH"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./khachhang.scss";


const User = ()=>{
    return (
        <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <title style={{display: 'block'}} className="title1">Table Khách Hàng</title>
          <DatatableKH />
        </div>
      
    </div>
    )
}

export default User
 