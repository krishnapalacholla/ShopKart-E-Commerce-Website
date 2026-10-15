
const list=document.getElementById("wishlistItems");
let wish=JSON.parse(localStorage.getItem("wishlist"))||[];

function save(){localStorage.setItem("wishlist",JSON.stringify(wish));}

function render(){
 list.innerHTML="";
 if(wish.length===0){
  list.innerHTML="<p>Your wishlist is empty</p>";
  return;
 }
 wish.forEach((p,i)=>{
  const d=document.createElement("div");
  d.className="card";
  d.innerHTML=`
   <img src="${p.img}">
   <h3>${p.name}</h3>
   <p>₹${p.price}</p>
   <button class="btn" style="background:#dc2626">Remove</button>
  `;
  d.querySelector("button").onclick=()=>{
   wish.splice(i,1);
   save();
   render();
  };
  list.appendChild(d);
 });
}

render();
