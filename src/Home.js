import { useContext } from "react";
import { Link } from "react-router-dom";
import { fetchPokemonList, fetchPokemonData } from "./fetch";
import { FetchDataContext } from "./FetchDataContext";

const fetcher = fetchPokemonList();

function Home() {
  const data = fetcher.read();
  const { setFetcher } = useContext(FetchDataContext);

  return (
    <>
      <h1>Pokemon List</h1>
      <ul>
        {data.results.map(({ name, url }) => (
          <li key={url}>
            <Link
              to={`/pokemon/${name}`}
              onClick={() => {
                setFetcher({
                  name,
                  reader: fetchPokemonData(name),
                });
              }}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
