import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { useState } from 'react'
//npm i uuid. a package that creates unique id.
import { v4 as uuid } from 'uuid'
import useCreateDate from '../components/useCreateDate'


const CreateNote = () => {
  const [title, setTitle] = useState('')
  const [write, setWrite] = useState('')
  const date = useCreateDate()
 

  const handleSubmit = (e) => {
    e.preventDefault()
    //form validation to ensure if user actually enters a title writes note.
    if (title && write) {
      //a function that creates an id for all note object created. 
      const note = {id: uuid(), title, write, date}
      console.log({note})
    }

  }

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className='btn'><IoIosArrowBack /></Link>
        <button className="btn lg primary" onClick={handleSubmit}>Save</button>
      </header>
      <form className="create-note__form" onSubmit={handleSubmit}>
        <input type="text" value={title} placeholder='title...' autoFocus onChange={(e)=>setTitle(e.target.value)} />
        <textarea value={write} rows="30" placeholder='write everthing here' onChange={(e)=>setWrite(e.target.value)} ></textarea>
      </form>
    </section>
  )
}

export default CreateNote
