import { DatatableMB } from "../../components/datatableMB/datatableMB";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';


const Plane = ()=>{
    return (
        <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <title style={{display: 'block'}} className="title1">Table Máy Bay</title>
          <DatatableMB />
        </div>
      
    </div>
    )
}

export default Plane
 