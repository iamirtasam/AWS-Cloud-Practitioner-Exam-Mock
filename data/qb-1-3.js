window.QBANK = window.QBANK || [];
window.QBANK.push(
  {
    id: "1.3-001",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "easy",
    stem: "In AWS migration terminology, what are the \"7 Rs\"?",
    options: [
      "Seven required security certifications before migration",
      "Seven migration strategies: relocate, rehost, replatform, refactor, repurchase, retire, retain",
      "Seven pricing tiers for migration services",
      "Seven Regions that must receive migrated data"
    ],
    answer: [1],
    explanation: "The 7 Rs are the named migration strategies, each a different relationship between the application and the change it undergoes: relocate, rehost, replatform, refactor (re-architect), repurchase, retire, retain. The exam names one and expects you to match the strategy.",
    rationales: [
      "No certifications gate migration.",
      "",
      "Migration is not priced in fixed tiers.",
      "There is no rule about destination Regions."
    ],
    services: [],
    tags: ["7 rs", "migration"]
  },
  {
    id: "1.3-002",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "easy",
    stem: "A company moves an application to AWS with the smallest possible changes - essentially copying the server as-is. Which strategy is this?",
    options: [
      "Refactor",
      "Retain",
      "Rehost - the \"lift and shift\" migration",
      "Retire"
    ],
    answer: [2],
    explanation: "Rehosting - lift and shift - moves the application with minimal or no modification, typically via AWS Application Migration Service. It is the fastest path to exit a data center; optimization happens later.",
    rationales: [
      "Refactoring rebuilds the application significantly - the opposite of minimal change.",
      "Retaining means not migrating at all.",
      "",
      "Retiring decommissions the application."
    ],
    services: [],
    tags: ["rehost", "7 rs"]
  },
  {
    id: "1.3-003",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "medium",
    stem: "During migration, a team swaps its self-managed database for Amazon RDS and updates the connection settings, but changes nothing else about the application. Which strategy is this?",
    options: [
      "Rehost",
      "Refactor",
      "Retire",
      "Replatform - lift, tinker, and shift with modest optimizations"
    ],
    answer: [3],
    explanation: "Replatforming makes small, targeted optimizations - swapping components for managed equivalents like RDS or Elastic Load Balancing - without changing the application's core architecture. More benefit than rehost, far less effort than refactor.",
    rationales: [
      "Rehost would have moved the self-managed database unchanged.",
      "Refactoring means re-architecting the application significantly.",
      "Retiring decommissions the application.",
      ""
    ],
    services: ["Amazon RDS"],
    tags: ["replatform", "7 rs"]
  },
  {
    id: "1.3-004",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "hard",
    stem: "A team rebuilds a legacy monolith into cloud-native microservices with serverless components, accepting a large up-front effort for major agility and scalability gains. Which strategy is this?",
    options: [
      "Refactor (re-architect)",
      "Relocate",
      "Retain",
      "Rehost"
    ],
    answer: [0],
    explanation: "Refactoring re-architects the application using cloud-native patterns - microservices, serverless, managed everything - driven by business needs for features, scale, or resilience that justify the largest investment of the strategies.",
    rationales: [
      "",
      "Relocating moves hypervisor-level workloads (VMware) unchanged.",
      "Retaining keeps the application on-premises.",
      "Rehosting moves the application as-is."
    ],
    services: [],
    tags: ["refactor", "7 rs"]
  },
  {
    id: "1.3-005",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "medium",
    stem: "A company stops running its own customer-relationship software and switches to a SaaS CRM product instead. Which migration strategy is this?",
    options: [
      "Repurchase - moving to a different product, typically SaaS",
      "Rehost",
      "Relocate",
      "Retain"
    ],
    answer: [0],
    explanation: "Repurchasing means dropping the self-managed product and buying the equivalent as a service - self-hosted CRM becomes a SaaS CRM, email servers become a managed email service. The application is replaced, not moved.",
    rationales: [
      "",
      "Rehosting moves your existing software to EC2 rather than replacing it.",
      "Relocating moves hypervisor workloads to VMware Cloud on AWS.",
      "Retaining keeps the current product running in place."
    ],
    services: [],
    tags: ["repurchase", "7 rs"]
  },
  {
    id: "1.3-006",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "medium",
    stem: "An application depends on a mainframe integration and cannot move for at least two years. The company migrates everything else and leaves this one in place. Which strategy applies to it?",
    options: [
      "Refactor",
      "Repurchase",
      "Retain - keep it on-premises, revisit later",
      "Retire"
    ],
    answer: [2],
    explanation: "Retaining is the deliberate choice to leave an application where it is - because it is not ready, the dependency cannot move, or the economics do not justify it - and revisit after the blockers change. Hybrid operation is the natural result.",
    rationales: [
      "Refactoring an unmovable application contradicts the premise.",
      "Repurchasing would replace it with SaaS, which the dependency blocks.",
      "",
      "Retiring means it is no longer needed at all."
    ],
    services: [],
    tags: ["retain", "7 rs", "hybrid"]
  },
  {
    id: "1.3-007",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "medium",
    stem: "During the assessment phase, a company discovers several applications that nobody has used for years. Which strategy applies to them?",
    options: [
      "Rehost",
      "Replatform",
      "Relocate",
      "Retire - decommission them and stop paying for them"
    ],
    answer: [3],
    explanation: "Retiring is the discovery dividend of migration assessments: unused or redundant applications are decommissioned, removing their cost and complexity from the project entirely. It is common enough that the strategy is named for it.",
    rationales: [
      "Moving dead applications to EC2 preserves the waste.",
      "Optimizing dead applications wastes even more effort.",
      "Moving hypervisor images of dead applications is still waste.",
      ""
    ],
    services: [],
    tags: ["retire", "7 rs"]
  },
  {
    id: "1.3-008",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "easy",
    stem: "A large VMware-based estate is moved to VMware Cloud on AWS without changing the virtual machines. Which strategy is this?",
    options: [
      "Relocate - hypervisor-level migration with no changes to the VMs",
      "Refactor",
      "Repurchase",
      "Retain"
    ],
    answer: [0],
    explanation: "Relocating is the newest of the Rs: moving workloads at the hypervisor layer - VMware Cloud on AWS being the canonical case - so the VMs themselves are untouched. It is rehosting's fastest sibling for VMware-heavy estates.",
    rationales: [
      "",
      "Refactoring rebuilds applications.",
      "Repurchasing replaces products with SaaS.",
      "Retaining leaves the estate on-premises."
    ],
    services: [],
    tags: ["relocate", "vmware", "7 rs"]
  },
  {
    id: "1.3-009",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "medium",
    stem: "Which strategy best matches \"move the application to AWS and swap its self-managed database for a managed one, changing nothing else\"?",
    options: [
      "Replatform",
      "Retain",
      "Retire",
      "Relocate"
    ],
    answer: [0],
    explanation: "Swapping a component for its managed equivalent - the database becomes RDS, the load balancer becomes ELB - while leaving the application core intact is the definition of replatforming: modest optimization without re-architecture.",
    rationales: [
      "",
      "Retaining means not moving at all.",
      "Retiring means decommissioning.",
      "Relocating moves hypervisor-level VMs untouched."
    ],
    services: [],
    tags: ["replatform", "7 rs"]
  },
  {
    id: "1.3-010",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "medium",
    stem: "A company cancels its on-premises email servers and adopts a managed SaaS email service for all staff. Which of the 7 Rs is this?",
    options: [
      "Retain",
      "Rehost",
      "Repurchase",
      "Refactor"
    ],
    answer: [2],
    explanation: "Email-as-a-service is the classic repurchase: the self-run product is replaced by a purchased service. The company stops operating the software entirely rather than moving or rewriting it.",
    rationales: [
      "Retaining would keep the on-premises servers running.",
      "Rehosting would move those servers to EC2, still self-managed.",
      "",
      "Refactoring rewrites the application - nobody rewrites their email server."
    ],
    services: [],
    tags: ["repurchase", "7 rs"]
  },
  {
    id: "1.3-011",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "easy",
    stem: "Which of the following is a commonly cited BENEFIT of migrating to the AWS Cloud?",
    options: [
      "Longer procurement cycles for hardware",
      "Increased data center maintenance workload",
      "Permanent lock-in to on-premises capacity",
      "Increased agility and productivity, with reduced operational burden and the ability to pay only for what is used"
    ],
    answer: [3],
    explanation: "Migration benefits track the cloud's core advantages: agility (provision in minutes), productivity (less infrastructure toil), resilience (managed availability tooling), and economics (pay-as-you-go, no data center overhead). The distractors invert each one.",
    rationales: [
      "Procurement cycles largely disappear - that is the agility gain.",
      "Maintenance burden shrinks as services become managed.",
      "Migration removes the on-premises capacity lock-in.",
      ""
    ],
    services: [],
    tags: ["benefits", "migration"]
  },
  {
    id: "1.3-012",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "medium",
    stem: "Before committing to a migration, a company wants a data-driven business case comparing current on-premises costs with projected AWS costs. Which offering supports this assessment?",
    options: [
      "Migration assessment tooling that models the current estate and estimates future cloud costs (for example, Migration Evaluator)",
      "Amazon Polly",
      "AWS WAF",
      "Amazon EFS"
    ],
    answer: [0],
    explanation: "The assess phase builds the business case: inventory the estate, model current costs, and project target-state AWS costs - tooling such as Migration Evaluator produces that evidence. The other options are unrelated services.",
    rationales: [
      "",
      "Polly converts text to speech.",
      "WAF filters web requests.",
      "EFS provides shared file storage."
    ],
    services: [],
    tags: ["assessment", "migration phases"]
  },
  {
    id: "1.3-013",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "medium",
    stem: "Which service automates the lift-and-shift (rehost) migration of servers to AWS, converting them to run on EC2?",
    options: [
      "AWS Application Migration Service",
      "Amazon QuickSight",
      "AWS Shield",
      "Amazon Connect"
    ],
    answer: [0],
    explanation: "AWS Application Migration Service (MGN) automates rehosting: replicate source servers, launch test copies, cut over to EC2 with minimal downtime - the standard tool for lift-and-shift at scale.",
    rationales: [
      "",
      "QuickSight builds BI dashboards.",
      "Shield defends against DDoS.",
      "Connect runs contact centers."
    ],
    services: ["AWS Application Migration Service"],
    tags: ["rehost", "migration tools"]
  },
  {
    id: "1.3-014",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "medium",
    stem: "A company must move its production database to AWS with minimal downtime, replicating data continuously until cutover. Which service is designed for this?",
    options: [
      "Amazon Route 53",
      "AWS IoT Core",
      "AWS Database Migration Service (DMS)",
      "Amazon Polly"
    ],
    answer: [2],
    explanation: "DMS replicates database content from a source - on-premises or in AWS - to a target with continuous change capture, so cutover is quick. It supports both homogeneous and heterogeneous (engine-changing) moves.",
    rationales: [
      "Route 53 is DNS; it can shift traffic but does not replicate databases.",
      "IoT Core connects devices.",
      "",
      "Polly is text-to-speech."
    ],
    services: ["AWS Database Migration Service"],
    tags: ["dms", "databases", "migration tools"]
  },
  {
    id: "1.3-015",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "medium",
    stem: "A company needs to migrate hundreds of terabytes from a site whose internet connection would take months to upload. Which solution fits?",
    options: [
      "Upload faster by buying more laptops",
      "AWS Snow Family devices - physical, secure, high-capacity transfer appliances shipped to and from AWS",
      "Printing the data and scanning it in",
      "Emailing the data in chunks"
    ],
    answer: [1],
    explanation: "When the network is the bottleneck, the Snow Family (Snowball Edge, Snowmobile for exabyte scale) moves data physically: AWS ships the encrypted appliance, you fill it, it ships back and uploads. This is the offline migration path.",
    rationales: [
      "More client devices do not widen a thin pipe meaningfully.",
      "",
      "Paper is not a data migration strategy - that is a joke option.",
      "Email cannot carry bulk data and is not a transfer service."
    ],
    services: ["AWS Snow Family"],
    tags: ["snow family", "offline migration"]
  },
  {
    id: "1.3-016",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "medium",
    stem: "Which service automates and accelerates moving large file datasets ONLINE to S3, EFS, or FSx, with scheduling and validation?",
    options: [
      "AWS DataSync",
      "Amazon Connect",
      "AWS CodeBuild",
      "Amazon Lex"
    ],
    answer: [0],
    explanation: "DataSync is the online bulk-transfer service: it moves file data between on-premises storage (NFS, SMB) and AWS storage services at high speed, with scheduled runs, integrity validation, and bandwidth controls.",
    rationales: [
      "",
      "Connect is a contact center service.",
      "CodeBuild compiles and tests code.",
      "Lex builds chatbots."
    ],
    services: ["AWS DataSync"],
    tags: ["datasync", "data transfer"]
  },
  {
    id: "1.3-017",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "easy",
    stem: "Why is rehosting typically the FASTEST migration strategy to execute?",
    options: [
      "Because it requires no changes to the application - servers are replicated and relaunched as-is",
      "Because it rewrites the application in modern languages",
      "Because it skips all testing forever",
      "Because AWS performs the customer's business analysis"
    ],
    answer: [0],
    explanation: "Speed comes from the absence of change: replicate the machine, launch it on EC2, cut over. No code changes means no re-testing of application logic, no redesign, no retraining - which is also why optimization is deferred.",
    rationales: [
      "",
      "Rewriting is refactoring - the slowest strategy.",
      "Testing still happens - one of the cheapest test cycles, but it happens.",
      "AWS does not perform business analysis; that is the customer's assess phase."
    ],
    services: [],
    tags: ["rehost", "7 rs"]
  },
  {
    id: "1.3-018",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "hard",
    stem: "A legacy application must gain cloud-native scalability and the business is willing to invest heavily in rework over several quarters. Which strategy matches?",
    options: [
      "Relocate",
      "Retain",
      "Refactor - re-architect for the largest long-term benefit",
      "Repurchase"
    ],
    answer: [2],
    explanation: "Heavy rework for large long-term gains is refactoring: re-architecting the application to cloud-native patterns. It is the most expensive and slowest strategy, chosen when the business case justifies the transformation.",
    rationales: [
      "Relocating moves VMware VMs unchanged - no scalability transformation.",
      "Retaining defers the problem; it delivers no cloud-native benefit.",
      "",
      "Repurchasing replaces with SaaS - only possible if a product exists for the function."
    ],
    services: [],
    tags: ["refactor", "7 rs"]
  },
  {
    id: "1.3-019",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "medium",
    stem: "Assessment shows an application duplicated by another system and no longer adding value. What is the right strategy?",
    options: [
      "Rehost it anyway for completeness",
      "Replatform it to managed services",
      "Refactor it into a microservice",
      "Retire it - decommission and eliminate its cost"
    ],
    answer: [3],
    explanation: "An application that delivers no value should be retired, not migrated: moving waste preserves waste. Assessments exist partly to find these - every retired application shrinks the migration project and the future bill.",
    rationales: [
      "Migrating it moves dead weight to EC2.",
      "Optimizing something valueless wastes effort and money.",
      "Rebuilding something valueless is worse.",
      ""
    ],
    services: [],
    tags: ["retire", "7 rs"]
  },
  {
    id: "1.3-020",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "medium",
    stem: "An application must remain on-premises until a regulatory change next year, after which it will be re-evaluated. Which strategy applies for now?",
    options: [
      "Retain - keep it in place and revisit when the blocker clears",
      "Repurchase",
      "Refactor",
      "Relocate"
    ],
    answer: [0],
    explanation: "Retaining is the strategy for applications with a temporary blocker: they stay put deliberately, on a timeline, and join the migration later. Hybrid connectivity covers them in the meantime.",
    rationales: [
      "",
      "Repurchasing would not resolve a location requirement.",
      "Refactoring does not move a regulated on-premises dependency.",
      "Relocating moves workloads to AWS - which the requirement forbids for now."
    ],
    services: [],
    tags: ["retain", "7 rs"]
  },
  {
    id: "1.3-021",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "medium",
    stem: "A program office wants a single view of migration progress across multiple teams and migration tools. Which offering provides this?",
    options: [
      "Amazon QuickSight",
      "AWS Migration Hub, which tracks and visualizes migrations across tools in one place",
      "Amazon Connect",
      "AWS Backup"
    ],
    answer: [1],
    explanation: "Migration Hub aggregates migration tracking: servers, applications, statuses, and tool feeds appear in one dashboard, so a large program sees overall progress without assembling spreadsheets.",
    rationales: [
      "QuickSight visualizes business data, not migration program state.",
      "",
      "Connect is a contact center service.",
      "Backup orchestrates backup jobs."
    ],
    services: ["AWS Migration Hub"],
    tags: ["migration hub", "migration tools"]
  },
  {
    id: "1.3-022",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "easy",
    stem: "Which migration path moves large amounts of data PHYSICALLY when network transfer is too slow?",
    options: [
      "AWS Direct Connect",
      "AWS Transfer Family",
      "AWS Snow Family (Snowball Edge and similar devices)",
      "AWS Amplify"
    ],
    answer: [2],
    explanation: "The Snow Family ships encrypted storage devices between the customer site and AWS, moving hundreds of terabytes to petabytes without depending on the network. Direct Connect and Transfer Family are network-based paths; Amplify is a frontend platform.",
    rationales: [
      "Direct Connect is a private network link - still a network path, and takes time to provision.",
      "Transfer Family provides managed file transfer over networks.",
      "",
      "Amplify builds and hosts web apps."
    ],
    services: ["AWS Snow Family"],
    tags: ["snow family", "offline migration"]
  },
  {
    id: "1.3-023",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "medium",
    stem: "Can AWS Database Migration Service migrate between DIFFERENT database engines (for example Oracle to PostgreSQL)?",
    options: [
      "No - DMS only moves identical engines",
      "No - engine changes require rebuilding the database manually",
      "Yes, but only for databases under 1 GB",
      "Yes - DMS supports homogeneous and heterogeneous migrations (engine changes, often assisted by the Schema Conversion Tool)"
    ],
    answer: [3],
    explanation: "DMS handles both same-engine and engine-changing migrations; for heterogeneous moves, the AWS Schema Conversion Tool converts schemas and code objects between engines first. Size limits do not exist at this scale of question.",
    rationales: [
      "Engine diversity is one of DMS's headline capabilities.",
      "Manual rebuilds are what DMS exists to avoid.",
      "No such size cap is part of the service model.",
      ""
    ],
    services: ["AWS Database Migration Service"],
    tags: ["dms", "heterogeneous"]
  },
  {
    id: "1.3-024",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "medium",
    stem: "Which tool converts database schemas and stored procedures between engines during a heterogeneous migration (for example, Oracle to Aurora PostgreSQL)?",
    options: [
      "AWS Schema Conversion Tool (SCT)",
      "AWS Config",
      "Amazon Macie",
      "AWS Secrets Manager"
    ],
    answer: [0],
    explanation: "SCT is DMS's companion for engine changes: it translates schemas, tables, and code objects (stored procedures, functions) to the target engine's dialect, flagging what needs manual attention. DMS then moves the data.",
    rationales: [
      "",
      "Config records resource configurations.",
      "Macie finds sensitive data.",
      "Secrets Manager stores credentials."
    ],
    services: ["AWS Schema Conversion Tool"],
    tags: ["sct", "heterogeneous"]
  },
  {
    id: "1.3-025",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "medium",
    stem: "As part of replatforming, a team replaces a self-managed database with Amazon RDS. What operational benefit follows?",
    options: [
      "The database stops needing backups of any kind",
      "The team must now patch the RDS hosts manually",
      "AWS takes ownership of the customer's data",
      "Patch management, backups, and failover infrastructure become AWS-operated, shrinking the team's maintenance burden"
    ],
    answer: [3],
    explanation: "Managed databases absorb the platform work - patching, backup infrastructure, replication, failover - which is exactly the replatforming rationale: gain operational relief without re-architecting the application.",
    rationales: [
      "Backups still exist - they are automated, and the customer configures retention.",
      "Customers never patch RDS hosts - that is the managed layer.",
      "Data ownership never transfers to AWS.",
      ""
    ],
    services: ["Amazon RDS"],
    tags: ["replatform", "managed services"]
  },
  {
    id: "1.3-026",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "hard",
    stem: "A business wants out of its data center THIS quarter. The applications are old but functional, and the team plans to modernize later. Which sequencing is best?",
    options: [
      "Refactor everything first, migrate in five years",
      "Retain everything permanently and abandon the plan",
      "Rehost now to exit the data center quickly, then optimize (replatform/refactor) incrementally in the cloud",
      "Repurchase every application with SaaS products immediately"
    ],
    answer: [2],
    explanation: "This is the classic pragmatic sequence: rehost for speed and risk reduction, then iterate - right-size, replatform, refactor - once running in AWS, where optimization is cheaper and lower-risk. Speed first, modernization continuously.",
    rationales: [
      "Multi-year refactoring defeats the deadline entirely.",
      "Retaining abandons the goal instead of achieving it.",
      "",
      "Blanket SaaS replacement is rarely possible - products may not exist for every function."
    ],
    services: [],
    tags: ["rehost", "strategy sequencing"]
  },
  {
    id: "1.3-027",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "medium",
    stem: "Which sequence names the standard phases of an AWS migration program?",
    options: [
      "Purchase, install, invoice",
      "Guess, hope, restart",
      "Code, test, deploy only",
      "Assess (business case and discovery), mobilize (build the landing zone and plan), migrate and modernize (move and improve workloads)"
    ],
    answer: [3],
    explanation: "The AWS migration framework runs assess → mobilize → migrate and modernize: build the case and inventory, prepare the target environment and plan, then execute waves of migration and ongoing optimization. Phases keep large programs organized.",
    rationales: [
      "That is a purchasing cycle, not a migration program.",
      "That is not a real methodology - clearly the joke option.",
      "That is a software release cycle.",
      ""
    ],
    services: [],
    tags: ["migration phases"]
  },
  {
    id: "1.3-028",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "easy",
    stem: "A company wants to move its on-premises file shares into Amazon S3 and Amazon EFS over the network, with scheduled incremental syncs. Which service fits?",
    options: [
      "AWS DataSync",
      "AWS WAF",
      "Amazon Rekognition",
      "AWS Organizations"
    ],
    answer: [0],
    explanation: "DataSync is the online file-migration workhorse: it syncs file data from NFS/SMB shares into S3, EFS, or FSx with scheduling, incremental transfers, and verification - the standard tool for file-share migrations.",
    rationales: [
      "",
      "WAF filters web requests.",
      "Rekognition analyzes images and video.",
      "Organizations manages multiple accounts."
    ],
    services: ["AWS DataSync"],
    tags: ["datasync", "file migration"]
  },
  {
    id: "1.3-029",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "medium",
    stem: "Before migrating, a team needs an inventory of its on-premises servers, applications, and their interdependencies, to group workloads into migration waves. Which tool provides this discovery?",
    options: [
      "Amazon Polly",
      "AWS Application Discovery Service",
      "Amazon Macie",
      "AWS Shield"
    ],
    answer: [1],
    explanation: "Application Discovery Service maps the estate: which servers exist, what applications run on them, and which dependencies connect them - the information that turns a chaotic move into planned migration waves.",
    rationales: [
      "Polly is text-to-speech.",
      "",
      "Macie finds sensitive data in S3.",
      "Shield defends against DDoS."
    ],
    services: ["AWS Application Discovery Service"],
    tags: ["discovery", "assessment"]
  },
  {
    id: "1.3-030",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "medium",
    stem: "After migrating, how does a company typically realize cost savings on AWS beyond simply stopping data center spend?",
    options: [
      "By leaving every resource oversized exactly as it was on-premises",
      "By never reviewing usage",
      "By right-sizing resources, applying elasticity, and choosing pricing models (for example Savings Plans) that fit actual usage",
      "By disabling all monitoring to reduce tooling spend"
    ],
    answer: [2],
    explanation: "The second wave of savings is optimization: rehosted workloads are usually over-sized, so right-sizing, elasticity, and commitment pricing compound the data center exit into materially lower run costs. Optimization is a named phase, not an afterthought.",
    rationales: [
      "Lift-and-shift sizes are deliberately conservative - leaving them means leaving savings.",
      "Visibility is what enables optimization; skipping it forfeits savings.",
      "",
      "Monitoring costs pennies and enables the optimization that saves dollars."
    ],
    services: [],
    tags: ["cost optimization", "migration benefits"]
  },
  {
    id: "1.3-031",
    domain: 1,
    task: "1.3",
    type: "single",
    difficulty: "hard",
    stem: "A company runs its estate on VMware and moves the VMs unchanged into VMware Cloud on AWS. In the 7 Rs, this is:",
    options: [
      "Refactor",
      "Repurchase",
      "Retire",
      "Relocate"
    ],
    answer: [3],
    explanation: "Relocate is the hypervisor-level strategy: the VMs are not rebuilt, replatformed, or even rehosted onto EC2 - they continue running under the same VMware hypervisor, now hosted on AWS hardware.",
    rationales: [
      "Refactoring rebuilds applications - nothing was rebuilt here.",
      "Repurchasing replaces products with SaaS.",
      "Retiring decommissions - the estate is still running.",
      ""
    ],
    services: [],
    tags: ["relocate", "vmware", "7 rs"]
  },
  {
    id: "1.3-032",
    domain: 1,
    task: "1.3",
    type: "multi",
    difficulty: "easy",
    stem: "Which TWO of the following are legitimate AWS migration strategies from the 7 Rs? (Select TWO.)",
    options: [
      "Rehost",
      "Repurchase",
      "Re-carpet",
      "Re-invoice",
      "Re-imburse"
    ],
    answer: [0, 1],
    explanation: "Rehost (lift and shift) and repurchase (move to SaaS) are two of the seven named strategies - alongside relocate, replatform, refactor, retire, and retain. The distractors are invented words wearing the same prefix.",
    rationales: [
      "",
      "",
      "Not a strategy - carpets are not part of the 7 Rs.",
      "Not a strategy - invoicing is not an application's migration path.",
      "Not a strategy - and not a real word in this context."
    ],
    services: [],
    tags: ["7 rs"]
  }
);
