# 🎬 Movie Seat Selection App (React)

[![React Version](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)](https://www.w3.org/TR/CSS3/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A slick, highly interactive movie theater ticket booking interface built from scratch using React. The application provides smooth, real-time feedback as users toggle seats, switch movies, and view localized ticketing breakdowns.

---

## 📌 Project Overview

This app solves the UX challenge of booking cinema tickets by providing an intuitive, instantaneous layout grid. It allows users to pick a movie title, view varying tier pricing options, dynamically interact with occupied/available grids, and watch their total billing scale instantly.

<Image src="image_agent_tag_16335073890713347044" alt="Interactive layout grid interface displaying seats for theater selection" caption="Conceptual interactive seating layout grid interface" />

### 🚀 Key Features
*   **Dynamic Matrix Grid**: An interactive room arrangement showing Available, Selected, and Pre-Occupied seats.
*   **Contextual Reactive State**: Switching movies automatically recalculates prices based on the selected criteria without discarding the current room configuration layout.
*   **Live Metadata Counters**: Keeps accurate real-time inventory counts and total pricing matrices visible down to the millisecond.
*   **Fully Responsive Flexbox Styles**: Adapts seamlessly to standard widescreen monitors, tablets, and smartphones.

---

## 🛠️ Tech Stack & Architecture

*   **Frontend Library**: React (Functional Components & Hooks)
*   **State Management**: Native React `useState` and `useEffect` paradigms
*   **Styling Engine**: Modular semantic Vanilla CSS3 (utilizing Flexbox, CSS Grid matrices, and 3D skew animations for the digital screen illusion)

---

## 📂 Component Design Lifecycle

[App.js (Global State Root)]
├── [MovieSelector Component] (Updates Unit Price)
├── [CinemaShowcase Component] (Static Legend Indicators)
└── [TheaterMatrix Component] (Renders Interactive Seat Grids)


1. **Movie Selection Handling**: Captures state changes when users switch titles, updating the underlying unit value ($10, $12, $15, etc.).
2. **Matrix Rendering Grid**: Loops structurally through multidimensional seat collections. Individual blocks retain unique index addresses to toggle conditional CSS class toggles (`.seat.selected` or `.seat.occupied`).
3. **Billing Computation**: Implements pure variable reduction logic to parse arrays of active selections instantly against pricing configurations.

### Installation & Execution Guide

1. **Clone the repository:**
```bash
   git clone [https://github.com/Siddharth-Mishra-Personal/Movie-Seat-Selection-React.git](https://github.com/Siddharth-Mishra-Personal/Movie-Seat-Selection-React.git)
   cd Movie-Seat-Selection-React
