import { Link } from 'react-router-dom'


//accepted the props passed from Notes and then destructure it.
const NoteItem = ({note}) => {
  return (
    <Link to={`/edit/${note.id}`} className="note">
        <h4>{note.title.length > 50 ? (note.title.substr(0, 50)) + "..." : (note.title) }</h4>
        <p>{note.date}</p>
    </Link>
  )
}

export default NoteItem
