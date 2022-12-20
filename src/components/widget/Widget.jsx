import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CarRentalIcon from '@mui/icons-material/CarRental';
import FlightIcon from '@mui/icons-material/Flight';
import HouseIcon from '@mui/icons-material/House';
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import { Datatour } from "../datatour/datatour";
import { ref, onValue} from "firebase/database";


var soluong1 =0
const dbRef = ref(db, 'BookingTour/');
    onValue(dbRef, (snapshot)=>{
        snapshot.forEach(childSnapshot=>{
            let keyName = childSnapshot.key;
            soluong1++
        });
    });

    var soluong2 =0
const dbRef2 = ref(db, 'BookingHotel/');
    onValue(dbRef2, (snapshot)=>{
        snapshot.forEach(childSnapshot=>{
            let keyName = childSnapshot.key;
            soluong2++
        });
    });

    var soluong3 =0
const dbRef3 = ref(db, 'PlaneTickets/');
    onValue(dbRef3, (snapshot)=>{
        snapshot.forEach(childSnapshot=>{
            let keyName = childSnapshot.key;
            soluong3++
        });
    });

    var soluong4 =0
const dbRef4 = ref(db, 'Rentcars/');
    onValue(dbRef4, (snapshot)=>{
        snapshot.forEach(childSnapshot=>{
            let keyName = childSnapshot.key;
            soluong4++
        });
    });

const Widget = ({ type }) => {
  const [amount, setAmount] = useState([])
  const [diff, setDiff] = useState(null);
  let data;


  switch (type) {
    case "user":
      data = {
        title: "Khách hàng",
        soluong:([soluong1]),
        isMoney: false,
        link: (
          <Link to="/users" style={{ textDecoration: "none" }}>
            Hiển thị toàn bộ
          </Link>),
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "hotel":
      data = {
        title: "Khách sạn",
        soluong:([soluong2]),
        isMoney: false,
        link: (
          <Link to="/hotel" style={{ textDecoration: "none" }}>
            Hiển thị toàn bộ
          </Link>),
        icon: (
          <HouseIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "plane":
      data = {
        title: "Máy bay",
        soluong:([soluong3]),
        isMoney: false,
        link: (
          <Link to="/plane" style={{ textDecoration: "none" }}>
            Hiển thị toàn bộ
          </Link>),
        icon: (
          <FlightIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "car-rent":
      data = {
        title: "Thuê xe",
        isMoney: false,
        soluong:([soluong4]),
        link: (
          <Link to="/car-rent" style={{ textDecoration: "none" }}>
            Hiển thị toàn bộ
          </Link>),
        icon: (
          <CarRentalIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  

  useEffect(() => {
    const fetchData = async () => {
      
    };
    fetchData();
  }, []);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
         {data.soluong}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
