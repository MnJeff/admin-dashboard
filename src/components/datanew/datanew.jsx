import React from "react";
import { Table } from "react-bootstrap";
import { ref, onValue} from "firebase/database";
import { Datanewcontrol } from "./datanewcontrol";
import StartFireBase from "../../firebase2";
import "./dtnew.scss"

const db = StartFireBase()

let UniqueNumber = 0;
export class Datanew extends React.Component{
    constructor(props){
        super(props);       
        this.state = {
            tableData: [],
        }
        
    }
    componentDidMount(){
        const dbRef = ref(db, 'News/');
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
            <Table bordered className="table">
                <thead>
                    <tr>
                    <th className="pic">Hình ảnh</th>
                    <th className="name">Tên Tin Tức</th>
                    <th  className="time">Thời gian</th>
                    <th className="gia">Địa Điểm</th>
                    <th className="content">Nội dung</th>
                    <th className="gia">Lượt xem</th>
                    <th className="first">Action</th>
                    <th></th>
                    </tr>
                </thead>

                <tbody>
                    
                    {
                    this.state.tableData.map((row,index)=>{
                        return(
                        <tr key={UniqueNumber++}>
                            <td ><img src={row.data.img} alt="" /></td>
                            <td >{row.data.title}</td>
                            <td>{row.data.date}</td>
                            <td >{row.data.location}</td>
                            <td className="ct" >{row.data.content}</td>
                            <td >{row.data.view}</td>
                            <td><Datanewcontrol username={row.key} record={row.data}/></td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
            </div>
        )
    }
}

