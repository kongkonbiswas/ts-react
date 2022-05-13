import React, { useCallback, useReducer, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Lists from './components/Lists';
import { text } from 'stream/consumers';

interface Todo {
  id: number,
  text: string
}
type ActionType = {type: "ADD"; text:string} | {type: "REMOVE"; id: number}

function App() {
  function reducer(state:Todo[], action: ActionType) {
    switch(action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
          },
        ];
        case "REMOVE":
          return state.filter(({id}) => id !== action.id)  
    }
  }
  const [todos, dispatch] = useReducer(reducer, []);

  const newTodoRef = useRef<HTMLInputElement>(null)

  const onAddTodo = useCallback(() => {

  }, [])

  return (
    <div className="App">
      <Lists />
      <input type="text" ref={newTodoRef}></input>
      <button onClick={onAddTodo}>Add</button>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
}

export default App;
