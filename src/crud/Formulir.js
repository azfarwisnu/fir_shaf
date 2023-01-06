import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const Formulir = ({nama, alamat, telp, handleChange, handleSubmit, id}) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>{id ? "Edit Data" : "Tambah Data" }</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nama">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                value={nama}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="deskripsi">
              <Form.Label>Alamat</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="alamat"
                value={alamat}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="harga">
              <Form.Label>No Telepon</Form.Label>
              <Form.Control
                type="text"
                name="telp"
                value={telp}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
