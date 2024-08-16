// var cartIcon = document.querySelector('.icon-cart'); 
// var closecart = document.querySelector('.close'); 
// var body = document.querySelector('body');
// var showcardhtml= document.querySelector('#showdata')

// var showcard= [];

// cartIcon.addEventListener('click', () => {
//     body.classList.toggle('showcart')
// } )

// closecart.addEventListener('click' , () => {
//     body.classList.toggle('showcart')

// })

// const addDatatoHTML = () => {
//     showcardhtml.innerHTML= "";
//     if(showcard.length > 0){
//         showcard.forEach(product =>{

//             let newproduct = document.createElement('div')
//             newproduct.classList.add('item')

//             newproduct.innerHTML=`<div class="col-sm-12 col-md-6 col-lg-3 two-blocks" style="width: 19rem;">
//                  <div class="cards mt-3" >
//                    <a href="#"><img src="${product.img}" class="card-img-top" alt="..."></a>
//                    <div class="card-body">
//                      <h5 class="card-title">${product.title}</h5>
//                   <h6 class="card-subtitle mb-2 text-muted ">${product.price}</h6>
//                      <button class="btn btn-outline-success">Add to Cart</button>
            
//              </div>
//              </div>
//                </div> `
//             showcardhtml.appendChild(newproduct)
//         })
//     }
// }

// const initApp = () => {
//   fetch('eidcard.json')
//   .then(response => response.json())
//   .then(data => {
//     showcard = data
//     addDatatoHTML()
//   })
// }
// initApp()

       fetch("card.json")
       .then(res => res.json())
       .then(res => {
        var shop=""
        for(var main of res){
          shop+=`
           <div class="one_Image item col-12 col-sm-12 col-md-6 col-lg-3 two-blocks">
          <div class="card mt-3" >
            <img src="${main.img}" class="card-img-top" alt="...">
            <div class="card-body ">
            <a href="birthday.html?id=${main.id}&img=${main.img}&description=${main.description}&title=${main.title}&end=${main.end}"class="btn btn-outline-dark">${main.button}</a>
      </div>
    </div>
        </div>
          
          
          `
          document.getElementById("cardshow").innerHTML= shop
        }
       })



 



         fetch("eidcard.json")
         .then(demo => demo.json())
         .then(demo => {
          var card=""
          for(var data of demo){
            card+=`
            <div class=" col-md-6 col-lg-3 two-blocks" style="width: 19rem;">
    <div class="cards mt-3" >
      <a href="detail.html?id=${data.id}&img=${data.img}&description=${data.description}&title=${data.title}&end=${data.end}"><img src="${data.img}" class="card-img-top" alt="..."></a>
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted ">${data.price}</h6>

</div>
</div>
  </div> 
            
            `
            document.getElementById("showdata").innerHTML = card;
          }
         })

   


         

         fetch("greetingcard.json")
         .then(demo => demo.json())
         .then(demo => {
          var card=""
          for(var data of demo){
            card+=`
            <div class=" col-md-6 col-lg-3 two-blocks" style="width: 19rem;">
    <div class="cards mt-3" >
      <a href="detail.html?&id=${data.id}&img=${data.img}&description=${data.description}&title=${data.title}&end=${data.end}"><img src="${data.img}" class="card-img-top" alt="..."></a>
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted ">${data.price}</h6>
      

</div>
</div>
  </div> 
            
            `
            
            document.getElementById("greetingcard").innerHTML = card;
          }
        //   card.addEventListener('click', (event)=> {
        //     var positionclick = event.target;
        //     if(positionclick.classList.contains('addtocart')){
        //         alert('1')
        //     }
        //   })
         })


         