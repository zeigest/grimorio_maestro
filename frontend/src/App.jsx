import React, { useState } from "react";
import './App.css';
import LoginPage from "./modules/auth/LoginPage";
import PlayerHomePage from "./modules/player/PlayerHomePage";

function App() {
    const [currentUser, setCurrentUser] = useState(null);

  const mockMainCharacter = {
    charName: "Hari",
    charBasicStats: {
      race: "Lashunta",
      class: "Magus",
      level: 4,
    },
  };

  if (!currentUser){
    return (
      <LoginPage
      onLoginSuccess = {(user)=>{
        setCurrentUser(user);
      }}
      />
    );
  }

  return (<PlayerHomePage
          user={currentUser}
          mainCharacter={mockMainCharacter}/>);
}

export default App;
