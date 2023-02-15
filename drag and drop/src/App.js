import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

const Units = [
  {
    id: 'unit_1',
    name: 'ENG1001',
  },
  
  {
    id: 'unit_2',
    name: 'ENG1002',
  },
  {
    id: 'unit_3',
    name: 'ENG1003',
  },
  {
    id: 'unit_4',
    name: 'ENG1004',
  },
  
  {
    id: 'unit_5',
    name: 'ENG1005',
  },

  {
    id: 'unit_6',
    name: 'ENG1006',
  },

  {
    id: 'unit_7',
    name: 'ENG1007',
  },

  {
    id: 'unit_8',
    name: 'place_holder',
  },

  {
    id: 'unit_9',
    name: 'place_holder',
  },

  {
    id: 'unit_10',
    name: 'place_holder',
  },

  {
    id: 'unit_11',
    name: 'place_holder',
  },

  {
    id: 'unit_12',
    name: 'place_holder',
  },

  {
    id: 'unit_13',
    name: 'place_holder',
  },

  {
    id: 'unit_14',
    name: 'place_holder',
  },

  {
    id: 'unit_15',
    name: 'place_holder',
  },
  
  {
    id: 'unit_16',
    name: 'place_holder',
  },

  {
    id: 'unit_17',
    name: 'place_holder',
  },

  {
    id: 'unit_18',
    name: 'place_holder',
  },

  {
    id: 'unit_19',
    name: 'place_holder',
  },

  {
    id: 'unit_20',
    name: 'place_holder',
  },

  {
    id: 'unit_21',
    name: 'place_holder',
  },

  {
    id: 'unit_22',
    name: 'place_holder',
  },

  {
    id: 'unit_23',
    name: 'place_holder',
  },

  {
    id: 'unit_24',
    name: 'place_holder',
  },

]

function App() {
  const [characters, updateCharacters] = useState(Units);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Specialisation - Mechatronics Engineering</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <p>
                            { name }
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default App;
