 let arr=JSON.parse(localStorage.getItem("cart"))|| [];
let data=JSON.parse(localStorage.getItem("api"));
console.log(data);



let div=document.createElement("div");

let img=document.createElement("img");
img.src=data.img;
img.setAttribute("class","main_img")

div.append(img);
// -----------------------------------------------------------
let div2=document.createElement("div");

let nam=document.createElement("p");
nam.setAttribute("class","nam");
nam.textContent=data.name;

let des=document.createElement("p");
des.setAttribute("class","des");
des.textContent=data.des;

let loca=document.createElement("p");
loca.setAttribute("class","loca");
loca.textContent=data.location;

let wei=document.createElement("p");
wei.setAttribute("class","wei");
wei.textContent=data.weight;

let pri=document.createElement("p");
pri.setAttribute("class","pri");
pri.textContent=`₹ ${data.price}`;

let btn=document.createElement("button");
btn.setAttribute("class","btn");
btn.textContent="Add To Cart"
btn.addEventListener("click", function show(){
            arr.push(data)
         localStorage.setItem("cart",JSON.stringify(arr));
            window.location.reload();
           
        })
div2.append(nam,des,loca,wei,pri,btn);
//----------------------------------------------------------------------

let div3=document.createElement("div");

let prom=document.createElement("p");
prom.setAttribute("class","prom");
prom.textContent="KIMAYE PROMISE";

let des2=document.createElement("p");
des2.setAttribute("class","des2");
des2.textContent=data.des2;

div3.append(prom,des2);

//----------------------------------------------------------------

let div4=document.createElement("div");

let img2=document.createElement("img");
img2.setAttribute("class","img2");
img2.src=data.img2;

div4.append(img2);

//----------------------------------------------------------------

let div5=document.createElement("div");

let img3=document.createElement("img");
img3.setAttribute("class","img3");
img3.src=data.img3;

div5.append(img3);
//---------------------------------------------------------------------
let div6=document.createElement("div");

let health=document.createElement("p");
health.setAttribute("class","health");
health.textContent="HEALTH BENEFITS";

let des3=document.createElement("p");
des3.setAttribute("class","des3");
des3.textContent=data.des3;

let nutrition=document.createElement("p");
nutrition.setAttribute("class","nutrition");
nutrition.textContent="NUTRITIONAL INFORMATION";



div6.append(health,des3,nutrition);


document.getElementById("show").append(div,div2,div3,div4,div5,div6);