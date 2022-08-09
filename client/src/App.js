import { useState } from "react";
import "./App.css";
import ListOfHorsePositions from "./components/ListOfHorsePositions/ListOfHorsePositions";
// import PositionHorse from "./components/PositionHorse/PositionHorse";
import socket from "./socket";

function App() {
  const [datahorse, setDatahorse] = useState([]);

  function getRaceData(response) {
    const res = Array.isArray(response) ? response : [response];
    const data = res.map((item) => JSON.stringify(item)).join("\n");
    console.log(data);
    setDatahorse(data);
  }

  function startRace() {
    socket.emit("start");

    socket.on("ticker", getRaceData);
  }

  function endRace() {
    socket.removeAllListeners();
    setDatahorse([]);
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <button type="button" onClick={startRace}>
        start
      </button>
      <button type="button" onClick={endRace}>
        end
      </button>
      <ListOfHorsePositions datahorse={datahorse} />
      {/* <PositionHorse /> */}
    </div>
  );
}

export default App;
