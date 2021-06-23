import React from "react";
import { Table } from "react-bootstrap";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import { Link, useHistory } from "react-router-dom";

export const MainTable = ({
  countryList,
  worldData,
  sortStatus,
  sortValue,
  getCountryName,
}) => {
  return (
    <>
      <Table striped responsive bordered hover variant="primary">
        <thead>
          <tr>
            <th>#</th>
            <th
              onClick={() => sortStatus("countryName")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex justify-content-between">
                Country Name
                {sortValue == "countryName" && <ImportExportIcon />}
              </div>
            </th>
            <th
              onClick={() => sortStatus("newCases")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex justify-content-between">
                New Cases
                {sortValue == "newCases" && <ImportExportIcon />}
              </div>
            </th>
            <th
              onClick={() => sortStatus("active")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex justify-content-between">
                Active Cases {sortValue == "active" && <ImportExportIcon />}
              </div>
            </th>
            <th
              onClick={() => sortStatus("total")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex justify-content-between">
                Total Cases {sortValue == "total" && <ImportExportIcon />}
              </div>
            </th>

            <th
              onClick={() => sortStatus("recovered")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex justify-content-between">
                Recovered Cases{" "}
                {sortValue == "recovered" && <ImportExportIcon />}
              </div>
            </th>
            <th
              onClick={() => sortStatus("deaths")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex justify-content-between">
                Deaths {sortValue == "deaths" && <ImportExportIcon />}
              </div>
            </th>
            <th
              onClick={() => sortStatus("tests")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex justify-content-between">
                Total Tests {sortValue == "tests" && <ImportExportIcon />}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: "#dc3545", color: "white" }}>
            <td>1</td>
            <td>World</td>
            <td>{worldData.todayCases.toLocaleString()}</td>
            <td>{worldData.active.toLocaleString()}</td>
            <td>{worldData.cases.toLocaleString()}</td>
            <td>{worldData.recovered.toLocaleString()}</td>
            <td>{worldData.deaths.toLocaleString()}</td>
            <td>{worldData.tests.toLocaleString()}</td>
          </tr>
          {countryList.map((item, index) => {
            return (
              <tr>
                <td>{index + 2}</td>
                <td onClick={() => getCountryName(item.country)}>
                  <Link
                    to={`/${item.country}`}
                    style={{
                      cursor: "pointer",
                      color: "black",
                      border: "1px solid transparent",
                      borderColor: "transparent",
                      width: "100%",
                    }}
                  >
                    {item.country}
                  </Link>
                </td>
                <td>{item.todayCases.toLocaleString()}</td>
                <td>{item.active.toLocaleString()}</td>
                <td>{item.cases.toLocaleString()}</td>
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
