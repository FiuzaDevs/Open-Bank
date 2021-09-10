import React from "react";
import { FaCogs } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export default function Sidebar() {
  let history = useHistory();

  function handleExit() {
    history.push("/");
  }
  function handleClick() {
    history.push("/Configuracao");
  }

  function handleBack() {
    history.goBack();
  }

  return (
    <aside>
      <header>
        <h2>Username</h2>
        <button onClick={handleClick}>
          <img
            alt="userImg"
            src="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            width="55"
            height="66"
          />
        </button>
      </header>

      <footer>
        <button type="button" onClick={handleBack}>
          <FaCogs size={46} />
        </button>
        <button type="button" onClick={handleExit}>
          Sair
        </button>
      </footer>
    </aside>
  );
}
