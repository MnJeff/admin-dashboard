import { DatatableTX } from "../../components/datatableTX/datatableTX";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';


const Tx = ()=>{
    return (
        <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <title style={{display: 'block'}} className="title1">Table Thuê Xe</title>
          <DatatableTX />
        </div>
      
    </div>
    )
}

export default Tx
 