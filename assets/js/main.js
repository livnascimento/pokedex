pokemonsOl = document.getElementById('pokemonsList')


function jsonToHtml(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
        <div class="description">
            <span class="text name">${pokemon.name}</span>
            <span class="id text">#${pokemon.id}</span>
        </div>
        <div class="details">
            <ol class="types">
                ${pokemon.types.map(type => `<li class="type"><span class="text">${type}</span></li>`).join('')}
            </ol>
            <img src="${pokemon.image}" alt="">
        </div>
    </li>
    `
}

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonsOl.innerHTML =  pokemons.map(jsonToHtml).join('')
})
