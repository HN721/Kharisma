import React from "react";
import { useNavigate } from 'react-router-dom';

const Course = () => {
    const navigate = useNavigate();

    return (
        <div className="px-6 py-4"> {/* Tambahkan padding atau margin di sini */}
            <div>
                <button 
                    type="button" 
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() => navigate('/add-jemaat')}
                >
                    Add Jemaat
                </button>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No Anggota
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nama Lengkap
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Alamat
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tempat
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tanggal Lahir
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Pelayanan
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Diserahkan/Dibaptis
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Menikah/Belum Menikah
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Family Tree
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Sepatan
                            </td>
                            <td className="px-6 py-4">
                                Tangerang
                            </td>
                            <td className="px-6 py-4">
                                15-11-2002
                            </td>
                            <td className="px-6 py-4">
                                Musik
                            </td>
                            <td className="px-6 py-4">
                                Dibaptis
                            </td>
                            <td className="px-6 py-4">
                                Menikah
                            </td>
                            <td className="px-6 py-4">
                                Sirait
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                2
                            </th>
                            <td className="px-6 py-4">
                                Reno
                            </td>
                            <td className="px-6 py-4">
                                Kutabumi
                            </td>
                            <td className="px-6 py-4">
                                Tangerang
                            </td>
                            <td className="px-6 py-4">
                                15-11-2002
                            </td>
                            <td className="px-6 py-4">
                                Musik
                            </td>
                            <td className="px-6 py-4">
                                Dibaptis
                            </td>
                            <td className="px-6 py-4">
                                Menikah
                            </td>
                            <td className="px-6 py-4">
                                Jokowi
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                3
                            </th>
                            <td className="px-6 py-4">
                                Asep
                            </td>
                            <td className="px-6 py-4">
                                Kalideres
                            </td>
                            <td className="px-6 py-4">
                                Tangerang
                            </td>
                            <td className="px-6 py-4">
                                15-11-1990
                            </td>
                            <td className="px-6 py-4">
                                WL
                            </td>
                            <td className="px-6 py-4">
                                Dibaptis
                            </td>
                            <td className="px-6 py-4">
                                Menikah
                            </td>
                            <td className="px-6 py-4">
                                -
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                4
                            </th>
                            <td className="px-6 py-4">
                                Michael legit 
                            </td>
                            <td className="px-6 py-4">
                                Kutabumi
                            </td>
                            <td className="px-6 py-4">
                                Jakarta
                            </td>
                            <td className="px-6 py-4">
                                15-11-2001
                            </td>
                            <td className="px-6 py-4">
                                Musik
                            </td>
                            <td className="px-6 py-4">
                                Dibaptis
                            </td>
                            <td className="px-6 py-4">
                                Menikah
                            </td>
                            <td className="px-6 py-4">
                                Uzumaki
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                5
                            </th>
                            <td className="px-6 py-4">
                                Hosea
                            </td>
                            <td className="px-6 py-4">
                                Sepatan
                            </td>
                            <td className="px-6 py-4">
                                Tangerang
                            </td>
                            <td className="px-6 py-4">
                                15-11-2002
                            </td>
                            <td className="px-6 py-4">
                                Musik
                            </td>
                            <td className="px-6 py-4">
                                Dibaptis
                            </td>
                            <td className="px-6 py-4">
                                Belum Menikah
                            </td>
                            <td className="px-6 py-4">
                                Uciha
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Course;
