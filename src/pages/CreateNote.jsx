import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

const CreateNote = () => {
  const [title, setTitle] = useState('')
  const [write, setWrite] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    //form validation to ensure if user actually enters a title writes note.
    if (title && write) {
      console.log({title, write})

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
