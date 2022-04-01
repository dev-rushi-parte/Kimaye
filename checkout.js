let data=JSON.parse(localStorage.getItem("cart"))||[];
console.log(data)

data.map(function app(el){
     let tr1=document.createElement("tr");

     let productimg=document.createElement("img");
    productimg.src=el.img;
    productimg.setAttribute("class","productimg");
    
    let td2=document.createElement("tb2");
   td2.append(productimg);

     let name=document.createElement("td");
    name.setAttribute("class","name")
    name.textContent=el.name;

       let price=document.createElement("td");
    price.textContent=el.price;
    price.setAttribute("class","price");
    tr1.append(td2,name,price);
    document.querySelector("#tbody").append(tr1);
})

let sum=JSON.parse(localStorage.getItem("sum"));

console.log(sum);

 document.querySelector("#price").textContent=`₹ ${sum}`;
  document.querySelector("#price1").textContent=`₹ ${sum}`;
// let price1=document.getElementById("price");
// price1.innerText="450"

document.querySelector(".continue").addEventListener("click", function (){
  let number=document.getElementById("card_number").value;
number.toString();
let mm=document.getElementById("mm").value;
mm.toString();
let cvv=document.getElementById("cvv").value;
cvv.toString();
 


if((number==9082106716) &&( mm==1212) && (cvv==123)){

 alert("Payment Done")
 window.location.href="home.html";
 localStorage.removeItem("cart");
}

else{
  
  alert("Wrong details")

}
})