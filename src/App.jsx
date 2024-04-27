import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ClientAdd from "./pages/ClientAdd/ClientAdd";
import ClientsList from "./pages/ClientsList/ClientsList";
// import EditClient from "./pages/EditClient/EditClient";
import ClientView from "./pages/ClientView/ClientView"
import AddAppointment from "./pages/AddAppointment/AddAppointment";
import AppointmentsList from "./pages/AppointmentsList/AppointmentsList";
import ServiceHistory from "./pages/ServiceHistory/ServiceHistory";
import ProcessingServiceHistory from "./pages/ServiceHistory/ProcessingServiceHistory/ProcessingServiceHistory";
import ReceptionServiceHistory from "./pages/ServiceHistory/ReceptionServiceHistory/ReceptionServiceHistory";
import Navbar from "./components/Navbar";
import ClientEdit from "./pages/ClientEdit/ClientEdit";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/clients-list" element={<ClientsList />} />
        <Route path="/clients-add" element={<ClientAdd />} />
        <Route path="/client/:id" element={<ClientView />} />
        <Route path="/client/edit/:id" element={<ClientEdit />} />
        <Route path="/appointments" element={<AppointmentsList />} />
        <Route path="/appointment/:id" element={<AddAppointment />} />
        <Route path="/history-service/:id" element={<ServiceHistory />} />
        <Route path="/history-service/:id/reception" element={<ReceptionServiceHistory />} />
        <Route path="/history-service/:id/processing" element={<ProcessingServiceHistory />} />
      </Routes>
    </>
  );
}

export default App;
