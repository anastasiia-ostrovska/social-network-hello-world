# 👩‍💻👨‍💻 Social Network App

A social media/blogging app to practice real-world features such as authentication, profile management, and user
interactions

![](/src/assets/demo-images/profile_desktop.png)

## Demo Images

Welcome to watch more demo images:
[https://github.com/anastasiia-ostrovska/social-network-hello-world/tree/development/src/assets/demo-images](https://github.com/anastasiia-ostrovska/social-network-hello-world/tree/development/src/assets/demo-images)

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Code Style](#code-style)
- [Code Style Guide](#code-style-guide)
- [Environment Variables](#environment-variables)
- [Performance](#performance)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:

```
git clone https://github.com/anastasiia-ostrovska/social-network-hello-world.git

cd social-network-hello-world
``` 

2. Install dependencies:

```
npm install
``` 

3. Start the development server:

```
npm run dev
``` 

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Lint code

## Project Structure

```
/  
├── src/              # Source code  
│   ├── app/          # Application entry point and providers (e.g., routing, theming)  
│   ├── pages/        # Top-level route-based components  
│   ├── widgets/      # Reusable UI blocks composed of multiple features/entities  
│   ├── features/     # Business logic and user interactions (feature-level logic)  
│   ├── entities/     # Core business entities (e.g., User, Post)  
│   └── shared/       # Reusable utilities, components, types, and styles  
│  
├── public/           # Static assets (e.g., images, icons, favicon)  
```

## Code Style

- ESLint with Airbnb configuration
- Prettier for code formatting
- TypeScript strict mode enabled

Run linting:

```
npm run lint
```

## Code Style Guide

- Follow the Airbnb TypeScript Style Guide
- Use functional components and hooks
- Maintain proper typing with TypeScript
- Follow Feature-Sliced Design architecture principles
- Write tests for new features

## Environment Variables

Create a `.env` file in the root directory:

```
env VITE_API_URL=[your_api_url]
```

## Performance

- Code splitting with React.lazy()
- Render optimization and memoization
- Redux state optimization
- Vite for fast builds and development



