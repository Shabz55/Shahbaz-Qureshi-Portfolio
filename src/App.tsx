import { useEffect, useRef, useState } from "react";
import {
  experience,
  projects,
  stack,
  type DiscussionTopic,
  type PortfolioScenario,
  type Project,
} from "./data";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4.2 10h11.2M10.7 4.6 16 10l-5.3 5.4" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.7a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-4.7 0-1 .4-1.9 1-2.6-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.5 9.5 0 0 1 4.9 0c1.8-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.6 0 3.7-2.3 4.5-4.6 4.7.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5a9.5 9.5 0 0 0-3-18.5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        stroke="none"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45Z"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10.8 4.2h5v5M15.5 4.5 9.1 10.9" />
      <path d="M8.7 5H5.5a1.2 1.2 0 0 0-1.2 1.2v8.3a1.2 1.2 0 0 0 1.2 1.2h8.3a1.2 1.2 0 0 0 1.2-1.2v-3.2" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10 3.5v8.3M6.6 8.8 10 12.2l3.4-3.4M4 15.5h12" />
    </svg>
  );
}

function Header() {
  return (
    <header className="header">
      <a className="brand" href="#top" aria-label="Shahbaz Qureshi home">
        <span className="brand-mark">SQ</span>
        <span>Shahbaz Qureshi</span>
      </a>
      <nav className="nav" aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="header-link" href="mailto:shahbaz.q2003@gmail.com">
        Let&apos;s talk
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="status">
          Open to software engineering opportunities
        </p>
        <h1 id="hero-title">
          I build software that turns ideas into{" "}
          <span>usable products.</span>
        </h1>
        <p className="hero-summary">
          Computer Science student at the University of Alberta building
          software products, AI-powered experiences, and data engineering
          pipelines that turn information into useful decisions.
        </p>
        <div className="actions">
          <a className="button primary" href="#work">
            View projects
            <ArrowIcon />
          </a>
          <a
            className="button secondary"
            href="https://github.com/Shabz55"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
            GitHub
          </a>
          <a
            className="button secondary"
            href="https://www.linkedin.com/in/shahbaz-qureshi"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            className="button secondary"
            href={`${import.meta.env.BASE_URL}Shahbaz_Qureshi_Resume.pdf`}
            download="Shahbaz_Qureshi_Resume.pdf"
          >
            <DownloadIcon />
            Resume
          </a>
        </div>
      </div>
      <aside className="profile-panel" aria-label="Profile summary">
        <p className="panel-label">Currently</p>
        <p className="panel-current">
          Building accessible web experiences with Evernorth Foundation while
          completing my Computer Science degree.
        </p>
        <dl className="profile-details">
          <div>
            <dt>Based in</dt>
            <dd>Edmonton, Alberta</dd>
          </div>
          <div>
            <dt>Education</dt>
            <dd>B.Sc. Computer Science, Economics minor</dd>
          </div>
          <div>
            <dt>Graduating</dt>
            <dd>April 2026</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Software, Data, AI</dd>
          </div>
        </dl>
      </aside>
    </section>
  );
}

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const hasInteractiveDemo =
    Boolean(project.discussionTopics) || Boolean(project.portfolioScenarios);

  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      {project.cover && (
        <img className="project-cover" src={project.cover} alt="" loading="lazy" />
      )}
      <div className="project-content">
        <div className="project-meta">
          <span>{project.category}</span>
          {project.featured && <span className="featured-tag">Selected project</span>}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="pills" aria-label="Technologies">
          {project.tech.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        {project.metrics && (
          <dl className="project-metrics">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.value}</dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </dl>
        )}
        <div className="card-actions">
          <button
            className={`text-button ${hasInteractiveDemo ? "interactive" : ""}`}
            onClick={() => onSelect(project)}
          >
            {hasInteractiveDemo ? "Try interactive demo" : "Explore project"}
            <ArrowIcon />
          </button>
          <div className="project-links">
            {project.liveUrl && (
              <a
                className="live-link"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live app
                <ExternalLinkIcon />
              </a>
            )}
            {project.github && (
              <a
                className="icon-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} GitHub repository`}
              >
                <GithubIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function PortfolioVisualizer({
  scenarios,
}: {
  scenarios: PortfolioScenario[];
}) {
  const [selectedScenario, setSelectedScenario] = useState(
    scenarios.find((scenario) => scenario.name === "Balanced") ?? scenarios[0],
  );

  return (
    <section className="visualizer" aria-label="Interactive sample allocation">
      <div className="visualizer-heading">
        <p className="visualizer-label">Interactive sample allocation</p>
        <div className="risk-controls" role="group" aria-label="Select risk preference">
          {scenarios.map((scenario) => (
            <button
              key={scenario.name}
              className={scenario.name === selectedScenario.name ? "active" : ""}
              onClick={() => setSelectedScenario(scenario)}
              aria-pressed={scenario.name === selectedScenario.name}
            >
              {scenario.name}
            </button>
          ))}
        </div>
      </div>
      <div className="allocation-bars">
        {selectedScenario.allocations.map((allocation) => (
          <div className="allocation" key={allocation.name}>
            <div className="allocation-meta">
              <span>{allocation.name}</span>
              <strong>{allocation.weight}%</strong>
            </div>
            <div className="allocation-track">
              <span
                style={{
                  width: `${allocation.weight}%`,
                  backgroundColor: allocation.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="portfolio-metrics" aria-live="polite">
        <div>
          <strong>{selectedScenario.expectedReturn}</strong>
          <span>Expected Return</span>
        </div>
        <div>
          <strong>{selectedScenario.volatility}</strong>
          <span>Volatility</span>
        </div>
        <div>
          <strong>{selectedScenario.riskLevel}</strong>
          <span>Risk Level</span>
        </div>
      </div>
      <p className="scenario-explanation">{selectedScenario.explanation}</p>
      <p className="visualizer-note">
        Illustrative precomputed output based on sample historical features. Not
        financial advice.
      </p>
    </section>
  );
}

function PromptEDSimulation({ topics }: { topics: DiscussionTopic[] }) {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [questions, setQuestions] = useState<string[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [publishedQuestion, setPublishedQuestion] = useState<string | null>(null);
  const [publishRun, setPublishRun] = useState(0);
  const [visibleResponses, setVisibleResponses] = useState(0);

  const displayedResponses = selectedTopic.responses.slice(0, visibleResponses);
  const perspectives = new Set(
    displayedResponses.map((response) => response.contribution),
  ).size;
  const participation = Math.round(
    (visibleResponses / selectedTopic.responses.length) * 100,
  );

  useEffect(() => {
    if (!publishedQuestion || publishRun === 0) return;

    const timers = selectedTopic.responses.map((_, index) =>
      window.setTimeout(() => setVisibleResponses(index + 1), 650 + index * 650),
    );

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [publishedQuestion, publishRun, selectedTopic]);

  function chooseTopic(topic: DiscussionTopic) {
    setSelectedTopic(topic);
    setQuestions([]);
    setSelectedQuestion(null);
    setPublishedQuestion(null);
    setPublishRun(0);
    setVisibleResponses(0);
  }

  function generateQuestions() {
    setQuestions(selectedTopic.questions);
    setSelectedQuestion(null);
    setPublishedQuestion(null);
    setPublishRun(0);
    setVisibleResponses(0);
  }

  function publishQuestion() {
    if (!selectedQuestion) return;
    setPublishedQuestion(selectedQuestion);
    setPublishRun((run) => run + 1);
    setVisibleResponses(0);
  }

  return (
    <section className="classroom-simulation" aria-label="PromptED classroom simulation">
      <div className="simulation-header">
        <p className="visualizer-label">Portfolio simulation</p>
        <span>Instructor view</span>
      </div>
      <p className="simulation-intro">
        Choose a topic, generate discussion prompts, then publish one to see
        simulated classroom participation.
      </p>
      <div className="topic-controls" role="group" aria-label="Select discussion topic">
        {topics.map((topic) => (
          <button
            key={topic.name}
            className={topic.name === selectedTopic.name ? "active" : ""}
            onClick={() => chooseTopic(topic)}
            aria-pressed={topic.name === selectedTopic.name}
          >
            {topic.name}
          </button>
        ))}
      </div>
      <button className="simulation-button" onClick={generateQuestions}>
        Generate discussion questions
      </button>
      {questions.length > 0 && (
        <div className="prompt-list">
          <p className="simulation-step">Select a question to publish</p>
          {questions.map((question) => (
            <button
              key={question}
              className={question === selectedQuestion ? "selected" : ""}
              onClick={() => setSelectedQuestion(question)}
            >
              {question}
            </button>
          ))}
          <button
            className="publish-button"
            onClick={publishQuestion}
            disabled={!selectedQuestion}
          >
            Publish question
          </button>
        </div>
      )}
      {publishedQuestion && (
        <div className="discussion-live">
          <div className="published-prompt">
            <span className="live-indicator">Live</span>
            <p>{publishedQuestion}</p>
          </div>
          <div className="discussion-metrics" aria-live="polite">
            <div>
              <strong>{visibleResponses}/{selectedTopic.responses.length}</strong>
              <span>Responses</span>
            </div>
            <div>
              <strong>{participation}%</strong>
              <span>Participation</span>
            </div>
            <div>
              <strong>{perspectives}</strong>
              <span>Perspectives</span>
            </div>
          </div>
          <div className="response-feed" aria-live="polite">
            {displayedResponses.map((response) => (
              <article key={response.student}>
                <div>
                  <strong>{response.student}</strong>
                  <span>{response.contribution}</span>
                </div>
                <p>{response.text}</p>
              </article>
            ))}
            {visibleResponses < selectedTopic.responses.length && (
              <p className="response-pending">Waiting for student responses...</p>
            )}
          </div>
        </div>
      )}
      <p className="visualizer-note">
        Simulated workflow with prewritten questions and responses. Open the
        live app to explore the product.
      </p>
    </section>
  );
}

function ProjectDialog({
  project,
  close,
}: {
  project: Project;
  close: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.classList.add("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, []);

  return (
    <div className="modal" onMouseDown={(event) => event.target === event.currentTarget && close()}>
      <section
        className={`dialog ${project.portfolioScenarios || project.discussionTopics ? "has-visualizer" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        <button ref={closeRef} className="close" onClick={close} aria-label="Close">
          <span />
          <span />
        </button>
        <p className="eyebrow">{project.category}</p>
        <h2 id="dialog-title">{project.title}</h2>
        <p className="dialog-description">{project.description}</p>
        <ul className="highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        {project.portfolioScenarios && (
          <PortfolioVisualizer scenarios={project.portfolioScenarios} />
        )}
        {project.discussionTopics && (
          <PromptEDSimulation topics={project.discussionTopics} />
        )}
        <div className="dialog-actions">
          {project.liveUrl && (
            <a
              className="button primary dialog-action"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open live app
              <ExternalLinkIcon />
            </a>
          )}
          {project.github && (
            <a
              className={`button ${project.liveUrl ? "secondary" : "primary"} dialog-action`}
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              View repository
              <ArrowIcon />
            </a>
          )}
        </div>
      </section>
    </div>
  );
}

const initialProjectCount = 5;

function Work({ onSelect }: { onSelect: (project: Project) => void }) {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const hasHiddenProjects = projects.length > initialProjectCount;
  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, initialProjectCount);

  return (
    <section className="section" id="work">
      <div className="section-heading">
        <p className="eyebrow">Selected Work</p>
        <h2>Products built from concept to code.</h2>
        <p>
          Projects spanning native apps, applied machine learning, and practical
          tools.
        </p>
      </div>
      <div className="projects" id="project-grid">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} onSelect={onSelect} />
        ))}
      </div>
      {hasHiddenProjects && (
        <button
          className="show-projects"
          onClick={() => setShowAllProjects((current) => !current)}
          aria-expanded={showAllProjects}
          aria-controls="project-grid"
        >
          {showAllProjects ? "Show fewer projects" : "Show more projects"}
          <span className={showAllProjects ? "expanded" : ""}>
            <ArrowIcon />
          </span>
        </button>
      )}
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>A practical engineering mindset.</h2>
      </div>
      <div className="about-grid">
        <p className="about-copy">
          My academic focus is a B.Sc. in Computer Science with a minor in
          Economics at the University of Alberta, with an April 2026
          graduation timeline. I enjoy taking a problem through implementation:
          shaping a usable interface, designing clear logic, and learning from
          working software.
        </p>
        <div className="facts">
          <div>
            <strong>B.Sc.</strong>
            <span>Computer Science</span>
          </div>
          <div>
            <strong>Apr 2026</strong>
            <span>Graduation Timeline</span>
          </div>
          <div>
            <strong>{projects.length}</strong>
            <span>Projects Featured</span>
          </div>
        </div>
      </div>
      <div className="stack">
        <p>Technologies</p>
        {stack.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-heading compact">
        <p className="eyebrow">Experience</p>
        <h2>Work history</h2>
      </div>
      <div className="timeline">
        {experience.map((job) => (
          <article key={job.role}>
            <div className="timeline-date">{job.dates}</div>
            <div>
              <h3>{job.role}</h3>
              <p className="company">
                {job.company} <span>{job.location}</span>
              </p>
              <ul className="job-details">
                {job.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="eyebrow">Contact</p>
      <h2>Let&apos;s build something useful.</h2>
      <p>
        Looking for software engineering opportunities and collaborative
        projects in Edmonton or remotely.
      </p>
      <div className="actions">
        <a className="button primary" href="mailto:shahbaz.q2003@gmail.com">
          shahbaz.q2003@gmail.com
        </a>
        <a className="button secondary" href="tel:+15877783239">
          +1 (587) 778-3239
        </a>
        <a
          className="button secondary"
          href="https://www.linkedin.com/in/shahbaz-qureshi"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
      </div>
    </section>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <div className="site" id="top">
        <Header />
        <main>
          <Hero />
          <Work onSelect={setSelectedProject} />
          <About />
          <Experience />
          <Contact />
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Shahbaz Qureshi</p>
          <div className="footer-links">
            <a href="https://github.com/Shabz55" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shahbaz-qureshi"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          close={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

export default App;
