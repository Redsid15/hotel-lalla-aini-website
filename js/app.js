const rooms=[
 {name:'Chambre Double',price:'6 000',meta:'28 m² · 2 personnes',tag:'Confort',image:'images-v2/gallery-2.jpg'},
 {name:'Chambre Twin',price:'6 500',meta:'30 m² · 2 personnes',tag:'Élégance',image:'images-v2/gallery-3.jpg'},
 {name:'Suite Deluxe',price:'9 500',meta:'45 m² · 2 personnes',tag:'Premium',image:'images-v2/gallery-4.jpg'},
 {name:'Suite Familiale',price:'11 000',meta:'60 m² · 4 personnes',tag:'Famille',image:'images-v2/gallery-6.jpg'}
];
const cards=document.getElementById('roomCards');
rooms.forEach((r,i)=>{const el=document.createElement('article');el.className='room-card';el.innerHTML=`<div class="room-photo" style="--room-image:url('${r.image}')"><span class="room-tag">${r.tag}</span></div><div class="room-body"><h3>${r.name}</h3><div class="room-meta">${r.meta}<br>Wi‑Fi · Climatisation · TV</div><div class="price">${r.price} DA / nuit</div><button class="btn glass detail" data-i="${i}">Voir les détails</button></div>`;cards.appendChild(el)});
const gallery=document.getElementById('galleryGrid');
const galleryNames=['Réception','Chambre Double','Chambre Twin','Suite','Hall','Restaurant','Extérieur','Terrasse','Salle de bain','Petit-déjeuner','Espaces communs','Vue de l’hôtel','Détails','Confort','Lalla Aini'];
for(let i=0;i<15;i++){const el=document.createElement('div');el.className='gallery-item';el.style.backgroundImage=`url('images-v2/gallery-${(i%12)+1}.jpg')`;el.innerHTML=`<span>${String(i+1).padStart(2,'0')} · ${galleryNames[i]}</span>`;gallery.appendChild(el)}
const hero=document.querySelector('.hero-image'), dots=document.getElementById('dots');let hi=0;
const heroImages=['images-v2/hero-lobby.jpg','images-v2/restaurant.jpg','images-v2/gallery-6.jpg','images-v2/gallery-9.jpg'];
heroImages.forEach((_,i)=>{const d=document.createElement('span');d.className='dot';d.onclick=()=>setHero(i);dots.appendChild(d)});
function setHero(i){hi=(i+heroImages.length)%heroImages.length;hero.style.opacity='0.35';setTimeout(()=>{hero.style.backgroundImage=`url('${heroImages[hi]}')`;hero.style.opacity='1'},120);document.querySelectorAll('.dot').forEach((d,n)=>d.classList.toggle('active',n===hi))} setHero(0);
document.getElementById('prev').onclick=()=>setHero(hi-1);document.getElementById('next').onclick=()=>setHero(hi+1);setInterval(()=>setHero(hi+1),7000);
const modal=document.getElementById('modal');
document.addEventListener('click',e=>{const b=e.target.closest('.detail');if(!b)return;const r=rooms[+b.dataset.i];document.getElementById('modalBody').innerHTML=`<div class="modal-room"><div class="modal-photo" style="background-image:url('${r.image}')"></div><div><span class="eyebrow">${r.tag}</span><h2>${r.name}</h2><p>Une chambre élégante et confortable pensée pour un séjour agréable, calme et reposant.</p><p><b>${r.meta}</b><br>Wi‑Fi · Climatisation · TV · Salle de bain privée</p><div class="modal-price">${r.price} DA / nuit</div><a class="btn gold" href="#reservation" id="reserveFromModal">Réserver cette chambre →</a></div></div>`;modal.classList.add('open');document.getElementById('reserveFromModal').onclick=()=>modal.classList.remove('open')});
document.getElementById('close').onclick=()=>modal.classList.remove('open');modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')};
const arrival=document.getElementById('arrival'),departure=document.getElementById('departure');arrival.min=new Date().toISOString().slice(0,10);arrival.onchange=()=>departure.min=arrival.value;
document.getElementById('bookingForm').onsubmit=e=>{e.preventDefault();const a=new Date(arrival.value),d=new Date(departure.value),msg=document.getElementById('bookingMsg');if(!a.getTime()||!d.getTime()){msg.textContent='Veuillez choisir les dates de votre séjour.';return}if(d<=a){msg.textContent='La date de départ doit être après l’arrivée.';return}const nights=Math.round((d-a)/86400000),price=Number(document.getElementById('room').value);msg.textContent=`✓ ${nights} nuit(s) — demande reçue. Tarif indicatif : ${(nights*price).toLocaleString('fr-FR')} DA.`};
document.getElementById('contactForm').onsubmit=e=>{e.preventDefault();document.getElementById('contactMsg').textContent='✓ Votre message est prêt à être envoyé. Connectez ce formulaire à votre serveur/email pour l’envoi réel.'};
document.getElementById('news').onsubmit=e=>{e.preventDefault();alert('Merci pour votre inscription !')};document.getElementById('play').onclick=()=>alert('Ajoutez votre vidéo dans videos/hotel-presentation.mp4 puis remplacez ce bouton par un lecteur vidéo.');
document.getElementById('menu').onclick=()=>document.getElementById('nav').classList.toggle('open');
