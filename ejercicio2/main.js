const url = 'https://pokeapi.co/api/v2/pokemon'

// Exercici 2.0
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

// Exercici 2.1 Async/await
document.querySelector('#btn1').addEventListener('click', async (e) => {
    e.preventDefault()
    try {
        const inicioPokemon = new Date().getTime()

        for (let i = 1; i <= 12; i++) {
            let response = await fetch(url + '/' + i)
            data = await response.json()
            await insertaCards(data)
        }

        const finalPokemon = new Date().getTime()
        const duracionPokemon = finalPokemon - inicioPokemon

        document.querySelector('#tiempo1').innerHTML = `TIEMPO: ${duracionPokemon} milisegundos`
    } catch (error) {
        console.error(error)
    }
})

// Exercici 2.2 .then/.catch/.finally
document.querySelector('#btn2').addEventListener('click', (e) => {
    e.preventDefault()

    const inicioPokemon = new Date().getTime()
    
    for (let i = 1; i <= 12; i++) {

        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(res => res.json())
        .then(resJSON => {
            console.log('resJSON', resJSON.name)
            insertaCards(resJSON)
        })
        .catch(err => console.log(err))
        .finally(console.log('Petición resuelta'))

    }

    const finalPokemon = new Date().getTime()
    const duracionPokemon = finalPokemon - inicioPokemon

    document.querySelector('#tiempo2').innerHTML = `TIEMPO: ${duracionPokemon} milisegundos`
})

// Exercici 2.3 Promise.All