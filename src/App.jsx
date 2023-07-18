import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import { useState } from "react";
//import dummyNotes from './dummy_notes'
import { useEffect } from "react";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  //note equal to note state -line 23
  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route path="/create" element={<CreateNote setNotes={setNotes} />} />
          <Route
            path="/edit/:id"
            element={<EditNote notes={notes} setNotes={setNotes} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
