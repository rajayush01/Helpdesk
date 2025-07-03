import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import UserDashboard from "./pages/Dashboards/User/UserDashboard";
import OperationTeam from "./pages/Dashboards/OperationTeam/OperationTeam";
import TechnicalSupport from "./pages/Dashboards/TechnicalSupport/TechnicalSupport";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<SignIn/>} />
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/forgot-pass" element={<ForgotPassword/>}/>
          <Route path="/user" element={<UserDashboard/>}/>
          <Route path="/operation-team" element={<OperationTeam/>} />
          <Route path="/technical-support" element={<TechnicalSupport/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
