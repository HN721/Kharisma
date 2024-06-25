import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InformationTable = () => {
  // State untuk menyimpan daftar informasi
  const [informasi, setInformasi] = useState([]);

  // Data informasi sementara untuk keperluan contoh
  const initialData = [
    {
      id: 1,
      judul: 'Pengumuman Rapat',
      tanggal: '2024-06-27',
      status: 'aktif',
      isi: 'Rapat akan dilaksanakan pada hari Minggu, 30 Juni 2024, pukul 09.00 WIB di ruang rapat utama.',
      pembawa: "Diaken Rafael Rarung"
    },
    {
      id: 2,
      judul: 'Perubahan Jadwal',
      tanggal: '2024-06-28',
      status: 'aktif',
      isi: 'Jadwal Pelayanan telah diubah menjadi hari Kamis, 28 Juni 2024, pukul 10.00 WIB.',
      pembawa: "Lely Budiman"
    },
  ];

  // Gunakan initialData sebagai data awal ketika komponen dimuat
  useState(() => {
    setInformasi(initialData);
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <div className='mx-4 mt-3'>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => navigate('/informasi/info-jemaat')}
        >
          Add Information
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg mx-4 mt-3 shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Informasi Table</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-gray-300 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-sm">Judul</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Tanggal</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Isi</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">WD</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {informasi.map((info) => (
                <tr key={info.id}>
                  <td className="py-3 px-4">{info.judul}</td>
                  <td className="py-3 px-4">{info.tanggal}</td>
                  <td className="py-3 px-4">{info.status}</td>
                  <td className="py-3 px-4">{info.isi}</td>
                  <td className="py-3 px-4">{info.pembawa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default InformationTable;
