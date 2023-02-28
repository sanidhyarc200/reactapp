import { useState } from "react";
import Newinp from "./inputnew";

const Searchitem = {
  padding: 12,
  margin: 12,
  border: "1px solid silver",
  backgroundColor: "#325795",
  color: "#fff",
};
const ProductLists = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const onMoviesSearch = (key, value) => {
    console.log({ key, value });
    setSearch(value);

    fetch(`https://fakestoreapi.com/products/search?q=${value}`)
      .then((data) => data.json())
      .then((data) => setMovies(data.products));
  };
  return (
    <>
      <div style={{ padding: 12 }}>
        <Newinp
          value={search}
          onChange={onMoviesSearch}
          placeholder="Search the product here"
        />
        {search && <p>Searching for : {search}</p>}
      </div>
      <div>
        <h1>productlist</h1>
        <ul>
          {movies.map((item) => {
            return (
              <li key={item.id} style={Searchitem}>
                <p>{item.title}</p>
                <p>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ProductLists;