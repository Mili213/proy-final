import React from 'react';

function TodoUpdate({ todo, handleUpdateTodo }) {
  const [description, setDescription] = React.useState(todo.description);

  const onSubmit = (event) => {
    event.preventDefault();
    handleUpdateTodo(todo.id, description);
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', alignItems: 'center' }}>
      <input 
        type="text" 
        className='input-update'
        name='description' 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='¿Que hay que hacer?'
        style={{ marginRight: '10px' }}

      />
      <button className='btn-update' type='submit'>Actualizar</button>
    </form>
  );
}

const TodoItem = ({ todo, handleUpdateTodo, handleDeleteTodo, handleCompleteTodo }) => {
  return (
    <li>
      <span onClick={() => handleCompleteTodo(todo.id)}>
        <label htmlFor="" className='container-done'>{todo.completed ? "✔️" : "❌"}</label>
      </span>
      <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
      <button className="btn-delete" onClick={() => handleDeleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
