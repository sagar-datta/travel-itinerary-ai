# Itinerai

A sophisticated, AI-powered travel itinerary generator built with Next.js 14 and TypeScript. Generate personalised travel plans based on your destination, duration, group size, interests and budget preferences.

## 🌟 Key Technical Achievements

- **Advanced State Management**: Implemented custom React hooks for efficient state management, demonstrating deep understanding of React patterns
- **Type-Safe Development**: Utilised TypeScript with strict type checking for robust code quality
- **Accessibility First**: Built with ARIA attributes and keyboard navigation support
- **Performance Optimised**: Implements React best practices including code splitting and optimised re-renders
- **Responsive Design**: Mobile-first approach with smooth transitions and animations
- **Dark Mode**: Implemented system-aware theme switching with local storage persistence

## 🤖 AI Integration

This project leverages Google's Gemini Pro API to generate intelligent travel itineraries. Gemini Pro is Google's most capable large language model, trained to:

- Understand complex travel preferences and constraints
- Generate detailed day-by-day itineraries
- Consider factors like:
  - Local attractions and hidden gems
  - Travel time between locations
  - Budget constraints
  - Group size dynamics
  - Seasonal considerations

The AI adapts recommendations based on your specified interests, ensuring each itinerary is uniquely tailored to your preferences.

## 🚀 Features

- **Intelligent Itinerary Generation**: AI-powered travel planning customised to your preferences
- **Smart Destination Search**: Implements debounced search with autocomplete functionality
- **Advanced Customisation**:
  - Dynamic day planning
  - Group size optimisation
  - Interest-based recommendations
  - Budget-aware suggestions
- **Modern Interface**: Clean, responsive design with smooth animations
- **Persistent Storage**: Implements local storage for preferences and form state
- **Error Handling**: Robust error boundaries and graceful fallbacks

## 🛠 Technical Implementation

- **Framework**: Next.js 14 (App Router) with React Server Components
- **Language**: TypeScript with strict type checking
- **Styling**: 
  - Tailwind CSS with custom configuration
  - Dark mode support with system preference detection
  - CSS-in-JS for dynamic styles
- **State Management**: 
  - React Context for global state
  - Custom hooks for local state
  - Optimised re-renders
- **Performance**:
  - Component code splitting
  - Optimised bundle size
  - Client-side caching
- **Form Handling**: 
  - React Hook Form
  - Custom validation
  - Debounced inputs
- **API Integration**: 
  - Google Gemini API
  - Error handling and rate limiting
  - Type-safe API responses

## 📦 Project Structure

The project follows a feature-based architecture for maintainability:

```
src/
├── app/                  # Next.js App Router
│   ├── components/       # React Components
│   │   ├── common/      # Shared UI Components
│   │   ├── features/    # Feature-specific Components
│   │   └── layout/      # Layout Components
│   ├── context/         # React Context Providers
│   ├── lib/             # Utility Functions
│   ├── services/        # External Service Integration
│   └── types/           # TypeScript Types
```

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/sagar-datta/travel-itinerary-ai.git
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Add your Google Gemini API key to `.env.local`

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the application

## 🧪 Development Practices

- **Code Quality**:
  - ESLint with custom rules
  - Prettier for consistent formatting
  - Husky pre-commit hooks
- **Type Safety**:
  - Strict TypeScript configuration
  - Comprehensive type definitions
- **Testing**:
  - Unit tests with Jest
  - Component testing with React Testing Library
  - E2E testing setup ready

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details. Copyright (c) 2024 Sagar Datta.

## 🙏 Acknowledgments

- Next.js team for the excellent framework
- Google for the powerful Gemini API
- All contributors who help improve the project
