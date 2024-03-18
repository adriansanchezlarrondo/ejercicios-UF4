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
    document.querySelector('#cards').innerHTML = ''

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
    document.querySelector('#cards').innerHTML = ''
    
    const inicioPokemon = new Date().getTime()
    
    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
    .then(res => res.json())
    .then(resJSON => {

        insertaCards(resJSON)

        fetch(`https://pokeapi.co/api/v2/pokemon/2`)
        .then(res2 => res2.json())
        .then(resJSON2 => {

            insertaCards(resJSON2)

            fetch(`https://pokeapi.co/api/v2/pokemon/3`)
            .then(res3 => res3.json())
            .then(resJSON3 => {
    
                insertaCards(resJSON3)
                
                fetch(`https://pokeapi.co/api/v2/pokemon/4`)
                .then(res4 => res4.json())
                .then(resJSON4 => {
        
                    insertaCards(resJSON4)
                    
                    fetch(`https://pokeapi.co/api/v2/pokemon/5`)
                    .then(res5 => res5.json())
                    .then(resJSON5 => {
            
                        insertaCards(resJSON5)
                        
                        fetch(`https://pokeapi.co/api/v2/pokemon/6`)
                        .then(res6 => res6.json())
                        .then(resJSON6 => {
                
                            insertaCards(resJSON6)
                            
                            fetch(`https://pokeapi.co/api/v2/pokemon/7`)
                            .then(res7 => res7.json())
                            .then(resJSON7 => {
                    
                                insertaCards(resJSON7)
                                
                                fetch(`https://pokeapi.co/api/v2/pokemon/8`)
                                .then(res8 => res8.json())
                                .then(resJSON8 => {
                        
                                    insertaCards(resJSON8)
                                    
                                    fetch(`https://pokeapi.co/api/v2/pokemon/9`)
                                    .then(res9 => res9.json())
                                    .then(resJSON9 => {
                            
                                        insertaCards(resJSON9)
                                        
                                        fetch(`https://pokeapi.co/api/v2/pokemon/10`)
                                        .then(res10 => res10.json())
                                        .then(resJSON10 => {
                                
                                            insertaCards(resJSON10)
                                            
                                            fetch(`https://pokeapi.co/api/v2/pokemon/11`)
                                            .then(res11 => res11.json())
                                            .then(resJSON11 => {
                                    
                                                insertaCards(resJSON11)
                                                
                                                fetch(`https://pokeapi.co/api/v2/pokemon/12`)
                                                .then(res12 => res12.json())
                                                .then(resJSON12 => {
                                        
                                                    insertaCards(resJSON12)
                                                    
                                                    const finalPokemon = new Date().getTime()
                                                    const duracionPokemon = finalPokemon - inicioPokemon
                                                    document.querySelector('#tiempo2').innerHTML = `TIEMPO: ${duracionPokemon} milisegundos`
                                                
                                                })
                                                .catch(err => console.log(err))
                                                .finally(console.log('12a Petición resuelta'))
                
                                            })
                                            .catch(err => console.log(err))
                                            .finally(console.log('11a Petición resuelta'))
            
                                        })
                                        .catch(err => console.log(err))
                                        .finally(console.log('10a Petición resuelta'))
        
                                    })
                                    .catch(err => console.log(err))
                                    .finally(console.log('9a Petición resuelta'))
    
                                })
                                .catch(err => console.log(err))
                                .finally(console.log('8a Petición resuelta'))
    
                            })
                            .catch(err => console.log(err))
                            .finally(console.log('7a Petición resuelta'))
                
                        })
                        .catch(err => console.log(err))
                        .finally(console.log('6a Petición resuelta'))
            
                    })
                    .catch(err => console.log(err))
                    .finally(console.log('5a Petición resuelta'))
        
                })
                .catch(err => console.log(err))
                .finally(console.log('4a Petición resuelta'))
    
            })
            .catch(err => console.log(err))
            .finally(console.log('3a Petición resuelta'))
    
        })
        .catch(err => console.log(err))
        .finally(console.log('2a Petición resuelta'))
    
    })
    .catch(err => console.log(err))
    .finally(console.log('1a Petición resuelta'))
})

// Exercici 2.3 Promise.All
document.querySelector('#btn3').addEventListener('click', async (e) => {
    e.preventDefault()
    document.querySelector('#cards').innerHTML = ''

    const inicioPokemon = new Date().getTime()

    const arrayPokemons = []
    for (let i = 0; i < 12; i++) {

        arrayPokemons[i] = fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`).then(res => res.json())

    }
    
    const response = await Promise.all(arrayPokemons)

    for (let i = 0; i < 12; i++) {

        insertaCards(response[i])

    }

    const finalPokemon = new Date().getTime()
    const duracionPokemon = finalPokemon - inicioPokemon

    document.querySelector('#tiempo3').innerHTML = `TIEMPO: ${duracionPokemon} milisegundos`
})