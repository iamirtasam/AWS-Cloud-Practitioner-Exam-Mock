window.QBANK = window.QBANK || [];
window.QBANK.push(
  {
    id: "1.2-001",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "easy",
    stem: "What is the AWS Well-Architected Framework?",
    options: [
      "A compliance law that AWS customers must obey",
      "A set of best practices and guiding questions - organized into pillars - for evaluating and improving cloud architectures",
      "A certification required before using any AWS service",
      "A physical inspection program for data centers"
    ],
    answer: [1],
    explanation: "The Well-Architected Framework is AWS's codified set of design best practices, organized into six pillars, with questions you can ask of any workload to find improvement areas. It is guidance, not law or a gate - and it is the source of nearly every 'design principle' question in this task.",
    rationales: [
      "It is advisory guidance, not legislation.",
      "",
      "No certification gates service usage; it is a design tool.",
      "It contains no physical inspections - it is a framework of principles."
    ],
    services: [],
    tags: ["well-architected", "framework"]
  },
  {
    id: "1.2-002",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "easy",
    stem: "Which list names the six pillars of the Well-Architected Framework?",
    options: [
      "Cost optimization, sustainability, reliability, security, operational excellence, performance efficiency",
      "Compute, storage, databases, networking, security, analytics",
      "Planning, building, testing, deploying, monitoring, retiring",
      "Agile, DevOps, ITIL, Lean, Six Sigma, Kanban"
    ],
    answer: [0],
    explanation: "The six pillars: operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability (added in 2021). The other lists are service categories, lifecycle phases, and methodology names - familiar distractors.",
    rationales: [
      "",
      "That is a list of service families from Domain 3.",
      "That is a generic project lifecycle.",
      "Those are process methodologies, not Well-Architected pillars."
    ],
    services: [],
    tags: ["well-architected", "pillars"]
  },
  {
    id: "1.2-003",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "medium",
    stem: "Which pillar focuses on running and monitoring systems effectively, continuously improving processes, and managing operations as code?",
    options: [
      "Cost optimization",
      "Sustainability",
      "Operational excellence",
      "Reliability"
    ],
    answer: [2],
    explanation: "Operational excellence covers the ability to run workloads effectively: operations as code, small reversible changes, refined procedures, and learning from failures. Runbooks, runbooks-as-code, and post-incident reviews live here.",
    rationales: [
      "Cost optimization is about spending efficiently on resources.",
      "Sustainability minimizes environmental impact.",
      "",
      "Reliability is about recovery and meeting demand."
    ],
    services: [],
    tags: ["well-architected", "operational excellence"]
  },
  {
    id: "1.2-004",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "medium",
    stem: "Which pillar addresses protecting information, systems, and assets through risk assessments and mitigation strategies?",
    options: [
      "Performance efficiency",
      "Reliability",
      "Operational excellence",
      "Security"
    ],
    answer: [3],
    explanation: "The security pillar covers identity and access management, detection, infrastructure protection, data protection, and incident response - the 'are you protecting your data and systems' pillar, connecting directly to Domain 2 content.",
    rationales: [
      "Performance efficiency is about using the right resource types and sizes.",
      "Reliability is about availability and recovery.",
      "Operational excellence is about running and improving operations.",
      ""
    ],
    services: [],
    tags: ["well-architected", "security"]
  },
  {
    id: "1.2-005",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "medium",
    stem: "Which pillar is about a workload recovering from failures and meeting demand, including testing recovery procedures and managing change?",
    options: [
      "Reliability",
      "Cost optimization",
      "Sustainability",
      "Performance efficiency"
    ],
    answer: [0],
    explanation: "Reliability: recover from failure, meet demand, distribute across AZs/Regions, automatic recovery, and tested DR procedures. The tell phrases are 'recover', 'failure', and 'meet demand'.",
    rationales: [
      "",
      "Cost optimization targets spend efficiency.",
      "Sustainability targets environmental impact.",
      "Performance efficiency targets resource type and size selection."
    ],
    services: [],
    tags: ["well-architected", "reliability"]
  },
  {
    id: "1.2-006",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "medium",
    stem: "A team regularly re-evaluates instance types and adopts serverless for variable workloads to use computing resources more effectively. Which pillar does this serve?",
    options: [
      "Security",
      "Performance efficiency",
      "Operational excellence",
      "Reliability"
    ],
    answer: [1],
    explanation: "Performance efficiency is about using the right resource types and sizes for the workload - and changing them easily as requirements evolve. Serverless for spiky workloads and experimenting with instance families are its textbook moves.",
    rationales: [
      "Security governs protection, not resource selection.",
      "",
      "Operational excellence governs process and operations quality.",
      "Reliability governs recovery and demand satisfaction."
    ],
    services: [],
    tags: ["well-architected", "performance efficiency"]
  },
  {
    id: "1.2-007",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "medium",
    stem: "Which pillar is about avoiding unnecessary costs - right-sizing resources, adjusting to demand, and spotting spending that delivers no value?",
    options: [
      "Cost optimization",
      "Security",
      "Reliability",
      "Sustainability"
    ],
    answer: [0],
    explanation: "Cost optimization: pay only for what you need, when you need it - right-sizing, elasticity, choosing the right pricing model, and measuring overall efficiency. 'Unneeded cost' phrasing points here.",
    rationales: [
      "",
      "Security protects systems and data.",
      "Reliability delivers availability and recovery.",
      "Sustainability overlaps with efficiency but targets environmental impact."
    ],
    services: [],
    tags: ["well-architected", "cost optimization"]
  },
  {
    id: "1.2-008",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "easy",
    stem: "Which pillar focuses on minimizing the environmental impact of running cloud workloads?",
    options: [
      "Cost optimization",
      "Operational excellence",
      "Reliability",
      "Sustainability"
    ],
    answer: [3],
    explanation: "Sustainability - the newest pillar - addresses long-term environmental consequences: efficient utilization, right-sizing, managed services that share infrastructure, and Region selection. On AWS's shared platform, higher utilization per server means less energy per unit of work.",
    rationales: [
      "Cost optimization targets money; sustainability targets impact - they often align but differ in goal.",
      "Operational excellence is process quality.",
      "Reliability is availability and recovery.",
      ""
    ],
    services: [],
    tags: ["well-architected", "sustainability"]
  },
  {
    id: "1.2-009",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "medium",
    stem: "A design principle says to test systems at production scale. Why is this practical in the cloud?",
    options: [
      "Because production-scale test environments are rented temporarily and cheaply, instead of permanently duplicating hardware",
      "Because testing is legally free in the cloud",
      "Because the cloud prohibits testing at smaller scales",
      "Because production data never needs protection in test environments"
    ],
    answer: [0],
    explanation: "On-premises, a production-scale test rig means buying and housing duplicate hardware. In the cloud, you provision a prod-like environment, run the test, and delete it - paying only for the hours. Pay-as-you-go turns an impractical test into a routine one.",
    rationales: [
      "",
      "Testing costs money; it is temporary, not free.",
      "The cloud enables all scales; nothing prohibits smaller tests.",
      "Test data protection still matters - sanitize or synthesize it."
    ],
    services: [],
    tags: ["design principles", "testing"]
  },
  {
    id: "1.2-010",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "medium",
    stem: "How does infrastructure as code make architectural experimentation easier?",
    options: [
      "It freezes architectures so they can never change",
      "Environments can be created, modified, and torn down automatically and identically - so trying an architecture is a script run, not a project",
      "It converts all applications to a single language",
      "It removes the need for any testing"
    ],
    answer: [1],
    explanation: "IaC turns an architecture into a versioned artifact: spin up an experiment, measure it, keep or delete it - identical every time. Automation of provisioning is the design principle 'automate to make architectural experimentation easier'.",
    rationales: [
      "The opposite: IaC makes change safe and repeatable, which encourages evolution.",
      "",
      "Languages are unrelated to infrastructure templating.",
      "Testing remains essential; IaC just makes test environments cheap."
    ],
    services: [],
    tags: ["iac", "design principles"]
  },
  {
    id: "1.2-011",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "hard",
    stem: "A redesign replaces direct synchronous calls between services with a message queue between them, so one service's outage no longer cascades. Which design principle does this implement?",
    options: [
      "Data sovereignty",
      "Five-year capacity planning",
      "Loose coupling",
      "Manual deployment"
    ],
    answer: [2],
    explanation: "Loose coupling means components interact through interfaces (queues, events, APIs) rather than tight direct dependencies, so failures and changes stay localized. Queues and events are its standard building blocks on AWS (SQS, SNS, EventBridge).",
    rationales: [
      "Sovereignty is about legal data location.",
      "Capacity planning forecasts are what loose-coupled elastic designs make less critical.",
      "",
      "Manual deployment is an anti-pattern, not a design principle."
    ],
    services: [],
    tags: ["loose coupling", "design principles"]
  },
  {
    id: "1.2-012",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "medium",
    stem: "What does the principle \"design for failure\" instruct teams to do?",
    options: [
      "Pretend failures cannot happen to reduce anxiety",
      "Blame the engineer nearest the incident",
      "Design components so failures never occur at all",
      "Assume components WILL fail, and build automation - multi-AZ, health checks, retries, backups - so the system survives it"
    ],
    answer: [3],
    explanation: "Hardware fails, networks glitch, software has bugs - the principle accepts this and designs recovery in: redundancy across AZs, automatic detection and replacement, graceful degradation. On AWS the tooling for this is cheap and built in.",
    rationales: [
      "Denial is the opposite of the principle.",
      "Blame culture is not an architectural strategy.",
      "Preventing every failure forever is impossible; surviving failures is the goal.",
      ""
    ],
    services: [],
    tags: ["design principles", "reliability"]
  },
  {
    id: "1.2-013",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "easy",
    stem: "What is the difference between scaling out and scaling up?",
    options: [
      "Scaling out adds more instances (horizontal); scaling up increases the size of one instance (vertical)",
      "Scaling out shrinks instances; scaling up removes them",
      "Scaling up adds more instances; scaling out makes one instance bigger",
      "They are identical terms with different spellings"
    ],
    answer: [0],
    explanation: "Scale out = more of the same (add instances behind a load balancer); scale up = a bigger single instance (more vCPU/RAM). Cloud architecture favors scaling out because it is incremental, automatable, and avoids the ceiling of ever-larger single machines.",
    rationales: [
      "",
      "Directions are reversed and removal invented.",
      "The terms are swapped here.",
      "Distinct strategies with different tradeoffs."
    ],
    services: [],
    tags: ["scaling", "terminology"]
  },
  {
    id: "1.2-014",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "medium",
    stem: "A monolithic application is refactored into independently deployable microservices. What architectural benefit does this deliver?",
    options: [
      "All services must be updated together forever",
      "Each service can be scaled, updated, and failed independently, improving resilience and agility",
      "The application becomes impossible to test",
      "The monolith becomes cheaper by using no servers at all"
    ],
    answer: [1],
    explanation: "Microservices split a system along service boundaries: teams deploy independently, hot services scale independently, and one service's failure is contained. This is 'allow architectures to evolve' and loose coupling applied to application structure.",
    rationales: [
      "Joint updates are the monolith property being removed.",
      "",
      "Testing becomes more granular, not impossible.",
      "Serverless is an implementation choice; microservices is a structure - they are independent ideas."
    ],
    services: [],
    tags: ["microservices", "loose coupling"]
  },
  {
    id: "1.2-015",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "medium",
    stem: "What is a \"game day\" in Well-Architected practice?",
    options: [
      "A scheduled hardware upgrade window",
      "The annual corporate sports event",
      "A planned exercise where teams simulate failures or attacks to test how their systems and people actually respond",
      "The first day of a product launch"
    ],
    answer: [2],
    explanation: "Game days inject controlled failure (kill an AZ, exhaust a dependency) to validate recovery procedures and reveal gaps while stakes are low. 'Improve through game days' is the named design principle.",
    rationales: [
      "Upgrades are maintenance, not failure rehearsal.",
      "Not that kind of game.",
      "",
      "Launch day is when you want game-day lessons already learned."
    ],
    services: [],
    tags: ["game days", "operational excellence"]
  },
  {
    id: "1.2-016",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "medium",
    stem: "What does \"drive architectures using data\" mean as a design principle?",
    options: [
      "Store all data in one giant database",
      "Base architectural decisions on measurements and evidence - metrics, load tests, cost data - rather than assumptions",
      "Let marketing choose the architecture",
      "Encrypt data at every layer"
    ],
    answer: [1],
    explanation: "Decisions grounded in data: measure actual load instead of guessing it, test before committing, track costs against expectations. It pairs naturally with the elasticity principle - the cloud generates the telemetry that replaces assumptions.",
    rationales: [
      "One giant database is an anti-pattern, not a principle.",
      "",
      "Architecture follows engineering evidence; stakeholders set requirements.",
      "Encryption is a security control, unrelated to this principle."
    ],
    services: [],
    tags: ["design principles", "data-driven"]
  },
  {
    id: "1.2-017",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "easy",
    stem: "\"Are you appropriately protecting your data?\" is a guiding question for which pillar?",
    options: [
      "Security",
      "Performance efficiency",
      "Cost optimization",
      "Sustainability"
    ],
    answer: [0],
    explanation: "Data protection - encryption, access control, backup - sits in the security pillar, whose questions all revolve around protecting systems, assets, and information with appropriate detection and response.",
    rationales: [
      "",
      "Performance questions ask about the right resource types, not data protection.",
      "Cost questions ask about spend efficiency.",
      "Sustainability questions ask about environmental impact."
    ],
    services: [],
    tags: ["well-architected", "security"]
  },
  {
    id: "1.2-018",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "medium",
    stem: "Running operations as code, using runbooks, and learning from post-incident reviews belong to which pillar?",
    options: [
      "Operational excellence",
      "Reliability",
      "Sustainability",
      "Performance efficiency"
    ],
    answer: [0],
    explanation: "Operational excellence is the 'how we run it' pillar: codified operations, documented and rehearsed procedures, small reversible changes, and continuous improvement through review. Its questions ask about understanding workload health and process maturity.",
    rationales: [
      "",
      "Reliability focuses on failure recovery and demand.",
      "Sustainability focuses on environmental impact.",
      "Performance efficiency focuses on resource selection and efficiency."
    ],
    services: [],
    tags: ["operational excellence"]
  },
  {
    id: "1.2-019",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "hard",
    stem: "What is the main benefit of conducting a Well-Architected review of an existing workload?",
    options: [
      "It certifies the workload as immune to outages",
      "It replaces the need for monitoring or backups",
      "It systematically identifies gaps and improvements - in security, reliability, cost, and more - before they become incidents or budget surprises",
      "It transfers the workload's responsibility to AWS entirely"
    ],
    answer: [2],
    explanation: "A review applies the pillar questions to the real architecture, producing a prioritized improvement plan: weaknesses surface while they are cheap to fix. It provides no immunity, replaces nothing, and never transfers responsibility.",
    rationales: [
      "Nothing certifies immunity from outages.",
      "Monitoring and backups remain fundamental regardless of reviews.",
      "",
      "The shared responsibility model is unchanged by reviews."
    ],
    services: [],
    tags: ["well-architected", "review"]
  },
  {
    id: "1.2-020",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "medium",
    stem: "A design principle favors managed services over self-managed servers where suitable. What is the rationale?",
    options: [
      "Managed services cost more in every case",
      "Managed services remove patching, capacity, and availability work from the team - reducing undifferentiated heavy lifting",
      "Managed services make the application slower by design",
      "Managed services eliminate the need for data protection"
    ],
    answer: [1],
    explanation: "Every layer a managed service absorbs - OS, patching, scaling, availability - is work the team no longer performs, and work AWS performs at extreme competence and scale. The principle: spend engineering time on what differentiates the business.",
    rationales: [
      "Total cost is frequently lower when operational labor is counted.",
      "",
      "Performance is workload-dependent; managed services often outperform self-managed ones.",
      "Data protection duties remain - the shared responsibility model never disappears."
    ],
    services: [],
    tags: ["managed services", "design principles"]
  },
  {
    id: "1.2-021",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "medium",
    stem: "Why do stateless application designs scale out more easily than stateful ones?",
    options: [
      "Because any instance can handle any request without session data stored locally, so instances can be added or removed freely behind a load balancer",
      "Because stateless applications use no memory at all",
      "Because they eliminate the need for a database",
      "Because stateless applications cannot fail"
    ],
    answer: [0],
    explanation: "Statelessness moves session/state data out of the instance (to DynamoDB, ElastiCache, cookies), so instances are interchangeable - Auto Scaling can add or terminate them without losing user sessions. It is the companion design to elastic scaling.",
    rationales: [
      "",
      "Stateless apps still use memory; they just do not keep per-user state locally.",
      "A database (or cache) is typically MORE necessary, to hold the moved state.",
      "All applications can fail; design determines the blast radius."
    ],
    services: [],
    tags: ["scaling", "statelessness"]
  },
  {
    id: "1.2-022",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "easy",
    stem: "\"Stop guessing capacity\" is best implemented with which AWS capability?",
    options: [
      "Spreadsheets of five-year hardware forecasts",
      "Auto Scaling, which adjusts capacity automatically with demand",
      "Buying the largest instances available",
      "Disabling metrics to avoid overthinking"
    ],
    answer: [1],
    explanation: "The principle says capacity should track demand instead of a forecast; Auto Scaling groups plus load metrics are its direct implementation. Oversizing and undersizing both disappear when supply adjusts automatically.",
    rationales: [
      "Spreadsheets of guesses are exactly what the principle retires.",
      "",
      "The largest instances reintroduce waste - sized for a guess again.",
      "Blind spots are the opposite of data-driven design."
    ],
    services: [],
    tags: ["capacity", "auto scaling"]
  },
  {
    id: "1.2-023",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "medium",
    stem: "Which reliability practice uses multiple Availability Zones and automatic failover to keep an application available through facility problems?",
    options: [
      "Deploying the whole system on one host for simplicity",
      "Designing all components to share a single power feed",
      "Distributed system design with no single point of failure and automatic recovery",
      "Waiting for failures and restoring from weekly backups only"
    ],
    answer: [2],
    explanation: "Reliability on AWS is built from distribution (multi-AZ, multi-Region where warranted) plus automation (health checks, failover, self-healing). The system keeps serving through failures rather than waiting for a human to notice.",
    rationales: [
      "One host in one facility is the single point of failure.",
      "Shared power is a correlated failure waiting to happen.",
      "",
      "Manual restore from weekly backups recovers data slowly - it is not availability."
    ],
    services: [],
    tags: ["reliability", "high availability"]
  },
  {
    id: "1.2-024",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "medium",
    stem: "Which action best demonstrates cost optimization as a design activity?",
    options: [
      "Provisioning double capacity forever \"just in case\"",
      "Choosing the most expensive service for every workload",
      "Ignoring bills until the end of the year",
      "Right-sizing instances, using elasticity, and selecting pricing models that fit the workload's usage pattern"
    ],
    answer: [3],
    explanation: "Cost optimization is designed in: match instance size to load (right-sizing), let elasticity remove idle spend, and pick pricing models (On-Demand, Savings Plans, Spot) that fit each workload's pattern. The distractors are the classic wastes it removes.",
    rationales: [
      "Permanent over-provisioning is the textbook cost leak.",
      "Price is a design input, never a substitute for fit.",
      "Ignoring bills forfeits the visibility that optimization needs.",
      ""
    ],
    services: [],
    tags: ["cost optimization"]
  },
  {
    id: "1.2-025",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "hard",
    stem: "A company wants its architecture to evolve smoothly as requirements change over years. Which design approach most directly supports this?",
    options: [
      "Hard-coding components to each other so nothing can change independently",
      "Replacing the entire system with each new requirement",
      "Freezing the architecture and forbidding all updates",
      "Loose coupling - components behind stable interfaces that can be replaced, scaled, or improved independently"
    ],
    answer: [3],
    explanation: "'Allow architectures and systems to evolve' is served by loose coupling: with stable interfaces between components, each part can be modernized, scaled, or rewritten without dragging the whole system along.",
    rationales: [
      "Hard-coding interdependence is the opposite of evolvability.",
      "Full replacement with every change is neither feasible nor economical.",
      "Frozen architectures rot as requirements move.",
      ""
    ],
    services: [],
    tags: ["loose coupling", "evolution"]
  },
  {
    id: "1.2-026",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "medium",
    stem: "Which set of practices serves the sustainability pillar?",
    options: [
      "Running oversized instances 24/7 to look busy",
      "Right-sizing resources, using serverless/managed services for better shared utilization, and minimizing idle capacity",
      "Printing every dashboard daily for archival",
      "Provisioning duplicate hardware for every team regardless of need"
    ],
    answer: [1],
    explanation: "Sustainability improves when the same work runs on fewer, better-utilized resources: right-sizing, elasticity, serverless, and managed services that pool utilization. Fewer wasted cycles mean less energy per unit of work.",
    rationales: [
      "Oversized idle resources waste energy - the opposite of sustainability.",
      "",
      "Printing dashboards is not an environmental strategy.",
      "Duplicated idle hardware multiplies waste."
    ],
    services: [],
    tags: ["sustainability"]
  },
  {
    id: "1.2-027",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "easy",
    stem: "\"Can the workload recover from failure and meet demand?\" asks about which pillar?",
    options: [
      "Cost optimization",
      "Sustainability",
      "Reliability",
      "Security"
    ],
    answer: [2],
    explanation: "Recovery from failure and meeting demand are the reliability pillar's two halves - distribution, automatic recovery, and tested DR are its practices.",
    rationales: [
      "Cost optimization asks about spend efficiency.",
      "Sustainability asks about environmental impact.",
      "",
      "Security asks about protection of systems and data."
    ],
    services: [],
    tags: ["reliability"]
  },
  {
    id: "1.2-028",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "medium",
    stem: "A workload has highly variable traffic. Which performance-efficiency choice fits best?",
    options: [
      "One fixed oversized server sized for the theoretical peak",
      "A fixed minimum deployment that turns users away at peak",
      "Sizing for the average and accepting failures at peak",
      "Serverless or auto-scaling compute that matches capacity to the actual curve"
    ],
    answer: [3],
    explanation: "Performance efficiency says use the right resource type and size for the workload - and for variable traffic, that means capacity that follows the curve: Lambda for spiky event-driven work, or auto-scaled instances behind a load balancer.",
    rationales: [
      "Permanent peak sizing wastes money the rest of the time - a cost issue, and still no guarantee.",
      "Turning users away is an availability failure.",
      "Failing at peak is the exact problem to solve.",
      ""
    ],
    services: [],
    tags: ["performance efficiency", "scaling"]
  },
  {
    id: "1.2-029",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "medium",
    stem: "Automating change management (IaC + pipelines) primarily reduces which operational problems?",
    options: [
      "Manual configuration errors and inconsistent environments - while making changes repeatable and reviewable",
      "The need for any source control",
      "The number of developers required to be zero",
      "All application bugs in production code"
    ],
    answer: [0],
    explanation: "Manual changes drift and err; automated, templated, reviewed changes are identical every time. That is why operations-as-code is central to operational excellence - fewer mistakes, faster recovery, auditable history.",
    rationales: [
      "",
      "Source control becomes MORE important under IaC - it is where the code lives.",
      "Automation improves engineer productivity; it does not target headcount.",
      "Application bugs are a code-quality matter; IaC addresses infrastructure consistency."
    ],
    services: [],
    tags: ["automation", "operational excellence"]
  },
  {
    id: "1.2-030",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "hard",
    stem: "An architecture uses microservices communicating through queues, with each service auto-scaled on its own metrics. Which design principles combine here?",
    options: [
      "Loose coupling (queues) and elasticity (per-service auto scaling)",
      "Tight coupling and fixed capacity",
      "Data sovereignty and multi-factor authentication",
      "Manual deployment and permanent over-provisioning"
    ],
    answer: [0],
    explanation: "Queues decouple the services (loose coupling - failures and load stay localized), and per-service Auto Scaling makes each one elastic. The combination is the modern reference architecture the exam describes in pieces.",
    rationales: [
      "",
      "Both terms are the opposites of what the scenario describes.",
      "Sovereignty and MFA are unrelated to this architectural pattern.",
      "Manual deployment and over-provisioning are the anti-patterns the scenario avoids."
    ],
    services: [],
    tags: ["loose coupling", "elasticity", "capstone"]
  },
  {
    id: "1.2-031",
    domain: 1,
    task: "1.2",
    type: "single",
    difficulty: "medium",
    stem: "Why is production-scale testing usually impractical on-premises but routine in the cloud?",
    options: [
      "Because on-premises hardware is faster than cloud hardware",
      "Because the cloud forbids realistic workloads",
      "Because duplicating production hardware is expensive and sits idle between tests, while cloud environments are provisioned for the test and deleted after",
      "Because production-scale tests require no data preparation"
    ],
    answer: [2],
    explanation: "The blocker on-premises is capital: a production-scale rig means buying, housing, and cooling duplicate hardware that idles between uses. In the cloud the identical environment is rented for the test's duration - pay-as-you-go removes the barrier.",
    rationales: [
      "Hardware speed is comparable and workload-dependent.",
      "No such prohibition exists.",
      "",
      "Data preparation matters everywhere - realistically sized test data is still needed."
    ],
    services: [],
    tags: ["testing", "design principles"]
  },
  {
    id: "1.2-032",
    domain: 1,
    task: "1.2",
    type: "multi",
    difficulty: "easy",
    stem: "Which TWO are pillars of the AWS Well-Architected Framework? (Select TWO.)",
    options: [
      "Agile procurement",
      "Cost optimization",
      "Marketing efficiency",
      "Reliability",
      "Physical fitness"
    ],
    answer: [1, 3],
    explanation: "Cost optimization and reliability are two of the six pillars, alongside operational excellence, security, performance efficiency, and sustainability. The distractors borrow familiar business vocabulary but are not pillars.",
    rationales: [
      "Not a pillar - procurement is a business process.",
      "",
      "Not a pillar - marketing is unrelated to the framework.",
      "",
      "Not a pillar - and not a joke the exam ever makes twice."
    ],
    services: [],
    tags: ["well-architected", "pillars"]
  }
);
