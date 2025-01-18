import { BrowserRouter as Router, Route, Routes, Link } from 'react-router';
import Bukutamu from './bukutamu/Bukutamu'
import Rsvp from './rsvp/Rsvp'
import Vipscreen from './vipscreen/Vipscreen'

export default function Admin({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 text-xl font-semibold text-center border-b">Admin Dashboard</div>
        <nav className="mt-4">
          <ul>
            <li className="px-6 py-3 hover:bg-gray-200">
              <Link to="/admin/buku-tamu" className="block text-gray-700 font-medium">
                Buku Tamu
              </Link>
            </li>
            <li className="px-6 py-3 hover:bg-gray-200">
              <Link to="/admin/rsvp" className="block text-gray-700 font-medium">
                RSVP
              </Link>
            </li>
            <li className="px-6 py-3 hover:bg-gray-200">
              <Link to="/admin/vip" className="block text-gray-700 font-medium">
                VIP
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
