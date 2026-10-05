window.NOTES = window.NOTES || [];
window.NOTES.push(
  {
    id: "3.1",
    domain: 3,
    task: "3.1",
    title: "Define methods of deploying and operating in the AWS Cloud",
    weight: "Domain 3 is 34% of the exam",
    readMinutes: 10,
    summary: "Task 3.1 asks how you actually get work into AWS and operate it there: the three deployment models (cloud, hybrid, on-premises), the four ways to interact with AWS (console, CLI, SDKs, and infrastructure as code), and what \"fully managed\" really buys you. The questions are mostly scenario-to-method matches: a company in a hurry, a company that must keep some systems at home, a team that wants repeatable environments, or a team that wants fewer servers to patch.",
    sections: [
      {
        heading: "The three deployment models",
        body: [
          "**Cloud-only deployment** runs everything on AWS: no physical servers of your own, everything elastic and pay-as-you-go. This is the simplest model and the cheapest to operate, because AWS owns the hardware and the facility.",
          "**Hybrid deployment** connects cloud resources to on-premises infrastructure that keeps running. Real reasons to stay hybrid include a multi-year investment in existing servers that has not paid off yet, data or applications that cannot legally move yet, and low-latency or local-processing needs. Hybrid is a transition state **or** a long-term design, not a failure - the exam likes answers that say \"phased, workload-by-workload\" over \"migrate everything at once\".",
          "**On-premises (private cloud)** means the workloads never leave your data center, even if you virtualize them. AWS fits this model with **AWS Outposts** - AWS hardware and services installed in your own facility - and with hybrid services such as Storage Gateway that bridge the two worlds."
        ],
        table: {
          headers: ["Model", "Where workloads run", "Typical exam trigger"],
          rows: [
            ["Cloud-only", "Entirely on AWS", "\"no existing infrastructure\", startup, greenfield"],
            ["Hybrid", "Partly AWS, partly on-premises", "\"existing investment\", \"compliance keeps some data local\", phased migration"],
            ["On-premises", "Customer data center (possibly on Outposts)", "\"cannot move\", \"low latency to local systems\""]
          ]
        }
      },
      {
        heading: "Four ways to work in AWS: console, CLI, SDKs, IaC",
        body: [
          "The **AWS Management Console** is the browser-based graphical interface - the best tool for learning, exploring, and one-off manual tasks. It is also the worst tool for anything you will repeat, because humans do not click the same way twice.",
          "The **AWS CLI** drives AWS from a command line; scripts built on it can be reused, scheduled, and reviewed. The **AWS SDKs** do the same thing from inside application code in languages such as Python, JavaScript, and Java - the right answer whenever a question says an application must call AWS services programmatically.",
          "**Infrastructure as code (IaC)** writes your environment as a template file: the tooling provisions exactly what the template declares, the same way, every time. On AWS the native service is **AWS CloudFormation** (templates in JSON or YAML); HashiCorp Terraform and AWS CDK are popular alternatives. IaC gives you repeatability, version control, review-before-apply, and easy teardown - it is the answer to \"the team needs identical environments in every account/Region\" or \"manual setup keeps causing drift\"."
        ],
        bullets: [
          "**Console** - interactive, learning, one-time actions; not reproducible.",
          "**CLI** - scripts and automation from a terminal; same API underneath as the console.",
          "**SDK** - application code integrates with AWS services directly (write to DynamoDB, publish to SNS).",
          "**IaC / CloudFormation** - environments as versioned templates; identical, reviewable, repeatable deployments."
        ]
      },
      {
        heading: "What \"fully managed\" and \"serverless\" mean",
        body: [
          "A **fully managed** service is one where AWS operates everything beneath the layer you actually use: provisioning, patching, capacity, and hardware. Your responsibilities shrink to your data, your configuration, and your application logic. The further down the stack a managed service reaches, the less operational work you inherit.",
          "**Serverless** is the strongest form of managed: no servers are visible to you at all, scaling is automatic, and you typically pay per use rather than per idle hour. Amazon S3, Amazon DynamoDB, AWS Lambda, Amazon SQS, and Amazon Athena are the classic examples. Serverless does not mean \"no servers exist\" - it means you never see, configure, or patch one.",
          "The exam tests the operational consequence, not the buzzword: choosing a managed or serverless service reduces the operational burden versus running the equivalent on EC2, and \"the team wants to stop patching servers\" is a stem that points at managed/serverless options."
        ]
      },
      {
        heading: "Operating patterns: APIs everywhere, loose coupling",
        body: [
          "Everything in AWS is exposed through **APIs** - the console, CLI, SDKs, and IaC are all clients of the same underlying service APIs. This is why automation is first-class on AWS: anything you can click, you can script.",
          "**Loose coupling** is the design principle that keeps systems operable at scale: components interact through interfaces (queues, events, APIs) rather than direct synchronous calls, so one slow or failed component does not drag the others down. The managed building blocks are **Amazon SQS** (a queue that buffers work for later processing), **Amazon SNS** (a pub-sub service that pushes one message to many subscribers), and **Amazon EventBridge** (an event bus that routes events from sources to targets by rule).",
          "A queue decouples in **time** (the producer is freed the moment the message is accepted; the consumer catches up later), while pub-sub decouples by **audience** (one event reaches every interested subscriber). Scenario stems about \"spiky workloads\", \"workers falling behind\", or \"services blocking each other\" are queue questions; \"notify everyone who cares\" are SNS questions."
        ]
      }
    ],
    mustKnow: [
      "Three deployment models: cloud-only (all in AWS), hybrid (some on-premises stays), on-premises (nothing moves; Outposts is the AWS hardware option).",
      "Four ways to operate AWS: Management Console (GUI), AWS CLI (scripts), AWS SDKs (application code), infrastructure as code with AWS CloudFormation.",
      "IaC makes environments repeatable, version-controlled, reviewable, and identical across accounts and Regions.",
      "Fully managed = AWS runs provisioning, patching, capacity, and hardware; you own data, configuration, and code.",
      "Serverless = no servers visible, automatic scaling, pay-per-use (S3, DynamoDB, Lambda, SQS, Athena).",
      "SQS queues buffer work and decouple in time; SNS pushes one message to many subscribers; EventBridge routes events by rule.",
      "Everything is an API: console, CLI, SDK, and CloudFormation all call the same service APIs underneath."
    ],
    examTips: [
      "\"Needs identical environments every time\" or \"setup drifts between teams\" points to infrastructure as code (CloudFormation), not more console documentation.",
      "\"Some systems must stay on-premises for now\" is hybrid - look for answers about connecting and migrating gradually, never \"abandon the investment\".",
      "\"The team is small and does not want to manage servers\" pushes toward managed or serverless services over EC2.",
      "Spiky workloads or blocking service-to-service calls are solved by SQS; one-to-many notifications are SNS; routing many event types to many targets by rules is EventBridge."
    ]
  },
  {
    id: "3.2",
    domain: 3,
    task: "3.2",
    title: "Define the AWS global infrastructure",
    weight: "Domain 3 is 34% of the exam",
    readMinutes: 10,
    summary: "Task 3.2 is the geography of AWS: Regions, Availability Zones, edge locations, and the newer layers (Local Zones, Wavelength, Outposts), plus the four factors that decide which Region a workload should live in. The exam pairs each factor with a scenario - data residency rules, user latency, cost differences, or a service that only exists in some Regions - and expects you to name the driver.",
    sections: [
      {
        heading: "Regions: isolated clusters of data centers",
        body: [
          "A **Region** is a physical geographic location containing multiple, isolated data centers grouped into Availability Zones. Each Region is **fully independent**: no customer data is replicated between Regions without you asking for it, which is exactly why data residency requirements can be satisfied by picking a Region inside the required country or bloc.",
          "New services and features roll out Region by Region, so not every service exists everywhere - \"the required service is not available in the nearest Region\" is a legitimate Region-selection driver. Prices also differ between Regions (generally cheaper in the US than elsewhere), which makes cost a driver too.",
          "Regions come in three flavors you should recognize: standard Regions (the normal case), **China Regions** (operated separately, separate account entities), and the **AWS GovCloud (US) Regions** (restricted to US entities for regulated government workloads)."
        ],
        bullets: [
          "**Data residency/compliance** - \"data must remain in-country\" picks the Region before anything else does.",
          "**Latency** - put compute near users; latency is physics and no service undoes distance.",
          "**Cost** - the same workload can cost meaningfully more in one Region than another.",
          "**Service availability** - check the Region offers the services and features the workload needs."
        ]
      },
      {
        heading: "Availability Zones: the unit of high availability",
        body: [
          "An **Availability Zone (AZ)** is one or more discrete data centers with independent power, cooling, and networking, located close to other AZs in the same Region (tens of miles apart) and connected by high-bandwidth, low-latency links. A Region today has a minimum of three AZs.",
          "The design rule the exam wants: **multiply AZs, not data centers**. Deploying across multiple AZs protects against fire, flood, power loss, or network failure in one facility while keeping millisecond-level latency between the copies. A single data center is too small a unit of failure; a second Region is usually a bigger investment than the scenario needs.",
          "Managed services hide this plumbing: RDS **Multi-AZ** keeps a standby in another AZ and fails over automatically; S3 and DynamoDB store data redundantly across multiple AZs by default; Elastic Load Balancing spreads traffic across AZs. When a stem says \"data center outage must not take us down\", the answer is multi-AZ within one Region."
        ],
        table: {
          headers: ["Scope", "Protects against", "Typical tooling"],
          rows: [
            ["Multiple AZs, one Region", "Building/facility failure", "RDS Multi-AZ, S3, ELB, instances in 2+ AZs"],
            ["Multiple Regions", "Regional disaster or residency-driven placement", "S3 cross-Region replication, Route 53 failover, DR strategies"]
          ]
        }
      },
      {
        heading: "Edge locations and the content delivery layer",
        body: [
          "**Edge locations** are small AWS sites spread across many more cities than Regions exist in, operated for **Amazon CloudFront** (the CDN). CloudFront caches copies of your content at edge locations near users, so a video watched in Lima or Lagos is served from a nearby edge rather than from a distant Region - lower latency for users and less load on your origin.",
          "Edge locations outnumber AZs by an order of magnitude and are the answer to \"serve global users with low latency\" for web content. **Route 53** complements this at the DNS layer: it answers \"where should this user go\" with latency-aware, geolocation, weighted, or failover routing.",
          "The newer infrastructure layers extend Regions outward rather than replacing them: **AWS Local Zones** put compute, storage, and a few services in a city near large population centers for single-digit-millisecond access; **AWS Wavelength** embeds the same idea inside 5G telecom networks for ultra-low-latency mobile use; **AWS Outposts** installs AWS hardware in your own data center for workloads that cannot leave."
        ]
      },
      {
        heading: "Choosing a Region: the four drivers",
        body: [
          "Every Region-selection scenario reduces to one of four drivers, and the stem usually names it explicitly. **Compliance and data residency** outranks everything: if the law says the data stays in-country, all other factors are irrelevant.",
          "After that come **latency** (proximity to end users), **cost** (Regional price differences), and **service availability** (features or services not yet present in a Region). Note what is *not* a driver: the AZ count of a Region, whether it is physically closest to your headquarters, or which Region your AWS account was created in - none of those are exam answers."
        ],
        bullets: [
          "Priority order when the stem mixes drivers: compliance/residency first, then latency to users, then cost, then service availability.",
          "\"Users in Europe, data must stay in the EU\" - pick a European Region; latency and cost are secondary.",
          "\"Globally distributed users, static content\" - CloudFront edge caching, not a fifth Region.",
          "\"Data center failure must not interrupt the app\" - multi-AZ deployment, not multi-Region."
        ]
      }
    ],
    mustKnow: [
      "A Region is an independent geographic cluster of AZs; data stays in-Region unless you explicitly replicate it.",
      "An AZ is one or more discrete data centers with independent power/cooling/network, low-latency linked to sibling AZs; Regions have a minimum of three.",
      "Multi-AZ deployment is the standard answer for surviving a data center failure; multi-Region is for regional disasters or residency.",
      "Edge locations are CloudFront CDN cache sites in far more cities than Regions; they cut latency for global content delivery.",
      "Four Region-selection drivers: compliance/data residency, latency to users, cost, and service availability - residency outranks all.",
      "Local Zones = city-level extensions; Wavelength = 5G network embeddings; Outposts = AWS hardware in your own data center.",
      "GovCloud (US) Regions serve US government/regulated workloads; China Regions are separately operated."
    ],
    examTips: [
      "Whenever a stem mentions a law, regulation, or \"data must remain in X\", the deciding driver is compliance - everything else is noise.",
      "\"Users complain of slow loads worldwide\" is a CloudFront edge-caching question, not a new-Region question.",
      "A single facility outage scenario maps to multiple Availability Zones in one Region; reserve multi-Region answers for regional-scale disasters.",
      "Latency questions point at proximity: Region near users for compute, edge locations for content, Local Zones when milliseconds matter most in one city."
    ]
  },
  {
    id: "3.3",
    domain: 3,
    task: "3.3",
    title: "Identify AWS compute services",
    weight: "Domain 3 is 34% of the exam",
    readMinutes: 12,
    summary: "Task 3.3 is the biggest single service-matching task: given a workload description, pick the compute service that fits - EC2 for full control of virtual servers, Lambda for event-driven code with no servers, containers (ECS/EKS/Fargate) for packaged applications, Elastic Beanstalk for orchestrated web apps, Lightsail for simple projects. The differentiator in almost every stem is the balance between control and convenience, plus how the code is invoked.",
    sections: [
      {
        heading: "Amazon EC2: virtual servers, maximum control",
        body: [
          "**Amazon EC2** provides resizable virtual machines (**instances**) in the cloud. You choose the **Amazon Machine Image (AMI)** - the operating system and preinstalled software - and an **instance type** sized by vCPU and memory (the family names encode the specialty: general purpose, memory-optimized, compute-optimized, storage-optimized, accelerated/GPU). You control the OS, the ports, the patching schedule; you also own that maintenance.",
          "EC2 pairs with **Amazon EC2 Auto Scaling** to add and remove instances automatically based on demand, and with **Elastic Load Balancing (ELB)** to spread incoming traffic across the healthy instances. The Auto Scaling + ELB combination is the standard answer for \"traffic varies and the app must stay available\".",
          "EC2 pricing models also live in this task: **On-Demand** (per-second/hour, no commitment), **Spot Instances** (spare capacity at deep discounts, interruptible with two minutes' notice), and **Reserved Instances / Savings Plans** (1- or 3-year commitments for steady workloads). Match them to steady-state versus bursty versus fault-tolerant workloads."
        ],
        table: {
          headers: ["Pricing model", "Discount vs On-Demand", "Fits"],
          rows: [
            ["On-Demand", "Baseline (none)", "Unpredictable, short-term, new workloads"],
            ["Spot", "Up to ~90%", "Batch, fault-tolerant, interruptible jobs"],
            ["Reserved Instances / Savings Plans", "Up to ~72%", "Steady, predictable baseline usage; 1- or 3-year commitment"]
          ]
        }
      },
      {
        heading: "AWS Lambda: run code, manage nothing",
        body: [
          "**AWS Lambda** runs your code in response to **events** - an HTTP request via API Gateway, a file arriving in S3, a message on a queue, a table change in DynamoDB, a schedule. You supply a function; AWS provisions, scales, patches, and bills only for the milliseconds of execution (requests plus compute time).",
          "The boundaries to memorize: functions run for a **maximum of 15 minutes** per invocation, so long batch jobs belong elsewhere; cold starts add small latency; and runtime choice is limited to the supported languages and custom runtimes. \"Runs occasionally, short-lived, event-triggered, zero administration\" is the Lambda signature.",
          "Lambda is also the default compute inside serverless architectures: API Gateway + Lambda + DynamoDB is the classic three-tier serverless web backend the exam describes again and again."
        ],
        bullets: [
          "**Event-driven** - something happens (request, upload, message, schedule), the function runs, you pay for the run.",
          "**15-minute cap** - long-running or continuous processing needs EC2, containers, or a batch service.",
          "**Zero management** - no OS, patching, fleet sizing, or idle cost; scaling is automatic.",
          "Frequent, steady, high-utilization loads can cost less on EC2/containers - serverless is not automatically cheapest."
        ]
      },
      {
        heading: "Containers: ECS, EKS, and Fargate",
        body: [
          "**Containers** package an application with its dependencies into a portable image, so it runs identically in dev, test, and production. Images are stored in **Amazon Elastic Container Registry (ECR)**.",
          "**Amazon Elastic Container Service (ECS)** is AWS's own container orchestrator - simple, AWS-integrated, and the default choice when you do not need portability of the control plane. **Amazon Elastic Kubernetes Service (EKS)** runs managed Kubernetes - the answer when the organization is already committed to Kubernetes tooling or needs the ecosystem. Both schedulers run the same two compute options: **EC2 launch type** (you manage the instances) or **AWS Fargate** (serverless containers - specify CPU and memory per task, no instances to manage at all).",
          "Decision order for the exam: containers because the app is already containerized or microservices; ECS vs EKS by organizational preference; Fargate vs EC2 launch type by \"who patches the nodes\"."
        ]
      },
      {
        heading: "Quick starts and app platforms: Lightsail and Elastic Beanstalk",
        body: [
          "**Amazon Lightsail** is the simple, low-cost, fixed-bundle option: a virtual server with a preconfigured image (WordPress, Node.js, LAMP), predictable monthly pricing, simple networking and storage. It exists for people who do not want to learn VPC, IAM roles, and launch templates to host a small site - the exam signals it with \"simple\", \"low-cost\", \"small business website\".",
          "**AWS Elastic Beanstalk** is an application platform (PaaS): you upload your code and Beanstalk provisions and operates the surrounding stack - EC2 fleet, load balancer, auto scaling, monitoring - while you keep full control of the underlying resources and can customize anything. It supports Java, .NET, Node.js, Python, PHP, Go, Ruby, and Docker. The tell is \"deploy a web application quickly without managing the infrastructure, but keep the option to customize\".",
          "The contrast matters: Beanstalk orchestrates real EC2 resources (visible in your account, still patchable by you), while Lambda and Fargate hide the platform entirely. Lightsail is a simplified front door over EC2 for small workloads."
        ],
        table: {
          headers: ["Service", "You manage", "Pick it when"],
          rows: [
            ["EC2", "OS, patching, capacity, scaling", "Full control, custom software, OS-level needs"],
            ["Elastic Beanstalk", "Code (+ optional tuning)", "Web apps deployed fast with managed scaling and LB"],
            ["ECS / EKS (+ EC2 launch)", "Cluster nodes, images", "Containerized apps, orchestrator control"],
            ["Fargate", "Images and task sizing only", "Containers without managing servers"],
            ["Lambda", "Code only", "Event-driven, short tasks, spiky traffic"],
            ["Lightsail", "App content", "Simple, predictable, low-cost small deployments"]
          ]
        }
      }
    ],
    mustKnow: [
      "EC2 = full control of VMs (AMI + instance type) but you own patching and capacity; Auto Scaling + ELB make it elastic and highly available.",
      "EC2 pricing: On-Demand (flexible), Spot (up to ~90% off, interruptible), Reserved/Savings Plans (commitment for steady loads).",
      "Lambda runs code on events, scales automatically, bills per request and millisecond, with a 15-minute maximum per invocation.",
      "Containers: ECR stores images; ECS is AWS-native orchestration; EKS is managed Kubernetes; Fargate runs both serverlessly (no nodes to manage).",
      "Elastic Beanstalk deploys web apps fast and manages the EC2/ELB/auto scaling stack for you while leaving it customizable.",
      "Lightsail = simple, low-cost bundles (VPS-style) for small projects like a WordPress site.",
      "Serverless trio for web backends: API Gateway (front door) + Lambda (logic) + DynamoDB (data)."
    ],
    examTips: [
      "\"Wants control of the operating system\" or needs custom software/agents = EC2; \"does not want to manage any servers\" = Lambda or Fargate; \"already runs Kubernetes\" = EKS.",
      "A job that runs for hours continuously fails Lambda's 15-minute limit - the correct answer is EC2, Fargate, or a batch pattern, never Lambda.",
      "\"Fault-tolerant batch job, cost is the priority\" = Spot Instances; \"steady baseline load, budget predictable\" = Reserved/Savings Plans; \"short experiment\" = On-Demand.",
      "\"Small business, wants a website with predictable monthly cost and no AWS expertise\" = Lightsail, not EC2 or Beanstalk."
    ]
  },
  {
    id: "3.4",
    domain: 3,
    task: "3.4",
    title: "Identify AWS database services",
    weight: "Domain 3 is 34% of the exam",
    readMinutes: 11,
    summary: "Task 3.4 is a four-way matching problem: relational (RDS, Aurora), key-value/NoSQL (DynamoDB), caching (ElastiCache), and specialty databases (DocumentDB, Neptune, plus Redshift for analytics). The stem always signals the data shape and the access pattern - joins and SQL point relational; massive scale and simple lookups point DynamoDB; microsecond reads point cache; graphs and documents have their own services.",
    sections: [
      {
        heading: "Relational on AWS: RDS and Aurora",
        body: [
          "**Amazon RDS** runs managed relational databases: you pick an engine - MySQL, PostgreSQL, MariaDB, Oracle, or Microsoft SQL Server - and AWS handles provisioning, backups, patching, and failover while you keep SQL, schemas, and joins. \"The team knows SQL and wants to keep their existing engine with less administration\" is RDS.",
          "**Amazon Aurora** is AWS's cloud-native relational engine, compatible with both MySQL and PostgreSQL, delivering higher performance and durability than standard RDS: data is automatically replicated six ways across three AZs, storage scales automatically, and Aurora offers up to 15 low-latency **read replicas** with fast automatic failover. When a stem says \"high performance MySQL/PostgreSQL-compatible with self-healing storage\", the answer is Aurora.",
          "The two availability features are frequently confused: **Multi-AZ** keeps a *standby copy* in another AZ for **failover** (you do not read from it; it exists for availability), while **read replicas** are *additional copies serving read traffic* for **performance/scaling** (you can query them, and promote one if needed). Availability question = Multi-AZ; \"reads are overwhelming the primary\" = read replicas."
        ],
        table: {
          headers: ["Feature", "Purpose", "Readable?", "Direction"],
          rows: [
            ["Multi-AZ standby", "High availability / automatic failover", "No", "Synchronous replication to standby"],
            ["Read replicas", "Read scaling / offload queries", "Yes", "Asynchronous replication from primary"]
          ]
        }
      },
      {
        heading: "DynamoDB: NoSQL at any scale",
        body: [
          "**Amazon DynamoDB** is a fully managed, serverless **key-value and document** database built for single-digit-millisecond response at effectively unlimited scale. There are no servers, no maintenance windows, and no capacity to provision by default - throughput scales on request - and it replicates across multiple AZs automatically.",
          "The exam signature is scale plus simplicity: \"millions of users\", \"mobile gaming leaderboard\", \"shopping cart that must never go down\", \"single-digit millisecond lookups\" all point to DynamoDB. What it does *not* do well is ad-hoc joins and complex multi-table transactions - if the stem needs classic SQL analytics or joins, relational is the better answer.",
          "Remember the operational contrast as a pair: RDS = familiar SQL, you manage the connection pool and capacity; DynamoDB = unfamiliar access pattern (partition keys, not joins), AWS handles everything."
        ]
      },
      {
        heading: "Caching with ElastiCache",
        body: [
          "**Amazon ElastiCache** runs managed in-memory caches - **Redis** (rich: data structures, persistence, pub/sub) or **Memcached** (simple, pure cache) - sitting in front of a slower database. Reads that would each hit the database are served from memory in **microseconds**, cutting both latency and database load.",
          "The triggers are explicit in stems: \"the same popular items are queried constantly\", \"read latency must drop\", \"database is overloaded by repetitive reads\", or \"session/state storage shared across web servers\" (Redis is the usual pick). Caching is a performance accelerator, not a system of record - the source of truth stays in RDS or DynamoDB."
        ]
      },
      {
        heading: "Specialty and analytics databases",
        body: [
          "AWS ships purpose-built engines for data shapes the general databases handle poorly, and the exam expects service-recognition level knowledge. **Amazon DocumentDB** stores **document/JSON** data with MongoDB compatibility. **Amazon Neptune** is a **graph** database for highly connected data - social networks, fraud rings, recommendation edges, knowledge graphs - where you traverse relationships rather than scan rows. **Amazon Timestream** is for **time-series** data such as IoT and operational metrics. **Amazon QLDB** provides an immutable, cryptographically verifiable **ledger** of every change.",
          "**Amazon Redshift** is the petabyte-scale **data warehouse**: columnar storage optimized for complex analytical queries and BI tools, not for transactional apps. It reappears under analytics in task 3.7, but in a database-matching question \"analytics over historical data at petabyte scale\" is Redshift.",
          "The matching table below is the whole task in one view - most 3.4 questions are a single row lookup once you spot the signal in the stem."
        ],
        table: {
          headers: ["Stem signal", "Service", "Category"],
          rows: [
            ["SQL, joins, existing MySQL/PostgreSQL/Oracle/SQL Server", "RDS", "Relational (managed)"],
            ["High-performance MySQL/PostgreSQL-compatible, auto-scaling storage", "Aurora", "Relational (cloud-native)"],
            ["Key-value lookups, single-digit ms, massive scale, serverless", "DynamoDB", "NoSQL key-value/document"],
            ["Repeated identical reads, microsecond latency, offload DB", "ElastiCache (Redis/Memcached)", "In-memory cache"],
            ["JSON documents, MongoDB compatibility", "DocumentDB", "Document database"],
            ["Relationships/connections between entities, traversals", "Neptune", "Graph database"],
            ["Sensor/metrics data ordered by time", "Timestream", "Time-series database"],
            ["Immutable, verifiable record of all changes", "QLDB", "Ledger database"],
            ["Complex analytics over historical/petabyte data, BI tools", "Redshift", "Data warehouse"]
          ]
        }
      }
    ],
    mustKnow: [
      "RDS engines: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server; AWS manages patching, backups, and failover.",
      "Aurora is MySQL/PostgreSQL-compatible, replicates six ways across three AZs, supports up to 15 read replicas, and fails over fast.",
      "Multi-AZ = standby for availability (not readable); read replicas = readable copies for read scaling.",
      "DynamoDB is serverless key-value/document NoSQL with single-digit-millisecond latency at any scale; poor fit for joins.",
      "ElastiCache (Redis or Memcached) is the in-memory cache that offloads repeated reads and holds session state; not the system of record.",
      "DocumentDB = JSON documents; Neptune = graphs; Timestream = time-series; QLDB = immutable ledger; Redshift = petabyte analytics warehouse.",
      "Managed relational keeps SQL skills and schemas while removing server administration; serverless NoSQL removes capacity planning entirely."
    ],
    examTips: [
      "First classify the data shape in the stem (relational joins? key lookups? documents? graph? time series?), then pick the row of the matching table - it answers most 3.4 questions instantly.",
      "\"Reads are overwhelming the database\" means ElastiCache (or read replicas); \"survive an AZ failure\" means Multi-AZ - never swap the two.",
      "\"Millions of users, simple fast lookups, no servers\" is DynamoDB; adding \"joins and complex reporting\" changes the answer to relational or Redshift.",
      "Aurora is the answer whenever the stem says \"MySQL/PostgreSQL-compatible\" AND \"high performance\" or \"self-healing/multi-AZ by default\"."
    ]
  },
  {
    id: "3.5",
    domain: 3,
    task: "3.5",
    title: "Identify AWS network services",
    weight: "Domain 3 is 34% of the exam",
    readMinutes: 12,
    summary: "Task 3.5 covers the networking toolkit: VPC and its routing/security pieces (subnets, internet gateway, NAT gateway, security groups, NACLs), DNS with Route 53, content delivery with CloudFront, private connectivity with VPN and Direct Connect, API front doors with API Gateway, and global acceleration. Expect layout scenarios (what goes in a public vs private subnet) and service-matching (dedicated link vs encrypted tunnel vs cached content).",
    sections: [
      {
        heading: "VPC: your private network in the cloud",
        body: [
          "A **Virtual Private Cloud (VPC)** is a logically isolated network you own inside an AWS Region, subdivided into **subnets** that live in specific AZs. A subnet is **public** if its route table sends internet-bound traffic to an **internet gateway (IGW)** - resources with public IPs there are reachable from the internet; a **private** subnet has no such route, so its resources can only be reached from inside the VPC.",
          "The standard three-tier layout: web tier in public subnets (must accept user traffic), application and database tiers in private subnets (reachable only from within). Resources in private subnets that need to *initiate* outbound connections (downloads, patches, external APIs) use a **NAT gateway** in a public subnet, which allows outbound-but-not-inbound traffic.",
          "**Security groups** and **network ACLs** are the two filtering layers and a favorite comparison question: a security group is **stateful** and attaches to an **instance/eni** (return traffic is allowed automatically; default deny inbound); a network ACL is **stateless** and applies to an entire **subnet** (must allow traffic in both directions explicitly; rules numbered, evaluated in order). Defense in depth uses both."
        ],
        table: {
          headers: ["Control", "Applies to", "Stateful?", "Default posture"],
          rows: [
            ["Security group", "Instance (ENI) level", "Yes - replies allowed automatically", "Deny all inbound; allow all outbound"],
            ["Network ACL", "Subnet level", "No - must allow both directions explicitly", "Allow all by default; deny rules possible"]
          ]
        }
      },
      {
        heading: "Route 53: DNS that also routes traffic",
        body: [
          "**Amazon Route 53** is managed DNS: domain registration, hosted zones, and record answers for users worldwide. Beyond name resolution it offers **routing policies** that make DNS a traffic-management tool: **simple** (one answer), **weighted** (split traffic by percentage, useful for canary releases), **latency-based** (send users to the lowest-latency healthy Region), **failover** (primary with a disaster-recovery standby, switched by health checks), and **geolocation** (answer based on the user's location).",
          "**Health checks** monitor endpoints and drive failover and latency routing - \"if the primary site goes down, DNS should stop returning it\" is a Route 53 health-check + failover scenario. Route 53 also has no special hardware to manage and is itself highly available by design."
        ]
      },
      {
        heading: "CloudFront: cache at the edge",
        body: [
          "**Amazon CloudFront** is the content delivery network (CDN): copies of your content are cached at **edge locations** worldwide, so each user is served from the nearest edge instead of your origin servers. Static assets are the classic case; CloudFront can also accelerate dynamic and streamed content. Benefits are lower latency for users, reduced load and cost at the origin, and optional TLS termination at the edge.",
          "CloudFront integrates with origins of any kind - an S3 bucket, an EC2/ALB backend, or any HTTP server - and pairs with **Route 53** (users resolve your domain) and with **AWS Global Accelerator** when raw TCP/UDP acceleration (not caching) is wanted. \"Globally scattered users, slow downloads of the same content\" is the CloudFront tell."
        ]
      },
      {
        heading: "Hybrid connectivity: VPN vs Direct Connect vs Transit Gateway",
        body: [
          "**AWS Site-to-Site VPN** connects your on-premises network to your VPC over the public internet inside an **IPsec encrypted tunnel**: setup takes minutes, cost is low, bandwidth is bounded by the internet. It is the fast, cheap, encrypted answer - and the standard temporary link during migration.",
          "**AWS Direct Connect** is a **private, dedicated physical fiber link** into AWS that bypasses the internet entirely: predictable high bandwidth, consistent low latency, and non-internet privacy for regulated data. It takes weeks to provision, so the standard pattern is Direct Connect for the long term with a VPN as backup/first link. \"Dedicated private connection, consistent latency, not over the internet\" is the Direct Connect tell.",
          "**AWS Transit Gateway** is the hub that connects many VPCs and on-premises networks through one gateway instead of a mesh of peerings - the answer when the stem says \"dozens of VPCs, peering is getting unmanageable\". And **AWS PrivateLink** exposes a specific service in your VPC privately, without any internet path at all."
        ],
        table: {
          headers: ["Option", "Path", "Time to set up", "Choose when"],
          rows: [
            ["Site-to-Site VPN", "Encrypted over the internet", "Minutes", "Quick, low-cost, encrypted link; backup path"],
            ["Direct Connect", "Private dedicated fiber", "Weeks+", "Predictable bandwidth/latency, private, high volume"],
            ["Transit Gateway", "Hub for many VPCs + on-prem", "Moderate", "Many networks to interconnect cleanly"],
            ["PrivateLink", "Private endpoint to a service", "Moderate", "Keep traffic entirely off the internet"]
          ]
        }
      },
      {
        heading: "API Gateway: the managed front door",
        body: [
          "**Amazon API Gateway** is a managed service for creating, publishing, securing, and monitoring **HTTP/REST (and WebSocket) APIs** at any scale. It fronts backends such as Lambda functions, EC2/containers, or other AWS services, and handles the unglamorous work: request throttling, authorization, caching, versioning, and TLS.",
          "In serverless architectures API Gateway + Lambda + DynamoDB is the reference pattern - \"expose our microservice logic as a public API without running any servers\" is the API Gateway scenario. In hybrid or enterprise contexts it sits in front of internal backends behind consistent authentication and rate limits.",
          "Do not confuse its layer with others: Route 53 answers *where* (DNS), CloudFront accelerates *content* (caching), API Gateway exposes and governs *API calls* (throttling, auth, routing to logic)."
        ]
      }
    ],
    mustKnow: [
      "VPC = Region-scoped private network; subnets live in AZs; public subnet routes to an internet gateway, private does not.",
      "NAT gateway lets private-subnet resources make outbound internet calls while blocking inbound connections.",
      "Security groups: stateful, instance-level, auto-allow return traffic, default deny inbound. NACLs: stateless, subnet-level, must allow both directions, numbered rules.",
      "Route 53 routing policies: simple, weighted, latency-based, failover (with health checks), geolocation.",
      "CloudFront caches content at global edge locations to cut latency and offload origins.",
      "Site-to-Site VPN = encrypted tunnel over the internet, fast to set up; Direct Connect = private dedicated fiber, weeks to provision, consistent latency.",
      "Transit Gateway hubs many VPCs and on-prem networks; API Gateway manages and secures APIs in front of Lambda/backends.",
      "Three-tier VPC layout: web in public subnets; app and database tiers in private subnets."
    ],
    examTips: [
      "\"Stateful vs stateless\" or \"instance vs subnet\" in an option pair is the security-group-vs-NACL question - stateful+instance wins for instance filtering, stateless+subnet for subnet-wide rules.",
      "\"Private, dedicated, consistent-latency connection, not over the internet\" = Direct Connect; \"quick and encrypted over the internet\" = VPN.",
      "Databases and application servers belong in private subnets; only internet-facing tiers go public - a stem exposing the database directly is always the wrong option.",
      "\"Users worldwide complain about download speed\" = CloudFront edge caching; \"split traffic 90/10 between versions\" = Route 53 weighted routing; \"fail to the DR site automatically\" = failover routing + health checks."
    ]
  },
  {
    id: "3.6",
    domain: 3,
    task: "3.6",
    title: "Identify AWS storage services",
    weight: "Domain 3 is 34% of the exam",
    readMinutes: 12,
    summary: "Task 3.6 asks you to match storage workloads: object storage with S3 and its eight storage classes plus lifecycle rules, block storage with EBS and instance store, shared file storage with EFS and the FSx family, archives in S3 Glacier, and hybrid bridges with Storage Gateway. The signals are access pattern (frequent vs infrequent vs instant-retrieval archive), sharing (one instance vs thousands), and durability (ephemeral vs permanent).",
    sections: [
      {
        heading: "S3: object storage and the storage classes",
        body: [
          "**Amazon S3** stores **objects** (files plus metadata) in **buckets**, with 11 nines of durability, virtually unlimited scale, and no servers to manage. It is the default answer for static assets, backups, data lakes, and anything accessed over HTTP - and unlike block or file storage, objects are addressed by key, not mounted as a disk.",
          "The **storage classes** trade retrieval speed and redundancy for price, and every 3.6 exam has at least one class-matching question: S3 **Standard** for frequent access; **Standard-IA** and **One Zone-IA** for infrequently accessed data (One Zone stores in a single AZ, cheaper, less resilient); **Glacier Instant Retrieval** for archive data that must still respond in milliseconds; **Glacier Flexible Retrieval** for archive data with minutes-to-hours retrieval (bulk is cheapest); **Glacier Deep Archive** for the lowest cost, retrievable within hours, for compliance copies. **S3 Intelligent-Tiering** moves objects automatically between frequent/infrequent tiers (and archive tiers) with no retrieval fees - the answer whenever access patterns are **unknown or changing**.",
          "**Lifecycle policies** automate transitions (Standard → Standard-IA → Glacier → expiration), which is how logs or photos age cheaply without anyone moving objects by hand. Versioning keeps every overwrite; encryption protects at rest; presigned URLs grant time-limited access without making objects public."
        ],
        table: {
          headers: ["Class", "Access pattern", "Retrieval", "Exam signal"],
          rows: [
            ["S3 Standard", "Frequent", "Instant", "Default for active data"],
            ["S3 Standard-IA", "Infrequent, but immediate when needed", "Instant", "Backups/dr retrieved quickly, cheap storage"],
            ["S3 One Zone-IA", "Infrequent, re-creatable data", "Instant", "Cheapest IA; single AZ is acceptable"],
            ["Glacier Instant Retrieval", "Archive, rare access", "Milliseconds", "Long-term archive, must respond instantly"],
            ["Glacier Flexible Retrieval", "Archive, rare access", "Minutes to hours", "Cost-focused archive, slower is fine"],
            ["Glacier Deep Archive", "Archive, almost never", "Hours", "Compliance copy, lowest cost"],
            ["S3 Intelligent-Tiering", "Unknown/changing", "Instant (active tiers)", "No retrieval fees, automatic moves"]
          ]
        }
      },
      {
        heading: "Block storage: EBS and instance store",
        body: [
          "**Amazon EBS volumes** are virtual disks that attach to EC2 instances: the OS, databases, and boot drives live here. Volumes persist independently of the instance (stop/stop and the data stays), **snapshots** back them up incrementally to S3 and can create new volumes anywhere, and types are chosen by workload: **gp3** general-purpose SSD (the default), **io1/io2** high-IOPS SSD for demanding databases, **st1** throughput-optimized HDD for big sequential reads/writes, **sc1** cold HDD for rarely touched data.",
          "**Instance store** is ephemeral disk physically attached to the host: extremely fast and free with the instance, but **data is lost** on stop, termination, or host failure. It fits only temporary data - caches, buffers, scratch space - and \"survives instance replacement\" is precisely when NOT to use it.",
          "The exam contrast: EBS = persistent block storage, detachable and reattachable, snapshot-protected; instance store = fastest, included, gone when the instance goes. Multi-instance attachment belongs to EBS multi-attach (io) or to shared file systems below."
        ]
      },
      {
        heading: "Shared file storage: EFS and FSx",
        body: [
          "**Amazon EFS** is an elastic **NFS** file system that grows and shrinks automatically and can be mounted **concurrently by thousands of instances** across AZs - the answer for shared content directories, container storage, WordPress media, or lift-and-shift apps expecting a network file share. Lifecycle management tiers infrequent files to cheaper storage automatically.",
          "**Amazon FSx** offers purpose-built file systems: **FSx for Windows File Server** (SMB shares, Active Directory integration - the answer for Windows/SharePoint-style workloads), **FSx for Lustre** (massive parallel performance for HPC and machine learning, often reading S3 as a file system), plus NetApp ONTAP and OpenZFS editions for specific migrations.",
          "Choose by protocol and audience: Linux NFS sharing across a fleet = EFS; Windows/SMB with AD = FSx Windows; HPC throughput = FSx Lustre; single-instance block disk = EBS; API-addressed objects = S3."
        ]
      },
      {
        heading: "Hybrid bridges: Storage Gateway and AWS Backup",
        body: [
          "**AWS Storage Gateway** connects on-premises systems to AWS storage as if it were local: **File Gateway** presents S3 over NFS/SMB for backups and content workflows, **Volume Gateway** presents cloud-backed iSCSI disks with local caching, and **Tape Gateway** emulates a tape library for existing backup software writing to S3 Glacier. It is the standard \"on-prem apps, cloud storage\" bridge in hybrid deployments.",
          "**AWS Backup** centralizes and automates backups across AWS services (EBS, EC2, RDS, DynamoDB, EFS, S3, Storage Gateway) and on-premises via gateways, with policies, schedules, retention rules, and audit trails in one place. \"We need one policy-driven backup strategy across many services\" is the AWS Backup scenario, and it ties into compliance requirements tested in Domain 2."
        ]
      }
    ],
    mustKnow: [
      "S3 = object storage, 11 nines durability, unlimited scale, accessed by key over APIs/HTTP - not a mounted disk.",
      "Storage classes: Standard (frequent), Standard-IA/One Zone-IA (infrequent, instant), Glacier Instant (archive, ms retrieval), Glacier Flexible (minutes-hours), Deep Archive (hours, cheapest), Intelligent-Tiering (unknown/changing patterns).",
      "Lifecycle policies automate transitions and expiration; versioning preserves overwrites; presigned URLs give temporary access.",
      "EBS = persistent block volumes for EC2 (gp3 default SSD, io1/2 for high IOPS, st1/sc1 HDD), snapshots to S3, survive instance stop/terminate.",
      "Instance store = ephemeral, very fast, free, data lost on stop/termination - scratch and cache only.",
      "EFS = elastic NFS shared by thousands of clients across AZs; FSx Windows = SMB/AD; FSx Lustre = HPC/ML throughput.",
      "Storage Gateway bridges on-prem to S3/Glacier (File, Volume, Tape); AWS Backup centralizes policy-based backups across services."
    ],
    examTips: [
      "Unknown or changing access patterns = S3 Intelligent-Tiering; explicit \"cheapest possible archive, retrieval can take hours\" = Glacier Deep Archive.",
      "\"Data must survive instance stop/termination\" = EBS (or S3/EFS), never instance store - the loss-on-stop wording is the giveaway.",
      "Many instances reading the same files = EFS (NFS) or FSx Windows if the stem says Windows/Active Directory; HPC throughput = FSx Lustre.",
      "\"On-premises backup software writes to the cloud\" = Storage Gateway (Tape Gateway if tapes are mentioned); \"one backup policy across many AWS services\" = AWS Backup."
    ]
  },
  {
    id: "3.7",
    domain: 3,
    task: "3.7",
    title: "Identify AWS AI/ML services and analytics services",
    weight: "Domain 3 is 34% of the exam",
    readMinutes: 11,
    summary: "Task 3.7 splits into two families that are pure service-matching: the AI/ML services, where the input data type (images, audio, text, documents) picks the service, and the analytics services, where the speed (real-time stream vs batch queries) and the data location (S3 files vs warehouse) pick it. No deep math is tested - you need the mapping and the exam-tell phrases.",
    sections: [
      {
        heading: "The AI services: match the input data type",
        body: [
          "The ready-made AI services each own one data type, and the stem's data type is the answer key. **Amazon Rekognition** - images and video (object/scene detection, face match, content moderation). **Amazon Transcribe** - audio to text. **Amazon Polly** - text to audio. **Amazon Comprehend** - insight from existing text (sentiment, entities, key phrases). **Amazon Textract** - text and structure out of scanned documents (forms, tables, handwriting). **Amazon Translate** - text between languages. **Amazon Lex** - conversational chatbots and voice assistants (the technology behind Alexa).",
          "The two classic confusions: **Transcribe vs Polly** (speech-to-text versus text-to-speech - read the direction of the arrow) and **Comprehend vs Textract** (analyze text you already have versus extract text from scanned images in the first place). A pipeline stem chains them: scan → Textract, or record → Transcribe → Comprehend.",
          "**Amazon SageMaker AI** is the different animal: the platform to **build, train, and deploy your own custom ML models** on your own data. When the task is standard (faces, sentiment, speech), the managed service wins; when the team needs a proprietary model trained on proprietary data, SageMaker wins. **Amazon Bedrock** rounds out the family: API access to **foundation models** for generative AI - text and image generation, summarization, chat over company content - with no model training or hosting of your own."
        ],
        table: {
          headers: ["Input / need", "Service", "Remember"],
          rows: [
            ["Images, video (objects, faces, moderation)", "Rekognition", "Computer vision"],
            ["Audio → text", "Transcribe", "Speech-to-text"],
            ["Text → audio", "Polly", "Text-to-speech (reverse of Transcribe)"],
            ["Sentiment, entities, key phrases in text", "Comprehend", "NLP analysis"],
            ["Scanned documents: forms, tables, handwriting", "Textract", "OCR-plus, structure aware"],
            ["Translate text between languages", "Translate", "Language conversion"],
            ["Chatbot / conversational interface", "Lex", "ASR + NLU, powers Alexa"],
            ["Build/train custom models on own data", "SageMaker AI", "Custom ML lifecycle"],
            ["Generative AI via foundation-model APIs", "Bedrock", "No training or hosting to manage"]
          ]
        }
      },
      {
        heading: "Analytics: speed and location pick the service",
        body: [
          "**Amazon Athena** queries data **where it already sits in S3** with standard SQL: serverless, pay per query, nothing to load or provision. \"Analyst knows SQL, data is files in S3, wants answers today\" is Athena verbatim.",
          "**Amazon Kinesis** handles **real-time streaming** data - clickstreams, IoT sensor feeds, logs - collecting, processing, and analyzing records as they arrive so dashboards and alerts run seconds-fresh. The tell is a rate (\"thousands of events per second\") plus \"real time\"; batch-style deep analysis over accumulated history belongs to Athena or a warehouse instead.",
          "**AWS Glue** prepares and moves data: serverless **ETL** jobs that clean, transform, and combine datasets, plus the **Glue Data Catalog** that inventories what data exists and where - the connective tissue feeding warehouses and Athena. **Amazon QuickSight** is the visualization layer: managed **business intelligence** dashboards for business users, no code. **Amazon Redshift** is the petabyte-scale **data warehouse** for complex analytics over historical data (see 3.4), and **Amazon EMR** runs big-data frameworks (Spark, Hadoop) on clusters when fine-grained control of the processing engine is needed."
        ],
        table: {
          headers: ["Need", "Service", "Tell phrase"],
          rows: [
            ["Ad-hoc SQL over files in S3, no servers", "Athena", "\"query in place\", \"pay per query\""],
            ["Ingest and analyze live event streams", "Kinesis", "\"real time\", \"per second\""],
            ["Clean/transform/combine data; catalog it", "Glue", "\"ETL\", \"data catalog\""],
            ["Dashboards and visualizations for analysts", "QuickSight", "\"BI\", \"no code\""],
            ["Petabyte-scale analytical warehouse", "Redshift", "\"warehouse\", \"historical analytics\""],
            ["Managed Spark/Hadoop cluster control", "EMR", "\"big data framework\""]
          ]
        }
      },
      {
        heading: "Pipelines: chaining the services",
        body: [
          "Harder 3.7 questions describe an end-to-end need and expect a **pairing**. Standard chains worth memorizing: call recordings → **Transcribe** → **Comprehend** for sentiment; scanned invoices → **Textract** → downstream processing; IoT sensor telemetry → **Kinesis** → dashboard/analytics store; clickstream → **Kinesis** for the live view and → **S3** → **Athena** for the nightly batch; warehouse analytics → **Redshift** surfaced in **QuickSight** dashboards.",
          "Two selection principles settle most wrong answers. First, **use the purpose-built managed service** for standard tasks - building a custom SageMaker model to detect faces is technically possible and exam-wrong. Second, **match the speed**: real-time words (live dashboard, seconds, streaming) never pair with batch tools (Athena, Redshift, Glue), and vice versa."
        ]
      }
    ],
    mustKnow: [
      "Rekognition = images/video; Transcribe = audio→text; Polly = text→audio; Comprehend = text insight; Textract = scanned-document extraction; Translate = languages; Lex = chatbots.",
      "Transcribe vs Polly is a direction question: speech in → Transcribe; speech out → Polly.",
      "Comprehend vs Textract: analyze existing text vs extract text from scanned images/PDFs (forms, tables).",
      "SageMaker AI = build, train, deploy custom models on your own data; Bedrock = managed access to foundation models for generative AI.",
      "Athena = serverless SQL directly on S3, pay per query; Kinesis = real-time streaming ingestion and processing.",
      "Glue = serverless ETL + Data Catalog; QuickSight = managed BI dashboards; Redshift = petabyte data warehouse; EMR = managed Spark/Hadoop clusters.",
      "Real-time needs pair with Kinesis; batch/query needs pair with Athena/Redshift; standard tasks use the purpose-built service, not custom models."
    ],
    examTips: [
      "Underline the data type in the stem (image, audio, text, scanned document, video) - it alone selects the AI service in most questions.",
      "\"Convert speech to text\" vs \"convert text to speech\" - transcribing is listening; Polly is speaking. Options that swap them are always wrong.",
      "\"Real-time dashboard updating within seconds\" = Kinesis; \"nightly analysis of accumulated data\" = Athena or Redshift - never cross-pair them.",
      "When a standard capability (face detection, sentiment) is asked for, choose the ready-made service over \"build a custom model\" answers."
    ]
  },
  {
    id: "3.8",
    domain: 3,
    task: "3.8",
    title: "Identify services from other in-scope AWS service categories",
    weight: "Domain 3 is 34% of the exam",
    readMinutes: 10,
    summary: "Task 3.8 sweeps up the remaining service categories the guide lists by name: application integration (SNS, SQS, EventBridge), business applications (Connect, SES), customer enablement (AWS Support), developer tools (CodeBuild, CodePipeline, X-Ray), end-user computing (WorkSpaces, AppStream 2.0, WorkSpaces Secure Browser), frontend/mobile (Amplify), and IoT (IoT Core). Each is one sentence of purpose plus one tell phrase - breadth, not depth.",
    sections: [
      {
        heading: "Application integration: SNS, SQS, EventBridge",
        body: [
          "**Amazon SQS** is managed **message queuing**: producers send messages to a queue and consumers process them later at their own pace, absorbing bursts and decoupling services so one slow component cannot block the others. **Amazon SNS** is managed **publish-subscribe**: one message published to a topic is **pushed** to every subscriber - email, SMS, mobile push, Lambda, queues. **Amazon EventBridge** is the **event bus**: sources emit events, rules route them to targets - the connective tissue for event-driven architectures and SaaS/AWS event routing.",
          "The discriminator: SQS = one consumer pulls work from a buffer (decoupling in time); SNS = push fan-out to many endpoints at once (decoupling by audience); EventBridge = rule-based routing of structured events between systems. \"Buffer and process when able\" = SQS; \"notify everyone who cares\" = SNS; \"route events from many sources to the right target by rule\" = EventBridge."
        ],
        table: {
          headers: ["Pattern", "Service", "Delivery model"],
          rows: [
            ["Buffer work; consumer processes at its own pace", "SQS", "Pull (poll) from a queue"],
            ["One message to many subscribers", "SNS", "Push fan-out"],
            ["Route events from sources to targets by rules", "EventBridge", "Event bus"]
          ]
        }
      },
      {
        heading: "Business applications: Connect and SES",
        body: [
          "**Amazon Connect** is a managed **cloud contact center**: phone numbers, interactive voice response, call routing, agent queues, and analytics, scaling with call volume without telephony hardware. The name is the tell - it connects customers to agents.",
          "**Amazon SES** is the managed **email-sending platform**: high-volume transactional and marketing email (receipts, confirmations, campaigns) with deliverability management. The SNS/SES boundary confuses people: SNS pushes short notifications to subscribed endpoints (including some email), while **bulk, legitimate email sending at scale is SES's whole job**."
        ]
      },
      {
        heading: "Developer tools: CodePipeline, CodeBuild, X-Ray",
        body: [
          "**AWS CodePipeline** is the **CI/CD orchestrator**: it models releases as pipelines - source, build, test, deploy stages - that run automatically on code changes. **AWS CodeBuild** is the managed **build service** that compiles code, runs tests, and produces artifacts inside the pipeline, with no build servers to maintain. Together: Pipeline stages the workflow; Build does the compile-and-test step.",
          "**AWS X-Ray** provides **distributed tracing** for applications, especially microservices: it follows a single request across every service it touches and shows where latency and errors occur - the standard tool for \"we cannot tell which service is slow\"."
        ]
      },
      {
        heading: "End-user computing: WorkSpaces, AppStream 2.0, Secure Browser",
        body: [
          "**Amazon WorkSpaces** delivers fully **managed virtual desktops**: each user gets a persistent Windows or Linux desktop in the cloud, streamed to their own laptop, thin client, or browser - no desktop hardware to maintain, data never sits on the endpoint. **Amazon AppStream 2.0** streams **individual applications** on demand instead of whole desktops - the heavyweight app runs in AWS and only its display reaches the user's device.",
          "**Amazon WorkSpaces Secure Browser** provides managed, **isolated web browsing**: pages render in the cloud and only pixels stream to the endpoint, so untrusted websites never touch the corporate laptop. The boundary: full desktop = WorkSpaces; one application = AppStream 2.0; browsing isolation = Secure Browser."
        ]
      },
      {
        heading: "Frontend/mobile, IoT, and support",
        body: [
          "**AWS Amplify** is the platform for **frontend web and mobile developers**: build, deploy, and host web apps (including static sites and single-page apps) with continuous deployment from a repository, plus ready-made backend building blocks - authentication, APIs, storage - through the Amplify libraries. \"Small team, React frontend, wants hosting plus auth/API/storage wired up\" is the Amplify scenario.",
          "**AWS IoT Core** is the managed broker for connected devices: fleets of sensors, trackers, and machines publish telemetry at scale and receive commands back, securely and without managing device infrastructure. \"Thousands of trucks/sensors reporting continuously\" is the IoT Core tell.",
          "**AWS Support** appears here as a customer-enablement service (and in depth in Domain 4): **Basic** (free, documentation, account help, community), **Business-level** (24/7 email/chat/phone with fast response for production workloads), and **Enterprise** (dedicated technical account manager, concierge billing, proactive architectural guidance, fastest responses)."
        ],
        table: {
          headers: ["Category", "Services", "One-line purpose"],
          rows: [
            ["Application integration", "SQS, SNS, EventBridge", "Queue, fan-out, event routing"],
            ["Business applications", "Connect, SES", "Contact center, bulk email"],
            ["Customer enablement", "AWS Support", "Plans from free community to TAM"],
            ["Developer tools", "CodeBuild, CodePipeline, X-Ray", "Build, orchestrate releases, trace requests"],
            ["End-user computing", "WorkSpaces, AppStream 2.0, Secure Browser", "Virtual desktops, app streaming, isolated browsing"],
            ["Frontend & mobile", "Amplify", "Build, deploy, host web/mobile apps"],
            ["Internet of Things", "IoT Core", "Connect devices, broker their messages"]
          ]
        }
      }
    ],
    mustKnow: [
      "SQS = queue, pull-based buffering, decouples producers from consumers; SNS = pub-sub push fan-out to many endpoint types; EventBridge = rule-based event bus.",
      "Amazon Connect = managed cloud contact center; Amazon SES = high-volume transactional/marketing email sending.",
      "CodePipeline orchestrates CI/CD stages; CodeBuild compiles and tests; X-Ray traces requests across microservices.",
      "WorkSpaces = full managed virtual desktops; AppStream 2.0 = stream individual applications; WorkSpaces Secure Browser = isolated managed browsing.",
      "Amplify = frontend web/mobile build-deploy-host platform with auth/API/storage building blocks.",
      "IoT Core connects device fleets and brokers telemetry and commands at scale.",
      "Support tiers: Basic (free), Business-level (24/7, production response times), Enterprise (TAM, concierge, proactive guidance)."
    ],
    examTips: [
      "Match the delivery pattern first: buffer for later = SQS; push to many = SNS; route by rule = EventBridge.",
      "\"Bulk legitimate email campaigns/receipts\" = SES; \"SMS/one-time passcodes/notifications to endpoints\" = SNS; \"phone agents and IVR\" = Connect.",
      "\"Stream just the application\" = AppStream 2.0; \"give each user a full desktop\" = WorkSpaces; \"browse untrusted sites safely\" = Secure Browser.",
      "\"Cannot find which microservice adds latency\" = X-Ray; \"automate build-test-deploy on merges\" = CodePipeline (with CodeBuild doing builds)."
    ]
  }
);
