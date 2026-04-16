import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLoader } from "../contexts/LoaderContext";

import { Miyagi } from "ldrs/react";
import "ldrs/react/Miyagi.css";

import Card from "../components/Card";

export default function Games() {
  const [games, setGames] = useState([]);
  const { isLoading, setIsLoading } = useLoader();

  function fetchGames() {
    axios
      .get("http://localhost:8080/api/games")
      .then((res) => {
        setGames(res.data);
        if (res.data.length >= 0) {
          setIsLoading(false);
        }
      })
      .catch((err) => console.error(err));
  }

  useEffect(fetchGames, []);

  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <Miyagi size="35" stroke="3.5" speed="0.9" color="white" />
        </div>
      ) : (
        <div className="grid">
          {games.map((game) => (
            <Link to={`/games/${game.id}`} key={game.id}>
              <Card game={game} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
