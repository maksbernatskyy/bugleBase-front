import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "../components/Card";

export default function Games() {
  const [games, setGames] = useState([]);

  function fetchGames() {
    axios
      .get("http://localhost:8080/api/games")
      .then((res) => setGames(res.data))
      .catch((err) => console.error(err));
  }

  useEffect(fetchGames, []);

  return (
    <>
      <div className="grid">
        {games.map((game) => (
          <Link to={`/games/${game.id}`} key={game.id}>
            <Card game={game} />
          </Link>
        ))}
      </div>
    </>
  );
}
