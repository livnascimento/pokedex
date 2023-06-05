pokemonsOl = document.getElementById('pokemonsList')
let loadMore = document.getElementById('loadMore')

const limit = 10
let offset = 0
const maxCards = 151


function loadPokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        if (!darkMode){
            pokemonsOl.innerHTML += pokemons.map(pokemon => `
            <li class="pokemon ${pokemon.type}">
                <div class="description">
                    <span class="text name">${pokemon.name}</span>
                    <span class="id text">#${pokemon.id}</span>
                </div>
                <div class="details">
                    <ol class="types">
                        ${pokemon.types.map(type => `<li class="type ${type}"><span class="text">${type}</span></li>`).join('')}
                    </ol>
                    <img src="${pokemon.image}" alt="">
                </div>
            </li>
            `).join('')
        } else {
            pokemonsOl.innerHTML += pokemons.map(pokemon => `
            <li class="pokemon ${pokemon.type} dark-mode">
                <div class="description">
                    <span class="text name dark-mode">${pokemon.name}</span>
                    <span class="id text dark-mode">#${pokemon.id}</span>
                </div>
                <div class="details">
                    <ol class="types">
                        ${pokemon.types.map(type => `<li class="type ${type} dark-mode"><span class="text">${type}</span></li>`).join('')}
                    </ol>
                    <img src="${pokemon.image}" alt="">
                </div>
            </li>
            `).join('')
        }
    })
}

loadPokemons(offset, limit)

loadMore.addEventListener('click', () => {
    offset += limit
    
    const nextPageCards = offset + limit

    if (nextPageCards >= maxCards){
        const newLimit = maxCards - offset
        loadPokemons(offset, newLimit)
        loadMore.parentElement.removeChild(loadMore);
    } else {
        loadPokemons(offset, limit)
    }

})
