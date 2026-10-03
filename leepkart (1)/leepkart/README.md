# Leepkart: Fashion E-commerce Landing Page

A modern, responsive online clothing store landing page for **leepkart.com**. Customers can browse Men, Women and Accessories, add products to a cart, pay with UPI or Cash on Delivery, get an invoice and track their order.

> This was built as a selection task to show UI design taste and front-end skills.

---

## 1. What is this project? (in simple words)

Think of it as the front page of a clothing shop website. A visitor can:

1. See offers on a scrolling marquee and rotating banners.
2. Browse products in three separate sections: **Men**, **Women** and **Accessories**.
3. Filter products (for example T-shirts or Shirts, Kurta & Suits or Sarees).
4. Add items to a cart and change quantities.
5. Check out with **UPI (QR code with a 5-minute timer)** or **Cash on Delivery**.
6. Get an **invoice** with a **Tracking ID**.
7. **Track the order** (Order placed, Shipped, Out for delivery, Delivered).
8. Read About, Customer Reviews, Terms & Conditions, Privacy and other info pages.
9. Log in or sign up (demo).

---

## 2. Technology used

| Tool | What it is | Why I used it |
|---|---|---|
| **HTML** | The structure of the page (headings, buttons, sections) | Every website needs it |
| **CSS** | The design: colours, layout, animations, dark mode, mobile layout | Full control of the look, with no template or UI kit |
| **JavaScript** (plain) | The behaviour: cart, filters, banner slider, checkout, tracking, pop-ups | Fast and light, with no build step |
| **Google Fonts** | *Fraunces* (elegant headings) and *Inter* (clean text) | Gives a premium fashion-magazine feel |
| **QRCode.js** | Small library that draws the UPI QR code | Makes the payment step feel real |

**Languages in one line:** HTML + CSS + JavaScript. I did not use React for this version.

The code is split into separate files (`index.html`, `css/style.css`, `js/script.js`) and the product photos live in the `images/` folder.

---

## 3. Features

### Design
- Warm off-white, charcoal and terracotta colours with a clean editorial style
- Scrolling offer **marquee** in a sticky header
- Red **promo strip** with a coupon code that copies when clicked
- Rotating **ad banner** (4 slides) with pause, arrows, dots and swipe
- Smooth fade-in animations, hover effects and zoomed product photos
- Automatic **dark mode**
- Fully **responsive** (mobile, tablet, desktop) with a hamburger menu

### Shopping
- Separate sections for Men, Women and Accessories, each with filter chips
- Wishlist hearts and "Add to cart" with a toast message
- Cart drawer with quantity +/- and remove
- Checkout form with validation (name, phone, address)

### Payment and orders
- **UPI** shows a QR code and a **5-minute countdown**, with regenerate when it expires
- **Cash on Delivery**
- **Invoice** showing items, quantity, price, subtotal, shipping charges, delivery fee, payment mode and grand total
- **Tracking ID** on the invoice with a copy button
- **Track Order** timeline that updates by itself

### Extra pages and sections
- About section, 4 customer reviews, newsletter signup
- Full footer with Shop, Collections, Customer care and Company links
- Pop-ups for Terms & Conditions, Privacy, Shipping, Returns, Contact, Careers and Cookies
- Log in and Sign up (demo)

---

## 4. How to run it

1. Unzip the project folder.
2. Double-click `index.html`. It opens in any browser.

## 5. How to deploy on Vercel (free)

**Option A: Vercel website**
1. Upload the whole project folder (with `css`, `js` and `images`) to a GitHub repository.
2. Go to vercel.com/new, import the repo and click **Deploy**.

**Option B: Command line**
```bash
npm i -g vercel
cd your-folder
vercel
```

No build settings are needed because it is a static site.

---

## 6. How to explain this project to someone

> "Leepkart is a responsive fashion e-commerce landing page I built with HTML, CSS and JavaScript. It covers the full shopping journey: browse, filter, cart, UPI or COD checkout with a QR timer, invoice, and order tracking. I focused on a premium editorial design, smooth animations, dark mode and a mobile-first layout, with no template or UI kit."

---

## 7. Important notes (honest limits)

- **This is a front-end demo.** There is no real database or server.
- **Login, orders and tracking are simulated.** Data is lost when the page refreshes.
- **UPI payment is a demo.** The QR code points to a placeholder UPI ID and no payment is verified.
- **Coupon code LEEP10 is display-only.** It does not reduce the price yet.
- **Reviews, stats, prices and legal text are sample content** and should be replaced with real details.
- The product photos were supplied for this task. Use your own licensed photos for a real store.

---

## 8. What can be improved

| Area | Improvement |
|---|---|
| Code | Convert to **React + Vite** with reusable components |
| Images | Convert photos to WebP and add responsive image sizes to load faster |
| Performance | Optimise image sizes and run a Lighthouse audit |
| Accessibility | Add keyboard trapping inside pop-ups and more screen-reader labels |
| Design | Product detail page with a gallery, size chart and size picker |
| Search | Working search bar and sort options (price, newest) |
| Coupons | Make the LEEP10 code actually apply a discount |

---

## 9. Future goals

1. **Real backend**: Node.js or Firebase for products, users and orders.
2. **Real login** with secure accounts and order history.
3. **Real payments** through Razorpay or Stripe (UPI, cards, net banking).
4. **Live order tracking** connected to a courier API.
5. **Admin dashboard** to add products and manage orders.
6. **Email and WhatsApp notifications** for order updates.
7. **Reviews with photos** posted by real customers.
8. **Wishlist and cart saved to the account**, so they stay after a refresh.
9. **Multi-language support** (English, Hindi, Marathi).
10. **PWA / mobile app** so customers can install it on their phone.

---

## 10. Project structure

```
leepkart/
├── index.html        <- page structure (HTML)
├── css/
│   └── style.css     <- all the design (CSS)
├── js/
│   └── script.js     <- all the behaviour (JavaScript)
├── images/           <- product photos (i1.jpg ... i14.jpg)
└── README.md         <- this file
```

---

Built with care for the Leepkart selection task.
