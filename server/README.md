# 🧠 Smart Cook AI – Server (Strapi)

This is the backend server for **Smart Cook AI**, built with **Strapi v5**. It provides a RESTful API and serves as the content management system (CMS) for recipes, user data, and AI-related content generation.

---

## 🧰 Tech Stack

- **Backend Framework:** Strapi v5 (Node.js)
- **Database:** PostgreSQL (Neon DB)
- **Auth:** JWT-based authentication
- **File Uploads:** Cloudinary
- **Hosting:** Self-hosted or Docker-compatible
- **CMS Panel:** Strapi Admin Panel

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/kdf25/smart-cook-ai.git
cd server
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the server directory and paste the following (use your real credentials):

```dotenv
# Server
HOST=0.0.0.0
PORT=1337

# Secrets
APP_KEYS=...
API_TOKEN_SALT=...
ADMIN_JWT_SECRET=...
TRANSFER_TOKEN_SALT=...

# JWT
JWT_SECRET=...

# Database
DATABASE_CLIENT=postgres
DATABASE_URL=postgres://<USER>:<PASSWORD>@<HOST>:5432/<DB_NAME>?sslmode=require
DATABASE_SSL=true

# Cloudinary
CLOUDINARY_NAME=your-cloud-name
CLOUDINARY_KEY=your-api-key
CLOUDINARY_SECRET=your-api-secret
```

You can also split secrets and database variables into `.env.development` and `.env.production` as needed.

### 4. Start the development server

```bash
npm run develop
```

The Strapi admin panel will be available at `http://localhost:1337/admin`.

## 🌐 API Endpoints

Once running, your Strapi API is available at:

```bash
http://localhost:1337/api
```

Swagger or Postman can be used to inspect and test the endpoints.

## 📦 Available Scripts

```bash
# Run in development mode
npm run develop

# Run in production mode
npm run start

# Build the admin panel (required for prod)
npm run build

```

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `APP_KEYS` | Keys for cookie/session signing |
| `API_TOKEN_SALT` | Salt for token generation |
| `ADMIN_JWT_SECRET` | Admin panel JWT auth |
| `JWT_SECRET` | General JWT signing key |
| `DATABASE_URL` | Full DB URL (used in deployment) |
| `CLOUDINARY_*` | Image upload credentials |

## ☁️ Deployment Notes

- Ensure admin panel is built before production deployment: `npm run build`
- Use NeonDB with `sslmode=require` for secure remote PostgreSQL access
- Ensure Cloudinary credentials are set to enable media uploads

## 📸 Media Handling

The app uses Cloudinary for image uploads. You can configure image presets, auto-optimization, and delivery options directly from your Cloudinary dashboard.

---

© 2025 Smart Cook AI. All rights reserved.