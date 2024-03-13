const url = 'https://pokeapi.co/api/v2/pokemon'

// meter la funcion de escucha del boton

async function pokemons() {
    try {
        const inicioPokemon = new Date().getTime()
        for (let i = 1; i <= 12; i++) {
            let res = await fetch(url + '/' + i)
            res = await res.json()
            await insertaCards(res)
        }
        const finalPokemon = new Date().getTime()
        const duracionPokemon = finalPokemon - inicioPokemon
        console.log('duracionPokemon', duracionPokemon);
        document.querySelector('#tiempo1').innerHTML = `TIEMPO: ${duracionPokemon} milisegundos`
    } catch (error) {
        console.error(error)
    }
}
pokemons()

// Exercici 2.0
// Exercici 2.1 Async/await
async function insertaCards(json){
    document.querySelector('#cards').innerHTML += `
        <div class="col-md-2">
            <div class="card shadow">
                <img src="${json.sprites.front_default}" class="card-img-top" alt="${json.name}">
                <div class="card-body">
                    <h5 class="card-title text-capitalize">${json.name}</h5>
                    <div class="card-text">ID: ${json.id}</div>
                    <div class="card-text">Tipo: ${json.types.map(type => type.type.name).join(', ')}</div>
                    <div class="card-text">Peso: ${json.weight}</div>
                    <div class="card-text">Altura: ${json.height}</div>
                </div>
            </div>
        </div>
    `
}

// Exercici 2.2 .then/.catch/.finally

// Exercici 2.3 Promise.All