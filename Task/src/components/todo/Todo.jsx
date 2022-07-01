import React from "react";
import "./todo.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import useFetch from "./../../hooks/useFetch";
import Board from "../boards/Board";
const Todo = () => {
  const { data } = useFetch("http://localhost:4500/api/todo");
  return (
    <div className="todo">
      <div className="status">
        <h3>To Do</h3>
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

export default Todo;
