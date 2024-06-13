import React, { useState, useEffect } from 'react';
import NavBar from './nav/NavBar';
import { Container, Typography } from '@mui/material';
import './App.css';
import TodoList from './To-do/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
//CARGAR TAREAS DESDE API
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);
//CONTADOR DE TAREA
  const todosCount = todos.length;
  const pendingTodosCount = todos.filter(todo => !todo.completed).length;
//MANIPULO TAREAS
  const handleNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleCompleteTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleUpdateTodo = (updatedTodo) => {
    setTodos(
      todos.map(todo =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      )
    );
  };

  return (
    <>
      <Container style={{ padding: '5px', backgroundColor: '#f5f5f5' }}>
        <Typography variant="body1" component="div" gutterBottom style={{ color: '#333' }}>
          N° Tareas: {todosCount}
        </Typography>
        <Typography variant="body1" component="div" gutterBottom style={{ color: '#333' }}>
          Pendientes: {pendingTodosCount}
        </Typography>
      </Container>
      <div className='App'>
        <NavBar />
        <TodoList
          todos={todos}
          handleCompleteTodo={handleCompleteTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleUpdateTodo={handleUpdateTodo}
          handleNewTodo={handleNewTodo}
        />
      </div>
    </>
  );
};

export default App;
