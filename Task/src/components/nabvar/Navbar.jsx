import React, { useState } from "react";
import "./navbar.scss";
import AddTaskModal from "../modal/AddTaskModal";
const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  const closeModal = () =>{
    setIsClicked(false)
  }

  return (
    <div className="navbar">
      <button className="addTask" onClick={handleClick}>Add task</button>
     {isClicked && <AddTaskModal closeModal={closeModal} />  }
    </div>
  );
};

export default Navbar;
