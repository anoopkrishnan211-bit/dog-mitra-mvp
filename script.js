const products = [
  { id: 1, name: "Indian Pariah Puppy Food", hi: "\u0907\u0902\u0921\u093f\u092f\u0928 \u092a\u0930\u093f\u092f\u093e \u092a\u092a\u0940 \u092b\u0942\u0921", category: "food", price: 1299, image: "assets/indian-pariah.svg" },
  { id: 2, name: "Rajapalayam Coat Care", hi: "\u0930\u093e\u091c\u093e\u092a\u093e\u0932\u092f\u092e \u0915\u094b\u091f \u0915\u0947\u092f\u0930", category: "care", price: 499, image: "assets/rajapalayam.svg" },
  { id: 3, name: "Mudhol Hound Harness", hi: "\u092e\u0941\u0927\u094b\u0932 \u0939\u093e\u0909\u0902\u0921 \u0939\u093e\u0930\u094d\u0928\u0947\u0938", category: "accessory", price: 799, image: "assets/mudhol-hound.svg" },
  { id: 4, name: "Kombai Dental Chew Pack", hi: "\u0915\u094b\u092e\u094d\u092c\u0908 \u0921\u0947\u0902\u091f\u0932 \u091a\u094d\u092f\u0942 \u092a\u0948\u0915", category: "care", price: 349, image: "assets/kombai.svg" }
];

const translations = {
  hi: {
    brandTag: "\u0935\u0947\u091f \u0915\u094d\u0932\u093f\u0928\u093f\u0915 \u0914\u0930 \u092a\u0947\u091f \u0915\u0947\u092f\u0930",
    navServices: "\u0938\u0947\u0935\u093e\u090f\u0902",
    navDoctor: "\u0921\u0949\u0915\u094d\u091f\u0930",
    navShop: "\u0936\u0949\u092a",
    navBooking: "\u092c\u0941\u0915\u093f\u0902\u0917",
    navNews: "\u0928\u094d\u092f\u0942\u091c \u0914\u0930 \u092c\u094d\u0932\u0949\u0917",
    navEvents: "\u0907\u0935\u0947\u0902\u091f\u094d\u0938",
    navContact: "\u0938\u0902\u092a\u0930\u094d\u0915",
    staffLogin: "\u090f\u0921\u092e\u093f\u0928 \u0932\u0949\u0917\u093f\u0928",
    heroEyebrow: "\u0926\u0947\u0935\u093e\u0938 \u092e\u0947\u0902 \u092d\u0930\u094b\u0938\u0947\u092e\u0902\u0926 \u092a\u0936\u0941 \u091a\u093f\u0915\u093f\u0924\u094d\u0938\u093e",
    heroTitle: "\u0915\u094d\u0932\u093f\u0928\u093f\u0915 \u0935\u093f\u091c\u093f\u091f \u0938\u0947 \u0932\u0947\u0915\u0930 \u0918\u0930 \u092a\u0930 \u0926\u0947\u0916\u092d\u093e\u0932 \u0924\u0915, dogs \u0915\u0947 \u0932\u093f\u090f \u0938\u0902\u0935\u0947\u0926\u0928\u0936\u0940\u0932 care\u0964",
    heroCopy: "Dr. Sanjeev Kumre \u0938\u0947 \u0938\u0932\u093e\u0939 \u0932\u0947\u0902, home visit book \u0915\u0930\u0947\u0902, vaccination care manage \u0915\u0930\u0947\u0902 \u0914\u0930 Dog Mitra \u0938\u0947 genuine pet essentials \u0916\u0930\u0940\u0926\u0947\u0902\u0964",
    bookNow: "\u0905\u092a\u0949\u0907\u0902\u091f\u092e\u0947\u0902\u091f \u092c\u0941\u0915 \u0915\u0930\u0947\u0902",
    whatsapp: "\u0935\u094d\u0939\u093e\u091f\u094d\u0938\u090f\u092a \u0915\u094d\u0932\u093f\u0928\u093f\u0915",
    rating: "Google rating focus",
    homeVisitBadge: "visit available",
    medicines: "medicines",
    emergency: "consult guidance",
    heroCaption: "\u0926\u0947\u0935\u093e\u0938 \u092a\u0930\u093f\u0935\u093e\u0930\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f clinic consultation, vaccination care, wellness support \u0914\u0930 home visit\u0964",
    trustEyebrow: "Pet parents Dog Mitra \u092a\u0930 \u092d\u0930\u094b\u0938\u093e \u0915\u094d\u092f\u094b\u0902 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902",
    trustTitle: "Clear communication \u0914\u0930 practical follow-up \u0915\u0947 \u0938\u093e\u0925 professional veterinary attention\u0964",
    certified: "Veterinary doctor",
    homeCare: "Care at your doorstep",
    records: "Vaccination \u0914\u0930 care history",
    localTrust: "Trusted local clinic",
    doctorEyebrow: "Doctor profile",
    doctorBio: "Dr. Sanjeev Kumre Dog Mitra \u0915\u094b dog wellness, preventive care, vaccination guidance, everyday illness support \u0914\u0930 pet parents \u0915\u0947 \u0932\u093f\u090f clear advice \u0915\u0947 \u0938\u093e\u0925 lead \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964",
    specialization: "Specialization",
    specializationValue: "Dog consultation, vaccination, wellness \u0914\u0930 home care",
    languages: "Languages",
    languagesValue: "English, Hindi",
    timings: "Consultation",
    timingsValue: "\u0906\u091c \u0915\u0940 availability \u0915\u0947 \u0932\u093f\u090f call \u092f\u093e WhatsApp \u0915\u0930\u0947\u0902",
    servicesEyebrow: "Care services",
    servicesTitle: "Routine, preventive, urgent \u0914\u0930 home-based needs \u0915\u0947 \u0932\u093f\u090f structured care\u0964",
    serviceClinic: "Clinic consultation",
    serviceClinicCopy: "General checkups, illness review, treatment guidance \u0914\u0930 follow-up planning\u0964",
    serviceHome: "Home visit",
    serviceHomeCopy: "\u0909\u0928 pets \u0915\u0947 \u0932\u093f\u090f doorstep care \u091c\u093f\u0928\u094d\u0939\u0947\u0902 familiar surroundings \u092f\u093e easier handling \u091a\u093e\u0939\u093f\u090f\u0964",
    serviceVaccine: "Vaccination care",
    serviceVaccineCopy: "Dogs \u0915\u0947 \u0932\u093f\u090f vaccination planning, due-date reminders \u0914\u0930 record support\u0964",
    serviceEmergency: "Emergency guidance",
    serviceEmergencyCopy: "Immediate clinic visit \u0915\u0940 \u091c\u0930\u0942\u0930\u0924 \u0938\u092e\u091d\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f quick call support\u0964",
    bookService: "Book now",
    bookService2: "Book now",
    bookService3: "Book now",
    callNow: "Call now",
    shopEyebrow: "Pet care store",
    shopTitle: "Genuine food, care products, accessories \u0914\u0930 wellness essentials\u0964",
    shopCopy: "Trusted products browse \u0915\u0930\u0947\u0902, category filter \u0915\u0930\u0947\u0902, cart \u092e\u0947\u0902 add \u0915\u0930\u0947\u0902 \u0914\u0930 clinic number \u092a\u0930 UPI \u0938\u0947 pay \u0915\u0930\u0947\u0902\u0964",
    all: "\u0938\u092d\u0940",
    food: "\u092b\u0942\u0921",
    care: "\u0915\u0947\u092f\u0930",
    accessory: "\u090f\u0915\u094d\u0938\u0947\u0938\u0930\u0940",
    searchProducts: "Pet products \u0916\u094b\u091c\u0947\u0902",
    bookingEyebrow: "Appointment booking",
    bookingTitle: "Care need share \u0915\u0930\u0947\u0902 \u0914\u0930 clinic team next available slot confirm \u0915\u0930\u0947\u0917\u0940\u0964",
    petParent: "Pet parent",
    petName: "Pet name",
    bookingType: "Booking type",
    clinicVisit: "Clinic visit",
    homeVisit: "Home visit",
    vaccination: "Vaccination",
    emergencyConsult: "Emergency consultation",
    date: "Preferred date",
    phone: "Phone",
    notes: "Care notes",
    fullName: "\u092a\u0942\u0930\u093e \u0928\u093e\u092e",
    petNamePh: "Pet name",
    notesPh: "Symptoms, vaccination due date, address, \u092f\u093e visit reason",
    confirmBooking: "Confirmation request \u0915\u0930\u0947\u0902",
    adminEyebrow: "Clinic operations",
    adminTitle: "Appointments, orders, products, pet records \u0914\u0930 customer follow-ups \u0915\u0947 \u0932\u093f\u090f staff tools\u0964",
    orders: "Orders",
    appointments: "Appointments",
    inventory: "Inventory alerts",
    followups: "Follow-ups",
    monthly: "monthly",
    weekly: "this week",
    lowStock: "low stock",
    dueSoon: "due soon",
    reviewEyebrow: "Reviews and care stories",
    reviewTitle: "Pet parents \u0915\u0947 \u0932\u093f\u090f clear advice, careful handling \u0914\u0930 reliable follow-up\u0964",
    testimonial: "\"Clinic team \u0928\u0947 \u0939\u092e\u093e\u0930\u0947 dog \u0915\u094b comfortable \u0930\u0916\u093e \u0914\u0930 \u0905\u0917\u0932\u0947 care steps clearly \u0938\u092e\u091d\u093e\u090f\u0964\"",
    faq1: "\u0915\u094d\u092f\u093e \u092e\u0948\u0902 home visit online book \u0915\u0930 \u0938\u0915\u0924\u093e \u0939\u0942\u0902?",
    faq1Ans: "\u0939\u093e\u0901\u0964 Booking form \u092e\u0947\u0902 Home visit \u091a\u0941\u0928\u0947\u0902 \u0914\u0930 notes \u092e\u0947\u0902 \u0905\u092a\u0928\u093e address add \u0915\u0930\u0947\u0902\u0964",
    faq2: "\u0915\u094d\u092f\u093e \u092e\u0948\u0902 UPI \u0938\u0947 pay \u0915\u0930 \u0938\u0915\u0924\u093e \u0939\u0942\u0902?",
    faq2Ans: "\u0939\u093e\u0901\u0964 UPI payment \u0915\u0947 \u0932\u093f\u090f 8590324142 use \u0915\u0930\u0947\u0902 \u0914\u0930 confirmation clinic \u0915\u0947 \u0938\u093e\u0925 share \u0915\u0930\u0947\u0902\u0964",
    faq3: "\u0915\u094d\u092f\u093e vaccination records maintain \u0939\u094b\u0924\u0947 \u0939\u0948\u0902?",
    faq3Ans: "Clinic returning customers \u0915\u0947 \u0932\u093f\u090f vaccination history \u0914\u0930 follow-up dates track \u0915\u0930\u0928\u0947 \u092e\u0947\u0902 help \u0915\u0930 \u0938\u0915\u0924\u093e \u0939\u0948\u0964",
    newsEyebrow: "News & Blogs",
    newsTitle: "Dog Mitra \u0938\u0947 pet care updates, clinic news \u0914\u0930 practical guidance\u0964",
    newsIntro: "Clinic team staff management area \u0938\u0947 health tips, seasonal care notes, vaccination guidance, product education \u0914\u0930 local announcements publish \u0915\u0930 \u0938\u0915\u0924\u0940 \u0939\u0948\u0964",
    blogOneTitle: "Clinic visit \u0915\u0947 \u0932\u093f\u090f \u0905\u092a\u0928\u0947 dog \u0915\u094b \u0915\u0948\u0938\u0947 prepare \u0915\u0930\u0947\u0902",
    blogOneCopy: "Consultation \u0915\u0947 \u0926\u094c\u0930\u093e\u0928 safer handling, lower stress \u0914\u0930 better communication \u0915\u0947 \u0932\u093f\u090f simple steps\u0964",
    blogTwoTitle: "Vaccination records \u0915\u094d\u092f\u094b\u0902 \u091c\u0930\u0942\u0930\u0940 \u0939\u0948\u0902",
    blogTwoCopy: "Updated records pet parents \u0915\u094b preventive care \u0914\u0930 timely follow-ups plan \u0915\u0930\u0928\u0947 \u092e\u0947\u0902 help \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964",
    adminManaged: "Staff managed",
    blogAdminTitle: "News \u0914\u0930 blogs publish \u0915\u0930\u0947\u0902",
    blogAdminCopy: "Authorized staff clinic news, blog articles, images, categories \u0914\u0930 SEO details add, edit, schedule \u0914\u0930 organize \u0915\u0930 \u0938\u0915\u0924\u093e \u0939\u0948\u0964",
    manageNews: "Content manage \u0915\u0930\u0947\u0902",
    eventsEyebrow: "Upcoming events",
    eventsTitle: "Health camps, vaccination drives, awareness sessions \u0914\u0930 community pet care activities\u0964",
    eventsIntro: "Staff title, date, time, location, capacity, registration status \u0914\u0930 event images fully control \u0915\u0930 \u0938\u0915\u0924\u093e \u0939\u0948\u0964",
    eventOneTitle: "Vaccination awareness day",
    eventOneCopy: "Core vaccinations, booster timelines \u0914\u0930 record maintenance \u092a\u0930 pet parents \u0915\u0947 \u0932\u093f\u090f guidance\u0964",
    eventTwoTitle: "Monsoon dog care session",
    eventTwoCopy: "Monsoon \u092e\u0947\u0902 skin care, tick prevention, diet \u0914\u0930 safe walking routines \u0915\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902 \u091c\u093e\u0928\u0947\u0902\u0964",
    addEvent: "Add",
    eventAdminTitle: "Upcoming events manage \u0915\u0930\u0947\u0902",
    eventAdminCopy: "Authorized staff events create, update, publish, registrations close \u0914\u0930 archive \u0915\u0930 \u0938\u0915\u0924\u093e \u0939\u0948\u0964",
    manageEvents: "Events manage \u0915\u0930\u0947\u0902",
    policiesEyebrow: "Customer policies",
    policiesTitle: "Appointments, orders, prescriptions, privacy \u0914\u0930 refunds \u0915\u0947 \u0932\u093f\u090f transparent policies\u0964",
    privacy: "Privacy Policy",
    privacyCopy: "Customer \u0914\u0930 pet details clinic communication, appointment support, order handling \u0914\u0930 care records \u0915\u0947 \u0932\u093f\u090f use \u0939\u094b\u0924\u0947 \u0939\u0948\u0902\u0964",
    refund: "Refund Policy",
    refundCopy: "Refunds \u092f\u093e replacements product condition, order status \u0914\u0930 clinic verification \u092a\u0930 depend \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964",
    shipping: "Shipping Policy",
    shippingCopy: "Local fulfilment product availability \u0914\u0930 Dewas \u092e\u0947\u0902 delivery feasibility \u092a\u0930 depend \u0915\u0930\u0924\u093e \u0939\u0948\u0964",
    prescription: "Prescription Policy",
    prescriptionCopy: "Prescription medicines \u0915\u0947\u0935\u0932 veterinary guidance \u092e\u0947\u0902 use \u0915\u0930\u0947\u0902\u0964",
    doctorLabel: "Doctor:",
    hours: "Clinic hours:",
    openMaps: "Google Maps खोलें",
    cart: "Cart",
    total: "Total",
    upiPay: "UPI payment number",
    upiHint: "UPI payment \u0915\u0947 \u0932\u093f\u090f \u0907\u0938 number \u0915\u093e use \u0915\u0930\u0947\u0902\u0964",
    secureCheckout: "UPI से pay करें",
    adminSecure: "Website management",
    adminPortalLogin: "Admin Login",
    adminEmail: "Email या phone",
    adminPassword: "Password",
    loginManage: "Login to manage site",
    manageProducts: "Products",
    manageAppointments: "Appointments",
    manageOrders: "Orders",
    manageContent: "Content",
    manageBlogs: "News & Blogs",
    manageEventsPanel: "Events",
    adminWelcome: "Admin access request received. Secure access will be verified by the clinic administrator.",
    upiReady: "UPI payment can be made on 8590324142. Please share the payment confirmation on WhatsApp.",
    added: "Cart में जोड़ा",
    emptyCart: "Cart खाली है।",
    bookingDone: "Booking request received. Clinic team will contact you shortly."
  }
};

let activeFilter = "all";
let currentLang = "en";
const cart = [];
const grid = document.querySelector("#productGrid");
const search = document.querySelector("#productSearch");
const cartCount = document.querySelector("#cartCount");
const cartDrawer = document.querySelector("#cartDrawer");
const cartItems = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");

function money(value) { return "Rs. " + value.toLocaleString("en-IN"); }
function t(key, fallback) { return currentLang === "hi" ? (translations.hi[key] || fallback) : fallback; }
function productName(product) { return currentLang === "hi" ? product.hi : product.name; }

function renderProducts() {
  const term = search.value.trim().toLowerCase();
  const visible = products.filter(function(product) {
    return (activeFilter === "all" || product.category === activeFilter) && product.name.toLowerCase().includes(term);
  });
  grid.innerHTML = visible.map(function(product) {
    return '<article class="product-card">' +
      '<img src="' + product.image + '" alt="' + product.name + '" loading="lazy">' +
      '<h3>' + productName(product) + '</h3>' +
      '<div class="product-meta"><span>' + product.category + '</span><strong>' + money(product.price) + '</strong></div>' +
      '<button class="primary-btn" type="button" data-add="' + product.id + '">' + (currentLang === "hi" ? "Cart में जोड़ें" : "Add to cart") + '</button>' +
    '</article>';
  }).join("");
}

function renderCart() {
  cartCount.textContent = cart.length;
  if (!cart.length) {
    cartItems.innerHTML = '<p>' + t("emptyCart", "Your cart is empty.") + "</p>";
    cartTotal.textContent = money(0);
    return;
  }
  cartItems.innerHTML = cart.map(function(item) {
    return '<div class="cart-line"><span>' + productName(item) + "</span><strong>" + money(item.price) + "</strong></div>";
  }).join("");
  cartTotal.textContent = money(cart.reduce(function(sum, item) { return sum + item.price; }, 0));
}

document.querySelectorAll(".filter-chip").forEach(function(button) {
  button.addEventListener("click", function() {
    document.querySelectorAll(".filter-chip").forEach(function(chip) { chip.classList.remove("active"); });
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderProducts();
  });
});

search.addEventListener("input", renderProducts);
grid.addEventListener("click", function(event) {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  const product = products.find(function(item) { return item.id === Number(button.dataset.add); });
  cart.push(product);
  renderCart();
  button.textContent = t("added", "Added");
  setTimeout(renderProducts, 650);
});

document.querySelector("#cartButton").addEventListener("click", function() { cartDrawer.classList.add("open"); cartDrawer.setAttribute("aria-hidden", "false"); renderCart(); });
document.querySelector("#closeCart").addEventListener("click", function() { cartDrawer.classList.remove("open"); cartDrawer.setAttribute("aria-hidden", "true"); });
cartDrawer.addEventListener("click", function(event) { if (event.target === cartDrawer) document.querySelector("#closeCart").click(); });

document.querySelector("#bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();
  document.querySelector("#bookingStatus").textContent = t("bookingDone", "Booking request received. Clinic team will contact you shortly.");
  event.currentTarget.reset();
});

document.querySelector("#languageToggle").addEventListener("click", function() {
  currentLang = currentLang === "en" ? "hi" : "en";
  document.documentElement.lang = currentLang;
  document.querySelector("#languageToggle").textContent = currentLang === "en" ? "हिंदी" : "English";
  document.querySelectorAll("[data-i18n]").forEach(function(node) {
    if (!node.dataset.en) node.dataset.en = node.textContent;
    node.textContent = currentLang === "hi" ? translations.hi[node.dataset.i18n] || node.dataset.en : node.dataset.en;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function(node) {
    if (!node.dataset.enPlaceholder) node.dataset.enPlaceholder = node.placeholder;
    node.placeholder = currentLang === "hi" ? translations.hi[node.dataset.i18nPlaceholder] || node.dataset.enPlaceholder : node.dataset.enPlaceholder;
  });
  renderProducts();
  renderCart();
});

renderProducts();
renderCart();

const adminModal = document.querySelector("#adminModal");
const adminLoginButton = document.querySelector("#adminLoginButton");
const adminOpenButtons = document.querySelectorAll(".admin-open");
const closeAdmin = document.querySelector("#closeAdmin");
const adminLoginForm = document.querySelector("#adminLoginForm");
const upiCheckout = document.querySelector("#upiCheckout");

if (adminLoginButton && adminModal) {
  adminLoginButton.addEventListener("click", function() {
    adminModal.classList.add("open");
    adminModal.setAttribute("aria-hidden", "false");
  });
}

adminOpenButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    if (!adminModal) return;
    adminModal.classList.add("open");
    adminModal.setAttribute("aria-hidden", "false");
  });
});

if (closeAdmin && adminModal) {
  closeAdmin.addEventListener("click", function() {
    adminModal.classList.remove("open");
    adminModal.setAttribute("aria-hidden", "true");
  });
  adminModal.addEventListener("click", function(event) {
    if (event.target === adminModal) closeAdmin.click();
  });
}

if (adminLoginForm) {
  adminLoginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    document.querySelector("#adminStatus").textContent = t("adminWelcome", "Admin access request received. Secure access will be verified by the clinic administrator.");
  });
}

if (upiCheckout) {
  upiCheckout.addEventListener("click", function() {
    alert(t("upiReady", "UPI payment can be made on 8590324142. Please share the payment confirmation on WhatsApp."));
  });
}
