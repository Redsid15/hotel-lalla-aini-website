// ===== ACTUAL HOTEL PHOTOS =====
const actualPhotos = Array.from({ length: 10 }, (_, i) => `images-v2/actual/actual-${String(i + 1).padStart(2, '0')}.jpg`);

// ===== ROOMS DATA =====
const rooms = [
  {
    name: 'Chambre Double',
    price: '6 000',
    meta: '28 m² · 2 personnes',
    tag: 'Confort',
    image: 'images-v2/actual/actual-01.jpg',
    desc: 'Une chambre élégante avec un grand lit double, idéale pour les couples ou les voyageurs solo recherchant confort et calme.'
  },
  {
    name: 'Chambre Twin',
    price: '6 500',
    meta: '30 m² · 2 personnes',
    tag: 'Élégance',
    image: 'images-v2/actual/actual-02.jpg',
    desc: 'Deux lits séparés dans un espace lumineux et moderne, parfait pour les amis ou les collègues en déplacement.'
  },
  {
    name: 'Suite Deluxe',
    price: '9 500',
    meta: '45 m² · 2 personnes',
    tag: 'Premium',
    image: 'images-v2/actual/actual-03.jpg',
    desc: 'Un espace premium avec salon privatif, vue panoramique et finitions haut de gamme pour un séjour d\'exception.'
  },
  {
    name: 'Suite Familiale',
    price: '11 000',
    meta: '60 m² · 4 personnes',
    tag: 'Famille',
    image: 'images-v2/actual/actual-04.jpg',
    desc: 'Spacieuse et confortable, cette suite offre tout l\'espace nécessaire pour un séjour en famille avec enfants.'
  },
  {
    name: 'Chambre Vue Panoramique',
    price: '7 500',
    meta: '35 m² · 2 personnes',
    tag: 'Panorama',
    image: 'images-v2/actual/actual-09.jpg',
    desc: 'Profitez d\'une vue imprenable depuis cette chambre au dernier étage, avec un balcon privé et un design moderne.'
  },
  {
    name: 'Suite Prestige',
    price: '13 000',
    meta: '70 m² · 3 personnes',
    tag: 'Prestige',
    image: 'images-v2/actual/actual-10.jpg',
    desc: 'Notre suite la plus exclusive avec salon, jacuzzi privatif et service de majordome personnalisé.'
  },
  {
    name: 'Chambre Classique',
    price: '5 000',
    meta: '24 m² · 2 personnes',
    tag: 'Classique',
    image: 'images-v2/actual/actual-01.jpg',
    desc: 'Une chambre cosy et fonctionnelle, parfaite pour un court séjour avec tout le confort nécessaire.'
  }
];

// ===== RENDER ROOM CARDS =====
const cards = document.getElementById('roomCards');
rooms.forEach((r, i) => {
  const el = document.createElement('article');
  el.className = 'room-card';
  el.innerHTML = `
    <div class="room-photo" style="background-image:url('${r.image}')">
      <span class="room-tag">${r.tag}</span>
    </div>
    <div class="room-body">
      <h3>${r.name}</h3>
      <div class="room-meta">${r.meta}<br>Wi‑Fi · Climatisation · TV</div>
      <div class="price">${r.price} DA / nuit</div>
      <button class="btn glass detail" data-i="${i}">Voir les détails</button>
    </div>`;
  cards.appendChild(el);
});

// ===== GALLERY =====
const gallery = document.getElementById('galleryGrid');
const galleryData = [
  { img: actualPhotos[7], name: "Façade de l'hôtel", wide: true },
  { img: actualPhotos[0], name: 'Chambre Double' },
  { img: actualPhotos[1], name: 'Chambre Twin' },
  { img: actualPhotos[2], name: 'Chambre Premium', tall: true },
  { img: actualPhotos[3], name: 'Chambre & salon' },
  { img: actualPhotos[8], name: 'Hall & réception' },
  { img: actualPhotos[9], name: 'Restaurant & espaces' },
  { img: actualPhotos[4], name: "Entrée de l'hôtel" },
  { img: actualPhotos[5], name: 'Espace lounge' },
  { img: actualPhotos[6], name: 'Restaurant' },
  { img: 'images-v2/hero-lobby.jpg', name: 'Réception Lalla Aini', wide: true },
  { img: 'images-v2/gallery-7.jpg', name: 'Vue panoramique' },
  { img: 'images-v2/gallery-9.jpg', name: 'Extérieur' },
  { img: 'images-v2/gallery-4.jpg', name: 'Restaurant' },
  { img: 'images-v2/gallery-10.jpg', name: 'Suite Prestige', tall: true },
  { img: 'images-v2/gallery-12.jpg', name: 'Lalla Aini' },
  { img: 'images-v2/gallery-5.jpg', name: 'Couloir & chambres' },
  { img: 'images-v2/alger-project.jpg', name: 'Notre projet à Alger' }
];

galleryData.forEach((g, i) => {
  const el = document.createElement('div');
  el.className = 'gallery-item';
  if (g.wide) el.classList.add('wide');
  if (g.tall) el.classList.add('tall');
  el.style.backgroundImage = `url('${g.img}')`;
  el.innerHTML = `<span>${String(i + 1).padStart(2, '0')} · ${g.name}</span>`;
  el.setAttribute('data-index', i);
  gallery.appendChild(el);
});

document.getElementById('galleryCount').textContent = galleryData.length + ' photos';

// ===== HERO SLIDER =====
const hero = document.querySelector('.hero-image');
const dots = document.getElementById('dots');
let hi = 0;

// EASY PHOTO EDITING — replace files in images-v2/slideshow/ (same names)
const heroImages = Array.from({ length: 7 }, (_, i) => `images-v2/slideshow/slide-${String(i + 1).padStart(2, '0')}.jpg`);

heroImages.forEach((_, i) => {
  const d = document.createElement('span');
  d.className = 'dot';
  d.onclick = () => setHero(i);
  dots.appendChild(d);
});

function setHero(i) {
  hi = (i + heroImages.length) % heroImages.length;
  hero.style.opacity = '0.3';
  setTimeout(() => {
    hero.style.backgroundImage = `url('${heroImages[hi]}')`;
    hero.style.opacity = '1';
  }, 150);
  document.querySelectorAll('.dot').forEach((d, n) => d.classList.toggle('active', n === hi));
}

setHero(0);
document.getElementById('prev').onclick = () => setHero(hi - 1);
document.getElementById('next').onclick = () => setHero(hi + 1);
let heroInterval = setInterval(() => setHero(hi + 1), 7000);

// Pause slider on hover
const heroEl = document.querySelector('.hero');
heroEl.addEventListener('mouseenter', () => clearInterval(heroInterval));
heroEl.addEventListener('mouseleave', () => {
  heroInterval = setInterval(() => setHero(hi + 1), 7000);
});

// ===== ROOM SLIDESHOW =====
const roomSlides = document.getElementById('roomSlides');
const roomDotsEl = document.getElementById('roomDots');
let ri = 0;

// EASY PHOTO EDITING — replace files in images-v2/chambres/ (same names)
const roomSlideImages = Array.from({ length: 7 }, (_, i) => `images-v2/chambres/room-${String(i + 1).padStart(2, '0')}.jpg`);
const roomSlideData = [
  { img: roomSlideImages[0], name: 'Chambre Double', desc: 'Une chambre élégante et lumineuse, pensée pour votre confort' },
  { img: roomSlideImages[1], name: 'Chambre Twin', desc: 'Deux lits et un espace généreux pour un séjour agréable' },
  { img: roomSlideImages[2], name: 'Chambre Premium', desc: 'Une atmosphère raffinée avec des finitions soignées' },
  { img: roomSlideImages[3], name: 'Chambre & salon', desc: 'Un espace chaleureux pour se détendre après une journée à Alger' },
  { img: roomSlideImages[4], name: 'Hall Lalla Aini', desc: "L'accueil de l'hôtel dès votre arrivée" },
  { img: roomSlideImages[5], name: 'Suite Prestige', desc: "L'élégance et le calme dans un cadre premium" },
  { img: roomSlideImages[6], name: 'Suite Familiale', desc: 'Spacieuse et confortable pour toute la famille' }
];

roomSlideData.forEach((s, i) => {
  const slide = document.createElement('div');
  slide.className = 'room-slide';
  slide.style.backgroundImage = `url('${s.img}')`;
  slide.innerHTML = `<div class="room-slide-info"><h3>${s.name}</h3><p>${s.desc}</p></div>`;
  roomSlides.appendChild(slide);

  const dot = document.createElement('span');
  dot.className = 'room-dot';
  dot.onclick = () => setRoomSlide(i);
  roomDotsEl.appendChild(dot);
});

function setRoomSlide(i) {
  ri = (i + roomSlideData.length) % roomSlideData.length;
  roomSlides.style.transform = `translateX(-${ri * 100}%)`;
  document.querySelectorAll('.room-dot').forEach((d, n) => d.classList.toggle('active', n === ri));
}

setRoomSlide(0);
document.getElementById('roomPrev').onclick = () => setRoomSlide(ri - 1);
document.getElementById('roomNext').onclick = () => setRoomSlide(ri + 1);
let roomInterval = setInterval(() => setRoomSlide(ri + 1), 5000);

const roomSlideshowEl = document.getElementById('roomSlideshow');
roomSlideshowEl.addEventListener('mouseenter', () => clearInterval(roomInterval));
roomSlideshowEl.addEventListener('mouseleave', () => {
  roomInterval = setInterval(() => setRoomSlide(ri + 1), 5000);
});

// ===== MODAL =====
const modal = document.getElementById('modal');

document.addEventListener('click', e => {
  const b = e.target.closest('.detail');
  if (!b) return;
  const r = rooms[+b.dataset.i];
  document.getElementById('modalBody').innerHTML = `
    <div class="modal-room">
      <div class="modal-photo" style="background-image:url('${r.image}')"></div>
      <div>
        <span class="eyebrow">${r.tag}</span>
        <h2>${r.name}</h2>
        <p>${r.desc}</p>
        <p><b>${r.meta}</b><br>Wi‑Fi · Climatisation · TV · Salle de bain privée</p>
        <div class="modal-price">${r.price} DA / nuit</div>
        <a class="btn gold" href="#reservation" id="reserveFromModal">Réserver cette chambre →</a>
      </div>
    </div>`;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('reserveFromModal').onclick = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };
});

document.getElementById('close').onclick = () => {
  modal.classList.remove('open');
  document.body.style.overflow = '';
};
modal.onclick = e => {
  if (e.target === modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

// ===== BOOKING FORM =====
const arrival = document.getElementById('arrival');
const departure = document.getElementById('departure');
arrival.min = new Date().toISOString().slice(0, 10);
arrival.onchange = () => { departure.min = arrival.value; departure.value = ''; };

document.getElementById('bookingForm').onsubmit = e => {
  e.preventDefault();
  const a = new Date(arrival.value);
  const d = new Date(departure.value);
  const msg = document.getElementById('bookingMsg');
  if (!a.getTime() || !d.getTime()) {
    msg.textContent = 'Veuillez choisir les dates de votre séjour.';
    return;
  }
  if (d <= a) {
    msg.textContent = 'La date de départ doit être après l\'arrivée.';
    return;
  }
  const nights = Math.round((d - a) / 86400000);
  const price = Number(document.getElementById('room').value);
  msg.textContent = `✓ ${nights} nuit(s) — demande reçue. Tarif indicatif : ${(nights * price).toLocaleString('fr-FR')} DA.`;
};

// ===== CONTACT FORM =====
document.getElementById('contactForm').onsubmit = e => {
  e.preventDefault();
  document.getElementById('contactMsg').textContent = '✓ Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.';
  e.target.reset();
  setTimeout(() => { document.getElementById('contactMsg').textContent = ''; }, 5000);
};

// ===== NEWSLETTER =====
document.getElementById('news').onsubmit = e => {
  e.preventDefault();
  alert('Merci pour votre inscription !');
  e.target.reset();
};

// ===== VIDEO PLAY =====
document.getElementById('play').onclick = () => {
  alert('Ajoutez votre vidéo dans videos/hotel-presentation.mp4 puis remplacez ce bouton par un lecteur vidéo.');
};

// ===== MOBILE MENU =====
const menuBtn = document.getElementById('menu');
const nav = document.getElementById('nav');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('open');
  nav.classList.toggle('open');
};

// Close menu on link click
nav.querySelectorAll('a').forEach(link => {
  link.onclick = () => {
    menuBtn.classList.remove('open');
    nav.classList.remove('open');
  };
});

// Close menu on outside click
document.addEventListener('click', e => {
  if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
    menuBtn.classList.remove('open');
    nav.classList.remove('open');
  }
});

// ===== ACTIVE NAV HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');
const navLinks = nav.querySelectorAll('a');

function highlightNav() {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + id) {
          a.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNav, { passive: true });

// ===== SET ABOUT PHOTO & PROJECT PHOTO =====
document.getElementById('aboutPhoto').style.backgroundImage = `url('${actualPhotos[8]}')`;
document.getElementById('projectPhoto').style.backgroundImage = "url('images-v2/alger-project.jpg')";
document.getElementById('videoPoster').style.backgroundImage = `url('${actualPhotos[9]}')`;
