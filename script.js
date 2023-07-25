//again data.json() is a giving a 2nd promise
//to access the value inside 2nd promise use one more .then
var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>{
  console.log(data1);
  for(var i=0;i<data1.length;i++){
    console.log(data1[i].name);
    var div=document.createElement("div");
    //div.setAttribute("class","row")
    div.innerHTML=`<div class="card" style="width: 18rem;">
    <img src="${data1[i].flag}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${data1[i].name}</h5>
    <h6 class="card-title">${data1[i].region}</h6>
    
      <p class="card-text">${data1[i].subregion}</p>
    </div>
  </div>`
  
    document.body.append(div);
  }
  // <div class="row row-cols-1 row-cols-md-3">
  // <div class="col mb-4">
  //   <div class="card">
  //     <img src="${data1[i].flag}" class="card-img-top" alt="...">
  //     <div class="card-body">
  //       <h5 class="card-title">${data1[i].name}</h5>
  //       <p class="card-text">${data1[i].region}</p>
  //       <p class="card-text"><small class="text-muted">${data1[i].subregion}</small></p>
  //     </div>
  //   </div>
  // </div></div>`
  //   <div class="col mb-4">
  //     <div class="card">
  //       <img src="${data1[i].flag}" class="card-img-top" alt="...">
  //       <div class="card-body">
  //         <h5 class="card-title">${data1[i].name}</h5>
  //         <p class="card-text">${data1[i].region}</p>
  //         <p class="card-text"><small class="text-muted">${data1[i].subregion}</small></p>
  //       </div>
  //     </div>
  //   </div>
  //   <div class="col mb-4">
  //     <div class="card">
  //       <img src="${data1[i].flag}" class="card-img-top" alt="...">
  //       <div class="card-body">
  //         <h5 class="card-title">${data1[i].name}</h5>
  //         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
  //       </div>
  //     </div>
  //   </div></div>`

  //   // <div class="card-deck">
  //   // <div class="card">
  //   //   <img src="${data1[i].flag}" class="card-img-top" alt="...">
  //   //   <div class="card-body">
  //   //     <h5 class="card-title">${data1[i].name}</h5>
  //   //     <p class="card-text">${data1[i].region}</p>
  //   //     <p class="card-text"><small class="text-muted">${data1[i].subregion}</small></p>
  //   //   </div>
  //   // </div></div></div>
  // //   <div class="card">
  // //     <img src="${data1[i].flag}" class="card-img-top" alt="...">
  // //     <div class="card-body">
  // //       <h5 class="card-title">${data1[i].name}</h5>
  // //       <p class="card-text">${data1[i].region}</p>
  // //       <p class="card-text"><small class="text-muted">${data1[i].subregion}</small></p>
  // //     </div>
  // //   </div>
  // //   <div class="card">
  // //     <img src="${data1[i].flag}" class="card-img-top" alt="...">
  // //     <div class="card-body">
  // //       <h5 class="card-title">${data1[i].name}<</h5>
  // //       <p class="card-text">${data1[i].region}</p>
  // //       <p class="card-text"><small class="text-muted">${data1[i].subregion}</small></p>
  // //     </div>
  // //   </div>
  // // </div>`
  
    
  // document.body.append(div);
  // }
});

{/* <div class="row row-cols-1 row-cols-md-2">
  <div class="col mb-4">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div> */}




{/* <div class="card" style="width: 18rem;">
      <img src="${data1[i].flag}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${data1[i].name}</h5>
      <h6 class="card-title">${data1[i].region}</h6>
      
        <p class="card-text">${data1[i].subregion}</p>
      </div>
    </div> */}


