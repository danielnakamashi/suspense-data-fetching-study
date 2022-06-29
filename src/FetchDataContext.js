import { createContext, useState, useEffect } from "react";
import { useMatch } from "react-router-dom";
import { fetchPokemonData } from "./fetch";

const FetchDataContext = createContext({
  pokemon: null,
  setPokemon: () => {},
});

const initialState = {
  name: null,
  reader: { read: () => {} },
};

function FetchDataProvider({ children }) {
  const [fetcher, setFetcher] = useState(initialState);
  const match = useMatch("/pokemon/:name");
  const name = match?.params?.name;
  useEffect(() => {
    if (name && fetcher.name !== name) {
      console.log("setFetcher from provider");
      setFetcher({
        name,
        reader: fetchPokemonData(name),
      });
    }
  }, [fetcher.name, name]);

  return (
    <FetchDataContext.Provider value={{ fetcher, setFetcher }}>
      {children}
    </FetchDataContext.Provider>
  );
}

export { FetchDataProvider, FetchDataContext };
