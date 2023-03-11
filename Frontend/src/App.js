import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';
import RoomType from "./pages/Admin/RoomType/RoomType";
import Room from "./pages/Admin/Room";
import User from "./pages/Admin/User";
import Customer from "./pages/Admin/Customer";
import HistoryTransaksi from "./pages/Admin/HistoryTransaksi";

import LoginCust from "./pages/Customer/Login";
import Home from "./pages/Customer/Home";
// import LoginCust from "./PagesForCust/Login";
// import RegisterCust from "./PagesForCust/Register";
// import Home from "./PagesForCust/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/room-type" element={<RoomType />}></Route>
        <Route path="/room" element={<Room />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/customer" element={<Customer />}></Route>
        <Route path="/history-transaksi" element={<HistoryTransaksi />}></Route>

        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<LoginCust />}></Route>
        {/* 

        <Route path="/registercust" element={<RegisterCust />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/services"></Route>
        <Route path="/rooms"></Route>
        <Route path="/mybookings"></Route>
        <Route path="/available-rooms"></Route> */}

      </Routes>
    </BrowserRouter>

  );
}

export default App;