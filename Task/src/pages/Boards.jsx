import React from "react";
import "./boards.scss";
import Doing from "../components/doing/Doing";
import Todo from "../components/todo/Todo";
import Done from "./../components/done/Done";
import Navbar from './../components/nabvar/Navbar';

const Boards = () => {
  return (
    <>  <Navbar/>
    <div className="boards">
      <Todo className="board" />
      <Doing className="board" />
      <Done className="board" />
    </div>
    
    </>
  );
};

export default Boards;
