const pokeApi = {}

function pokemonModel (pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.name = pokeDetail.name
    pokemon.id = pokeDetail.id

    const types = pokeDetail.types.map(typeSlot => typeSlot.type.name)
    const [ type ] = types

    pokemon.types = types
    pokemon.type = type
    pokemon.image = pokeDetail.sprites.other.dream_world.front_default
    
    return pokemon
}

pokeApi.pokemonDetails = (pokemon => {
    return fetch(pokemon.url)
    .then(response => response.json())
    .then(pokemonModel)
})

pokeApi.getPokemons = (offset, limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    return fetch(url)
    .then((response) => {return response.json()})
    .then((jsonBody) => {return jsonBody.results})
    .then((pokemons) => pokemons.map(pokeApi.pokemonDetails))
    .then(detailsRequest => Promise.all(detailsRequest))
    .catch((error) => {console.log(error)})
}