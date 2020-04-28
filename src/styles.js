import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font: 400 18px Roboto, sans-serif;
  /*background: #FF69B4;*/
  background: linear-gradient(45deg, rgba(102,255,255,1) 0%, rgba(255,102,255,1) 100%);
`

export const GameWindow = styled.div`
  text-align: center;
  width: 60%;
  height: 70vh;
  border-radius: 10px;
  background: rgba(255,255,255,1);
`
export const GameScreen = styled.div`
  margin: 20px auto auto auto;
  display: flex;
  width: 80%;
  height: 40vh;
  border: 1px solid rgba(0,0,0,0.5);
  border-radius: 10px;
  color: rgba(0,0,0,0.5);

  span {
    margin: auto;
  };
`

export const GameOutput = styled.div`
  width: 100%;
  display: grid;
  place-content: stretch;
  place-items: center;
  grid-template-columns: 50% 50%;
  grid-template-rows: 70% 30%;
  grid-template-areas: 
    "player-move ai-move"
    "result result";

  span {
    animation: flash 0.5s;

    @keyframes flash {
      from {opacity: 0;}
      to {opacity: 1;}
    }
  }
`

export const PlayerMoveOutput = styled.div`
  grid-area: player-move;
`
export const AiMoveOutput = styled.div`
  grid-area: ai-move;
`
export const ResultOutput = styled.div`
  grid-area: result;
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 30px;
  margin-bottom: 20px;
`

export const Header = styled.h1`
  font-size: 40px;
  text-align: center;
  margin: 10px;
  color: rgba(255,102,255,0.7);
`

export const Button = styled.a`
  display: inline-block;
  border-radius: 10px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  text-align: center;
  width: 7rem;
  border: 3px solid rgba(255,255,255,1);
  background: linear-gradient(45deg, rgba(102,255,255,0.7) 0%, rgba(255,102,255,0.7) 100%);
  color: white;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    border: 3px solid rgba(0,0,0,0.5);
  };
`