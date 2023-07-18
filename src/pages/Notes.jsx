import { CiSearch } from 'react-icons/ci'
import { MdClose } from 'react-icons/md'
import { BsPlusLg } from 'react-icons/bs'
//import dummyNotes from '../dummy_notes'
import { Link } from 'react-router-dom'
import NoteItem from '../components/NoteItem'
import { v4 as uuid } from 'uuid'
import { useState } from 'react'
import { useEffect } from 'react'

//accepting and destructuring the note props from App.js here.
//.map is not a function again. back to debug.
const Notes = ({ notes }) => {
  const [displaySearch, setDisplaySearch]= useState(false)
  const [text, setText] = useState('')
  //to filter notes. initially,the note from app.js, (from local storage).
  const [filteredNote, setFilteredNote] = useState(notes)

  const handleSearch = () => {
    setFilteredNote(notes.filter(note => {
      if(note.title.toLowerCase().match(text.toLowerCase())) {
        return note;
      }
    }))
  }

  useEffect((handleSearch)=> {

  }, [text])


  return (
    <section>
      <header className='notes__header'>
        {!displaySearch && <h2>Notes</h2>}
        {displaySearch && <input type="text" autoFocus placeholder='Keyword...' value={text} onChange={(e)=>{setText(e.target.value);handleSearch()}} />}
        <button className='btn' onClick={()=>setDisplaySearch(!displaySearch)}>{displaySearch ? <MdClose /> : <CiSearch />}</button>
      </header>
      <div className="notes__container" >

    {
      //note prop at the end.
      filteredNote.map(note => <NoteItem key={note.id} note={note}/>)
    }
      </div>
      <Link to={'/create'} className='btn add__btn'><BsPlusLg/></Link>
    </section>
  )
}

export default Notes
