# Front-End Template

This repository contains a practical and optimized template for front-end projects, developed using modern technologies to accelerate and standardize development.

## Technologies Used

- **ReactJS**: JavaScript library for building user interfaces.
- **Vite**: Super-fast build tool for modern web applications.
- **React Router DOM**: Routing library to manage page navigation.
- **GlobalStyle**: Global styles defined using `styled-components`.
- **PrivateRoutes**: Implementation of private routes for access control.
- **Docker**: Containerization for consistent and portable development environments.

## Project Structure

```
└— src
   ├— assets/        # Media files and images
   ├— components/    # Reusable components
   ├— contexts/      # Context API providers
   ├— hooks/         # Custom hooks
   ├— pages/         # Main application pages
   ├— routes/        # Route configuration
   |   ├— route.jsx         # General route setup
   |   └— private-route.jsx  # Route protection logic
   ├— services/      # API services
   ├— styles/        # Global styles
   |   └— style.jsx       # Style definitions
   └— main.jsx        # Application entry point
```

## Features

- **Dynamic Routing**: Page navigation with React Router DOM.
- **Global Styling**: Consistent definitions for shared styles.
- **Private Routes**: Protection for restricted access pages.
- **Modular Organization**: Scalable structure for agile development.
- **Docker Integration**: Containerized development for easy setup and deployment.

## Installation and Usage

1. Clone this repository:
   ```bash
   git clone https://github.com/amabilee/reactjs-vite-docker-starter>
   ```

2. Navigate to the project directory:
   ```bash
   cd reactjs-vite-docker-starter
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the project:
   ```bash
   npm run dev
   ```

### Using Docker

Just run the following command to build and start the Docker container:
   ```bash
    docker-compose up --build
   ```

## Usage

- Define your routes in `routes/route.jsx`.
- Customize global styles in `styles/style.jsx`.
- Implement reusable components in `components/`.
- Use `private-route.jsx` to protect restricted pages.

## Contribution

Suggestions and improvements are always welcome! Feel free to open issues or pull requests.


---

Ready to start your next project with this template? Just clone and code! 🚀

