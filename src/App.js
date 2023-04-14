import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./component/Layout";
import Dashboard from './component/Dashboard';
import Auth from "./component/Auth";

import Account from "./pages/Account";
import './styles/app.css';
import Logout from "./pages/Logout";
import { LogoutRounded } from "@mui/icons-material";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />          
          <Route path="/dashboard" element={<Layout renderComponent={<Dashboard />} />} />
          <Route path="/account" element={<Layout renderComponent={<Account />}/>} />
        </Routes>
        <CssBaseline />
      </BrowserRouter>
    </>
  );
}

export default App;
