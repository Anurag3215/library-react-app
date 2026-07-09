import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddBook from './container/AddBook'
import SearchBook from './container/SearchBook'
import DeleteBook from './container/DeleteBook'
import ViewBook from './container/ViewBook'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<AddBook />} />
          <Route path='/search' element={<SearchBook />} />
          <Route path='/delete' element={<DeleteBook />} />
          <Route path='/view' element={<ViewBook />} />

        </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App
