window.NOTES = window.NOTES || [];
window.NOTES.push(
  {
    id: "1.1",
    domain: 1,
    task: "1.1",
    title: "Define the benefits of the AWS Cloud",
    weight: "Domain 1 is 24% of the exam",
    readMinutes: 10,
    summary: "Task 1.1 tests the six named advantages of cloud computing and the vocabulary around them - elasticity, scalability, high availability, agility, and the capex-to-opex shift. Questions are almost entirely definition-and-scenario matching: a business pain is described, and you must name the advantage that solves it or spot the description that matches the term.",
    sections: [
      {
        heading: "The six advantages of cloud computing",
        body: [
          "The exam guide's list is worth memorizing verbatim, because options frequently quote it: **trade capital expense for variable expense**, benefit from **massive economies of scale**, **stop guessing capacity**, **increase speed and agility**, **stop spending money running and maintaining data centers**, and **go global in minutes**.",
          "Each maps to a business pain. Capital expense (buying servers and buildings) becomes variable expense (paying for what is used). A single company's purchasing power becomes shared economies of scale. Five-year hardware forecasts become automatic scaling. Procurement cycles become minutes of provisioning. Data center toil becomes AWS's job. Building on each continent becomes deploying into existing Regions.",
          "Scenario stems describe one pain and ask for the advantage - or give the advantage and ask which scenario it solves. Learn both directions."
        ],
        table: {
          headers: ["Advantage", "The pain it solves", "Exam tell phrase"],
          rows: [
            ["Trade capex for variable expense", "Large upfront hardware purchases", "\\\"pay only for what you use\\\""],
            ["Economies of scale", "High per-unit costs of small purchases", "\\\"lower variable costs than on your own\\\""],
            ["Stop guessing capacity", "Over- or under-provisioned hardware", "\\\"scale with actual demand\\\""],
            ["Speed and agility", "Weeks of procurement", "\\\"resources in minutes\\\", \\\"experiment\\\""],
            ["No data center maintenance", "Racking, power, cooling, refresh cycles", "\\\"focus on customers, not servers\\\""],
            ["Go global in minutes", "Building presence in new regions", "\\\"deploy worldwide with a few clicks\\\""]
          ]
        }
      },
      {
        heading: "Elasticity, scalability, and high availability",
        body: [
          "**Elasticity** is the automatic matching of supply to demand: resources scale out when traffic rises and scale in when it falls, so cost tracks the workload curve. It eliminates the twin wastes of over-provisioning (paying for idle hardware) and under-provisioning (turning customers away). The Black Friday retail scenario - twentyfold traffic spike in November, gone by January - is the canonical elasticity question.",
          "**Scalability** is the broader property of a system that can handle growth. **High availability** is the ability of a system to remain usable despite failures - achieved on AWS by eliminating single points of failure: multiple Availability Zones, load balancers, health checks, and automatic replacement.",
          "The distinctions get tested directly: elasticity = automatic in-and-out matching; scalability = ability to grow; high availability = surviving component failure. An option that uses one of these words for another's meaning is the wrong answer."
        ],
        bullets: [
          "**Elasticity** - capacity automatically tracks demand, up and down.",
          "**Scalability** - the system can grow to handle more load (design property).",
          "**High availability** - no single point of failure; multi-AZ deployment is the standard pattern.",
          "**Agility** - new resources in minutes means cheap experiments and fast iteration."
        ]
      },
      {
        heading: "The economics: capex, opex, and consumption",
        body: [
          "**Capital expense (capex)** is money spent on assets - servers, buildings, network gear - purchased upfront and depreciated for years whether used or not. **Operational expense (opex)** is spending that tracks ongoing use. Cloud computing converts capex to opex: infrastructure is rented by the second, hour, or request, and stops costing when it stops running.",
          "The consumption model is what makes this real: billing is metered to actual usage (EC2 by the second, Lambda per request and millisecond, S3 per GB-month). Combined with on-demand access - no commitments required to start - the financial risk of a new initiative shrinks to the resources it actually consumes.",
          "Economies of scale complete the picture: AWS's aggregated purchasing power and utilization drive per-unit prices below what any single company can achieve, and pay-as-you-go pricing passes the savings through. This is why the guide's phrasing is \\\"achieve lower variable costs than you can get on your own.\\\""
        ]
      },
      {
        heading: "Focus, experimentation, and global reach",
        body: [
          "\\\"Stop spending money running and maintaining data centers\\\" is really a focus argument: racking servers, negotiating power contracts, and managing refresh cycles are **undifferentiated heavy lifting** - work every company must do but none competes on. AWS absorbs it, freeing engineers for the features that actually differentiate the business.",
          "Speed and agility compound into innovation economics: when a full test environment costs a few dollars for two hours, teams experiment more, fail cheaper, and learn faster. The cost of a failed experiment becomes the compute it actually used - then it is deleted.",
          "**Go global in minutes**: the worldwide Regions and edge locations already exist, so serving users in Asia, Europe, and the Americas is a deployment decision - launch in Regions near users for lower latency, cache content at edge locations - not a construction project."
        ]
      }
    ],
    mustKnow: [
      "The six advantages: capex to variable expense, economies of scale, stop guessing capacity, speed and agility, no data center maintenance, go global in minutes.",
      "Elasticity = capacity automatically tracks demand in AND out; scalability = can grow; high availability = no single point of failure (multi-AZ).",
      "Capex (buying assets) converts to opex (paying for use) - the foundational economics shift.",
      "Consumption model: metered billing to actual usage - EC2 by the second, Lambda per request/ms, S3 per GB-month.",
      "Economies of scale: aggregated purchasing power lowers per-unit prices for every customer.",
      "Undifferentiated heavy lifting: infrastructure toil AWS absorbs so engineers focus on differentiators.",
      "Agility: minutes-to-provision means cheap experiments and faster innovation cycles.",
      "Global reach: existing Regions and edge locations make worldwide deployment a configuration task."
    ],
    examTips: [
      "Match the pain to the advantage: \\\"bought servers for a peak that never came\\\" = stop guessing capacity; \\\"weeks waiting for hardware\\\" = speed and agility; \\\"data center costs\\\" = no maintenance/capex shift.",
      "Black Friday / holiday traffic spike scenarios are elasticity questions - scale out for peak, scale in after, pay only while running.",
      "Watch for swapped definitions: elasticity that \\\"only grows\\\" or high availability described as \\\"one big server\\\" are always wrong.",
      "\\\"Go global\\\" never means building data centers - it means deploying into existing AWS Regions."
    ]
  },
  {
    id: "1.2",
    domain: 1,
    task: "1.2",
    title: "Identify design principles of the AWS Cloud",
    weight: "Domain 1 is 24% of the exam",
    readMinutes: 10,
    summary: "Task 1.2 is the Well-Architected Framework task: the six pillars and their purposes, the named design principles (stop guessing capacity, test at production scale, automate experimentation, evolve architectures, drive with data, improve through game days), and the architectural patterns behind them - loose coupling, design for failure, scaling out, and statelessness. Expect pillar-to-description matching and principle-to-scenario matching.",
    sections: [
      {
        heading: "The Well-Architected Framework and its six pillars",
        body: [
          "The **AWS Well-Architected Framework** is AWS's codified set of design best practices, organized into six **pillars**, each with guiding questions you can ask of any workload to find improvement areas. It is guidance - not a law, certification, or gate - and a **Well-Architected review** applies those questions to a real architecture, surfacing gaps while they are cheap to fix.",
          "The six pillars: **operational excellence** (run and monitor effectively, operations as code, continuous improvement), **security** (protect data, systems, and assets), **reliability** (recover from failure, meet demand), **performance efficiency** (use the right resource types and sizes), **cost optimization** (avoid unneeded costs), and **sustainability** (minimize environmental impact).",
          "Pillar questions are phrase-matched: \\\"are you protecting your data?\\\" = security; \\\"can you recover from failure and meet demand?\\\" = reliability; \\\"are you using the right resource types?\\\" = performance efficiency; \\\"are you avoiding unneeded costs?\\\" = cost optimization; \\\"how do you minimize environmental impact?\\\" = sustainability; \\\"how do you run and improve operations?\\\" = operational excellence."
        ],
        table: {
          headers: ["Pillar", "One-line purpose", "Typical practices"],
          rows: [
            ["Operational excellence", "Run, monitor, and improve effectively", "Operations as code, runbooks, game days, reviews"],
            ["Security", "Protect information, systems, assets", "Least privilege, encryption, detection, incident response"],
            ["Reliability", "Recover from failure, meet demand", "Multi-AZ, automatic recovery, tested DR"],
            ["Performance efficiency", "Right resource types and sizes", "Instance selection, serverless for spiky work"],
            ["Cost optimization", "Avoid unneeded costs", "Right-sizing, elasticity, pricing model fit"],
            ["Sustainability", "Minimize environmental impact", "Efficient utilization, managed services, less idle"]
          ]
        }
      },
      {
        heading: "The named design principles",
        body: [
          "**Stop guessing capacity**: replace forecasts with feedback - provision for today and let Auto Scaling adjust as real demand reveals itself. **Test at production scale**: rent a prod-like environment for the test's duration and delete it, instead of permanently duplicating hardware.",
          "**Automate to make architectural experimentation easier**: infrastructure as code turns an architecture into a versioned artifact - spin up, measure, keep or delete, identically every time. **Allow architectures to evolve**: loose coupling keeps components behind stable interfaces so each can be replaced, scaled, or rewritten independently.",
          "**Drive architectures using data**: decide from measurements - metrics, load tests, cost data - not assumptions. **Improve through game days**: inject controlled failures (kill an AZ, exhaust a dependency) to validate recovery while stakes are low."
        ],
        bullets: [
          "Stop guessing capacity → Auto Scaling tracks real demand.",
          "Test at production scale → temporary prod-like environments, cheap because pay-as-you-go.",
          "Automate experimentation → IaC makes trying architectures a script run.",
          "Evolve architectures → loose coupling enables independent component change.",
          "Drive with data → measure load, test, track costs - no assumptions.",
          "Game days → rehearse failure before it happens for real."
        ]
      },
      {
        heading: "Loose coupling, failure, and scaling patterns",
        body: [
          "**Loose coupling** means components interact through interfaces - queues (SQS), events (SNS, EventBridge), APIs - rather than tight direct dependencies, so one component's failure or slowness stays localized. Its counterpart, **design for failure**, accepts that components WILL fail and builds survival in: multi-AZ deployment, health checks, retries, backups, graceful degradation.",
          "**Scaling out (horizontal)** adds more instances behind a load balancer; **scaling up (vertical)** makes one instance bigger. Cloud design favors scaling out - incremental, automatable, no ceiling. **Statelessness** makes it work: with no session data stored on the instance, any instance can serve any request, so Auto Scaling can add or remove them freely (state moves to DynamoDB, ElastiCache, or cookies).",
          "The application-structure version is **microservices**: a monolith refactored into independently deployable services can be scaled, updated, and failed independently. The combined pattern - microservices + queues + per-service Auto Scaling - is loose coupling and elasticity in one architecture, and the exam describes it in exactly those pieces."
        ]
      },
      {
        heading: "Managed services as a design principle",
        body: [
          "A recurring Well-Architected recommendation: **prefer managed services where suitable**. Every layer a managed service absorbs - OS patching (RDS), fleet management (Lambda), storage operations (S3) - is undifferentiated heavy lifting the team no longer performs, executed by AWS at extreme competence and scale.",
          "This connects directly to task 1.1's focus argument and the shared responsibility model in Domain 2: choosing managed services is simultaneously a cost decision (less operational labor), a reliability decision (AWS-operated failover), and a performance decision (right tooling without the maintenance).",
          "In pillar terms, managed services serve several at once - but when a question asks \\\"which principle does adopting RDS instead of self-managed MySQL demonstrate,\\\" the expected answer is about reducing operational burden / undifferentiated heavy lifting, with cost optimization as a close second."
        ]
      }
    ],
    mustKnow: [
      "Six pillars: operational excellence, security, reliability, performance efficiency, cost optimization, sustainability.",
      "The framework is guidance with guiding questions; a review systematically finds gaps before they become incidents.",
      "Design principles: stop guessing capacity, test at production scale, automate experimentation, evolve architectures, drive with data, game days.",
      "Loose coupling = components interact via interfaces (queues/events) so failures stay localized; SQS/SNS/EventBridge are the building blocks.",
      "Design for failure = assume failure and build survival in: multi-AZ, health checks, retries, backups.",
      "Scale out (horizontal, more instances) is preferred over scale up (vertical, bigger instance); statelessness enables free instance add/remove.",
      "Microservices scale, update, and fail independently - the structural form of loose coupling.",
      "Prefer managed services: they absorb undifferentiated heavy lifting (patching, capacity, failover)."
    ],
    examTips: [
      "Pillar matching by keyword: \\\"protect data\\\" = security; \\\"recover/meet demand\\\" = reliability; \\\"right resource types\\\" = performance; \\\"unneeded cost\\\" = cost optimization; \\\"environmental\\\" = sustainability; \\\"run/monitor/improve\\\" = operational excellence.",
      "\\\"Sustainable pillar\\\" scenarios emphasize efficient utilization and managed services - aligned with cost optimization but aimed at environmental impact.",
      "A queue inserted between two services is a loose-coupling question - the queue absorbs failure and load differences.",
      "\\\"Test at production scale\\\" is cheap on AWS because environments are temporary and pay-as-you-go - not because testing is free."
    ]
  },
  {
    id: "1.3",
    domain: 1,
    task: "1.3",
    title: "Understand the benefits of and strategies for migration to the AWS Cloud",
    weight: "Domain 1 is 24% of the exam",
    readMinutes: 11,
    summary: "Task 1.3 is the 7 Rs: seven named migration strategies (relocate, rehost, replatform, refactor, repurchase, retire, retain), each matched to a scenario. Around them sit the migration framework phases (assess, mobilize, migrate and modernize) and the tooling - Application Migration Service for lift-and-shift, DMS plus SCT for databases, DataSync and the Snow Family for data. Most questions are strategy-to-scenario matching with tell phrases.",
    sections: [
      {
        heading: "The 7 Rs of migration",
        body: [
          "The **7 Rs** are the named strategies, and each has a one-line signature: **Relocate** - move hypervisor-level VMs (VMware) unchanged into VMware Cloud on AWS. **Rehost** - lift and shift: replicate servers to EC2 as-is, minimal changes, fastest path. **Replatform** - lift, tinker, and shift: small optimizations like swapping a self-managed database for RDS, core unchanged. **Refactor/re-architect** - rebuild cloud-native (microservices, serverless) for the largest gains at the largest cost.",
          "**Repurchase** - drop the self-managed product and buy a SaaS equivalent (email servers become a managed email service). **Retire** - decommission applications the assessment found unused; the discovery dividend. **Retain** - deliberately keep an application on-premises for now: dependencies, compliance blockers, or poor economics - revisit later; hybrid is the natural result.",
          "The matching is mechanical once the tells are learned: \\\"as-is, minimal changes\\\" = rehost; \\\"swap database for managed\\\" = replatform; \\\"rebuild cloud-native\\\" = refactor; \\\"switch to SaaS\\\" = repurchase; \\\"nobody uses it\\\" = retire; \\\"cannot move yet\\\" = retain; \\\"VMware VMs unchanged\\\" = relocate."
        ],
        table: {
          headers: ["Strategy", "Change level", "Signature scenario"],
          rows: [
            ["Relocate", "None (hypervisor-level)", "VMware estate to VMware Cloud on AWS"],
            ["Rehost", "Minimal - \\\"lift and shift\\\"", "Exit the data center this quarter"],
            ["Replatform", "Small optimizations", "Self-managed DB becomes RDS"],
            ["Refactor", "Largest - re-architecture", "Monolith to cloud-native microservices"],
            ["Repurchase", "Product replacement", "Self-hosted CRM becomes SaaS CRM"],
            ["Retire", "Decommission", "Apps found unused in assessment"],
            ["Retain", "None - stay put", "Mainframe dependency or compliance blocker"]
          ]
        }
      },
      {
        heading: "Sequencing and the migration framework",
        body: [
          "Real migrations sequence the Rs: the classic pragmatic path is **rehost now** to exit the data center quickly and reduce risk, then **optimize in the cloud** - right-size, replatform, refactor incrementally, where changes are cheaper and lower-risk. \\\"Modernize later\\\" scenarios want this order; \\\"refactor everything first\\\" defeats the deadline.",
          "The AWS migration framework has three phases: **assess** (build the business case - inventory the estate, model current vs target costs, find what to retire), **mobilize** (build the landing zone, plan migration waves), and **migrate and modernize** (move workloads in waves, then optimize continuously).",
          "Benefits the exam ties to migration mirror task 1.1: agility, productivity (less toil), resilience (managed availability tooling), and economics (pay-as-you-go, no data center overhead) - with the second wave of savings coming from post-migration optimization of lift-and-shifted, over-sized workloads."
        ]
      },
      {
        heading: "Migration tooling: servers, databases, and data",
        body: [
          "**AWS Application Migration Service (MGN)** automates rehosting at scale: replicate source servers continuously, launch test copies, cut over to EC2 with minimal downtime. **AWS Application Discovery Service** inventories the on-premises estate - servers, applications, dependencies - producing the information that turns a chaotic move into planned waves. **AWS Migration Hub** aggregates progress tracking across tools in one view.",
          "**AWS Database Migration Service (DMS)** replicates databases to AWS with continuous change capture for near-zero-downtime cutover, supporting both same-engine and engine-changing (heterogeneous) moves. For heterogeneous migrations, the **AWS Schema Conversion Tool (SCT)** converts schemas and code objects (stored procedures, functions) between engines first; DMS then moves the data.",
          "For bulk data: **AWS DataSync** moves file data online - NFS/SMB shares into S3, EFS, or FSx with scheduling and validation - while the **AWS Snow Family** (Snowball Edge, Snowmobile) moves petabytes physically when the network is the bottleneck: AWS ships the encrypted appliance, you fill it, it uploads on return."
        ],
        table: {
          headers: ["Tool", "Moves", "Tell phrase"],
          rows: [
            ["Application Migration Service", "Servers (rehost)", "\\\"automated lift and shift\\\""],
            ["Application Discovery Service", "Estate inventory", "\\\"which apps and dependencies exist\\\""],
            ["Migration Hub", "Progress tracking", "\\\"one view across teams/tools\\\""],
            ["Database Migration Service", "Database contents", "\\\"minimal downtime, engine change possible\\\""],
            ["Schema Conversion Tool", "Schemas between engines", "\\\"Oracle to PostgreSQL conversion\\\""],
            ["DataSync", "Files, online", "\\\"scheduled sync to S3/EFS/FSx\\\""],
            ["Snow Family", "Bulk data, offline", "\\\"network too slow, petabytes\\\""]
          ]
        }
      },
      {
        heading: "Choosing strategies under constraints",
        body: [
          "Harder questions add constraints. A **regulatory blocker** (\\\"cannot leave on-premises until next year\\\") means retain - with a revisit date. A **dependency blocker** (mainframe integration) means retain everything else and migrate around it. An application **duplicated elsewhere and valueless** is retire, not migrate - moving waste preserves waste.",
          "Speed pressure (\\\"out of the data center this quarter\\\") pushes rehost, because no application changes means no re-testing of logic. Business pressure for cloud-native scalability with budget and time available pushes refactor - the most expensive strategy, justified by the largest long-term benefit.",
          "Remember what each strategy does NOT do: rehost does not optimize (that is the later phase), replatform does not re-architect, repurchase does not move your software (it replaces it), and retain does not touch the application at all."
        ]
      }
    ],
    mustKnow: [
      "The 7 Rs: relocate, rehost, replatform, refactor, repurchase, retire, retain.",
      "Rehost = lift and shift, minimal changes, fastest; optimization happens later.",
      "Replatform = small managed-service swaps (self-managed DB to RDS); core unchanged.",
      "Refactor = cloud-native re-architecture; largest cost, largest long-term benefit.",
      "Repurchase = replace with SaaS; retire = decommission unused apps; retain = stay on-prem for now (hybrid).",
      "Relocate = hypervisor-level move of VMware VMs unchanged into VMware Cloud on AWS.",
      "Phases: assess (business case), mobilize (landing zone, waves), migrate and modernize.",
      "Tooling: MGN (rehost), Discovery Service (inventory), Migration Hub (tracking), DMS + SCT (databases, heterogeneous), DataSync (online files), Snow Family (offline bulk)."
    ],
    examTips: [
      "Map the verb: \\\"as-is\\\" = rehost, \\\"swap for managed\\\" = replatform, \\\"rebuild\\\" = refactor, \\\"SaaS\\\" = repurchase, \\\"unused\\\" = retire, \\\"cannot move yet\\\" = retain, \\\"VMware unchanged\\\" = relocate.",
      "\\\"Exit the data center fast, modernize later\\\" = rehost now, optimize after - never refactor-everything-first.",
      "Engine-changing database migrations: SCT converts the schema first, then DMS moves the data - they are a pair.",
      "\\\"Network too slow for hundreds of terabytes\\\" = Snow Family physical devices, not a faster upload plan."
    ]
  },
  {
    id: "1.4",
    domain: 1,
    task: "1.4",
    title: "Understand concepts of cloud economics",
    weight: "Domain 1 is 24% of the exam",
    readMinutes: 10,
    summary: "Task 1.4 applies the economics: Total Cost of Ownership analysis and its components, the capex/opex distinction applied to decisions, the optimization levers (right-sizing, elasticity, pricing model fit, storage tiering), licensing options (license-included vs BYOL), and why cost visibility drives savings. Expect scenario questions asking which practice reduces cost or what a TCO comparison includes.",
    sections: [
      {
        heading: "Total Cost of Ownership",
        body: [
          "**TCO analysis** is the honest, full-scope comparison behind cloud adoption: the on-premises side counts hardware purchase and refresh, facilities, power, cooling, physical security, network capacity, administration staff, and licenses; the cloud side counts the AWS bill plus the customer-side costs that remain. The point is a data-driven decision - not to prove the cloud is always cheaper, because it is not, for every workload.",
          "What surprises most first-time analysts: the on-premises side is much more than hardware. Facilities, electricity, cooling, and the people who run the machine room are large, recurring, and easy to underestimate. Moving to AWS removes the facility-level lines entirely - floor space, power, cooling, physical security, and hardware lifecycle become AWS's operating costs, visible only as unit pricing.",
          "Fully loaded comparisons also explain managed services: RDS's hourly rate can exceed raw EC2, but the avoided labor - patching, backups, replication, failover engineering - frequently makes it cheaper overall, and always frees scarce expertise for higher-value work."
        ],
        table: {
          headers: ["On-premises cost lines", "After migration"],
          rows: [
            ["Hardware purchase and refresh cycles", "Gone - AWS operates the fleet"],
            ["Data center space, power, cooling, physical security", "Gone - absorbed by AWS"],
            ["Infrastructure administration staff hours", "Reduced - managed services absorb toil"],
            ["Software licenses", "Remain - but BYOL may lower cost"],
            ["Application development and business functions", "Unchanged - customer keeps these"]
          ]
        }
      },
      {
        heading: "Capex, opex, and the freed capital",
        body: [
          "**Capital expense** buys assets that depreciate for years regardless of use; **operational expense** tracks ongoing consumption and stops when usage stops. Cloud adoption converts capex to opex: no servers, buildings, or network gear to purchase - infrastructure is expensed as consumed.",
          "The second-order effect is **capital efficiency**: money that would sit in depreciating hardware is freed for product development, hiring, and market expansion. And because on-demand access requires no commitment to start, a new initiative's financial risk shrinks to the resources it actually consumes - scale up if it works, delete if it does not.",
          "The **AWS Free Tier** supports the exploration phase: certain services free for 12 months, some always-free within limits, short-term trials - an on-ramp for experiments, not a production plan."
        ]
      },
      {
        heading: "The optimization levers",
        body: [
          "**Right-sizing** matches instance size to actual workload - the highest-yield first optimization, since lift-and-shifted workloads are typically over-sized. **Elasticity** removes idle spend by scaling in when demand drops, so the bill tracks the workload curve instead of a worst-case forecast.",
          "**Pricing model fit**: commitments (Reserved Instances, Savings Plans) discount steady baselines by up to ~72%; Spot serves interruptible, fault-tolerant work at up to ~90% off; On-Demand covers variable and short-lived work. The portfolio pattern: commit the flat baseline, let elastic capacity absorb spikes, bid Spot for batch.",
          "**Storage tiering** applies the same logic to S3: keep hot data in Standard, transition aging data to Infrequent Access and Glacier classes via lifecycle rules - cost falls while every object stays retrievable. And **managed services** remove the operational labor that TCO lines rarely capture."
        ],
        bullets: [
          "Right-sizing - match size to real demand; first move after migration.",
          "Elasticity - scale in for troughs; never pay for idle.",
          "Commitments - RI/Savings Plans for steady baselines (1 or 3 year terms).",
          "Spot - interruptible batch at up to ~90% off.",
          "Storage tiering - lifecycle transitions to cheaper S3 classes.",
          "Managed services - avoided labor counts in the comparison."
        ]
      },
      {
        heading: "Licensing and cost visibility",
        body: [
          "Licensed software (Windows Server, SQL Server, Oracle) can run on AWS as **license-included** - the license cost is in the hourly rate - or **BYOL (bring your own license)** where the licensing terms permit, reusing licenses the company already owns to lower run cost. License mobility is a standard TCO input for Microsoft-heavy estates.",
          "**Cost visibility** is an economics lever, not an accounting chore: in a consumption model, seeing who uses what and when (via tagging, account structure, and cost allocation) turns the bill into a tuning dashboard. Teams that see their own spend right-size and clean up - the accountability effect.",
          "The **AWS Pricing Calculator** supports the estimation habit: model an architecture's service-by-service cost and compare designs before deploying anything. Estimation before commitment, visibility after deployment - economics is a loop, not a one-time analysis."
        ]
      }
    ],
    mustKnow: [
      "TCO = full-cost comparison: hardware, facilities, power, cooling, staff, licenses on-premises vs the AWS bill plus remaining customer costs.",
      "Cloud spending is opex; on-premises infrastructure buying is capex - adoption trades capex for opex.",
      "Avoided capital purchases free money for product development and growth - capital efficiency.",
      "Optimization levers: right-sizing, elasticity, pricing model fit (RI/Savings Plans for steady, Spot for interruptible), storage tiering, managed services.",
      "License-included vs BYOL: BYOL can lower cost where licensing terms allow.",
      "Cost visibility via tagging/attribution drives accountability and savings.",
      "The AWS Pricing Calculator estimates costs before deployment; the Free Tier supports first experiments.",
      "Managed services can look costlier per hour but win on fully loaded TCO by absorbing operational labor."
    ],
    examTips: [
      "\\\"What does TCO include?\\\" - the whole on-premises stack (facilities, power, staff, refresh), not just hardware.",
      "8% CPU utilization around the clock = right-sizing question; the fix is downsizing, not adding capacity.",
      "Steady 24/7 baseline = Reserved/Savings Plans; interruptible nightly batch = Spot; spiky unpredictable = On-Demand/Auto Scaling - match the model to the shape.",
      "TCO analysis never \\\"proves the cloud is always cheaper\\\" - it is a data-driven per-workload comparison."
    ]
  }
);
