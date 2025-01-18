import { useEffect, useState, useMemo } from "react";
import { collection, onSnapshot, doc, updateDoc, query, orderBy, where, getDocs } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

export default function Rsvp() {
  const [search2, setsearch2] = useState("");
  const [currentPage2, setCurrentPage2] = useState(1);
  const rowsPerPage = 10;
  const [rsvp, setRsvp] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [attendance, setAttendance] = useState({
    attendCount: 0,
    notAttendCount: 0
  });

  useEffect(() => {
    const fetchRsvp = onSnapshot(collection(db, "rsvp"), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // console.log(data)

      const total = data.reduce((accumulator, item) => accumulator + Number(item.count || 0), 0);
      setTotalCount(total);

      const attend = data.filter(item => item.attendance === 'attend').length;
      const notattend = data.filter(item => item.attendance === 'not').length;

      setAttendance({
        attendCount: attend,
        notAttendCount: notattend
      })

      setRsvp(data);
    });

    return () => { fetchRsvp() }
  }, []);

  const toggleAttendance2 = async (id, currentstatus) => {
    try {
      const docRef = doc(db, "rsvp", id);
      await updateDoc(docRef, { status: !currentstatus });
    } catch (error) {
      console.error("Error memperbarui dokumen:", error);
    }
  };

  const filteredData2 = rsvp.filter((item) => {
    const matchesSearch2 =
      search2 === "" ||
      item.name.toLowerCase().includes(search2.toLowerCase());

    return matchesSearch2;
  });

  const totalPages2 = useMemo(() => Math.ceil(filteredData2.length / rowsPerPage), [filteredData2, rowsPerPage]);

  const paginatedData2 = useMemo(() => {
    const startIndex2 = (currentPage2 - 1) * rowsPerPage;
    return filteredData2.slice(startIndex2, startIndex2 + rowsPerPage);
  }, [filteredData2, currentPage2, rowsPerPage]);

  const getPaginationRange2 = () => {
    const delta = 2;
    const range = [];

    const showDots = (currentPage2 > delta + 2 || currentPage2 < totalPages2 - delta - 1);
    const left = Math.max(2, currentPage2 - delta);
    const right = Math.min(totalPages2 - 1, currentPage2 + delta);

    // for (let i = Math.max(1, currentPage2 - delta); i <= Math.min(totalPages2, currentPage2 + delta); i++) {
    //   range.push(i);
    // }

    if (totalPages2 > 1) {
      range.push(1);

      if (left > 2) {
        range.push('...');
      }

      for (let i = left; i <= right; i++) {
        range.push(i);
      }

      if (right < totalPages2 - 1) {
        range.push('...');
      }

      range.push(totalPages2);
    }

    return range;
  };

  const handlePageChange2 = (page) => {
    if (page > 0 && page <= totalPages2) {
      setCurrentPage2(page);
    }
  };
  return (
    <div className="container mx-auto p-4 shadow-lg rounded-xl bg-white">
      <div className='space-x-4 text-center mb-8'>
        <h5>Buku Tamu Walimah Fauziyyah & Hairul</h5>
        <p>18 Januari 2025 | Gedung Senbik Bandung</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by Nama Lengkap..."
          className="border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search2}
          onChange={(e) => setsearch2(e.target.value)}
        />
        <div className='flex gap-2'>
          <label className='flex items-center px-2 py-1 rounded-xl bg-red-500 text-white'>Tidak Hadir : {attendance.notAttendCount}</label>
          <label className='flex items-center px-2 py-1 rounded-xl bg-green-500 text-white'>Hadir : {attendance.attendCount}</label>
          <label className='flex items-center px-2 py-1 rounded-xl bg-blue-500 text-white'>Total pax : {totalCount}</label>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
                Nama Lengkap
              </th>
              <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
                Kehadiran
              </th>
              <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
                Jumlah Kehadiran
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData2.length > 0 ? (
              paginatedData2.map((item) => {
                return (
                  <tr key={item.id} className="hover">
                    <td className="py-2 px-4 border-b text-sm text-gray-700">
                      {item.name}
                    </td>
                    <td className="py-2 px-4 border-b text-sm text-gray-700">
                      {item.attendance == 'attend' ? 'Hadir' : 'Tidak Hadir'}
                    </td>
                    <td className="py-2 px-4 border-b text-sm text-gray-700">
                      {item.count}
                    </td>
                  </tr>
                );

              })) : (
              <tr>
                <td
                  colSpan="7"
                  className="py-4 px-4 border-b text-center text-gray-500"
                >
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* pagination 2 */}
      <div className="flex justify-between items-center mt-4">
        <button
          className={`px-4 py-2 border rounded-md ${currentPage2 === 1 ? "text-gray-400 cursor-not-allowed" : "text-blue-400"
            }`}
          onClick={() => handlePageChange2(currentPage2 - 1)}
          disabled={currentPage2 === 1}
        >
          Previous
        </button>
        <div>
          {getPaginationRange2().map((page, index) => (
            <button
              key={index}
              className={`px-3 py-1 border rounded-md mx-1 ${currentPage2 === page ? "bg-blue-500 text-white" : "text-gray-700"
                } ${page === "..." ? "cursor-default" : ""}`}
              onClick={() => page !== "..." && handlePageChange2(page)}
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          className={`px-4 py-2 border rounded-md ${currentPage2 === totalPages2
            ? "text-gray-400 cursor-not-allowed"
            : "text-blue-400"
            }`}
          onClick={() => handlePageChange2(currentPage2 + 1)}
          disabled={currentPage2 === totalPages2}
        >
          Next
        </button>
      </div>
    </div>
  )
}
