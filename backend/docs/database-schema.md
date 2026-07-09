# Database Schema

All Mongoose models use timestamps through the shared base schema, so each collection includes:

- `createdAt`
- `updatedAt`

## Collections

### Staff

Purpose: staff authentication and role management.

Key fields:

- `name`
- `username`
- `email`
- `phone`
- `passwordHash`
- `role`
- `permissions`
- `active`
- `loginHistory`

Indexes:

- Unique `username`, `email`, `phone`
- `role`, `active`
- text index on `name`, `email`, `phone`, `department`, `specialization`

### AuthSession

Purpose: refresh token session tracking.

Key fields:

- `staffId`
- `refreshTokenHash`
- `expiresAt`
- `revokedAt`
- `rememberMe`

Indexes:

- `staffId`
- `refreshTokenHash`
- `staffId + expiresAt`
- TTL on `expiresAt`

### PasswordResetToken

Purpose: password reset workflow.

Key fields:

- `staffId`
- `tokenHash`
- `expiresAt`
- `usedAt`

Indexes:

- `staffId`
- `tokenHash`
- TTL on `expiresAt`

### ContactInformation

Purpose: clinic contact and location data.

Key fields:

- `settingsKey`
- `clinicName`
- `phone`
- `whatsapp`
- `email`
- `address`
- `googleMapsLink`
- `latitude`
- `longitude`
- `clinicHours`
- `emergencyHours`
- `emergencyPhone`
- `socialLinks`
- `active`

Indexes:

- Unique `settingsKey`
- `phone`, `whatsapp`, `email`, `city`, `emergencyPhone`, `active`
- text index on `clinicName`, `address.city`, `phone`, `whatsapp`

### SiteSettings

Purpose: singleton site configuration and branding.

Key fields:

- `settingsKey`
- `siteName`
- `logoUrl`
- `faviconUrl`
- `doctor`
- `businessHours`
- `contact`
- `branding`
- `socialLinks`
- `payment`
- `smtp`
- `analytics`
- `seo`

Indexes:

- Unique `settingsKey`
- `maintenanceMode`
- text index on `siteName`, `homepageHeroTitle`, `footerNote`

### Customer

Purpose: customer profiles.

Indexes:

- unique `phone`
- text index on `name`, `email`, `phone`, `address.city`, `tags`

### Pet

Purpose: pet profiles linked to customers.

Indexes:

- `customerId`, `species`, `breed`, `gender`, `microchipNumber`, `active`
- text index on `name`, `breed`, `species`, `allergies`, `foodPreferences`

### Appointment

Purpose: clinic and home visit bookings.

Indexes:

- `customerId`, `petId`, `staffId`, `type`, `status`, `scheduledAt`
- `scheduledAt + status`
- `customerId + createdAt`
- `petId + scheduledAt`

### Product

Purpose: shop catalog items.

Indexes:

- unique `slug`, `sku`
- `categoryId`, `brand`, `price`, `featured`, `active`, `ratingsAverage`
- text index on `name`, `description`, `brand`, `tags`

### Category

Purpose: product categories.

Indexes:

- unique `name`, `slug`
- `parentId`, `sortOrder`, `active`
- text index on `name`, `slug`, `description`

### Inventory

Purpose: stock records for products.

Indexes:

- unique `productId`, `sku`
- `stockOnHand`, `reorderLevel`, `expiryDate`, `lowStock`, `lastUpdatedBy`
- compound index on `sku`, `stockOnHand`, `lowStock`

### Order

Purpose: ecommerce orders.

Indexes:

- unique `orderNumber`
- `customerId`, `totalAmount`, `status`, `paymentStatus`, `paymentReference`
- compound indexes on `customerId + createdAt` and `status + createdAt`

### Testimonial

Purpose: customer reviews and testimonials.

Indexes:

- `customerId`, `rating`, `featured`, `approved`
- compound index on `approved + featured + rating`

### Gallery

Purpose: media gallery items.

Indexes:

- unique sparse `slug`
- `category`, `mediaType`, `featured`, `sortOrder`, `takenAt`, `active`
- text index on `title`, `description`, `tags`, `locationLabel`

### Service

Purpose: veterinary services.

Indexes:

- unique `slug`
- `featured`, `active`
- text index on `title`, `summary`, `description`, `benefits`, `suitableFor`

### BlogPost

Purpose: articles and news posts.

Indexes:

- unique `slug`
- `authorId`, `category`, `tags`, `publishedAt`, `status`, `featured`
- text index on `title`, `excerpt`, `content`, `tags`, `category`

### FAQ

Purpose: frequently asked questions.

Indexes:

- `category`, `sortOrder`, `active`
- text index on `question`, `answer`, `category`

### Event

Purpose: clinic events and campaigns.

Indexes:

- unique `slug`
- `eventDate`, `registrationEnabled`, `featured`, `status`, `tags`
- text index on `title`, `summary`, `description`, `location`, `tags`

