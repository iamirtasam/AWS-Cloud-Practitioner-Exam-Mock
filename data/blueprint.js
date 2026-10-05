/* CLF-C02 exam blueprint. Source: official AWS Certified Cloud Practitioner (CLF-C02)
   Exam Guide, retrieved from docs.aws.amazon.com on 2026-10-05. CLF-C01 is retired;
   CLF-C02 is the current and only bookable Cloud Practitioner exam. */
window.BLUEPRINT = {
  code: "CLF-C02",
  name: "AWS Certified Cloud Practitioner",
  level: "Foundational",
  guideVersion: "1.0",

  format: {
    totalQuestions: 65,
    scoredQuestions: 50,
    unscoredQuestions: 15,
    minutes: 90,
    passingScore: 700,
    scaleMin: 100,
    scaleMax: 1000,
    costUsd: 100,
    validityYears: 3,
    scoring: "Scaled 100-1000, compensatory: your total across all domains decides the result, so there is no per-domain minimum."
  },

  // Percentages are of SCORED content and sum to 100.
  domains: [
    {
      n: 1,
      weight: 24,
      title: "Cloud Concepts",
      short: "Cloud Concepts",
      tasks: [
        { id: "1.1", title: "Define the benefits of the AWS Cloud" },
        { id: "1.2", title: "Identify design principles of the AWS Cloud" },
        { id: "1.3", title: "Understand the benefits of and strategies for migration to the AWS Cloud" },
        { id: "1.4", title: "Understand concepts of cloud economics" }
      ]
    },
    {
      n: 2,
      weight: 30,
      title: "Security and Compliance",
      short: "Security & Compliance",
      tasks: [
        { id: "2.1", title: "Understand the AWS shared responsibility model" },
        { id: "2.2", title: "Understand AWS Cloud security, governance, and compliance concepts" },
        { id: "2.3", title: "Identify AWS access management capabilities" },
        { id: "2.4", title: "Identify components and resources for security" }
      ]
    },
    {
      n: 3,
      weight: 34,
      title: "Cloud Technology and Services",
      short: "Technology & Services",
      tasks: [
        { id: "3.1", title: "Define methods of deploying and operating in the AWS Cloud" },
        { id: "3.2", title: "Define the AWS global infrastructure" },
        { id: "3.3", title: "Identify AWS compute services" },
        { id: "3.4", title: "Identify AWS database services" },
        { id: "3.5", title: "Identify AWS network services" },
        { id: "3.6", title: "Identify AWS storage services" },
        { id: "3.7", title: "Identify AWS AI/ML services and analytics services" },
        { id: "3.8", title: "Identify services from other in-scope AWS service categories" }
      ]
    },
    {
      n: 4,
      weight: 12,
      title: "Billing, Pricing, and Support",
      short: "Billing & Support",
      tasks: [
        { id: "4.1", title: "Compare AWS pricing models" },
        { id: "4.2", title: "Understand resources for billing, budget, and cost management" },
        { id: "4.3", title: "Identify AWS technical resources and AWS Support options" }
      ]
    }
  ],

  // Exam modes offered by the app.
  modes: [
    {
      id: "exam",
      label: "Real Exam",
      desc: "65 questions, 90 minutes, blueprint-weighted. No feedback until you submit.",
      count: 65,
      minutes: 90,
      reveal: "end",
      weighted: true,
      shuffle: true
    },
    {
      id: "practice",
      label: "Practice",
      desc: "Pick a length. Answers and explanations revealed as you go.",
      count: 25,
      minutes: 0,
      reveal: "immediate",
      weighted: true,
      shuffle: true
    },
    {
      id: "sprint",
      label: "Quick Sprint",
      desc: "10 questions, 12 minutes. A focused warm-up between longer sessions.",
      count: 10,
      minutes: 12,
      reveal: "end",
      weighted: true,
      shuffle: true
    },
    {
      id: "domain",
      label: "Domain Drill",
      desc: "Target one domain or a single task statement until it stops hurting.",
      count: 20,
      minutes: 0,
      reveal: "immediate",
      weighted: false,
      shuffle: true
    },
    {
      id: "weak",
      label: "Weak Areas",
      desc: "Built from the task statements you actually get wrong, hardest first.",
      count: 20,
      minutes: 0,
      reveal: "immediate",
      weighted: false,
      shuffle: true
    },
    {
      id: "review",
      label: "Missed & Flagged",
      desc: "Every question you missed or flagged, plus anything due for spaced review.",
      count: 20,
      minutes: 0,
      reveal: "immediate",
      weighted: false,
      shuffle: true
    },
    {
      id: "marathon",
      label: "Endurance",
      desc: "130 questions, 180 minutes. Builds the stamina a 90-minute exam needs.",
      count: 130,
      minutes: 180,
      reveal: "end",
      weighted: true,
      shuffle: true
    }
  ],

  // Readiness thresholds, in percent correct on exam-mode attempts.
  readiness: [
    { min: 0,  band: "Not ready",  tone: "critical", note: "Work through the study notes for your weakest domains before taking more full exams." },
    { min: 60, band: "Getting there", tone: "serious", note: "Drill your weak task statements. Full exams are useful now but not yet predictive." },
    { min: 72, band: "Borderline", tone: "warning", note: "Above the line but without margin. Aim for 80%+ across three separate attempts." },
    { min: 80, band: "Exam ready", tone: "good", note: "Hold this across three attempts on questions you have not seen recently, then book it." }
  ],

  // Percent-correct target used for the readiness gauge. Passing is ~70%; 80% gives margin.
  targetScore: 80,
  passEquivalentPercent: 70
};
