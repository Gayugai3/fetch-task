var res=fetch("https://restcountries.com/v2/all")
.then((data)=>data.json())
.then((data1)=>{
    console.log(data1);
    var container = document.createElement("div");
    container.setAttribute("class","container");

    var row = document.createElement("div");
    row.setAttribute("class","row");


    for(var i=0;i<data1.length;i++){
       var col=document.createElement("div");
       col.setAttribute("class","col-lg-4 col-sm-12");
       col.innerHTML = `<div class="smallbox">
       <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${data1[i].name}
            </div>
           <img src="${data1[i].flag}" class="card-img-top" alt="...">
           <div class="card-body">
           <p class="card-text">Capital : ${data1[i].capital}</p>
           <p class="card-text">Region : ${data1[i].region}</p>
           <p class="card-text">Country code : ${data1[i].alpha3Code}</p>
           <p class="card-text">Latitude : ${data1[i].latlng[0]}</p>
           <p class="card-text">Longitude : ${data1[i].latlng[1]}</p>
           <a href="#" class="btn btn-primary">Click for Whether</a>
           </div>
       </div>
   </div>`;
     row.append(col);
     container.append(row);
     document.body.append(container);
    }
})
.catch((error)=>console.log(error));