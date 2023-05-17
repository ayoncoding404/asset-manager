import React, { Fragment } from "react";
import { Button, Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Asset from "./Assets";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  let history = useNavigate();

  const handleDelete = (id) => {
    var index = Asset.map(function (e) {
      return e.id;
    }).indexOf(id);

    Asset.splice(index, 1);

    history("/");
  };

  return (
    <>
      <Fragment>
        <div style={{ margin: "10rem" }}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Type</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Asset && Asset.length > 0
                ? Asset.map((item) => {
                    return (
                      <tr>
                        <td>{item.Type}</td>
                        <td>{item.Name}</td>
                        <td>
                          <Link to={"/edit"}>
                            <Button onClick={() => alert(item.id)}>
                              {" "}
                              Edit{" "}
                            </Button>
                          </Link>
                          &nbsp;
                          <Button onClick={() => handleDelete(item.id)}>
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                : "No data available"}
            </tbody>
          </Table>
          <br></br>
          <Link className="d-grid" to='/add'>
            <Button size='lg'>Add New Asset</Button>
          </Link>
        </div>
      </Fragment>
    </>
  );
};

export default Home;
