// Feature card data type
export interface FeatureCardData {
  headerTitle: string;
  heading: string;
  bodyText: string;
  image: string;
}

export interface MenuItem {
  slug: string;
  title: string;
  description: string;
  icon: string;
  featureCards?: FeatureCardData[];
  faqs?: { question: string; answer: string }[];
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

// Asset imports as string paths (used in DynamicPage)
const ASSETS = {
  JDGen: new URL('../assets/Features/AI recuriter tool/Ai JOb descrptiodescription Generator.svg', import.meta.url).href,
  JDParsing: new URL('../assets/Features/AI recuriter tool/jd parshing.svg', import.meta.url).href,
  Container: new URL('../assets/Features/AI recuriter tool/Container.svg', import.meta.url).href,
  SummeryPopup: new URL('../assets/Features/AI recuriter tool/Summery popup.svg', import.meta.url).href,
  ResumeParsing: new URL('../assets/Features/AI recuriter tool/Resume parshing.svg', import.meta.url).href,

  CandProfile: new URL('../assets/Features/Candidate intelligence/Candidate Profile.svg', import.meta.url).href,
  ResumeBuilder: new URL('../assets/Features/Candidate intelligence/Resume Bank builder.svg', import.meta.url).href,
  ResumeBank: new URL('../assets/Features/Candidate intelligence/Resume Bnk.svg', import.meta.url).href,
  ResumeComparison: new URL('../assets/Features/Candidate intelligence/Resume Comparison.svg', import.meta.url).href,

  HiringAnalytics: new URL('../assets/Features/Recuritement insights/hiring analytics.svg', import.meta.url).href,
  RecruiterPerformance: new URL('../assets/Features/Recuritement insights/Recuriter performace.svg', import.meta.url).href,
  FunnelAnalysis: new URL('../assets/Features/Recuritement insights/Funnel Analysis.svg', import.meta.url).href,

  TCNegotiations: new URL('../assets/Features/negotiations/T&c negtiations.svg', import.meta.url).href,
  JobPostNegotiations: new URL('../assets/Features/negotiations/Job post negotiaons.svg', import.meta.url).href,
};

export const menuData: { features: MenuSection; useCases: MenuSection } = {
  features: {
    title: "Features",
    items: [
      {
        slug: "ai-recruitment-tools",
        title: "AI Recruitment Tools",
        description: "Stop starting from scratch. Our generative AI handles the grunt work — writing JDs, surfacing candidates, and summarizing applications — so your team ships more hires with less effort.",
        icon: "solar:magic-stick-3-bold-duotone",
        featureCards: [
          { headerTitle: 'AI RECRUITMENT', heading: 'Generative JD', bodyText: 'Describe the role in plain language and get a complete, structured job description ready to post — tailored to your industry and seniority level.', image: ASSETS.JDGen },
          { headerTitle: 'PROFILE SEARCH', heading: 'AI Profile Search', bodyText: 'Forget Boolean strings. Just type what you’re looking for in plain English and let the AI surface the most relevant candidates from your entire talent pool.', image: ASSETS.Container },
          { headerTitle: 'SUMMARIZATION', heading: 'AI Job Post Summary', bodyText: 'Get an end-to-end pulse on every job post. Our AI summarizes the entire lifecycle — from profiles sent and pending processing to final selections, rejections, and required replacements.', image: ASSETS.SummeryPopup },
          { headerTitle: 'RESUME PARSING', heading: 'Resume Parsing', bodyText: 'Whether it’s a Word doc, PDF — GA HireSync reads it all and turns it into clean, structured candidate data automatically.', image: ASSETS.ResumeParsing },
          { headerTitle: 'JD PARSING', heading: 'Job Description Parsing', bodyText: 'Feed in any job description and instantly get a breakdown of required skills, experience benchmarks, and role expectations — no manual tagging needed.', image: ASSETS.JDParsing },
        ],
        faqs: [
          { question: "How does the Generative JD work?", answer: "Give the AI a brief — role title, responsibilities, and seniority level. It generates a fully structured, post-ready job description in seconds. You review, tweak, and publish." },
          { question: "What resume formats does parsing support?", answer: "PDF, Word (.doc and .docx), plain text, and LinkedIn exports. The parser handles inconsistent layouts and multilingual resumes without any manual intervention." },
          { question: "Does AI Profile Search work outside our database?", answer: "It searches within your GA HireSync talent pool. For external sourcing, LinkedIn and other integrated channels bring new candidates directly into your pipeline." },
          { question: "Can the AI Job Post Summary screen inbound applicants?", answer: "Yes. Run any inbound resume through the summary tool to get an instant read on fit — strengths, gaps, and relevant experience — before deciding whether to move forward." },
          { question: "Does the AI improve over time?", answer: "Yes. The platform improves continuously with usage. Enterprise plans support fine-tuning on your own historical hiring data for even sharper relevance." },
        ]
      },
      {
        slug: "candidate-intelligence",
        title: "Candidate Intelligence",
        description: "Your talent pool is one of your most valuable assets. GA HireSync makes sure every candidate in it is fully profiled, searchable, and ready to match the moment the right role opens up.",
        icon: "solar:user-id-bold-duotone",
        featureCards: [
          { headerTitle: 'RESUME BANK', heading: 'Resume Bank', bodyText: 'One searchable home for every resume you’ve ever received — automatically deduplicated, AI-indexed, and ready to search the moment a new role comes in.', image: ASSETS.ResumeBank },
          { headerTitle: 'CANDIDATE PROFILE', heading: 'Candidate Profile', bodyText: 'Every touchpoint, application, and AI insight lives on a single candidate card — so any recruiter on your team can pick up right where you left off.', image: ASSETS.CandProfile },
          { headerTitle: 'COMPARISON', heading: 'Resume Comparison', bodyText: 'Put your top candidates side by side and let AI score them against your job requirements — so the final shortlist is based on fit, not familiarity.', image: ASSETS.ResumeComparison },
        ],
        faqs: [
          { question: "How does Resume Comparison score candidates?", answer: "The AI evaluates each candidate against your active job description — scoring on skills, experience, seniority, and education — then presents a side-by-side breakdown so shortlisting decisions are fast and defensible." },
          { question: "Can I search the Resume Bank in plain English?", answer: "Yes. Describe the candidate you're looking for and GA HireSync surfaces the best matches — even when their resumes don't use your exact keywords." },
          { question: "How is the match score calculated?", answer: "Skills, experience, industry background, and certifications are compared against the parsed job requirements. Each dimension is weighted, and the score comes with a clear breakdown so you know exactly what's driving it." },
          { question: "What happens when a candidate applies more than once?", answer: "Duplicates are detected and merged into a single profile automatically — preserving all application history so your database stays clean without manual effort." },
          { question: "Can recruiters add notes to a candidate profile?", answer: "Yes. Notes, tags, and status labels can be added by any recruiter. They're timestamped, attributed, and visible to the whole team — so context is never lost during handoffs." },
        ]
      },
      {
        slug: "recruiter-insights",
        title: "Recruiter Insights",
        description: "You can’t improve what you can’t measure. GA HireSync gives hiring leads full visibility into team performance, pipeline health, and where candidates are falling off — all in one place.",
        icon: "solar:chart-square-bold-duotone",
        featureCards: [
          { headerTitle: 'ANALYTICS', heading: 'Hiring Analytics', bodyText: 'From time-to-fill to offer acceptance rates, get the full picture of how your recruitment engine is performing — broken down by role, team, or time period.', image: ASSETS.HiringAnalytics },
          { headerTitle: 'PERFORMANCE', heading: 'Recruiter Performance', bodyText: 'See exactly how each recruiter is performing — calls made, profiles submitted, placements closed — and coach your team with real data behind you. A live ranking of recruiters by successful hires, candidate engagement, and interview conversions — celebrating top performers and keeping the whole team motivated.', image: ASSETS.RecruiterPerformance },
          { headerTitle: 'FUNNEL', heading: 'Funnel Analysis', bodyText: 'Spot where candidates are dropping out of your pipeline before you lose them. AI flags the weak points and suggests where to act first.', image: ASSETS.FunnelAnalysis },
        ],
        faqs: [
          { question: "Can I export analytics reports?", answer: "Yes. Every dashboard exports as PDF or CSV in one click. Reports can also be scheduled for automatic delivery — weekly or monthly — to your inbox." },
          { question: "How far back does the data go?", answer: "GA HireSync retains analytics for the full lifetime of your account. Query any date range — last month, year-on-year, custom windows — whenever you need it." },
          { question: "Can I set targets for individual recruiters?", answer: "Yes. Define custom KPIs per recruiter or team — placement targets, time-to-hire thresholds, engagement rates — and track live progress against each one." },
          { question: "Can Funnel Analysis be filtered by role or recruiter?", answer: "Yes. Filter by job role, recruiter, team, client, or sourcing channel to pinpoint whether a bottleneck is isolated to one position or systemic across the team." },
          { question: "How should we roll out the Leaderboard to the team?", answer: "Frame it as a celebration of output, not a ranking of worth. GA HireSync gives managers full control over visibility — team-wide, manager-only, or internal coaching tool." },
        ]
      },
      {
        slug: "job-post-negotiations",
        title: "Job Post Negotiations",
        description: "The final stretch of any hire shouldn’t stall over back-and-forth emails. GA HireSync gives you structured, trackable workflows to move from verbal offer to signed contract without the chaos.",
        icon: "solar:hand-shake-bold-duotone",
        featureCards: [
          { headerTitle: 'NEGOTIATIONS', heading: 'Agency–Organization Terms & Conditions', bodyText: 'Agencies and organizations define and agree on employment terms — salary, benefits, joining date, and work conditions — in one structured, version-tracked thread.', image: ASSETS.TCNegotiations },
          { headerTitle: 'OFFER MANAGEMENT', heading: 'Job Post Changes & Client Negotiations', bodyText: 'Agency managers and clients can collaboratively revise job post details before going live. Every change — title, scope, salary, location — is recorded for full transparency.', image: ASSETS.JobPostNegotiations },
        ],
        faqs: [
          { question: "Can candidates respond to offers digitally?", answer: "Yes. Candidates receive a secure link to view and respond to their offer — accept, decline, or counter — directly in GA HireSync. All responses are logged and stakeholders notified instantly." },
          { question: "Does offer management integrate with payroll?", answer: "Finalized offer data exports in structured formats compatible with common HRIS and payroll platforms. Native payroll integrations are on the product roadmap." },
          { question: "How does version control work during T&C negotiations?", answer: "Every change is versioned and timestamped automatically. The full revision history is always accessible — who changed what, and when — giving all parties a reliable audit trail." },
          { question: "Can we set up a multi-stage approval flow for offers?", answer: "Yes. Define a custom approval chain — recruiter, hiring manager, finance — with each stage requiring explicit sign-off before the offer proceeds or reaches the candidate." },
          { question: "What happens when a candidate submits a counter-offer?", answer: "The counter is captured in GA HireSync and routed to approvers immediately. Original and counter terms are shown side by side so decisions are fast and every response is logged." },
        ]
      },
    ]
  },
  useCases: {
    title: "Use Cases",
    items: [
      {
        slug: "staffing-agencies",
        title: "Staffing Agencies",
        description: "Scale your placement volume and manage multiple clients effortlessly.",
        icon: "solar:buildings-bold-duotone",
        faqs: [
          { question: "Can we brand the portal for our agency?", answer: "Yes, HireSync offers full white-labeling capabilities for agencies." }
        ]
      },
      {
        slug: "enterprises",
        title: "Enterprises",
        description: "Standardize global hiring and ensure compliance at scale.",
        icon: "solar:global-bold-duotone",
        faqs: [
          { question: "Does it support SSO?", answer: "Yes, Enterprise plans include SAML/SSO support with providers like Okta and Azure AD." }
        ]
      },
      {
        slug: "startups",
        title: "High-Growth Startups",
        description: "Hire fast without compromising on talent quality.",
        icon: "solar:rocket-bold-duotone",
        faqs: [
          { question: "Is there a specific plan for startups?", answer: "We offer heavily discounted startup plans for companies under 50 employees." }
        ]
      }
    ]
  }
};
