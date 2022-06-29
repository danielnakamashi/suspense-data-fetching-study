import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FetchDataContext } from "./FetchDataContext";

function Data() {
  const params = useParams();
  const { fetcher } = useContext(FetchDataContext);
  const data = fetcher.reader.read();

  return (
    <>
      <h1>Pokemon {params.name}</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data?.id}.png`}
      />
      <dl>
        <dt>height</dt>
        <dd>{data?.height}</dd>
        <dt>weight</dt>
        <dd>{data?.weight}</dd>
        <dt>types</dt>
        <dd>
          <ul>
            {data?.types.map(({ slot, type }) => (
              <li key={slot}>{type.name}</li>
            ))}
          </ul>
        </dd>
      </dl>
    </>
  );
}

export default Data;
