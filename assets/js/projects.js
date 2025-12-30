// assets/js/projects.js

// Each project supports:
// - videoType: 'mp4' | 'youtube' | null
// - videoSrc: local file path or YouTube embed URL
// - github: link to repo

const PROJECTS = [
  {
    id: 0,
    title: "Workout Tracker App",
    tech: "Swift · iOS",
    description:
      "Workout tracking app for iOS. Users create workout templates, start workouts from templates, and log sets with weight and reps. Tracks daily workout frequency and best lifts over time.",
    videoType: null,
    videoSrc: "", 
    github: "https://github.com/Shabz55/Ryze", 
  },
  {
    id: 1,
    title: "Stock Portfolio Optimization Tool",
    tech: "Python · Pandas · Regression",
    description:
      "Predicts expected stock returns using Random Forest regressor model on various features like SMA, EMA, 20-day rolling volatility, then suggests an optimized portfolio designed to improve risk-adjusted performance.",
    videoType: "mp4",
    videoSrc: "assets/media/Portfolio_optimization_vid.mp4",
    coverImage: "assets/media/stocks_cover.jpg",
    github: "https://github.com/Shabz55/Stock-Portfolio-Optimization",
  },
  {
    id: 2,
    title: "Event Lottery System App",
    tech: "Java · Android",
    description:
      "Android Java app for signing up for user created events that uses a lottery system to select attendees. Users can sign up for events that are created by organizers through the app or a randomly generated QR code. Admins can overview all the activity and remove any content that violates the terms and conditions. Powered by Firebase backend and Google maps API integration. Collaborated with 5 other people and took part in regular scrum meeting and sprint reviews",
    videoType: null, 
    videoSrc: "",
    github: "https://github.com/CMPUT301F25-kraken/krakenhax",
  },
  {
    id: 4,
    title: "Facebook Marketplace Scraper",
    tech: "Python · Web Scraping",
    description:
      "Scrapes Facebook Marketplace listings to analyze local pricing and availability, helping identify fair deals and avoid overpaying.",
    videoType: null, 
    videoSrc: "",
    github: "https://github.com/Shabz55",
  },
  {
    id: 3,
    title: "Pong Game Recreation",
    tech: "Python · Pygame · OOP",
    description:
      "Recreated the classic Pong game using Pygame with a clean object-oriented design for paddles, ball, and game loop. Includes ball physics, scoring, and restart behavior.",
    videoType: null,
    videoSrc: "", 
    github: "https://github.com/Shabz55/Pong.py",
  },
];
