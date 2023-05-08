let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'

  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  
  function getAll() {
    return pokemonList;
  }
  //create li for each pokemon
  function addListItem(pokemon){
    //attach to pokemon list
    let pokedexList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    listPokemon.classList.add('list-group-item');

    //create button for each li
    let button = document.createElement('button');
    //add button classes and attributes
    button.classList.add('btn');
    button.classList.add('btn-primary');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#exampleModal');

    button.addEventListener('click', function (event) {
      showDetails(pokemon)
    })

    button.innerText = pokemon.name;
    listPokemon.appendChild(button);
    pokedexList.appendChild(listPokemon);
  }

  //pull pokemon list from url
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
  //call details from url
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = [];
      for (var i = 0; i < details.types.length; i++) {
        item.types.push(details.types[i].type.name);
      }
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      showModal(pokemon);
    })
  }

  function showModal(pokemon) {
    //modal title
    let modalTitle = $(".modal-title");
    let modalBody = $(".modal-body");
    //empty modal
    modalTitle.empty();
    modalBody.empty();
    
    let nameElement = $("<h1>" + pokemon.name + "</h1>");
    let imageElement = $('<img class="modal-img style="width:50%">');
    imageElement.attr("src", pokemon.imageUrl);
    let heightElement = $("<p>" + "height: " + pokemon.height + "m</p>");
    let typesElement = $("<p>" + "types: " + pokemon.types + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(typesElement);

  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    showModal: showModal,
    loadList: loadList,
    loadDetails: loadDetails
  }
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
