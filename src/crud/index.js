import React, { Component } from "react";
import Tabel from "./Tabel";
import Formulir from "./Formulir";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datas: [],
      nama: "",
      alamat: "",
      telp: "",
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.datas)

    if (this.state.id === "") {
      this.setState({
        datas: [
          ...this.state.datas,
          {
            id: this.state.datas.length + 1,
            nama: this.state.nama,
            alamat: this.state.alamat,
            telp: this.state.telp,
          },
        ],
      });
    } else {
      const selaindipilih = this.state.datas
        .filter((data) => data.id !== this.state.id)
        .map((filterdata) => {
          return filterdata;
        });

        this.setState({
            datas: [
              ...selaindipilih,
              {
                id: this.state.id,
                nama: this.state.nama,
                alamat: this.state.alamat,
                telp: this.state.telp,
              },
            ],
          });
    }

    this.setState({
      nama: "",
      alamat: "",
      telp: "",
      id: "",
    });
  };

  editData = (id) => {
    const yangdipilih = this.state.datas
      .filter((data) => data.id === id)
      .map((filterdata) => {
        return filterdata;
      });

    console.log(yangdipilih[0].id)

    this.setState({
      nama: yangdipilih[0].nama,
      alamat: yangdipilih[0].alamat,
      telp: yangdipilih[0].telp,
      id: yangdipilih[0].id,
    });
  };

  hapusData = (id) => {
    const dataBaru = this.state.datas
    .filter((data) => data.id !== id)
    .map((filterdata) => {
      return filterdata;
    });

    this.setState({
        datas : dataBaru
    })

  }

  render() {
    return (
      <div>
        <div className="container mt-4">
          <Tabel datas={this.state.datas} editData={this.editData} hapusData={this.hapusData} />
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
