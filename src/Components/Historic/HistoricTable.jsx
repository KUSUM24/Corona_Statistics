import React, { useState } from "react";
import { Dropdown, DropdownButton, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const HistoricTable = ({
  historicData,
  historicWorld,
  dateList,
  getCountryName,
}) => {
  const [currentDate, setCurrentDate] = useState(dateList[0]);
  const handleCurrentdate = (date) => {
    setCurrentDate(date);
  };
  console.log(historicData);
  // console.log(dateList[0]);
  const makeTable = (data, index) => {
    return (
      <>
        <tr>
          <td>{index + 2}</td>
          <td onClick={() => getCountryName(data.country)}>
            <Link
              to={`/${data.country}`}
              style={{
                cursor: "pointer",
                color: "black",
                border: "1px solid transparent",
                borderColor: "transparent",
                width: "100% !important",
              }}
            >
              {data.country}
            </Link>
          </td>
          <td>{data.timeline.cases[currentDate].toLocaleString()}</td>
          <td>{data.timeline.recovered[currentDate].toLocaleString()}</td>
          <td>{data.timeline.deaths[currentDate].toLocaleString()}</td>
        </tr>
      </>
    );
  };
  return (
    <div>
      <div className="text-center m-4">
        <label className="m-0" style={{ fontSize: "120%" }}>
          Select Date
        </label>
        <DropdownButton
          variant="dark"
          id="dropdown-basic-button"
          title={currentDate}
          // style={{ height: "200px", overflowY: "scroll" }}
        >
          {dateList.map((date, index) => {
            return (
              <Dropdown.Item href="#" onClick={() => handleCurrentdate(date)}>
                {date}
              </Dropdown.Item>
            );
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
            <td>{historicWorld.cases[currentDate].toLocaleString()}</td>
            <td>{historicWorld.recovered[currentDate].toLocaleString()}</td>
            <td>{historicWorld.deaths[currentDate].toLocaleString()}</td>
          </tr>
          {historicData.map(makeTable)}
        </tbody>
      </Table>
    </div>
  );
};
