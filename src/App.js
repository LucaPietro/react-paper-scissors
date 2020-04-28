import React, { useState, useCallback } from 'react';

import './styles.css'
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
  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(3);

  // const handleGameOver = () => {
  //   setScore(0);
  //   setHealth(3);
  //   setGameStarted(false);
  //   return alert(`Score: ${score}`)
  // }

  const handleMoveCallback = useCallback((playerChoice) => {

    setPlayerMove(playerChoice);

    const randomChoice = Math.floor(Math.random() * 3);
    setAiMove(randomChoice);

    let moveComparison = '';
    let scoreGained = 0;
    let healthLost = 0;

    if (playerChoice === randomChoice) {
      moveComparison = 'Draw';

    } else if (playerChoice === (randomChoice + 1) || playerChoice === (randomChoice - 2)) {
      moveComparison = 'Win'
      scoreGained = 100

    } else {
      moveComparison = 'Lost'
      healthLost = 1

      if (health === 1) {
        setScore(0);
        setHealth(3);
        setGameStarted(false);
        return alert(`Score: ${score}`)
      }
    }

    setResult(moveComparison);
    setScore(score + scoreGained);
    setHealth(health - healthLost);
    setGameStarted(true);
  }, [playerMove, aiMove, result, gameStarted, score, health])

  return (
    <div>
      <Container>
        <GameWindow>
          <Header>
            React, Paper, Scissors
          </Header>
          <hr color={`#FFFFAA`} />
          <GameScreen>
            {!gameStarted && <span>Click one of the buttons below to start the game.</span>}
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
                  <span>Enemy Move: {moveDict[aiMove][0]}</span>
                </AiMoveOutput>
                <ResultOutput>
                  <span>Result: {result}</span>
                  <span>Score: {score}</span>
                  <span>Health: {health}</span>
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
