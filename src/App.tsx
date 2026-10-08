import { useEffect, useRef, useState } from "react";
import {
  experience,
  projects,
  skillGroups,
  certifications,
  type DiscussionTopic,
  type PortfolioScenario,
  type Project,
} from "./data";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
];

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4.2 10h11.2M10.7 4.6 16 10l-5.3 5.4" /></svg>;
}

function GithubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.7a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-4.7 0-1 .4-1.9 1-2.6-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.5 9.5 0 0 1 4.9 0c1.8-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.6 0 3.7-2.3 4.5-4.6 4.7.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5a9.5 9.5 0 0 0-3-18.5Z" /></svg>;
}

function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" stroke="none" d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45Z" /></svg>;
}

function ExternalLinkIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10.8 4.2h5v5M15.5 4.5 9.1 10.9" /><path d="M8.7 5H5.5a1.2 1.2 0 0 0-1.2 1.2v8.3a1.2 1.2 0 0 0 1.2 1.2h8.3a1.2 1.2 0 0 0 1.2-1.2v-3.2" /></svg>;
}

function DownloadIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3.5v8.3M6.6 8.8 10 12.2l3.4-3.4M4 15.5h12" /></svg>;
}

function Header() {
  return (
    <header className="header">
      <a className="brand" href="#top" aria-label="Shahbaz Qureshi home"><span className="brand-mark">SQ</span><span>Shahbaz Qureshi</span></a>
      <nav className="nav" aria-label="Primary navigation">{links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}</nav>
      <a className="resume-link" href={`${import.meta.env.BASE_URL}Shahbaz_Qureshi_SWE_Resume.pdf`} download="Shahbaz_Qureshi_SWE_Resume.pdf"><DownloadIcon /> Resume</a>
    </header>
  );
}

function Hero({ onSelect }: { onSelect: (project: Project) => void }) {
  const featured = projects.find((project) => project.title === "PromptED") ?? projects[0];
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="intro-column">
        <h1 id="hero-title">Shahbaz Qureshi</h1>
        <p className="role-line">Software engineer who likes useful things.</p>
        <p className="intro-copy">I&apos;m a University of Alberta Computer Science graduate with a minor in Economics. I enjoy turning ideas into real products. I care about building tools that make people&apos;s lives a bit easier, and I&apos;m always looking for the next thing to learn and build.</p>
        <div className="hero-actions">
          <a className="button primary" href={`${import.meta.env.BASE_URL}Shahbaz_Qureshi_SWE_Resume.pdf`} download="Shahbaz_Qureshi_SWE_Resume.pdf"><DownloadIcon /> Download resume</a>
          <a className="text-link" href="#about">A little more about me <ArrowIcon /></a>
        </div>
        <p className="availability"><span /> Open to software engineering opportunities</p>
      </div>
      <div className="featured-column">
        <div className="featured-media">
          {featured.cover ? <img src={featured.cover} alt={`${featured.title} interface preview`} /> : <span>{featured.title.slice(0, 2)}</span>}
        </div>
        <div className="featured-copy">
          <h2>{featured.title}</h2>
          <p className="featured-type">AI teaching platform</p>
          <p>{featured.description}</p>
          <div className="featured-evidence"><p><strong>My role:</strong> full-stack product work</p><dl>{featured.metrics?.slice(0, 3).map((metric) => <div key={metric.label}><dt>{metric.value}</dt><dd>{metric.label}</dd></div>)}</dl></div>
          <button className="button project-button" onClick={() => onSelect(featured)}>Open project <ArrowIcon /></button>
        </div>
      </div>
      <aside className="work-index" aria-label="Selected work index">
        <h2>Selected work</h2>
        {projects.slice(0, 4).map((project) => <button key={project.title} onClick={() => onSelect(project)}><span><strong>{project.title}</strong><small>{project.category}</small></span><ArrowIcon /></button>)}
        <a className="index-more" href="#work">See all projects <ArrowIcon /></a>
      </aside>
    </section>
  );
}

function PortfolioVisualizer({ scenarios }: { scenarios: PortfolioScenario[] }) {
  const [selectedScenario, setSelectedScenario] = useState(scenarios.find((scenario) => scenario.name === "Balanced") ?? scenarios[0]);
  return <section className="visualizer" aria-label="Interactive sample allocation"><div className="visualizer-heading"><p className="eyebrow">Interactive sample allocation</p><div className="risk-controls" role="group" aria-label="Select risk preference">{scenarios.map((scenario) => <button key={scenario.name} className={scenario.name === selectedScenario.name ? "active" : ""} onClick={() => setSelectedScenario(scenario)} aria-pressed={scenario.name === selectedScenario.name}>{scenario.name}</button>)}</div></div><div className="allocation-bars">{selectedScenario.allocations.map((allocation) => <div className="allocation" key={allocation.name}><div className="allocation-meta"><span>{allocation.name}</span><strong>{allocation.weight}%</strong></div><div className="allocation-track"><span style={{ width: `${allocation.weight}%`, backgroundColor: allocation.color }} /></div></div>)}</div><div className="portfolio-metrics" aria-live="polite"><div><strong>{selectedScenario.expectedReturn}</strong><span>Expected return</span></div><div><strong>{selectedScenario.volatility}</strong><span>Volatility</span></div><div><strong>{selectedScenario.riskLevel}</strong><span>Risk level</span></div></div><p className="scenario-explanation">{selectedScenario.explanation}</p><p className="visualizer-note">Illustrative precomputed output based on sample historical features. Not financial advice.</p></section>;
}

function PromptEDSimulation({ topics }: { topics: DiscussionTopic[] }) {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [questions, setQuestions] = useState<string[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [publishedQuestion, setPublishedQuestion] = useState<string | null>(null);
  const [publishRun, setPublishRun] = useState(0);
  const [visibleResponses, setVisibleResponses] = useState(0);
  const displayedResponses = selectedTopic.responses.slice(0, visibleResponses);
  const perspectives = new Set(displayedResponses.map((response) => response.contribution)).size;
  const participation = Math.round((visibleResponses / selectedTopic.responses.length) * 100);
  useEffect(() => { if (!publishedQuestion || publishRun === 0) return; const timers = selectedTopic.responses.map((_, index) => window.setTimeout(() => setVisibleResponses(index + 1), 650 + index * 650)); return () => timers.forEach((timer) => window.clearTimeout(timer)); }, [publishedQuestion, publishRun, selectedTopic]);
  function chooseTopic(topic: DiscussionTopic) { setSelectedTopic(topic); setQuestions([]); setSelectedQuestion(null); setPublishedQuestion(null); setPublishRun(0); setVisibleResponses(0); }
  function generateQuestions() { setQuestions(selectedTopic.questions); setSelectedQuestion(null); setPublishedQuestion(null); setPublishRun(0); setVisibleResponses(0); }
  function publishQuestion() { if (!selectedQuestion) return; setPublishedQuestion(selectedQuestion); setPublishRun((run) => run + 1); setVisibleResponses(0); }
  return <section className="classroom-simulation" aria-label="PromptED classroom simulation"><div className="simulation-header"><p className="eyebrow">Portfolio simulation</p><span>Instructor view</span></div><p className="simulation-intro">Choose a topic, generate discussion prompts, then publish one to see simulated classroom participation.</p><div className="topic-controls" role="group" aria-label="Select discussion topic">{topics.map((topic) => <button key={topic.name} className={topic.name === selectedTopic.name ? "active" : ""} onClick={() => chooseTopic(topic)} aria-pressed={topic.name === selectedTopic.name}>{topic.name}</button>)}</div><button className="simulation-button" onClick={generateQuestions}>Generate discussion questions</button>{questions.length > 0 && <div className="prompt-list"><p className="simulation-step">Select a question to publish</p>{questions.map((question) => <button key={question} className={question === selectedQuestion ? "selected" : ""} onClick={() => setSelectedQuestion(question)}>{question}</button>)}<button className="publish-button" onClick={publishQuestion} disabled={!selectedQuestion}>Publish question</button></div>}{publishedQuestion && <div className="discussion-live"><div className="published-prompt"><span className="live-indicator">Live</span><p>{publishedQuestion}</p></div><div className="discussion-metrics" aria-live="polite"><div><strong>{visibleResponses}/{selectedTopic.responses.length}</strong><span>Responses</span></div><div><strong>{participation}%</strong><span>Participation</span></div><div><strong>{perspectives}</strong><span>Perspectives</span></div></div><div className="response-feed" aria-live="polite">{displayedResponses.map((response) => <article key={response.student}><div><strong>{response.student}</strong><span>{response.contribution}</span></div><p>{response.text}</p></article>)}{visibleResponses < selectedTopic.responses.length && <p className="response-pending">Waiting for student responses...</p>}</div></div>}<p className="visualizer-note">Simulated workflow with prewritten questions and responses. Open the live app to explore the product.</p></section>;
}

function ProjectDialog({ project, close }: { project: Project; close: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    closeRef.current?.focus(); document.body.classList.add("modal-open");
    const dialog = document.querySelector<HTMLElement>(".dialog");
    const onKeyDown = (event: KeyboardEvent) => { if (event.key !== "Tab") return; const focusable = Array.from(dialog?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])') ?? []); if (!focusable.length) return; const first = focusable[0]; const last = focusable[focusable.length - 1]; if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); } };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.classList.remove("modal-open"); Array.from(document.querySelectorAll<HTMLButtonElement>("[data-project-trigger]")).find((button) => button.dataset.projectTrigger === project.title)?.focus(); };
  }, [project.title]);
  return <div className="modal" onMouseDown={(event) => event.target === event.currentTarget && close()}><section className="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title"><button ref={closeRef} className="close" onClick={close} aria-label="Close project details"><span /><span /></button><p className="eyebrow">{project.category}</p><h2 id="dialog-title">{project.title}</h2><p className="dialog-description">{project.description}</p><ul className="highlights">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>{project.portfolioScenarios && <PortfolioVisualizer scenarios={project.portfolioScenarios} />}{project.discussionTopics && <PromptEDSimulation topics={project.discussionTopics} />}<div className="dialog-actions">{project.liveUrl && <a className="button primary" href={project.liveUrl} target="_blank" rel="noreferrer">Open live app <ExternalLinkIcon /></a>}{project.github && <a className="button secondary" href={project.github} target="_blank" rel="noreferrer">View repository <GithubIcon /></a>}</div></section></div>;
}

function Work({ onSelect }: { onSelect: (project: Project) => void }) {
  const [showAll, setShowAll] = useState(false);
  const secondaryProjects = projects.slice(1);
  const visibleProjects = showAll ? secondaryProjects : secondaryProjects.slice(0, 4);
  return <section className="work-section" id="work"><div className="section-heading"><h2>More projects</h2><p>A few other things I worked on, mostly built because I was curious, needed a tool, or saw a problem worth solving.</p></div><div className="project-list">{visibleProjects.map((project) => <article className="project-row" key={project.title}><div className="project-row-main"><div><p className="project-category">{project.category}</p><h3>{project.title}</h3></div><p>{project.description}</p></div><button data-project-trigger={project.title} className="row-action" onClick={() => onSelect(project)}>{project.portfolioScenarios || project.discussionTopics ? "Try demo" : "Read more"}<ArrowIcon /></button></article>)}</div>{secondaryProjects.length > 4 && <button className="show-projects" onClick={() => setShowAll((current) => !current)} aria-expanded={showAll}>{showAll ? "Show fewer projects" : "View all projects"}<ArrowIcon /></button>}</section>;
}

function About() {
  return <section className="about-section" id="about"><div className="about-copy"><h2>A little about me</h2><p>I completed my B.Sc. in Computer Science with a minor in Economics at the University of Alberta in April 2026. I like taking a problem through implementation: shaping a usable interface, designing clear logic, and learning from working software.</p><p>The projects here are a mix of course work, team builds, experiments, and tools I made because something was interesting enough to pursue.</p></div><aside className="resume-card"><h3>Resume &amp; background</h3><dl><div><dt>Education</dt><dd>B.Sc. Computer Science<br />Economics minor</dd></div><div><dt>Graduation</dt><dd>April 2026</dd></div><div><dt>Based in</dt><dd>Edmonton, Alberta</dd></div></dl><a className="button primary" href={`${import.meta.env.BASE_URL}Shahbaz_Qureshi_SWE_Resume.pdf`} download="Shahbaz_Qureshi_SWE_Resume.pdf"><DownloadIcon /> Download PDF</a></aside><div className="resume-skills"><h3>Technical skills</h3>{skillGroups.map((group) => <section key={group.name}><h4>{group.name}</h4><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></section>)}</div><div className="certifications"><h3>AI &amp; cloud certifications</h3>{certifications.map((certification) => <article key={certification.name}><h4>{certification.name}</h4><p>{certification.issuer} · {certification.dates}</p></article>)}</div></section>;
}

function Experience() {
  return <section className="experience-section" id="experience"><div className="section-heading"><h2>Experience</h2><p>The short version of the work behind the projects.</p></div><div className="timeline">{experience.map((job) => <article key={`${job.company}-${job.role}`}><div className="timeline-date">{job.dates}</div><div><h3>{job.role}</h3><p className="company">{job.company} <span>{job.location}</span></p><ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div></article>)}</div></section>;
}

function Contact() {
  return <section className="contact-section" id="contact"><h2>Let&apos;s get in touch.</h2><p>I&apos;m looking for software engineering opportunities and collaborative projects in Edmonton or remotely.</p><div className="contact-links"><a className="button primary" href="mailto:shahbaz.q2003@gmail.com">shahbaz.q2003@gmail.com</a><a className="button secondary" href="https://www.linkedin.com/in/shahbaz-qureshi" target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a><a className="button secondary" href="https://github.com/Shabz55" target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a></div></section>;
}

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  useEffect(() => { const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setSelectedProject(null); }; document.addEventListener("keydown", onKeyDown); return () => document.removeEventListener("keydown", onKeyDown); }, []);
  return <><div className="site" id="top"><Header /><main><Hero onSelect={setSelectedProject} /><Work onSelect={setSelectedProject} /><About /><Experience /><Contact /></main><footer><p>© {new Date().getFullYear()} Shahbaz Qureshi</p><div className="footer-links"><a href="https://github.com/Shabz55" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/shahbaz-qureshi" target="_blank" rel="noreferrer">LinkedIn</a></div></footer></div>{selectedProject && <ProjectDialog project={selectedProject} close={() => setSelectedProject(null)} />}</>;
}

export default App;
