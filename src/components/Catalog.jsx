function Catalog(props) {
  const filmsTab = props.file;

  const result = filmsTab.map((elem) => {
    return (
      <>
        <section className="container">
          {/* Titres des catégories */}
          <h2>{elem.category}</h2>

          <div className="movies-list">
            {/* Images des films  */}
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
  });

  return result;
}

export default Catalog;
