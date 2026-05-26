import portfolioCover from "../assets/media/portfolio_cover.svg";
import promptedCover from "../assets/media/prompted_cover.svg";

export type PortfolioScenario = {
  name: string;
  expectedReturn: string;
  volatility: string;
  riskLevel: string;
  explanation: string;
  allocations: {
    name: string;
    weight: number;
    color: string;
  }[];
};

export type DiscussionTopic = {
  name: string;
  questions: string[];
  responses: {
    student: string;
    text: string;
    contribution: "Supports" | "Challenges" | "Extends";
  }[];
};

export type Project = {
  title: string;
  category: string;
  tech: string[];
  description: string;
  highlights: string[];
  github?: string;
  liveUrl?: string;
  featured?: boolean;
  cover?: string;
  metrics?: {
    value: string;
    label: string;
  }[];
  portfolioScenarios?: PortfolioScenario[];
  discussionTopics?: DiscussionTopic[];
};

export const projects: Project[] = [
  {
    title: "PromptED",
    category: "AI Teaching Platform",
    tech: ["Next.js", "React", "PostgreSQL", "RAG"],
    description:
      "An AI-powered teaching platform built for a client to support classroom discussion planning, live participation, and instructor decision making.",
    highlights: [
      "Translated stakeholder requirements into 68 user stories and 35 MVP features",
      "Delivered full-stack features across five Agile sprints in a seven-member team",
    ],
    liveUrl: "https://pmcol.vercel.app/",
    featured: true,
    cover: promptedCover,
    metrics: [
      { value: "68", label: "User stories" },
      { value: "35", label: "MVP features" },
      { value: "5", label: "Agile sprints" },
      { value: "7", label: "Team members" },
    ],
    discussionTopics: [
      {
        name: "AI in Education",
        questions: [
          "When should students be allowed to use AI while completing schoolwork?",
          "How can teachers use AI without reducing student creativity?",
          "What evidence would show that AI is improving learning?",
        ],
        responses: [
          {
            student: "Ava",
            text: "AI can support brainstorming, but students should explain which parts are their own thinking.",
            contribution: "Extends",
          },
          {
            student: "Liam",
            text: "Teachers could use it to prepare examples while still leading the discussion themselves.",
            contribution: "Supports",
          },
          {
            student: "Noah",
            text: "Improvement should be measured through understanding, not just faster assignment completion.",
            contribution: "Challenges",
          },
          {
            student: "Maya",
            text: "A class policy would make the expectations clear and fair for everyone.",
            contribution: "Extends",
          },
        ],
      },
      {
        name: "Sustainable Cities",
        questions: [
          "Which change would have the greatest effect on reducing a city's emissions?",
          "How should cities balance affordability with environmental goals?",
          "Who should be responsible for funding greener public infrastructure?",
        ],
        responses: [
          {
            student: "Ethan",
            text: "Reliable transit could reduce commuting emissions without asking every person to buy a new vehicle.",
            contribution: "Supports",
          },
          {
            student: "Sara",
            text: "Housing near transit matters too, because people need realistic alternatives to driving.",
            contribution: "Extends",
          },
          {
            student: "Owen",
            text: "Large changes can increase costs unless lower-income residents receive support.",
            contribution: "Challenges",
          },
          {
            student: "Priya",
            text: "Governments and developers could share costs when new projects benefit from infrastructure.",
            contribution: "Extends",
          },
        ],
      },
      {
        name: "Social Media",
        questions: [
          "Should social media platforms change how they recommend content to teenagers?",
          "What responsibilities do users have when sharing news online?",
          "Can online communities strengthen civic participation?",
        ],
        responses: [
          {
            student: "Lucas",
            text: "Platforms should limit recommendations that reward outrage just because they hold attention.",
            contribution: "Supports",
          },
          {
            student: "Zara",
            text: "Users also need to check sources before forwarding a claim to friends.",
            contribution: "Extends",
          },
          {
            student: "Jack",
            text: "Recommendation limits might also hide useful perspectives, so transparency is important.",
            contribution: "Challenges",
          },
          {
            student: "Ivy",
            text: "Local groups can mobilize volunteers quickly if accurate information is easy to find.",
            contribution: "Supports",
          },
        ],
      },
    ],
  },
  {
    title: "Stock Portfolio Optimizer",
    category: "Machine Learning",
    tech: ["Python", "Pandas", "Random Forest"],
    description:
      "A data pipeline that models expected stock returns from technical indicators and produces an optimized portfolio.",
    highlights: [
      "Features SMA, EMA, and rolling volatility",
      "Focuses on risk-adjusted allocation",
    ],
    github: "https://github.com/Shabz55/Stock-Portfolio-Optimization",
    featured: true,
    cover: portfolioCover,
    metrics: [
      { value: "Multi-year", label: "Market data" },
      { value: "Random Forest", label: "Forecast model" },
      { value: "Power BI", label: "Dashboard" },
      { value: "SQL", label: "Schema output" },
    ],
    portfolioScenarios: [
      {
        name: "Conservative",
        expectedReturn: "5.2%",
        volatility: "6.1%",
        riskLevel: "Low",
        explanation:
          "A larger bond and cash allocation lowers expected volatility while retaining measured market exposure.",
        allocations: [
          { name: "Bonds", weight: 45, color: "#a65134" },
          { name: "Dividend ETF", weight: 25, color: "#334d56" },
          { name: "S&P 500 ETF", weight: 20, color: "#8d704c" },
          { name: "Cash", weight: 10, color: "#aaa093" },
        ],
      },
      {
        name: "Balanced",
        expectedReturn: "8.4%",
        volatility: "11.2%",
        riskLevel: "Medium",
        explanation:
          "A diversified equity core seeks stronger return potential while bonds help control overall volatility.",
        allocations: [
          { name: "S&P 500 ETF", weight: 34, color: "#a65134" },
          { name: "Technology ETF", weight: 28, color: "#334d56" },
          { name: "Dividend ETF", weight: 18, color: "#8d704c" },
          { name: "Bonds", weight: 15, color: "#be9164" },
          { name: "Cash", weight: 5, color: "#aaa093" },
        ],
      },
      {
        name: "Growth",
        expectedReturn: "12.6%",
        volatility: "18.8%",
        riskLevel: "High",
        explanation:
          "Higher exposure to growth-oriented equities raises expected return potential together with larger price swings.",
        allocations: [
          { name: "Technology ETF", weight: 46, color: "#a65134" },
          { name: "S&P 500 ETF", weight: 31, color: "#334d56" },
          { name: "Emerging Markets", weight: 14, color: "#8d704c" },
          { name: "Dividend ETF", weight: 7, color: "#be9164" },
          { name: "Cash", weight: 2, color: "#aaa093" },
        ],
      },
    ],
  },
  {
    title: "Workout Tracker App",
    category: "iOS Application",
    tech: ["Swift", "iOS", "Data persistence"],
    description:
      "A workout companion for building templates, logging sets, and following strength progress over time.",
    highlights: [
      "Template-driven workout flows",
      "Tracks lift history and daily frequency",
    ],
    github: "https://github.com/Shabz55/Ryze",
  },
  {
    title: "Event Lottery System",
    category: "Android Application",
    tech: ["Java", "Firebase", "Google Maps API"],
    description:
      "A team-built event platform where entrants join lotteries by QR code and organizers manage attendee selection.",
    highlights: [
      "Organizer, entrant, and administrator workflows",
      "Developed in a six-person Scrum team",
    ],
    github: "https://github.com/CMPUT301F25-kraken/krakenhax",
  },
  {
    title: "Marketplace Scraper",
    category: "Data Tool",
    tech: ["Python", "Web Scraping", "Analysis"],
    description:
      "A listing analysis tool for comparing local marketplace prices and surfacing potentially fair deals.",
    highlights: ["Collects listing information", "Supports local price comparisons"],
    github: "https://github.com/Shabz55",
  },
  {
    title: "Pong Recreation",
    category: "Game Development",
    tech: ["Python", "Pygame", "OOP"],
    description:
      "A clean object-oriented recreation of Pong with responsive paddle control, scoring, and restart behavior.",
    highlights: ["Physics-based ball movement", "Separated game entities and loop"],
    github: "https://github.com/Shabz55/Pong.py",
  },
];

export const stack = [
  "Python",
  "Swift",
  "Java",
  "C++",
  "React",
  "SQL",
  "Firebase",
  "Pandas",
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Evernorth Foundation",
    location: "Vancouver, BC",
    dates: "Jan 2026 - Present",
    details: [
      "Building a responsive website redesign for a non-profit pilot client with an emphasis on accessibility, clear navigation, and senior-friendly usability.",
      "Collaborating with a developer team to implement the site and document the technology stack, team roles, and design decisions.",
    ],
  },
  {
    role: "Software Engineer",
    company: "University of Alberta",
    location: "Edmonton, AB",
    dates: "Jan 2026 - Apr 2026",
    details: [
      "Developed PromptED, an AI-powered teaching platform for a client in a seven-member Agile team, translating requirements into 68 user stories and 35 MVP features.",
      "Engineered full-stack functionality with Next.js, React, Supabase/PostgreSQL, CI/CD, and RAG-based AI prompt generation across five Agile sprints.",
    ],
  },
  {
    role: "Vegetation Management Technician",
    company: "Ace Vegetation",
    location: "Nisku, AB",
    dates: "May 2024 - Sep 2024",
    details: [
      "Entered, updated, and verified client-site records, treatment data, and field documentation for accurate reporting and operational tracking.",
      "Managed work orders, safety forms, and service documents across more than 100 client sites, supporting organized data workflows and team coordination.",
    ],
  },
];
