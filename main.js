function apipais(done){

    const url="https://restcountries.com/v3.1/all";

    fetch(url)
    .then(resp => resp.json())
    .then(data=>{
        done(data);
        
    })

    .catch((error) => {
        console.error(error);
    })
}


apipais(data=>{

    data.forEach(paises=>{
       const MostrarPais = document.createRange().createContextualFragment(`
       
       <div class="col">
       <div class="card">
         <img src="${paises.flags.png}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${paises.name.common}</h5>
           <p class="card-text">${paises.capital}</p>
         </div>
       </div>
     </div>
       
       `)

       const main = document.getElementById("card")
       main.append(MostrarPais);
    })
  
})


/*buscador por nombre*/

document.querySelector("form").addEventListener('submit',function(event){
    event.preventDefault();

    const buscar = document.querySelector(".form-control").value.toLowerCase();
    
    apipais(data=>{
        const main = document.getElementById("card")
        main.innerHTML=" ";

        const traerPais = data.filter(paises=>{
            return paises.name.common.toLowerCase().includes(buscar)
           
        })


        traerPais.forEach(pais=>{
            const MostrarPais = document.createRange().createContextualFragment(`
       
            <div class="col">
            <div class="card">
              <img src="${pais.flags.png}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${pais.name.common}</h5>
                <p class="card-text">${pais.capital}</p>
              </div>
            </div>
          </div>
            
            `)

            main.append(MostrarPais)

        })
    })
})