import { useEffect, useMemo, useState } from 'react'
import { collection, onSnapshot, doc, updateDoc, query, orderBy, where, getDocs } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

import './Bukutamu.css'

const Bukutamu = () => {
  const [search, setsearch] = useState("");
  const [search2, setsearch2] = useState("");
  const [search3, setsearch3] = useState("");

  const [pihakKeluarga, setPihakKeluarga] = useState("");
  const [keterangan, setKeterangan] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [currentPage3, setCurrentPage3] = useState(1);

  const rowsPerPage = 10;
  const [activeTab, setActiveTab] = useState(1);

  const [datamaster, setDatamaster] = useState([]);
  const [rsvp, setRsvp] = useState([]);
  const [vip, setVIP] = useState([]);

  const [totalCount, setTotalCount] = useState(0);
  const [attendance, setAttendance] = useState({
    attendCount: 0,
    notAttendCount: 0
  });

  const list_keterangan = [
    "Bestie Ti Alit Mamahnya",
    "Ciparigi",
    "Dataquest",
    "Dokbud",
    "Funminton",
    "Guru Catur",
    "Ibu Ibu Cantik (Teman SMP Mamahnya)",
    "ITB",
    "Keluarga Rayyan",
    "Komunitas Hong",
    "KPOTI",
    "Kum Kum Family",
    "Ngajar",
    "Ngopi Ex 12",
    "other",
    "RT08/RW07",
    "SD",
    "SMAN 12 Bandung",
    "SMKI",
    "SMPN 14 Bandung",
    "Teman SD Mamahnya",
    "Tetangga",
    "DKM",
    "Ar Rafi",
    "temen ibu",
    "teman kakek",
    "TKQ Al-Hanifah",
    "IKOPIN University",
    "TK Harapan Bunda (HB)",
    "UNPAD",
    "Istana Kawaluyaan",
    "Teman Papahnya",
    "ketua RW 06",
    "Al Muhajir ",
    "SMAN 9 Bandung",
  ]

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "datamaster"), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDatamaster(data);
    });

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

    const fetchVip = onSnapshot(
      query(
        collection(db, "datamaster"),
        where("special_guest", "==", true),
        where("status", "==", true)
      ),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setVIP(data);
      }
    );

    return () => { unsubscribe(), fetchRsvp(), fetchVip() }
  }, []);

  const toggleAttendance = async (id, currentstatus) => {
    try {
      const docRef = doc(db, "datamaster", id);
      await updateDoc(docRef, { status: !currentstatus });
    } catch (error) {
      console.error("Error memperbarui dokumen:", error);
    }
  };

  const toggleCheckout = async (id, currentstatus) => {
    try {
      const docRef = doc(db, "datamaster", id);
      await updateDoc(docRef, { leave_status: !currentstatus });
    } catch (error) {
      console.error("Error memperbarui dokumen:", error);
    }
  };

  const toggleHiglight = async (id, currentstatus) => {
    try {
      const docRef = doc(db, "datamaster", id);
      await updateDoc(docRef, { selected: !currentstatus });
    } catch (error) {
      console.error("Error memperbarui dokumen:", error);

    }
  }

  const filteredData = datamaster.filter((item) => {
    const matchesSearch =
      search === "" ||
      item.nama_lengkap?.toLowerCase().includes(search.toLowerCase())

    const matchesKeluarga =
      pihakKeluarga === "" || item.pihak === pihakKeluarga;
    const matchesKeterangan =
      keterangan === "" || item.keterangan === keterangan;

    return matchesSearch && matchesKeluarga && matchesKeterangan;
  });


  const filteredData2 = rsvp.filter((item) => {
    const matchesSearch2 =
      search2 === "" ||
      item.name.toLowerCase().includes(search2.toLowerCase());

    return matchesSearch2;
  });

  const filteredDataVip = vip.filter((item) => {
    const matchesSearch =
      search3 === "" ||
      item.nama_lengkap.toLowerCase().includes(search3.toLowerCase());
    const matchesKeluarga =
      pihakKeluarga === "" || item.pihak === pihakKeluarga;
    const matchesKeterangan =
      keterangan === "" || item.keterangan === keterangan;

    return matchesSearch && matchesKeluarga && matchesKeterangan;
  });

  /* 1 */

  const totalPages = useMemo(() => Math.ceil(filteredData.length / rowsPerPage), [filteredData, rowsPerPage]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return filteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredData, currentPage, rowsPerPage]);

  const getPaginationRange = () => {
    const delta = 2;
    const range = [];

    const showDots = (currentPage > delta + 2 || currentPage < totalPages - delta - 1);
    const left = Math.max(2, currentPage - delta); // Rentang kiri
    const right = Math.min(totalPages - 1, currentPage + delta); // Rentang kanan

    if (totalPages > 1) {
      range.push(1); // Halaman pertama

      if (left > 2) {
        range.push('...'); // Tampilkan ... di awal
      }

      for (let i = left; i <= right; i++) {
        range.push(i);
      }

      if (right < totalPages - 1) {
        range.push('...'); // Tampilkan ... di akhir
      }

      range.push(totalPages); // Halaman terakhir
    }

    // for (let i = Math.max(1, currentPage - delta); i <= Math.min(totalPages, currentPage + delta); i++) {
    //   range.push(i);
    // }
    return range;
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  /* 2 */

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

  /* 3 */

  const totalPages3 = useMemo(() => Math.ceil(filteredDataVip.length / rowsPerPage), [filteredDataVip, rowsPerPage]);

  const paginatedData3 = useMemo(() => {
    const startIndex3 = (currentPage3 - 1) * rowsPerPage;
    return filteredDataVip.slice(startIndex3, startIndex3 + rowsPerPage);
  }, [filteredDataVip, currentPage3, rowsPerPage]);

  const getPaginationRange3 = () => {
    const delta = 2;
    const range = [];

    const showDots = (currentPage3 > delta + 2 || currentPage3 < totalPages3 - delta - 1);
    const left = Math.max(2, currentPage3 - delta); // Rentang kiri
    const right = Math.min(totalPages3 - 1, currentPage3 + delta); // Rentang kanan

    if (totalPages3 > 1) {
      range.push(1); // Halaman pertama

      if (left > 2) {
        range.push('...'); // Tampilkan ... di awal
      }

      for (let i = left; i <= right; i++) {
        range.push(i);
      }

      if (right < totalPages - 1) {
        range.push('...'); // Tampilkan ... di akhir
      }

      range.push(totalPages3); // Halaman terakhir
    }

    return range;
  };

  const handlePageChange3 = (page) => {
    if (page > 0 && page <= totalPages3) {
      setCurrentPage3(page);
    }
  };



  return (
    <div className="container mx-auto mt-10 p-4 shadow-lg rounded-xl bg-white">
      <div className="mb-4">
        <div className='space-x-4 text-center mb-8'>
          <h5>Buku Tamu Walimah Fauziyyah & Hairul</h5>
          <p>18 Januari 2025 | Gedung Senbik Bandung</p>
        </div>
        <div className="flex space-x-4 border-b pb-2">
          <button
            className={`px-4 py-2 ${activeTab === 1
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
              }`}
            onClick={() => setActiveTab(1)}
          >
            Daftar tamu Utama
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 3
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
              }`}
            onClick={() => setActiveTab(3)}
          >
            Daftar tamu spesial
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 2
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
              }`}
            onClick={() => setActiveTab(2)}
          >
            Data RSVP
          </button>
        </div>
      </div>

      {activeTab === 1 && (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <input
              type="text"
              placeholder="Cari nama tamu ..."
              className="border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
            <select
              className="border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={pihakKeluarga}
              onChange={(e) => setPihakKeluarga(e.target.value)}
            >
              <option value="">Semua Pihak</option>
              <option value="Pihak Laki-laki">Pengantin Pria</option>
              <option value="Pihak Perempuan">Pengantin Wanita</option>
            </select>

            <select
              className="border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
            >
              <option value="">Semua Keterangan</option>
              {list_keterangan.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Nama Lengkap
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Pihak Tamu
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Status
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Keterangan
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.length > 0 ? (
                  paginatedData.map((item) => {

                    return (
                      <tr key={item.id} className="hover:bg-gray-100">
                        <td className="">
                          {item.nama_lengkap}
                        </td>
                        <td className="">
                          {item.pihak}
                        </td>
                        <td className=''>
                          <span className={`rounded-xl px-2 py-1  ${item.special_guest == true ? 'text-white bg-green-400 ' : 'text-black'}`}>{item.special_guest == true ? 'Special Guest' : ''} </span>
                        </td>
                        <td className="">
                          {item.keterangan}
                        </td>
                        <td className="">
                          <button
                            className={`btn btn-sm ${item.status
                              ? "btn-secondary"
                              : "btn-primary"
                              }`}
                            onClick={() => toggleAttendance(item.id, item.status)}
                          >
                            {item.status ? "Sudah Hadir" : "Konfirmasi"}
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
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
          {/* pagination */}
          <div className="flex justify-between items-center mt-4 mx-auto">
            <button
              className={`px-4 py-2 border rounded-md ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-blue-400"
                }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <div className='flex gap-1 '>
              {getPaginationRange().map((page, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 border rounded-md ${currentPage === page ? "bg-blue-500 text-white" : "text-gray-700"
                    } ${page === "..." ? "cursor-default" : ""}`}
                  onClick={() => page !== "..." && handlePageChange(page)}
                  disabled={page === "..."}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              className={`px-4 py-2 border rounded-md ${currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-blue-400"
                }`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {activeTab === 2 && (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <input
              type="text"
              placeholder="Search by Nama Lengkap..."
              className="border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={search2}
              onChange={(e) => setsearch2(e.target.value)}
            />
            <div></div>
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
      )}

      {
        activeTab === 3 && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <input
                type="text"
                placeholder="Search by Nama Lengkap..."
                className="border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={search3}
                onChange={(e) => setsearch3(e.target.value)}
              />
            </div>
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
                      Nama Lengkap
                    </th>
                    <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData3.length > 0 ? (
                    paginatedData3.map((item) => {
                      return (
                        <tr key={item.id} className="hover">
                          <td className="py-2 px-4 border-b text-sm text-gray-700">
                            {item.nama_lengkap}
                          </td>
                          <td className="py-2 px-4 border-b text-sm text-gray-700 flex gap-2">
                            <button
                              className={`h-[2rem] min-h-[2rem] rounded-[8px] px-[0.75rem] text-white  ${item.leave_status
                                ? "bg-green-500"
                                : "bg-blue-500"
                                }`}
                              onClick={() => toggleCheckout(item.id, item.leave_status)}
                            >
                              {item.leave_status ? "Sudah Pulang" : "Checkout"}
                            </button>
                            <button
                              className={`h-[2rem] min-h-[2rem] rounded-[8px] px-[0.75rem] text-white ${item.selected ? 'bg-red-500' : 'bg-gray-500'}`}
                              onClick={() => toggleHiglight(item.id, item.selected)}
                            >
                              Highlight
                            </button>
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
            {/* pagination 3 */}
            <div className="flex justify-between items-center mt-4">
              <button
                className={`px-4 py-2 border rounded-md ${currentPage3 === 1 ? "text-gray-400 cursor-not-allowed" : "text-blue-400"
                  }`}
                onClick={() => handlePageChange3(currentPage3 - 1)}
                disabled={currentPage3 === 1}
              >
                Previous
              </button>
              <div>
                {getPaginationRange3().map((page, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1 border rounded-md mx-1 ${currentPage3 === page ? "bg-blue-500 text-white" : "text-gray-700"
                      } ${page === "..." ? "cursor-default" : ""}`}
                    onClick={() => page !== "..." && handlePageChange3(page)}
                    disabled={page === "..."}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                className={`px-4 py-2 border rounded-md ${currentPage3 === totalPages3
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-400"
                  }`}
                onClick={() => handlePageChange3(currentPage3 + 1)}
                disabled={currentPage3 === totalPages3}
              >
                Next
              </button>
            </div>
          </div>
        )
      }
    </div>
  );

}

export default Bukutamu