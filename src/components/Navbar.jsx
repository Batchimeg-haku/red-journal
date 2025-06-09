// components/Navbar.jsx
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-4">
      <Link to="/" className="hover:underline">Нүүр</Link>
      <Link to="/mainform" className="hover:underline">Бидний тухай</Link>
    </nav>
  )
}
