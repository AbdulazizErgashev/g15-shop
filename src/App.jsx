import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./pages/routes/Router";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <AppRoutes />
    </React.Fragment>
  );
}
