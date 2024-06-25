import React, { useState } from 'react';

const InformationForm = () => {
  // State untuk menyimpan nilai input form
  const [judul, setJudul] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [status, setStatus] = useState('');
  const [isi, setIsi] = useState('');

  // Handler untuk mengirim data form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Kirim data form ke backend atau lakukan pengolahan data lainnya di sini
    console.log({ judul, tanggal, status, isi });

    // Reset form setelah submit
    setJudul('');
    setTanggal('');
    setStatus('');
    setIsi('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Informasi Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Input untuk judul */}
        <div className="mb-4">
          <label htmlFor="judul" className="block text-sm font-medium text-gray-700">
            Judul
          </label>
          <input
            type="text"
            id="judul"
            placeholder="Masukkan judul informasi"
            className="mt-1 block w-full px-4 py-3 text-lg border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            required
          />
        </div>

        {/* Input untuk tanggal */}
        <div className="mb-4">
          <label htmlFor="tanggal" className="block text-sm font-medium text-gray-700">
            Tanggal
          </label>
          <input
            type="date"
            id="tanggal"
            placeholder="Pilih tanggal"
            className="mt-1 block w-full px-4 py-3 text-lg border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            required
          />
        </div>

        {/* Input untuk status */}
        <div className="mb-4">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            id="status"
            className="mt-1 block w-full px-4 py-3 text-lg border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="" disabled>Pilih Status</option>
            <option value="aktif">Aktif</option>
            <option value="tidak aktif">Tidak Aktif</option>
          </select>
        </div>

        {/* Input untuk isi informasi */}
        <div className="mb-4">
          <label htmlFor="isi" className="block text-sm font-medium text-gray-700">
            Isi
          </label>
          <textarea
            id="isi"
            placeholder="Masukkan isi informasi"
            rows="4"
            className="mt-1 block w-full px-4 py-3 text-lg border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            value={isi}
            onChange={(e) => setIsi(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Tombol submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default InformationForm;
