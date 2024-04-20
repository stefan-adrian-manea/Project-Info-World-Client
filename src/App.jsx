import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddClients from "./pages/AddClients/AddClients";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/clients-add" element={<AddClients />} />
    </Routes>
  );
}

export default App;
