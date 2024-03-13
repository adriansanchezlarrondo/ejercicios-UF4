const url = 'https://pokeapi.co/api/v2/pokemon'

async function pokemons() {
    try {
        for (let i = 1; i <= 12; i++) {
            let res = await fetch(url + '/' + i)
            res = await res.json()
            await insertaCards(res)
        }
    } catch (error) {
        console.error(error);
    }
}
pokemons()

// Exercici 2.0
async function insertaCards(json){
    console.log(json);
    document.querySelector('#cards').innerHTML += `
        <div class="col-md-2">
            <div class="card shadow">
                <img src="${json.sprites.front_default}" class="card-img-top" alt="Bulbasaur">
                <div class="card-body">
                    <h5 class="card-title text-capitalize">${json.name}</h5>
                    <div class="card-text">ID: ${json.id}</div>
                    <div class="card-text">Tipo: ${json.name}</div>
                    <div class="card-text">Peso: ${json.weight}</div>
                    <div class="card-text">Altura: ${json.height}</div>
                </div>
            </div>
        </div>
    `
}

// Exercici 2.1 Async/await

// Exercici 2.2 .then/.catch/.finally

// Exercici 2.3 Promise.All