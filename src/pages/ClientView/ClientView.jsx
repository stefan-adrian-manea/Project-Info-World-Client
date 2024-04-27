import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useClient } from "../../hooks/useClient";

import CarCard from "../../components/CarCard/CarCard";
import ClientCard from "../../components/ClientCard/ClientCard";

function ClientView() {
  const { handleGetClient, clientData, carsList } = useClient();
  const { id: clientID } = useParams();

  useEffect(() => {
    handleGetClient(clientID);
  }, [clientID, clientData, carsList]);

  return (
    <div>
      <h2>
        Client info <Link to={`/client/edit/${clientID}`}>Edit</Link>
      </h2>
      <ClientCard clientData={clientData} />
      <h2>Cars</h2>
      {carsList?.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  );
}

export default ClientView;
