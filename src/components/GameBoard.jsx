import Player from "./Player"


export default function GameBoard({onSelectSquare, board}){

    

    // const [gameBoard, setGameBoard]= useState(initialGameBoard)

    // function handleSelectSquare (rowIndex, colIndex){
    //     setGameBoard((pervGameBoard) => {
    //         const undatedBoard=[...pervGameBoard.map(innerArray =>[...innerArray])]

    //         undatedBoard[rowIndex][colIndex]= activePlayerSymbol
            
    //         return undatedBoard
    //     })

    //     onSelectSquare()
    // }


    return(
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                      {row.map((PlayerSymbol, colIndex)=> (
                            <li key={colIndex}>
                                <button onClick={()=> onSelectSquare(rowIndex, colIndex)} disabled={PlayerSymbol !== null}>
                                    {PlayerSymbol}
                                </button>
                            </li>
                      ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}