import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Survey from "./pages/Home/Survey.jsx";
import Header from "./components/Header/Header.jsx";
import ClientForm from "./components/ClientForm/ClientForm.jsx";
import FreelanceForm from "./components/FreelanceForm/FreelanceForm.jsx";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";
import Results from "./pages/Results/Results.jsx";
import Freelances from "./pages/Freelances/Freelances.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*  Le router vous permet de récupérer des paramètres */}
        <Route path="/survey/:questionNumber" element={<Survey />}>
          {/* <Route path="/survey" element={<Survey />}> */}
          {/* Nous imbriquons nos composant dans survey */}
          {/* <Route path="client" element={<ClientForm />} /> */}
          {/* <Route path="freelance" element={<FreelanceForm />} /> */}
        </Route>
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
