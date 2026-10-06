window.QBANK = window.QBANK || [];
window.QBANK.push(
  {
    id: "4.3-001",
    domain: 4,
    task: "4.3",
    type: "single",
    difficulty: "medium",
    stem: "A company wants automated recommendations for cost optimization, such as idle load balancers, underutilized EC2 instances, and unassociated Elastic IPs. Which tool provides these as built-in checks?",
    options: [
      "AWS Trusted Advisor",
      "AWS Config",
      "AWS CloudTrail",
      "AWS Systems Manager"
    ],
    answer: [0],
    explanation: "Trusted Advisor scans the account against AWS best practices in categories including cost optimization (idle resources, unassociated IPs), performance, security, fault tolerance, and service limits - and flags concrete savings opportunities.",
    rationales: [
      "",
      "Config records resource configurations and compliance against rules - it does not produce best-practice savings recommendations.",
      "CloudTrail is an audit log of API activity, not an advisory service.",
      "Systems Manager operates and manages instances; it does not deliver account-wide best-practice checks."
    ],
    services: ["AWS Trusted Advisor"],
    tags: ["trusted advisor", "cost optimization"]
  },
  {
    id: "4.3-002",
    domain: 4,
    task: "4.3",
    type: "single",
    difficulty: "medium",
    stem: "Which statement about Trusted Advisor checks under the FREE Basic Support plan is correct?",
    options: [
      "All 500+ checks are unlocked for Basic customers",
      "Basic Support includes a limited set of core checks, primarily around basic security and service limits",
      "Trusted Advisor is not available to Basic Support customers at all",
      "Basic customers receive cost optimization checks but not security checks"
    ],
    answer: [1],
    explanation: "Basic Support includes a small set of core Trusted Advisor checks (basic security posture and service limits). The full catalog - including the complete cost optimization and performance suites - comes with Business Support+ and above.",
    rationales: [
      "500+ checks belong to paid support tiers; Basic gets the core subset only.",
      "",
      "Basic customers do get Trusted Advisor - but limited to core checks, not nothing.",
      "The core set includes security checks; cost optimization depth is what improves with paid tiers."
    ],
    services: ["AWS Trusted Advisor", "AWS Support"],
    tags: ["trusted advisor", "basic support"]
  },
  {
    id: "4.3-003",
    domain: 4,
    task: "4.3",
    type: "single",
    difficulty: "medium",
    stem: "What does the AWS Health Dashboard's Personal Health Dashboard view show?",
    options: [
      "Aggregate service availability for all AWS customers worldwide",
      "Upcoming scheduled maintenance and events affecting YOUR specific AWS resources",
      "The health of the customer's on-premises servers",
      "A list of the account's most expensive resources"
    ],
    answer: [1],
    explanation: "The Personal Health view shows events that affect YOUR resources: scheduled maintenance (like EC2 rebalancing) and service issues touching the account, so teams can act before users notice.",
    rationales: [
      "That is the public/AWS service health view - the personal view is scoped to your account's resources.",
      "",
      "On-premises monitoring is outside AWS Health entirely.",
      "Cost data lives in Cost Explorer, not the Health Dashboard."
    ],
    services: ["AWS Health Dashboard"],
    tags: ["health dashboard"]
  },
  {
    id: "4.3-004",
    domain: 4,
    task: "4.3",
    type: "single",
    difficulty: "hard",
    stem: "An operations team wants AWS health events to trigger automated runbooks in their own tooling. Which capability enables that programmatically?",
    options: [
      "The AWS Pricing API",
      "The Trusted Advisor API",
      "The AWS Health API",
      "The IAM Access Analyzer API"
    ],
    answer: [2],
    explanation: "The AWS Health API exposes health events programmatically - integrate with EventBridge to route events into automation, ticketing, or chat tools. It is the programmatic counterpart to the Health Dashboard.",
    rationales: [
      "Pricing APIs return prices, not operational health events.",
      "Trusted Advisor delivers best-practice checks, not live health events.",
      "",
      "Access Analyzer analyzes IAM policy external access - unrelated to health events."
    ],
    services: ["AWS Health API"],
    tags: ["health api", "automation"]
  },
  {
    id: "4.3-005",
    domain: 4,
    task: "4.3",
    type: "single",
    difficulty: "medium",
    stem: "A security team discovers an AWS-hosted site sending spam phishing emails. Which team should they report this abuse to?",
    options: [
      "The AWS Trust and Safety team",
      "The AWS Technical Account Manager",
      "The AWS Partner Network team",
      "The AWS Marketplace team"
    ],
    answer: [0],
    explanation: "Abuse of AWS resources - spam, phishing, denial-of-service, malware hosting - is reported to the AWS Trust and Safety team through the abuse report form. They investigate and act on the abusive resource.",
    rationales: [
      "",
      "A TAM advises customer architectures; abuse enforcement is not a TAM function.",
      "The Partner Network manages the partner ecosystem, not abuse reports.",
      "Marketplace governs software listings; abuse of arbitrary AWS resources goes to Trust and Safety."
    ],
    services: ["AWS Trust and Safety"],
    tags: ["abuse", "trust and safety"]
  },
  {
    id: "4.3-006",
    domain: 4,
    task: "4.3",
    type: "single",
    difficulty: "easy",
    stem: "An engineer has a specific error message from a Lambda deployment and wants curated solutions plus community answers. Which resources fit?",
    options: [
      "AWS Budgets and the Billing console",
      "AWS re:Post and the AWS Knowledge Center",
      "The AWS Pricing Calculator and Cost Explorer",
      "IAM Access Analyzer and CloudWatch"
    ],
    answer: [1],
    explanation: "re:Post is AWS's community Q&A platform (with AWS expert participation) and the Knowledge Center is AWS's curated archive of common issues and fixes - both are the go-to self-service resources for specific errors.",
    rationales: [
      "Billing tools answer cost questions, not deployment errors.",
      "",
      "Pricing and cost analysis tools do not resolve error messages.",
      "Access Analyzer audits permissions; CloudWatch observes metrics and logs - neither is a curated Q&A resource."
    ],
    services: ["AWS re:Post"],
    tags: ["re:post", "knowledge center"]
  },
  {
    id: "4.3-007",
    domain: 4,
    task: "4.3",
    type: "single",
    difficulty: "easy",
    stem: "Where would a customer find AWS's official architecture whitepapers and best-practice guidance documents?",
    options: [
      "Only inside the AWS Billing console",
      "In the S3 bucket named aws-whitepapers",
      "On AWS official websites, such as the AWS documentation, Architecture Center, and Whitepapers pages",
      "They are emailed automatically when an account is created"
    ],
    answer: [2],
    explanation: "Whitepapers, reference architectures, and best-practice guides are published on AWS's official sites - docs.aws.amazon.com, the Architecture Center, and the Whitepapers library - free and publicly accessible.",
    rationales: [
      "The Billing console handles invoices and payment settings - no whitepaper library lives there.",
      "There is no such public bucket; whitepapers are served from AWS web properties.",
      "",
      "Nothing is emailed at account creation; customers locate these resources on official pages."
    ],
    services: ["AWS"],
    tags: ["documentation", "whitepapers"]
  },
  {
    id: "4.3-008",
    domain: 4,
    task: "4.3",
    type: "single",
    difficulty: "medium",
    stem: "Which is the CURRENT lineup of AWS Support plans (per the CLF-C02 exam guide)?",
    options: [
      "Basic, Developer, Business, Enterprise",
      "Basic, Business, Enterprise On-Ramp, Enterprise",
      "Basic, AWS Business Support+, AWS Enterprise Support, AWS Unified Operations",
      "Free, Silver, Gold, Platinum"
    ],
    answer: [2],
    explanation: "The current plans are Basic (free), AWS Business Support+ (AI-assisted 24x7 engineer access), AWS Enterprise Support (TAM, 15-minute response), and AWS Unified Operations (TAM plus Domain Specialist Engineers). The older Developer/Business/On-Ramp plans are being discontinued.",
    rationales: [
      "That was the historical lineup - Developer and Business are being retired (January 1, 2027).",
      "Enterprise On-Ramp is also being retired into Enterprise Support.",
      "",
      "Metal/gold/silver-style tiers are not AWS Support's naming."
    ],
    services: ["AWS Support"],
    tags: ["support plans", "business support+", "enterprise support", "unified operations"]
  },
  {
    id: "4.3-009",
    domain: 4,
    task: "4.3",
    type: "single",
    difficulty: "medium",
    stem: "Which features are included with AWS Business Support+?",
    options: [
      "A designated Technical Account Manager and 15-minute response times",
      "24x7 access to Cloud Support Engineers, business-critical response in under 30 minutes, and 500+ Trusted Advisor checks",
      "Only community forums and documentation",
      "Free migration of all workloads by AWS Professional Services"
    ],
    answer: [1],
    explanation: "Business Support+ provides 24x7 phone/web/chat with Cloud Support Engineers, sub-30-minute human engagement for business-critical system-down cases, 500+ Trusted Advisor checks, the Support API, and third-party software support, starting at $29/month.",
    rationales: [
      "TAM and 15-minute response are ENTERPRISE Support features - one tier up.",
      "",
      "Community forums and docs are Basic Support; Business Support+ is technical case support with engineers.",
      "Professional Services migrations are a paid engagement, not part of any support plan."
    ],
    services: ["AWS Support"],
    tags: ["business support+", "support plans"]
  },
  {
    id: "4.3-010",
    domain: 4,
    task: "4.3",
    type: "single",
    difficulty: "medium",
    stem: "A company runs mission-critical workloads and wants a designated Technical Account Manager plus 15-minute response on production-critical cases. Which plan?",
    options: [
      "AWS Enterprise Support",
      "Basic Support",
      "AWS Business Support+",
      "AWS re:Post Premium"
    ],
    answer: [0],
    explanation: "Enterprise Support adds the designated TAM, 15-minute production-critical response, strategic business reviews, AWS Security Incident Response, and Countdown event management - on top of everything in Business Support+.",
    rationales: [
      "",
      "Basic has no technical case support at all.",
      "Business Support+ response target is under 30 minutes for business-critical cases, and no TAM is assigned.",
      "re:Post is the community platform - there is no such plan tier."
    ],
    services: ["AWS Support"],
    tags: ["enterprise support", "tam"]
  },
  {
    id: "4.3-011",
    domain: 4,
    task: "4.3",
    type: "single",
    difficulty: "hard",
    stem: "Which plan pairs a designated TAM with Domain Specialist Engineers, personalized runbooks, and critical workload reviews?",
    options: [
      "Basic Support",
      "AWS Business Support+",
      "AWS Unified Operations",
      "AWS Business Support (legacy)"
    ],
    answer: [2],
    explanation: "AWS Unified Operations is the deep-operations tier: TAM plus Domain Specialist Engineers, application architecture guidance, infrastructure event management, critical workload reviews, and personalized operational runbooks.",
    rationales: [
      "Basic Support is the free tier with billing Q&A and forums.",
      "Business Support+ delivers engineer access and Trusted Advisor depth, but not a TAM/DSE pairing or runbooks.",
      "",
      "The legacy Business plan is being discontinued January 1, 2027, and never included a TAM."
    ],
    services: ["AWS Support"],
    tags: ["unified operations", "support plans"]
  },
  {
    id: "4.3-012",
    domain: 4,
    task: "4.3",
    type: "single",
    difficulty: "easy",
    stem: "Which capabilities does EVERY AWS account receive with free Basic Support?",
    options: [
      "24x7 Cloud Support Engineer calls and a TAM",
      "One-on-one account and billing questions, support forums, service health checks, and documentation access",
      "Unlimited technical support cases with 15-minute response",
      "Free Dedicated Hosts for testing"
    ],
    answer: [1],
    explanation: "Basic Support's universal benefits: 24x7 responses to account and billing questions, support forums, service health checks, and documentation/whitepaper/best-practice access. Technical case support begins with paid plans.",
    rationales: [
      "Engineer calls and TAM are paid-tier (Business Support+/Enterprise) benefits.",
      "",
      "Technical cases and 15-minute targets belong to Business Support+/Enterprise.",
      "No plan includes free Dedicated Hosts."
    ],
    services: ["AWS Support"],
    tags: ["basic support", "support plans"]
  },
  {
    id: "4.3-013",
    domain: 4,
    task: "4.3",
    type: "single",
    difficulty: "medium",
    stem: "A production system is down and losing revenue. On which plan does the customer get human engagement for business-critical system-down cases in UNDER 30 MINUTES, 24x7?",
    options: [
      "AWS Business Support+",
      "Basic Support",
      "AWS re:Post community",
      "AWS Knowledge Center"
    ],
    answer: [0],
    explanation: "Business Support+ targets less-than-30-minute human engagement for business-critical system-down cases around the clock, via phone, web, and chat with Cloud Support Engineers.",
    rationales: [
      "",
      "Basic Support has no technical case channel for a production outage.",
      "Community Q&A has no response-time guarantee - wrong tool for an outage.",
      "The Knowledge Center is a curated article archive, not an incident channel."
    ],
    services: ["AWS Support"],
    tags: ["business support+", "scenario"]
  },
  {
    id: "4.3-014",
    domain: 4,
    task: "4.3",
    type: "single",
    difficulty: "easy",
    stem: "What is AWS Marketplace?",
    options: [
      "AWS's internal auction house for used servers",
      "A digital catalog where customers find, buy, and immediately deploy third-party software that runs on AWS",
      "The console for purchasing Reserved Instances",
      "A forum for asking technical questions"
    ],
    answer: [1],
    explanation: "AWS Marketplace is the software catalog: AMIs, containers, and SaaS from independent software vendors, deployable directly into the customer's account, with private pricing offers and consolidated AWS billing.",
    rationales: [
      "No used-hardware auctions exist; Marketplace sells software, not servers.",
      "",
      "Reserved Instances are purchased through EC2/Billing tooling, not Marketplace.",
      "Forums are re:Post's role; Marketplace is a store."
    ],
    services: ["AWS Marketplace"],
    tags: ["marketplace"]
  },
  {
    id: "4.3-015",
    domain: 4,
    task: "4.3",
    type: "single",
    difficulty: "medium",
    stem: "A procurement team wants third-party software purchases governed by negotiated contracts, license entitlements tracked, and charges consolidated into the AWS bill. Which service delivers this?",
    options: [
      "AWS re:Post",
      "AWS Marketplace",
      "AWS Config",
      "AWS Step Functions"
    ],
    answer: [1],
    explanation: "Marketplace supports private offers (negotiated terms/pricing), manages entitlements to licensed software, and consolidates third-party charges into the single AWS invoice - its cost management and governance capabilities.",
    rationales: [
      "re:Post answers questions; it does not transact software.",
      "",
      "Config records resource configuration; it neither sells nor licenses software.",
      "Step Functions orchestrates workflows - nothing to do with software procurement."
    ],
    services: ["AWS Marketplace"],
    tags: ["marketplace", "governance"]
  },
  {
    id: "4.3-016",
    domain: 4,
    task: "4.3",
    type: "single",
    difficulty: "medium",
    stem: "In the AWS Partner Network, what distinguishes an independent software vendor (ISV) from a system integrator (SI)?",
    options: [
      "ISVs build and sell software products on AWS; SIs provide consulting, migration, and implementation services",
      "ISVs resell AWS accounts; SIs manufacture hardware",
      "ISVs work only for AWS internally; SIs work only for governments",
      "There is no difference - the terms are interchangeable"
    ],
    answer: [0],
    explanation: "Technology partners (ISVs) create software that runs on or integrates with AWS - sold via Marketplace or directly. Consulting partners (SIs) deliver services: architecture, migration, managed operations, and implementation for customers.",
    rationales: [
      "",
      "Neither builds hardware, and account resale is not the ISV role.",
      "Both serve external customers; neither is AWS-internal-only.",
      "The roles are distinct: product vs services."
    ],
    services: ["AWS Partner Network"],
    tags: ["partners", "isv", "system integrator"]
  },
  {
    id: "4.3-017",
    domain: 4,
    task: "4.3",
    type: "single",
    difficulty: "medium",
    stem: "What benefits does AWS Partner Network membership provide to PARTNERS?",
    options: [
      "Free EC2 capacity forever and immunity from billing",
      "Partner training and certification, partner events, and partner volume discounts for customers",
      "Automatic AWS certification for all partner employees",
      "Exclusive ownership of AWS Regions"
    ],
    answer: [1],
    explanation: "APN membership brings training and certification paths, partner events and enablement programs, and commercial benefits such as partner volume discounts - strengthening the partner's AWS practice and its customers' economics.",
    rationales: [
      "No infinite free capacity or billing immunity exists for anyone.",
      "",
      "Certifications must be earned by individuals; nothing is granted automatically.",
      "AWS owns and operates its Regions; partners never do."
    ],
    services: ["AWS Partner Network"],
    tags: ["partners", "benefits"]
  },
  {
    id: "4.3-018",
    domain: 4,
    task: "4.3",
    type: "single",
    difficulty: "medium",
    stem: "A large enterprise wants hands-on migration execution and long-term architecture guidance delivered as a professional engagement. Beyond Support plans, which options fit?",
    options: [
      "AWS Professional Services and AWS solution architects",
      "AWS Trusted Advisor checks",
      "The AWS Pricing Calculator",
      "AWS Health API events"
    ],
    answer: [0],
    explanation: "Technical assistance comes through AWS Professional Services (paid engagements that plan and execute migrations) and AWS solution architects (guidance within supported relationships). Trusted Advisor, Pricing Calculator, and Health API are tools, not people.",
    rationales: [
      "",
      "Trusted Advisor produces automated best-practice checks - no professional services are delivered.",
      "The calculator estimates costs; it does not perform migrations.",
      "Health API reports health events; it offers no architectural guidance."
    ],
    services: ["AWS Professional Services"],
    tags: ["professional services", "solutions architects"]
  },
  {
    id: "4.3-019",
    domain: 4,
    task: "4.3",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO resources should a team use to self-serve solutions for common AWS technical problems before opening a support case? (Select TWO.)",
    options: [
      "AWS Budgets",
      "AWS re:Post community Q&A",
      "AWS Organizations",
      "AWS Knowledge Center",
      "AWS Cost and Usage Report"
    ],
    answer: [1, 3],
    explanation: "re:Post (community answers with AWS participation) and the Knowledge Center (curated fixes for known issues) are the self-service troubleshooting pair. Budgets, Organizations, and CUR are financial/organizational tools, not problem-solving resources.",
    rationales: [
      "Budgets monitors spend thresholds - it does not solve technical problems.",
      "",
      "Organizations manages accounts and billing structure.",
      "",
      "CUR is a raw billing dataset, not a troubleshooting resource."
    ],
    services: ["AWS re:Post"],
    tags: ["re:post", "knowledge center", "self-service"]
  },
  {
    id: "4.3-020",
    domain: 4,
    task: "4.3",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO tools proactively help monitor and maintain the health and operation of an AWS environment? (Select TWO.)",
    options: [
      "AWS Trusted Advisor",
      "AWS Price List Bulk API",
      "AWS Health Dashboard",
      "AWS Billing invoices",
      "AWS re:Post"
    ],
    answer: [0, 2],
    explanation: "Trusted Advisor continuously checks the account against best practices, and the Health Dashboard surfaces service and personal health events - both are monitoring/proactive-operations tools. The price list, invoices, and re:Post serve other purposes.",
    rationales: [
      "",
      "The price list publishes rates - no environment monitoring.",
      "",
      "Invoices record what was already billed - retrospective, not monitoring.",
      "re:Post answers questions when you ask - it does not watch the environment."
    ],
    services: ["AWS Trusted Advisor", "AWS Health Dashboard"],
    tags: ["trusted advisor", "health dashboard", "monitoring"]
  },
  {
    id: "4.3-021",
    domain: 4,
    task: "4.3",
    type: "single",
    difficulty: "medium",
    stem: "A company is deciding its support investment. Its workloads are business-critical, it wants 24x7 engineer access and fast response, but it does NOT yet need a designated TAM. Which plan matches?",
    options: [
      "Basic Support",
      "AWS Enterprise Support",
      "AWS Business Support+",
      "AWS Unified Operations"
    ],
    answer: [2],
    explanation: "Business Support+ is the first tier with 24x7 Cloud Support Engineers and sub-30-minute business-critical response; the TAM arrives with Enterprise Support. Matching the plan to need avoids paying for features not yet required.",
    rationales: [
      "Basic Support provides no technical case support - unusable for business-critical workloads.",
      "Enterprise Support fits, but it adds the TAM (and cost) the company said it does not yet need.",
      "",
      "Unified Operations includes a TAM and DSEs - more than the requirement."
    ],
    services: ["AWS Support"],
    tags: ["business support+", "scenario", "support plans"]
  }
);
