function jsonToHtml(pokemon) {
    return `
    <li class="pokemon">
        <div class="description">
            <span class="text name">${pokemon.name}</span>
            <span class="id text">${pokemon.id}</span>
        </div>
        <div class="details">
            <ol class="types">
                <li class="type">
                    <span class="text">grass</span>
                    </li>
                <li class="type">
                    <span class="text">poison</span>
                </li>
            </ol>
            <img src="./assets/images/001.png" alt="">
        </div>
    </li>
    `
}

pokeApi.getPokemons().then((list) => {

    let listLi = []

    list.forEach(pokemon => {
        listLi.push(jsonToHtml(pokemon))
    });
    
    pokemonsOl.innerHTML += listLi
})
