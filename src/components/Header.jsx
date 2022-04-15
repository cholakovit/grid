import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="header">
        <Link to={`/`} className='logo'>VSG Crypto</Link>
        <Link to={`/`}>Home</Link>
        <Link to={`/cryptos`}>Cryptos</Link>
        <Link to="/watchlist">Watchlist</Link>
    </div>
  )
}