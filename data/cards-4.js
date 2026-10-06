window.FLASHCARDS = window.FLASHCARDS || [];
window.FLASHCARDS.push(
  {
    id: "4.1-001",
    domain: 4,
    task: "4.1",
    front: "On-Demand Instances - what do you pay and what do you commit?",
    back: "Full published rate by the second/hour, zero commitment - the default for short, unpredictable, or one-off work.",
    tags: ["on-demand", "pricing models"]
  },
  {
    id: "4.1-002",
    domain: 4,
    task: "4.1",
    front: "Reserved Instances - the deal in one line?",
    back: "Commit for 1 or 3 years to a specific configuration and get up to ~72% off On-Demand - deepest with 3-year all-upfront.",
    tags: ["reserved instances", "pricing models"]
  },
  {
    id: "4.1-003",
    domain: 4,
    task: "4.1",
    front: "Spot Instances - the deal and the catch?",
    back: "Up to ~90% off On-Demand for spare capacity; the catch is interruption with little warning - only for fault-tolerant, checkpoint-resumable work.",
    tags: ["spot", "pricing models"]
  },
  {
    id: "4.1-004",
    domain: 4,
    task: "4.1",
    front: "Savings Plans - what do you commit to, and how flexible is it?",
    back: "A consistent DOLLAR-per-hour spend for 1-3 years; the discount follows across instance families, sizes, OS, and Regions (Compute Savings Plans) - more flexible than an RI.",
    tags: ["savings plans", "pricing models"]
  },
  {
    id: "4.1-005",
    domain: 4,
    task: "4.1",
    front: "On-Demand Capacity Reservations - what do they buy?",
    back: "Guaranteed capacity in a chosen Availability Zone, billed at On-Demand rates whether used or not - an availability purchase, not a discount.",
    tags: ["capacity reservations"]
  },
  {
    id: "4.1-006",
    domain: 4,
    task: "4.1",
    front: "Dedicated Hosts vs Dedicated Instances - the key difference?",
    back: "Hosts expose the whole physical server (per-socket/core/VM licensing, BYOL, compliance, host affinity). Dedicated Instances run on single-account hardware without host visibility or control.",
    tags: ["dedicated hosts", "dedicated instances", "licensing"]
  },
  {
    id: "4.1-007",
    domain: 4,
    task: "4.1",
    front: "What does RI size flexibility allow?",
    back: "A Regional Linux RI discount applies across instance SIZES in the same family via normalization units (4xlarge = 4 units). It does not cross families - that needs Convertible RIs or Savings Plans.",
    tags: ["reserved instances", "size flexibility"]
  },
  {
    id: "4.1-008",
    domain: 4,
    task: "4.1",
    front: "How do RI discounts behave in AWS Organizations consolidated billing?",
    back: "Shared organization-wide: any account's unused RI/Savings Plan discount automatically applies to another member account's matching usage - maximizing commitment utilization.",
    tags: ["reserved instances", "organizations", "consolidated billing"]
  },
  {
    id: "4.1-009",
    domain: 4,
    task: "4.1",
    front: "Data transfer pricing: IN, OUT, Region-to-Region, cross-AZ?",
    back: "IN always free. OUT to internet charged. Region-to-Region charged on BOTH sides. Same-AZ private-IP free; cross-AZ charged per GB each direction.",
    tags: ["data transfer", "pricing"]
  },
  {
    id: "4.1-010",
    domain: 4,
    task: "4.1",
    front: "S3 tier for: frequent access? infrequent? unknown pattern? archive?",
    back: "Standard (frequent), Standard-IA / One Zone-IA (infrequent, retrieval fees), Intelligent-Tiering (automatic moves for unknown patterns), Glacier classes (archive, retrieval delays).",
    tags: ["s3", "storage tiers"]
  },
  {
    id: "4.1-011",
    domain: 4,
    task: "4.1",
    front: "Why choose gp3 over gp2 for EBS?",
    back: "gp3 decouples performance from capacity: free 3,000-IOPS/125 MB/s baseline at any size, provision more only if needed - lower cost for the same typical workload.",
    tags: ["ebs", "gp3", "storage pricing"]
  },
  {
    id: "4.1-012",
    domain: 4,
    task: "4.1",
    front: "The portfolio pattern for EC2 purchasing options?",
    back: "Commit the flat baseline (RI/Savings Plans), let On-Demand Auto Scaling absorb spikes, bid Spot for interruptible batch - each model matched to demand shape.",
    tags: ["pricing models", "strategy"]
  },
  {
    id: "4.1-013",
    domain: 4,
    task: "4.1",
    front: "Which option for software licensed PER PHYSICAL SOCKET on isolated hardware?",
    back: "Dedicated Hosts - the only EC2 option exposing the physical server for per-socket/core/VM licenses and host-isolation compliance.",
    tags: ["dedicated hosts", "scenario"]
  },
  {
    id: "4.1-014",
    domain: 4,
    task: "4.1",
    front: "'Guarantee capacity in this AZ even during shortages' - which option?",
    back: "On-Demand Capacity Reservations - billed at On-Demand rates whether instances run or not; it buys certainty, not savings.",
    tags: ["capacity reservations", "scenario"]
  },
  {
    id: "4.1-015",
    domain: 4,
    task: "4.1",
    front: "Why does cross-Region replication cost more than it looks?",
    back: "Region-to-Region transfer bills at BOTH the source (out) and destination (in) Regions - a recurring per-GB cost that scales with replication volume.",
    tags: ["data transfer", "regions"]
  },
  {
    id: "4.1-016",
    domain: 4,
    task: "4.1",
    front: "Steady 24/7 baseline for years - which purchasing option maximizes savings?",
    back: "Three-year all-upfront Reserved Instance (or equivalent Savings Plan) - longest term + upfront payment = deepest discount (~72%).",
    tags: ["reserved instances", "scenario"]
  },
  {
    id: "4.1-017",
    domain: 4,
    task: "4.1",
    front: "Which two compute options have NO commitment?",
    back: "On-Demand (full rate, full flexibility) and Spot (deep discount, interruption risk) - Capacity Reservations also carry no discount commitment.",
    tags: ["on-demand", "spot"]
  },
  {
    id: "4.1-018",
    domain: 4,
    task: "4.1",
    front: "Which S3 class manages tier transitions automatically for unknown access patterns?",
    back: "S3 Intelligent-Tiering - monitors per-object access and moves between frequent/infrequent layers automatically (small monitoring fee, no lifecycle rules).",
    tags: ["intelligent-tiering", "s3"]
  },
  {
    id: "4.1-019",
    domain: 4,
    task: "4.1",
    front: "Which EBS type for cold, throughput-only data at lowest per-GB cost?",
    back: "Cold HDD (sc1) - cheapest per GB, throughput-optimized for infrequently accessed data, not for consistent IOPS.",
    tags: ["ebs", "sc1"]
  },
  {
    id: "4.1-020",
    domain: 4,
    task: "4.1",
    front: "Same-AZ traffic vs cross-AZ traffic - the pricing rule?",
    back: "Same-AZ over private IPs: free. Cross-AZ within a Region: charged per GB in each direction - AZ-aware design balances resilience against hop cost.",
    tags: ["data transfer", "availability zones"]
  },
  {
    id: "4.1-021",
    domain: 4,
    task: "4.1",
    front: "Why does an unused Reserved Instance still cost money?",
    back: "Commitment is a promise, not a meter: the RI bills for its term regardless of matching usage - which is exactly why consolidated billing's RI sharing maximizes utilization.",
    tags: ["reserved instances", "economics"]
  },
  {
    id: "4.2-001",
    domain: 4,
    task: "4.2",
    front: "AWS Pricing Calculator - what is it for?",
    back: "Pre-deployment estimation: model a candidate architecture service-by-service, build side-by-side comparisons of competing designs, share/export estimates.",
    tags: ["pricing calculator"]
  },
  {
    id: "4.2-002",
    domain: 4,
    task: "4.2",
    front: "AWS Cost Explorer - what can it do?",
    back: "Post-deployment analysis: 12+ months of history, group by service/account/tag/Region, forecast forward, drill into cost jumps, RI/Savings Plan recommendations and utilization/coverage, ML anomaly detection.",
    tags: ["cost explorer"]
  },
  {
    id: "4.2-003",
    domain: 4,
    task: "4.2",
    front: "AWS Budgets - the differentiating capability?",
    back: "Proactive threshold alerting: cost/usage budgets (plus RI utilization and coverage targets) that trigger email/SNS alerts as spend approaches or crosses limits - 'warn me at 80%'.",
    tags: ["budgets", "alerts"]
  },
  {
    id: "4.2-004",
    domain: 4,
    task: "4.2",
    front: "AWS Cost and Usage Report (CUR) - what makes it special?",
    back: "The most detailed line-item billing data (per resource, per hour, with tags and discounts) delivered to S3 for Athena/QuickSight analysis - audit-grade.",
    tags: ["cur", "billing"]
  },
  {
    id: "4.2-005",
    domain: 4,
    task: "4.2",
    front: "Consolidated billing - the two headline benefits?",
    back: "One invoice through the management (payer) account for all members; RI/Savings Plan discounts and volume tiers shared organization-wide.",
    tags: ["consolidated billing", "organizations"]
  },
  {
    id: "4.2-006",
    domain: 4,
    task: "4.2",
    front: "What does consolidated billing NOT change?",
    back: "Nothing about identity or access: each account keeps its own IAM, its own resources, and its own cost visibility - only payment and discount sharing consolidate.",
    tags: ["consolidated billing", "iam"]
  },
  {
    id: "4.2-007",
    domain: 4,
    task: "4.2",
    front: "What must happen before a user-defined tag appears in billing reports?",
    back: "It must be ACTIVATED as a cost allocation tag in the Billing console - per account. Until then it is invisible to Cost Explorer/Budgets/CUR.",
    tags: ["tags", "cost allocation"]
  },
  {
    id: "4.2-008",
    domain: 4,
    task: "4.2",
    front: "Which tag prefix is reserved for AWS-generated tags?",
    back: "aws: - reserved and not user-editable; user-defined tags are the ones you activate for cost allocation.",
    tags: ["tags"]
  },
  {
    id: "4.2-009",
    domain: 4,
    task: "4.2",
    front: "The bill doubled - which tool answers 'what exactly grew'?",
    back: "Cost Explorer: filter to the service, group by usage type/API operation, Region, and tags to isolate the cause. Budgets only confirms a threshold was crossed.",
    tags: ["cost explorer", "diagnostics"]
  },
  {
    id: "4.2-010",
    domain: 4,
    task: "4.2",
    front: "Cost anomaly detection - how does it work?",
    back: "Machine learning learns your normal daily spend patterns per service/account/tag, flags unexpected deviations, and alerts through cost monitors.",
    tags: ["anomaly detection", "cost explorer"]
  },
  {
    id: "4.2-011",
    domain: 4,
    task: "4.2",
    front: "Departments share one account - how do you attribute spend per department?",
    back: "Tag resources with a Department key, activate it as a cost allocation tag, then slice Cost Explorer/CUR by it.",
    tags: ["tags", "cost allocation", "scenario"]
  },
  {
    id: "4.2-012",
    domain: 4,
    task: "4.2",
    front: "Where does official pre-deployment pricing come from?",
    back: "Each service's pricing page on aws.amazon.com plus the AWS Pricing Calculator - public, self-service, no sales call needed.",
    tags: ["pricing information"]
  },
  {
    id: "4.2-013",
    domain: 4,
    task: "4.2",
    front: "Budgets vs Cost Explorer - one line each.",
    back: "Budgets = proactive threshold alerts before overspend. Cost Explorer = analytical history, grouping, and forecasts after deployment. They complement each other.",
    tags: ["budgets", "cost explorer"]
  },
  {
    id: "4.2-014",
    domain: 4,
    task: "4.2",
    front: "Auditors need per-resource hourly billing detail - what do you deliver?",
    back: "The Cost and Usage Report published to S3 (queryable in Athena) - not invoice PDFs or dashboard screenshots.",
    tags: ["cur", "compliance", "scenario"]
  },
  {
    id: "4.2-015",
    domain: 4,
    task: "4.2",
    front: "Who pays the consolidated invoice?",
    back: "The management (payer) account - it receives one invoice for all member accounts and can view their cost data, but gains no resource access.",
    tags: ["consolidated billing", "payer account"]
  },
  {
    id: "4.2-016",
    domain: 4,
    task: "4.2",
    front: "Why do small member accounts benefit from consolidated billing?",
    back: "They ride the organization's commitments and volume: shared RI/Savings Plan discounts apply to their matching usage automatically.",
    tags: ["consolidated billing", "reserved instances"]
  },
  {
    id: "4.2-017",
    domain: 4,
    task: "4.2",
    front: "What billing help does EVERY account get for free?",
    back: "Basic Support's 24x7 one-on-one responses to account and billing questions - plus forums, service health checks, and documentation.",
    tags: ["basic support", "billing support"]
  },
  {
    id: "4.2-018",
    domain: 4,
    task: "4.2",
    front: "Budgets can track more than cost - what else?",
    back: "Usage (e.g., GB stored), Reserved Instance utilization, and RI/Savings Plan coverage targets.",
    tags: ["budgets", "reserved instances"]
  },
  {
    id: "4.2-019",
    domain: 4,
    task: "4.2",
    front: "'Estimate next quarter's architecture before building it' - which tool?",
    back: "AWS Pricing Calculator - forward-looking modeling; Cost Explorer and CUR only describe what already ran.",
    tags: ["pricing calculator", "scenario"]
  },
  {
    id: "4.3-001",
    domain: 4,
    task: "4.3",
    front: "Name the current AWS Support plans.",
    back: "Basic (free), AWS Business Support+, AWS Enterprise Support, AWS Unified Operations. (Legacy Developer/Business/On-Ramp discontinued January 1, 2027.)",
    tags: ["support plans"]
  },
  {
    id: "4.3-002",
    domain: 4,
    task: "4.3",
    front: "What does free Basic Support include?",
    back: "24x7 account and billing Q&A, support forums, service health checks, documentation/whitepapers, and a limited set of core Trusted Advisor checks. No technical case support.",
    tags: ["basic support"]
  },
  {
    id: "4.3-003",
    domain: 4,
    task: "4.3",
    front: "AWS Business Support+ - key features?",
    back: "24x7 phone/web/chat with Cloud Support Engineers, <30-min human engagement for business-critical system-down, 500+ Trusted Advisor checks, Support API, third-party software support, AI assistance, from $29/month.",
    tags: ["business support+"]
  },
  {
    id: "4.3-004",
    domain: 4,
    task: "4.3",
    front: "AWS Enterprise Support - what does it add over Business Support+?",
    back: "Designated Technical Account Manager (TAM), 15-minute production-critical response, AWS Security Incident Response at no extra cost, strategic business reviews, Countdown event management.",
    tags: ["enterprise support", "tam"]
  },
  {
    id: "4.3-005",
    domain: 4,
    task: "4.3",
    front: "AWS Unified Operations - the signature features?",
    back: "TAM plus Domain Specialist Engineers (DSEs), application architecture guidance, infrastructure event management, critical workload reviews, personalized runbooks, Countdown Premium.",
    tags: ["unified operations", "tam"]
  },
  {
    id: "4.3-006",
    domain: 4,
    task: "4.3",
    front: "What is AWS Trusted Advisor and what does it check?",
    back: "Automated best-practice checks in five categories: cost optimization (idle LBs, unassociated EIPs, underutilized EC2), performance, security, fault tolerance, service limits.",
    tags: ["trusted advisor"]
  },
  {
    id: "4.3-007",
    domain: 4,
    task: "4.3",
    front: "Trusted Advisor under Basic vs Business Support+?",
    back: "Basic: limited core checks (basic security + service limits). Business Support+: full 500+ check catalog including complete cost optimization.",
    tags: ["trusted advisor", "basic support", "business support+"]
  },
  {
    id: "4.3-008",
    domain: 4,
    task: "4.3",
    front: "Personal Health Dashboard - what does it show?",
    back: "Events affecting YOUR resources: scheduled maintenance (e.g., EC2 host rebalancing) and service issues touching your account - act before users notice.",
    tags: ["health dashboard"]
  },
  {
    id: "4.3-009",
    domain: 4,
    task: "4.3",
    front: "AWS Health API - what does it enable?",
    back: "Programmatic access to health events - integrate with EventBridge to trigger automated runbooks, ticketing, and alerts.",
    tags: ["health api", "automation"]
  },
  {
    id: "4.3-010",
    domain: 4,
    task: "4.3",
    front: "Who investigates spam or phishing sent from AWS resources?",
    back: "The AWS Trust and Safety team - report through the abuse report form.",
    tags: ["trust and safety", "abuse"]
  },
  {
    id: "4.3-011",
    domain: 4,
    task: "4.3",
    front: "AWS re:Post vs AWS Knowledge Center?",
    back: "re:Post = community Q&A platform with AWS expert participation. Knowledge Center = curated archive of common issues and official fixes. Both are pre-support-case self-service resources.",
    tags: ["re:post", "knowledge center"]
  },
  {
    id: "4.3-012",
    domain: 4,
    task: "4.3",
    front: "Where do official whitepapers and reference architectures live?",
    back: "On AWS official sites: docs.aws.amazon.com, the Architecture Center, the Whitepapers library, and AWS Prescriptive Guidance - all free.",
    tags: ["documentation", "whitepapers"]
  },
  {
    id: "4.3-013",
    domain: 4,
    task: "4.3",
    front: "ISV vs system integrator - the difference?",
    back: "ISVs (technology partners) build and sell software that runs on AWS. SIs (consulting partners) deliver services: migration, implementation, managed operations.",
    tags: ["partners", "isv", "system integrator"]
  },
  {
    id: "4.3-014",
    domain: 4,
    task: "4.3",
    front: "What benefits come with AWS Partner Network membership?",
    back: "Partner training and certification paths, partner events and enablement, and partner volume discounts.",
    tags: ["partners", "benefits"]
  },
  {
    id: "4.3-015",
    domain: 4,
    task: "4.3",
    front: "What is AWS Marketplace?",
    back: "The digital catalog for third-party software (AMIs, containers, SaaS) deployable into your account - with private negotiated offers, license entitlement/governance, and charges on the AWS bill.",
    tags: ["marketplace"]
  },
  {
    id: "4.3-016",
    domain: 4,
    task: "4.3",
    front: "Beyond support plans, who delivers hands-on professional help?",
    back: "AWS Professional Services (paid engagements, e.g., migration execution) and AWS solution architects (architectural guidance).",
    tags: ["professional services", "solutions architects"]
  },
  {
    id: "4.3-017",
    domain: 4,
    task: "4.3",
    front: "24x7 engineers + <30-min response, but NO TAM - which plan?",
    back: "AWS Business Support+ - the TAM arrives with Enterprise Support.",
    tags: ["business support+", "scenario"]
  },
  {
    id: "4.3-018",
    domain: 4,
    task: "4.3",
    front: "Mission-critical workloads + designated TAM + 15-min response - which plan?",
    back: "AWS Enterprise Support.",
    tags: ["enterprise support", "scenario"]
  },
  {
    id: "4.3-019",
    domain: 4,
    task: "4.3",
    front: "'Event affecting MY EC2 fleet' vs 'us-east-1 is degraded' - which views?",
    back: "Personal Health Dashboard (your resources) vs the AWS service health view (global/regional service status) - both inside the AWS Health Dashboard.",
    tags: ["health dashboard"]
  }
);
