window.NOTES = window.NOTES || [];
window.NOTES.push(
  {
    id: "4.1",
    domain: 4,
    task: "4.1",
    title: "Compare AWS pricing models",
    weight: "Domain 4 is 12% of the exam",
    readMinutes: 11,
    summary: "Task 4.1 is the compute-purchasing-options task: On-Demand, Reserved Instances, Spot, Savings Plans, Dedicated Hosts, Dedicated Instances, and Capacity Reservations - plus RI flexibility, RI behavior in Organizations, data transfer rules, and storage tier pricing. Most questions are a workload shape asking 'which option' or a rule asking 'what does this model do'.",
    sections: [
      {
        heading: "The compute purchasing options",
        body: [
          "**On-Demand** pays full published rate, by the second or hour, with zero commitment - the default choice for short, unpredictable, or one-off work. **Reserved Instances** trade a one- or three-year commitment (deep discounts, up to ~72% off, deepest with three years all-upfront) for a steady baseline. **Spot Instances** offer spare capacity at up to ~90% off with interruption risk - only for fault-tolerant, interruptible, checkpoint-resumable work.",
          "**Savings Plans** commit to a consistent dollar-per-hour spend for one or three years: the discount follows across instance families, sizes, OS, and Regions (Compute Savings Plans) or within a family (EC2 Instance Savings Plans). **Capacity Reservations** guarantee capacity in a chosen AZ at On-Demand rates whether used or not - an availability purchase, not a discount.",
          "**Dedicated Instances** run on hardware dedicated to one account but without host visibility. **Dedicated Hosts** expose the whole physical server, enabling per-socket/per-core/per-VM software licensing (BYOL) and host-isolation compliance. The decision ladder: tolerance for interruption → Spot; steady baseline → RI/Savings Plans; license or isolation rules → Dedicated; capacity guarantee → Capacity Reservations; everything else → On-Demand."
        ],
        table: {
          headers: ["Option", "Commitment", "Discount", "Signature trait"],
          rows: [
            ["On-Demand", "None", "None (baseline)", "Full flexibility, full price"],
            ["Reserved Instances", "1 or 3 years", "Up to ~72%", "Configuration-bound commitment"],
            ["Savings Plans", "1 or 3 years", "Up to ~72%", "Dollar-per-hour commitment, most flexible"],
            ["Spot", "None", "Up to ~90%", "Interruptible spare capacity"],
            ["Capacity Reservations", "As long as held", "None", "Guaranteed AZ capacity, billed On-Demand"],
            ["Dedicated Instances", "None", "None", "Single-account hardware, no host control"],
            ["Dedicated Hosts", "On-Demand or reserved", "Varies", "Whole server: per-socket licenses, compliance"]
          ]
        }
      },
      {
        heading: "RI flexibility and Organizations behavior",
        body: [
          "**Size flexibility**: a Regional Linux Standard RI applies across instance sizes in the same family via normalization units - a 4xlarge consumes four units, or the discount spreads over smaller instances. It does NOT cross families; Convertible RIs (exchangeable for different configurations) and Compute Savings Plans provide broader flexibility.",
          "**In AWS Organizations** (consolidated billing), RI and Savings Plan discounts are shared organization-wide: any account's unused commitment automatically applies to another account's matching usage. This maximizes utilization of every purchased commitment and is one of consolidated billing's headline benefits.",
          "The pairing to remember: commitments (RI/Savings Plans) discount the flat baseline; Auto Scaling On-Demand absorbs spikes; Spot serves the interruptible batch. Unused reservations still bill - commitment is a promise, not a meter."
        ]
      },
      {
        heading: "Data transfer pricing rules",
        body: [
          "**Inbound is free**: data coming INTO AWS from the internet costs nothing. **Outbound is charged**: leaving AWS to the internet has per-GB rates (with a monthly free allowance). This asymmetry shapes architecture economics - ingestion is cheap, egress is the planning item.",
          "**Region-to-Region** transfer is billed on BOTH sides (out at source, in at destination) - cross-Region replication is convenient but a real recurring cost. **Within a Region**: same-AZ traffic over private IPs is free; **cross-AZ** traffic is charged per GB in each direction. AZ-aware design balances resilience against this hop cost."
        ]
      },
      {
        heading: "Storage options and tiers",
        body: [
          "S3's classes price the access pattern: **Standard** for frequent access, **Standard-IA** and **One Zone-IA** for infrequent (with retrieval fees; One Zone trades redundancy), **Intelligent-Tiering** for unknown/changing patterns (automatic per-object moves), and **Glacier** classes (Instant/Flexible/Deep Archive) for archival at the lowest per-GB price with retrieval delays.",
          "EBS prices by provisioned capacity and performance: **gp3** decouples them (free 3,000-IOPS baseline, provision more if needed) and is the low-cost general-purpose choice; **io2** buys premium IOPS; **sc1** serves cold, throughput-only data at the lowest per-GB rate.",
          "The exam asks 'which tier minimizes cost for this access pattern' - the answer is always the class whose retrieval speed, redundancy, and fee structure match how often the data is actually touched."
        ]
      }
    ],
    mustKnow: [
      "On-Demand = no commitment full rate; RI = 1/3-year commitment up to ~72% off; Spot = up to ~90% off with interruption; Savings Plans = dollar-per-hour commitment, most flexible.",
      "Capacity Reservations guarantee AZ capacity at On-Demand rates - availability, not discount.",
      "Dedicated Hosts enable per-socket/core licensing (BYOL) and host isolation; Dedicated Instances are single-account hardware without host control.",
      "RI size flexibility: discount roams across sizes within the same family (Regional Linux RIs).",
      "Consolidated billing shares RI/Savings Plan discounts across all member accounts automatically.",
      "Data transfer: IN free; OUT charged; Region-to-Region charged both sides; same-AZ free, cross-AZ charged.",
      "S3 tier = access pattern: Standard (frequent), IA (infrequent), Intelligent-Tiering (unknown), Glacier (archive).",
      "gp3 = cheapest consistent baseline EBS performance; io2 = premium IOPS; sc1 = cold."
    ],
    examTips: [
      "Match workload shape to model: steady 24/7 → RI/Savings Plans; interruptible batch → Spot; spiky/unpredictable → On-Demand + Auto Scaling; never-restart service → never Spot.",
      "'Per-socket license' or 'physical isolation compliance' in the stem = Dedicated Hosts, every time.",
      "Capacity Reservations are the answer to 'guarantee capacity', NOT to 'save money'.",
      "Region-to-Region replication always costs at both ends - 'free over the AWS backbone' options are wrong."
    ]
  },
  {
    id: "4.2",
    domain: 4,
    task: "4.2",
    title: "Understand resources for billing, budget, and cost management",
    weight: "Domain 4 is 12% of the exam",
    readMinutes: 11,
    summary: "Task 4.2 is the cost-tooling task: what Cost Explorer, Budgets, the Pricing Calculator, and the Cost and Usage Report each do, how AWS Organizations consolidated billing works, and how cost allocation tags attribute spend. Expect tool-to-purpose matching and scenario questions about visibility and attribution.",
    sections: [
      {
        heading: "The four core tools and their boundaries",
        body: [
          "**AWS Pricing Calculator** - BEFORE deployment: model a candidate architecture service-by-service, build side-by-side estimates for competing designs, share or export them. It estimates; it never deploys or monitors.",
          "**AWS Cost Explorer** - AFTER deployment: visualize 12+ months of history, group by service/account/tag/Region, forecast forward, drill into a bill jump, and run RI/Savings Plan recommendations, utilization, and coverage reporting. Machine-learning cost anomaly detection flags unexpected deviations.",
          "**AWS Budgets** - GUARDRAIL: set cost or usage thresholds (and reservation utilization/coverage targets) and alert by email/SNS as spend approaches or crosses them. Proactive, threshold-driven - the answer to 'warn me at 80%'.",
          "**AWS Cost and Usage Report (CUR)** - RAW DATA: the most detailed line-item report (per resource, per hour, with tags and discounts) delivered to S3 for Athena/QuickSight analysis - audit-grade billing detail."
        ],
        table: {
          headers: ["Tool", "Time direction", "Signature use"],
          rows: [
            ["Pricing Calculator", "Before deployment", "Estimate and compare architectures"],
            ["Cost Explorer", "After deployment", "Analyze, group, forecast, drill down"],
            ["Budgets", "Continuous guardrail", "Threshold alerts before overspend"],
            ["CUR", "Detailed record", "Line-item audit and custom analytics"]
          ]
        }
      },
      {
        heading: "AWS Organizations and consolidated billing",
        body: [
          "Consolidated billing: the **management (payer) account** receives ONE invoice covering all member accounts. Aggregated usage can reach volume discount tiers, and **RI/Savings Plan discounts are shared across the organization** - any account's matching usage receives the discounted rate automatically. Accounts remain independent: each still sees its own costs and keeps its own IAM.",
          "The payer's role is financial, not operational: it consolidates payment and provides cost visibility across members; it does not gain resource access and does not run members' workloads."
        ]
      },
      {
        heading: "Cost allocation tags and attribution",
        body: [
          "Tags turn a single bill into accountable views: apply a consistent key (Department, Project, Environment), then **activate** the user-defined tag as a cost allocation tag in the Billing console - only activated tags appear as dimensions in Cost Explorer, Budgets, and CUR. AWS-reserved tags use the aws: prefix and are not user-editable.",
          "In consolidated billing, attribution matters even more: one invoice for everyone means tags (and account structure) are what slice spend per team or project. The accountability effect is the economics payoff from Domain 1: teams that see their own spend optimize it.",
          "Billing support basics: every account - even free Basic Support - gets 24x7 responses to account and billing questions; service pricing itself is published on official pricing pages and in the Pricing Calculator."
        ]
      }
    ],
    mustKnow: [
      "Pricing Calculator = pre-deployment estimation; Cost Explorer = post-deployment analysis/forecasting; Budgets = threshold alerts; CUR = line-item raw data to S3.",
      "Cost Explorer anomaly detection uses ML to flag unexpected spend patterns via monitors.",
      "Consolidated billing: one payer invoice, shared volume discounts, org-wide RI/Savings Plan sharing; per-account visibility and IAM unchanged.",
      "User-defined tags must be ACTIVATED as cost allocation tags before appearing in billing reports.",
      "The aws: tag prefix is reserved for AWS-generated tags.",
      "Basic Support includes 24x7 account and billing Q&A for every customer.",
      "Budgets can also track RI utilization and coverage, not just cost."
    ],
    examTips: [
      "Not yet deployed → Pricing Calculator; bill doubled and why → Cost Explorer drill-down; alert at 80% → Budgets; auditors need per-resource detail → CUR.",
      "'One invoice, shared RIs' is the two-line definition of consolidated billing - both halves get tested.",
      "Tags need activation - an option that just says 'tag the resources' is incomplete without activation.",
      "The payer account does NOT gain resource access - billing consolidation touches money, not permissions."
    ]
  },
  {
    id: "4.3",
    domain: 4,
    task: "4.3",
    title: "Identify AWS technical resources and AWS Support options",
    weight: "Domain 4 is 12% of the exam",
    readMinutes: 11,
    summary: "Task 4.3 covers the self-service resources (documentation, whitepapers, re:Post, Knowledge Center, Prescriptive Guidance), the support plan lineup (Basic, AWS Business Support+, AWS Enterprise Support, AWS Unified Operations), the monitoring pair (Trusted Advisor, AWS Health Dashboard/API), abuse reporting (Trust and Safety), and the partner ecosystem (APN, ISVs, SIs, AWS Marketplace, Professional Services).",
    sections: [
      {
        heading: "Self-service technical resources",
        body: [
          "AWS publishes freely: **documentation** (docs.aws.amazon.com), **whitepapers** and best-practice guides, the **Architecture Center** (reference architectures), and **AWS Prescriptive Guidance** (patterns from AWS engineers and partners). These are the 'locate resources on official websites' skills the guide names.",
          "For specific problems: **AWS re:Post** is the community Q&A platform with AWS expert participation; the **AWS Knowledge Center** is a curated archive of common issues and fixes. Both are the pre-support-case self-service pair."
        ]
      },
      {
        heading: "AWS Support plans (current lineup)",
        body: [
          "**Basic Support** - free with every account: 24x7 account and billing Q&A, support forums, service health checks, documentation access, plus a limited set of core Trusted Advisor checks. No technical case support.",
          "**AWS Business Support+** - paid, from $29/month: 24x7 phone/web/chat with Cloud Support Engineers, under-30-minute human engagement for business-critical system-down cases, 500+ Trusted Advisor checks, the AWS Support API, third-party software support, and AI-powered contextual assistance.",
          "**AWS Enterprise Support** - everything in Business Support+ plus a designated **Technical Account Manager (TAM)**, 15-minute response for production-critical cases, AWS Security Incident Response at no extra cost, strategic business reviews, and Countdown event management.",
          "**AWS Unified Operations** - the deep-operations tier: TAM plus **Domain Specialist Engineers (DSE)**, application architecture guidance, infrastructure event management, critical workload reviews, and personalized runbooks. Note: the legacy Developer, Business, and Enterprise On-Ramp plans are discontinued (January 1, 2027)."
        ],
        table: {
          headers: ["Plan", "Response target", "Distinguishing feature"],
          rows: [
            ["Basic", "None (billing/account Q&A only)", "Free for every account"],
            ["Business Support+", "< 30 min business-critical", "24x7 engineers, 500+ TA checks"],
            ["Enterprise", "15 min production-critical", "Designated TAM, Security Incident Response"],
            ["Unified Operations", "TAM-led engagements", "TAM + DSEs, runbooks, workload reviews"]
          ]
        }
      },
      {
        heading: "Trusted Advisor, Health, and abuse reporting",
        body: [
          "**AWS Trusted Advisor** scans against best practices in five categories: cost optimization (idle load balancers, underutilized instances, unassociated Elastic IPs), performance, security, fault tolerance, and service limits. Core checks ship free; the full 500+ catalog comes with Business Support+.",
          "**AWS Health Dashboard** shows AWS service issues plus the Personal Health view - events affecting YOUR resources (scheduled maintenance, degradation) - and the **AWS Health API** feeds those events programmatically into EventBridge and automation runbooks.",
          "Abuse of AWS resources (spam, phishing, DoS, malware) is reported to the **AWS Trust and Safety** team via the abuse form - they investigate and act."
        ]
      },
      {
        heading: "Partners, Marketplace, and professional help",
        body: [
          "The **AWS Partner Network (APN)** spans technology partners - **independent software vendors (ISVs)** building software that runs on AWS - and consulting partners - **system integrators (SIs)** delivering migration, implementation, and managed services. Partner benefits include partner training and certification, partner events, and partner volume discounts.",
          "**AWS Marketplace** is the digital catalog for third-party software (AMIs, containers, SaaS) deployable directly into accounts, with negotiated private offers, license entitlement/governance, and charges consolidated into the AWS bill.",
          "Human assistance beyond support plans: **AWS Professional Services** (paid engagements, e.g., migration execution) and **AWS solution architects** (architectural guidance)."
        ]
      }
    ],
    mustKnow: [
      "Support lineup: Basic, AWS Business Support+, AWS Enterprise Support, AWS Unified Operations.",
      "Basic = free: billing Q&A, forums, health checks, docs, core Trusted Advisor checks.",
      "Business Support+ = 24x7 engineers, <30-min business-critical response, 500+ TA checks, Support API.",
      "Enterprise = designated TAM, 15-min production-critical response, Security Incident Response, business reviews.",
      "Unified Operations = TAM + Domain Specialist Engineers, runbooks, critical workload reviews.",
      "Trusted Advisor = best-practice checks (cost, performance, security, fault tolerance, limits).",
      "Health Dashboard = events affecting YOUR resources; Health API = programmatic access for automation.",
      "Trust and Safety team receives abuse reports.",
      "ISVs sell software; SIs deliver services; Marketplace = third-party software catalog with private offers and consolidated billing; Professional Services = paid expert engagements."
    ],
    examTips: [
      "TAM + 15 minutes = Enterprise; 24x7 engineers + <30 minutes, no TAM = Business Support+; TAM + DSEs + runbooks = Unified Operations.",
      "Idle LB / unassociated EIP / underutilized EC2 = Trusted Advisor cost checks; 'event affecting MY resources' = Personal Health Dashboard.",
      "Spam or phishing FROM an AWS IP → report to Trust and Safety, not Support.",
      "Which partner type: builds software = ISV; performs your migration = system integrator."
    ]
  }
);
