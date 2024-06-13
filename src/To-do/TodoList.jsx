import React from 'react';
import TodoItem from './TodoItem';

function TodoAdd({ handleNewTodo }) {
  const [description, setDescription] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (description.trim().length > 0) {
      handleNewTodo({
        id: new Date().getTime(),
        description,
        done: false
      });
      setDescription("");
    }
  };

  return (
      <form onSubmit={(e) => {
      e.preventDefault();
      const description = e.target.elements.description.value;
      handleNewTodo({ id: Date.now(), description, done: false });
      e.target.elements.description.value = '';
    }}>
      <input
        type="text"
        className='input-add'
        name='description'
        placeholder='¿Qué hay que hacer?'
      />
      <button className='btn-add' type='submit'>AGREGAR</button>
    </form>
  );
}


const TodoList = ({ todos, handleUpdateTodo, handleDeleteTodo, handleCompleteTodo, handleNewTodo }) => {
  return (
    <>
    
      <div className='add-todo'>
        <h3>Agregar tarea</h3>
        <TodoAdd handleNewTodo={handleNewTodo} />
        <ul>
          {todos.map(todo => (
            <TodoItem 
              key={todo.id}
              todo={todo}
              handleCompleteTodo={handleCompleteTodo}
              handleDeleteTodo={handleDeleteTodo}
              handleUpdateTodo={handleUpdateTodo}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
