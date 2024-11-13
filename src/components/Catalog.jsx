function Catalog(props) {
  const filmsTab = props.file;

  const result = filmsTab.map((elem) => {
    return (
      <>
        <section key={elem.catagory} className="container">
          {/* Titres des catégories */}
          <h2>{elem.category}</h2>

          {/* Images des films  */}
          <div className="movies-list">
            {elem.images.map((elem) => {
              return <img key={elem} src={elem} alt="Movie" />;
            })}
          </div>
        </section>
      </>
    );
  });
  //On retourne le résultat des deux mappages stockés dans result
  return result;
}

export default Catalog;
