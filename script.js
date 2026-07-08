const products = [
  { id: 1, name: 'Indian Pariah Puppy Food', hi: 'इंडियन परिया पपी फूड', category: 'food', price: 1299, image: 'assets/indian-pariah.svg' },
  { id: 2, name: 'Rajapalayam Coat Care', hi: 'राजापालयम कोट केयर', category: 'care', price: 499, image: 'assets/rajapalayam.svg' },
  { id: 3, name: 'Mudhol Hound Harness', hi: 'मुधोल हाउंड हार्नेस', category: 'accessory', price: 799, image: 'assets/mudhol-hound.svg' },
  { id: 4, name: 'Kombai Dental Chew Pack', hi: 'कोम्बई डेंटल च्यू पैक', category: 'care', price: 349, image: 'assets/kombai.svg' }
];

const translations = { hi: {
  brandTag: 'वेट क्लिनिक और पेट केयर', navServices: 'सेवाएं', navDoctor: 'डॉक्टर', navShop: 'शॉप', navBooking: 'बुकिंग', navNews: 'न्यूज और ब्लॉग', navEvents: 'इवेंट्स', navContact: 'संपर्क', staffLogin: 'एडमिन लॉगिन',
  heroEyebrow: 'देवास में भरोसेमंद पशु चिकित्सा', heroTitle: 'क्लिनिक विजिट से लेकर घर पर देखभाल तक, dogs के लिए संवेदनशील care।', heroCopy: 'Dr. Sanjeev Kumre से सलाह लें, home visit book करें, vaccination care manage करें और Dog Mitra से genuine pet essentials खरीदें।', bookNow: 'अपॉइंटमेंट बुक करें', whatsapp: 'व्हाट्सऐप क्लिनिक', rating: 'Google rating focus', homeVisitBadge: 'visit available', medicines: 'medicines', emergency: 'consult guidance', heroCaption: 'देवास परिवारों के लिए clinic consultation, vaccination care, wellness support और home visit।',
  trustEyebrow: 'Pet parents Dog Mitra पर भरोसा क्यों करते हैं', trustTitle: 'Clear communication और practical follow-up के साथ professional veterinary attention।', certified: 'Veterinary doctor', homeCare: 'Care at your doorstep', records: 'Vaccination और care history', localTrust: 'Trusted local clinic',
  doctorEyebrow: 'Doctor profile', doctorBio: 'Dr. Sanjeev Kumre Dog Mitra को dog wellness, preventive care, vaccination guidance, everyday illness support और pet parents के लिए clear advice के साथ lead करते हैं।', specialization: 'Specialization', specializationValue: 'Dog consultation, vaccination, wellness और home care', languages: 'Languages', languagesValue: 'English, Hindi', timings: 'Consultation', timingsValue: 'आज की availability के लिए call या WhatsApp करें',
  servicesEyebrow: 'Care services', servicesTitle: 'Routine, preventive, urgent और home-based needs के लिए structured care।', serviceClinic: 'Clinic consultation', serviceClinicCopy: 'General checkups, illness review, treatment guidance और follow-up planning।', serviceHome: 'Home visit', serviceHomeCopy: 'उन pets के लिए doorstep care जिन्हें familiar surroundings या easier handling चाहिए।', serviceVaccine: 'Vaccination care', serviceVaccineCopy: 'Dogs के लिए vaccination planning, due-date reminders और record support।', serviceEmergency: 'Emergency guidance', serviceEmergencyCopy: 'Immediate clinic visit की जरूरत समझने के लिए quick call support।', bookService: 'Book now', bookService2: 'Book now', bookService3: 'Book now', callNow: 'Call now',
  shopEyebrow: 'Pet care store', shopTitle: 'Genuine food, care products, accessories और wellness essentials।', shopCopy: 'Trusted products browse करें, category filter करें, cart में add करें और clinic number पर UPI से pay करें।', all: 'सभी', food: 'फूड', care: 'केयर', accessory: 'एक्सेसरी', searchProducts: 'Pet products खोजें',
  bookingEyebrow: 'Appointment booking', bookingTitle: 'Care need share करें और clinic team next available slot confirm करेगी।', petParent: 'Pet parent', petName: 'Pet name', bookingType: 'Booking type', clinicVisit: 'Clinic visit', homeVisit: 'Home visit', vaccination: 'Vaccination', emergencyConsult: 'Emergency consultation', date: 'Preferred date', phone: 'Phone', notes: 'Care notes', fullName: 'पूरा नाम', petNamePh: 'Pet name', notesPh: 'Symptoms, vaccination due date, address, या visit reason', confirmBooking: 'Confirmation request करें',
  adminEyebrow: 'Clinic operations', adminTitle: 'Appointments, orders, products, pet records और customer follow-ups के लिए staff tools।', orders: 'Orders', appointments: 'Appointments', inventory: 'Inventory alerts', followups: 'Follow-ups', monthly: 'monthly', weekly: 'this week', lowStock: 'low stock', dueSoon: 'due soon',
  reviewEyebrow: 'Reviews and care stories', reviewTitle: 'Pet parents के लिए clear advice, careful handling और reliable follow-up।', testimonial: '"Clinic team ने हमारे dog को comfortable रखा और अगले care steps clearly समझाए।"', faq1: 'क्या मैं home visit online book कर सकता हूं?', faq1Ans: 'हाँ। Booking form में Home visit चुनें और notes में अपना address add करें।', faq2: 'क्या मैं UPI से pay कर सकता हूं?', faq2Ans: 'हाँ। UPI payment के लिए 9754240177 use करें और confirmation clinic के साथ share करें।', faq3: 'क्या vaccination records maintain होते हैं?', faq3Ans: 'Clinic returning customers के लिए vaccination history और follow-up dates track करने में help कर सकता है।',
  newsEyebrow: 'News & Blogs', newsTitle: 'Dog Mitra से pet care updates, clinic news और practical guidance।', newsIntro: 'Clinic team staff management area से health tips, seasonal care notes, vaccination guidance, product education और local announcements publish कर सकती है।', blogOneTitle: 'Clinic visit के लिए अपने dog को कैसे prepare करें', blogOneCopy: 'Consultation के दौरान safer handling, lower stress और better communication के लिए simple steps।', blogTwoTitle: 'Vaccination records क्यों जरूरी हैं', blogTwoCopy: 'Updated records pet parents को preventive care और timely follow-ups plan करने में help करते हैं।', adminManaged: 'Staff managed', blogAdminTitle: 'News और blogs publish करें', blogAdminCopy: 'Authorized staff clinic news, blog articles, images, categories और SEO details add, edit, schedule और organize कर सकता है।', manageNews: 'Content manage करें',
  eventsEyebrow: 'Upcoming events', eventsTitle: 'Health camps, vaccination drives, awareness sessions और community pet care activities।', eventsIntro: 'Staff title, date, time, location, capacity, registration status और event images fully control कर सकता है।', eventOneTitle: 'Vaccination awareness day', eventOneCopy: 'Core vaccinations, booster timelines और record maintenance पर pet parents के लिए guidance।', eventTwoTitle: 'Monsoon dog care session', eventTwoCopy: 'Monsoon में skin care, tick prevention, diet और safe walking routines के बारे में जानें।', addEvent: 'Add', eventAdminTitle: 'Upcoming events manage करें', eventAdminCopy: 'Authorized staff events create, update, publish, registrations close और archive कर सकता है।', manageEvents: 'Events manage करें',
  policiesEyebrow: 'Customer policies', policiesTitle: 'Appointments, orders, prescriptions, privacy और refunds के लिए transparent policies।', privacy: 'Privacy Policy', privacyCopy: 'Customer और pet details clinic communication, appointment support, order handling और care records के लिए use होते हैं।', refund: 'Refund Policy', refundCopy: 'Refunds या replacements product condition, order status और clinic verification पर depend करते हैं।', shipping: 'Shipping Policy', shippingCopy: 'Local fulfilment product availability और Dewas में delivery feasibility पर depend करता है।', prescription: 'Prescription Policy', prescriptionCopy: 'Prescription medicines केवल veterinary guidance में use करें।',
  doctorLabel: 'Doctor:', hours: 'Clinic hours:', openMaps: 'Google Maps खोलें', cart: 'Cart', total: 'Total', upiPay: 'UPI payment number', upiHint: 'UPI payment के लिए इस number का use करें।', secureCheckout: 'UPI से pay करें', adminSecure: 'Website management', adminPortalLogin: 'Admin Login', adminEmail: 'Email या phone', adminPassword: 'Password', loginManage: 'Login to manage site', manageProducts: 'Products', manageAppointments: 'Appointments', manageOrders: 'Orders', manageContent: 'Content', manageBlogs: 'News & Blogs', manageEventsPanel: 'Events', adminWelcome: 'Admin access request received. Secure access will be verified by the clinic administrator.', upiReady: 'UPI payment can be made on 9754240177. Please share the payment confirmation on WhatsApp.', added: 'Cart में जोड़ा', emptyCart: 'Cart खाली है।', bookingDone: 'Booking request received. Clinic team will contact you shortly.'
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
      '<img src="' + product.image + '" alt="' + product.name + '" loading="lazy">' +
      '<h3>' + productName(product) + '</h3>' +
      '<div class="product-meta"><span>' + product.category + '</span><strong>' + money(product.price) + '</strong></div>' +
      '<button class="primary-btn" type="button" data-add="' + product.id + '">' + (currentLang === 'hi' ? 'Cart में जोड़ें' : 'Add to cart') + '</button>' +
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
const adminOpenButtons = document.querySelectorAll('.admin-open');
const closeAdmin = document.querySelector('#closeAdmin');
const adminLoginForm = document.querySelector('#adminLoginForm');
const upiCheckout = document.querySelector('#upiCheckout');

if (adminLoginButton && adminModal) {
  adminLoginButton.addEventListener('click', function() {
    adminModal.classList.add('open');
    adminModal.setAttribute('aria-hidden', 'false');
  });
}
adminOpenButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    if (!adminModal) return;
    adminModal.classList.add('open');
    adminModal.setAttribute('aria-hidden', 'false');
  });
});
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
    document.querySelector('#adminStatus').textContent = t('adminWelcome', 'Admin access request received. Secure access will be verified by the clinic administrator.');
  });
}
if (upiCheckout) {
  upiCheckout.addEventListener('click', function() {
    alert(t('upiReady', 'UPI payment can be made on 9754240177. Please share the payment confirmation on WhatsApp.'));
  });
}