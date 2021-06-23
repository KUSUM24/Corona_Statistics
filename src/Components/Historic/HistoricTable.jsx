import React from "react";
import { Dropdown, DropdownButton, Table } from "react-bootstrap";

export const HistoricTable = ({ historicData, historicWorld, dateList }) => {
  let date = "5/24/21";
  console.log(historicWorld.cases[date]);
  console.log(historicData);
  console.log(dateList[0]);
  const makeTable = (data, index) => {
    return (
      <>
        <tr>
          <th>#</th>
          <th>{data.country}</th>
          <th>{data.timeline.cases[date]}</th>
          <th>{data.timeline.recovered[date]}</th>
          <th>{data.timeline.deaths[date]}</th>
        </tr>
      </>
    );
  };
  return (
    <div>
      <div className="text-center m-4">
        <DropdownButton
          variant="dark"
          id="dropdown-basic-button"
          title="Select Date"
        >
          {dateList.map((date, index) => {
            return <Dropdown.Item href="#">{date}</Dropdown.Item>;
          })}
        </DropdownButton>
      </div>
      <Table striped responsive bordered hover variant="success">
        <thead>
          <tr>
            <th>#</th>
            <th>Country Name</th>
            <th>Total Cases</th>
            <th>Recovered Cases</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: "#dc3545", color: "white" }}>
            <td>1</td>
            <td>World</td>
            <td>{historicWorld.cases[date].toLocaleString()}</td>
            <td>{historicWorld.recovered[date].toLocaleString()}</td>
            <td>{historicWorld.deaths[date].toLocaleString()}</td>
          </tr>
          {historicData.map(makeTable)}
        </tbody>
      </Table>
    </div>
  );
};
