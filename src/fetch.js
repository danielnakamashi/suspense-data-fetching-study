function suspendPromise(promise) {
  let status = "pending";
  let resolvedData;

  const suspender = promise.then(
    (data) => {
      status = "success";
      resolvedData = data;
    },
    (error) => {
      status = "error";
      resolvedData = error;
    }
  );

  function read() {
    switch (status) {
      case "success":
        return resolvedData;
      case "error":
        throw resolvedData;
      default:
        throw suspender;
    }
  }

  return { read };
}

function fetchPokemonList() {
  return suspendPromise(
    fetch("https://pokeapi.co/api/v2/pokemon/").then((response) =>
      response.json()
    )
  );
}

function fetchPokemonData(name) {
  return suspendPromise(
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) =>
      response.json()
    )
  );
}

export { fetchPokemonList, fetchPokemonData };
