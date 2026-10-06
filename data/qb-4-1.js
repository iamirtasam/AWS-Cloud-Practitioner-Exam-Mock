window.QBANK = window.QBANK || [];
window.QBANK.push(
  {
    id: "4.1-001",
    domain: 4,
    task: "4.1",
    type: "single",
    difficulty: "easy",
    stem: "A development team needs to run compute for a two-day proof of concept with no long-term commitment. Which pricing model fits best?",
    options: [
      "Reserved Instances with a one-year term",
      "Spot Instances with a bid price",
      "On-Demand Instances billed by usage",
      "A three-year Compute Savings Plan"
    ],
    answer: [2],
    explanation: "Short-lived, unpredictable, or one-off work with no commitment is exactly what On-Demand is for: pay the full rate only for the hours used, with no upfront payment and nothing to terminate early.",
    rationales: [
      "A one-year commitment outlives a two-day project - commitments are for steady baselines.",
      "Spot could be interrupted mid-proof-of-concept; the small saving is rarely worth the risk for short evaluation work.",
      "",
      "A three-year commitment is the longest possible term for the shortest possible workload."
    ],
    services: ["Amazon EC2"],
    tags: ["on-demand", "pricing models"]
  },
  {
    id: "4.1-002",
    domain: 4,
    task: "4.1",
    type: "single",
    difficulty: "easy",
    stem: "What does an Amazon EC2 Reserved Instance provide?",
    options: [
      "A discounted hourly rate in exchange for a one-year or three-year commitment",
      "A dedicated physical server for the customer's exclusive use",
      "A bid-based market price that can be interrupted at any time",
      "Free compute capacity for the first twelve months"
    ],
    answer: [0],
    explanation: "Reserved Instances are a billing construct: commit for one or three years to a specific instance configuration and receive a significant discount (up to around 72% off On-Demand) in return.",
    rationales: [
      "",
      "That describes Dedicated Hosts, not Reserved Instances - RIs are a pricing commitment, not hardware.",
      "That describes Spot Instances, which trade interruption risk for low price.",
      "That describes the Free Tier, not a commitment product."
    ],
    services: ["Amazon EC2"],
    tags: ["reserved instances", "pricing models"]
  },
  {
    id: "4.1-003",
    domain: 4,
    task: "4.1",
    type: "single",
    difficulty: "medium",
    stem: "What is the trade-off a company accepts when it runs batch image rendering on Spot Instances?",
    options: [
      "The hourly rate rises if demand for the instance type increases",
      "The instances can be interrupted with little warning when capacity is reclaimed",
      "The instances are locked to a single Availability Zone for the term",
      "The pricing requires a one-year commitment to take effect"
    ],
    answer: [1],
    explanation: "Spot's deal is explicit: deep discounts (up to around 90% off On-Demand) in exchange for interruption risk - AWS can reclaim the capacity on short notice, so the workload must checkpoint and resume.",
    rationales: [
      "On-Demand rates, not Spot rates, are the fixed published prices; Spot moves independently and usually downward.",
      "",
      "AZ lock-in is not a Spot property - Spot capacity can be requested across AZs.",
      "Spot requires no commitment; that is Reserved Instances and Savings Plans."
    ],
    services: ["Amazon EC2"],
    tags: ["spot", "pricing models"]
  },
  {
    id: "4.1-004",
    domain: 4,
    task: "4.1",
    type: "single",
    difficulty: "medium",
    stem: "How does an AWS Savings Plans discount differ most from a Standard Reserved Instance?",
    options: [
      "Savings Plans require no commitment; Standard RIs require one",
      "Savings Plans apply only to Spot capacity",
      "Savings Plans apply only within a single Availability Zone",
      "Savings Plans commit to a dollar-per-hour spend and stay flexible across instance families and sizes"
    ],
    answer: [3],
    explanation: "A Compute Savings Plans commits to a consistent dollar amount of compute per hour for one or three years and the discount follows across instance families, sizes, operating systems, and Regions - more flexible than a Standard RI's configuration-bound commitment.",
    rationales: [
      "Both are commitment products; Savings Plans simply commit to spend rather than to a specific instance configuration.",
      "Savings Plans cover On-Demand, Reserved, and (with EC2 Instance Savings Plans) committed usage - they are not a Spot product.",
      "There is no AZ restriction; flexibility across Regions is one of the plan's selling points.",
      ""
    ],
    services: ["Amazon EC2"],
    tags: ["savings plans", "pricing models"]
  },
  {
    id: "4.1-005",
    domain: 4,
    task: "4.1",
    type: "single",
    difficulty: "medium",
    stem: "A company must run software licensed per physical socket and must keep workloads on isolated physical hardware for compliance. Which option fits both requirements?",
    options: [
      "On-Demand Instances",
      "Dedicated Hosts",
      "Spot Instances",
      "Capacity Reservations"
    ],
    answer: [1],
    explanation: "Dedicated Hosts give the customer a whole physical server, which enables per-socket, per-core, or per-VM software licensing (BYOL) and satisfies hardware-isolation compliance requirements - the only EC2 option with host-level visibility.",
    rationales: [
      "On-Demand shares hardware with other customers and cannot anchor per-socket licenses.",
      "",
      "Spot runs on shared hardware and can be interrupted - unusable for licensing or isolation requirements.",
      "Capacity Reservations guarantee capacity in an AZ but run on shared tenancy hardware."
    ],
    services: ["Amazon EC2"],
    tags: ["dedicated hosts", "licensing"]
  },
  {
    id: "4.1-006",
    domain: 4,
    task: "4.1",
    type: "single",
    difficulty: "hard",
    stem: "How do Dedicated Instances differ from Dedicated Hosts?",
    options: [
      "Dedicated Instances offer per-socket license control; Dedicated Hosts do not",
      "Dedicated Instances are always cheaper than Dedicated Hosts",
      "Dedicated Instances run on hardware dedicated to one account but without host-level visibility or control",
      "Dedicated Instances run only in a single Availability Zone"
    ],
    answer: [2],
    explanation: "Both isolate hardware to one customer. Dedicated Instances share a host with other virtual machines of the SAME account only, and AWS controls placement invisibly; Dedicated Hosts expose the physical server itself, enabling per-socket licensing and host affinity.",
    rationales: [
      "It is the reverse: per-socket/core/VM license control is the Dedicated Hosts feature.",
      "Dedicated Hosts typically cost more than Dedicated Instances - isolation at the host level carries a premium.",
      "",
      "Neither option is limited to a single AZ; both can run wherever capacity exists."
    ],
    services: ["Amazon EC2"],
    tags: ["dedicated instances", "dedicated hosts"]
  },
  {
    id: "4.1-007",
    domain: 4,
    task: "4.1",
    type: "single",
    difficulty: "hard",
    stem: "A company needs a guarantee that a specific instance type will always be available in one Availability Zone, even during capacity shortages, and is willing to pay On-Demand rates regardless of use. Which option?",
    options: [
      "On-Demand Capacity Reservations",
      "Spot Instances",
      "Reserved Instances in another Region",
      "A Compute Savings Plan"
    ],
    answer: [0],
    explanation: "Capacity Reservations reserve capacity in a chosen AZ for as long as the reservation is held - billed at On-Demand rates whether instances run or not. Its job is availability assurance, not discount.",
    rationales: [
      "",
      "Spot does the opposite: it offers spare capacity that AWS can take back at any time.",
      "An RI elsewhere neither reserves local capacity nor helps in the target AZ.",
      "A Savings Plan discounts spend but does not hold any capacity in any AZ."
    ],
    services: ["Amazon EC2"],
    tags: ["capacity reservations", "pricing models"]
  },
  {
    id: "4.1-008",
    domain: 4,
    task: "4.1",
    type: "single",
    difficulty: "medium",
    stem: "What does Reserved Instance size flexibility mean for a Regional Standard RI in the same instance family?",
    options: [
      "The discount transfers automatically to any instance type in any family",
      "The discount applies proportionally across different instance sizes within the same family",
      "The discount doubles when the instance is stopped and restarted",
      "The discount converts into Savings Plans credits automatically"
    ],
    answer: [1],
    explanation: "For Linux RIs in a Region, size flexibility normalizes usage into units: a 4xlarge consumes four 1-unit RIs, or four small instances can each consume one. The discount roams within the family by size - not across families.",
    rationales: [
      "Cross-family roaming requires Convertible RIs or Compute Savings Plans, not size flexibility.",
      "",
      "Stopping an instance has no effect on RI application - RIs bill against running usage.",
      "RIs and Savings Plans are separate commitment products; no automatic conversion happens."
    ],
    services: ["Amazon EC2"],
    tags: ["reserved instances", "size flexibility"]
  },
  {
    id: "4.1-009",
    domain: 4,
    task: "4.1",
    type: "single",
    difficulty: "medium",
    stem: "A company uses AWS Organizations with consolidated billing. How do Reserved Instance discounts behave across member accounts?",
    options: [
      "Each account's RIs apply only inside the account that bought them",
      "RIs cannot be purchased at the organization level",
      "RI discounts apply only to the management account's usage",
      "Unused RI discounts are automatically applied to other accounts' matching usage"
    ],
    answer: [3],
    explanation: "With consolidated billing, RI discounts are shared organization-wide: if account A's RI covers an instance family/size that account B runs, B's usage receives the discounted rate automatically. This maximizes utilization of every commitment.",
    rationales: [
      "That is standalone-account behavior; consolidated billing exists precisely to pool benefits.",
      "RIs can be purchased by any account, including the management account, and shared.",
      "The management account gains no special claim on discounts - sharing flows to whichever account has matching usage.",
      ""
    ],
    services: ["AWS Organizations"],
    tags: ["reserved instances", "organizations", "consolidated billing"]
  },
  {
    id: "4.1-010",
    domain: 4,
    task: "4.1",
    type: "single",
    difficulty: "easy",
    stem: "What is the general pricing rule for data transfer INBOUND to AWS from the internet?",
    options: [
      "Inbound transfer is free; outbound transfer is charged",
      "Both inbound and outbound transfer are charged equally",
      "Inbound transfer is charged; outbound transfer is free",
      "Both directions are free within the Free Tier only"
    ],
    answer: [0],
    explanation: "AWS does not charge for data coming INTO its services from the internet. Charging concentrates on data going OUT (to the internet or between Regions) - a deliberate rule that makes ingestion cheap and egress a planning item.",
    rationales: [
      "",
      "Only outbound traffic carries the typical per-GB charge; symmetric charging would be contrary to AWS's published model.",
      "It is the opposite of the actual rule.",
      "Free inbound is permanent and general, not a Free Tier promotion."
    ],
    services: ["AWS"],
    tags: ["data transfer", "pricing"]
  },
  {
    id: "4.1-011",
    domain: 4,
    task: "4.1",
    type: "single",
    difficulty: "medium",
    stem: "A company replicates 1 TB of data from eu-west-1 to us-east-1 every night. How is that transfer priced?",
    options: [
      "Free, because Regions communicate over the AWS backbone",
      "Charged as internet egress from the source Region only",
      "Charged as inter-Region data transfer in both the source and destination Regions",
      "Charged only if the data leaves through a NAT gateway"
    ],
    answer: [2],
    explanation: "Region-to-Region transfer is billed on both ends - a per-GB charge in the source Region (out) and in the destination Region (in). Cross-Region replication is convenient but is a real recurring cost to model.",
    rationales: [
      "The AWS backbone does make it fast and reliable, but inter-Region transfer is a billed product.",
      "Internet egress is a different line item; Region-to-Region has its own rate on both sides.",
      "",
      "NAT gateways concern internet-bound traffic; inter-Region transfer is priced independently of NAT."
    ],
    services: ["AWS"],
    tags: ["data transfer", "regions"]
  },
  {
    id: "4.1-012",
    domain: 4,
    task: "4.1",
    type: "single",
    difficulty: "hard",
    stem: "Within the same AWS Region, how does pricing compare for data transferred between two Availability Zones versus within one Availability Zone?",
    options: [
      "Cross-AZ transfer and same-AZ transfer are both free",
      "Cross-AZ transfer is charged in each direction; same-AZ transfer using private IP addresses is free",
      "Same-AZ transfer is charged more because it uses dedicated links",
      "Both are charged, but only when the instances use public IP addresses"
    ],
    answer: [1],
    explanation: "Cross-AZ traffic within a Region incurs a per-GB charge in each direction (it is genuinely a second facility), while traffic between instances in the SAME AZ over private IPs is free. This is why AZ-aware architectures also watch cost.",
    rationales: [
      "Only same-AZ private-IP traffic is free; crossing AZs is a charged hop in both directions.",
      "",
      "Dedicated links are not the differentiator - the AZ boundary itself is what is billed.",
      "Public-IP traffic adds internet-side considerations, but the AZ boundary charge applies regardless of addressing choice."
    ],
    services: ["AWS"],
    tags: ["data transfer", "availability zones"]
  },
  {
    id: "4.1-013",
    domain: 4,
    task: "4.1",
    type: "single",
    difficulty: "easy",
    stem: "A media company stores 500 TB of video masters that are accessed roughly once a quarter, where retrieval delays of hours are acceptable. Which storage class minimizes cost?",
    options: [
      "S3 Standard",
      "S3 Standard-Infrequent Access",
      "S3 One Zone-IA",
      "S3 Glacier Flexible Retrieval"
    ],
    answer: [3],
    explanation: "Quarterly access plus hours-acceptable latency is the archival signature: Glacier Flexible Retrieval offers by far the lowest storage price per GB, trading retrieval minutes-to-hours and per-retrieval fees for it.",
    rationales: [
      "S3 Standard prices for frequent access - paying a premium for milliseconds on data touched four times a year.",
      "Standard-IA is cheaper than Standard but still priced for prompt access - an intermediate, not archival, tier.",
      "One Zone-IA saves redundancy cost but is still a promptly-accessible tier, not the cheapest for archives.",
      ""
    ],
    services: ["Amazon S3"],
    tags: ["storage tiers", "s3"]
  },
  {
    id: "4.1-014",
    domain: 4,
    task: "4.1",
    type: "single",
    difficulty: "medium",
    stem: "A dataset's access pattern is genuinely unknown and changes over time. Which S3 storage class manages tier transitions automatically?",
    options: [
      "S3 Intelligent-Tiering",
      "S3 Standard-IA",
      "S3 One Zone-IA",
      "S3 Glacier Deep Archive"
    ],
    answer: [0],
    explanation: "Intelligent-Tiering monitors per-object access and moves objects between frequent and infrequent layers automatically (with archive options), charging a small monitoring fee - built for unpredictable patterns with no lifecycle rules required.",
    rationales: [
      "",
      "Standard-IA is a fixed tier; it does not observe or react to access patterns.",
      "One Zone-IA is a fixed, lower-redundancy tier with no automatic movement.",
      "Deep Archive is the coldest fixed tier - correct for known archives, wrong for unknown or shifting patterns."
    ],
    services: ["Amazon S3"],
    tags: ["storage tiers", "intelligent-tiering"]
  },
  {
    id: "4.1-015",
    domain: 4,
    task: "4.1",
    type: "single",
    difficulty: "medium",
    stem: "A general-purpose EBS volume needs consistent baseline performance at the lowest storage price, without per-provisioned-IOPS charges above baseline. Which volume type?",
    options: [
      "io2 Block Express",
      "gp3",
      "Cold HDD (sc1)",
      "Magnetic (standard)"
    ],
    answer: [1],
    explanation: "gp3 decouples performance from capacity: a free baseline of 3,000 IOPS and 125 MB/s regardless of size, with provisioning beyond that billed separately. For typical workloads it is cheaper than gp2 at the same capacity.",
    rationales: [
      "io2 is the premium high-IOPS option - highest performance and highest price, not the lowest.",
      "",
      "sc1 is cheaper per GB but for cold throughput workloads, not consistent baseline performance.",
      "Legacy Magnetic volumes are outdated and neither performant nor the modern low-cost choice."
    ],
    services: ["Amazon EBS"],
    tags: ["ebs", "storage pricing"]
  },
  {
    id: "4.1-016",
    domain: 4,
    task: "4.1",
    type: "single",
    difficulty: "medium",
    stem: "A workload runs a steady, predictable baseline 24 hours a day, every day, on a fixed instance type and is expected to continue for years. Which purchasing option maximizes savings?",
    options: [
      "On-Demand Instances",
      "Spot Instances",
      "A three-year all-upfront Reserved Instance",
      "On-Demand Capacity Reservations"
    ],
    answer: [2],
    explanation: "Steady + predictable + long-lived is the textbook RI profile: the longest term (three years) with all upfront payment yields the deepest discount - often cited at up to 72% off On-Demand.",
    rationales: [
      "On-Demand is the most expensive way to run a steady workload long-term.",
      "Spot's interruption risk makes it unsuitable for a steady always-on service.",
      "",
      "Capacity Reservations pay On-Demand rates for guaranteed capacity - the opposite of maximizing savings."
    ],
    services: ["Amazon EC2"],
    tags: ["reserved instances", "pricing models"]
  },
  {
    id: "4.1-017",
    domain: 4,
    task: "4.1",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO pricing options provide discounts in exchange for a usage commitment? (Select TWO.)",
    options: [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Savings Plans",
      "On-Demand Capacity Reservations"
    ],
    answer: [1, 3],
    explanation: "Exactly two of EC2's purchasing options are commitment products: Reserved Instances (commit to a configuration for 1-3 years) and Savings Plans (commit to a dollar-per-hour spend for 1-3 years). On-Demand, Spot, and Capacity Reservations carry no commitment discount.",
    rationales: [
      "On-Demand is commitment-free pay-as-you-go at full rate.",
      "",
      "Spot is commitment-free spare capacity at deep discount, with interruption risk as the catch.",
      "",
      "Capacity Reservations guarantee capacity but bill at On-Demand rates - a commitment of capacity, not a discount."
    ],
    services: ["Amazon EC2"],
    tags: ["reserved instances", "savings plans", "commitments"]
  },
  {
    id: "4.1-018",
    domain: 4,
    task: "4.1",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO workloads are appropriate for Spot Instances? (Select TWO.)",
    options: [
      "A nightly batch job that checkpoints progress and can resume",
      "A customer-facing checkout API that must stay available",
      "A containerized CI test farm where failed runs simply retry",
      "A production RDS database instance",
      "A steady-state license server that must never restart"
    ],
    answer: [0, 2],
    explanation: "Spot fits flexible, interruptible, restartable work: batch with checkpointing and CI farms where a retried run is harmless. Checkout APIs, production databases, and never-restart services must run on stable capacity (On-Demand, RI, or Savings Plans).",
    rationales: [
      "",
      "An always-available customer-facing API cannot tolerate Spot reclamation.",
      "",
      "Spot capacity is an EC2 purchasing option; it is not how RDS instances are priced.",
      "A service that must never restart needs guaranteed capacity - the opposite of Spot's contract."
    ],
    services: ["Amazon EC2"],
    tags: ["spot", "scenario"]
  },
  {
    id: "4.1-019",
    domain: 4,
    task: "4.1",
    type: "multi",
    difficulty: "medium",
    stem: "Which THREE cost drivers appear on a typical AWS bill for a simple web application? (Select THREE.)",
    options: [
      "EC2 instance hours (compute)",
      "The number of IAM users in the account",
      "S3 storage gigabyte-months",
      "The number of availability zones in the Region",
      "Data transferred OUT to the internet"
    ],
    answer: [0, 2, 4],
    explanation: "The core billable dimensions are compute time, storage consumed, and data egress. IAM users, AZ count, and account configuration are free - pricing attaches to resources consumed and data moved.",
    rationales: [
      "",
      "IAM is free regardless of user count - identity configuration is not metered.",
      "",
      "Regions and their AZ counts are AWS infrastructure choices, not customer billables.",
      ""
    ],
    services: ["Amazon EC2", "Amazon S3"],
    tags: ["pricing", "cost drivers"]
  },
  {
    id: "4.1-020",
    domain: 4,
    task: "4.1",
    type: "single",
    difficulty: "easy",
    stem: "A startup runs an internal dashboard used only during business hours on weekdays, with the team shutting it down evenings and weekends. Which combination minimizes cost?",
    options: [
      "Three-year Reserved Instances for the dashboard hosts",
      "On-Demand Instances, stopped outside business hours",
      "Spot Instances with no checkpointing",
      "On-Demand Capacity Reservations held continuously"
    ],
    answer: [1],
    explanation: "Usage is bounded and predictable in pattern but small in total: On-Demand plus stopping when unused means paying only for the hours actually served - and stopping avoids paying at all, which no reservation matches at this scale.",
    rationales: [
      "A three-year commitment for a dashboard that runs half-weeks overpays during every idle evening.",
      "",
      "Spot cannot guarantee the dashboard is up when needed - and non-checkpointed interruptions lose user sessions.",
      "Reservations bill whether the instances run or not - paying for weekends the team never uses."
    ],
    services: ["Amazon EC2"],
    tags: ["on-demand", "scenario", "cost optimization"]
  },
  {
    id: "4.1-021",
    domain: 4,
    task: "4.1",
    type: "single",
    difficulty: "hard",
    stem: "A company's compute portfolio: a steady always-on baseline, a daily interruptible video-transcoding batch, and a spiky unpredictable API. What is the most cost-effective mix?",
    options: [
      "Spot for all three workloads to maximize the discount",
      "Reserved Instances for the baseline, Spot for transcoding, On-Demand for the spiky API",
      "On-Demand for all three to preserve maximum flexibility",
      "Reserved Instances for the baseline and the transcoding, Spot for the API"
    ],
    answer: [1],
    explanation: "The portfolio pattern matches each model to demand shape: commit the flat baseline (RI/Savings Plans), bid Spot for interruptible batch, and let On-Demand absorb unpredictable spikes. Every workload gets the pricing model its tolerance allows.",
    rationales: [
      "Spot across the board breaks the always-on baseline and the availability-sensitive API - the discount is not worth outages.",
      "",
      "All On-Demand pays full rate for a perfectly steady baseline - the largest avoidable cost in the portfolio.",
      "Inverting the models commits for a batch job that does not need it and bets availability on Spot for the API - wrong on both ends."
    ],
    services: ["Amazon EC2"],
    tags: ["pricing models", "scenario", "portfolio"]
  }
);
