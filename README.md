# Dog Mitra MVP

Dog Mitra is a digital platform for a veterinary clinic and pet care store in Dewas, Madhya Pradesh. The current release is a polished static MVP designed to establish the clinic's online presence, demonstrate core customer journeys, and provide a clear foundation for future full-stack development.

## Project Summary

**Business:** Dog Mitra  
**Doctor:** Dr. Sanjeev Kumre  
**Contact:** +91 97542 40177  
**Address:** Shop number 14, Amer Mohini Garden, Ujjain Rd, near Abhinav Hotel, Shivaji Nagar, Moti Bunglow, Dewas, Madhya Pradesh 455001  
**Google Maps:** https://maps.app.goo.gl/JwNZ55GysRrY5hSs5

## Primary Objective

Launch a modern, bilingual web experience that supports the clinic's immediate operational goals:

- Build trust with pet parents through a premium web presence.
- Enable online appointment and home visit booking.
- Present a pet product catalogue with cart and UPI payment flow.
- Introduce an admin login pathway for future website and operations management.
- Document a scalable product roadmap for later phases.

## Current MVP Scope

This repository currently contains a front-end MVP built with plain HTML, CSS, and JavaScript. It is intentionally lightweight so it can be opened directly in a browser and reviewed without a backend setup.

### Included Customer-Facing Features

- Responsive premium homepage
- English and Hindi language toggle
- Clinic services section
- Home visit and hyper care service positioning
- Product catalogue
- Product category filters
- Product search
- Shopping cart drawer
- UPI payment prompt using clinic number
- Appointment booking form
- Gallery and testimonials section
- FAQ section
- Phase-based roadmap section
- Contact, call, WhatsApp, and Google Maps actions

### Included Admin/Operations Features

- Admin login entry point in the navigation
- Admin login modal
- Admin management areas shown for:
  - Products
  - Appointments
  - Orders
  - Content
- Admin dashboard preview with operational metrics
- CRM-oriented content for customer, pet, appointment, purchase, vaccination, and follow-up records

### Included Visual Identity

- Custom logo mark combining a paw and stethoscope
- Local dog breed visual assets
- Indian breed image set:
  - Indian Pariah
  - Rajapalayam
  - Mudhol Hound
  - Kombai

## Repository Structure

```text
Dog-Mitra/
├── assets/
│   ├── indian-pariah.svg
│   ├── kombai.svg
│   ├── mudhol-hound.svg
│   └── rajapalayam.svg
├── index.html
├── script.js
├── styles.css
└── README.md
```

## Technology Stack

| Layer | Current Implementation |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 |
| Interactivity | Vanilla JavaScript |
| Assets | Local SVG illustrations |
| Deployment readiness | Static hosting compatible |
| Backend | Not included in current MVP |
| Database | Not included in current MVP |
| Payment | UPI instruction flow, no payment gateway integration yet |

## How to Run Locally

No package installation is required.

1. Open the project folder.
2. Open `index.html` in a browser.
3. Review the website from the homepage.

Because this is a static MVP, it does not require Node.js, npm, or a development server.

## Key User Journeys

### Appointment Booking

1. Customer opens the site.
2. Customer selects appointment section.
3. Customer enters pet parent details, pet name, booking type, preferred date, phone number, and care notes.
4. Website displays a booking confirmation message.

Current behavior is front-end only. A production version should store this request in a backend database and notify clinic staff.

### Product Purchase

1. Customer browses the shop section.
2. Customer filters or searches products.
3. Customer adds products to cart.
4. Customer opens cart.
5. Customer sees total amount and UPI payment number.
6. Customer pays via UPI using `9754240177`.

Current behavior is front-end only. A production version should include order persistence, payment verification, invoices, and order tracking.

### Admin Login

1. Admin clicks `Admin Login`.
2. Admin modal opens.
3. Admin enters login details.
4. Website displays a demo management confirmation.

Current behavior is a UI placeholder. A production version must connect this to secure authentication and role-based access control.

## Product Roadmap

### Phase 1: MVP

The current project scope focuses on launching a production-ready foundation for:

- Website presence
- Bilingual experience
- E-commerce catalogue
- Cart and UPI checkout flow
- Appointment and home visit booking
- Admin portal concept
- Lightweight CRM concept
- SEO and local business readiness
- Security planning

### Potential Phase 2

- Android application
- iOS application
- Online video consultations
- Automated vaccination reminders
- Loyalty and rewards program
- Membership plans
- Subscription orders
- Advanced inventory reporting
- Discount campaigns
- Push notifications

### Potential Phase 3

- AI-powered pet care assistant
- Digital pet health records
- Electronic prescriptions
- Customer self-service portal enhancements
- Multi-doctor scheduling
- Telemedicine workflows
- Advanced CRM automation

### Potential Phase 4

- Multi-branch management
- Franchise management
- Doctor mobile application
- Staff mobile application
- Delivery management
- Vendor management
- Warehouse management
- Business intelligence dashboards
- AI demand forecasting
- Predictive inventory planning
- Marketplace for partner veterinarians

## Success Metrics

### Business KPIs

- Increase in monthly appointments
- Increase in online product sales
- Growth in website traffic
- Growth in repeat customers
- Reduction in phone-based inquiries
- Reduction in manual administrative work

### Customer KPIs

- Appointment completion rate
- Checkout completion rate
- Customer satisfaction
- Returning customer percentage
- Product review count
- Average order value

### Technical KPIs

- Mobile responsiveness
- Page load time under 3 seconds
- Core Web Vitals compliance
- Website uptime above 99.5%
- Secure payment processing

## Production Readiness Checklist

The current MVP is static and suitable for presentation, review, and early validation. Before production launch, the following items should be implemented:

- Backend API for appointments, orders, users, products, and admin management
- Database schema for customers, pets, products, inventory, appointments, orders, and CRM notes
- Secure admin authentication
- Role-based access control
- Real payment gateway or verified UPI collection workflow
- Order confirmation and status tracking
- Appointment notifications for staff and customers
- CMS for services, blogs, FAQs, gallery, and testimonials
- Google Analytics setup
- Google Search Console setup
- Local SEO metadata and schema markup
- SSL hosting
- Backup strategy
- Activity logs
- Privacy policy and terms pages

## Suggested Future Architecture

| Area | Recommendation |
| --- | --- |
| Frontend | React, Next.js, or another production web framework |
| Backend | Node.js/Express, NestJS, Django, Laravel, or equivalent |
| Database | PostgreSQL or MySQL |
| Authentication | JWT/session auth with role-based access |
| Payments | Razorpay, Cashfree, PhonePe, or verified UPI flow |
| Hosting | Vercel, Netlify, Render, Railway, AWS, Azure, or similar |
| Analytics | Google Analytics 4 and Search Console |
| CRM | Custom lightweight CRM initially, expandable later |

## Risk Register

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Static forms do not save data | Lost appointment/order requests | Add backend persistence before launch |
| UPI payment is manual | Payment reconciliation effort | Add payment verification workflow |
| Admin login is demo-only | No real management capability | Implement secure authentication |
| No inventory backend | Stock mismatch risk | Add inventory module in production |
| No notification system | Staff may miss requests | Add SMS, WhatsApp, or email alerts |
| No privacy/legal pages | Compliance and trust gap | Add policy pages before launch |

## Post-Launch Review Plan

Run a structured review 8 to 12 weeks after launch using:

- Customer feedback
- Google Analytics insights
- CRM data
- Product sales trends
- Appointment booking patterns
- Staff feedback
- Operational bottlenecks

The next phase should be approved only after measurable adoption and clear business value are visible.

## Current Status

| Item | Status |
| --- | --- |
| Static website | Complete |
| Responsive layout | Complete |
| English/Hindi toggle | Complete |
| Product catalogue | Complete |
| Cart UI | Complete |
| UPI payment prompt | Complete |
| Appointment form UI | Complete |
| Admin login UI | Complete |
| Backend | Not started |
| Database | Not started |
| Real authentication | Not started |
| Real payment integration | Not started |

## Project Management Notes

This MVP should be treated as a validation and stakeholder review artifact. It clarifies the product direction, user journeys, operating model, and future development scope. The next development milestone should convert the static MVP into a backed application with real data persistence, secure access, and measurable analytics.

