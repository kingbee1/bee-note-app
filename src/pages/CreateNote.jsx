import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
//npm i uuid. a package that creates unique id.
import { v4 as uuid } from "uuid";
import useCreateDate from "../components/useCreateDate";

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //form validation to ensure if user actually enters a title writes note.
    if (title && description) {
      //a function that creates an id for all note object created.
      //passed the title, the written note and the date inside the note object(with a unique id) created.
      const note = { id: uuid(), title, description, date };
      //add this note to the note array.
      setNotes((prevNotes) => [note, ...prevNotes]);
      //then redirect to note homepage so we can see what's new.
      navigate("/");
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleSubmit}>
          Save
        </button>
      </header>
      <form className="create-note__form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="title..."
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={description}
          rows="30"
          placeholder="write everthing here"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
