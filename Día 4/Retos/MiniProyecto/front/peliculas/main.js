function postPelicula(){

    let titulo = document.getElementById("titulo").value;
    let anyoLanzamiento = document.getElementById("anyoLanzamiento").value;
    let actores = document.getElementById("actores").value.split(',');
    let nacionalidad = document.getElementById("nacionalidad").value;
    let directores = document.getElementById("directores").value.split(',');
    let escritores = document.getElementById("escritores").value.split(',');
    let lengua = document.getElementById("lengua").value;
    let plataforma = document.getElementById("plataforma").value;
    let esMCU = document.getElementById("esMCU").value;
    let personajePrincipal = document.getElementById("personajePrincipal").value;
    let productor = document.getElementById("productor").value;
    let distribuidor = document.getElementById("distribuidor").value;
    let genero = document.getElementById("genero").value;
    let pelicula = new Pelicula(titulo,anyoLanzamiento,actores,nacionalidad,directores,escritores,lengua,plataforma,esMCU,personajePrincipal,productor,distribuidor,genero)
    let url = 'http://localhost:3000/peliculas'
    let params = {
        headers:{"Content-type": "application/json; charset = UTF-8"},
        method: 'POST',
        body: JSON.stringify(pelicula)
    };
      
    fetch(url, params)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        Swal.fire({
            icon: 'success',
            title: 'Pelicula creada',
            text: 'ID: ' + response._id
          })
      })
      .catch(err => {
        Swal.fire({
            icon: 'error',
            title: 'Error inesperado',
          })
          console.log(err);
      });
}

function getPelicula(){
    let id = document.getElementById("id").value;
    let url = id ? 
            'http://localhost:3000/peliculas?id=' + id : 
            'http://localhost:3000/peliculas';
    console.log(url);
    let params = {
        headers:{"Content-type": "application/json; charset = UTF-8"},
        method: 'GET',
    };

    fetch(url, params)
    .then(response => response.json())
    .then(response => {
        if(response.error){
            console.log(response.error);
        }else{
            let container = document.getElementById("card-container");
            container.innerHTML = "";
            for (let i = 0; i < response.result.length; i++) {
                container.innerHTML +=`            
                <div class="card">
                    <h3>Título: ${response.result[i].titulo}</h3>
                    <ul>
                        <li>Año de Lanzamiento: ${response.result[i].anyoLanzamiento}</li>
                        <li>Actores: ${response.result[i].actores.toString()}</li>
                        <li>Directores: ${response.result[i].directores.toString()}</li>
                        <li>Escritores: ${response.result[i].escritores.toString()}</li>
                        <li>Nacionalidad: ${response.result[i].nacionalidad}</li>
                        <li>lengua: ${response.result[i].lengua}</li>
                        <li>Plataforma: ${response.result[i].plataforma}</li>
                        <li>Es de Marvel: ${response.result[i].esMCU}</li>
                        <li>Personaje Principal: ${response.result[i].personajePrincipal}</li>
                        <li>Productor: ${response.result[i].productor}</li>
                        <li>Distribuidor: ${response.result[i].distribuidor}</li>
                        <li>Género: ${response.result[i].genero}</li>
                        <li>ID: ${response.result[i]._id}</li>
                    </ul>
                </div>   `
            }

        }
    })
    .catch(err => {
        Swal.fire({
            icon: 'error',
            title: 'Error inesperado',
          })
          console.log(err);
      });
}

function putPelicula(){
    let titulo = document.getElementById("titulo").value;
    let anyoLanzamiento = document.getElementById("anyoLanzamiento").value;
    let actores = document.getElementById("actores").value.split(',');
    let nacionalidad = document.getElementById("nacionalidad").value;
    let directores = document.getElementById("directores").value.split(',');
    let escritores = document.getElementById("escritores").value.split(',');
    let lengua = document.getElementById("lengua").value;
    let plataforma = document.getElementById("plataforma").value;
    let esMCU = document.getElementById("esMCU").value;
    let personajePrincipal = document.getElementById("personajePrincipal").value;
    let productor = document.getElementById("productor").value;
    let distribuidor = document.getElementById("distribuidor").value;
    let genero = document.getElementById("genero").value;
    let pelicula = new Pelicula(titulo,anyoLanzamiento,actores,nacionalidad,directores,escritores,lengua,plataforma,esMCU,personajePrincipal,productor,distribuidor,genero)
    pelicula.id = document.getElementById("id").value;
    let url = 'http://localhost:3000/peliculas'
    let params = {
        headers:{"Content-type": "application/json; charset = UTF-8"},
        method: 'PUT',
        body: JSON.stringify(pelicula)
    };
      
    fetch(url, params)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        Swal.fire({
            icon: 'success',
            title: 'Pelicula actualizada',
          })
      })
      .catch(err => {
        Swal.fire({
            icon: 'error',
            title: 'Error inesperado',
          })
          console.log(err);
      });
}

function delPelicula(){

    let pelicula = new Pelicula("","","","","","","","","","","","","");
    pelicula.id = document.getElementById("id").value;
    let url = 'http://localhost:3000/peliculas'
    let params = {
        headers:{"Content-type": "application/json; charset = UTF-8"},
        method: 'DELETE',
        body: JSON.stringify(pelicula)
    };
      
    fetch(url, params)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        Swal.fire({
            icon: 'success',
            title: 'Pelicula borrada',
          })
      })
      .catch(err => {
        Swal.fire({
            icon: 'error',
            title: 'Error inesperado',
          })
          console.log(err);
      });
}


let crear = document.getElementById("btn-post")
let mostrar = document.getElementById("btn-get")
let modificar = document.getElementById("btn-put")
let eliminar = document.getElementById("btn-del")
crear.addEventListener("click", postPelicula)
mostrar.addEventListener("click", getPelicula)
modificar.addEventListener("click", putPelicula)
eliminar.addEventListener("click", delPelicula)