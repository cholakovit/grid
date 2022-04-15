import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Cryptos from './pages/Cryptos'
import Watchlist from './pages/Watchlist'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/cryptos' exact element={<Cryptos />} />
        <Route path='/watchlist' exact element={<Watchlist />} />
      </Routes>
    </>
  )
}

export default App
