export default function Card({ game }) {
  return (
    <>
      <div className="card">
        <div className="card-top">
          <img src={game.url} alt='' />
        </div>
        <div className="card-bottom">
          <h3 className="card-title">{game.name}</h3>
          <p className="card-studio">{game.studio.name}</p>
        </div>
        <div className="card-footer">
          <span className="card-price">{game.price} €</span>
        </div>
      </div>
    </>
  );
}
