import React, { useState } from "react";
import "./doing.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDrop } from "react-dnd";
import useFetch from "./../../hooks/useFetch";
import Board from "../boards/BoardDoing";
import axios from "axios";

const Doing = () => {
  const { data } = useFetch("http://localhost:4500/api/doing");
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: (item) => addDivToBoard(item.id, item.data),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addDivToBoard = async (id, data) => {
    try {
      const res = await axios.post("http://localhost:4500/api/doing", data);
      setBoard(res.data);
      await axios.delete(`http://localhost:4500/api/todo/${id}`)
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="doing" ref={drop}>
      <div className="status">
        <h3>Doing</h3>
        <span>
          <MoreHorizIcon />
        </span>
      </div>
      {data.map((data) => (
        <Board
          key={data._id}
          data={data}
          title={data.title}
          desc={data.description}
          priority={data.priority}
        />
      ))}
    </div>
  );
};

export default Doing;
