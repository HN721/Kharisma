import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Tambah() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-8">
    <h2 className="text-2xl font-semibold leading-7 text-gray-900 mb-6"> Data Personal Jemaat</h2>
    <form className="space-y-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="nama-lengkap" className="block text-sm font-medium leading-6 text-gray-900">Nama Lengkap</label>
          <input 
            type="text" 
            name="nama-lengkap" 
            id="nama-lengkap" 
            placeholder="Masukkan Nama Lengkap" 
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4" 
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="alamat" className="block text-sm font-medium leading-6 text-gray-900">Alamat</label>
          <input 
            type="text" 
            name="alamat" 
            id="alamat" 
            placeholder="Masukkan Alamat" 
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4" 
          />
        </div>
        <div>
          <label htmlFor="tempat-lahir" className="block text-sm font-medium leading-6 text-gray-900">Tempat Lahir</label>
          <input 
            type="text" 
            name="tempat-lahir" 
            id="tempat-lahir" 
            placeholder="Masukkan Tempat Lahir" 
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4" 
          />
        </div>
        <div>
          <label htmlFor="tanggal-lahir" className="block text-sm font-medium leading-6 text-gray-900">Tanggal Lahir</label>
          <input 
            type="date" 
            name="tanggal-lahir" 
            id="tanggal-lahir" 
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4" 
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="pelayanan" className="block text-sm font-medium leading-6 text-gray-900">Pelayanan</label>
          <input 
            type="text" 
            name="pelayanan" 
            id="pelayanan" 
            placeholder="Masukkan Pelayanan" 
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4" 
          />
        </div>
        <div>
          <label htmlFor="diserahkan-dibaptis" className="block text-sm font-medium leading-6 text-gray-900">Diserahkan/Dibaptis</label>
          <select 
            name="diserahkan-dibaptis" 
            id="diserahkan-dibaptis" 
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4"
          >
            <option value="">Pilih...</option>
            <option value="diserahkan">Diserahkan</option>
            <option value="dibaptis">Dibaptis</option>
          </select>
        </div>
        <div>
          <label htmlFor="status-perkawinan" className="block text-sm font-medium leading-6 text-gray-900">Menikah/Belum Menikah</label>
          <select 
            name="status-perkawinan" 
            id="status-perkawinan" 
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4"
          >
            <option value="">Pilih...</option>
            <option value="menikah">Menikah</option>
            <option value="belum-menikah">Belum Menikah</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="family-tree" className="block text-sm font-medium leading-6 text-gray-900">Family Tree</label>
          <input 
            type="text" 
            name="family-tree" 
            id="family-tree" 
            placeholder="Masukkan Family Tree" 
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4" 
          />
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
        <button type="submit" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"    onClick={() => navigate('/course')}>Save</button>
      </div>
    </form>
  </div>
  )
}
