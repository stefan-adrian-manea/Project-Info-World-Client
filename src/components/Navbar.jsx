import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Acasa</Link>
        </li>
        <li>
          <Link to="/clients-add">Adaugare client</Link>
        </li>
        <li>
          <Link to="/clients-list">Clienti</Link>
        </li>
        <li>
          <Link to="/appointments">Programari</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
