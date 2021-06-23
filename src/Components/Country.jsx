import React from "react";
import { Header } from "./Country/Header";
import { CountryCard } from "./Country/CountryCard";

export const Country = ({ oneCountryData }) => {
  console.log(oneCountryData);
  return (
    <>
      {oneCountryData.active && (
        <div>
          <Header />
          <CountryCard oneCountryData={oneCountryData} />
        </div>
      )}
    </>
  );
};
