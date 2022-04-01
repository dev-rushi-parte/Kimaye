let data=JSON.parse(localStorage.getItem("cart"))||[];
if(data.length==0){
  
 
  let img=document.createElement("img");
  img.src="https://codescandy.com/coach/rtl/assets/images/bag.svg";

  let empty=document.createElement("p");
  empty.textContent="Your Cart Is Empty";

  let shop=document.createElement("button");
  shop.textContent="Shop Fruits";
  shop.addEventListener("click", function (){
    window.location.href="products.html";
  })

document.getElementById("empty").append(img,empty,shop);
}
else{

// var Laodcount =  document.getElementById("count");
// Laodcount.textContent=data.length;

  data.innerHTML="";
  sumArr=[];
  
    data.map(function app(el){

  
    let tr1=document.createElement("tr");
   
    
    let img=document.createElement("img");
    img.src="data:image/png;base64,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";
     img.setAttribute("class","close_icon");
     img.addEventListener("click", ()=>{
          for(var i=0; i<data.length; i++){
               var current=data[i];
               if(current.name==el.name){
                   data.splice(i ,1);
                   let e= localStorage.setItem("cart" , JSON.stringify(data));
                   
                    location.reload();
                  
                   break;
               }
            }
     });
      let td1=document.createElement("td");
      td1.append(img);
      
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
    let qty=1;
  
    let x=1;

  let div=document.createElement("div");
  div.setAttribute("class","flex");
  
  let plus=document.createElement("button")
  plus.textContent="+";
  plus.setAttribute("class","pluse");
  plus.addEventListener("click",function (event){
       event.preventDefault();
     
           qty++;
       total_qty.textContent=qty;
    
         x=qty*el.price;
        
      
        total.textContent=x;

    
      
  })

  let hypen=document.createElement("button");
  hypen.textContent="-";
hypen.setAttribute("class","hypen");
hypen.addEventListener("click",function (event){
    event.preventDefault();
    if(qty>1){
          qty--;
       total_qty.textContent=qty;
    
         x=qty*el.price;
        total.textContent=x;

    }
    else{
        qty=1;
    }
  

})

    let total_qty=document.createElement("td");
    total_qty.textContent=qty;
    total_qty.setAttribute("class","qty");

    div.append(plus,total_qty,hypen);

    
     x=qty*el.price;
  

    let total=document.createElement("td");
    total.setAttribute("class","total")
   
    total.textContent=x;
    total_sum(x);
    sumArr.push(x);


   tr1.append(td1,td2,name,price,div,total);

   document.querySelector("#tbody").append(tr1)
   
});

function total_sum(x){
     var total=data.reduce((m,n)=>{
         return m+x;
     },0)
   console.log(total);
   
}
let sum=0;

 for(let i=0;i<sumArr.length;i++){
        sum +=sumArr[i];
    }
    console.log(sum);

  localStorage.setItem("sum",JSON.stringify(sum));
 document.getElementById("price").textContent=`₹ ${sum}`;
    document.getElementById("price1").textContent=`₹ ${sum}`; 
  }