import { useState } from "react";
import Form from "./components/Form/UserForm";
import Table from "./components/Table/UserTable";
import "./App.css";

function App() {
  const DUMMY_PLAYER = [
    {
      id: 1,
      username: "binar",
      email: "binar@academy.com",
      experience: "80%",
      level: "100",
    },
    {
      id: 2,
      username: "academy",
      email: "academy@binar.com",
      experience: "95%",
      level: "100",
    },
  ];

  const [playerData, setPlayerData] = useState(DUMMY_PLAYER);
  const [formData, setFormData] = useState(null);

  const addPlayer = (data) => {
    const lastPlayer = playerData[playerData.length - 1];

    const newPlayer = {
      ...data,
      id: lastPlayer.id + 1,
    };

    setPlayerData((prevState) => {
      return [...prevState, newPlayer];
    });
  };

  const getPlayerData = (data) => {
    setFormData(data);
  };

  const updatePlayer = (data) => {
    setPlayerData((prevState) => {
      const newPlayerData = prevState.filter(
        (player) => player.id !== formData.id
      );

      console.log("newPlayerData", newPlayerData);

      return [...newPlayerData, data];
    });
  };

  return (
    <div className="app">
      <Form
        form={formData}
        onAddPlayer={addPlayer}
        onUpdatePlayer={updatePlayer}
      />

      <Table players={playerData} onEditPlayer={getPlayerData} />
    </div>
  );
}

export default App;
