import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useLoader } from "../contexts/LoaderContext";

import { Miyagi } from "ldrs/react";
import "ldrs/react/Miyagi.css";

export default function DetailGame() {
  const [game, setGame] = useState({});
  const { id } = useParams();
  const { isLoading, setIsLoading } = useLoader();

  function fetchGame() {
    axios
      .get(`http://localhost:8080/api/games/${id}`)
      .then((res) => {
        setGame(res.data);
        if (res.data.length >= 0) {
          setIsLoading(false);
        }
      })
      .catch((err) => console.error(err));
  }

  useEffect(fetchGame, []);

  return (
    <>
      <div className="container">
        <Link to="/games" className="btn-back">
          Torna al catalogo
        </Link>

        {isLoading ? (
          <div className="loader-container">
            <Miyagi
              size="45"
              stroke="3.5"
              speed="0.9"
              color="var(--color-primary)"
            />
            <span className="loader-text">caricamento in corso...</span>
          </div>
        ) : (
          <div>
            <div className="detail-header">
              <div className="detail-image">
                <img src={game.url} alt="" />
              </div>

              <div className="detail-info">
                <span className="detail-studio">{game.studio?.name}</span>
                <h1 className="detail-title">{game.name}</h1>

                <div className="detail-meta">
                  <span className="meta-item">{game.releaseDate}</span>
                  <span className="meta-item">{game.studio?.headquarters}</span>
                </div>

                <div className="detail-price-section">
                  <span className="detail-price">{game.price}€</span>
                </div>
              </div>
            </div>
            <div className="detail-description">
              <h2>descrizione</h2>
              <p>{game.description}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
