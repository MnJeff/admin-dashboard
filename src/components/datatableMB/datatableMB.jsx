import "./datatableMB.scss";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import { Table } from "react-bootstrap";
import React from "react";

export class DatatableMB extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: []
    }
  }
  componentDidMount() {
    const dbRef = ref(db, 'PlaneTickets/');

    onValue(dbRef, (snapshot) => {
      let record = [];
      snapshot.forEach(childSnapshot => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        record.push({ "key": keyName, "data": data });
      });
      this.setState({ tableData: record });
    });
  }

  render() {
    return (
          <Table bordered>
            <thead>
              <tr>
              <th>#</th>
              <th>Họ Tên</th>
              <th>Địa chỉ</th>
              <th>Email</th>
              <th>SDT</th>
              <th>Note</th>
              </tr>
            </thead>

            <tbody>
              {this.state.tableData.map((row, index) => {
                return (
                  <tr>
                    <td>{index}</td>
                    <td>{row.data.name}</td>
                    <td>{row.data.address}</td>
                    <td>{row.data.email}</td>
                    <td>{row.data.tel}</td>
                    <td>{row.data.note}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>

    )
  }
}


