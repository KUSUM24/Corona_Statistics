import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./styles/countryCard.css";

export const CountryCard = ({ oneCountryData }) => {
  return (
    <div>
      <Row>
        <Col className="m-4 text-center">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              {oneCountryData.country}
              <div>Till Date</div>
            </Card.Header>
            <Card.Body>
              <div className="important-detail bg-danger text-center">
                Active Cases: <b>{oneCountryData.active.toLocaleString()}</b>
              </div>
              <div>
                Total Cases: <b>{oneCountryData.cases.toLocaleString()}</b>
              </div>
              <div>
                Recovered Cases:{" "}
                <b>{oneCountryData.recovered.toLocaleString()}</b>
              </div>
              <div>
                Deaths: <b>{oneCountryData.deaths.toLocaleString()}</b>
              </div>
              <div>
                Tests: <b>{oneCountryData.tests.toLocaleString()}</b>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="m-4 text-center">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              {oneCountryData.country} <div>Today</div>{" "}
            </Card.Header>
            <Card.Body>
              <div className="important-detail bg-danger">
                New Cases: <b>{oneCountryData.todayCases.toLocaleString()}</b>
              </div>
              <div>
                New Recovered:{" "}
                <b>{oneCountryData.todayRecovered.toLocaleString()}</b>
              </div>
              <div>
                New Deaths: <b>{oneCountryData.todayDeaths.toLocaleString()}</b>
              </div>

              <div>
                Critical: <b>{oneCountryData.critical.toLocaleString()}</b>
              </div>
              <div>
                {" "}
                Case per people:
                <b>{oneCountryData.oneCasePerPeople.toLocaleString()}</b>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="m-4 text-center">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              {oneCountryData.country} <div>Per Million</div>
            </Card.Header>
            <Card.Body>
              <div className="important-detail bg-danger ">
                Active Per Million:{" "}
                <b>{oneCountryData.activePerOneMillion.toLocaleString()}</b>
              </div>
              <div>
                Total Per Million:{" "}
                <b>{oneCountryData.casesPerOneMillion.toLocaleString()}</b>
              </div>
              <div>
                Recovered Per Million:{" "}
                <b>{oneCountryData.recoveredPerOneMillion.toLocaleString()}</b>
              </div>
              <div>
                Deaths Per Million:{" "}
                <b>{oneCountryData.deathsPerOneMillion.toLocaleString()}</b>
              </div>
              <div>
                Tests Per Million:{" "}
                <b>{oneCountryData.testsPerOneMillion.toLocaleString()}</b>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
