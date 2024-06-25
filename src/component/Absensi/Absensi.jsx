import React, { useState, useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import { useNavigate } from 'react-router-dom';

const AttendanceForm = ({ onFormSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    status: 'hadir',
    jam:'',
    ibadah:''
  });
  const [isLoading, setIsLoading] = useState(true);
  const webcamRef = useRef(null);
  const [detections, setDetections] = useState(null);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
      await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
      setIsLoading(false);
    };
    loadModels();
  }, []);

  const handleCapture = async () => {
    if (webcamRef.current) {
      const screenshot = webcamRef.current.getScreenshot();
      const img = new Image();
      img.src = screenshot;
      img.onload = async () => {
        const detections = await faceapi.detectAllFaces(
          img,
          new faceapi.TinyFaceDetectorOptions()
        ).withFaceLandmarks().withFaceDescriptors();
        setDetections(detections);
        if (detections.length > 0) {
          // Proses lebih lanjut jika wajah terdeteksi, seperti mencocokkan dengan database
        } else {
          alert('No faces detected. Please try again.');
        }
      };
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (detections && detections.length > 0) {
      onFormSubmit(formData);
      setFormData({
        name: '',
        date: '',
        status: 'hadir',
      });
    } else {
      alert('Please capture your face first.');
    }
  };

  return ( 
    <div className="flex justify-center items-center min-h-screen  bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md w-full mt-4 max-w-md mx-5 mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Form Absensi</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nama
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Ibadah
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.ibadah}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Jam
          </label>
          <input
            type="time"
            id="name"
            name="name"
            value={formData.jam}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Tanggal
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="hadir">Hadir</option>
            <option value="tidak hadir">Tidak Hadir</option>
          </select>
        </div>

        <div className="mb-4">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="100%"
            videoConstraints={{
              width: 1280,
              height: 720,
              facingMode: "user"
            }}
            className="rounded-md shadow-sm"
          />
        </div>

        <div className="flex justify-end mb-4">
          <button
            type="button"
            onClick={handleCapture}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Capture Face
          </button>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => navigate('/absensi')}
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};
   

export default AttendanceForm;
