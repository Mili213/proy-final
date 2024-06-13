import NavBar from './nav/NavBar';
import { Container, Typography } from '@mui/material';
import './App.css';
import TodoList from './To-do/TodoList';
import { useTodo } from './hooks/useTodo';

const App = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo
  } = useTodo();

  return (
    <>
       <Container style={{ padding: '5px', backgroundColor: '#f5f5f5' }}>
        <Typography variant="p" component="div" gutterBottom style={{ color: '#333' }}>
          N° Tareas: {todosCount}
        </Typography>
        <Typography variant="p" component="div" gutterBottom style={{ color: '#333' }}>
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
