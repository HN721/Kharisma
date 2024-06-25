import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import { ThemeProvider } from '../src/component/ThemeContext'
import Dashboard from './pages/Dashboard'
import Course from './pages/Course'
import Informasi from './pages/Informasi'
import Login from './pages/Login'
import Tambah from './pages/Tambah'
import Info from './component/Info'
import AbsensiTable from "./pages/AbsensiTable"
import Absensi from './component/Absensi/Absensi'
export default function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/course' element={<Course />} />
          <Route path='/informasi' element={<Informasi/>} />
          <Route path='/informasi/info-jemaat' element={<Info/>} />
          <Route path='/absensi' element={<AbsensiTable/>} />
          <Route path='/absensi/tambah' element={<Absensi/>} />

          <Route path='/add-jemaat' element={<Tambah/>}/>

         
        </Routes>
      </Layout>
    </BrowserRouter>
  </ThemeProvider>
  )
}
