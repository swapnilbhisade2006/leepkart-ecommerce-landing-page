let tid;const IMG={
 "i1": "images/i1.jpg",
 "i3": "images/i3.jpg",
 "i5": "images/i5.jpg",
 "i6": "images/i6.jpg",
 "i7": "images/i7.jpg",
 "i8": "images/i8.jpg",
 "i9": "images/i9.jpg",
 "i10": "images/i10.jpg",
 "i11": "images/i11.jpg",
 "i12": "images/i12.jpg",
 "i13": "images/i13.jpg",
 "i14": "images/i14.jpg"
};
const P=[
{id:1,s:"men",t:"tee",n:"Archive Dove Tee",c:"Cream",p:1999,k:"i1",g:"New"},
{id:13,s:"men",t:"shirt",n:"Coral Print Resort Shirt",c:"Blue",p:1899,k:"i13",g:"New"},
{id:3,s:"men",t:"tee",n:"Archive Dove Tee",c:"Chocolate",p:1999,k:"i3"},
{id:14,s:"men",t:"shirt",n:"Light Blue Oxford Shirt",c:"Light Blue",p:1699,k:"i14",g:"Bestseller"},
{id:5,s:"men",t:"tee",n:"Essential Crew Tee",c:"Olive",p:899,k:"i5"},
{id:9,s:"women",t:"suit",n:"Crimson Chikankari Kurta Set",c:"Kurta &amp; Suit",p:3499,k:"i9",g:"New"},
{id:10,s:"women",t:"suit",n:"Midnight Floral Suit Set",c:"Kurta &amp; Suit",p:4299,k:"i10"},
{id:11,s:"women",t:"saree",n:"Marigold Paithani Saree",c:"Saree",p:5999,k:"i11",g:"Bestseller"},
{id:12,s:"women",t:"saree",n:"Rani Pink Embroidered Saree",c:"Saree",p:6499,k:"i12",g:"Sale"},
{id:6,s:"accessories",t:"bag",n:"Weekender Duffel Bag",c:"Bag",p:2999,k:"i6"},
{id:7,s:"accessories",t:"glasses",n:"Bold Square Sunglasses",c:"Sunglasses",p:1299,k:"i7",g:"New"},
{id:8,s:"accessories",t:"hat",n:"Garment District Cap",c:"Hat",p:799,k:"i8"}];
const S=[
{id:"men",title:"Men",sub:"Shirts & T-shirts",f:[["all","All"],["tee","T-shirts"],["shirt","Shirts"]]},
{id:"women",title:"Women",sub:"Kurta & Suits and Sarees",tall:1,f:[["all","All"],["suit","Kurta & Suits"],["saree","Sarees"]]},
{id:"accessories",title:"Accessories",sub:"Sunglasses, Bags and Hats",f:[["all","All"],["glasses","Sunglasses"],["bag","Bags"],["hat","Hats"]]}];
const $=id=>document.getElementById(id),f=n=>"₹"+n.toLocaleString("en-IN");
let cart={},user=null,wish={};
document.querySelectorAll("[data-img]").forEach(e=>e.style.backgroundImage=`url(${IMG[e.dataset.img]})`);
function grid(s,flt){return P.filter(p=>p.s===s.id&&(flt==="all"||p.t===flt)).map(p=>`<article class="card ${s.tall?"tall":""}"><div class="img">${p.g?`<span class="tag">${p.g}</span>`:""}<button class="heart ${wish[p.id]?"on":""}" data-w="${p.id}" aria-label="Save">${wish[p.id]?"♥":"♡"}</button><img src="${IMG[p.k]}" alt="${p.n}" loading="lazy"><button class="add" data-a="${p.id}">Add to cart</button></div><h3>${p.n}</h3><p><span>${p.c}</span><b>${f(p.p)}</b></p></article>`).join("")}
$("secs").innerHTML=S.map(s=>`<section class="sec reveal" id="${s.id}"><div class="head"><div><h2>${s.title}</h2><p>${s.sub}</p></div><div class="chips">${s.f.map((x,i)=>`<button class="chip ${i?"":"on"}" data-s="${s.id}" data-f="${x[0]}">${x[1]}</button>`).join("")}</div></div><div class="grid" id="g-${s.id}">${grid(s,"all")}</div></section>`).join("");
const toast=m=>{const t=$("toast");t.textContent=m;t.classList.add("show");clearTimeout(toast.h);toast.h=setTimeout(()=>t.classList.remove("show"),2400)};
const drawer=o=>{$("drawer").classList.toggle("open",o);$("scrim").classList.toggle("open",o)};
function draw(){const ids=Object.keys(cart),n=ids.reduce((a,i)=>a+cart[i],0),tot=ids.reduce((a,i)=>a+cart[i]*P.find(p=>p.id==i).p,0);
$("count").textContent=n;$("total").textContent=f(tot);
$("items").innerHTML=ids.length?ids.map(i=>{const p=P.find(p=>p.id==i);return`<div class="it"><img src="${IMG[p.k]}" alt=""><div>${p.n}<br><small>${f(p.p)}</small><br><span class="q"><button data-m="${i}" aria-label="Less">−</button>${cart[i]}<button data-pl="${i}" aria-label="More">+</button></span></div><button data-r="${i}" aria-label="Remove">✕</button></div>`}).join(""):'<p class="empty">Your cart is empty.</p>'}
function authUI(){$("auth").innerHTML=user?`<span class="act"><span style="font-size:14px">Hi, ${user}</span><button class="nb" data-o="out">Log out</button></span>`:`<span class="act"><button class="nb" data-o="login">Log in</button><button class="nb fill" data-o="signup">Sign up</button></span>`}
const modal=h=>{stopT();$("box").style.width="";$("box").innerHTML=`<button class="x" data-o="close" aria-label="Close">✕</button>`+h;$("modal").classList.add("open")};
const closeM=()=>{stopT();$("modal").classList.remove("open")};
const enter=fn=>$("box").querySelectorAll("input").forEach(i=>i.onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();fn()}});
const er=m=>$("er").textContent=m;
function authModal(m){const su=m==="signup";modal(`<h3>${su?"Create account":"Welcome back"}</h3><p>${su?"Join Leepkart and get 10% off your first order.":"Log in to track orders and save favourites."}</p><div class="tabs"><button class="${su?"":"on"}" data-o="login">Log in</button><button class="${su?"on":""}" data-o="signup">Sign up</button></div><div>${su?'<input id="nm" placeholder="Full name" autocomplete="name">':""}<input id="em" type="email" placeholder="Email" autocomplete="email"><input id="pw" type="password" placeholder="Password (min 6 characters)" autocomplete="current-password"><div class="err" id="er"></div><button type="button" class="btn" id="ab">${su?"Create account":"Log in"}</button></div>`);
const go=()=>{const em=$("em").value.trim(),pw=$("pw").value,nm=su?$("nm").value.trim():"";
if(su&&!nm)return er("Please enter your name.");if(!/\S+@\S+\.\S+/.test(em))return er("Enter a valid email.");if(pw.length<6)return er("Password must be at least 6 characters.");
user=nm||em.split("@")[0];authUI();closeM();toast(su?"Account created. Welcome, "+user+"!":"Logged in. Welcome back, "+user+"!")};
$("ab").onclick=go;enter(go)}
function bill(){const rows=Object.keys(cart).map(i=>{const p=P.find(p=>p.id==i);return{n:p.n,q:cart[i],a:p.p*cart[i]}});const sub=rows.reduce((a,r)=>a+r.a,0),ship=!sub||sub>=1999?0:99,del=sub?49:0;return{rows,sub,ship,del,tot:sub+ship+del}}
const tbl=b=>`<table class="inv"><tr><th>Item</th><th>Qty</th><th>Price</th></tr>${b.rows.map(r=>`<tr><td>${r.n}</td><td>${r.q}</td><td>${f(r.a)}</td></tr>`).join("")}<tr class="s"><td>Subtotal</td><td></td><td>${f(b.sub)}</td></tr><tr class="s"><td>Shipping charges</td><td></td><td>${b.ship?f(b.ship):"Free"}</td></tr><tr class="s"><td>Delivery fee</td><td></td><td>${f(b.del)}</td></tr>${b.pay?`<tr class="s"><td>Payment mode</td><td></td><td>${b.pay}</td></tr>`:""}<tr class="g"><td>Grand total</td><td></td><td>${f(b.tot)}</td></tr></table>`;
let mode="UPI",left=300;const stopT=()=>clearInterval(tid);
function checkoutModal(){const b=bill();mode="UPI";modal(`<h3>Checkout</h3><p>Review your order and choose how to pay.</p>${tbl(b)}<div><input id="cn" placeholder="Full name" value="${user||""}"><input id="cp" placeholder="Phone (10 digits)" inputmode="numeric"><input id="ca" placeholder="Delivery address"><div class="pay"><button type="button" class="pm on" data-pm="UPI">UPI / QR</button><button type="button" class="pm" data-pm="Cash on Delivery">Cash on Delivery</button></div><div class="qrp" id="qrp"><div id="qr"></div><div class="tm" id="tm"></div><small>Scan with any UPI app and pay ${f(b.tot)}</small><br><button type="button" class="btn ghost" id="rg" style="display:none;margin:10px 0 0">Regenerate QR</button></div><div class="qrp" id="codp" style="display:none">Pay <b>${f(b.tot)}</b> in cash when your order arrives.</div><div class="err" id="er"></div><button type="button" class="btn" id="po"></button></div>`);
const startQR=()=>{stopT();left=300;$("rg").style.display="none";$("qr").innerHTML="";
if(window.QRCode)new QRCode($("qr"),{text:`upi://pay?pa=leepkart@upi&pn=Leepkart&am=${b.tot}&cu=INR&tn=Leepkart%20order`,width:176,height:176});else $("qr").textContent="QR could not load";
const tick=()=>{const m=String(left/60|0).padStart(2,"0"),s=String(left%60).padStart(2,"0");$("tm").textContent=left>0?`Expires in ${m}:${s}`:"QR expired";
if(left<=0){stopT();$("qr").innerHTML='<div class="qx">Expired</div>';$("rg").style.display=""}left--};tick();tid=setInterval(tick,1000)};
const setMode=m=>{mode=m;document.querySelectorAll(".pm").forEach(x=>x.classList.toggle("on",x.dataset.pm===m));
$("qrp").style.display=m==="UPI"?"":"none";$("codp").style.display=m==="UPI"?"none":"";er("");
if(m==="UPI")startQR();else stopT();$("po").textContent=m==="UPI"?"I've paid · Place order":"Place order · "+f(b.tot)};
document.querySelectorAll(".pm").forEach(x=>x.onclick=()=>setMode(x.dataset.pm));$("rg").onclick=startQR;setMode("UPI");
const go=()=>{const n=$("cn").value.trim(),ph=$("cp").value.replace(/\s/g,""),ad=$("ca").value.trim();
if(!n)return er("Please enter your name.");if(!/^\d{10}$/.test(ph))return er("Enter a 10-digit phone number.");if(ad.length<8)return er("Please enter a full delivery address.");
if(mode==="UPI"&&$("rg").style.display!=="none")return er("QR expired. Regenerate it and pay again.");
const id="LK"+Math.floor(100000+Math.random()*900000),dt=new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),m=mode;
orders[id]={t:Date.now(),tot:b.tot,pay:m==="UPI"?"UPI":"COD",n:b.rows.map(r=>r.n+" × "+r.q).join(", ")};cart={};draw();drawer(false);
modal(`<div class="done"><div class="ck">✓</div><h3>Order confirmed!</h3><p>Thank you, ${n}. Order placed on ${dt}</p></div><div class="tid"><div><small>Tracking ID</small><b>${id}</b></div><button type="button" id="cpid">Copy</button></div><h3 style="font-size:20px;margin-bottom:8px">Invoice</h3>${tbl({...b,pay:m==="UPI"?"UPI (QR scan) · Paid":"Cash on Delivery"})}<p class="meta"><b>Payment:</b> ${m==="UPI"?"UPI (QR scan) · Paid":"Cash on Delivery · Pay "+f(b.tot)+" on delivery"}<br><b>Deliver to:</b> ${ad}<br><b>Phone:</b> ${ph}<br><b>Arrives:</b> in about 3 days</p><button type="button" class="btn" id="tk">Track this order</button><button type="button" class="btn ghost" data-o="close">Continue shopping</button>`);toast("Order confirmed 🎉");$("tk").onclick=()=>trackModal(id);$("cpid").onclick=()=>{try{navigator.clipboard.writeText(id).then(()=>toast("Tracking ID copied"),()=>toast("Tracking ID: "+id))}catch(x){toast("Tracking ID: "+id)}}};
$("po").onclick=go;enter(go)}
const orders={LK100001:{s:2,t:Date.now()-864e5,tot:2998,pay:"UPI",n:"Light Blue Oxford Shirt × 1, Essential Crew Tee × 1"},LK100002:{s:3,t:Date.now()-4*864e5,tot:1999,pay:"COD",n:"Archive Dove Tee × 1"}};
const ST=[["Order placed","We've received your order."],["Shipped","Packed and handed to our courier partner."],["Out for delivery","With the delivery agent, arriving today."],["Delivered","Delivered to your address. Thank you for shopping!"]];
function trackModal(pre){modal(`<h3>Track your order</h3><p>Enter the tracking ID from your invoice. Demo IDs: <b>LK100001</b> (out for delivery) and <b>LK100002</b> (delivered).</p><input id="ti" placeholder="e.g. LK123456" value="${pre||""}"><div class="err" id="er"></div><button type="button" class="btn" id="tb">Track order</button><div id="tr"></div>`);
const look=()=>{const id=$("ti").value.trim().toUpperCase(),o=orders[id];if(!o){$("tr").innerHTML="";return id?er("Order not found. Check the ID and try again."):0}er("");
const s=o.s!=null?o.s:Math.min(3,Math.floor((Date.now()-o.t)/2e4)),eta=new Date(o.t+3*864e5).toLocaleDateString("en-IN",{day:"numeric",month:"short"});
$("tr").innerHTML=`<p style="margin:16px 0 10px"><b>#${id}</b> · ${f(o.tot)} · ${o.pay}<br>${o.n}<br>${s===3?"<b>Delivered</b>":"Estimated delivery: <b>"+eta+"</b>"}</p><ol class="tl">${ST.map((x,i)=>`<li class="${i<=s?"d":""}${i===s?" c":""}">${x[0]}${i===s?" · Current":""}<small>${i<=s?x[1]:"Pending"}</small></li>`).join("")}</ol>`};
$("tb").onclick=look;enter(look);look();tid=setInterval(look,3000)}
const DOCS={
terms:["Terms & Conditions",[["1. Acceptance.","By using leepkart.com you agree to these terms."],["2. Orders & pricing.","All prices are in INR and include taxes. We may cancel an order for stock or pricing errors and refund you in full."],["3. Payments.","We accept UPI and Cash on Delivery. COD orders may need phone confirmation."],["4. Shipping.","Free above ₹1,999, otherwise ₹99. Delivery takes about 3 working days."],["5. Returns.","Unused items with tags can be returned within 30 days. Refunds arrive in 5–7 working days."],["6. Accounts.","Keep your login details safe. You are responsible for activity on your account."],["7. Intellectual property.","All content, images and designs on this site belong to Leepkart."],["8. Changes.","We may update these terms. Continuing to use the site means you accept the changes."]]],
privacy:["Privacy Policy",[["What we collect.","Your name, email, phone number and delivery address, only to process and deliver your orders."],["How we use it.","To confirm orders, send updates and improve our service. We never sell your data."],["Your rights.","Email support@leepkart.com to access, correct or delete your data at any time."]]],
shipping:["Shipping & Delivery",[["Delivery time.","Orders ship within 24 hours and arrive in about 3 working days."],["Shipping charges.","Free above ₹1,999. A flat ₹99 applies below that."],["Delivery fee.","A flat ₹49 delivery fee applies to every order."],["Tracking.","Use Track Your Order with the ID on your invoice."]]],
returns:["Returns & Refunds",[["30-day returns.","Unused items with original tags can be returned within 30 days."],["Free pickup.","We collect the item from your address at no cost."],["Refunds.","Refunded to your original payment method in 5–7 working days. COD orders are refunded by bank transfer."]]],
contact:["Contact Us",[["Email.","support@leepkart.com"],["Hours.","Monday to Saturday, 10 am to 7 pm IST."],["Address.","Leepkart Lifestyle, Mumbai, Maharashtra, India."]]],
sustain:["Sustainability",[["Better fabrics.","We prefer organic cotton and low-impact dyes wherever we can."],["Less waste.","Small-batch production and recycled packaging."],["Fair work.","We work with partner makers who are paid fairly."]]],
careers:["Careers",[["Join Leepkart.","We're hiring designers, merchandisers and customer care teammates in Mumbai. Send your CV to careers@leepkart.com."]]],
cookies:["Cookie Policy",[["Cookies.","We use essential cookies to keep your cart and login working, and basic analytics to improve the site."]]]};
function docModal(k){const d=DOCS[k];modal(`<h3>${d[0]}</h3>${d[1].map(x=>`<p><b>${x[0]}</b> ${x[1]}</p>`).join("")}<button type="button" class="btn" data-o="close">Close</button>`);$("box").style.width="min(580px,100%)"}
document.addEventListener("click",e=>{const t=e.target.closest("button,a");if(!t)return;const d=t.dataset;if(t.tagName==="A"&&(d.doc||d.o||d.toast))e.preventDefault();
if(d.a){cart[d.a]=(cart[d.a]||0)+1;draw();toast("Product has been added to your cart ✓")}
if(d.pl){cart[d.pl]++;draw()}if(d.m){cart[d.m]--;if(!cart[d.m])delete cart[d.m];draw()}if(d.r){delete cart[d.r];draw();toast("Item removed from cart")}
if(d.w){wish[d.w]=!wish[d.w];t.classList.toggle("on",wish[d.w]);t.textContent=wish[d.w]?"♥":"♡";toast(wish[d.w]?"Saved to wishlist":"Removed from wishlist")}
if(d.f){const s=S.find(x=>x.id===d.s);$("g-"+d.s).innerHTML=grid(s,d.f);t.parentNode.querySelectorAll(".chip").forEach(c=>c.classList.toggle("on",c===t))}
if(d.o){d.o==="close"?closeM():d.o==="out"?(user=null,authUI(),toast("You have been logged out")):d.o==="track"?trackModal():d.o==="top"?scrollTo({top:0,behavior:"smooth"}):authModal(d.o)}if(d.doc)docModal(d.doc);if(d.toast)toast(d.toast);
if(t.closest("#links"))$("links").classList.remove("show")});
$("open").onclick=()=>drawer(true);$("close").onclick=$("scrim").onclick=()=>drawer(false);
$("burger").onclick=()=>$("links").classList.toggle("show");
$("modal").onclick=e=>e.target.id==="modal"&&closeM();
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeM();drawer(false)}});
$("checkout").onclick=()=>{if(!Object.keys(cart).length)return toast("Your cart is empty. Add a product first.");checkoutModal()};
$("sub").onclick=()=>{const v=$("email").value;if(/\S+@\S+\.\S+/.test(v)){toast("Subscribed! Use code LEEP10 for 10% off.");$("email").value=""}else toast("Please enter a valid email.")};
const end=Date.now()+5*864e5+3e6;(function tick(){let s=Math.max(0,end-Date.now())/1e3|0;
$("timer").innerHTML=[["Days",86400],["Hrs",3600],["Min",60],["Sec",1]].map(([l,d])=>{const v=s/d|0;s%=d;return`<div>${String(v).padStart(2,"0")}<small>${l}</small></div>`}).join("");setTimeout(tick,1e3)})();
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("in")),{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));draw();authUI();
const root=document.documentElement,mq=matchMedia("(prefers-color-scheme:dark)");let th;try{th=localStorage.getItem("lk-theme")}catch(x){}
const setTh=(m,save)=>{th=m;root.dataset.theme=m;$("tg").textContent=m==="dark"?"☀":"☾";$("tg").setAttribute("aria-label",m==="dark"?"Switch to light mode":"Switch to dark mode");if(save)try{localStorage.setItem("lk-theme",m)}catch(x){}};
setTh(th||(mq.matches?"dark":"light"));$("tg").onclick=()=>{setTh(th==="dark"?"light":"dark",true);toast(th==="dark"?"Dark mode on":"Light mode on")};
let bi=0,bp=false,bt,tx0;const sl=[...document.querySelectorAll(".sl")],dts=[...document.querySelectorAll(".dt")];
const show=i=>{bi=(i+sl.length)%sl.length;sl.forEach((s,k)=>s.classList.toggle("on",k===bi));dts.forEach((d,k)=>d.classList.toggle("on",k===bi))};
const auto=()=>{clearInterval(bt);if(!bp&&!matchMedia("(prefers-reduced-motion:reduce)").matches)bt=setInterval(()=>show(bi+1),5000)};
$("bl").onclick=()=>{show(bi-1);auto()};$("br").onclick=()=>{show(bi+1);auto()};dts.forEach((d,k)=>d.onclick=()=>{show(k);auto()});
$("bp").onclick=()=>{bp=!bp;$("bp").textContent=bp?"▶":"❚❚";$("bp").setAttribute("aria-label",bp?"Play":"Pause");auto()};
$("bn").onmouseenter=()=>clearInterval(bt);$("bn").onmouseleave=auto;
$("bn").ontouchstart=e=>tx0=e.touches[0].clientX;$("bn").ontouchend=e=>{const d=e.changedTouches[0].clientX-tx0;if(Math.abs(d)>40){show(bi+(d<0?1:-1));auto()}};
$("cd").onclick=()=>{try{navigator.clipboard.writeText("LEEP10").then(()=>toast("Code LEEP10 copied!"),()=>toast("Use code LEEP10 at checkout"))}catch(x){toast("Use code LEEP10 at checkout")}};auto();
