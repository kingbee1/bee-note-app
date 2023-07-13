import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { BsPlusLg } from 'react-icons/bs'
import dummyNotes from '../dummy_notes'
import { Link } from 'react-router-dom'
import NoteItem from '../components/NoteItem'

const Notes = () => {
  return (
    <section>
      <header className='notes__header'>
        <h2>Notes</h2>
        {/* <input type="text" autoFocus placeholder='Keyword...' /> */}
        <button className='btn'><CiSearch /></button>
      </header>
      <div className="notes__container">
    {
      //note props
      dummyNotes.map(note => <NoteItem key={note.id} note={note}/>)
    }
      </div>
      <Link><BsPlusLg className='btn add__btn'/></Link>
    </section>
  )
}

export default Notes
