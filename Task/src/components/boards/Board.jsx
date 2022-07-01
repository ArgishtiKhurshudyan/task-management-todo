import React, { useState } from "react";
import EditTask from "../modal/edittasks/EditTask";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDrag } from "react-dnd";
import axios from "axios";

const Board = ({ data, title, desc, priority }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item: { id: data._id, data: data },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [openModal, setOpenModal] = useState(false);

  const handleEdit = (id) => {
    setOpenModal(true);
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:4500/api/todo/${id}`);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div
      className="infoTask"
      ref={drag}
      style={{ border: isDragging ? "2px solid darkcyan" : "0px" }}
    >
      <h3 className="title">
        {title} <span className={`priority ${priority}`}>{priority}</span>
      </h3>

      <p className="desc">{desc}</p>
      <div className="btn">
        <button className="edtTask" onClick={handleEdit}>
          <EditIcon />
        </button>

        <button
          className="deleteTask"
          type="submit"
          onClick={() => handleDeleteClick(data._id)}
        >
          <DeleteIcon />
        </button>
      </div>

      {openModal && <EditTask data={data} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default Board;
