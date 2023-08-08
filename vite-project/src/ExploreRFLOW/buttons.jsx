// components/AlphabetButton.js
import React from 'react';
import Draggable from 'react-draggable';

const AlphabetButton = ({ letter, position, onDrop }) => {
  const handleDragStop = (event, data) => {
    onDrop(letter, { x: position.x + data.x, y: position.y + data.y });
  };

  return (
    <Draggable
      position={position}
      onStop={handleDragStop}
      bounds="parent"
      scale={1}
      grid={[1, 1]}
    >
      <div className="alphabet-button">
        {letter}
      </div>
    </Draggable>
  );
};

export default AlphabetButton;
