let pokemonList = [
    { name: 'Charmander', height: 0.6, type: 'fire'},
    { name: 'Charmeleon', height: 1.1, type: 'fire'},
    { name: 'Charizard', height: 1.7, type: ['fire', 'flying']}
]

//loop to write out each pokemon
for (let i = 0; i <=pokemonList.length; i++) {
  if (pokemonList[i].height >= 1.5) {
    document.write(pokemonList[i].name + ' (height : ' + pokemonList[i].height + ') Wow, that\'s big! <br>');
    } else {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + 'm) This one isn\'t very big. <br>');
  }
}