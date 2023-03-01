let pokemonRepository = (function () {
  let pokemonList = [
    { name: 'Charmander', height: 0.6, type: ['fire']},
    { name: 'Charmeleon', height: 1.1, type: ['fire']},
    { name: 'Charizard', height: 1.7, type: ['fire', 'flying']},
    { name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison']},
    { name: 'Ivysaur', height: 1, type: ['grass', 'poison']},
    { name: 'Venusaur', height: 2, type: ['grass', 'poison']}
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  
  function getAll() {
    return pokemonList;
  }
  //create li for each pokemon
  function addListItem(pokemon){
    let pokedexList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    //create button for each li
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokedexList.appendChild(listPokemon);
    //add event listener
    button.addEventListener('click', function() {
      console.log(showDetails);
    })
  }
  //call pokemon name to console
  function showDetails(pokemon){
    console.log(pokemon.name);
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  }
})();

function printArrayDetails(pokemon) {
  if (pokemon.height >= 1.5) {
    document.write(pokemon.name + ' (height: ' + pokemon.height + 'm) Wow, that\'s big! <br>');
  } else if (pokemon.height >= 1) {
    document.write(pokemon.name + ' (height: ' + pokemon.height + 'm) This one is medium size. <br>');
  } else {
    document.write(pokemon.name + '(height: ' + pokemon.height + 'm) This one is pretty small! <br>');
  }
}
//for each loop
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
  pokemonRepository.showDetails(pokemon);
});
