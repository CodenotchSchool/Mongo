function postProfesional(){

    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let profesion = document.getElementById("profesion").value;
    let nacionalidad = document.getElementById("nacionalidad").value;
    let cantidadOscars = document.getElementById("cantidadOscars").value;
    let profesional = new Profesional(nombre,apellidos,profesion,nacionalidad,cantidadOscars)
    let url = 'http://localhost:3000/profesionales'
    let params = {
        headers:{"Content-type": "application/json; charset = UTF-8"},
        method: 'POST',
        body: JSON.stringify(profesional)
    };
      
    fetch(url, params)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        Swal.fire({
            icon: 'success',
            title: 'Profesional creado',
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

function getProfesional(){
    let id = document.getElementById("id").value;
    let url = id ? 
            'http://localhost:3000/profesionales?id=' + id : 
            'http://localhost:3000/profesionales';
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
                    <h3>Nombre: ${response.result[i].nombre} ${response.result[i].apellidos}</h3>
                    <ul>
                        <li>Profesión: ${response.result[i].profesion}</li>
                        <li>Nacionalidad: ${response.result[i].nacionalidad}</li>
                        <li>Cantidad de Oscars: ${response.result[i].cantidadOscars}</li>
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

function putProfesional(){
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let profesion = document.getElementById("profesion").value;
    let nacionalidad = document.getElementById("nacionalidad").value;
    let cantidadOscars = document.getElementById("cantidadOscars").value;
    let profesional = new Profesional(nombre,apellidos,profesion,nacionalidad,cantidadOscars)
    profesional.id = document.getElementById("id").value;
    let url = 'http://localhost:3000/profesionales'
    let params = {
        headers:{"Content-type": "application/json; charset = UTF-8"},
        method: 'PUT',
        body: JSON.stringify(profesional)
    };
      
    fetch(url, params)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        Swal.fire({
            icon: 'success',
            title: 'Profesional actualizado',
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

function delProfesional(){

    let profesional = new Profesional("","","","","");
    profesional.id = document.getElementById("id").value;
    let url = 'http://localhost:3000/profesionales'
    let params = {
        headers:{"Content-type": "application/json; charset = UTF-8"},
        method: 'DELETE',
        body: JSON.stringify(profesional)
    };
      
    fetch(url, params)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        Swal.fire({
            icon: 'success',
            title: 'Profesional borrado',
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
crear.addEventListener("click", postProfesional)
mostrar.addEventListener("click", getProfesional)
modificar.addEventListener("click", putProfesional)
eliminar.addEventListener("click", delProfesional)