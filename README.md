# CV Generator Application

The **CV Generator Application** is a React-based web application that allows users to create and preview their CVs dynamically. Users can input personal details, education history, and work experience, and the application generates a formatted CV in real-time.

## Features

- **Dynamic Form Handling**: Add, edit, and delete entries for education and work experience.
- **Real-Time CV Preview**: See changes reflected instantly in the CV preview.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Custom Styling**: Styled using CSS Modules for scoped and maintainable styles.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and build tooling.
- **CSS Modules**: For modular and scoped styling.
- **ESLint**: For linting and maintaining code quality.

## Project Structure

The project is organized as follows:

```
cv-application/
├── src/
│ ├── components/ # React components
│ ├── helpers/ # Utility functions and data
│ ├── styles/ # CSS Modules for styling
│ ├── App.jsx # Main application component
│ ├── main.jsx # Entry point for the React app
├── public/ # Static assets
├── index.html # HTML entry point
├── vite.config.js # Vite configuration
├── eslint.config.js # ESLint configuration
├── package.json # Project dependencies and scripts
└── README.md # Project documentation

```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LazyEllis/cv-application.git
   cd cv-application
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser at `http://localhost:5173`.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality issues.

## Styling

The application uses CSS Modules for styling. Each component has its own scoped styles to avoid conflicts. Global resets and font definitions are included in `reset.css`.

## Components

### Key Components

- **`FormSection`**: Handles form inputs for personal details, education, and experience.
- **`CVSection`**: Displays the formatted CV preview.
- **`Form`**: A reusable form component for input handling.
- **`Input`** and **`Select`**: Input components for text and dropdown fields.
- **`ActionButton`**: Buttons for form actions like "Save" and "Cancel".

### Helpers

- **`utils.js`**: Contains utility functions like `toCamelCase` and `toKebabCase`.
- **`data.js`**: Provides static data for dropdown options and button configurations.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with React and Vite.
- Inspired by the need for a simple, dynamic CV generator.
