// ══════════════════════════════════════════
//   SYSSLAN STORE — COMPLETE JAVASCRIPT
//   Level 4 & 5: Full Interactivity
// ══════════════════════════════════════════

// ── Product Data ──────────────────────────
const products = [
  {
    id: 1,
    name: "Sony WH-1000XM5 Wireless Headphones",
    category: "Electronics",
    price: 24999,
    oldPrice: 34999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 2341,
    badge: "Best Seller",
    desc: "Industry-leading noise cancellation with 30-hour battery life and premium sound.",
    details: "Driver: 30mm | Frequency: 4Hz–40kHz | Bluetooth 5.2 | Multipoint connection | Foldable design",
    features: ["Active Noise Cancellation", "30hr Battery Life", "Quick Charge (3min = 3hrs)", "Multipoint Connection"]
  },
  {
    id: 2,
    name: "Apple iPhone 15 Pro Max 256GB",
    category: "Electronics",
    price: 134900,
    oldPrice: 159900,
    image: "https://images.unsplash.com/photo-1696446702183-a09e7ad4ae19?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 5820,
    badge: "New",
    desc: "Titanium design with A17 Pro chip, ProRes video, and Action button.",
    details: "6.7\" Super Retina XDR | 48MP Main Camera | A17 Pro Chip | USB-C | 4K ProRes Video",
    features: ["A17 Pro Chip", "48MP Triple Camera System", "Titanium Design", "USB-C Connectivity"]
  },
  {
    id: 3,
    name: "Nike Air Max 270 React",
    category: "Clothing",
    price: 8995,
    oldPrice: 12999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 1204,
    badge: "Sale",
    badgeType: "sale",
    desc: "Max cushioning meets React foam for all-day comfort and style.",
    details: "Upper: Mesh & Synthetic | Sole: Rubber | Air Max Unit | React Foam Midsole",
    features: ["Max Air Heel Unit", "React Foam Midsole", "Mesh Upper for Breathability", "Rubber Outsole"]
  },
  {
    id: 4,
    name: "Samsung Galaxy Watch 6 Classic",
    category: "Accessories",
    price: 34999,
    oldPrice: 42999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 876,
    badge: "Sale",
    badgeType: "sale",
    desc: "Classic rotating bezel with advanced health monitoring and sapphire glass.",
    details: "47mm | Super AMOLED | Sapphire Glass | 5ATM + IP68 | ECG & BioActive Sensor",
    features: ["Rotating Bezel Design", "Advanced Health Monitoring", "ECG + Blood Pressure", "40hr Battery Life"]
  },
  {
    id: 5,
    name: "Levi's 511 Slim Fit Jeans",
    category: "Clothing",
    price: 2999,
    oldPrice: 4999,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 3451,
    badge: "Best Seller",
    desc: "Classic slim fit with just enough stretch for all-day comfort.",
    details: "99% Cotton, 1% Elastane | Slim fit from hip through thigh | Available: 28–40 waist",
    features: ["Slim Fit Cut", "Stretch Comfort Fabric", "5-Pocket Styling", "Machine Washable"]
  },
  {
    id: 6,
    name: "MacBook Air M3 15-inch",
    category: "Electronics",
    price: 149900,
    oldPrice: 169900,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 2190,
    badge: "New",
    desc: "Supercharged by M3 chip, with 18-hour battery and all-day performance.",
    details: "M3 Chip | 15.3\" Liquid Retina | 8GB RAM | 256GB SSD | MagSafe | 18hr Battery",
    features: ["Apple M3 Chip", "15.3\" Liquid Retina Display", "18-Hour Battery", "MagSafe Charging"]
  },
  {
    id: 7,
    name: "Fossil Gen 6 Smartwatch",
    category: "Accessories",
    price: 19999,
    oldPrice: 27999,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
    rating: 4.2,
    reviews: 542,
    badge: "",
    desc: "Premium smartwatch with Wear OS, heart rate, SpO2 and speaker.",
    details: "44mm | 1.28\" AMOLED | Snapdragon 4100+ | Wear OS | Heart Rate + SpO2",
    features: ["Snapdragon 4100+ Chip", "Heart Rate & SpO2", "Built-in Speaker", "Google Pay"]
  },
  {
    id: 8,
    name: "Oversized Graphic Tee — Urban Edition",
    category: "Clothing",
    price: 999,
    oldPrice: 1799,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 1876,
    badge: "Sale",
    badgeType: "sale",
    desc: "100% cotton oversized tee with bold graphic print. Street-ready style.",
    details: "100% Combed Cotton | Oversized Fit | Pre-shrunk | Machine washable | S–XXL",
    features: ["100% Premium Cotton", "Bold Graphic Print", "Oversized Fit", "Pre-shrunk Fabric"]
  },
  {
    id: 9,
    name: "IKEA KALLAX Shelf Unit",
    category: "Home",
    price: 3999,
    oldPrice: 5499,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 2987,
    badge: "Best Seller",
    desc: "Versatile shelf unit for organizing books, décor, and more. Easy assembly.",
    details: "77x77cm | Board on board: 16.5mm | Max load per box: 13kg | Particleboard",
    features: ["Versatile Storage Solution", "Can be used both vertically and horizontally", "Suitable for boxes & baskets", "Easy self-assembly"]
  },
  {
    id: 10,
    name: "JBL Flip 6 Portable Speaker",
    category: "Electronics",
    price: 9999,
    oldPrice: 13999,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 3402,
    badge: "Sale",
    badgeType: "sale",
    desc: "Bold JBL sound with 12-hour battery and IP67 waterproof rating.",
    details: "12hr Battery | IP67 Waterproof | PartyBoost | USB-C | 30W Output | Bluetooth 5.1",
    features: ["12-Hour Playtime", "IP67 Waterproof & Dustproof", "JBL PartyBoost", "USB-C Charging"]
  },
  {
    id: 11,
    name: "Ray-Ban Aviator Classic Gold",
    category: "Accessories",
    price: 7490,
    oldPrice: 9990,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 1543,
    badge: "",
    desc: "The original since 1937. Gold metal frame with crystal G-15 green lenses.",
    details: "Frame: Metal | Lens: Crystal | UV Protection: 100% UV400 | Unisex | Iconic design",
    features: ["Classic Aviator Style", "100% UV400 Protection", "Crystal G-15 Lenses", "Metal Frame"]
  },
  {
    id: 12,
    name: "Philips Air Purifier AC3829",
    category: "Home",
    price: 18999,
    oldPrice: 24999,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 892,
    badge: "New",
    desc: "Removes 99.97% of allergens and pollutants with HEPA and activated carbon.",
    details: "CADR: 333 m³/hr | Coverage: 79 m² | HEPA + Carbon Filter | PM2.5 Display | Auto Mode",
    features: ["True HEPA Filtration", "Removes 99.97% of Particles", "Real-time Air Quality Display", "Auto Mode with Smart Sensor"]
  }
];

// ── State ─────────────────────────────────
let cart = [];
let currentFilter = 'All';
let currentSort = 'default';
let filteredProducts = [...products];

// ══════════════════════════════════════════
//   RENDER PRODUCTS
// ══════════════════════════════════════════
function renderProducts(prods) {
  const grid = document.getElementById('productGrid');
  const noResults = document.getElementById('noResults');

  if (prods.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';

  grid.innerHTML = prods.map((p, i) => `
    <div class="product-card" style="animation-delay:${i * 0.06}s" data-id="${p.id}" data-category="${p.category}">
      <div class="product-image-wrap" onclick="openModal(${p.id})">
        <img src="${p.image}" alt="${p.name}" loading="lazy"/>
        ${p.badge ? `<span class="product-badge ${p.badgeType || ''}">${p.badge}</span>` : ''}
        <button class="wishlist-btn" onclick="toggleWishlist(event, ${p.id})" id="wish-${p.id}" title="Wishlist">♡</button>
        <button class="quick-view-btn" onclick="openModal(${p.id})">👁 Quick View</button>
      </div>
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <h3 class="product-name" onclick="openModal(${p.id})">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-rating">
          <span class="stars">${getStars(p.rating)}</span>
          <span class="rating-count">${p.rating} (${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">₹${p.price.toLocaleString()}</span>
          ${p.oldPrice ? `<span class="product-price-old">₹${p.oldPrice.toLocaleString()}</span>` : ''}
          ${p.oldPrice ? `<span class="product-discount">${getDiscount(p.price, p.oldPrice)}% off</span>` : ''}
        </div>
        <button class="add-to-cart-btn" id="cart-btn-${p.id}" onclick="addToCart(${p.id})">
          🛒 Add to Cart
        </button>
        <button class="product-details-toggle" onclick="toggleDetails(${p.id})">
          ＋ More Details
        </button>
        <div class="product-extra-details" id="details-${p.id}">
          <strong>Specifications:</strong><br/>
          ${p.details}
        </div>
      </div>
    </div>
  `).join('');
}

function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
}

function getDiscount(price, oldPrice) {
  return Math.round((1 - price / oldPrice) * 100);
}

// ══════════════════════════════════════════
//   FILTER & SORT
// ══════════════════════════════════════════
function filterCategory(cat, btn) {
  currentFilter = cat;

  // Update pills
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  if (btn && btn.classList.contains('pill')) btn.classList.add('active');

  // Update nav links
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  if (btn && btn.classList.contains('nav-link')) btn.classList.add('active');

  applyFiltersAndSort();

  // Scroll to products
  if (cat !== 'All') {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  }
}

function sortProducts() {
  currentSort = document.getElementById('sortSelect').value;
  applyFiltersAndSort();
}

function applyFiltersAndSort() {
  let result = currentFilter === 'All'
    ? [...products]
    : products.filter(p => p.category === currentFilter);

  switch (currentSort) {
    case 'price-asc': result.sort((a, b) => a.price - b.price); break;
    case 'price-desc': result.sort((a, b) => b.price - a.price); break;
    case 'rating': result.sort((a, b) => b.rating - a.rating); break;
    case 'name': result.sort((a, b) => a.name.localeCompare(b.name)); break;
  }

  filteredProducts = result;
  renderProducts(result);
}

// ══════════════════════════════════════════
//   SEARCH
// ══════════════════════════════════════════
function searchProducts() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const cat = document.getElementById('searchCat').value;
  const searchInfo = document.getElementById('searchInfo');

  if (!query) {
    filterCategory('All', null);
    searchInfo.style.display = 'none';
    return;
  }

  let result = products.filter(p => {
    const matchCat = cat === 'All' || p.category === cat;
    const matchQuery = p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query) || p.category.toLowerCase().includes(query);
    return matchCat && matchQuery;
  });

  searchInfo.style.display = 'block';
  searchInfo.textContent = `🔍 Showing ${result.length} result${result.length !== 1 ? 's' : ''} for "${query}"`;

  renderProducts(result);
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Allow Enter key in search
document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') searchProducts();
});

// ══════════════════════════════════════════
//   PRODUCT DETAILS TOGGLE (Level 4 Task 4)
// ══════════════════════════════════════════
function toggleDetails(id) {
  const el = document.getElementById(`details-${id}`);
  const btn = el.previousElementSibling;
  const isOpen = el.classList.toggle('open');
  btn.textContent = isOpen ? '－ Less Details' : '＋ More Details';
}

// ══════════════════════════════════════════
//   CART (Level 4 Task 2)
// ══════════════════════════════════════════
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  const btn = document.getElementById(`cart-btn-${id}`);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  // Button feedback (Level 4 Task 1)
  if (btn) {
    btn.classList.add('added');
    btn.textContent = '✓ Added!';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.textContent = '🛒 Add to Cart';
    }, 2000);
  }

  updateCartUI();
  showToast(`✅ "${product.name.split(' ').slice(0,3).join(' ')}..." added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  updateCartUI();
}

function clearCart() {
  cart = [];
  updateCartUI();
  showToast('🗑️ Cart cleared');
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartItemCount').textContent = `(${count} item${count !== 1 ? 's' : ''})`;
  document.getElementById('cartSubtotal').textContent = `₹${subtotal.toLocaleString()}`;
  document.getElementById('cartTotal').textContent = `₹${subtotal.toLocaleString()}`;

  const cartItems = document.getElementById('cartItems');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartFooter = document.getElementById('cartFooter');

  if (cart.length === 0) {
    cartItems.innerHTML = `<div class="cart-empty" id="cartEmpty">
      <span>🛍️</span>
      <p>Your cart is empty</p>
      <button class="btn-primary" onclick="toggleCart()">Start Shopping</button>
    </div>`;
    cartFooter.style.display = 'none';
  } else {
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.image}" alt="${item.name}"/>
        <div class="cart-item-info">
          <h4>${item.name.split(' ').slice(0, 4).join(' ')}...</h4>
          <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">🗑</button>
      </div>
    `).join('');
    cartFooter.style.display = 'block';
  }
}

function toggleCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  drawer.classList.toggle('open');
  overlay.classList.toggle('open');
}

function checkout() {
  if (cart.length === 0) return;
  showToast('🚀 Redirecting to checkout...');
  setTimeout(() => {
    alert('🎉 Thank you for shopping at The collective Store!\n\nOrder Summary:\n' +
      cart.map(i => `• ${i.name.split(' ').slice(0,3).join(' ')} x${i.qty} — ₹${(i.price*i.qty).toLocaleString()}`).join('\n') +
      `\n\nTotal: ₹${cart.reduce((s, i) => s + i.price * i.qty, 0).toLocaleString()}`
    );
  }, 800);
}

// ══════════════════════════════════════════
//   WISHLIST
// ══════════════════════════════════════════
let wishlist = new Set();
function toggleWishlist(e, id) {
  e.stopPropagation();
  const btn = document.getElementById(`wish-${id}`);
  if (wishlist.has(id)) {
    wishlist.delete(id);
    btn.classList.remove('active');
    btn.textContent = '♡';
    showToast('💔 Removed from wishlist');
  } else {
    wishlist.add(id);
    btn.classList.add('active');
    btn.textContent = '♥';
    showToast('❤️ Added to wishlist!');
  }
}

// ══════════════════════════════════════════
//   PRODUCT MODAL
// ══════════════════════════════════════════
function openModal(id) {
  const p = products.find(x => x.id === id);
  const modal = document.getElementById('productModal');
  const overlay = document.getElementById('modalOverlay');

  document.getElementById('modalContent').innerHTML = `
    <img class="modal-img" src="${p.image}" alt="${p.name}"/>
    <div class="modal-info">
      <div class="product-category">${p.category}</div>
      <h2>${p.name}</h2>
      <div class="product-rating">
        <span class="stars">${getStars(p.rating)}</span>
        <span class="rating-count">${p.rating} (${p.reviews.toLocaleString()} reviews)</span>
      </div>
      <div class="product-price-row">
        <span class="product-price">₹${p.price.toLocaleString()}</span>
        ${p.oldPrice ? `<span class="product-price-old">₹${p.oldPrice.toLocaleString()}</span>` : ''}
        ${p.oldPrice ? `<span class="product-discount">${getDiscount(p.price, p.oldPrice)}% off</span>` : ''}
      </div>
      <p class="modal-desc">${p.desc}<br/><br/><strong>Specs:</strong> ${p.details}</p>
      <ul class="modal-features">
        ${p.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <button class="add-to-cart-btn" onclick="addToCart(${p.id}); closeModal();">
        🛒 Add to Cart — ₹${p.price.toLocaleString()}
      </button>
    </div>
  `;

  modal.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').classList.remove('open');
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ══════════════════════════════════════════
//   CONTACT FORM (Level 4 Task 3)
// ══════════════════════════════════════════
function submitContact(e) {
  e.preventDefault();
  const name = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const message = document.getElementById('cMessage').value.trim();

  if (!name || !email || !message) {
    showToast('⚠️ Please fill in all required fields');
    return;
  }

  const btn = e.target.querySelector('button[type=submit]');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    document.getElementById('formSuccess').style.display = 'block';
    e.target.reset();
    btn.textContent = 'Send Message 🚀';
    btn.disabled = false;
    showToast('✅ Message sent successfully!');
    setTimeout(() => {
      document.getElementById('formSuccess').style.display = 'none';
    }, 5000);
  }, 1500);
}

// ══════════════════════════════════════════
//   TOAST NOTIFICATION
// ══════════════════════════════════════════
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ══════════════════════════════════════════
//   NAVIGATION
// ══════════════════════════════════════════
function toggleNav() {
  const nav = document.getElementById('nav');
  const btn = document.getElementById('hamburger');
  nav.classList.toggle('open');
  btn.classList.toggle('open');
}

function setActive(el) {
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  el.classList.add('active');
  toggleNav(); // Close on mobile
}

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const backToTop = document.getElementById('backToTop');

  if (window.scrollY > 80) {
    header.classList.add('scrolled');
    backToTop.classList.add('visible');
  } else {
    header.classList.remove('scrolled');
    backToTop.classList.remove('visible');
  }
});

// Close nav on outside click
document.addEventListener('click', (e) => {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  if (nav.classList.contains('open') && !nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
  }
});

// ESC to close modal/cart
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    if (document.getElementById('cartDrawer').classList.contains('open')) toggleCart();
  }
});

// ══════════════════════════════════════════
//   INIT
// ══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
  updateCartUI();
});
