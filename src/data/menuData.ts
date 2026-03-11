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
  Container: new URL('../assets/Features/AI recuriter tool/Container.svg', import.meta.url).href,
  SummeryPopup: new URL('../assets/Features/AI recuriter tool/Summery popup.svg', import.meta.url).href,
  
  CandProfile: new URL('../assets/Features/Candidate intelligence/Candidate Profile.svg', import.meta.url).href,
  ResumeBuilder: new URL('../assets/Features/Candidate intelligence/Resume Bank builder.svg', import.meta.url).href,
  ResumeBank: new URL('../assets/Features/Candidate intelligence/Resume Bnk.svg', import.meta.url).href,

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
        description: "Harness the power of generative AI to eliminate manual work and find high-quality talent faster.",
        icon: "solar:magic-stick-3-bold-duotone",
        featureCards: [
          { headerTitle: 'AI RECRUITMENT', heading: 'Generative JD', bodyText: 'Generate perfectly structured, high-converting job descriptions in seconds using models trained on successful hiring patterns across industries.', image: ASSETS.JDGen },
          { headerTitle: 'PROFILE SEARCH', heading: 'AI Profile Search', bodyText: 'Find the perfect match using natural language queries. Search your entire talent pool with AI that understands intent, not just keywords.', image: ASSETS.Container },
          { headerTitle: 'SUMMARIZATION', heading: 'AI Job Post Summary', bodyText: 'Instantly distill lengthy job postings and resumes into sharp, actionable candidate summaries — highlighting skills, strengths, and gaps.', image: ASSETS.SummeryPopup },
          { headerTitle: 'RESUME PARSING', heading: 'Resume Parsing', bodyText: 'Automatically extract structured data from any resume format. Skills, experience, education, and contact details parsed with AI precision.', image: ASSETS.CandProfile },
          { headerTitle: 'JD PARSING', heading: 'Job Description Parsing', bodyText: 'Decode complex JDs into structured requirements — automatically identifying must-have skills, experience levels, and role expectations.', image: ASSETS.ResumeBank },
        ],
        faqs: [
          { question: "How does the AI Job Description Generator work?", answer: "Our model is trained on thousands of successful job postings and understands industry-specific language, required skills, and optimal formatting to produce compelling JDs instantly." },
          { question: "What file formats does Resume Parsing support?", answer: "We support PDF, DOCX, TXT, and even LinkedIn profile URLs for resume parsing with high accuracy." },
        ]
      },
      {
        slug: "candidate-intelligence",
        title: "Candidate Intelligence",
        description: "Turn unstructured resumes into a competitive advantage with automated parsing, deep profiling, and instant comparison tools.",
        icon: "solar:user-id-bold-duotone",
        featureCards: [
          { headerTitle: 'RESUME BANK', heading: 'Resume Bank', bodyText: 'Centralize resumes from all sources into a single, searchable database with automated deduplication and AI-powered indexing.', image: ASSETS.ResumeBank },
          { headerTitle: 'CANDIDATE PROFILE', heading: 'Candidate Profile', bodyText: 'Maintain rich, structured candidate profiles with full interaction history, previous applications, and AI-extracted skill insights.', image: ASSETS.CandProfile },
          { headerTitle: 'COMPARISON', heading: 'Resume Comparison', bodyText: 'Side-by-side AI comparison of multiple candidates — instantly surface the best match against your job requirements.', image: ASSETS.ResumeBuilder },
        ],
        faqs: [
          { question: "How does Resume Comparison work?", answer: "Our AI scores candidates across the same rubric based on the job description — skills match, experience relevance, education, and more — letting you rank them instantly." },
          { question: "Can I search the Resume Bank with natural language?", answer: "Yes, you can search using queries like 'senior backend engineer with Node.js in Bangalore' and get ranked results in seconds." },
        ]
      },
      {
        slug: "recruiter-insights",
        title: "Recruiter Insights",
        description: "Data-driven visibility into your entire hiring operation — track performance, analyse funnels, and make smarter decisions.",
        icon: "solar:chart-square-bold-duotone",
        featureCards: [
          { headerTitle: 'ANALYTICS', heading: 'Hiring Analytics', bodyText: 'Comprehensive dashboards that track time-to-hire, source quality, and pipeline performance across all your open roles.', image: ASSETS.HiringAnalytics },
          { headerTitle: 'PERFORMANCE', heading: 'Recruiter Performance', bodyText: 'Monitor individual recruiter productivity, placement rates, and activity metrics to keep your team performing at their best.', image: ASSETS.RecruiterPerformance },
          { headerTitle: 'FUNNEL', heading: 'Funnel Analysis', bodyText: 'Visualize candidate drop-off at every stage of your hiring funnel and identify bottlenecks with AI-powered recommendations.', image: ASSETS.FunnelAnalysis },
        ],
        faqs: [
          { question: "Can I export analytics reports?", answer: "All reports can be exported to CSV, PDF, or directly to your BI tools via API." },
          { question: "How far back does the historical data go?", answer: "We retain the full hiring history for as long as your account is active, with no data caps." },
        ]
      },
      {
        slug: "job-post-negotiations",
        title: "Job Post Negotiations",
        description: "Close more candidates faster with structured negotiation workflows for both terms and compensation.",
        icon: "solar:hand-shake-bold-duotone",
        featureCards: [
          { headerTitle: 'NEGOTIATIONS', heading: 'T&C Negotiations', bodyText: 'Streamline terms and conditions negotiation with structured workflows, version tracking, and real-time collaboration between all stakeholders.', image: ASSETS.TCNegotiations },
          { headerTitle: 'OFFER MANAGEMENT', heading: 'Job Post Negotiations', bodyText: 'Manage the full offer lifecycle from initial package creation to final sign-off, with approval flows and counter-offer tracking.', image: ASSETS.JobPostNegotiations },
        ],
        faqs: [
          { question: "Can candidates respond to offers digitally?", answer: "Yes, candidates receive a branded offer portal where they can review, accept, or counter an offer entirely online." },
          { question: "Does offer management integrate with payroll?", answer: "We offer API integrations with major payroll and HRIS systems like Workday, BambooHR, and others." },
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
