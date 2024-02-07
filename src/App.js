import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Newest from "./pages/Newest";
import Ticket from "./pages/Ticket";
import MelonChart from "./pages/MelonChart";
import MusicVideo from "./pages/MusicVideo";
import Movetopbutton from "./components/Movetopbutton";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newest" element={<Newest />} />
          <Route path="/melonchart" element={<MelonChart />} />
          <Route path="/musicvideo" element={<MusicVideo />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
        <Movetopbutton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
