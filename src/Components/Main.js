import React from "react";
import { Header } from "./Main/Header";
import { MainTable } from "./Main/MainTable";

export const Main = ({ countryList, worldData, getSearch }) => {
  return (
    <div>
      <Header getSearch={getSearch} />
      <MainTable countryList={countryList} worldData={worldData} />
    </div>
  );
};
