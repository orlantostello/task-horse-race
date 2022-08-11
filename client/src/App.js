import { useState, useEffect } from "react";
import "./App.css";
import ListOfHorsePositions from "./components/ListOfHorsePositions/ListOfHorsePositions";
import Container from "./components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { raceData } from "./redux/horsesSlice";

import socket from "./socket";
import AlertWiner from "./components/AlertWiner/AlertWiner";

function App() {
  const [refreschBtn, setRefreshBtn] = useState(false);

  const dispatch = useDispatch();
  const datahorse = useSelector((state) => state.horses.horses);

  function getRaceData(response) {
    const res = Array.isArray(response) ? response : [response];

    dispatch(raceData(res));
  }

  function startRace() {
    socket.emit("start");
    socket.on("ticker", getRaceData);
  }

  useEffect(() => {
    socket.emit("start");
    socket.on("ticker", getRaceData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    datahorse.every(({ distance }) => distance >= 1000)
      ? setRefreshBtn(true)
      : setRefreshBtn(false);
  }, [datahorse]);

  return (
    <Container>
      <div className="App">
        <div className="block">
          <div className="btnContainer">
            {refreschBtn && (
              <button className="btn" type="button" onClick={startRace}>
                Start
              </button>
            )}
          </div>

          <AlertWiner />
        </div>

        <ListOfHorsePositions />
      </div>
    </Container>
  );
}

export default App;
