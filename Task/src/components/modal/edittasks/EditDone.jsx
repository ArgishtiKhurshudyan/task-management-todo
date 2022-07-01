import React, { useRef } from "react";
import axios from "axios";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import "./style.scss";

const EditTask = ({ data, setOpenModal }) => {
  const title = useRef();
  const description = useRef();
  const priority = useRef();

  const handleUpdateClick = async (id) => {
    const todo = {
      title: title.current.value,
      description: description.current.value,
      priority: priority.current.value,
    };
    try {
      await axios.put(`http://localhost:4500/api/done/${id}`, todo);
    } catch (error) {
      throw error;
    }
    setOpenModal(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="editTask">
      <div className="items">
        <input type="text" ref={title} placeholder="edit title" />
        <input type="text" ref={description} placeholder="edit description" />
        <input type="text" ref={priority} placeholder="edit priority" />

        <button onClick={() => handleUpdateClick(data._id)}>
          <CheckIcon />
        </button>
        <button onClick={handleCloseModal}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default EditTask;
