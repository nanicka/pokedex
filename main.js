

function convertPokemonToHTML(pokemon){
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
             <span class="name">${pokemon.name}</span>

             <div class="details">
                <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type.toLowerCase()}">${type}</li>`).join('')}
                 </ol>

                <img src="${pokemon.photo}" 
                    alt="${pokemon.name}">
                </div>
                        
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')


pokeapi.getPokemons() .then((pokemons = [])=>{

    const newHTML = pokemons.map(convertPokemonToHTML).join('')
    pokemonList.innerHTML = newHTML
})
        
