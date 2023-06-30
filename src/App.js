import React from "react";
import "./App.css"
import { Route, Routes , BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Lerarenonderzoek from "./pages/Lerarenonderzoek";
import Overedukids from "./pages/Overedukids";
import Regulieronderwijs from "./pages/Regulieronderwijs";
import Sportstimulering from "./pages/Sportstimulering";
import Sportclubs from "./pages/Sportclubs";
import Voorleraren from "./pages/Voorleraren";
import Opdrachtgevers from "./pages/Opdrachtgevers";
import Werkenbijedukids from "./pages/Werkenbijedukids";
import Werkenbij from "./pages/Werkenbij";
import Werkenbijid from "./pages/Werkenbijid";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="lerarenonderzoek" element={<Lerarenonderzoek />} />
        <Route path="Overedukids" element={<Overedukids />} />
        <Route path="Regulieronderwijs" element={<Regulieronderwijs />} />
        <Route path="Voorleraren" element={<Voorleraren />} />
        <Route path="Sportstimulering" element={<Sportstimulering />} />
        <Route path="Sportclubs" element={<Sportclubs />} />
        <Route path="Opdrachtgevers" element={<Opdrachtgevers />} />
        <Route path="Werkenbijedukids" element={<Werkenbijedukids />} />
        <Route path="Werkenbij" element={<Werkenbij />} />
        <Route path="Werkenbijid/:id" element={<Werkenbijid />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
