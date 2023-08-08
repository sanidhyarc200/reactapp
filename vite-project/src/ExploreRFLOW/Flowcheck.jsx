// components/FlowCheck.js
import React, { useState } from 'react';
import ReactFlow, { addEdge } from 'react-flow-renderer';
import AlphabetButton from './buttons';

const FlowCheck = () => {
  const [elements, setElements] = useState([]);
  const [buttons, setButtons] = useState([
    { letter: 'A', position: { x: 50, y: 50 } },
    { letter: 'B', position: { x: 150, y: 50 } },
    
  ]);

  const onDrop = (letter, position) => {
    const updatedButtons = buttons.map((button) =>
      button.letter === letter ? { ...button, position } : button
    );
    setButtons(updatedButtons);
  };

  const onRemoveButton = (letter) => {
    setButtons(buttons.filter((button) => button.letter !== letter));
    setElements(elements.filter((element) => element.id !== letter));
  };

  const onConnect = (edge) => setElements((els) => addEdge(edge, els));

  const renderButtons = () =>
    buttons.map((button) => (
      <AlphabetButton
        key={button.letter}
        letter={button.letter}
        position={button.position}
        onDrop={onDrop}
      />
    ));

  return (
    <div className="App">
      <h1>Draggable Buttons from A to Z</h1>
      <div className="canvas">
        <ReactFlow elements={elements} onConnect={onConnect}>
          {renderButtons()}
        </ReactFlow>
      </div>
    </div>
  );
};

export default FlowCheck;
