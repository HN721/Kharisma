import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AttendanceTable = () => {
  const [attendanceList, setAttendanceList] = useState([]);
  const navigate = useNavigate();

 
  return (
    <>
      <button 
         type="button" className="text-white my-4 mx-4 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"onClick={() => navigate('/absensi/tambah')}
                >Absen Now!
                </button>
        <div className="bg-white my-4 mx-4  p-6 rounded-lg shadow-md w-full max-w-4xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Daftar Absensi</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-gray-300 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Nama</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Tanggal</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Status</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Picture</th>

            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {attendanceList.map((attendance, index) => (
              <tr key={index}>
                <td className="py-3 px-4">{attendance.name}</td>
                <td className="py-3 px-4">{attendance.date}</td>
                <td className="py-3 px-4">{attendance.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
    
  );
};

export default AttendanceTable;
