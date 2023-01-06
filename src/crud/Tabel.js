import React from "react";
import { Table } from "react-bootstrap";

const Tabel = ({ datas, editData, hapusData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama</th>
          <th>Alamat</th>
          <th>No Telepon</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((data, index) => {
          return (
            <tr key={index} >
              <td>{index+1}</td>
              <td>{data.nama}</td>
              <td>{data.alamat}</td>
              <td>{data.telp}</td>
              <td>
                <button className="btn btn-warning mr-2" onClick={() => editData(data.id) }>Edit</button>
                <button className="btn btn-danger" onClick={() => hapusData(data.id) }>Hapus</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabel;
