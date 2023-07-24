function getData(){
    let promes=fetch("https://fakestoreapi.com/products/", {
        method: "GET"
    });
    promes.then((Response)=>{
        Response.json()
        .then((data)=>{
            createCards(data);
        })
        .catch(
            (error)=>{console.error(error, "problema con json, error");
         });
    }) .catch((error)=>{
        console.error(error, "ocurrio un error en la solicitud");
    });
}//get data
getData();
//function createCards(data){
//    data.forEach(producto=>{
//       console.log(producto.id, producto.title);
  //  });
//}//createcards

let mainProds= document.getElementById("mainProds");
function createCards(prods){
    prods.forEach(prod=>{
        mainProds.insertAdjacentHTML("beforeend", 
        `
        <div class="card" style="width: 18rem;">
        <img src="${prod.image}" class="card-img-top" alt="${prod.description}">
        <div class="card-body">
          <h5 class="card-title">${prod.title}</h5>
          <p class="card-text"><strong>${prod.category}</strong></p>
          <p class="card-text">${prod.description.slice(0.80)}...</p>
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal_${prod.id}">
            mas info
          </button>
          </div>
          <!-- Modal -->
          <div class="modal fade" id="exampleModal_${prod.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">${prod.title}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                ${prod.description}
                <p class="text-end"><strong> $ ${prod.price} USD </strong></p>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
                </div>
                </div>
                </div>

` );
   });
}
