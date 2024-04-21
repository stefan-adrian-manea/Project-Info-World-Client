import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddClients from "./pages/AddClients/AddClients";
import ClientList from "./pages/ClientsList/ClientsList";
import EditClient from "./pages/EditClient/EditClient";
import AppointmentClient from "./pages/AppointmentClient/AppointmentClient";
import AppointmentsList from "./pages/AppointmentsList/AppointmentsList";
import ServiceHistory from "./pages/ServiceHistory/ServiceHistory";
import ProcessingHistory from "./pages/ServiceHistory/ProcessingHistory";
import ReceptionHistory from "./pages/ServiceHistory/ReceptionHistory";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/clients-add" element={<AddClients />} />
        <Route path="/clients-list" element={<ClientList />} />
        <Route path="/client-edit/:id" element={<EditClient />} />
        <Route path="/appointments" element={<AppointmentsList />} />
        <Route path="/appointment/:id" element={<AppointmentClient />} />
        <Route path="/history-service/:id" element={<ServiceHistory />} />
        <Route path="/history-service/:id/reception" element={<ReceptionHistory />} />
        <Route path="/history-service/:id/processing" element={<ProcessingHistory />} />
      </Routes>
    </>
  );
}

export default App;
