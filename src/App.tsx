import { useState } from 'react';
import { AddBar } from './components/AddBar';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { TodosArea } from './components/TodosArea';
import {v4 as uuidv4} from "uuid";

interface Todo{
  id: string;
  content: string;
  complete: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAddTodo(content: string){
    const id = uuidv4();
    setTodos([...todos, {id ,content, complete: false}]);
  }

  function handleDeleteTodo(id: string){
    const todosWithoutDeletedOne = todos.filter(todo => {
      return todo.id !== id;
    });

    setTodos(todosWithoutDeletedOne);
  }

  function handleCheckTodo(id: string){
    const changedTodos = todos.map(todo => {
      
      return todo.id === id 
      ? {...todo, complete: todo.complete ? false : true}
      : todo;
    });

    setTodos(changedTodos);
  }


  return (
    <div>
      <Header />
      
      <div className={styles.container}>
        <AddBar onAddTodo={handleAddTodo} />
        <TodosArea 
            onDeleteTodo={handleDeleteTodo}
            onCheckTodo={handleCheckTodo}
            todos={todos}
        />
      </div>
    </div>
  )
}

export default App;
