# Itinerai

A modern, AI-powered travel itinerary generator built with Next.js 14 and TypeScript. Generate personalised travel plans based on your destination, duration, group size, interests and budget preferences.

Check out the live app: [Itinerai](https://github.com/sagar-datta/travel-itinerary-ai)

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

- **Smart Itinerary Generation**: AI-powered travel planning customised to your preferences
- **Destination Search**: Search and select from a comprehensive list of travel destinations
- **Customisation Options**:
  - Number of days
  - Group size
  - Interest preferences
  - Budget level selection
- **Modern Interface**: Clean, responsive design that works on all devices
- **Local Storage**: Saves your form inputs for convenience

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context + Custom Hooks
- **Form Handling**: React Hook Form
- **AI Integration**: Google Gemini API

## 📦 Project Structure

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

## 🧪 Development

- **Code Style**: The project uses ESLint and Prettier for consistent code style
- **Type Checking**: Run `yarn type-check` to verify TypeScript types
- **Testing**: Run `yarn test` to run the test suite

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details. Copyright (c) 2024 Sagar Datta.

## 🙏 Acknowledgments

- Next.js team for the framework
- Google for the Gemini API
- All contributors who help improve the project
