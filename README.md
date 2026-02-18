### Repository name suggestions

- **`shopcart-react-vite-ecommerce`**
- **`shopcart-firebase-storefront`**
- **`react-shopcart-bootstrap-store`**

### SEO-friendly repository description

**Description:**  
Modern, responsive e‑commerce web application built with **React 18**, **Vite**, **React Router**, **Firebase Authentication**, **Bootstrap 5 / React-Bootstrap**, and **Swiper**, featuring product catalog browsing, category filtering, search, pagination, shopping cart with localStorage persistence, and a blog section—perfect as a production-ready storefront starter or a learning project for full-stack React e‑commerce.

---

### README.md (suggested content)

## ShopCart React Vite E-commerce

ShopCart is a modern, responsive e‑commerce web application built with **React 18**, **Vite**, **React Router**, **Firebase Authentication**, **Bootstrap 5 / React-Bootstrap**, and **Swiper**.  
It provides a full shopping experience with product listing, category filtering, search, pagination, cart management with localStorage persistence, protected checkout flow, and a simple blog section.

---

## Features

- **Modern Single Page Application**
  - React 18 + Vite for fast development and optimized builds.
  - Client-side routing with React Router.

- **E-commerce Functionality**
  - Product listing powered by local JSON data.
  - Category-based filtering and search.
  - Grid/List toggle view for products.
  - Pagination on the shop page.
  - Shopping cart stored in `localStorage` with quantity updates and totals.
  - Shipping cost and order total calculation.

- **Authentication & Authorization**
  - Firebase Authentication integration.
  - Email/password sign up & login.
  - Google sign-in via Firebase (configurable).
  - Protected routes with `PrivateRoute` (e.g., cart/checkout).

- **Content & UI**
  - Home page hero/banner, category showcases, about, and sponsor sections.
  - Blog and single blog post pages.
  - Reusable layout components and page headers.
  - Responsive design using Bootstrap 5 and React-Bootstrap.
  - Icon fonts and animations via custom asset CSS.

- **Developer Experience**
  - Vite dev server with hot module replacement.
  - ESLint configuration for React.
  - Environment-based Firebase configuration via `import.meta.env`.

---

## Tech Stack

- **Frontend**
  - React 18
  - Vite
  - React Router DOM
  - React-Bootstrap / Bootstrap 5
  - Swiper
  - React CountUp
  - Icofont + custom CSS for animations and styling

- **Authentication & Services**
  - Firebase (Authentication; extensible to other Firebase services)

- **State & Storage**
  - React hooks (`useState`, `useEffect`, `useContext`)
  - `localStorage` for cart persistence

- **Tooling**
  - ESLint (React, React Hooks, React Refresh plugins)

---

## System Architecture (Mermaid Diagram)

```mermaid
graph TD

  subgraph Client["User Browser"]
    A[React + Vite SPA]
  end

  subgraph Routing["React Router"]
    R1[Home<br/>/]
    R2[Shop<br/>/shop]
    R3[Single Product<br/>/shop/:id]
    R4[Cart Page (Protected)<br/>/cart-page]
    R5[Blog<br/>/blog]
    R6[Single Blog<br/>/blog/:id]
    R7[About<br/>/about]
    R8[Contact<br/>/contact]
    R9[Login<br/>/login]
    R10[Sign Up<br/>/sign-up]
  end

  subgraph StateAndContext["App State & Context"]
    AC[AuthContext<br/>AuthProvider]
    LS[LocalStorage<br/>cart items]
  end

  subgraph DataSources["Frontend Data Sources"]
    PJSON[products.json<br/>(local product data)]
    ASSETS[Static Assets<br/>images, icons, CSS]
  end

  subgraph Backend["External Services"]
    FBAuth[Firebase Auth<br/>Email/Password + Google]
  end

  A -->|Uses| Routing
  A -->|Wraps with| AC
  A -->|Reads/Writes| LS
  A -->|Imports| PJSON
  A -->|Loads| ASSETS

  AC -->|Sign up / Login / Logout| FBAuth
  AC -->|Auth state changes| A

  R4 -->|Guarded by| AC
  R2 -->|Displays & filters| PJSON
  R3 -->|Shows details from| PJSON
  R4 -->|Renders cart from| LS
```

---

## Project Structure (high-level)

> Paths are indicative; adjust if your structure differs.

- `index.html` – Root HTML template used by Vite.
- `src/main.jsx` – App entry point; sets up React, React Router, and `AuthProvider`.
- `src/App.jsx` – Root layout and route outlet.
- `src/home/` – Home page sections (`Banner`, `HomeCategory`, `CategoryShowCase`, etc.).
- `src/shop/`
  - `Shop.jsx` – Product listing page (filtering, pagination, grid/list view).
  - `SingleProduct.jsx` – Individual product details.
  - `CartPage.jsx` – Cart management and checkout box.
  - `CheckOutPage.jsx`, `ProductCard.jsx`, `Pagination.jsx`, filters, sidebar components, etc.
- `src/blog/`
  - `Blog.jsx` – Blog listing.
  - `SingleBlog.jsx` – Single blog details.
- `src/about/`, `src/contact/` – Static informational pages.
- `src/components/`
  - `PageHeader.jsx`, `Login.jsx`, `SignUp.jsx`, and other reusable components.
- `src/contexts/AuthProvider.jsx` – Auth context and Firebase auth integration.
- `src/privateRoute/PrivateRoute.jsx` – Route guard for protected pages.
- `src/firebase/firebase.config.js` – Firebase app initialization.
- `src/products.json` – Local product data source.
- `src/assets/` – Images, icons, and CSS (`icofont`, `animate.css`, `style.min.css`).

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18 (recommended)
- **npm**, **yarn**, or **pnpm**

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/shopcart-react-vite-ecommerce.git
cd shopcart-react-vite-ecommerce
```

_(Replace the repo URL and folder name with whichever name you choose.)_

### 2. Install dependencies

Using npm:

```bash
npm install
```

Or with yarn:

```bash
yarn
```

### 3. Configure environment variables (Firebase)

Create a `.env` file in the project root (same level as `package.json`) and add your Firebase config:

```bash
VITE_APIKEY=your_api_key
VITE_AUTHDOMAIN=your_auth_domain
VITE_PROJECTID=your_project_id
VITE_STORAGEBUCKET=your_storage_bucket
VITE_MESSAGINGSENDERID=your_messaging_sender_id
VITE_APPID=your_app_id
```

These are referenced in `src/firebase/firebase.config.js` via `import.meta.env`.

### 4. Run the development server

```bash
npm run dev
```

Vite will start a local dev server (by default on `http://localhost:5173` or similar).  
Open the URL in your browser to view the app.

### 5. Build for production

```bash
npm run build
```

This outputs an optimized production build to the `dist` directory.

### 6. Preview the production build

```bash
npm run preview
```

---

## Available Scripts

From `package.json`:

- **`npm run dev`** – Start the Vite development server.
- **`npm run build`** – Build the app for production.
- **`npm run preview`** – Preview the production build locally.
- **`npm run lint`** – Run ESLint on the project.

---

## Routing Overview

- `/` – Home page (banner, featured categories, marketing sections).
- `/shop` – Shop page with product grid/list, filtering, search, and pagination.
- `/shop/:id` – Single product details page.
- `/cart-page` – **Protected** cart and checkout summary page.
- `/blog` – Blog listing.
- `/blog/:id` – Single blog post.
- `/about` – About page.
- `/contact` – Contact page.
- `/login` – Login form (email/password, Google where configured).
- `/sign-up` – Sign-up form for new users.

Routes like `/cart-page` are wrapped with `PrivateRoute`, which checks `AuthContext` and redirects unauthenticated users to `/login`.

---

## Authentication

- **AuthContext (`AuthProvider`)**
  - Exposes `user`, `loading`, `createUser`, `login`, `signUpWithGamil` (Google sign-in), and `logout`.
  - Subscribes to Firebase Auth state via `onAuthStateChanged`.
- **PrivateRoute**
  - Shows a loading state while auth is initializing.
  - Renders protected children when `user` exists.
  - Redirects to `/login` if not authenticated, preserving the `from` location.

Update Firebase settings and enable providers (Email/Password, Google) in the Firebase console to match your `.env` config.

---

## Shopping Cart Behavior

- Cart items are stored in `localStorage` under the `cart` key.
- `CartPage`:
  - Reads initial cart state from `localStorage`.
  - Allows increment/decrement of quantities.
  - Supports removing items from the cart.
  - Recalculates subtotal, shipping (e.g., 10% of subtotal), and total order cost.
- A placeholder checkout form (`CheckOutPage`) is rendered from the cart page and can be connected to real payment providers (Stripe, etc.) in the future.

---

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/amazing-feature`.
3. Commit your changes: `git commit -m "Add amazing feature"`.
4. Push to the branch: `git push origin feature/amazing-feature`.
5. Open a Pull Request.

Please ensure:

- Code is formatted consistently.
- ESLint passes (`npm run lint`).
- New features are covered by basic tests or manual testing notes.

---

## License

This project is currently unlicensed.  
You may add a license of your choice (e.g., MIT) by creating a `LICENSE` file and updating this section.
