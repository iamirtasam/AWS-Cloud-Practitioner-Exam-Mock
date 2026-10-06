window.QBANK = window.QBANK || [];
window.QBANK.push(
  {
    id: "4.2-001",
    domain: 4,
    task: "4.2",
    type: "single",
    difficulty: "easy",
    stem: "What is the primary purpose of AWS Cost Explorer?",
    options: [
      "To provision compute capacity in advance",
      "To visualize, filter, and analyze historical and current AWS costs and usage over time",
      "To generate a signed contract with AWS for a fixed monthly fee",
      "To replace IAM policies for controlling which services a team may use"
    ],
    answer: [1],
    explanation: "Cost Explorer is the analysis and visualization tool: view spend over time (up to the last 12 months and forecasts ahead), group by service, account, tag, Region, and filter to find what changed and why.",
    rationales: [
      "Capacity provisioning is not Cost Explorer's function - it observes cost, not capacity.",
      "",
      "There is no fixed-fee contract; Cost Explorer reports what was actually consumed.",
      "Cost control decisions are made by policy and governance, not by a reporting tool."
    ],
    services: ["AWS Cost Explorer"],
    tags: ["cost explorer"]
  },
  {
    id: "4.2-002",
    domain: 4,
    task: "4.2",
    type: "single",
    difficulty: "easy",
    stem: "What does AWS Budgets let a company do that Cost Explorer's reports do not?",
    options: [
      "Display costs grouped by AWS Region",
      "Set custom cost or usage thresholds and trigger alerts when they are approached or exceeded",
      "Show a 12-month history of spend by service",
      "Download the AWS price list for all services"
    ],
    answer: [1],
    explanation: "Budgets is the proactive tool: define cost, usage, reservation-utilization, or coverage budgets and receive alerts (email/SNS) as spend approaches or crosses thresholds. Cost Explorer shows what happened; Budgets warns before it happens.",
    rationales: [
      "Grouping by Region is a Cost Explorer capability, not Budgets' differentiator.",
      "",
      "Historical reporting is Cost Explorer territory.",
      "Price lists come from AWS pricing pages and the Price List API, not Budgets."
    ],
    services: ["AWS Budgets"],
    tags: ["budgets", "alerts"]
  },
  {
    id: "4.2-003",
    domain: 4,
    task: "4.2",
    type: "single",
    difficulty: "easy",
    stem: "A solutions architect wants to estimate the monthly cost of a NOT-YET-DEPLOYED architecture before building it. Which tool?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Pricing Calculator",
      "AWS Cost and Usage Report"
    ],
    answer: [2],
    explanation: "The Pricing Calculator models candidate architectures service-by-service (compute, storage, transfer) and exports/share the estimate - its entire purpose is pricing BEFORE deployment.",
    rationales: [
      "Cost Explorer analyzes costs of resources that already exist - nothing to analyze pre-deployment.",
      "Budgets alerts against thresholds; it does not model architectures.",
      "",
      "The CUR is a detailed line-item report of actual usage, not a forward-looking estimator."
    ],
    services: ["AWS Pricing Calculator"],
    tags: ["pricing calculator", "estimation"]
  },
  {
    id: "4.2-004",
    domain: 4,
    task: "4.2",
    type: "single",
    difficulty: "medium",
    stem: "What is the AWS Cost and Usage Report (CUR)?",
    options: [
      "A dashboard comparing this month's costs to last month's",
      "The most detailed line-item report of AWS usage and costs, delivered to an S3 bucket for analysis",
      "A real-time alerting service for cost anomalies",
      "The invoice PDF emailed after each billing cycle"
    ],
    answer: [1],
    explanation: "CUR publishes the most granular usage and cost data (per resource, per hour, with tags and discounts) to S3, typically analyzed in Athena/QuickSight. It is the raw dataset behind advanced cost analytics.",
    rationales: [
      "Month-over-month comparison dashboards are Cost Explorer's job, not CUR's.",
      "",
      "Anomaly detection exists in Cost Explorer (anomaly detection), not as CUR's function.",
      "The invoice is a summary document; CUR is orders of magnitude more detailed."
    ],
    services: ["AWS Cost and Usage Report"],
    tags: ["cur", "billing"]
  },
  {
    id: "4.2-005",
    domain: 4,
    task: "4.2",
    type: "single",
    difficulty: "medium",
    stem: "How does AWS Organizations' consolidated billing benefit member accounts?",
    options: [
      "Each member account receives a separate invoice with higher discounts",
      "One payer account receives a single bill for all accounts, and volume discounts and RI/Savings Plan benefits are shared",
      "Member accounts cannot see their own costs",
      "It merges all member accounts' IAM users into one account"
    ],
    answer: [1],
    explanation: "Consolidated billing: the management (payer) account receives one invoice covering every member account; aggregated volume can reach discount tiers, and RI/Savings Plan discounts apply across the whole organization. Each account still sees its own costs.",
    rationales: [
      "Separate invoices with higher discounts is backwards - consolidation produces ONE invoice and better aggregate pricing.",
      "",
      "Cost visibility per account is preserved; consolidation changes payment, not visibility.",
      "IAM users remain per-account; consolidation does not merge identities."
    ],
    services: ["AWS Organizations"],
    tags: ["consolidated billing", "organizations"]
  },
  {
    id: "4.2-006",
    domain: 4,
    task: "4.2",
    type: "single",
    difficulty: "medium",
    stem: "In a consolidated-billing organization, why do cost allocation tags matter for the payer?",
    options: [
      "Tags determine which account pays the invoice",
      "Tags enable splitting the single bill into per-team, per-project cost reports",
      "Tags are required to enable consolidated billing",
      "Tags encrypt the cost data of each member account"
    ],
    answer: [1],
    explanation: "One invoice covers everyone, so attribution depends on tags (and account structure): activate cost allocation tags, and Cost Explorer/CUR can slice the single bill by team, project, or environment. Tags turn one bill into many accountable views.",
    rationales: [
      "The payer account always pays; tags change reporting, not liability.",
      "",
      "Consolidated billing requires account invitation/management, not tags.",
      "Tags have no encryption role anywhere in billing."
    ],
    services: ["AWS Organizations", "AWS Cost Explorer"],
    tags: ["cost allocation", "tags", "consolidated billing"]
  },
  {
    id: "4.2-007",
    domain: 4,
    task: "4.2",
    type: "single",
    difficulty: "medium",
    stem: "What must happen before a user-defined tag appears as a cost allocation key in billing reports?",
    options: [
      "The tag must be added to the AWS price list",
      "The tag must be activated as a cost allocation tag in the Billing console",
      "The tag must contain the prefix aws:",
      "The tag must be attached to at least 100 resources"
    ],
    answer: [1],
    explanation: "User-defined tags become billable dimensions only after being ACTIVATED as cost allocation tags (per account, in the Billing console). AWS-generated tags with the aws: prefix are reserved and cannot be edited - the opposite of the rule implied in the wrong option.",
    rationales: [
      "The price list is AWS's published rates - unrelated to tag activation.",
      "",
      "The aws: prefix marks AWS-reserved tags, which cannot be created or activated by users.",
      "No usage threshold exists; activation, not volume, controls availability."
    ],
    services: ["AWS Billing"],
    tags: ["tags", "cost allocation"]
  },
  {
    id: "4.2-008",
    domain: 4,
    task: "4.2",
    type: "single",
    difficulty: "easy",
    stem: "A finance manager wants an alert when the account's monthly spend reaches 80% of a $10,000 plan. Which tool fits?",
    options: [
      "A Cost Explorer forecast report emailed monthly",
      "An AWS Budget with a $10,000 threshold and an alert at 80%",
      "The AWS Pricing Calculator",
      "A Cost and Usage Report scheduled to S3"
    ],
    answer: [1],
    explanation: "Budgets handles exactly this: a cost budget of $10,000 with an alert configured at 80% triggers notification as spend approaches the limit - proactive, not retrospective.",
    rationales: [
      "A monthly forecast arrives after the fact; the requirement is a threshold trigger.",
      "",
      "The calculator estimates new designs - irrelevant to monitoring live spend.",
      "CUR delivers raw data for analysis; the alerting behavior is Budgets' role."
    ],
    services: ["AWS Budgets"],
    tags: ["budgets", "scenario"]
  },
  {
    id: "4.2-009",
    domain: 4,
    task: "4.2",
    type: "single",
    difficulty: "medium",
    stem: "Which capability does Cost Explorer provide for RESERVATIONS specifically?",
    options: [
      "Buying Reserved Instances automatically when utilization drops",
      "Recommendations, utilization tracking, and coverage reporting for Reserved Instances and Savings Plans",
      "Converting unused reservation value into credits automatically",
      "Selling unused reservations on a public marketplace without any setup"
    ],
    answer: [1],
    explanation: "Cost Explorer includes RI and Savings Plan views: utilization (how much of your commitment is used), coverage (how much usage was covered), and recommendations for what to buy next. Purchase remains a decision, not automatic.",
    rationales: [
      "Purchases are not automated by Cost Explorer - it recommends; you decide and buy.",
      "",
      "No automatic conversion exists; unused RI value can be listed on the RI Marketplace by choice.",
      "The RI Marketplace exists but requires deliberately listing the reservation - not an automatic Cost Explorer action."
    ],
    services: ["AWS Cost Explorer"],
    tags: ["cost explorer", "reserved instances"]
  },
  {
    id: "4.2-010",
    domain: 4,
    task: "4.2",
    type: "single",
    difficulty: "medium",
    stem: "A company wants per-department spend visibility. Departments share one AWS account today. What is the standard mechanism to attribute costs to departments?",
    options: [
      "Create one IAM user per department and bill by user",
      "Tag resources with a Department key and activate it as a cost allocation tag",
      "Run one Region per department",
      "Purchase a separate support plan per department"
    ],
    answer: [1],
    explanation: "Tagging with a consistent Department key (activated for cost allocation) is the standard single-account attribution method - Cost Explorer and CUR then group spend by department. IAM users and Regions are not billing dimensions.",
    rationales: [
      "IAM users are free and not a billing dimension - identity does not attribute cost.",
      "",
      "Regions host workloads for latency/resilience reasons, not department accounting.",
      "Support plans are per-account products, not cost attribution mechanisms."
    ],
    services: ["AWS Cost Explorer"],
    tags: ["tags", "cost allocation", "scenario"]
  },
  {
    id: "4.2-011",
    domain: 4,
    task: "4.2",
    type: "single",
    difficulty: "easy",
    stem: "Where does a customer find official pricing details for individual AWS services (per-GB, per-hour rates) before deploying anything?",
    options: [
      "On the AWS Pricing Calculator and each service's pricing page on aws.amazon.com",
      "In the IAM console under billing settings",
      "In the Amazon S3 console next to each bucket",
      "Only from an AWS sales call"
    ],
    answer: [0],
    explanation: "Every service publishes its pricing page (rates, free tiers, examples), and the Pricing Calculator assembles those rates into architecture-level estimates - both official, self-service, and available before deployment.",
    rationales: [
      "",
      "IAM manages permissions; it contains no service pricing.",
      "S3's console manages buckets; pricing lives on the product pricing pages.",
      "Published pricing is public and self-service - no sales call required."
    ],
    services: ["AWS Pricing Calculator"],
    tags: ["pricing information"]
  },
  {
    id: "4.2-012",
    domain: 4,
    task: "4.2",
    type: "single",
    difficulty: "hard",
    stem: "Which statement about the management (payer) account in consolidated billing is correct?",
    options: [
      "It receives one invoice for all member accounts' charges",
      "It automatically inherits IAM permissions from member accounts",
      "It must run every member account's workloads",
      "It cannot view member accounts' cost data"
    ],
    answer: [0],
    explanation: "The payer account's billing role is financial: one invoice, one payment, organization-wide discounts and RI sharing. It can view member cost data (billing is consolidated), while resource access is still governed per account by IAM.",
    rationales: [
      "",
      "Billing consolidation does not touch IAM - each account keeps its own identity plane.",
      "Member accounts run their own workloads; the payer account is an administrative and financial role.",
      "Consolidated billing gives the payer VISIBILITY into member costs - that is its purpose."
    ],
    services: ["AWS Organizations"],
    tags: ["consolidated billing", "organizations"]
  },
  {
    id: "4.2-013",
    domain: 4,
    task: "4.2",
    type: "single",
    difficulty: "medium",
    stem: "What is a cost anomaly in Cost Explorer and what does the service do about it?",
    options: [
      "A bill over $100,000, which AWS investigates manually",
      "A spend pattern that deviates from expected trends; Cost Explorer uses machine learning to detect it and can alert via monitors",
      "Any charge from a Region other than us-east-1",
      "A duplicated invoice line item, which must be fixed by AWS Support"
    ],
    answer: [1],
    explanation: "Cost Anomaly Detection applies ML to your daily spend patterns, flags unexpected deviations per service/member account/tag, and notifies through cost monitors - catching incidents (runaway jobs, forgotten test fleets) that thresholds miss.",
    rationales: [
      "Anomalies are relative to your own baseline, not an absolute dollar figure.",
      "",
      "Cross-Region charges are normal usage, not anomalies.",
      "Anomaly detection is about usage pattern, not billing errors requiring Support."
    ],
    services: ["AWS Cost Explorer"],
    tags: ["anomaly detection", "cost explorer"]
  },
  {
    id: "4.2-014",
    domain: 4,
    task: "4.2",
    type: "single",
    difficulty: "easy",
    stem: "Which statement best describes the relationship between AWS Budgets and Cost Explorer?",
    options: [
      "Budgets reports history; Cost Explorer sets alerts",
      "They are competing tools; only one can be enabled per account",
      "Budgets alerts against thresholds you define; Cost Explorer analyzes and forecasts spend - they complement each other",
      "Budgets replaces the need for tags entirely"
    ],
    answer: [2],
    explanation: "Budgets is proactive (thresholds, alerts), Cost Explorer is analytical (history, grouping, forecasts). Teams use both: Explorer to understand and Budgets to guard. There is no either/or relationship.",
    rationales: [
      "Exactly reversed: Budgets sets alerts, Explorer reports history.",
      "No exclusivity exists - both tools are commonly enabled together.",
      "",
      "Tags improve both tools' reporting; neither removes the need for tagging discipline."
    ],
    services: ["AWS Budgets", "AWS Cost Explorer"],
    tags: ["budgets", "cost explorer"]
  },
  {
    id: "4.2-015",
    domain: 4,
    task: "4.2",
    type: "single",
    difficulty: "hard",
    stem: "How can the AWS Pricing Calculator help a company compare deployment options for a new workload?",
    options: [
      "It measures the actual utilization of running instances and suggests downsizing",
      "It builds side-by-side estimates for different architectures, instance types, and storage classes before deployment",
      "It automatically deploys the cheapest architecture it finds",
      "It imports last month's invoice and redraws it as a pie chart"
    ],
    answer: [1],
    explanation: "The calculator's comparison workflow: model option A (say, EC2 + EBS), model option B (say, RDS + S3), share/export both estimates, and compare monthly costs BEFORE anything is built. It is pre-deployment decision support.",
    rationales: [
      "Utilization measurement of running fleets is Cost Explorer/Compute Optimizer territory, not the calculator.",
      "",
      "The calculator estimates; it never deploys anything.",
      "Invoice analysis is Cost Explorer/CUR work; the calculator looks forward, not backward."
    ],
    services: ["AWS Pricing Calculator"],
    tags: ["pricing calculator", "scenario"]
  },
  {
    id: "4.2-016",
    domain: 4,
    task: "4.2",
    type: "single",
    difficulty: "medium",
    stem: "A member account in a consolidated-billing organization runs workloads but cannot manage its own RI purchases well. What does consolidated billing do for its usage?",
    options: [
      "Blocks the account from receiving any RI benefit",
      "Applies the organization's shared RI and Savings Plan discounts to the account's matching usage",
      "Converts the account's usage to Spot automatically",
      "Charges the account double for missing reservations"
    ],
    answer: [1],
    explanation: "RI/Savings Plan discounts are org-wide under consolidated billing: when the member's usage matches any account's commitment, the discounted rate applies automatically - smaller accounts effectively ride the organization's purchasing power.",
    rationales: [
      "The benefit flows TO member accounts - that is the feature's point.",
      "",
      "No automatic conversion to Spot occurs; pricing models remain explicit choices.",
      "There is no penalty rate; the account pays the shared-discount rate for covered usage."
    ],
    services: ["AWS Organizations"],
    tags: ["consolidated billing", "reserved instances"]
  },
  {
    id: "4.2-017",
    domain: 4,
    task: "4.2",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO actions are performed in the AWS Billing and Cost Management console? (Select TWO.)",
    options: [
      "Activating cost allocation tags for billing reports",
      "Configuring an IAM password policy",
      "Setting up an AWS Budget with email alerts",
      "Creating an Amazon EC2 key pair",
      "Configuring Route 53 hosted zones"
    ],
    answer: [0, 2],
    explanation: "The Billing console is where financial administration happens: activate cost allocation tags, create budgets and alerts, view invoices, configure CUR delivery. Password policies belong to IAM; key pairs to EC2; hosted zones to Route 53.",
    rationales: [
      "",
      "Password policy is an IAM configuration, outside the Billing console.",
      "",
      "EC2 key pairs are created in the EC2 console.",
      "Hosted zones are managed in Route 53's console."
    ],
    services: ["AWS Billing"],
    tags: ["billing console", "budgets", "tags"]
  },
  {
    id: "4.2-018",
    domain: 4,
    task: "4.2",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO statements about AWS Organizations consolidated billing are correct? (Select TWO.)",
    options: [
      "The management account receives a single invoice for all member accounts",
      "Member accounts lose the ability to see their own costs",
      "The management account automatically gains access to member accounts' resources",
      "Member accounts are deleted and merged into the management account",
      "RI discounts can be shared across member accounts for matching usage"
    ],
    answer: [0, 4],
    explanation: "Consolidated billing means one invoice through the payer account and organization-wide sharing of RI/Savings Plan discounts and volume tiers. Accounts stay independent: each keeps its own costs, resources, and IAM.",
    rationales: [
      "",
      "Per-account cost visibility is preserved under consolidation - only payment is centralized.",
      "Billing consolidation does not touch resource access; IAM still governs each account separately.",
      "Accounts remain independent; nothing is deleted or merged.",
      ""
    ],
    services: ["AWS Organizations"],
    tags: ["consolidated billing", "organizations"]
  },
  {
    id: "4.2-019",
    domain: 4,
    task: "4.2",
    type: "single",
    difficulty: "medium",
    stem: "A team's S3 bill doubled this month and nobody knows why. Which tool answers 'which bucket and which operation caused it' fastest?",
    options: [
      "AWS Budgets",
      "Cost Explorer filtered by S3, grouped by usage type and tag",
      "The AWS Pricing Calculator",
      "IAM credential report"
    ],
    answer: [1],
    explanation: "Cost Explorer's drill-down is the diagnostic path: filter to S3, group by usage type/API operation, Region, and tags to find the bucket, operation, or lifecycle change behind the jump. Budgets would only confirm that a threshold was crossed.",
    rationales: [
      "Budgets answers 'did we exceed a number', not 'what exactly grew'.",
      "",
      "The calculator prices future designs; it cannot inspect the past month.",
      "The credential report lists IAM users' keys - unrelated to storage cost."
    ],
    services: ["AWS Cost Explorer", "Amazon S3"],
    tags: ["cost explorer", "scenario", "diagnostics"]
  },
  {
    id: "4.2-020",
    domain: 4,
    task: "4.2",
    type: "single",
    difficulty: "easy",
    stem: "Which billing support resource gives ALL customers 24x7 access to account and billing questions?",
    options: [
      "AWS Enterprise Support only",
      "Basic Support, included with every AWS account",
      "AWS Business Support+ only",
      "The AWS Technical Account Manager program"
    ],
    answer: [1],
    explanation: "Basic Support (free with every account) includes 24x7 one-on-one responses to account and billing questions, support forums, service health checks, and documentation access - billing help is universal, not premium.",
    rationales: [
      "Enterprise Support adds technical case depth and a TAM; billing Q&A does not require it.",
      "",
      "Business Support+ adds technical support cases; basic billing help predates and underlies it.",
      "A TAM is an Enterprise-plan benefit, not the baseline billing channel."
    ],
    services: ["AWS Support"],
    tags: ["basic support", "billing support"]
  },
  {
    id: "4.2-021",
    domain: 4,
    task: "4.2",
    type: "single",
    difficulty: "hard",
    stem: "A company must provide external auditors with an extremely detailed monthly breakdown of usage and spend, including per-resource line items. Which delivery fits?",
    options: [
      "Screenshot the Cost Explorer graphs monthly",
      "Configure the Cost and Usage Report to publish to S3 and let auditors query it",
      "Email the monthly invoice PDF",
      "Share the account root credentials with the auditors"
    ],
    answer: [1],
    explanation: "CUR is the audit-grade dataset: line items per resource per hour with tags, discounts, and amortization, delivered to S3 for query. The invoice is a summary; screenshots are not evidence-grade; root credentials are never shared with anyone.",
    rationales: [
      "Screenshots of dashboards lack line-item detail and are not reproducible evidence.",
      "",
      "The invoice summarizes totals; auditors asked for per-resource breakdowns.",
      "Sharing root credentials violates security fundamentals regardless of the audit's purpose."
    ],
    services: ["AWS Cost and Usage Report"],
    tags: ["cur", "scenario", "compliance"]
  }
);
