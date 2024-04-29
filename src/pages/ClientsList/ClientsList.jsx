import { useState, useEffect } from "react";
import { getClients } from "../../services/clients";

import SearchBar from "../../components/SearchBar/SearchBar";
import ClientsTable from "../../components/ClientsTable/ClientsTable";

function ClientsList() {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getClientsList() {
      try {
        const clientsList = await getClients();
        setClients(clientsList.reverse());
      } catch (error) {
        console.error(error);
      }
    }
    getClientsList();
  }, []);

  const filteredClients = clients.filter((client) => {
    const name = client.firstName + client.lastName;
    return name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="client-list table-container">
      <h2>Clients List</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ClientsTable clientsList={filteredClients} />
    </div>
  );
}

export default ClientsList;
