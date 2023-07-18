import { CiSearch } from 'react-icons/ci'
import { BsPlusLg } from 'react-icons/bs'
//import dummyNotes from '../dummy_notes'
import { Link } from 'react-router-dom'
import NoteItem from '../components/NoteItem'
import { v4 as uuid } from 'uuid'
import { useState } from 'react'

//accepting and destructuring the note props from App.js here.
//.map is not a function again. back to debug.
const Notes = ({ notes }) => {
  const [displaySearch, setDisplaySearch]= useState(false)

  return (
    <section>
      <header className='notes__header'>
        {!displaySearch && <h2>Notes</h2>}
        {displaySearch && <input type="text" autoFocus placeholder='Keyword...' />}
        <button className='btn' onClick={()=>setDisplaySearch(!displaySearch)}><CiSearch /></button>
      </header>
      <div className="notes__container" >

    {
      //note prop at the end.
      notes.map(note => <NoteItem key={note.id} note={note}/>)
    }
      </div>
      <Link to={'/create'} className='btn add__btn'><BsPlusLg/></Link>
    </section>
  )
}

export default Notes
