import "./sidebar.scss";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import DashboardIcon from "@mui/icons-material/Dashboard";
import CardTravelIcon from '@mui/icons-material/CardTravel';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import FlightIcon from '@mui/icons-material/Flight';
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";



const Sidebar = () => {
  
  const { dispatch } = useContext(DarkModeContext);
  const navitage = useNavigate()


  const handleLogout=()=>{
    localStorage.removeItem("user");
    navitage("/login")
    alert('Đăng xuất thành công')
  }
    
  
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Tour</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Trang chính</span>
          </li>
          </Link>
          <p className="title">LISTS KHÁCH HÀNG ĐẶT MUA</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Đặt tour</span>
            </li>
          </Link>
          <Link to="/hotel" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Khách sạn</span>
            </li>
          </Link>
          <Link to="/plane" style={{ textDecoration: "none" }}>
          <li>
            <FlightIcon className="icon" />
            <span>Máy bay</span>
          </li>
          </Link>
          <Link to="/car-rent" style={{ textDecoration: "none" }}>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Thuê xe</span>
          </li>
          </Link>
          <p className="title">MANAGER</p>
          
          <Link to="/tour" style={{ textDecoration: "none" }}>
            <li>
              <CardTravelIcon className="icon" />
              <span>Tour</span>
            </li>
          </Link>
          
          <Link to="/hotel-manager" style={{ textDecoration: "none" }}>
          <li>
            <HomeWorkIcon className="icon" />
            <span>Quản lý khách sạn</span>
          </li>
          </Link>

          <Link to="/new-manager" style={{ textDecoration: "none" }}>
          <li>
            <NewspaperIcon className="icon" />
            <span>Quản lý news</span>
          </li>
          </Link>
          
          
          
          <p className="title user-title">USER</p>
          
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={()=>handleLogout()}>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
