const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

    return fetch(url)
    .then((response) => {return response.json()})
    .then((jsonBody) => {return jsonBody.results})
    .catch((error) => {console.log(error)})
}