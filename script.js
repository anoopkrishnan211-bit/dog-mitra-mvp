const products = [
  { id: 1, name: 'Indian Pariah Puppy Food', hi: 'इंडियन परिया पपी फूड', category: 'food', price: 1299, image: 'assets/indian-pariah.svg' },
  { id: 2, name: 'Rajapalayam Coat Care', hi: 'राजापालयम कोट केयर', category: 'care', price: 499, image: 'assets/rajapalayam.svg' },
  { id: 3, name: 'Mudhol Hound Harness', hi: 'मुधोल हाउंड हार्नेस', category: 'accessory', price: 799, image: 'assets/mudhol-hound.svg' },
  { id: 4, name: 'Kombai Dental Chew Pack', hi: 'कोम्बई डेंटल च्यू पैक', category: 'care', price: 349, image: 'assets/kombai.svg' }
];

const translations = { hi: {
  brandTag: 'वेट क्लिनिक और पेट केयर', navServices: 'सेवाएं', navShop: 'शॉप', navBooking: 'बुकिंग', navAdmin: 'एडमिन', navContact: 'संपर्क',
  heroEyebrow: 'डॉग मित्रा, देवास', heroTitle: 'प्रीमियम पशु चिकित्सा, होम विजिट और पेट आवश्यकताएं एक ही जगह।', heroCopy: 'Dr. Sanjeev Kumre के साथ अपॉइंटमेंट बुक करें, होम केयर मांगें, भरोसेमंद प्रोडक्ट खरीदें और हर पेट रिकॉर्ड व्यवस्थित रखें।', bookNow: 'अपॉइंटमेंट बुक करें', whatsapp: 'व्हाट्सऐप क्लिनिक', uptime: 'अपटाइम लक्ष्य', load: 'पेज लोड लक्ष्य', review: 'सप्ताह समीक्षा',
  aboutEyebrow: 'क्लिनिक के बारे में', aboutTitle: 'देवास परिवारों के लिए डिजिटल-फर्स्ट पेट केयर अनुभव।', aboutCopy: 'Dog Mitra क्लिनिक अपॉइंटमेंट, होम विजिट, हाइपर केयर, ऑनलाइन शॉपिंग, पेट हेल्थ रिकॉर्ड और फॉलो-अप को एक responsive bilingual platform में लाता है।',
  servicesEyebrow: 'केयर सेवाएं', servicesTitle: 'पेट और क्लिनिक स्टाफ की रोजमर्रा की जरूरतों के लिए बनाया गया।', serviceClinic: 'क्लिनिक अपॉइंटमेंट', serviceClinicCopy: 'स्लॉट बुकिंग, स्टेटस ट्रैकिंग, अपॉइंटमेंट हिस्ट्री और स्टाफ मैनेजमेंट।', serviceHome: 'होम विजिट बुकिंग', serviceHomeCopy: 'पता, पेट डिटेल, पसंदीदा तारीख और केयर नोट्स के साथ doorstep care request करें।', serviceHyper: 'हाइपर केयर सेवाएं', serviceHyperCopy: 'vaccination, recovery, grooming और wellness follow-up के लिए priority workflows।', serviceRecords: 'पेट हेल्थ रिकॉर्ड', serviceRecordsCopy: 'Medical notes, vaccination records, communication history और purchase insights।',
  shopEyebrow: 'पेट शॉप', shopTitle: 'कैटलॉग, फिल्टर, कार्ट, चेकआउट और ऑर्डर ट्रैकिंग।', shopCopy: 'MVP में product management, inventory visibility, secure payments, customer accounts, reviews और local order updates शामिल हैं।', all: 'सभी', food: 'फूड', care: 'केयर', accessory: 'एक्सेसरी', searchProducts: 'पेट प्रोडक्ट खोजें',
  bookingEyebrow: 'अपॉइंटमेंट सिस्टम', bookingTitle: 'क्लिनिक विजिट और होम विजिट एक मिनट में बुक करें।', petParent: 'पेट पैरेंट', petName: 'पेट का नाम', bookingType: 'बुकिंग टाइप', clinicVisit: 'क्लिनिक विजिट', homeVisit: 'होम विजिट', hyperCare: 'हाइपर केयर', date: 'पसंदीदा तारीख', phone: 'फोन', notes: 'केयर नोट्स', fullName: 'पूरा नाम', petNamePh: 'पेट का नाम', notesPh: 'लक्षण, vaccination due date, या visit reason', confirmBooking: 'बुकिंग कन्फर्म करें',
  adminEyebrow: 'एडमिन पोर्टल + CRM', adminTitle: 'Products, appointments, customers, pets और content के लिए practical control center।', orders: 'ऑर्डर', appointments: 'अपॉइंटमेंट', inventory: 'इन्वेंटरी अलर्ट', followups: 'फॉलो-अप', cms: 'CMS', rbac: 'Role-based access', analytics: 'Analytics dashboard', activityLogs: 'Activity logs', backups: 'Backups', vaccination: 'Vaccination records',
  trustEyebrow: 'गैलरी + टेस्टिमोनियल', trustTitle: 'नए pet parents के लिए भरोसेमंद proof।', testimonial: '"क्लिनिक टीम ने हमारे dog को comfortable रखा और follow-up reminders ने हमें track पर रखा।"', faq1: 'क्या मैं home visit online book कर सकता हूं?', faq1Ans: 'हाँ। Booking form में Home visit चुनें और notes में अपना address add करें।', faq2: 'क्या website Hindi support करेगी?', faq2Ans: 'हाँ। MVP में English और Hindi content switching शामिल है।',
  roadmapEyebrow: 'Product roadmap', roadmapTitle: 'MVP launch करें, real usage measure करें, फिर carefully expand करें।', phase1: 'Website, commerce, appointments, admin, CRM, SEO, security.', phase2: 'Mobile apps, video consults, reminders, loyalty, subscriptions.', phase3: 'AI pet care assistant, e-prescriptions, advanced CRM workflows.', phase4: 'Multi-branch, franchise, delivery, BI, forecasting, marketplace.', doctor: 'Doctor:', openMaps: 'Google Maps खोलें', cart: 'कार्ट', total: 'कुल', adminLogin: 'एडमिन लॉगिन', upiPay: 'UPI पेमेंट नंबर', upiHint: 'फिलहाल UPI भुगतान के लिए इसी नंबर का उपयोग करें।', secureCheckout: 'UPI से भुगतान करें', adminSecure: 'वेबसाइट मैनेजमेंट', adminPortalLogin: 'एडमिन लॉगिन', adminEmail: 'ईमेल या फोन', adminPassword: 'पासवर्ड', loginManage: 'साइट मैनेज करने के लिए लॉगिन करें', manageProducts: 'प्रोडक्ट्स', manageAppointments: 'अपॉइंटमेंट्स', manageOrders: 'ऑर्डर्स', manageContent: 'कंटेंट', adminWelcome: 'Demo admin access ready. In production this connects to secure authentication.', upiReady: 'UPI payment can be made on 9754240177. Please share the payment screenshot on WhatsApp.', secureCheckout: 'UPI से भुगतान करें', added: 'कार्ट में जोड़ा', emptyCart: 'कार्ट खाली है।', bookingDone: 'Booking request received. Clinic team will contact you shortly.'
}};

let activeFilter = 'all';
let currentLang = 'en';
const cart = [];
const grid = document.querySelector('#productGrid');
const search = document.querySelector('#productSearch');
const cartCount = document.querySelector('#cartCount');
const cartDrawer = document.querySelector('#cartDrawer');
const cartItems = document.querySelector('#cartItems');
const cartTotal = document.querySelector('#cartTotal');

function money(value) { return 'Rs. ' + value.toLocaleString('en-IN'); }
function t(key, fallback) { return currentLang === 'hi' ? (translations.hi[key] || fallback) : fallback; }
function productName(product) { return currentLang === 'hi' ? product.hi : product.name; }

function renderProducts() {
  const term = search.value.trim().toLowerCase();
  const visible = products.filter(function(product) {
    return (activeFilter === 'all' || product.category === activeFilter) && product.name.toLowerCase().includes(term);
  });
  grid.innerHTML = visible.map(function(product) {
    return '<article class="product-card">' +
      '<img src="' + product.image + '" alt="' + product.name + '">' +
      '<h3>' + productName(product) + '</h3>' +
      '<div class="product-meta"><span>' + product.category + '</span><strong>' + money(product.price) + '</strong></div>' +
      '<button class="primary-btn" type="button" data-add="' + product.id + '">' + (currentLang === 'hi' ? 'कार्ट में जोड़ें' : 'Add to cart') + '</button>' +
    '</article>';
  }).join('');
}

function renderCart() {
  cartCount.textContent = cart.length;
  if (!cart.length) {
    cartItems.innerHTML = '<p>' + t('emptyCart', 'Your cart is empty.') + '</p>';
    cartTotal.textContent = money(0);
    return;
  }
  cartItems.innerHTML = cart.map(function(item) {
    return '<div class="cart-line"><span>' + productName(item) + '</span><strong>' + money(item.price) + '</strong></div>';
  }).join('');
  cartTotal.textContent = money(cart.reduce(function(sum, item) { return sum + item.price; }, 0));
}

document.querySelectorAll('.filter-chip').forEach(function(button) {
  button.addEventListener('click', function() {
    document.querySelectorAll('.filter-chip').forEach(function(chip) { chip.classList.remove('active'); });
    button.classList.add('active');
    activeFilter = button.dataset.filter;
    renderProducts();
  });
});

search.addEventListener('input', renderProducts);
grid.addEventListener('click', function(event) {
  const button = event.target.closest('[data-add]');
  if (!button) return;
  const product = products.find(function(item) { return item.id === Number(button.dataset.add); });
  cart.push(product);
  renderCart();
  button.textContent = t('added', 'Added');
  setTimeout(renderProducts, 650);
});

document.querySelector('#cartButton').addEventListener('click', function() { cartDrawer.classList.add('open'); cartDrawer.setAttribute('aria-hidden', 'false'); renderCart(); });
document.querySelector('#closeCart').addEventListener('click', function() { cartDrawer.classList.remove('open'); cartDrawer.setAttribute('aria-hidden', 'true'); });
cartDrawer.addEventListener('click', function(event) { if (event.target === cartDrawer) document.querySelector('#closeCart').click(); });

document.querySelector('#bookingForm').addEventListener('submit', function(event) {
  event.preventDefault();
  document.querySelector('#bookingStatus').textContent = t('bookingDone', 'Booking request received. Clinic team will contact you shortly.');
  event.currentTarget.reset();
});

document.querySelector('#languageToggle').addEventListener('click', function() {
  currentLang = currentLang === 'en' ? 'hi' : 'en';
  document.documentElement.lang = currentLang;
  document.querySelector('#languageToggle').textContent = currentLang === 'en' ? 'हिंदी' : 'English';
  document.querySelectorAll('[data-i18n]').forEach(function(node) {
    if (!node.dataset.en) node.dataset.en = node.textContent;
    node.textContent = currentLang === 'hi' ? translations.hi[node.dataset.i18n] || node.dataset.en : node.dataset.en;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(node) {
    if (!node.dataset.enPlaceholder) node.dataset.enPlaceholder = node.placeholder;
    node.placeholder = currentLang === 'hi' ? translations.hi[node.dataset.i18nPlaceholder] || node.dataset.enPlaceholder : node.dataset.enPlaceholder;
  });
  renderProducts();
  renderCart();
});

renderProducts();
renderCart();

const adminModal = document.querySelector('#adminModal');
const adminLoginButton = document.querySelector('#adminLoginButton');
const closeAdmin = document.querySelector('#closeAdmin');
const adminLoginForm = document.querySelector('#adminLoginForm');
const upiCheckout = document.querySelector('#upiCheckout');

if (adminLoginButton && adminModal) {
  adminLoginButton.addEventListener('click', function() {
    adminModal.classList.add('open');
    adminModal.setAttribute('aria-hidden', 'false');
  });
}
if (closeAdmin && adminModal) {
  closeAdmin.addEventListener('click', function() {
    adminModal.classList.remove('open');
    adminModal.setAttribute('aria-hidden', 'true');
  });
  adminModal.addEventListener('click', function(event) {
    if (event.target === adminModal) closeAdmin.click();
  });
}
if (adminLoginForm) {
  adminLoginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelector('#adminStatus').textContent = t('adminWelcome', 'Demo admin access ready. In production this connects to secure authentication.');
  });
}
if (upiCheckout) {
  upiCheckout.addEventListener('click', function() {
    alert(t('upiReady', 'UPI payment can be made on 9754240177. Please share the payment screenshot on WhatsApp.'));
  });
}
