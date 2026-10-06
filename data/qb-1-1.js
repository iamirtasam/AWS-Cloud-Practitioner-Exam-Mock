window.QBANK = window.QBANK || [];
window.QBANK.push(
  {
    id: "1.1-001",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "easy",
    stem: "What does elasticity mean in the context of the AWS Cloud?",
    options: [
      "Data can never be deleted once stored",
      "The network physically stretches between Regions",
      "Resources automatically scale out and in to match demand, so you are not paying for idle capacity",
      "Prices increase as usage grows"
    ],
    answer: [2],
    explanation: "Elasticity is the ability to acquire resources as you need them and release them when you do not - supply tracks demand automatically. It eliminates both over-provisioning (paying for idle hardware) and under-provisioning (turning users away), and it is one of the six headline cloud advantages on the exam.",
    rationales: [
      "Data deletion is a lifecycle question, not elasticity.",
      "Nothing physical stretches; this is a joke option.",
      "",
      "Pricing generally works the other way - the more aggregate usage AWS handles, the lower the pay-as-you-go prices."
    ],
    services: [],
    tags: ["elasticity", "benefits"]
  },
  {
    id: "1.1-002",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "easy",
    stem: "A startup wants to launch a new product without purchasing servers or signing hardware leases. Which cloud advantage applies?",
    options: [
      "Guaranteed zero downtime",
      "Free infrastructure for all startups",
      "Mandatory three-year capacity commitments",
      "Pay-as-you-go - no upfront investment in hardware"
    ],
    answer: [3],
    explanation: "The pay-as-you-go (variable expense) model removes the upfront capital purchase: resources are rented by the second, hour, or request. Combined with on-demand access, a startup can launch with credit card money instead of a hardware procurement cycle.",
    rationales: [
      "No uptime is ever guaranteed to be perfect; SLAs set targets.",
      "There is no blanket free infrastructure; there is a Free Tier, but that is a different thing.",
      "On-demand access specifically avoids commitment requirements.",
      ""
    ],
    services: [],
    tags: ["pay as you go", "benefits"]
  },
  {
    id: "1.1-003",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "easy",
    stem: "Why do massive aggregate cloud usage levels benefit individual customers?",
    options: [
      "They allow AWS to achieve economies of scale, passing lower pay-as-you-go prices on to customers",
      "They force every customer onto identical hardware",
      "They make individual customers' usage irrelevant to pricing",
      "They raise prices as more customers join"
    ],
    answer: [1],
    explanation: "Economies of scale: because AWS buys power, hardware, and bandwidth for millions of customers at once, its per-unit costs are far below any single company's, and cloud pricing lets customers share in that scale - 'achieve lower variable costs than you can get on your own'.",
    rationales: [
      "Hardware is standardized internally, but that is not the customer-facing benefit.",
      "",
      "Individual usage drives individual cost - but at a lower unit price thanks to scale.",
      "Scale has historically pushed cloud prices down, not up."
    ],
    services: [],
    tags: ["economies of scale", "benefits"]
  },
  {
    id: "1.1-004",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "medium",
    stem: "An on-premises team must size its servers years in advance, often buying for a peak that may never arrive. Which AWS Cloud advantage directly addresses this?",
    options: [
      "\"Stop guessing capacity\" - provision what you need when you need it, scaling automatically",
      "\"Unlimited free storage\"",
      "\"Elimination of all security responsibilities\"",
      "\"Permanent price freezes\""
    ],
    answer: [0],
    explanation: "'Stop guessing capacity' is the advantage name for exactly this pain: instead of committing to a hardware forecast years ahead, cloud workloads scale with real demand. Over-provisioning wastes money; under-provisioning loses customers - elasticity removes the guess.",
    rationales: [
      "",
      "No such advantage exists; storage is pay-as-you-go, not free.",
      "Security responsibilities shift, not disappear - the shared responsibility model still applies.",
      "Prices change, and reserved commitments exist for those who want them."
    ],
    services: [],
    tags: ["capacity", "benefits"]
  },
  {
    id: "1.1-005",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "easy",
    stem: "Which cloud capability lets an application survive the failure of an entire data center facility?",
    options: [
      "Deploying across multiple Availability Zones",
      "Using larger instance sizes",
      "Storing everything on instance store volumes",
      "Disabling all monitoring to reduce noise"
    ],
    answer: [0],
    explanation: "Availability Zones are isolated facilities within a Region; deploying across multiple AZs means one facility's failure does not take the application down. This is the architectural basis of high availability on AWS, and cheaper than building a second physical data center yourself.",
    rationales: [
      "",
      "Bigger instances raise capacity in one place - a bigger single point of failure.",
      "Instance store is ephemeral storage that dies with the host - the opposite of resilient.",
      "Monitoring is how you detect failures; disabling it helps no one."
    ],
    services: [],
    tags: ["high availability", "availability zones"]
  },
  {
    id: "1.1-006",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "medium",
    stem: "What does \"increased speed and agility\" mean as a cloud benefit?",
    options: [
      "Network packets travel faster than light",
      "Cloud storage is faster than all local disks",
      "AWS employees work around the clock",
      "New resources are available in minutes, so teams can experiment, fail cheaply, and iterate quickly"
    ],
    answer: [3],
    explanation: "Speed and agility are about time-to-resource: weeks of procurement become minutes of API calls. Cheap, fast provisioning lowers the cost of experimentation - try the idea, delete it if it fails - which accelerates innovation overall.",
    rationales: [
      "Physics still applies.",
      "Storage performance is a workload-by-workload comparison, not the benefit in question.",
      "Support coverage is unrelated to this advantage.",
      ""
    ],
    services: [],
    tags: ["agility", "benefits"]
  },
  {
    id: "1.1-007",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "medium",
    stem: "Moving to the cloud converts which kind of expense into which?",
    options: [
      "Operational expense into capital expense",
      "Capital expense (buying data centers) into operational expense (paying only for what is used)",
      "Both into tax write-offs automatically",
      "Variable expense into fixed long-term debt"
    ],
    answer: [1],
    explanation: "The classic capex-to-opex shift: instead of capital purchases - buildings, servers, upfront licenses - cloud spending is operational, usage-based, and stops when usage stops. This is one of the six named cloud advantages and a favorite exam definition.",
    rationales: [
      "Exactly reversed.",
      "",
      "Tax treatment depends on jurisdiction and accounting rules - not a cloud mechanism.",
      "Cloud increases optionality; it does not convert spending into fixed debt."
    ],
    services: [],
    tags: ["capex", "opex", "economics"]
  },
  {
    id: "1.1-008",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "easy",
    stem: "A company wants to serve users in Asia, Europe, and the Americas with low latency. Which advantage of the AWS global footprint applies?",
    options: [
      "Go global in minutes - deploy into multiple Regions around the world with a few clicks",
      "All users automatically connect to the nearest continent's users",
      "Content teleports between data centers",
      "Latency is legally capped worldwide"
    ],
    answer: [0],
    explanation: "'Go global in minutes' is the named advantage: the worldwide Regions exist already, so multi-Region deployment is a configuration task rather than a construction project. Applications replicate or deploy into Regions near their users for lower latency and better experience.",
    rationales: [
      "",
      "Routing follows network engineering, not continent-hopping users.",
      "No teleporting - real network paths carry real packets.",
      "Latency obeys physics; only proximity and infrastructure improve it."
    ],
    services: [],
    tags: ["global reach", "benefits"]
  },
  {
    id: "1.1-009",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "medium",
    stem: "What does \"trade fixed expense for variable expense\" mean in practice for a company adopting AWS?",
    options: [
      "Bills become unpredictable by design",
      "Fixed costs are renamed on invoices",
      "Instead of large fixed investments in hardware regardless of use, the company pays variable amounts tied to actual consumption",
      "The company must spend the same amount every month"
    ],
    answer: [2],
    explanation: "The fixed-to-variable trade is the spending model change: fixed expense = big upfront purchases that run whether used or not; variable expense = costs that track actual usage and shrink when it shrinks. It aligns cost with value received.",
    rationales: [
      "Bills track usage, which is exactly what makes them predictable relative to business activity.",
      "This is an accounting-model change, not an invoicing rename.",
      "",
      "The point is the opposite: spending flexes with usage."
    ],
    services: [],
    tags: ["economics", "benefits"]
  },
  {
    id: "1.1-010",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "medium",
    stem: "Which statement correctly captures the economies-of-scale benefit as the exam phrases it?",
    options: [
      "\"Every customer receives a dedicated data center\"",
      "\"Pricing is identical whether you use one server or one million\"",
      "\"Cloud costs are always zero for the first year\"",
      "\"You achieve lower variable costs than you can get on your own, because usage from hundreds of thousands of customers is aggregated in the cloud\""
    ],
    answer: [3],
    explanation: "This is the guide's own phrasing of the economies-of-scale advantage: aggregated buying power lowers per-unit costs, and pay-as-you-go pricing passes those savings to customers of every size.",
    rationales: [
      "Dedicated data centers are what the cloud model avoids.",
      "Volume discounts and commitment pricing exist precisely because scale matters.",
      "A Free Tier exists, but universal free first years do not.",
      ""
    ],
    services: [],
    tags: ["economies of scale"]
  },
  {
    id: "1.1-011",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "medium",
    stem: "A retailer's traffic multiplies twenty-fold during holiday sales and returns to normal in January. Which cloud characteristic handles this best?",
    options: [
      "Elasticity - scale out for the peak, scale in afterward, paying for the extra capacity only while it runs",
      "Buying permanent hardware sized for the holiday peak",
      "Turning away customers above a fixed capacity ceiling",
      "Manually reinstalling servers each November"
    ],
    answer: [0],
    explanation: "This is the elasticity scenario in its purest form: demand spikes are absorbed by automatic scaling, and the capacity (and cost) disappears when the spike ends. On-premises, the retailer would buy peak-sized hardware that idles ten months a year.",
    rationales: [
      "",
      "Peak-sized permanent hardware is the classic waste the cloud eliminates.",
      "Capping capacity means lost sales at exactly the wrong moment.",
      "Manual reinstallation is slow, error-prone, and still needs the hardware owned."
    ],
    services: [],
    tags: ["elasticity", "scenarios"]
  },
  {
    id: "1.1-012",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "easy",
    stem: "Which advantage lets a company's engineers concentrate on customers rather than infrastructure?",
    options: [
      "AWS operates the undifferentiated heavy lifting - hardware, power, facilities - so teams focus on their products",
      "AWS writes the company's application code",
      "Infrastructure work is transferred to the company's customers",
      "Engineers are no longer needed at all"
    ],
    answer: [0],
    explanation: "'Stop spending money running and maintaining data centers' is the named advantage: racking servers, power contracts, hardware refreshes, and cooling are AWS's job, freeing the customer's engineers for application and business work - the differentiators that actually compete.",
    rationales: [
      "",
      "AWS never writes customer applications - and the shared responsibility model keeps code with the customer.",
      "Customers' customers are not involved in operating infrastructure.",
      "Engineering talent shifts focus; it does not vanish."
    ],
    services: [],
    tags: ["benefits", "focus"]
  },
  {
    id: "1.1-013",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "medium",
    stem: "A video service suffers complaints from overseas users about slow playback. Which approach uses the AWS global footprint to improve their experience?",
    options: [
      "Telling overseas users to move closer to the data center",
      "Increasing the video bitrate for everyone uniformly",
      "Deploying the application in a Region near those users and caching content at edge locations",
      "Shipping hard drives to users' homes"
    ],
    answer: [2],
    explanation: "Proximity fixes latency: deploying in a nearby Region moves compute closer to users, and CloudFront's edge locations move content even closer. Both are practical because the global infrastructure already exists - no construction project required.",
    rationales: [
      "User relocation is not a scaling strategy.",
      "Raising bitrate worsens slow connections; it does not shorten the path.",
      "",
      "Bulk data transfer devices move large datasets INTO AWS; they are not a user-facing latency fix."
    ],
    services: ["Amazon CloudFront"],
    tags: ["global reach", "latency"]
  },
  {
    id: "1.1-014",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "medium",
    stem: "How does the cloud change the cost of failed experiments for a development team?",
    options: [
      "Failed experiments must be escalated to the board",
      "Failure is impossible on AWS",
      "Failures incur permanent hardware purchases that must be written off",
      "Experiments cost only the minutes of resources they actually consumed, so failure is cheap and learning is fast"
    ],
    answer: [3],
    explanation: "Because resources are rented by the minute and provisioned in minutes, a failed experiment's cost is the compute it actually used - then it is deleted. This is the speed-and-agility benefit applied to innovation: cheap failure accelerates iteration.",
    rationales: [
      "Escalation processes are organizational, not a property of cloud economics.",
      "Experiments still fail - the point is that failing is cheap.",
      "No hardware is purchased at all in this model.",
      ""
    ],
    services: [],
    tags: ["agility", "economics"]
  },
  {
    id: "1.1-015",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "easy",
    stem: "Which on-premises burdens disappear when a company adopts cloud infrastructure?",
    options: [
      "Writing application code and designing features",
      "Training employees and setting strategy",
      "Understanding its own customers and market",
      "Racking and stacking servers, power and cooling contracts, and hardware refresh cycles"
    ],
    answer: [3],
    explanation: "The physical infrastructure burden - procurement, installation, power, cooling, cabling, refresh cycles - transfers to AWS. Everything the company actually competes on (code, people, strategy, customer knowledge) remains its own.",
    rationales: [
      "Application work stays with the customer - that is the point of the shift.",
      "People and strategy are the company's core, untouched by cloud adoption.",
      "Market knowledge is the differentiator the cloud frees teams to pursue.",
      ""
    ],
    services: [],
    tags: ["benefits", "focus"]
  },
  {
    id: "1.1-016",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "medium",
    stem: "What is the difference between elasticity and scalability?",
    options: [
      "They are unrelated - one is about networking, the other about databases",
      "Elasticity automatically adds and removes resources to match demand in real time; scalability is the broader ability of a system to handle growth",
      "Scalability means shrinking automatically; elasticity means growing permanently",
      "Elasticity applies only to storage; scalability applies only to compute"
    ],
    answer: [1],
    explanation: "Scalability is the property of being able to handle more load; elasticity is the automatic, demand-tracking behavior that scales resources out AND in. A scalable system can grow; an elastic system grows and shrinks on its own as demand changes.",
    rationales: [
      "Both are compute/capacity concepts, closely related by design.",
      "",
      "The growth/shrink directions are swapped and the permanence is invented.",
      "Both apply across compute, storage, and databases."
    ],
    services: [],
    tags: ["elasticity", "scalability", "terminology"]
  },
  {
    id: "1.1-017",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "hard",
    stem: "A company's on-premises servers run at 15% average utilization because they were bought for worst-case peaks. Moving to AWS, which combination fixes this?",
    options: [
      "Keeping the same servers in the AWS parking lot",
      "Buying even larger servers to be safer",
      "Right-sized cloud resources with Auto Scaling, so capacity tracks real demand instead of worst-case guesses",
      "Running all workloads on one giant instance to reduce waste"
    ],
    answer: [2],
    explanation: "Chronic over-provisioning is the 'guessing capacity' disease: hardware sized for the worst case idles the rest of the time. Cloud resources sized to real demand, scaling up and down automatically, convert that idle capital into pay-per-use cost.",
    rationales: [
      "Co-locating the same oversized servers changes nothing about utilization.",
      "Larger servers deepen the waste.",
      "",
      "One giant instance concentrates risk and still runs hot-sized for peaks."
    ],
    services: [],
    tags: ["capacity", "elasticity"]
  },
  {
    id: "1.1-018",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "medium",
    stem: "A team that once waited six weeks for server procurement now provisions identical environments from templates in minutes. Which benefit does this illustrate?",
    options: [
      "Instant hardware manufacturing",
      "Free environments forever",
      "Automatic code generation",
      "Increased speed and agility through on-demand, codified infrastructure"
    ],
    answer: [3],
    explanation: "Infrastructure as code plus on-demand provisioning collapses procurement time from weeks to minutes - the speed-and-agility advantage in its most tangible form, and the reason experimentation cycles shrink.",
    rationales: [
      "No hardware is being manufactured; it is being rented from existing stock.",
      "Environments are pay-as-you-go, not free.",
      "Templates provision infrastructure; they do not write application logic.",
      ""
    ],
    services: [],
    tags: ["agility", "iac"]
  },
  {
    id: "1.1-019",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "easy",
    stem: "Which billing model is fundamental to cloud economics on AWS?",
    options: [
      "Pay only for the resources you consume, when you consume them",
      "A flat fee regardless of usage",
      "Payment per employee seat",
      "One upfront payment for lifetime access"
    ],
    answer: [0],
    explanation: "Pay-as-you-go is the foundation: cost tracks consumption, which is what makes elasticity economically meaningful and converts capex to opex. The other models describe unrelated licensing patterns.",
    rationales: [
      "",
      "Flat fees contradict the usage-based model.",
      "Per-seat pricing belongs to some SaaS products, not AWS infrastructure.",
      "Lifetime upfront purchase is the on-premises model the cloud replaces."
    ],
    services: [],
    tags: ["pay as you go", "economics"]
  },
  {
    id: "1.1-020",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "medium",
    stem: "How does the on-demand model reduce risk for a new business initiative?",
    options: [
      "It eliminates taxes on the initiative",
      "It prevents all technical debt",
      "It guarantees the initiative will succeed",
      "Capacity can be acquired when needed and released without penalty, so the initiative is not trapped by upfront commitments if it does not take off"
    ],
    answer: [3],
    explanation: "On-demand access means no long-term hardware commitment stands behind the bet: scale up if it works, delete if it does not. The financial risk of the initiative shrinks to the resources actually consumed.",
    rationales: [
      "Tax outcomes are unaffected by the on-demand model.",
      "Technical debt is an engineering discipline issue.",
      "Nothing guarantees success; on-demand only cheapens the attempt.",
      ""
    ],
    services: [],
    tags: ["on-demand", "economics"]
  },
  {
    id: "1.1-021",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "medium",
    stem: "On-premises, a company refreshes its servers every five years, with planning and outages each cycle. What happens to this burden on AWS?",
    options: [
      "The refresh cycle shortens to five months",
      "The customer refreshes AWS's hardware remotely",
      "AWS operates and refreshes the hardware fleet continuously - the customer never performs a refresh",
      "Refresh cycles are abolished by regulation"
    ],
    answer: [2],
    explanation: "Hardware lifecycle is AWS's infrastructure responsibility: fleets are refreshed, maintained, and retired by AWS with no customer involvement. The customer consumes capacity; the machines underneath are invisible.",
    rationales: [
      "The cycle does not transfer to the customer in any form.",
      "Customers cannot and do not manage AWS's hardware.",
      "",
      "No regulation is involved - it is simply part of the managed service."
    ],
    services: [],
    tags: ["benefits", "hardware lifecycle"]
  },
  {
    id: "1.1-022",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "medium",
    stem: "How does the AWS Cloud change the economics of disaster recovery compared with building a second physical data center?",
    options: [
      "DR becomes impossible in the cloud",
      "DR regulations no longer apply to cloud customers",
      "A second data center must still be constructed, at the same cost",
      "DR environments can run in other Regions/AZs on demand, activated or scaled when needed, at a fraction of duplicate-facility cost"
    ],
    answer: [3],
    explanation: "Traditional DR meant owning or renting an idle second facility. In the cloud, the DR site is configuration: data replicated to another Region, infrastructure defined as code, and capacity spun up when disaster strikes - paying for standby rather than a building.",
    rationales: [
      "The cloud makes DR dramatically more accessible, not impossible.",
      "Recovery objectives and compliance still apply; they are met differently.",
      "No physical second site is needed - that is the point.",
      ""
    ],
    services: [],
    tags: ["disaster recovery", "benefits"]
  },
  {
    id: "1.1-023",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "easy",
    stem: "Which statement describes the AWS global infrastructure's role in application performance?",
    options: [
      "It compresses all application data automatically",
      "It upgrades users' home internet connections",
      "It eliminates the need for application optimization",
      "Regions and edge locations worldwide let applications run close to their users, reducing latency"
    ],
    answer: [3],
    explanation: "Performance is largely geography: serving users from a nearby Region - and content from nearby edge locations - cuts round-trip time. The global footprint makes proximity a deployment decision rather than a real-estate project.",
    rationales: [
      "Automatic compression of application data is not a thing.",
      "AWS does not touch the last mile into users' homes.",
      "Applications still need their own optimization; the footprint addresses distance.",
      ""
    ],
    services: [],
    tags: ["global infrastructure", "latency"]
  },
  {
    id: "1.1-024",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "medium",
    stem: "In cloud-adoption language, what does it mean to stop spending time on \"undifferentiated heavy lifting\"?",
    options: [
      "Avoiding physical tasks like installing hardware and patching operating systems, to focus engineering on what differentiates the business",
      "Banning heavy machinery from data centers",
      "Outsourcing all development to AWS",
      "Lifting weights instead of maintaining servers"
    ],
    answer: [0],
    explanation: "Undifferentiated heavy lifting is the infrastructure work every company must do but none competes on: hardware, OS patching, facilities. The cloud absorbs it, redirecting scarce engineering time toward the features that actually differentiate the business.",
    rationales: [
      "",
      "The phrase is metaphorical - and amusing options are usually wrong on this exam.",
      "Development stays with the company; AWS provides the platform.",
      "A joke option - eliminate it immediately."
    ],
    services: [],
    tags: ["benefits", "terminology"]
  },
  {
    id: "1.1-025",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "medium",
    stem: "Which pairing of advantage and its meaning is correct?",
    options: [
      "Trade capital expense for variable expense - buy all servers upfront for five years",
      "Elasticity - capacity matches demand automatically, in and out",
      "Economies of scale - each customer builds and powers its own facility",
      "Go global in minutes - construct new data centers on each continent"
    ],
    answer: [1],
    explanation: "Elasticity is precisely the automatic matching of capacity to demand. The other pairings define the advantage and then attach the opposite meaning - a standard distractor pattern.",
    rationales: [
      "That meaning describes the on-premises model the advantage replaces.",
      "",
      "Economies of scale come from shared, aggregated facilities - not per-customer construction.",
      "Going global means using existing Regions, not building new ones."
    ],
    services: [],
    tags: ["benefits", "matching"]
  },
  {
    id: "1.1-026",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "hard",
    stem: "A team stands up a full test environment at 9 a.m., runs a two-hour load test, and deletes it - total cost, a few dollars. Which two advantages does this demonstrate?",
    options: [
      "Economies of scale and guaranteed uptime",
      "Elasticity and unlimited free testing",
      "Agility (minutes to provision) and pay-as-you-go economics (pay only while it runs)",
      "Security compliance and data sovereignty"
    ],
    answer: [2],
    explanation: "Speed of provisioning is agility; cost tracking only actual consumption is pay-as-you-go. Together they turn environment testing from a procurement project into a routine, near-free activity.",
    rationales: [
      "Economies of scale matter to unit pricing, not to this scenario's headline; uptime guarantees are irrelevant to a test environment.",
      "The environment is elastic, but testing is not free - it cost a few dollars.",
      "",
      "Neither security compliance nor sovereignty is touched by this scenario."
    ],
    services: [],
    tags: ["agility", "pay as you go"]
  },
  {
    id: "1.1-027",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "easy",
    stem: "What is a \"variable expense\" in cloud terms?",
    options: [
      "A cost that AWS decides randomly each month",
      "An expense fixed by a five-year contract",
      "A one-time purchase of physical equipment",
      "A cost that changes with how much you actually use - like compute billed by the second"
    ],
    answer: [3],
    explanation: "Variable expense tracks consumption: use more, pay more; use less, pay less. It is the counterpart of fixed expense - committed spending that occurs regardless of usage - and shifting from the latter to the former is a headline cloud advantage.",
    rationales: [
      "Nothing about cloud billing is random; it is metered and itemized.",
      "That is fixed expense.",
      "That is capital expense.",
      ""
    ],
    services: [],
    tags: ["economics", "terminology"]
  },
  {
    id: "1.1-028",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "medium",
    stem: "Why can AWS offer lower per-unit compute prices than a single mid-sized company achieves in its own data center?",
    options: [
      "Because AWS aggregates the purchasing power and utilization of a massive customer base",
      "Because AWS's electricity is legally mandated to be free",
      "Because mid-sized companies are charged extra by hardware vendors",
      "Because cloud hardware is made of cheaper materials"
    ],
    answer: [0],
    explanation: "Aggregation is the mechanism: millions of customers' combined demand gives AWS enormous purchasing power and high utilization, driving per-unit cost below what any individual company can negotiate - savings shared through pay-as-you-go pricing.",
    rationales: [
      "",
      "No such mandate exists anywhere.",
      "The pricing disadvantage of smaller buyers is real, but it is a consequence of scale, not a vendor scheme.",
      "Hardware quality is enterprise-grade; the advantage is scale, not inferior parts."
    ],
    services: [],
    tags: ["economies of scale"]
  },
  {
    id: "1.1-029",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "easy",
    stem: "What design practice underpins high availability on AWS?",
    options: [
      "Deploying one very large server in one Availability Zone",
      "Keeping all data on the newest possible hardware only",
      "Disabling health checks to avoid false alarms",
      "Eliminating single points of failure by deploying across multiple Availability Zones"
    ],
    answer: [3],
    explanation: "High availability means the application survives component failure - achieved by removing single points of failure: multiple AZs, load balancing, health checks, and automatic replacement. One large server in one AZ is the opposite design.",
    rationales: [
      "That concentrates every point of failure in one facility.",
      "Hardware newness does not create availability.",
      "Health checks are what enable automatic failover.",
      ""
    ],
    services: [],
    tags: ["high availability"]
  },
  {
    id: "1.1-030",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "easy",
    stem: "Compared with on-premises testing, what makes cloud experimentation attractive to product teams?",
    options: [
      "Experiments require committee approval for months",
      "Experiments permanently alter the production hardware",
      "Experiments are banned in production accounts",
      "Environments are provisioned in minutes and torn down cheaply, encouraging more experimentation"
    ],
    answer: [3],
    explanation: "Low friction is the attraction: minutes to provision, pay-per-use while running, delete when done. Teams experiment more when each attempt costs little in time or money - which is the innovation argument behind speed and agility.",
    rationales: [
      "Long approvals are the old-world friction the cloud reduces.",
      "No hardware exists for experiments to alter.",
      "Experiments are commonly run in dedicated accounts - a best practice, not a ban.",
      ""
    ],
    services: [],
    tags: ["agility", "experimentation"]
  },
  {
    id: "1.1-031",
    domain: 1,
    task: "1.1",
    type: "single",
    difficulty: "medium",
    stem: "A capacity planner on-premises asks: \"How many servers do we buy for next year's unknown demand?\" How does the cloud answer this question?",
    options: [
      "By outsourcing the guess to the hardware vendor",
      "By mandating a five-year hardware purchase",
      "By requiring a perfect forecast before any deployment",
      "By removing the guess - deploy what is needed now and let Auto Scaling adjust as demand reveals itself"
    ],
    answer: [3],
    explanation: "The cloud replaces the forecast with the feedback loop: provision for today, scale automatically as traffic arrives. 'Stop guessing capacity' is the named advantage, and Auto Scaling is its implementation.",
    rationales: [
      "Vendors cannot forecast your demand either.",
      "Long purchases deepen the guess; they do not remove it.",
      "The cloud works precisely because no perfect forecast is needed.",
      ""
    ],
    services: [],
    tags: ["capacity", "auto scaling"]
  },
  {
    id: "1.1-032",
    domain: 1,
    task: "1.1",
    type: "multi",
    difficulty: "easy",
    stem: "Which TWO are advantages of cloud computing over on-premises infrastructure? (Select TWO.)",
    options: [
      "Mandatory purchase of hardware for three-year cycles",
      "Pay-as-you-go pricing that follows actual usage",
      "Fixed capacity that cannot change after deployment",
      "Ability to deploy globally in minutes using existing AWS Regions",
      "Ownership of physical data center operations"
    ],
    answer: [1, 3],
    explanation: "Pay-as-you-go and go-global-in-minutes are two of the six named cloud advantages. The distractors are on-premises characteristics - hardware cycles, fixed capacity, and facility ownership - presented as if they were benefits.",
    rationales: [
      "Hardware purchase cycles are the old model, not a cloud advantage.",
      "",
      "Elastic capacity that changes on demand is the cloud reality.",
      "",
      "Facility ownership is precisely what customers hand to AWS."
    ],
    services: [],
    tags: ["benefits", "capstone"]
  }
);
