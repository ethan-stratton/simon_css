import React, { useState } from 'react';

export function SimonGame({ userName }) {
  const [allowPlayer, setAllowPlayer] = useState(true);
  const [sequence, setSequence] = useState([]);
  const [playbackPos, setPlaybackPos] = useState(0);

  async function onPressed(buttonPosition) {
    if (!allowPlayer) return;
    setAllowPlayer(false);
    await processButtonPress(buttonPosition);

    if (sequence[playbackPos] === buttonPosition) {
      if (playbackPos + 1 === sequence.length) {
        increaseSequence();
        setPlaybackPos(0);
      } else {
        setPlaybackPos(playbackPos + 1);
        setAllowPlayer(true);
      }
    } else {
      handleMistake();
    }
  }

  function increaseSequence() {
    setSequence([...sequence, Math.floor(Math.random() * 4)]);
  }

  function handleMistake() {
    // Logic for mistake feedback, score save, button dance, etc.
  }

  return (
    <div className="game">
      <div className="button-container">
        <button className="button-top-left" onClick={() => onPressed(0)}></button>
        <button className="button-top-right" onClick={() => onPressed(1)}></button>
        <button className="button-bottom-left" onClick={() => onPressed(2)}></button>
        <button className="button-bottom-right" onClick={() => onPressed(3)}></button>
      </div>
      <div className="controls center">
        <div className="game-name">Simon<sup>&reg;</sup></div>
        <div className="score center">--</div>
        <button className="btn btn-primary" onClick={() => resetGame()}>Reset</button>
      </div>
    </div>
  );
}
