import React, { useState, useEffect } from "react";
import { Loader } from "./Common/Loader";
import { Main } from "./Components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Historic } from "./Components/Historic";
import { Country } from "./Components/Country";

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [countryList, setCountryList] = useState([]);
  const [data, setData] = useState([]);
  const [worldData, setWorldData] = useState({});
  const [historicData, setHistoricData] = useState({});
  const [historicList, setHistoricList] = useState({});
  const [historicWorld, setHistoricWorld] = useState({});
  const [dateList, setDateList] = useState([]);
  const [sortValue, setSortValue] = useState("active");
  const [oneCountryData, setOneCountryData] = useState({});
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      let res = await fetch("https://corona.lmao.ninja/v2/countries", {
        method: "GET",
      });
      let json = await res.json();
      setCountryList(json.sort((a, b) => b.active - a.active));
      setData(json);
      let resWorld = await fetch("https://corona.lmao.ninja/v2/all", {
        method: "GET",
      });
      let jsonWorld = await resWorld.json();
      setWorldData(jsonWorld);
      let resHistoric = await fetch("https://corona.lmao.ninja/v2/historical", {
        method: "GET",
      });
      let jsonHistoric = await resHistoric.json();
      setHistoricData(jsonHistoric);
      setHistoricList(jsonHistoric);
      console.log(jsonHistoric);
      let resHistoricWorld = await fetch(
        "https://corona.lmao.ninja/v2/historical/all",
        {
          method: "GET",
        }
      );
      let jsonHistoricWorld = await resHistoricWorld.json();
      let dateArray = Object.keys(jsonHistoricWorld.cases);
      setDateList(dateArray.reverse());
      setHistoricWorld(jsonHistoricWorld);
      setLoading(false);
    };
    fetchData();
  }, []);
  const handleSearch = (searchText) => {
    let reg = new RegExp(searchText, "i");
    let countryListNew = data.filter((c) => c.country.match(reg));
    setCountryList(countryListNew);
  };
  const handleHistoricSearch = (searchText) => {
    let reg = new RegExp(searchText, "i");
    let newHistoric = historicList.filter((c) => c.country.match(reg));
    setHistoricData(newHistoric);
  };
  const handleSort = (sortStatus) => {
    let countryListNew;
    if (sortStatus == "countryName") {
      countryListNew = data.sort((a, b) => (a.country > b.country ? 1 : -1));
    } else if (sortStatus == "newCases") {
      countryListNew = data.sort((a, b) => b.todayCases - a.todayCases);
    } else if (sortStatus == "total") {
      countryListNew = data.sort((a, b) => b.cases - a.cases);
    } else if (sortStatus == "active") {
      countryListNew = data.sort((a, b) => b.active - a.active);
    } else if (sortStatus == "recovered") {
      countryListNew = data.sort((a, b) => b.recovered - a.recovered);
    } else if (sortStatus == "deaths") {
      countryListNew = data.sort((a, b) => b.deaths - a.deaths);
    } else if (sortStatus == "tests") {
      countryListNew = data.sort((a, b) => b.tests - a.tests);
    }
    console.log(countryListNew);
    setCountryList([...countryListNew]);
    setSortValue(sortStatus);
  };
  const handleCountry = (countryName) => {
    setCountryName(countryName);
    data.map((item) => {
      if (item.country == countryName) {
        setOneCountryData(item);
      }
    });
  };
  console.log(countryName);
  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Main
                  countryList={countryList}
                  worldData={worldData}
                  getSearch={handleSearch}
                  sortStatus={handleSort}
                  sortValue={sortValue}
                  getCountryName={handleCountry}
                  {...props}
                />
              )}
            />
            <Route
              path="/Corona_Statistics"
              exact
              render={(props) => (
                <Main
                  countryList={countryList}
                  worldData={worldData}
                  getSearch={handleSearch}
                  sortStatus={handleSort}
                  sortValue={sortValue}
                  getCountryName={handleCountry}
                  {...props}
                />
              )}
            />
            <Route
              path="/historic"
              exact
              render={(props) => (
                <Historic
                  historicData={historicData}
                  historicWorld={historicWorld}
                  dateList={dateList}
                  getSearch={handleHistoricSearch}
                  getCountryName={handleCountry}
                  {...props}
                />
              )}
            />
            <Route
              path={`/${countryName}`}
              exact
              render={(props) => (
                <Country oneCountryData={oneCountryData} {...props} />
              )}
            />
          </Switch>
        </Router>
      )}
    </>
  );
};

export default App;
