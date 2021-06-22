import React from "react";
import { Table } from "react-bootstrap";

export const HistoricTable = ({ historicData, historicWorld }) => {
  console.log(historicWorld);
  return (
    <div>
      <Table striped responsive bordered hover variant="success">
        <thead>
          <tr>
            <th>#</th>
            <th>
              Country Name
              {/* <SortIcon /> */}
            </th>
            <th>Total Cases</th>
            <th>Recovered Cases</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: "#dc3545", color: "white" }}>
            <td>1</td>
            <td>World</td>
            <td>{historicWorld.cases.toLocaleString()}</td>
            <td>{historicWorld.recovered.toLocaleString()}</td>
            <td>{historicWorld.deaths.toLocaleString()}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
