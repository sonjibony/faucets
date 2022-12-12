import React from "react";
import { Table } from "react-bootstrap";

const HistoryTable = () => {
  return (
    <div className=" pb-5 ps-5 pe-5 mx-5 bg-light" style={{}}>
      <p className="fw-bold" style={{ fontSize: "17px" }}>
        Request History
      </p>
      <div className="d-flex gap-3">
        <button
          className="btn"
          style={{ backgroundColor: "#0000FF", border: "0px" }}
          type="submit"
        >
          ETH Transaction History
        </button>
        <button
          className="text-dark btn"
          style={{ backgroundColor: "#EEF2FE", border: "0px" }}
          type="submit"
        >
          TesLink Transaction History
        </button>
      </div>
      <Table className="mt-3 text-center"  bordered hover>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Time</th>
            <th>Amount</th>
            <th>Hash</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>12:30 AM</td>
            <td>487</td>
            <td>4s8er5s5fe57rjmxnfuewrurks</td>
          </tr>
          <tr>
            <td>2</td>
            <td>10:30 AM</td>
            <td>875</td>
            <td>sf7s7ers4e7r7wser</td>
          </tr>
          <tr>
            <td>3</td>
            <td>11:30 AM</td>
            <td>797</td>
            <td>se4s7er7</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default HistoryTable;
