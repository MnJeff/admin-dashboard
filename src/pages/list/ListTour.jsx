import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import {Datatour} from "../../components/datatour/datatour"

const ListTour = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatour/>
      </div>
    </div>
  )
}

export default ListTour