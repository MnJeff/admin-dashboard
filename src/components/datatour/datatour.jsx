import React from "react";
import { Table } from "react-bootstrap";
import { ref, onValue} from "firebase/database";
import "./datatour.scss"
import { DatatourControl } from "./datatourcontrol";
import StartFireBase from "../../firebase2";

const db = StartFireBase()
var soluong = 0

let UniqueNumber = 0;
export class Datatour extends React.Component{
    constructor(props){
        super(props);       
        this.state = {
            tableData: [],
            imagedata:[{}],
            imageUpload:null,
            tableData2:[{}]
        }
        
    }


    componentDidMount(){
        const dbRef = ref(db, 'Tour/');
        onValue(dbRef, (snapshot)=>{
            let record = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                record.push({"key": keyName, "data":data});

            });
            this.setState({tableData: record});
        });
        
        
    }

    

    render(){
        return(
            <div className="tabledata">   
            <Table bordered className="tbtour">
                <thead>
                    <tr>
                    <th className="picture">Hình ảnh</th>
                    <th className="name1">Tên tour</th>
                    <th  className="location">Địa điểm</th>
                    <th className="gia">Giá tour</th>
                    <th  className="time">Thời gian</th>
                    <th  className="time">Ngày đi</th>
                    <th  className="soluong">Số lượng</th>
                    <th  className="content">Nội dung</th>
                    <th className="first">Action</th>
                    </tr>
                </thead>

                <tbody>
                    
                    {
                    this.state.tableData.map((row,index)=>{
                        soluong++
                        //console.log(soluong)
                        return(
                        <tr key={UniqueNumber++}>
                            <td ><img src={`${row.data.img}`} alt="" /></td>
                            <td >{row.data.title}</td>
                            <td>{row.data.location}</td>
                            <td>{row.data.price}</td>
                            <td >{row.data.time}</td>
                            <td >{row.data.date}</td>
                            <td>{row.data.person}</td>
                            <td className="ct" >{row.data.content}</td>
                            <td><DatatourControl username={row.key} record={row.data}/></td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
            </div>
        )
    }
}

