import React from "react";
import { Table } from "react-bootstrap";
// import HeightIcon from "@material-ui/icons/Height";
// import SortIcon from '@material-ui/icons/Sort';
export const MainTable = ({ countryList, worldData }) => {
  return (
    <>
      <Table striped responsive bordered hover variant="primary">
        <thead>
          <tr>
            <th>#</th>
            <th>
              Country Name
              {/* <SortIcon /> */}
            </th>
            <th>New Cases</th>
            <th>Total Cases</th>
            <th>Active Cases</th>
            <th>Recovered Cases</th>
            <th>Deaths</th>
            <th>Total Tests</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: "#dc3545", color: "white" }}>
            <td>1</td>
            <td>World</td>
            <td>{worldData.todayCases.toLocaleString()}</td>
            <td>{worldData.cases.toLocaleString()}</td>
            <td>{worldData.active.toLocaleString()}</td>
            <td>{worldData.recovered.toLocaleString()}</td>
            <td>{worldData.deaths.toLocaleString()}</td>
            <td>{worldData.tests.toLocaleString()}</td>
          </tr>
          {countryList.map((item, index) => {
            return (
              <tr>
                <td>{index + 2}</td>
                <td>{item.country.toLocaleString()}</td>
                <td>{item.todayCases.toLocaleString()}</td>
                <td>{item.cases.toLocaleString()}</td>
                <td>{item.active.toLocaleString()}</td>
                <td>{item.recovered.toLocaleString()}</td>
                <td>{item.deaths.toLocaleString()}</td>
                <td>{item.tests.toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
