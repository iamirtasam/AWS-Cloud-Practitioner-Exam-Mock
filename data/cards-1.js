window.FLASHCARDS = window.FLASHCARDS || [];
window.FLASHCARDS.push(
  {
    id: "1.1-001",
    domain: 1,
    task: "1.1",
    front: "List the six advantages of cloud computing (exam guide wording).",
    back: "1) Trade capital expense for variable expense. 2) Massive economies of scale. 3) Stop guessing capacity. 4) Increase speed and agility. 5) Stop spending money running and maintaining data centers. 6) Go global in minutes.",
    tags: ["six advantages", "cloud benefits"]
  },
  {
    id: "1.1-002",
    domain: 1,
    task: "1.1",
    front: "Define elasticity.",
    back: "Capacity automatically tracks demand in BOTH directions - scaling out when traffic rises and scaling in when it falls - so cost follows the actual workload curve and idle spend disappears.",
    tags: ["elasticity"]
  },
  {
    id: "1.1-003",
    domain: 1,
    task: "1.1",
    front: "Elasticity vs scalability vs high availability - one line each.",
    back: "Elasticity = automatic in/out matching of supply to demand. Scalability = the system can grow to handle more load (design property). High availability = stays usable despite failures (no single point of failure, multi-AZ).",
    tags: ["elasticity", "scalability", "high availability"]
  },
  {
    id: "1.1-004",
    domain: 1,
    task: "1.1",
    front: "Capex vs opex?",
    back: "Capital expense buys assets upfront (servers, buildings) that depreciate whether used or not. Operational expense tracks ongoing consumption and stops when usage stops. Cloud converts capex to opex.",
    tags: ["capex", "opex", "economics"]
  },
  {
    id: "1.1-005",
    domain: 1,
    task: "1.1",
    front: "What are economies of scale in the cloud?",
    back: "AWS aggregates purchases and utilization across millions of customers, achieving lower per-unit prices than any single company could - and pay-as-you-go passes the savings through as 'lower variable costs than you can get on your own.'",
    tags: ["economies of scale"]
  },
  {
    id: "1.1-006",
    domain: 1,
    task: "1.1",
    front: "A retailer sees 20x traffic every Black Friday, gone by January. Which advantage applies?",
    back: "Elasticity (stop guessing capacity): scale out for the peak, scale in after, and pay only while the capacity runs - no permanent hardware bought for a once-a-year spike.",
    tags: ["elasticity", "scenario"]
  },
  {
    id: "1.1-007",
    domain: 1,
    task: "1.1",
    front: "'Go global in minutes' means what operationally?",
    back: "Deploy into existing AWS Regions near your users with a few clicks - worldwide infrastructure is already built. It never means constructing your own data centers abroad.",
    tags: ["global infrastructure", "go global"]
  },
  {
    id: "1.1-008",
    domain: 1,
    task: "1.1",
    front: "What is 'undifferentiated heavy lifting'?",
    back: "Infrastructure toil every company must do but none competes on - racking servers, power, cooling, patching, refresh cycles. AWS absorbs it so engineers focus on differentiating the business.",
    tags: ["focus", "undifferentiated heavy lifting"]
  },
  {
    id: "1.1-009",
    domain: 1,
    task: "1.1",
    front: "How does the cloud make experimentation cheaper?",
    back: "Speed and agility: a full environment provisions in minutes and bills only while it runs, so a failed experiment costs the compute actually used - then it is deleted. Cheap failure accelerates innovation.",
    tags: ["agility", "experimentation"]
  },
  {
    id: "1.1-010",
    domain: 1,
    task: "1.1",
    front: "Name examples of metered (consumption-based) billing.",
    back: "EC2 billed per second, Lambda per request and millisecond of execution, S3 per GB-month stored. Billing follows actual usage - the foundation of 'pay only for what you use.'",
    tags: ["consumption model", "metered billing"]
  },
  {
    id: "1.1-011",
    domain: 1,
    task: "1.1",
    front: "Which two wastes does elasticity eliminate?",
    back: "Over-provisioning (paying for idle hardware 'just in case') and under-provisioning (turning customers away when demand exceeds capacity).",
    tags: ["elasticity", "waste"]
  },
  {
    id: "1.1-012",
    domain: 1,
    task: "1.1",
    front: "How is high availability achieved on AWS?",
    back: "Eliminate single points of failure: deploy across multiple Availability Zones, put load balancers in front, use health checks, and let automatic replacement handle failed components.",
    tags: ["high availability", "multi-az"]
  },
  {
    id: "1.1-013",
    domain: 1,
    task: "1.1",
    front: "'Weeks waiting for hardware procurement' maps to which advantage?",
    back: "Increased speed and agility - cloud resources provision in minutes, removing the procurement cycle entirely and enabling fast iteration.",
    tags: ["agility", "scenario"]
  },
  {
    id: "1.1-014",
    domain: 1,
    task: "1.1",
    front: "What does the consumption model do to financial risk for a new initiative?",
    back: "It shrinks risk to actual consumption: on-demand access needs no upfront commitment, so if the initiative works you scale up, and if it fails you stop paying - the cost is what you used.",
    tags: ["economics", "risk"]
  },
  {
    id: "1.1-015",
    domain: 1,
    task: "1.1",
    front: "'Bought servers for a peak that never came' maps to which advantage?",
    back: "Stop guessing capacity - forecasts fail; on the cloud you provision for today and let Auto Scaling track real demand.",
    tags: ["capacity", "scenario"]
  },
  {
    id: "1.1-016",
    domain: 1,
    task: "1.1",
    front: "How does the AWS Cloud improve security posture as an advantage?",
    back: "AWS invests in security at scale (compliance, physical security, dedicated teams) and infrastructure is fungible - compromised or suspect instances are destroyed and replaced, not forensically patched in place.",
    tags: ["security", "cloud benefits"]
  },
  {
    id: "1.2-001",
    domain: 1,
    task: "1.2",
    front: "Name the six Well-Architected Framework pillars.",
    back: "Operational excellence, security, reliability, performance efficiency, cost optimization, sustainability.",
    tags: ["well-architected", "pillars"]
  },
  {
    id: "1.2-002",
    domain: 1,
    task: "1.2",
    front: "What does the reliability pillar cover?",
    back: "Recovering from failures and meeting demand: multi-AZ deployment, automatic recovery, tested backup/DR procedures, and scaling to meet load.",
    tags: ["reliability", "well-architected"]
  },
  {
    id: "1.2-003",
    domain: 1,
    task: "1.2",
    front: "What does the sustainability pillar target?",
    back: "Minimizing environmental impact - efficient utilization (no idle), managed services, right-sizing, and workload consolidation. Related to cost optimization but aimed at the environment.",
    tags: ["sustainability", "well-architected"]
  },
  {
    id: "1.2-004",
    domain: 1,
    task: "1.2",
    front: "What is a Well-Architected review?",
    back: "Applying the framework's guiding questions to a real workload to surface gaps and risks while they are cheap to fix. It is guidance and process - not a certification, gate, or product.",
    tags: ["well-architected review"]
  },
  {
    id: "1.2-005",
    domain: 1,
    task: "1.2",
    front: "'Stop guessing capacity' - what practice does it prescribe?",
    back: "Replace forecasts with feedback: provision for today's need and let Auto Scaling adjust as real demand reveals itself, in both directions.",
    tags: ["design principles", "auto scaling"]
  },
  {
    id: "1.2-006",
    domain: 1,
    task: "1.2",
    front: "'Test at production scale' - why is it cheap on AWS?",
    back: "Because environments are temporary and pay-as-you-go: rent a prod-like environment for the test's duration, measure, then delete. Not free testing - no permanent duplicate hardware.",
    tags: ["design principles", "testing"]
  },
  {
    id: "1.2-007",
    domain: 1,
    task: "1.2",
    front: "'Automate to make architectural experimentation easier' - what enables it?",
    back: "Infrastructure as code: the architecture becomes a versioned script that spins up identical environments, so trying a design is running a script and throwing it away costs nothing.",
    tags: ["iac", "design principles"]
  },
  {
    id: "1.2-008",
    domain: 1,
    task: "1.2",
    front: "What is a game day?",
    back: "A controlled rehearsal: inject failures (kill an AZ, exhaust a dependency) while stakes are low to validate that recovery, monitoring, and runbooks actually work - improving operations through practice.",
    tags: ["game days", "operational excellence"]
  },
  {
    id: "1.2-009",
    domain: 1,
    task: "1.2",
    front: "Define loose coupling and name its AWS building blocks.",
    back: "Components interact through interfaces (queues, events, APIs) rather than direct dependencies, so one component's failure or slowness stays localized. Building blocks: SQS queues, SNS/EventBridge events, load balancers, APIs.",
    tags: ["loose coupling", "sqs", "sns"]
  },
  {
    id: "1.2-010",
    domain: 1,
    task: "1.2",
    front: "What does 'design for failure' mean in practice?",
    back: "Assume components WILL fail and build survival in: multiple Availability Zones, health checks, retries, backups, automatic replacement, and graceful degradation when a dependency is down.",
    tags: ["design for failure", "high availability"]
  },
  {
    id: "1.2-011",
    domain: 1,
    task: "1.2",
    front: "Scale out vs scale up - which does cloud design prefer and why?",
    back: "Scale out (horizontal: add instances behind a load balancer) - it is incremental, automatable via Auto Scaling, and has no hardware ceiling. Scale up (vertical: bigger instance) hits limits and needs downtime.",
    tags: ["scaling", "horizontal", "vertical"]
  },
  {
    id: "1.2-012",
    domain: 1,
    task: "1.2",
    front: "Why does statelessness enable elasticity?",
    back: "With no session data on the instance, ANY instance can serve ANY request - so Auto Scaling can add or remove instances freely. State moves to DynamoDB, ElastiCache, or client cookies.",
    tags: ["statelessness", "elasticity"]
  },
  {
    id: "1.2-013",
    domain: 1,
    task: "1.2",
    front: "Microservices vs monolith - the architectural difference?",
    back: "A monolith is one deployable unit where everything scales and fails together. Microservices split it into independently deployable services that scale, update, and fail independently - loose coupling as structure.",
    tags: ["microservices", "monolith"]
  },
  {
    id: "1.2-014",
    domain: 1,
    task: "1.2",
    front: "A queue is inserted between service A and service B. Which principle is demonstrated?",
    back: "Loose coupling: the queue (SQS) absorbs load spikes and B outages - A keeps enqueueing while B catches up, so failures and rate differences no longer cascade directly.",
    tags: ["loose coupling", "sqs", "scenario"]
  },
  {
    id: "1.2-015",
    domain: 1,
    task: "1.2",
    front: "Match the pillar: 'protecting your data / systems / assets'?",
    back: "Security - least privilege, encryption, detection, and incident response belong to this pillar.",
    tags: ["security", "pillars"]
  },
  {
    id: "1.2-016",
    domain: 1,
    task: "1.2",
    front: "Why does adopting RDS over self-managed MySQL on EC2 demonstrate a design principle?",
    back: "Prefer managed services: AWS absorbs patching, backups, replication, and failover - undifferentiated heavy lifting the team no longer performs (reduced operational burden; cost optimization is the runner-up answer).",
    tags: ["managed services", "scenario"]
  },
  {
    id: "1.3-001",
    domain: 1,
    task: "1.3",
    front: "Name the 7 Rs of migration.",
    back: "Relocate, Rehost, Replatform, Refactor (re-architect), Repurchase, Retire, Retain.",
    tags: ["7 rs", "migration"]
  },
  {
    id: "1.3-002",
    domain: 1,
    task: "1.3",
    front: "Define rehost.",
    back: "Lift and shift: replicate servers to EC2 as-is with minimal changes - the fastest path off the data center. Optimization is deferred to after migration.",
    tags: ["rehost", "7 rs"]
  },
  {
    id: "1.3-003",
    domain: 1,
    task: "1.3",
    front: "Define replatform (with a signature example).",
    back: "Lift, tinker, and shift: small optimizations without changing core architecture - e.g., a self-managed database becomes RDS while the application stays otherwise unchanged.",
    tags: ["replatform", "7 rs"]
  },
  {
    id: "1.3-004",
    domain: 1,
    task: "1.3",
    front: "Define refactor/re-architect and its trade-off.",
    back: "Rebuild the application cloud-native (microservices, serverless) - the largest cost and effort, justified by the largest long-term benefit in agility, scalability, and cost.",
    tags: ["refactor", "7 rs"]
  },
  {
    id: "1.3-005",
    domain: 1,
    task: "1.3",
    front: "Define repurchase.",
    back: "Drop the self-managed product and buy a SaaS equivalent instead - e.g., self-hosted CRM or email replaced by a managed SaaS product. You stop running the software entirely.",
    tags: ["repurchase", "saas", "7 rs"]
  },
  {
    id: "1.3-006",
    domain: 1,
    task: "1.3",
    front: "Define retire and retain.",
    back: "Retire = decommission applications the assessment found unused (moving waste preserves waste). Retain = deliberately keep an application on-premises for now - dependencies, compliance, or poor economics - and revisit later (hybrid results).",
    tags: ["retire", "retain", "7 rs"]
  },
  {
    id: "1.3-007",
    domain: 1,
    task: "1.3",
    front: "Define relocate - how does it differ from rehost?",
    back: "Relocate moves hypervisor-level VMs (VMware) unchanged into VMware Cloud on AWS - no conversion at all. Rehost converts/replicates servers into EC2 with minimal changes.",
    tags: ["relocate", "vmware", "7 rs"]
  },
  {
    id: "1.3-008",
    domain: 1,
    task: "1.3",
    front: "Name the three phases of the AWS migration framework.",
    back: "Assess (business case: inventory, cost models, retire candidates), Mobilize (landing zone, migration waves planned), Migrate and modernize (move workloads in waves, then optimize continuously).",
    tags: ["migration framework", "phases"]
  },
  {
    id: "1.3-009",
    domain: 1,
    task: "1.3",
    front: "What is AWS Application Migration Service (MGN)?",
    back: "Automated lift-and-shift at scale: continuously replicates source servers, launches test copies, and cuts over to EC2 with minimal downtime - the rehost engine.",
    tags: ["mgn", "rehost", "tools"]
  },
  {
    id: "1.3-010",
    domain: 1,
    task: "1.3",
    front: "DMS and SCT - what does each do, and when do they pair?",
    back: "DMS replicates database contents with continuous change capture (near-zero-downtime cutover). SCT converts schemas and code objects between engines. Pair them for heterogeneous migrations (e.g., Oracle to PostgreSQL); same-engine moves need DMS alone.",
    tags: ["dms", "sct", "database migration"]
  },
  {
    id: "1.3-011",
    domain: 1,
    task: "1.3",
    front: "DataSync vs Snow Family - when does each apply?",
    back: "DataSync moves file data online (NFS/SMB shares into S3, EFS, FSx) with scheduling and validation. Snow Family (Snowball Edge, Snowmobile) moves petabytes physically when the network is too slow - encrypted appliance shipped to you, filled, returned.",
    tags: ["datasync", "snow family", "data transfer"]
  },
  {
    id: "1.3-012",
    domain: 1,
    task: "1.3",
    front: "What do Application Discovery Service and Migration Hub do?",
    back: "Discovery Service inventories the on-premises estate - servers, applications, dependencies - feeding migration planning. Migration Hub aggregates progress tracking across migration tools in one view.",
    tags: ["discovery", "migration hub", "tools"]
  },
  {
    id: "1.3-013",
    domain: 1,
    task: "1.3",
    front: "'Exit the data center this quarter' - which strategy and why?",
    back: "Rehost: no application changes means no re-testing of logic, so the move is fastest and lowest-risk. Modernization (replatform/refactor) happens later, in the cloud.",
    tags: ["rehost", "scenario"]
  },
  {
    id: "1.3-014",
    domain: 1,
    task: "1.3",
    front: "'Cannot leave on-premises until next year (regulation)' - which strategy?",
    back: "Retain: keep it on-premises for now with a revisit date. Hybrid architecture naturally results while the rest migrates.",
    tags: ["retain", "scenario", "hybrid"]
  },
  {
    id: "1.3-015",
    domain: 1,
    task: "1.3",
    front: "'Assessment found 12% of the app portfolio has no users' - which strategy?",
    back: "Retire: decommission them. Discovery's dividend - eliminating unused applications reduces the migration scope and cost immediately.",
    tags: ["retire", "scenario"]
  },
  {
    id: "1.3-016",
    domain: 1,
    task: "1.3",
    front: "Why do migrations often rehost first and optimize later?",
    back: "It sequences risk: get out of the data center quickly with minimal change, then right-size, replatform, and refactor incrementally where changes are cheaper and lower-risk - 'modernize later' beats refactor-everything-first.",
    tags: ["sequencing", "rehost", "strategy"]
  },
  {
    id: "1.4-001",
    domain: 1,
    task: "1.4",
    front: "What does a TCO analysis compare?",
    back: "The full on-premises cost stack - hardware purchase and refresh, facilities, power, cooling, physical security, network, admin staff, licenses - against the AWS bill plus the customer-side costs that remain. A data-driven per-workload comparison, not a blanket 'cloud is cheaper.'",
    tags: ["tco", "economics"]
  },
  {
    id: "1.4-002",
    domain: 1,
    task: "1.4",
    front: "Which on-premises cost lines disappear entirely after migration?",
    back: "Facility-level lines: data center floor space, power, cooling, physical security, and hardware refresh cycles - all become AWS's operating costs, visible only as unit pricing.",
    tags: ["tco", "migration economics"]
  },
  {
    id: "1.4-003",
    domain: 1,
    task: "1.4",
    front: "Which costs do NOT go away when you migrate?",
    back: "Application development, business functions, and often software licenses (unless BYOL applies). Staff hours for infrastructure shrink with managed services but data/application/architecture work remains.",
    tags: ["tco"]
  },
  {
    id: "1.4-004",
    domain: 1,
    task: "1.4",
    front: "Why can RDS be cheaper overall than raw EC2 despite a higher hourly rate?",
    back: "Fully loaded TCO: RDS absorbs patching, backups, replication, and failover engineering - avoided labor frequently outweighs the rate difference, and scarce expertise is freed for higher-value work.",
    tags: ["managed services", "tco"]
  },
  {
    id: "1.4-005",
    domain: 1,
    task: "1.4",
    front: "What is capital efficiency in the cloud context?",
    back: "Money that would sit in depreciating hardware is freed for product development, hiring, and expansion - and on-demand access means a failed initiative costs only the resources it actually consumed.",
    tags: ["capex", "capital efficiency"]
  },
  {
    id: "1.4-006",
    domain: 1,
    task: "1.4",
    front: "Right-sizing - what is it and when is it applied?",
    back: "Matching instance size to actual workload - the highest-yield first optimization, because lift-and-shifted workloads are typically over-sized. An 8%-CPU-around-the-clock fleet is the canonical signal.",
    tags: ["right-sizing", "cost optimization"]
  },
  {
    id: "1.4-007",
    domain: 1,
    task: "1.4",
    front: "Which pricing model for a steady 24/7 baseline? For interruptible nightly batch? For spiky unpredictable work?",
    back: "Steady baseline: Reserved Instances / Savings Plans (1- or 3-year commitment, up to ~72% off). Interruptible fault-tolerant batch: Spot (up to ~90% off). Spiky unpredictable: On-Demand with Auto Scaling.",
    tags: ["pricing models", "ri", "savings plans", "spot"]
  },
  {
    id: "1.4-008",
    domain: 1,
    task: "1.4",
    front: "Spot Instances - what are they for, and what must the workload tolerate?",
    back: "Interruptible, fault-tolerant, flexible workloads (batch, CI, rendering, stateless workers) at up to ~90% off On-Demand - the workload must tolerate interruption and checkpoint/resume.",
    tags: ["spot", "pricing models"]
  },
  {
    id: "1.4-009",
    domain: 1,
    task: "1.4",
    front: "How does storage tiering cut S3 cost?",
    back: "Lifecycle rules transition aging objects from Standard into Infrequent Access and Glacier classes - cost falls while every object remains retrievable; the access pattern drives the class.",
    tags: ["storage tiering", "s3", "lifecycle"]
  },
  {
    id: "1.4-010",
    domain: 1,
    task: "1.4",
    front: "License-included vs BYOL?",
    back: "License-included: the license cost (Windows Server, SQL Server, Oracle) is bundled in the hourly rate. BYOL: reuse licenses the company already owns where licensing terms permit, lowering run cost - a standard TCO input for Microsoft-heavy estates.",
    tags: ["licensing", "byol"]
  },
  {
    id: "1.4-011",
    domain: 1,
    task: "1.4",
    front: "What is the AWS Free Tier's role in economics?",
    back: "An exploration on-ramp: certain services free for 12 months, some always-free within limits, short-term trials. It supports first experiments - it is not a production pricing plan.",
    tags: ["free tier"]
  },
  {
    id: "1.4-012",
    domain: 1,
    task: "1.4",
    front: "Why is cost visibility an economics lever, not accounting?",
    back: "Seeing who uses what and when (tags, account structure, cost allocation) turns the bill into a tuning dashboard: teams that see their own spend right-size and clean up - the accountability effect drives real savings.",
    tags: ["cost visibility", "tagging", "governance"]
  },
  {
    id: "1.4-013",
    domain: 1,
    task: "1.4",
    front: "What does the AWS Pricing Calculator do?",
    back: "Models an architecture's service-by-service cost and compares designs BEFORE deploying - estimation before commitment, complementing visibility tools (Cost Explorer) after deployment.",
    tags: ["pricing calculator", "estimation"]
  },
  {
    id: "1.4-014",
    domain: 1,
    task: "1.4",
    front: "Serverless (Lambda) economics - why does it fit variable workloads?",
    back: "You pay per request and per millisecond of execution with zero idle cost: no traffic means no charge, so cost tracks usage exactly - the extreme form of the consumption model.",
    tags: ["lambda", "serverless", "economics"]
  },
  {
    id: "1.4-015",
    domain: 1,
    task: "1.4",
    front: "Which two effects compound when you right-size AND pay per use?",
    back: "Unit price drops (smaller/managed resources) AND volume consumed drops (elasticity removes idle) - the savings multiply rather than add, which is why cloud economics beats a simple rate comparison.",
    tags: ["utilization", "economics"]
  },
  {
    id: "1.4-016",
    domain: 1,
    task: "1.4",
    front: "The portfolio pattern for pricing models?",
    back: "Commit the flat baseline (Reserved Instances/Savings Plans), let Auto Scaling On-Demand absorb spikes, and bid Spot for interruptible batch - each model matched to the demand shape it serves.",
    tags: ["pricing models", "strategy"]
  }
);
