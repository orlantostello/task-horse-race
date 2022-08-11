import React from "react";
import PositionHorse from "../PositionHorse/PositionHorse";
import s from "./ListOfHorsePositions.module.css";
import { useSelector } from "react-redux";

const ListOfHorsePositions = () => {
  const datahorse = useSelector((state) => state.horses.horses);
  return (
    <div className={s.container}>
      <ul className={s.block}>
        {datahorse.map(({ name, distance }) => (
          <li key={name}>
            <PositionHorse name={name} distance={distance} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfHorsePositions;
