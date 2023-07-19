import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import useCreateDate from "../components/useCreateDate";

const EditNote = ({ notes, setNotes }) => {
  //useparams to fetch unique ids of each individual note.
  const { id } = useParams();

  //check if the id of the current note object is equal to the id that's coming from the param(url).
  const note = notes.find((item) => item.id == id);
  //then,
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  //the date hook i created.
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    if (title && description) {
      //spreaad the object itthe old note passed as prop, and get the title, write up et date.
      //console.log(notes)
      const newNote = { ...note, title, description, date };


      //now, map through.
      const newNotes = notes.map((item) => {
        //if the item is same with unique id from url, then it will be the new note.
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });
      //to update note.
      setNotes(newNotes);
    }
    navigate("/");
  };

  const handleDelete = (e) => {
    if (window.confirm("Sure you want to delete??")) {
      //filter notes passed prop. ensure note with current id isn't included.
      const newNote = notes.filter((item) => item.id != id);

      //update note e=with the passed state updating function sn to the new note array we have.
      setNotes(newNote);
      navigate("/");
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleForm}>
          Save
        </button>
        <button className="btn lg danger" onClick={handleDelete}>
          <RiDeleteBin6Line />{" "}
        </button>
      </header>
      <form className="create-note__form" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="title..."
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="30"
          placeholder="write everthing here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
