import { useEffect, useState } from "react";
import AboutMe from "./Pages/AboutMe/AboutMe.jsx";
import WorldOfTheWest from "./Pages/WorldOfTheWest/WorldOfTheWest.jsx";
import WorldOfTheEast from "./Pages/WorldOfTheEast/WorldOfTheEast.jsx";
import LiteratureSection from "./Pages/LiteratureSection/LiteratureSection.jsx";
import LogicSection from "./Pages/LogicSection/LogicSection.jsx";

const App = () => {
  const [h, setH] = useState(window.location.hash);
  const pages = {
    "#AboutMe": AboutMe,
    "#LogicSection": LogicSection,
    "#LiteratureSection": LiteratureSection,
    "#WorldOfTheEast": WorldOfTheEast,
    "#WorldOfTheWest": WorldOfTheWest,
  };

  useEffect(() => {
    const onHashChange = () => {
      setH(window.location.hash);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const PageComponent = pages[h] || AboutMe;

  return (
    <div className="main">
      <div className="nav">
        <p>Maitreyi</p>
        <div className="links">
          <a href="#AboutMe">AboutMe </a>
          <a href="#LogicSection">LogicSection </a>
          <a href="#LiteratureSection">LiteratureSection </a>
          <a href="#WorldOfTheEast">WorldOfTheEast </a>
          <a href="#WorldOfTheWest">WorldOfTheWest </a>
        </div>
      </div>

      <div className="pages">
        <PageComponent />
      </div>
    </div>
  );
};

export default App;
