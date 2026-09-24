import { useState, useEffect } from 'react'
import { Card } from './components/Card'
import { Header } from './components/Header'
import './App.css'
import styles from './styles/App.module.css'
import lebronImg from "./assets/lebron.png"
import curryImg from "./assets/curry.png"
import giannisImg from "./assets/giannis.png"
import jokicImg from "./assets/jokic.png"
import lukaImg from "./assets/luka.png"
import tatumImg from "./assets/tatum.png"

const jogadoresIniciais = [
  { id: 1, nome: "LeBron James", foto: lebronImg },
  { id: 2, nome: "Stephen Curry", foto: curryImg },
  { id: 3, nome: "Giannis Antetokounmpo", foto: giannisImg },
  { id: 4, nome: "Luka Dončić", foto: lukaImg },
  { id: 5, nome: "Nikola Jokić", foto: jokicImg },
  { id: 6, nome: "Jayson Tatum", foto: tatumImg }
]

function App() {
  const [listaJogadores, setListaJogadores] = useState([])

  useEffect(() => {
    setListaJogadores(jogadoresIniciais)
  }, [])

  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.gridJogadores}>
        {listaJogadores.map((jogador) => (
          <Card key={jogador.id} jogador={jogador} />
        ))}
      </main>
    </div>
  )
}

export default App
