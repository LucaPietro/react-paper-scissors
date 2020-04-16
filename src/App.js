import React, { useState, useCallback } from 'react';

import { Button, Container, GameWindow, Header, GameScreen, GameOutput, PlayerMoveOutput, AiMoveOutput, ResultOutput } from './styles';
import { GiRock, GiPaper, GiScissors } from 'react-icons/gi';

const moveDict = {
  0: ['Rock', <GiRock size={70} />],
  1: ['Paper', <GiPaper size={70} />],
  2: ['Scissors', <GiScissors size={70} />],
}

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [aiMove, setAiMove] = useState(0);
  const [playerMove, setPlayerMove] = useState(0);
  const [result, setResult] = useState('');


  const handleMoveCallback = useCallback((playerChoice) => {

    setPlayerMove(playerChoice);

    const randomChoice = Math.floor(Math.random() * 3);
    setAiMove(randomChoice);

    let moveComparison = '';

    if (playerChoice === randomChoice) {
      moveComparison = 'Draw';
    } else if (playerChoice === (randomChoice + 1) || playerChoice === (randomChoice - 2)) {
      moveComparison = 'Win'
    } else {
      moveComparison = 'Lost'
    }

    setResult(moveComparison);
    setGameStarted(true);
  }, [playerMove, aiMove, result, gameStarted])

  return (
    <div>
      <Container>
        <GameWindow>
          <Header>
            React, Paper, Scissors
          </Header>
          <hr color={`#FFFFAA`} />
          <GameScreen>
            {!gameStarted && <span>Clique em um dos botões abaixo para iniciar o jogo.</span>}
            {gameStarted &&
              <GameOutput>
                <PlayerMoveOutput>
                  <span>{moveDict[playerMove][1]}</span>
                  <br />
                  <span>Your Move: {moveDict[playerMove][0]}</span>
                </PlayerMoveOutput>
                <AiMoveOutput>
                  <span>{moveDict[aiMove][1]}</span>
                  <br />
                  <span>AI Move: {moveDict[aiMove][0]}</span>
                </AiMoveOutput>
                <ResultOutput>
                  <span>Result: {result}</span>
                </ResultOutput>
              </GameOutput>
            }
          </GameScreen>
          <br />
          <Button onClick={() => handleMoveCallback(0)}>Rock</Button>
          <Button onClick={() => handleMoveCallback(1)}>Paper</Button>
          <Button onClick={() => handleMoveCallback(2)}>Scissors</Button>
        </GameWindow>
      </Container>
    </div >
  );
}


export default App;
