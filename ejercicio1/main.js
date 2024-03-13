// Exercici 1.1 Taula amb informació dels usuaris
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(resJson => {
    for (let i = 0; i < 5; i++) {
        let [name, surname] = resJson[i].name.split(" ");
        document.querySelector('#tbodyListUsuarios').innerHTML += `
        <tr>
            <th id="${i}" scope="row">${resJson[i].id}</th>
            <td id="${i}">${name}</td>
            <td id="${i}">${surname}</td>
            <td id="${i}">${resJson[i].email}</td>
        </tr>
        `
    }

    // Exercici 1.2 Ficha usuaris
    document.querySelector('#tbodyListUsuarios').addEventListener('click', (e) => {
        document.querySelector('#comentariosPost').innerHTML = ''

        document.querySelector('#cardUsu').innerHTML =
        `
        <h5 class="card-title">${resJson[e.target.id].name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Datos</h6>
        <p><strong>Username: </strong> ${resJson[e.target.id].username}</p>
        <p><strong>City: </strong> ${resJson[e.target.id].address.city}</p>
        <p><strong>Phone: </strong> ${resJson[e.target.id].phone}</p>
        <a href="${resJson[e.target.id].website}" class="card-link">${resJson[e.target.id].website}</a>
        `

        // Exercici 1.3 Publicacions publicades
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${resJson[e.target.id].id}`)
        .then(res2 => res2.json())
        .then(resJson2 => {
            document.querySelector('#listPosts').innerHTML = ''
            
            let nuevoJSON = resJson2.slice(-5) // Me quedo con los ultimos cinco posts
            console.log('nuevoJSON', nuevoJSON);
            
            nuevoJSON.forEach(posts => {
                document.querySelector('#listPosts').innerHTML += `
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div id="${posts.id}" class="ms-2 me-auto">
                        <div id="${posts.id}" class="fw-bold">${posts.title}</div>
                        <div id="${posts.id}">${posts.body}</div>
                    </div>
                    <span id="nComentarios" class="badge bg-primary rounded-pill">5</span>
                </li>
                `
            })

            // Exercici 1.4 Comentaris
            document.querySelector('#listPosts').addEventListener('click', (e) => {
                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${e.target.id}`)
                .then(res3 => res3.json())
                .then(resJson3 => {
                    document.querySelector('#comentariosPost').innerHTML = ''

                    document.querySelector('#nComentarios').innerHTML = resJson3.length

                    resJson3.forEach(comentarios => {
                        document.querySelector('#comentariosPost').innerHTML += `
                        <div class="card mt-2">
                            <div class="card-body">
                                <h5 class="card-title">${comentarios.name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${comentarios.email}</h6>
                                <p class="card-text">${comentarios.body}</p> 
                            </div>
                        </div>
                        `
                    })
                })
            })

        })
        .catch(err => console.log(err))
        .finally(console.log('2a Petición resuelta'))            
    })
})
.catch(err => console.log(err))
.finally(console.log('1a Petición resuelta'))