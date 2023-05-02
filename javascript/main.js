

const biggerContainer = document.querySelector(".bigger-contaier");

const thanks = document.getElementById("thanks");
const number = document.getElementById("number");

const buy = document.querySelectorAll(".js-buy");
 


const addProduct = document.querySelector("#add-pro");
const procontainer = document.querySelector("#pro-container");






addProduct.addEventListener("click" , (eo) => {
  
const newProduct =     `  

<div class="card mycard" style="width: 18rem;">
<img style="border-radius: 5px;" src="pexels-cottonbro-3826678.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">New Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a id="buy" href="#"  class="js-buy btn btn-primary">Buy</a>
 
</div>
</div>


`

procontainer.innerHTML += newProduct

})







 





// when i click on buy button
procontainer.addEventListener("click", (eo) => {
  
if (eo.target.classList == "js-buy btn btn-primary" ) {
      biggerContainer.classList.add("active");
    eo.preventDefault();

    thanks.style.display = "none";

    number.style.display = "block";
}


})








const submit = document.querySelector(".submit");

 


submit.addEventListener("click", (eo) => {
  thanks.style.display = "block";
  number.style.display = "none";

  setTimeout(() => {
    thanks.style.display = "none";
    biggerContainer.classList.remove("active");
  }, 2000);
})


















const dark = document.getElementById("dark");
const body = document.getElementById("body");

dark.addEventListener("click", (eo) => {
  body.classList.toggle("dark");
});





