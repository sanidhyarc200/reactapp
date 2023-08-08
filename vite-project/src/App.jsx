// src/App.js
import React, { useState } from 'react';
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';
import './App.css';

const App = () => {
  const [elements, setElements] = useState([]);

  // Handler for node (box) drag stop event
  const onNodeDragStop = (event, node) => {
    const updatedNode = {
      ...node,
      position: { x: node.position.x + event.movementX, y: node.position.y + event.movementY },
    };
    setElements((prevElements) =>
      prevElements.map((el) => (el.id === node.id ? updatedNode : el))
    );
  };

  // Add a new box (node) to the canvas
  const addBox = () => {
    const newBox = {
      id: Date.now().toString(),
      type: 'default',
      position: { x: 0, y: 0 },
      data: { label: `Box ${elements.length + 1}` },
    };
    setElements((prevElements) => [...prevElements, newBox]);
  };

  return (
    <div className="App">
      <h1>Draggable Boxes</h1>
      <ReactFlowProvider>
        <div className="canvas">
          <ReactFlow
            elements={elements}
            onNodeDragStop={onNodeDragStop}
            style={{ width: '100%', height: '400px' }}
          />
        </div>
      </ReactFlowProvider>
      <button onClick={addBox}>Add Box</button>
    </div>
  );
};

export default App;
