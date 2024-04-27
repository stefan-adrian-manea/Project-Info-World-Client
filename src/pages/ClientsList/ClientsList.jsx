import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getClients } from "../../services/clients";

import "./ClientsList.css"
function ClientsList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function fetchClients() {
      try {
        setClients(await getClients());
      } catch (error) {
        console.error(error);
      }
    }
    fetchClients();
  }, []);

  return (
    <div className="client-list-container">
      <h2>Lista de clienti</h2>
      <table className="client-list-table">
        <thead>
          <tr>
            <th>Nume</th>
            <th>Prenume</th>
            <th>Email</th>
            <th>Numar de telefon</th>
            <th>Actiuni</th>
          </tr>
        </thead>
        <tbody>
          {clients.reverse().map((client, index) => (
            <tr key={index}>
              <td>{client.lastName}</td>
              <td>{client.firstName}</td>
              <td>{client.email}</td>
              <td>{client.phoneNumber}</td>
              <td>
                <Link to={`/appointment/${client.id}`}>Programare</Link>
                <Link to={`/client/${client.id}`}>View Client</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientsList;
