import React, { useState, useCallback } from 'react';

import { Button, Container, GameWindow, Header, GameScreen, GameOutput, PlayerMoveOutput, AiMoveOutput, ResultOutput } from './styles';
import { GiRock, GiPaper, GiScissors } from 'react-icons/gi';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [result, setResult] = useState('');
  const [playerMove, setPlayerMove] = useState(0);
  const [aiMove, setAiMove] = useState(0);

  const moveDict = {
    0: ['Rock', <GiRock size={70} />],
    1: ['Paper', <GiPaper size={70} />],
    2: ['Scissors', <GiScissors size={70} />],
  };

  const handleMoveCallback = useCallback(async (playerMove) => {
    await setAiMove(Math.floor(Math.random() * 3));
    setGameStarted(true);
    setPlayerMove(playerMove);
    console.log(playerMove, aiMove)

    if (playerMove === aiMove) {
      console.log(result)
      return setResult('Draw')
      console.log(result)
    }

    else if (playerMove === (aiMove + 1) || playerMove === (aiMove - 2)) {
      console.log(result)
      return setResult('Win')
      console.log(result)
    }

    else {
      console.log(result)
      return setResult('Lost')
      console.log(result)
    }
  }, [gameStarted, result, playerMove, aiMove])
  console.log(result)

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
            {
              gameStarted &&
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
        <div>Icons made by <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </Container>
    </div >
  );
}

export default App;
