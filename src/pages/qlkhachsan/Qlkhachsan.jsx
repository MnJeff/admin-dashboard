import "./qlkhachsan.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Dataks } from "../../components/dataks/dataks"

const Qlkhachsan = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <h1>Quản lý khách sạn</h1>
        <Dataks/>
      </div>
    </div>
  )
}

export default Qlkhachsan