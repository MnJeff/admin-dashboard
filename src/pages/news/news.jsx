
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Datanew } from "../../components/datanew/datanew";


const News = ()=>{
    return (
        <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <title style={{display: 'block'}} className="title1">Quản lý Tin Tức</title>
          <Datanew />
        </div>
      
    </div>
    )
}

export default News
 