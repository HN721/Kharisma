import React, { useState } from 'react';
import AttendanceForm from './Absensi';
import AttendanceTable from '../../pages/AbsensiTable';

const Attend = () => {
  const [attendanceList, setAttendanceList] = useState([]);

  const handleFormSubmit = (formData) => {
    setAttendanceList([...attendanceList, formData]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <AttendanceForm onFormSubmit={handleFormSubmit} />
      <AttendanceTable attendanceList={attendanceList} />
    </div>
  );
};

export default Attend;
