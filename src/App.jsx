import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotfoundPage from "./pages/NotfoundPage";

import Navbar from "./components/Navbar";
import InfiniteDisplay from "./components/InfiniteDisplay";

import { Route, Routes } from "react-router-dom";

const App = () => {
  const dateOfUpdate = "24/04/2026";
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />
      <main>
        <section id="home">
          <HomePage />
        </section>
        <section id="projects">
          <ProjectsPage date={dateOfUpdate} />
        </section>
        <InfiniteDisplay />
        <ContactPage />
      </main>
    </div>
  );
};

export default App;
