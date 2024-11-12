//!Import du CSS
import "./App.css";

//! Import du fichier movies
import movies from "./assets/movies_rnexgr.json";

//!Import du Header
import Header from "./components/Header";

//*Fonction APP
function App() {
  return (
    <>
      <Header />

      {/* Affichage des movies avec mappage */}
      {movies.map((elem) => {
        return (
          <>
            <section className="container">
              {/* Titres des catégories */}
              <h2>{elem.category}</h2>

              <div className="movies-list">
                {/* Images des films */}
                {elem.images.map((elm) => {
                  console.log(elm);
                  return (
                    <div>
                      <img src={elm} />
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        );
      })}
    </>
  );
}

export default App;
