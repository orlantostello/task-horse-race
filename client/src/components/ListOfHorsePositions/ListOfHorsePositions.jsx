import React from "react";
import PositionHorse from "../PositionHorse/PositionHorse";
import s from "./ListOfHorsePositions.module.css";

const ListOfHorsePositions = ({ datahorse }) => {
  return (
    <div className={s.container}>
      <div className={s.block}>
        {/* {datahorse.map(({ name, distance }) => (
        <PositionHorse />
      ))} */}
        <PositionHorse />
      </div>
    </div>
  );
};

export default ListOfHorsePositions;
