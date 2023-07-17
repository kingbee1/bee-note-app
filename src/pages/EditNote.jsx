import { Link, useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useState } from 'react';


const EditNote = ({notes, sn}) => {
  //useparams to fetch unique ids of each individual note.
  const {id} = useParams();

  //check if the id of the current note object is equal to the id that's coming from the param(url).
  const note = notes.find((item) => item.id == id)
  //then,
  const [title, setTitle] = useState(note.title)
  const [write, setWrite] = useState(note.write)
  console.log({note})

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className='btn'><IoIosArrowBack /></Link>
        <button className="btn lg primary">Save</button>
        <button className="btn lg danger"><RiDeleteBin6Line /> </button>
      </header>
      <form className="create-note__form">
        <input type="text" placeholder='title...' autoFocus />
        <textarea rows="30" placeholder='write everthing here...'></textarea>
      </form>
    </section>
  )
}

export default EditNote
