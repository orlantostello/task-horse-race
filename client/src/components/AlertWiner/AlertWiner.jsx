import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pedestalArray } from "../../redux/horsesSlice";

import s from "./AlertWiner.module.css";

const AlertWiner = () => {
  const [pedestal, setPedestal] = useState([]);

  const dispatch = useDispatch();

  const datahorse = useSelector((state) => state.horses.horses);

  useEffect(() => {
    if (datahorse.every(({ distance }) => distance !== 1000)) {
      setPedestal([]);
    }
  }, [datahorse]);

  useEffect(() => {
    if (datahorse) {
      datahorse.forEach((horse) => {
        if (horse.distance === 1000) {
          if (pedestal.includes(horse.name)) {
            return;
          }
          setPedestal((prev) => [...prev, horse.name]);
        }
      });
    }
    if (
      pedestal.length === datahorse.length &&
      datahorse.every(({ distance }) => distance >= 1000)
    ) {
      dispatch(pedestalArray(pedestal));
    }
  }, [datahorse, pedestal, dispatch]);

  return (
    <div className={s.win}>
      {pedestal.length === datahorse.length &&
        datahorse.every(({ distance }) => distance >= 1000) && (
          <p className={s.winer}>{`Winer: ${pedestal[0]}`}</p>
        )}
    </div>
  );
};

export default AlertWiner;
