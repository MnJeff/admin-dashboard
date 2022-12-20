import React from "react";
import { Table } from "react-bootstrap";
import { ref, onValue} from "firebase/database";
import "./dataks.scss"
import { Datakscontrol } from "./datakscontrol";
import StartFireBase from "../../firebase2";

const db = StartFireBase()

let UniqueNumber = 0;
export class Dataks extends React.Component{
    constructor(props){
        super(props);       
        this.state = {
            tableData: [],
        }
        
    }


    componentDidMount(){
        const dbRef = ref(db, 'Hotel/');
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
                    <th className="gia">Hình ảnh</th>
                    <th className="name">Tên hotel</th>
                    <th  className="location">Giá hotel</th>
                    <th className="gia">Số sao</th>
                    <th className="first">Action</th>
                    </tr>
                </thead>

                <tbody>
                    
                    {
                    this.state.tableData.map((row,index)=>{
                        return(
                        <tr key={UniqueNumber++}>
                            <td ><img src={row.data.img} alt="" /></td>
                            <td >{row.data.name}</td>
                            <td className="price">{row.data.price}</td>
                            <td >{row.data.star}</td>
                            <td><Datakscontrol username={row.key} record={row.data}/></td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
            </div>
        )
    }
}

