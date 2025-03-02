import React from 'react';

const mahasiswa = [
    { nim: '220001', nama: 'Ahmad Fadilah', jurusan: 'Teknik Informatika', angkatan: 2022 },
    { nim: '220002', nama: 'Budi Santoso', jurusan: 'Sistem Informasi', angkatan: 2021 },
    { nim: '220003', nama: 'Citra Lestari', jurusan: 'Teknik Elektro', angkatan: 2023 },
    { nim: '220004', nama: 'Dewi Sartika', jurusan: 'Manajemen Informatika', angkatan: 2020 }
];

export default function Page() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Data Mahasiswa</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="p-3 border border-gray-300">NIM</th>
                                <th className="p-3 border border-gray-300">Nama</th>
                                <th className="p-3 border border-gray-300">Jurusan</th>
                                <th className="p-3 border border-gray-300">Angkatan</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-50">
                            {mahasiswa.map((mhs, index) => (
                                <tr key={index} className="hover:bg-gray-200">
                                    <td className="p-3 border border-gray-300 text-center">{mhs.nim}</td>
                                    <td className="p-3 border border-gray-300">{mhs.nama}</td>
                                    <td className="p-3 border border-gray-300">{mhs.jurusan}</td>
                                    <td className="p-3 border border-gray-300 text-center">{mhs.angkatan}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
