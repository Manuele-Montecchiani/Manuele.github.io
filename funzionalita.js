const pokemonCard = document.querySelector('[data-pokemon-card]');
const pokemonName = document.querySelector('[data-pokemon-name]');
const pokemonImg = document.querySelector('[data-pokemon-img]');
const pokemonImgContainer = document.querySelector('[data-pokemon-img-container]');
const pokemonId = document.querySelector('[data-pokemon-id]');
const pokemonTypes = document.querySelector('[data-pokemon-types]');
const pokemonStats = document.querySelector('[data-pokemon-stats]');




function searchPokemon(e) {
  e.preventDefault();
  const { value } = e.target.pokemon;
  fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then(data => data.json())
    .then(response => renderPokemonData(response))

}

const renderPokemonData = data => {
  const sprite = data.sprites.front_default;
  const { stats, types } = data;

  pokemonName.textContent = data.name;
  pokemonImg.setAttribute('src', sprite);
  setCardColor(types);
  renderPokemonTypes(types);
  renderPokemonStats(stats);
}


const setCardColor = types => {
  typeColors.default;

}

const renderPokemonTypes = types => {
  pokemonTypes.innerHTML = '';
  types.forEach(type => {
    const typeTextElement = document.createElement("div");
    typeTextElement.style.color = typeColors[type.type.name];
    typeTextElement.textContent = type.type.name;
    pokemonTypes.appendChild(typeTextElement);
  });
}


const renderPokemonStats = stats => {
  pokemonStats.innerHTML = '';
  stats.forEach(stat => {
    const statElement = document.createElement("div");
    const statElementName = document.createElement("div");
    const statElementAmount = document.createElement("div");
    statElementName.textContent = stat.stat.name;
    statElementAmount.textContent = stat.base_stat;
    statElement.appendChild(statElementName);
    statElement.appendChild(statElementAmount);
    pokemonStats.appendChild(statElement);
  });
}


const typeColors = {
  electric: '#FFEA70',
  normal: '#B09398',
  fire: 'red',
  water: '#0596C7',
  ice: '#AFEAFD',
  rock: '#999799',
  flying: 'rgb(73, 163, 223)',
  grass: '#4A9681',
  psychic: 'rgb(172, 66, 166)',
  ghost: '#561D25',
  bug: '#A2FAA3',
  poison: '#795663',
  ground: '#D2B074',
  dragon: '#DA627D',
  steel: '#1D8A99',
  fighting: '#2F2F2F',
  default: '#2A1A1F',
};
