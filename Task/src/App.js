import "./App.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from 'react-dnd-touch-backend'
import { DndProvider } from "react-dnd";
import Boards from "./pages/Boards";

function App() {
  return (
    <DndProvider backend={HTML5Backend} >
      <div className="App">
        <Boards />
      </div>
    </DndProvider>
  );
}

export default App;
