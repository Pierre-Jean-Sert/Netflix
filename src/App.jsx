//!Import du CSS
import "./App.css";

//! Import du fichier movies
import movies from "./assets/movies_rnexgr.json";

//!Import des composants
import Header from "./components/Header";
import Catalog from "./components/Catalog";

//*Fonction APP
function App() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Affichage des movies par les composants */}
      <Catalog file={movies} />
    </>
  );
}

export default App;
