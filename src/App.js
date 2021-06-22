import React, { useState, useEffect } from "react";
import { Loader } from "./Common/Loader";
import { Main } from "./Components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Historic } from "./Components/Historic";

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [countryList, setCountryList] = useState([]);
  const [data, setData] = useState([]);
  const [worldData, setWorldData] = useState({});
  const [historicData, setHistoricData] = useState({});
  const [historicWorld, setHistoricWorld] = useState({});

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      let res = await fetch("https://corona.lmao.ninja/v2/countries", {
        method: "GET",
      });
      let json = await res.json();
      setCountryList(json);
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
      console.log(jsonHistoric);
      let resHistoricWorld = await fetch(
        "https://corona.lmao.ninja/v2/historical/all",
        {
          method: "GET",
        }
      );
      let jsonHistoricWorld = await resHistoricWorld.json();
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
              path="/historic"
              render={(props) => (
                <Historic
                  historicData={historicData}
                  historicWorld={historicWorld}
                  getSearch={handleSearch}
                  {...props}
                />
              )}
            />
            <Route
              path="/"
              render={(props) => (
                <Main
                  countryList={countryList}
                  worldData={worldData}
                  getSearch={handleSearch}
                  {...props}
                />
              )}
            />
          </Switch>
        </Router>
      )}
    </>
  );
};

export default App;
