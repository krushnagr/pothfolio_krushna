import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogs from './Blogs'
import About from './About'
import Projects from './Projects'

const Descripation = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/projets' element={<Projects/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
      </Routes>
    </div>
  )
}

export default Descripation