import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getClients, deleteClient } from "../../services/clients";

import "./ClientsList.css";
function ClientList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function fetchClients() {
      try {
        const fetchedClients = await getClients();
        setClients(fetchedClients);
      } catch (error) {
        console.error("Nu s-a putut obtine lista de clienti:", error);
      }
    }
    fetchClients();
  }, []);

  const handleDeleteClient = async (clientId) => {
    try {
      await deleteClient(clientId);
      const updatedClients = clients.filter((client) => client.id !== clientId);
      setClients(updatedClients);
    } catch (error) {
      console.error("Nu s-a putut sterge clientul:", error);
    }
  };

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
          {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.lastName}</td>
              <td>{client.firstName}</td>
              <td>{client.email}</td>
              <td>{client.phoneNumber}</td>
              <td>
                <Link to={`/client-edit/${client.id}`}>
                  <button>Editare</button>
                </Link>
                <button onClick={() => handleDeleteClient(client.id)}>Sterge</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientList;
