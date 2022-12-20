import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";
import img from "../../img/1.gif" ;
import img3 from "../../img/3.gif" ;
import img4 from "../../img/dance-meme.gif"


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgetcontainer">
          <div className="widgets">
            <Widget type="user" />
            <Widget type="hotel" />
            <Widget type="plane" />
            <Widget type="car-rent" />
          </div>

          <h2 class="title">
    <span class="title-word title-word-1 t1">Welcome</span>
    <span class="title-word title-word-2"> back</span>
    <span class="title-word title-word-2"> admin</span>
        </h2>
        <img className="ima2 ima3"src={img4} alt="" />
        <img className="ima" src={img} alt="" />
        <img className="ima2"src={img4} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Home;