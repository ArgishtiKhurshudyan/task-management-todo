import React from "react";
import "./addtaskmodal.scss";
import axios from "axios";
import { useRef } from "react";

const AddTaskModal = ({ closeModal }) => {
  const title = useRef();
  const description = useRef();
  const priority = useRef();

  const handleClick = async () => {
    const todo = {
      title: title.current.value,
      description: description.current.value,
      priority: priority.current.value,
    };

    try {
      await axios.post("http://localhost:4500/api/todo", todo);
    } catch (error) {
      throw error;
    }
    closeModal(false);
  };

  return (
    <div className="addTaskModal">
      <button className="closeModal" onClick={closeModal}>
        X
      </button>

      <div className="modalItems">
        <div className="inp">
          <input type="text" ref={title} placeholder="title" />
        </div>
        <div className="inp">
          <input type="text" ref={description} placeholder="description" />
        </div>
        <div className="inp">
          <input type="text" ref={priority} placeholder="priority" />
        </div>

        <button className="addBtn" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTaskModal;
