window.QBANK = window.QBANK || [];
window.QBANK.push(
  {
    id: "1.4-001",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "easy",
    stem: "What is Total Cost of Ownership (TCO) in the context of cloud economics?",
    options: [
      "The price of one EC2 instance per hour",
      "The annual AWS bill only",
      "A comparison of the FULL cost of running workloads on-premises (hardware, facilities, staff, licenses) against the full cost of running them on AWS",
      "The cost of the company's offices"
    ],
    answer: [2],
    explanation: "TCO analysis is the economics backbone of cloud adoption: it counts everything on-premises - servers, storage, network, power, cooling, facilities, administration staff, licenses - and compares with the AWS bill plus remaining customer-side costs. The comparison is what turns 'the cloud seems expensive' into a defensible decision.",
    rationales: [
      "One instance's price is a unit cost, not total ownership.",
      "The AWS bill is only one side of the comparison.",
      "",
      "Offices are unrelated to workload ownership."
    ],
    services: [],
    tags: ["tco", "economics"]
  },
  {
    id: "1.4-002",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "medium",
    stem: "Which cost items belong in the ON-PREMISES side of a TCO comparison?",
    options: [
      "Only the electricity bill",
      "Only software subscription fees",
      "Nothing - on-premises is free once hardware is bought",
      "Hardware purchase and refresh, facilities, power and cooling, network, administration staff, and software licenses"
    ],
    answer: [3],
    explanation: "On-premises TCO is much more than hardware: facilities, power, cooling, physical security, network capacity, refresh cycles, and the people who run it all are real, recurring costs that are easy to underestimate - which is precisely why TCO analysis exists.",
    rationales: [
      "Power is one line among many.",
      "Licenses are one line among many.",
      "The purchase is only the beginning of on-premises spending.",
      ""
    ],
    services: [],
    tags: ["tco"]
  },
  {
    id: "1.4-003",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "easy",
    stem: "In cloud economics, AWS spending is generally classified as which type of expense?",
    options: [
      "Capital expense (capex)",
      "Operational expense (opex)",
      "Escrow",
      "Depreciation"
    ],
    answer: [1],
    explanation: "Cloud spending is operational: usage-based, cancellable, and expensed as consumed - the capex-to-opex shift. On-premises infrastructure buying (servers, buildings) is the capital expense being replaced.",
    rationales: [
      "Capex is what the cloud model avoids - upfront asset purchases.",
      "",
      "Escrow is a financial holding arrangement, unrelated.",
      "Depreciation is how capex is written down over time - an on-premises concept."
    ],
    services: [],
    tags: ["capex", "opex"]
  },
  {
    id: "1.4-004",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "medium",
    stem: "A resource-monitoring review shows several instances running at 8% CPU around the clock. Which economics practice addresses this?",
    options: [
      "Right-sizing - matching instance size to actual workload, reducing waste",
      "Buying more instances to spread the load",
      "Leaving them oversized in case of future load",
      "Upgrading to larger instances for headroom"
    ],
    answer: [0],
    explanation: "Right-sizing aligns provisioned capacity with real demand: the tiny-CPU instances are candidates to downsize, directly cutting spend with no performance loss. It is the first, highest-yield optimization after any migration.",
    rationales: [
      "",
      "Adding instances deepens the waste for an 8% workload.",
      "Idle capacity is pure waste - 'in case' is the cost leak.",
      "Larger instances increase the mismatch."
    ],
    services: [],
    tags: ["right-sizing", "cost optimization"]
  },
  {
    id: "1.4-005",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "medium",
    stem: "How does elasticity improve cloud economics?",
    options: [
      "It makes resources free during business hours",
      "It doubles prices during peaks to fund infrastructure",
      "Resources scale in when demand drops, so the company stops paying for idle capacity",
      "It requires paying for a year regardless of use"
    ],
    answer: [2],
    explanation: "Elasticity converts capacity into a variable that follows demand: scale out for peaks, scale in for troughs. The economic effect is that the bill tracks the workload curve instead of a worst-case guess.",
    rationales: [
      "No free periods exist - billing is per use.",
      "On-Demand prices do not surge by time of day.",
      "",
      "Commitments are optional (Reserved/Savings Plans), not required by elasticity."
    ],
    services: [],
    tags: ["elasticity", "economics"]
  },
  {
    id: "1.4-006",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "medium",
    stem: "What happens to a company's capital when it stops buying servers and shifts to cloud consumption?",
    options: [
      "Capital is frozen by AWS until contracts end",
      "Capital must be spent on backup generators regardless",
      "Capital is transferred to AWS as a deposit",
      "Capital is freed for investment elsewhere - product development, hiring, market expansion"
    ],
    answer: [3],
    explanation: "Avoiding large upfront asset purchases releases capital: instead of sitting in depreciating hardware, money is available for activities that grow the business. This 'capital efficiency' argument is a standard part of cloud economics.",
    rationales: [
      "No deposits or freezes exist in consumption pricing.",
      "Generators are AWS's facilities problem.",
      "There is no deposit model for standard AWS usage.",
      ""
    ],
    services: [],
    tags: ["economics", "capital"]
  },
  {
    id: "1.4-007",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "easy",
    stem: "What does \"pay for what you use\" mean for AWS compute resources?",
    options: [
      "A flat monthly subscription per company",
      "Pricing set by yearly negotiation only",
      "Metered billing - compute billed by the second or hour actually consumed",
      "A one-time lifetime license per server"
    ],
    answer: [2],
    explanation: "Consumption billing is the model: EC2 bills by the second (minimum 60 seconds), Lambda per request and millisecond, S3 per GB-month. Usage and cost are the same curve.",
    rationales: [
      "There is no flat company-wide subscription for infrastructure.",
      "Published usage-based pricing applies by default.",
      "",
      "Perpetual licenses are the old model the cloud replaced."
    ],
    services: [],
    tags: ["pay as you go"]
  },
  {
    id: "1.4-008",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "medium",
    stem: "What is the tradeoff between On-Demand pricing and Reserved Instances / Savings Plans?",
    options: [
      "Committing to steady usage for one or three years earns significant discounts versus paying full On-Demand rates",
      "Reserved pricing costs more in exchange for faster hardware",
      "On-Demand requires a three-year commitment; Reserved is ad hoc",
      "There is no price difference between them"
    ],
    answer: [0],
    explanation: "The exchange is commitment for discount: steady, predictable workloads can be committed for 1 or 3 years (Reserved Instances, Savings Plans) at large discounts - up to ~72% - while variable or short-lived work stays On-Demand.",
    rationales: [
      "",
      "Reserved pricing is cheaper, and hardware speed is not the differentiator.",
      "Exactly reversed.",
      "The discount gap between them is the whole point."
    ],
    services: [],
    tags: ["pricing models", "reserved", "savings plans"]
  },
  {
    id: "1.4-009",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "medium",
    stem: "A company already owns Windows Server licenses that are eligible for cloud use. Which option can lower its AWS run cost?",
    options: [
      "Buying all licenses again at full price",
      "Ignoring licenses entirely - AWS does not check",
      "Bringing its own licenses (BYOL) where the licensing terms allow, instead of paying license-included rates",
      "Returning licenses to the vendor for a refund"
    ],
    answer: [2],
    explanation: "AWS offers license-included instances and, where license terms permit, BYOL - running existing licenses on AWS to avoid paying for new ones. License economics are a standard TCO input for Windows and other licensed workloads.",
    rationales: [
      "Rebuying licenses already owned wastes the asset.",
      "License compliance still applies in the cloud.",
      "",
      "Returning licenses would force paying license-included rates instead."
    ],
    services: [],
    tags: ["licensing", "byol"]
  },
  {
    id: "1.4-010",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "medium",
    stem: "A workload runs 24/7 at a steady, predictable level. Which pricing approach minimizes its cost?",
    options: [
      "Spot Instances",
      "Paying On-Demand forever",
      "Provisioning twice the capacity needed",
      "Reserved Instances or Savings Plans - committing to the steady baseline for a discount"
    ],
    answer: [3],
    explanation: "Steady baseline load is the textbook case for commitment pricing: Reserved Instances or Savings Plans discount exactly the usage that never stops, leaving spiky or fault-tolerant portions on other models.",
    rationales: [
      "Spot is for interruptible work; a steady production workload can be reclaimed.",
      "On-Demand is the most expensive way to run a constant load.",
      "Doubling capacity doubles the bill with no benefit.",
      ""
    ],
    services: [],
    tags: ["pricing models", "reserved"]
  },
  {
    id: "1.4-011",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "easy",
    stem: "Which tool lets a company model and compare the estimated monthly cost of an architecture on AWS before deploying it?",
    options: [
      "The AWS Pricing Calculator",
      "Amazon Connect",
      "AWS CodePipeline",
      "Amazon EventBridge"
    ],
    answer: [0],
    explanation: "The AWS Pricing Calculator estimates service costs for a described workload, letting architects compare configurations and budgets before spending anything. It is the estimation tool of cloud economics (explored further under billing resources in Domain 4).",
    rationales: [
      "",
      "Connect is a contact center service.",
      "CodePipeline orchestrates releases.",
      "EventBridge routes events."
    ],
    services: [],
    tags: ["pricing calculator", "estimation"]
  },
  {
    id: "1.4-012",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "medium",
    stem: "Which on-premises facility costs disappear from the customer's budget when workloads move to AWS?",
    options: [
      "Salaries of application developers",
      "Data center space, power, cooling, and physical security",
      "Costs of writing the business logic",
      "Marketing campaign costs"
    ],
    answer: [1],
    explanation: "Facility-level costs - floor space, electricity, cooling, physical security, staff for the machine room - are absorbed by AWS. Business-level costs (developers, marketing) remain exactly as before.",
    rationales: [
      "Development staff remain the customer's - and their focus improves.",
      "",
      "Business logic is customer work regardless of platform.",
      "Marketing is untouched by infrastructure decisions."
    ],
    services: [],
    tags: ["tco", "facilities"]
  },
  {
    id: "1.4-013",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "medium",
    stem: "How does adopting managed services affect the economics of operations staffing?",
    options: [
      "It requires hiring more systems administrators",
      "It has no effect on operations work",
      "It reduces undifferentiated operational work - patching, backups, capacity - so staff time shifts to higher-value activities",
      "It eliminates the need for any IT staff ever"
    ],
    answer: [2],
    explanation: "Every managed layer removes operational tasks: RDS absorbs database patching, Lambda absorbs fleet management, S3 absorbs storage operations. The economics show up as staff hours redirected from maintenance to value-adding work.",
    rationales: [
      "Managed services reduce, not increase, infrastructure administration.",
      "The operational effect is precisely the point.",
      "",
      "Staff remain essential - for data, applications, and architecture."
    ],
    services: [],
    tags: ["managed services", "economics"]
  },
  {
    id: "1.4-014",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "hard",
    stem: "What is the purpose of performing a TCO analysis before adopting the cloud?",
    options: [
      "To fulfill a tax filing requirement",
      "To prove the cloud is always cheaper than on-premises",
      "To replace the need for budgeting after migration",
      "To make a data-driven decision: quantify current costs, model target-state costs, and compare honestly - including transition costs"
    ],
    answer: [3],
    explanation: "TCO analysis exists to inform the decision with numbers: current baseline, projected AWS spend, migration costs, and timeline. The cloud is not universally cheaper - TCO shows where and why it is, workload by workload.",
    rationales: [
      "Tax filings are not the driver.",
      "It is not always cheaper - the analysis determines whether it is, for which workloads.",
      "Budgeting continues after migration; it just changes shape.",
      ""
    ],
    services: [],
    tags: ["tco"]
  },
  {
    id: "1.4-015",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "medium",
    stem: "How do AWS's economies of scale appear in a customer's bill?",
    options: [
      "As lower per-unit prices than a single company can typically achieve alone",
      "As a fixed annual surcharge",
      "They do not appear - customers pay AWS's own internal costs",
      "As free unlimited compute"
    ],
    answer: [0],
    explanation: "The scale benefit is embedded in unit pricing: aggregated purchasing power and utilization let AWS price per second, per GB, per request below what individual procurement achieves. Customers inherit the scale without building it.",
    rationales: [
      "",
      "No such surcharge exists.",
      "Customers pay AWS's published prices - which already include the scale benefit.",
      "Compute is metered, never free-unlimited."
    ],
    services: [],
    tags: ["economies of scale"]
  },
  {
    id: "1.4-016",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "medium",
    stem: "A fault-tolerant nightly batch job can be interrupted and restarted safely. Which pricing model maximizes its savings?",
    options: [
      "Reserved Instances for three years",
      "Spot Instances - spare capacity at discounts of up to ~90%",
      "On-Demand at full price",
      "Buying the results instead of computing them"
    ],
    answer: [1],
    explanation: "Spot pricing exists for exactly this: work that tolerates interruption (with two minutes' warning) bids for spare capacity at the deepest discounts on the platform. Batch processing is its showcase workload.",
    rationales: [
      "Committing three years for an interruptible nightly job is the wrong tool - no need to commit.",
      "",
      "On-Demand wastes the workload's interruption tolerance.",
      "There is no marketplace for precomputed results."
    ],
    services: [],
    tags: ["spot", "pricing models"]
  },
  {
    id: "1.4-017",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "easy",
    stem: "What is the \"consumption model\" of cloud computing?",
    options: [
      "Customers consume pre-purchased hardware allocations",
      "Costs are consumed by contract regardless of use",
      "Resources are consumed on demand and billed only for actual usage",
      "AWS consumes the customer's data"
    ],
    answer: [2],
    explanation: "The consumption model is the pay-for-use contract: request resources, consume them, pay for what was consumed, release them. It is the economic foundation that elasticity and TCO savings rest on.",
    rationales: [
      "Pre-purchased allocations are the on-premises model.",
      "That is the fixed-expense model the cloud replaces.",
      "",
      "Customer data ownership is unchanged on AWS."
    ],
    services: [],
    tags: ["consumption model"]
  },
  {
    id: "1.4-018",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "medium",
    stem: "Which expense category is ELIMINATED for a company that fully adopts AWS instead of a new data center?",
    options: [
      "Software development costs",
      "Employee salaries",
      "Training costs",
      "Capital expenditure on servers, storage, and network hardware"
    ],
    answer: [3],
    explanation: "Buying hardware is the capital expense that disappears: AWS owns and operates the machines, and customers rent capacity. People, software, and training costs remain the customer's - and often become more productive.",
    rationales: [
      "Development continues - on a better platform.",
      "Staff remain; their work shifts up the stack.",
      "Training continues and often increases in value.",
      ""
    ],
    services: [],
    tags: ["capex", "economics"]
  },
  {
    id: "1.4-019",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "medium",
    stem: "A finance team asks why moving to managed databases lowers cost even though the hourly rate seems higher than raw EC2. What is the answer?",
    options: [
      "Managed services are always cheaper per hour with no other factor",
      "The rate difference is refunded after a year",
      "The comparison must include avoided labor: patching, backups, replication management, and failover engineering that RDS performs automatically",
      "Databases are free below 100 GB"
    ],
    answer: [2],
    explanation: "Honest TCO compares total cost, not hourly rate: the DBA hours, patching windows, backup infrastructure, and failover engineering that RDS absorbs are real money. Fully loaded, the managed service frequently wins - and always frees scarce expertise.",
    rationales: [
      "Per-hour managed pricing can be higher; the value is in the absorbed work.",
      "No such refunds exist.",
      "",
      "No blanket free tier applies here - storage and compute are billed."
    ],
    services: ["Amazon RDS"],
    tags: ["managed services", "tco"]
  },
  {
    id: "1.4-020",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "medium",
    stem: "How is AWS Lambda's pricing structured, and what does it eliminate?",
    options: [
      "Per-instance-hour, eliminating the need for code",
      "A flat monthly fee, eliminating usage tracking",
      "Billed per GB of RAM installed, eliminating the CPU",
      "Billed per request and per millisecond of compute, eliminating idle cost entirely - nothing to pay when nothing runs"
    ],
    answer: [3],
    explanation: "Lambda's meter is the request and the compute-millisecond: a function that never runs costs nothing, and scaling costs exactly as much as the work performed. It is the purest form of pay-for-use on the platform.",
    rationales: [
      "Lambda has no instance-hours - and code is exactly what the customer supplies.",
      "There is no flat fee; billing follows invocation.",
      "RAM matters to billing only via compute time, not as an installed-base fee.",
      ""
    ],
    services: ["AWS Lambda"],
    tags: ["lambda", "serverless economics"]
  },
  {
    id: "1.4-021",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "easy",
    stem: "What is the purpose of the AWS Free Tier?",
    options: [
      "To provide unlimited free production hosting",
      "To replace paid plans after one year",
      "To let new customers explore and build with certain services free within usage limits",
      "To offer free premium support to everyone"
    ],
    answer: [2],
    explanation: "The Free Tier gives new accounts hands-on experience - some services free for 12 months, some always-free within limits, some short-term trials - lowering the barrier to first experiments. It is an on-ramp, not a production plan.",
    rationales: [
      "Usage limits make unlimited hosting impossible.",
      "Paid usage continues after the term; nothing is replaced.",
      "",
      "Support plans are separate products."
    ],
    services: [],
    tags: ["free tier"]
  },
  {
    id: "1.4-022",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "medium",
    stem: "A solutions architect wants to compare the monthly cost of two architectures before building either. Which resource supports this?",
    options: [
      "Amazon Connect",
      "AWS Glue",
      "Amazon Macie",
      "The AWS Pricing Calculator, estimating service-by-service costs for each design"
    ],
    answer: [3],
    explanation: "The Pricing Calculator exists for pre-deployment economics: describe each architecture's resources, compare estimated monthly costs, and iterate on the design before spending. Estimation before commitment is a core economics habit.",
    rationales: [
      "Connect runs contact centers.",
      "Glue integrates data.",
      "Macie discovers sensitive data.",
      ""
    ],
    services: [],
    tags: ["pricing calculator", "estimation"]
  },
  {
    id: "1.4-023",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "medium",
    stem: "A company's baseline workload is steady, but it adds spiky, unpredictable traffic on top. Which pricing combination fits?",
    options: [
      "Savings Plans or Reserved Instances for the steady baseline, On-Demand or Auto Scaling for the spikes",
      "Reserved Instances for everything, sized for the maximum peak",
      "Spot Instances for the steady baseline",
      "On-Demand for everything and no commitments ever"
    ],
    answer: [0],
    explanation: "The split matches pricing to behavior: commitments discount the flat baseline; elastic On-Demand (or Spot where fault-tolerant) absorbs the variable portion. Sizing commitments to the peak would strand paid-for capacity.",
    rationales: [
      "",
      "Committing at peak size wastes money whenever demand is below peak.",
      "Spot can be reclaimed - wrong for a steady baseline.",
      "Leaving the flat baseline on full-rate On-Demand forfeits easy savings."
    ],
    services: [],
    tags: ["pricing models", "savings plans"]
  },
  {
    id: "1.4-024",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "medium",
    stem: "In cloud economics, what is a common effect of moving to S3 storage classes matched to access patterns?",
    options: [
      "Storage costs increase by default every month",
      "All data must be deleted after 30 days",
      "S3 charges per file read regardless of class",
      "Frequently accessed data stays in Standard while aging data moves to cheaper classes, cutting cost without deleting anything"
    ],
    answer: [3],
    explanation: "Storage tiering is storage economics in action: pay full rate only for hot data, transition cooling data to Infrequent Access or Glacier classes via lifecycle rules, and cut storage spend while keeping every object retrievable.",
    rationales: [
      "Tiering reduces cost; nothing auto-increases.",
      "Deletion is an explicit lifecycle choice, not a rule of S3.",
      "Retrieval pricing differs by class; blanket per-read charging is not the model.",
      ""
    ],
    services: ["Amazon S3"],
    tags: ["s3", "storage classes"]
  },
  {
    id: "1.4-025",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "hard",
    stem: "A company's on-premises environment runs at 20% utilization because capacity was bought for a forecasted peak. Migrating to AWS with Auto Scaling and right-sizing changes the economics how?",
    options: [
      "The company now pays for 100% of the forecasted peak around the clock",
      "Billing follows actual demand, so the 80% of capacity that used to idle is no longer paid for",
      "The idle capacity is refunded retroactively by AWS",
      "Costs rise because cloud hardware is more expensive per unit"
    ],
    answer: [1],
    explanation: "This is the utilization gap: on-premises billing was fixed to purchased capacity, cloud billing follows consumed capacity. Elastic scaling plus right-sizing means the idle 80% stops existing as a cost line at all.",
    rationales: [
      "That would recreate the on-premises problem on AWS - the opposite of the migration's economics.",
      "",
      "There is nothing to refund - the capacity is simply never provisioned.",
      "Cloud unit prices are typically lower AND the volume consumed drops - the effect compounds."
    ],
    services: [],
    tags: ["utilization", "economics"]
  },
  {
    id: "1.4-026",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "medium",
    stem: "Which cost concept explains why a company should compare its AWS bill per business unit rather than only in total?",
    options: [
      "Bills are legally required to be split by unit",
      "Cost attribution (for example via tagging) makes each unit accountable for its consumption, driving better decisions",
      "AWS charges extra for consolidated billing",
      "Split bills are always smaller"
    ],
    answer: [1],
    explanation: "Visibility drives behavior: when teams see their own spend (tags, account structure, cost allocation), they right-size and clean up - the accountability effect. Billing granularity is a governance lever in cloud economics.",
    rationales: [
      "No legal requirement exists - it is a management practice.",
      "",
      "Consolidation is a benefit, not a surcharge.",
      "Splitting changes attribution, not the total."
    ],
    services: [],
    tags: ["cost attribution", "governance"]
  },
  {
    id: "1.4-027",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "easy",
    stem: "Which pair correctly defines the two expense types in cloud economics?",
    options: [
      "Variable expense changes with usage; fixed expense is committed regardless of usage",
      "Fixed expense changes with usage; variable expense is committed",
      "Both are identical terms",
      "Variable applies to people; fixed applies to software"
    ],
    answer: [0],
    explanation: "The definitions are the foundation: variable = tracks usage (cloud consumption), fixed = committed no matter what (data center leases, purchased hardware). Cloud adoption trades fixed for variable.",
    rationales: [
      "",
      "Reversed.",
      "They are opposites by definition.",
      "The distinction is about cost behavior, not cost objects."
    ],
    services: [],
    tags: ["economics", "terminology"]
  },
  {
    id: "1.4-028",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "medium",
    stem: "Why is cost visibility considered part of cloud economics rather than just an accounting chore?",
    options: [
      "Because AWS prices are secret",
      "Because in a consumption model, seeing WHO uses WHAT and WHEN is what enables optimization - idle resources, wrong sizes, and waste are all visible and fixable",
      "Because invoices cannot be downloaded",
      "Because visibility eliminates the bill"
    ],
    answer: [1],
    explanation: "Consumption pricing makes cost a live signal: granular visibility (tags, accounts, metrics) turns the bill into a tuning dashboard, where right-sizing and cleanup translate directly into savings. Visibility is the mechanism; savings are the result.",
    rationales: [
      "Prices are published openly.",
      "",
      "Invoices and detailed cost reports are readily available.",
      "Visibility optimizes the bill; it does not zero it."
    ],
    services: [],
    tags: ["cost visibility"]
  },
  {
    id: "1.4-029",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "easy",
    stem: "What happens to the hardware refresh cycle - and its capital cost - when workloads run on AWS?",
    options: [
      "It shortens to annual customer purchases",
      "It becomes the customer's responsibility remotely",
      "It disappears from the customer's budget - AWS refreshes its fleet continuously as part of the service",
      "Refresh costs are billed separately each quarter"
    ],
    answer: [2],
    explanation: "Hardware lifecycle is AWS's operating cost, invisible in the customer's bill except as unit pricing. The five-year refresh project - capital, planning, migration, downtime - simply vanishes from the customer's world.",
    rationales: [
      "No refresh purchases remain for customers to make.",
      "Customers never manage AWS hardware.",
      "",
      "There is no separate refresh line item."
    ],
    services: [],
    tags: ["hardware lifecycle", "economics"]
  },
  {
    id: "1.4-030",
    domain: 1,
    task: "1.4",
    type: "single",
    difficulty: "hard",
    stem: "Which combination demonstrates the full set of AWS cost-optimization levers for a mixed workload portfolio?",
    options: [
      "One pricing model for everything, sized for the worst-case peak",
      "Paying On-Demand for all workloads and never reviewing usage",
      "Buying hardware and colocating it in AWS's parking lot",
      "Managed services where suitable, right-sizing, commitments for steady load, Spot for interruptible work, and storage tiering by access pattern"
    ],
    answer: [3],
    explanation: "Each lever matches a workload shape: managed services remove operational cost, right-sizing removes waste, commitments discount steady load, Spot serves interruptible work, and tiering prices storage by access. Portfolio-level optimization uses them together.",
    rationales: [
      "One model and peak sizing is the anti-pattern this task exists to fix.",
      "Full-rate On-Demand without review is the most expensive posture available.",
      "Colocation of customer hardware is not an AWS offering - joke option.",
      ""
    ],
    services: [],
    tags: ["cost optimization", "capstone"]
  },
  {
    id: "1.4-031",
    domain: 1,
    task: "1.4",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO practices directly reduce cloud spending? (Select TWO.)",
    options: [
      "Right-sizing instances to actual workload demand",
      "Leaving unattached resources running around the clock",
      "Committing to Reserved Instances or Savings Plans for steady baseline workloads",
      "Provisioning double capacity permanently as a buffer",
      "Disabling cost monitoring to save time"
    ],
    answer: [0, 2],
    explanation: "Right-sizing aligns spend with need, and commitment pricing discounts the predictable baseline - two of the highest-yield optimization moves. The distractors are the classic cost leaks: idle resources, buffer waste, and blind billing.",
    rationales: [
      "",
      "Idle resources are pure waste - the opposite of a reduction.",
      "",
      "Permanent buffers double the bill for capacity that mostly idles.",
      "Monitoring enables the savings; disabling it causes leaks."
    ],
    services: [],
    tags: ["cost optimization"]
  }
);
