import React from "react";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import { GiFinishLine } from "react-icons/gi";
import { FaHorse } from "react-icons/fa";

import s from "./PositionHorse.module.css";

const PositionHorse = () => {
  const progres = "0%";
  return (
    <div className={s.block}>
      <p className={s.name}>Horse</p>
      <div className={s.road}>
        <FlagOutlinedIcon />
        <div className={s.distance}>
          <FaHorse
            className={s.horse}
            style={{ left: `${progres > 0 ? progres : "-2px"}` }}
          />
          <div
            className={s.progres}
            style={{ left: `${progres > 0 ? progres : "-2px"}` }}
          >
            1000
          </div>
        </div>
        <GiFinishLine className={s.finish} />
      </div>
    </div>
  );
};

export default PositionHorse;
