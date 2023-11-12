import React, { useState } from 'react';
import './App.css';
import InputFeild from './componets/InputFeild';
import { Todo } from './model';
import TodoList from "./componets/TodoList"


const App: React.FC = () => {
  
    const [todo, setTodo ] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const handledAdd = (e : React.FormEvent) => {
      e.preventDefault();
      
      if(todo){
          setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
         setTodo("");
    }
    };
    console.log(todos);
    //console.log(todo);

  return( 
     <div className="App">
        <span className='heading'>Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handledAdd= {handledAdd }/>
      <TodoList todos = {todos} setTodos={setTodos} />
      </div>
 );
};

export default App;
