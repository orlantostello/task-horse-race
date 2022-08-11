import { useState, useEffect } from "react";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import { GiFinishLine } from "react-icons/gi";
import { FaHorse } from "react-icons/fa";

import s from "./PositionHorse.module.css";

const PositionHorse = ({ distance, name }) => {
  const [progres, setProgres] = useState(0);

  useEffect(() => {
    setProgres(() => (distance * 100) / 1000);
  }, [distance]);

  return (
    <div className={s.block}>
      <p className={s.name}>{name}</p>
      <div className={s.road}>
        <FlagOutlinedIcon className={s.start} />
        <div className={s.distance}>
          <FaHorse
            className={s.horse}
            style={{ left: `${progres > 0 ? `${progres}%` : "-2px"}` }}
          />
          <div
            className={s.progres}
            style={{ left: `${progres > 0 ? `${progres}%` : "-2px"}` }}
          >
            {distance}
          </div>
        </div>
        <GiFinishLine className={s.finish} />
      </div>
    </div>
  );
};

export default PositionHorse;
