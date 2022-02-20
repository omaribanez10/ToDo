import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState();
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const onChange = (event) =>{
    setNewTodoValue(event.target.value);
  }
  const onCancel = () => {
      setOpenModal(false);
  };

  const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Agrega una nueva tarea</label>
      <textarea 
      value={newTodoValue}
      onChange={onChange}
      placeholder="Escriba una tarea a realizar" />

      <div className="todoForm-buttonContainer">
        <button className="todoForm-button todoForm-button-cancel" type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button className="todoForm-button todoForm-button-add" type="submit">
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
