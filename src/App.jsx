import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import GameOver from "./components/GameOver"
import {WINNING_COMBINATIONS} from './WINNING_COMBINATION'

const PLAYERS={
  X:'Player 1',
  O:'player 2'
}

const INITIAL_GAME_BOARD=[
    [null, null, null],
    [null, null, null],
    [null, null, null]
]



function deriveActivePlayer(gameTurn){
  let currentPlayer ='X'

      if(gameTurn.length > 0 && gameTurn[0].player ==='X'){
        currentPlayer='O'
      }
      return currentPlayer
}


function deriveGameBoard(gameTurn){
   let gameBoard= [...INITIAL_GAME_BOARD.map(innerArray => [...innerArray])]

    for(const turn of gameTurn){
        const { square, player}= turn
        const { row, col}= square
        
        gameBoard[row][col]= player 
    }
    return gameBoard
}

function deriveWinner(gameBoard, players){
  let winner
    
    for(const combination of WINNING_COMBINATIONS){
      const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
      const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
      const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

      if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){

        winner= players[firstSquareSymbol]

      }
    }
    return winner
}


function App() {

  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurn, setGameTurn]= useState([])


  const activePlayer= deriveActivePlayer(gameTurn)
  const gameBoard= deriveGameBoard(gameTurn)
  const winner = deriveWinner(gameBoard, players)
  const hasDraw = gameTurn.length === 9 && !winner


  function handleSelectSquare(rowIndex, colIndex){
 // setActiveplayer((curActivePlayer)=> curActivePlayer === 'X'?'O':'X')

    setGameTurn((preTrun) => {
      const currentPlayer= deriveActivePlayer(preTrun)

      const updatedTurn=[
        { square:{row: rowIndex, col: colIndex}, player:currentPlayer},
        ...preTrun,
      ]

      return updatedTurn
    })
  }

  function handleOnRematch(){
    setGameTurn([])
  }

  function handleChangeName(symbol, newName){
    setPlayers(prevPlayers => {
      return{
        ...prevPlayers,
        [symbol]: newName
      }
    }
    )
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol='X' isActive={activePlayer==='X'} onChangeName={handleChangeName}/>
          <Player initialName={PLAYERS.O} symbol='O' isActive={activePlayer==='O'} onChangeName={handleChangeName}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleOnRematch}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
        
      </div>

      <Log turns={gameTurn}/>
    </main>
  )
}

export default App
