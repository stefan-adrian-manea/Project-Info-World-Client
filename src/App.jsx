import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddClients from "./pages/AddClients/AddClients";
import ClientList from "./pages/ClientsList/ClientsList"
import EditClient from "./pages/EditClient/EditClient";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/clients-add" element={<AddClients />} />
      <Route path="/clients-list" element={<ClientList />} />
      <Route path="/client-edit/:id" element={<EditClient />} />
    </Routes>
  );
}

export default App;
