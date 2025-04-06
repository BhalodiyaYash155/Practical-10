# ⚛️ React Projects: Context API & useEffect Hook

This repository contains two beginner-to-intermediate level React projects that focus on mastering essential React concepts:

- **Theme Switcher App** – Demonstrates how to manage global state using React’s Context API.
- **Weather App** – Uses the `useEffect` hook to fetch and display live weather data from an API.

---

## 🎨 Theme Switcher App

### 📚 Concepts Covered

- Context API for global state management
- Creating and using Context Providers and Consumers
- Dynamically applying themes across components

### 🎯 Objective

Learn how to use React's Context API to manage and apply global theme state (light/dark mode) across multiple components.

### ✅ Tasks

- Set up a **ThemeContext** with `createContext` and `useContext`.
- Implement a **ThemeProvider** to manage theme state.
- Create a **toggle button** to switch between light and dark themes.
- Apply conditional styles (background and text color) based on the current theme.

---

## ☁️ Weather App

### 📚 Concepts Covered

- Functional component lifecycle with `useEffect`
- Performing side effects in React (API calls)
- Handling user input and state updates

### 🎯 Objective

Understand and apply the `useEffect` hook to fetch weather data based on a user’s input city and dynamically update the UI.

### ✅ Tasks

- Create a form to accept a **city name** from the user.
- Fetch weather data from [OpenWeatherMap API](https://openweathermap.org/api).
- Display:
  - City Name
  - Temperature
  - Weather Condition (e.g., "Cloudy", "Sunny")
- Update the displayed data when the user searches a new city.

---

## 🛠️ Setup Instructions

```bash
# Clone the repository
git clone "repo url"
cd Practical 10

# Install dependencies
npm install

# Start the Vite development server
npm run dev
