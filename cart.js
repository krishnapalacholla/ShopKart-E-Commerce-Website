
const items=document.getElementById("cartItems");
const totalSpan=document.getElementById("total");

const cart=JSON.parse(localStorage.getItem("cart"))||[];
let total=0;

cart.forEach(p=>{
 total+=p.price;
 const d=document.createElement("div");
 d.className="card";
 d.innerHTML=`<h4>${p.name}</h4><p>₹${p.price}</p>`;
 items.appendChild(d);
});

totalSpan.textContent=total;
