import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function DetailGame() {
  const [game, setGame] = useState({});
  const { id } = useParams();

  function fetchGame() {
    axios
      .get(`http://localhost:8080/api/games/${id}`)
      .then((res) => setGame(res.data))
      .catch((err) => console.error(err));
  }

  useEffect(fetchGame, []);

  return (
    <>
      <div className="container">
        <Link to="/games" className="btn-back">
          Torna al catalogo
        </Link>

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
    </>
  );
}
