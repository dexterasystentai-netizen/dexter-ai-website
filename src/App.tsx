import { motion } from "framer-motion";
import {
  Bot,
  Boxes,
  BrainCircuit,
  Camera,
  Cpu,
  ExternalLink,
  Factory,
  Github,
  Hammer,
  HeartHandshake,
  Mail,
  MonitorCog,
  Rocket,
  Sparkles,
  Target,
  Video,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { primaryLinks, socialLinks, supportLinks } from "./config/links";
import { projectConfig } from "./config/project";

const fadeTransition = { duration: 0.55, ease: "easeOut" } as const;

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.22 },
  transition: fadeTransition,
} as const;

const whatIsDexter = [
  {
    icon: Camera,
    title: "Camera-based recognition",
    text: "Dexter watches the bench, recognizes parts and turns visual input into structured project context.",
  },
  {
    icon: Boxes,
    title: "Inventory memory",
    text: "Components, tools and modules can be catalogued so the workshop knows what is available before the build starts.",
  },
  {
    icon: Hammer,
    title: "Project support",
    text: "The assistant helps plan builds, track tasks and connect practical workshop work with AI tools like ChatGPT and Codex.",
  },
  {
    icon: Video,
    title: "Photo and video analysis",
    text: "Images and camera feeds become a source for object detection, documentation and future automation routines.",
  },
  {
    icon: Cpu,
    title: "Hardware integration",
    text: "Dexter is designed around 3D printers, microcontrollers, a workstation computer and the physical tools on the bench.",
  },
];

const goals = [
  {
    icon: BrainCircuit,
    title: "Build the AI inventory module",
    text: "Create a practical database that connects visual recognition with real storage locations and project needs.",
  },
  {
    icon: Camera,
    title: "Create camera-based object recognition",
    text: "Use camera feeds to identify parts, capture useful frames and understand what is happening on the bench.",
  },
  {
    icon: MonitorCog,
    title: "Integrate project planning tools",
    text: "Connect Dexter with planning workflows so the assistant can help move from idea to finished build.",
  },
  {
    icon: Factory,
    title: "Raise funds for a dedicated workstation",
    text: "Fund hardware capable of training, testing and running local AI tools for the workshop.",
  },
];

const buildLog = [
  {
    date: "Milestone 01",
    title: "Project started",
    text: "Dexter began as a build-in-public AI workshop assistant for real projects, inventory and automation.",
  },
  {
    date: "Milestone 02",
    title: "Social accounts created",
    text: "Support and follow channels are being prepared so the project can be shared as it grows.",
  },
  {
    date: "Milestone 03",
    title: "Website in progress",
    text: "The public project page is now ready to explain the mission, roadmap and funding goal.",
  },
];

const progress = Math.min(
  100,
  Math.round(
    (projectConfig.fundraising.currentPln / projectConfig.fundraising.targetPln) * 100,
  ),
);

const currency = new Intl.NumberFormat("pl-PL", {
  style: "currency",
  currency: "PLN",
  maximumFractionDigits: 0,
});

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <Hero />
      <section className="border-y border-line bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-5 sm:grid-cols-4 lg:px-8">
          {["AI vision", "Inventory", "Automation", "Build log"].map((item) => (
            <div key={item} className="flex items-center gap-2 px-2 py-2 text-sm text-white/70">
              <Sparkles className="h-4 w-4 text-signal" aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
      </section>
      <WhatIsDexter />
      <CurrentGoals />
      <Fundraising />
      <SupportProject />
      <BuildLog />
      <Contact />
      <footer className="border-t border-line bg-black/30 px-4 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/58 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-white">{projectConfig.name}</p>
          <p>Built in public by Mateusz</p>
          <p>{currentYear}</p>
        </div>
      </footer>
    </main>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center px-4 py-24 sm:px-6 lg:px-8">
      <img
        src="/images/dexter-ai-workshop.png"
        alt="AI powered electronics workshop with cameras, tools and parts inventory"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,10,0.98)_0%,rgba(5,7,10,0.82)_36%,rgba(5,7,10,0.34)_72%,rgba(5,7,10,0.68)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_34%,rgba(94,231,255,0.18),transparent_34%),radial-gradient(circle_at_22%_78%,rgba(255,209,102,0.10),transparent_26%)]" />
      <motion.div
        {...fadeIn}
        className="relative z-10 mx-auto w-full max-w-7xl pt-8"
      >
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-sm font-medium text-cyan">
            <Bot className="h-4 w-4" aria-hidden="true" />
            Built in public
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-normal text-white sm:text-7xl lg:text-8xl">
            {projectConfig.name}
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold text-signal sm:text-2xl">
            {projectConfig.tagline}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/74 sm:text-lg">
            {projectConfig.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <HeroButton href={primaryLinks.follow} label="Follow the project" icon={Rocket} />
            <HeroButton href={primaryLinks.support} label="Support Dexter" icon={HeartHandshake} />
            <HeroButton href={primaryLinks.github} label="View on GitHub" icon={Github} subtle />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function HeroButton({
  href,
  label,
  icon: Icon,
  subtle = false,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  subtle?: boolean;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan ${
        subtle
          ? "border border-white/18 bg-white/8 text-white hover:bg-white/14"
          : "bg-cyan text-black shadow-glow hover:bg-white"
      }`}
    >
      <Icon className="h-4 w-4" aria-hidden={true} />
      {label}
      {isExternal ? <ExternalLink className="h-4 w-4" aria-hidden="true" /> : null}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div {...fadeIn} className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-normal text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-white/66 sm:text-lg">{text}</p>
    </motion.div>
  );
}

function WhatIsDexter() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What is Dexter?"
          title="A practical AI system for the workshop"
          text="Dexter connects cameras, parts, tools and AI workflows so a real bench can become easier to understand, document and automate."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {whatIsDexter.map((item, index) => (
            <motion.article
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.04 }}
              key={item.title}
              className="rounded-lg border border-line bg-panel/72 p-5"
            >
              <item.icon className="h-8 w-8 text-signal" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/62">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CurrentGoals() {
  return (
    <section className="border-y border-line bg-white/[0.035] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Current goals"
          title="The next concrete build targets"
          text="The project is moving toward useful local AI: inventory, vision, project planning and the workstation needed to run it well."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {goals.map((goal, index) => (
            <motion.article
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.05 }}
              key={goal.title}
              className="rounded-lg border border-line bg-ink/72 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-cyan/12 text-cyan">
                  <goal.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">{goal.title}</h3>
                  <p className="mt-3 leading-7 text-white/64">{goal.text}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fundraising() {
  return (
    <section id="fundraising" className="px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        {...fadeIn}
        className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
      >
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber">
            Fundraising
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-white sm:text-5xl">
            {projectConfig.fundraising.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/68">
            The goal is to fund a dedicated computer for training, testing and running
            local AI tools that can power Dexter's object recognition, inventory
            workflows and automation experiments.
          </p>
        </div>
        <div className="rounded-lg border border-line bg-panel p-6 shadow-glow sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm text-white/58">Raised</p>
              <p className="mt-1 text-4xl font-black text-white">
                {currency.format(projectConfig.fundraising.currentPln)}
              </p>
            </div>
            <div className="sm:text-right">
              <p className="text-sm text-white/58">Goal</p>
              <p className="mt-1 text-2xl font-bold text-amber">
                {currency.format(projectConfig.fundraising.targetPln)}
              </p>
            </div>
          </div>
          <div className="mt-8 h-4 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="h-full rounded-full bg-[linear-gradient(90deg,#5ee7ff,#9bffb8,#ffd166)]"
            />
          </div>
          <div className="mt-4 flex items-center justify-between text-sm text-white/58">
            <span>{progress}% funded</span>
            <span>Editable in config</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SupportProject() {
  return (
    <section id="support" className="border-y border-line bg-white/[0.035] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Support the project"
          title="Follow, fund or share Dexter"
          text="Every support link is kept in one config file, so the public page can be updated quickly as accounts go live."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[...supportLinks, ...socialLinks].map((link) => (
            <SupportLinkCard key={link.label} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportLinkCard({
  link,
}: {
  link: (typeof supportLinks)[number] | (typeof socialLinks)[number];
}) {
  const content = (
    <>
      <span className="flex items-center gap-3 font-bold text-white">
        <link.icon className="h-5 w-5 text-cyan" aria-hidden="true" />
        {link.label}
      </span>
      {link.href ? (
        <ExternalLink
          className="h-4 w-4 text-white/34 transition group-hover:text-cyan"
          aria-hidden="true"
        />
      ) : (
        <span className="rounded-full border border-white/12 px-3 py-1 text-xs font-bold text-white/48">
          Coming soon
        </span>
      )}
    </>
  );

  if (!link.href) {
    return (
      <motion.div
        {...fadeIn}
        className="flex min-h-20 cursor-not-allowed items-center justify-between rounded-lg border border-line bg-panel/45 px-5 py-4 opacity-75"
      >
        {content}
      </motion.div>
    );
  }

  return (
    <motion.a
      {...fadeIn}
      href={link.href}
      className="group flex min-h-20 items-center justify-between rounded-lg border border-line bg-panel/72 px-5 py-4 transition hover:-translate-y-0.5 hover:border-cyan/45 hover:bg-panel"
    >
      {content}
    </motion.a>
  );
}

function BuildLog() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Build log"
          title="Public progress, one step at a time"
          text="Dexter is being built openly, with each milestone turning the idea into a working workshop assistant."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {buildLog.map((entry, index) => (
            <motion.article
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.06 }}
              key={entry.title}
              className="rounded-lg border border-line bg-panel/72 p-6"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-signal">
                <Target className="h-4 w-4" aria-hidden="true" />
                {entry.date}
              </div>
              <h3 className="mt-5 text-xl font-black text-white">{entry.title}</h3>
              <p className="mt-3 leading-7 text-white/64">{entry.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8">
      <motion.div
        {...fadeIn}
        className="mx-auto flex max-w-7xl flex-col gap-6 rounded-lg border border-cyan/25 bg-[linear-gradient(135deg,rgba(94,231,255,0.12),rgba(155,255,184,0.06),rgba(255,209,102,0.08))] p-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan">Contact</p>
          <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
            Want to collaborate, support or follow the project?
          </h2>
        </div>
        <a
          href={`mailto:${projectConfig.contactEmail}`}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-black transition hover:-translate-y-0.5 hover:bg-signal focus:outline-none focus:ring-2 focus:ring-cyan"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Email Dexter
        </a>
      </motion.div>
    </section>
  );
}

export default App;
