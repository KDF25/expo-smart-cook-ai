# 📱 Smart Cook AI – Client

This is the client-side application for **Smart Cook AI**, built with **Expo** and **React Native**, and powered by AI. It follows **Feature-Sliced Design (FSD)** architecture to ensure scalability, modularity, and maintainability.

---

## 🧰 Tech Stack

- **Framework:** React Native (Expo)
- **Navigation:** Expo Router
- **State & Async:** React Context + `expo-secure-store` / `@react-native-async-storage/async-storage`
- **Networking:** Fetch API + REST from Strapi
- **AI Integration:** OpenRouter (Gemini model)
- **Auth:** Logto SDK
- **UI Components:** Custom components with `StyleSheet`
- **Native Modules:** `expo-image`, `expo-haptics`, `expo-blur`
- **Other Libraries:**
  - `react-native-actions-sheet`
  - `react-native-chart-kit`
  - `react-native-svg`
  - `@expo/vector-icons`

---

## 🏗️ Architecture

The project follows the **Feature-Sliced Design (FSD)** methodology:

- **🗂️ App:** Entry point, global providers, and router config
- **🧩 Features:** Standalone features with logic, UI, and services
- **🔧 Widgets:** Composite UI blocks built from entities and features
- **🖥️ Screens:** Pages registered in Expo Router (`app/`)
- **🏷️ Entities:** Business domain logic and UI
- **🔗 Shared:** Common components, hooks, assets, API clients, utils

---

## 👤 User Profile Features

### 📊 Recipe Creation Statistics
- Interactive histogram showing daily recipe creation activity
- Visual representation of cooking habits and patterns
- Weekly and monthly statistics views

### 🏆 Achievements System
- **First Recipe:** Unlocked after creating your first recipe
- **Recipe Master:** Awarded for creating 3 recipes
- **Weekly Streak:** Special badge for active users who've been with us for a week

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/kdf25/smart-cook-ai.git
cd client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root of the client directory:

```dotenv
# Strapi
EXPO_PUBLIC_STRAPI_API_KEY=your_strapi_api_key

# Logto Auth
EXPO_PUBLIC_LOGTO_APP_ID=your_logto_app_id
EXPO_PUBLIC_LOGTO_ENDPOINT=https://your-logto-endpoint.com/
EXPO_PUBLIC_LOGTO_REDIRECT_URL=exp://your-local-ip:8081

# API
EXPO_PUBLIC_BASE_API_URL=http://your-local-ip:1337/api

# AI (OpenRouter)
EXPO_PUBLIC_OPENROUTER_API_KEY=your_openrouter_api_key
EXPO_PUBLIC_OPENROUTER_AI_MODEL=google/gemini-2.0-flash-exp:free
```

### 4. Start the app

```bash
npm run start
```

Then use the Expo DevTools or CLI to launch on a device or emulator:

```bash
npm run ios      # iOS Simulator
npm run android  # Android Emulator
npm run web      # Web version
```

## 📦 Available Scripts

```bash
# Start the Expo dev server
npm run start

# Run on iOS / Android / Web
npm run ios
npm run android
npm run web

# Format with Prettier
npm run format
```

## 📁 Environment Variables

| Variable | Description |
|----------|-------------|
| `EXPO_PUBLIC_STRAPI_API_KEY` | API key to access protected Strapi routes |
| `EXPO_PUBLIC_LOGTO_APP_ID` | Logto app ID for authentication |
| `EXPO_PUBLIC_LOGTO_ENDPOINT` | Logto endpoint (Auth Server) |
| `EXPO_PUBLIC_LOGTO_REDIRECT_URL` | Redirect URI used during auth |
| `EXPO_PUBLIC_BASE_API_URL` | Strapi base API endpoint |
| `EXPO_PUBLIC_OPENROUTER_API_KEY` | OpenRouter (OpenAI) API key |
| `EXPO_PUBLIC_OPENROUTER_AI_MODEL` | AI model used for text generation |

---

© 2025 Smart Cook AI. All rights reserved.