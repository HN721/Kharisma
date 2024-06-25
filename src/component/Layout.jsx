import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <>
              <div className='flex flex-auto h-screen'>
      <Sidebar />
      <div className='flex-grow flex flex-col'>
        <Navbar />
        <div className='flex-grow overflow-auto'>
          {children}
        </div>
      </div>
    </div>

        </>
    )
}

export default Layout
