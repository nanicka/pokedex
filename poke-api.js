
const pokeapi ={}

function convertPokeApDetailToPokemon(pokeDetails){

    const pokemon = new Pokemon()
    pokemon.number = pokeDetails.order
    pokemon.name = pokeDetails.name

    const types = pokeDetails.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type
   
    pokemon.photo = pokeDetails.sprites.other.dream_world.front_default

    return pokemon

}

pokeapi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApDetailToPokemon)
}

pokeapi.getPokemons = (offset = 0, limit = 500) => {

    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    
    return fetch(url)
        .then((response)=>response.json())
        .then((jsonBody)=>jsonBody.results)
        .then((pokemons) => pokemons.map(pokeapi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}