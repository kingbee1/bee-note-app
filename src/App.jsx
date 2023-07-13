
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Notes from './pages/Notes'
import CreateNote from './pages/CreateNote'
import EditNote from './pages/EditNote'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Notes />} />
      <Route path='/create' element={<CreateNote />} />
      <Route path='/edit/:id' element={<EditNote />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
