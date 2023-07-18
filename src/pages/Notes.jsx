import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
//import dummyNotes from '../dummy_notes'
import { Link, useParams } from "react-router-dom";
import NoteItem from "../components/NoteItem";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";

//accepting and destructuring the note props from App.js here.
//.map is not a function again. back to debug.
const Notes = ({ notes }) => {
  //track whether the search input is displayed or not.
  const [displaySearch, setDisplaySearch] = useState(false);
  const [text, setText] = useState("");
  //to filter notes. initially,the note from app.js, (from local storage).
  //to store the filtered notes based on the search keyword.
  const [filteredNote, setFilteredNote] = useState(notes);

  //const note = { id: uuid() };

  //useparams

  //when you search, it filters the notes array based on the search keyword,
  //...and the setFilteredNote function updates the "filteredNote" state accordingly.
  console.log({notes})
  const handleSearch = () => {
    setFilteredNote(
      notes.filter((noote) => {
        if (noote.title.toLowerCase().match(text.toLowerCase())) {
          return noote;
        }
      })
    );
  };

  useEffect((handleSearch) => {}, [text]);

  return (
    <section>
      <header className="notes__header">
        {!displaySearch && <h2>Notes</h2>}
        {displaySearch && (
          <input
            type="text"
            autoFocus
            placeholder="Keyword..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
          />
        )}
        <button
          className="btn"
          onClick={() => setDisplaySearch(!displaySearch)}
        >
          {displaySearch ? <MdClose /> : <CiSearch />}
        </button>
      </header>
      <div className="notes__container">
        {filteredNote.length === 0 && (
          <p className="empty__notes">None found.</p>
        )}

        {
          //note prop at the end.
          filteredNote.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))
        }
      </div>
      <Link to={"/create"} className="btn add__btn">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
