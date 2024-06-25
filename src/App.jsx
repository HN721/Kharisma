import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import { ThemeProvider } from '../src/component/ThemeContext'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Course from './pages/Course'
import Informasi from './pages/Informasi'
import Login from './pages/Login'
import Tambah from './pages/Tambah'
import Info from './component/Info'
export default function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/course' element={<Course />} />
          <Route path='/informasi' element={<Informasi/>} />
          <Route path='/informasi/info-jemaat' element={<Info/>} />

          <Route path='/login' element={<Login />} />
          <Route path='/add-jemaat' element={<Tambah/>}/>

         
        </Routes>
      </Layout>
    </BrowserRouter>
  </ThemeProvider>
  )
}
