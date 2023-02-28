import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthContext from "./utils/AuthContext";
import Board from "./views/Board";
import DataTable from "./views/DataTable";
import Home from "./views/Home";
import Print from "./views/Print";
import Templates from "./views/Templates";
import Welcome from "./views/Welcome";

export default function App() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin") === "true");

  useEffect(() => {
    localStorage.setItem("isLogin", isLogin);
  }, [isLogin])
  

  const stateLogin = () => {
    setIsLogin(true);
  };

  const authValue = {
    onLogin: stateLogin,
    
  };

  return (
    <AuthContext.Provider value={authValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />

          <Route
            path="/home"
            element={isLogin ? <Home /> : <Navigate to="/" />}
          />
          <Route
            path="/board"
            element={isLogin ? <Board /> : <Navigate to="/" />}
          />
          <Route
            path="/data"
            element={isLogin ? <DataTable /> : <Navigate to="/" />}
          />
          <Route
            path="/print"
            element={isLogin ? <Print /> : <Navigate to="/" />}
          />
          <Route
            path="/templates"
            element={isLogin ? <Templates /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
