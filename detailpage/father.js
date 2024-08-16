
fetch("father.json")
.then(demo => demo.json())
.then(demo => {
 var card=""
 for(var data of demo){
   card+=`
   <div class=" col-md-6 col-lg-3 two-blocks" style="width: 19rem;">
<div class="cards mt-3" >
<a href="/homepage/detail.html?&id=${data.id}&img=${data.img}&description=${data.description}&title=${data.title}&end=${data.end}"><img src="${data.img}" class="card-img-top" alt="..."></a>
<div class="card-body">
<h5 class="card-title">${data.title}</h5>
<h6 class="card-subtitle mb-2 text-muted ">${data.price}</h6>


</div>
</div>
</div> 
   
   `
   
   document.getElementById("fathercard").innerHTML = card;
 }
//   card.addEventListener('click', (event)=> {
//     var positionclick = event.target;
//     if(positionclick.classList.contains('addtocart')){
//         alert('1')
//     }
//   })
})