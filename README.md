# React Tic-Tac-Toe Game

A two-player Tic-Tac-Toe game built with **React** and **Vite**. This project practices core React concepts through an interactive game.

## Features

- Two-player gameplay with **X** and **O**
- Highlights the player whose turn it is
- Edit player names
- Detects winning combinations
- Detects a draw when all squares are filled
- Shows a game-over screen with the result
- Rematch button to start a new game
- Displays a log of moves

## Built With

- React
- JavaScript (JSX)
- Vite
- CSS

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/), which includes npm.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Patel-Het06/React-Tic-Tac-Toe-Game-React-Vite.git
   ```

2. Move into the project folder:

   ```bash
   cd React-Tic-Tac-Toe-Game-React-Vite
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal.

## Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## React Concepts Practiced

- Components and reusable UI
- Props for passing data and callback functions
- State management with `useState`
- Event handling
- Rendering lists with `.map()` and keys
- Conditional rendering
- Deriving the current player and game board from turn history
- Checking winning combinations and draw conditions

## Project Structure

```text
project/
├── public/
│   ├── game-logo.png
│   └── bg-pattern-dark.png
├── src/
│   ├── components/
│   │   ├── GameBoard.jsx
│   │   ├── GameOver.jsx
│   │   ├── Log.jsx
│   │   └── Player.jsx
│   ├── App.jsx
│   ├── WINNING_COMBINATION.js
│   ├── index.css
│   └── index.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── .gitignore
```

Keep your files in locations that match the import paths in your code. If your actual folder structure differs, update this example to match it.

## Future Improvements

- Add a scoreboard that persists across rematches
- Add a computer opponent
- Improve the layout for mobile screens

## Author

**Het Patel**

- GitHub: [Patel-Het06](https://github.com/Patel-Het06)

---

If you enjoyed this project, consider giving the repository a ⭐.
