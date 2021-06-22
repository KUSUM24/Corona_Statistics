import React from "react";
import { Header } from "./Historic/Header";
import { HistoricTable } from "./Historic/HistoricTable";

export const Historic = ({ historicData, historicWorld, getSearch }) => {
  return (
    <>
      <Header getSearch={getSearch} />
      <HistoricTable
        historicData={historicData}
        historicWorld={historicWorld}
      />
    </>
  );
};
