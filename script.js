
const role=localStorage.getItem("role")||"customer";
if(role==="admin"){
 document.getElementById("adminLink").style.display="inline-block";
}

const products=[
{id:1,name:"Wireless Headphones",price:1999,img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6572/6572448_sd.jpg"},
{id:2,name:"Smart Watch",price:2499,img:"https://tse2.mm.bing.net/th/id/OIP._jV-c3f_SJ67kI_1SSlJDAHaHZ?w=1000&h=999&rs=1&pid=ImgDetMain&o=7&rm=3"},
{id:3,name:"Men's Jacket",price:1499,img:"https://m.media-amazon.com/images/I/7155p8b+nBL._AC_UL1280_.jpg"},
{id:4,name:"Sneakers",price:1899,img:"https://cdn.sanity.io/images/c1chvb1i/production/30c7df60f0b448018841ecf50b4c4b01b3560062-1200x735.jpg/artificial-intelligence-nike-sneakers-01.jpg"},
{id:5,name:"JavaScript Book",price:599,img:"https://www.designveloper.com/wp-content/uploads/2021/01/Classic-Books-about-JavaScript-The-Definitive-Guide-1024x1024.jpg"},
{id:6,name:"DSA Book",price:799,img:"https://m.media-amazon.com/images/I/61Q8C9KZEvL._SL1400_.jpg"}
];

const list=document.getElementById("productsList");
const cartCount=document.getElementById("cartCount");
const search=document.getElementById("searchInput");

function getCart(){return JSON.parse(localStorage.getItem("cart"))||[]}
function saveCart(c){localStorage.setItem("cart",JSON.stringify(c));cartCount.textContent=c.length}

function render(data){
 list.innerHTML="";
 data.forEach(p=>{
  const d=document.createElement("div");
  d.className="card";
  d.innerHTML=`
   <img src="${p.img}">
   <h3>${p.name}</h3>
   <p>₹${p.price}</p>
   <button class="btn">Add to Cart</button>
   <button class="btn" style="background:#e11d48">Wishlist</button>
  `;
  d.children[3].onclick=()=>{
   const c=getCart();c.push(p);saveCart(c);
  };
  d.children[4].onclick=()=>{
   const w=JSON.parse(localStorage.getItem("wishlist"))||[];
   w.push(p);
   localStorage.setItem("wishlist",JSON.stringify(w));
  };
  list.appendChild(d);
 });
}

search.oninput=()=>{
 const q=search.value.toLowerCase();
 render(products.filter(p=>p.name.toLowerCase().includes(q)));
};

render(products);
cartCount.textContent=getCart().length;
