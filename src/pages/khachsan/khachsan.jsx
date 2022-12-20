import { DatatableKS } from "../../components/datatableKS/datatableKS";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';


const Khachsan = ()=>{
    return (
        <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <title style={{display: 'block'}} className="title1">Table Khách sạn</title>
          <DatatableKS />
        </div>
      
    </div>
    )
}

export default Khachsan
 