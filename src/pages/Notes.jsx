import { CiSearch } from 'react-icons/ci'
import { BsPlusLg } from 'react-icons/bs'
import dummyNotes from '../dummy_notes'
import { Link } from 'react-router-dom'
import NoteItem from '../components/NoteItem'

//accepting and destructuring the note props from App.js here.
const Notes = ({notes}) => {
  console.log({notes})
  return (
    <section>
      <header className='notes__header'>
        <h2>Notes</h2>
        {/* <input type="text" autoFocus placeholder='Keyword...' /> */}
        <button className='btn'><CiSearch /></button>
      </header>
      <div className="notes__container">
    {
      //note prop at the end.
      notes.map(note => <NoteItem key={[note.id]} note={note}/>)
      
    }
      </div>
      <Link><BsPlusLg className='btn add__btn'/></Link>
    </section>
  )
}

export default Notes
