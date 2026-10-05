window.FLASHCARDS = window.FLASHCARDS || [];
window.FLASHCARDS.push(
  {
    id: "3.1-001",
    domain: 3,
    task: "3.1",
    front: "Name the three deployment models for workloads on AWS.",
    back: "Cloud-only (everything on AWS), hybrid (some workloads stay on-premises and connect to the cloud), and on-premises/private cloud (nothing moves; AWS Outposts puts AWS hardware in your data center).",
    tags: ["deployment models"]
  },
  {
    id: "3.1-002",
    domain: 3,
    task: "3.1",
    front: "What are the four ways to interact with AWS services?",
    back: "AWS Management Console (browser GUI), AWS CLI (command line/scripts), AWS SDKs (application code), and infrastructure as code such as AWS CloudFormation (template files).",
    tags: ["operating methods"]
  },
  {
    id: "3.1-003",
    domain: 3,
    task: "3.1",
    front: "A team wants identical, reviewable environments in every account and Region. Which method?",
    back: "Infrastructure as code - AWS CloudFormation templates (JSON/YAML). IaC gives repeatability, version control, review before apply, and easy teardown.",
    tags: ["iac", "cloudformation"]
  },
  {
    id: "3.1-004",
    domain: 3,
    task: "3.1",
    front: "What does \"fully managed\" mean in AWS service terms?",
    back: "AWS operates everything below the layer you use - provisioning, patching, capacity, hardware. You own only your data, configuration, and application code.",
    tags: ["managed services"]
  },
  {
    id: "3.1-005",
    domain: 3,
    task: "3.1",
    front: "What does serverless mean, and name four serverless services.",
    back: "No servers visible to you, automatic scaling, pay-per-use. Examples: S3, DynamoDB, Lambda, SQS (also Athena, Fargate).",
    tags: ["serverless"]
  },
  {
    id: "3.1-006",
    domain: 3,
    task: "3.1",
    front: "SQS vs SNS vs EventBridge - which pattern does each serve?",
    back: "SQS: queue, one consumer pulls work, decouples in time. SNS: pub-sub push, one message fans out to many subscribers. EventBridge: event bus, rules route events from sources to targets.",
    tags: ["application integration", "sns", "sqs", "eventbridge"]
  },
  {
    id: "3.1-007",
    domain: 3,
    task: "3.1",
    front: "Why choose a hybrid deployment instead of moving everything to AWS at once?",
    back: "Existing hardware investment not yet paid off, data that legally cannot move yet, or low-latency/local processing needs. Hybrid is a valid transition state or long-term design.",
    tags: ["hybrid", "deployment models"]
  },
  {
    id: "3.1-008",
    domain: 3,
    task: "3.1",
    front: "An application must call AWS services from inside its own code. Console, CLI, or SDK?",
    back: "SDK - the language-specific libraries (Python, JavaScript, Java, ...) let application code call AWS service APIs directly.",
    tags: ["sdk"]
  },
  {
    id: "3.2-001",
    domain: 3,
    task: "3.2",
    front: "What is an AWS Region, and what does it guarantee about your data?",
    back: "A geographic cluster of Availability Zones. Regions are fully isolated - customer data is not replicated between Regions unless you explicitly configure it, which is how data residency is satisfied.",
    tags: ["regions"]
  },
  {
    id: "3.2-002",
    domain: 3,
    task: "3.2",
    front: "What is an Availability Zone and how many does a Region have?",
    back: "One or more discrete data centers with independent power, cooling, and networking, low-latency connected to sibling AZs. A Region has a minimum of three.",
    tags: ["availability zones"]
  },
  {
    id: "3.2-003",
    domain: 3,
    task: "3.2",
    front: "\"A data center failure must not take the app down\" - multi-AZ or multi-Region?",
    back: "Multi-AZ within one Region. Deploy across multiple AZs; a second Region is for regional disasters or residency-driven placement, overkill for one facility failure.",
    tags: ["high availability"]
  },
  {
    id: "3.2-004",
    domain: 3,
    task: "3.2",
    front: "What are the four drivers for choosing a Region, in priority order?",
    back: "1) Compliance/data residency, 2) latency to users, 3) cost differences, 4) service availability. Residency outranks everything.",
    tags: ["region selection"]
  },
  {
    id: "3.2-005",
    domain: 3,
    task: "3.2",
    front: "What are edge locations and which service uses them?",
    back: "Small AWS sites in far more cities than Regions exist, used by Amazon CloudFront to cache content close to users - lower latency and less load on origins.",
    tags: ["edge locations", "cloudfront"]
  },
  {
    id: "3.2-006",
    domain: 3,
    task: "3.2",
    front: "Local Zones vs Wavelength vs Outposts - one line each.",
    back: "Local Zones: compute/storage in a city near population centers for single-digit ms. Wavelength: same idea embedded in 5G telecom networks. Outposts: AWS hardware in your own data center for workloads that cannot leave.",
    tags: ["infrastructure"]
  },
  {
    id: "3.2-007",
    domain: 3,
    task: "3.2",
    front: "Which special Regions exist for regulated and government workloads?",
    back: "AWS GovCloud (US) Regions for US government/regulated workloads (restricted to US entities) and the separately operated China Regions.",
    tags: ["regions"]
  },
  {
    id: "3.3-001",
    domain: 3,
    task: "3.3",
    front: "What do AMI and instance type define on EC2?",
    back: "AMI = the machine image (OS + preinstalled software). Instance type = the size/specialty (general purpose, memory-, compute-, storage-optimized, GPU).",
    tags: ["ec2"]
  },
  {
    id: "3.3-002",
    domain: 3,
    task: "3.3",
    front: "Name the three EC2 pricing models and when each fits.",
    back: "On-Demand: unpredictable/short-term work. Spot: up to ~90% off, interruptible - batch and fault-tolerant jobs. Reserved/Savings Plans: 1-3 year commitment for steady baseline load (up to ~72% off).",
    tags: ["ec2", "pricing"]
  },
  {
    id: "3.3-003",
    domain: 3,
    task: "3.3",
    front: "What is Lambda's maximum execution time, and what triggers functions?",
    back: "15 minutes per invocation max. Functions run on events: HTTP via API Gateway, S3 uploads, queue messages, DynamoDB changes, schedules.",
    tags: ["lambda"]
  },
  {
    id: "3.3-004",
    domain: 3,
    task: "3.3",
    front: "ECR, ECS, EKS, Fargate - what does each do?",
    back: "ECR stores container images. ECS orchestrates containers (AWS-native). EKS runs managed Kubernetes. Fargate runs containers serverlessly - no nodes to manage - for either orchestrator.",
    tags: ["containers"]
  },
  {
    id: "3.3-005",
    domain: 3,
    task: "3.3",
    front: "ECS or EKS - what decides?",
    back: "Organizational commitment to Kubernetes. ECS is simpler and AWS-integrated; EKS when the team needs Kubernetes tooling and its ecosystem.",
    tags: ["containers", "ecs", "eks"]
  },
  {
    id: "3.3-006",
    domain: 3,
    task: "3.3",
    front: "What does Elastic Beanstalk do, and what do you still control?",
    back: "Deploys web apps fast and provisions/operates the stack (EC2 fleet, ELB, auto scaling, monitoring) for you. You keep control of the underlying resources and can customize anything.",
    tags: ["beanstalk"]
  },
  {
    id: "3.3-007",
    domain: 3,
    task: "3.3",
    front: "\"Small business, simple website, predictable monthly cost, no AWS expertise.\"",
    back: "Amazon Lightsail - fixed-bundle virtual servers with preconfigured images (WordPress, Node.js) and simple pricing.",
    tags: ["lightsail"]
  },
  {
    id: "3.3-008",
    domain: 3,
    task: "3.3",
    front: "The classic serverless three-tier web backend on AWS?",
    back: "API Gateway (front door/auth/throttling) + Lambda (logic) + DynamoDB (data).",
    tags: ["serverless", "architecture"]
  },
  {
    id: "3.3-009",
    domain: 3,
    task: "3.3",
    front: "Which EC2 pair makes an app elastic and highly available?",
    back: "Auto Scaling (adds/removes instances on demand) + Elastic Load Balancing (spreads traffic across healthy instances).",
    tags: ["ec2", "auto scaling", "elb"]
  },
  {
    id: "3.3-010",
    domain: 3,
    task: "3.3",
    front: "When is serverless NOT the cheapest compute option?",
    back: "Frequent, steady, high-utilization workloads - always-on EC2 or containers can cost less than paying per request/millisecond at constant high volume.",
    tags: ["lambda", "cost"]
  },
  {
    id: "3.4-001",
    domain: 3,
    task: "3.4",
    front: "Which five engines does Amazon RDS support?",
    back: "MySQL, PostgreSQL, MariaDB, Oracle, Microsoft SQL Server.",
    tags: ["rds"]
  },
  {
    id: "3.4-002",
    domain: 3,
    task: "3.4",
    front: "What makes Aurora different from standard RDS?",
    back: "Cloud-native engine compatible with MySQL/PostgreSQL: six-way replication across three AZs, automatic storage scaling, up to 15 read replicas, fast automatic failover, higher performance.",
    tags: ["aurora"]
  },
  {
    id: "3.4-003",
    domain: 3,
    task: "3.4",
    front: "Multi-AZ vs read replicas - purpose, readability, replication?",
    back: "Multi-AZ: standby for availability/failover, not readable, synchronous. Read replicas: offload read traffic, readable, asynchronous (promotable).",
    tags: ["rds", "aurora"]
  },
  {
    id: "3.4-004",
    domain: 3,
    task: "3.4",
    front: "What type of NoSQL database is DynamoDB, and what are its signatures?",
    back: "Key-value/document. Serverless, single-digit-millisecond latency at any scale, automatic multi-AZ replication. Poor fit for joins and ad-hoc SQL.",
    tags: ["dynamodb"]
  },
  {
    id: "3.4-005",
    domain: 3,
    task: "3.4",
    front: "What does ElastiCache do, and which two engines does it offer?",
    back: "Managed in-memory cache in front of a slower database - microsecond reads for repeated queries and session state. Engines: Redis (rich) and Memcached (simple).",
    tags: ["elasticache"]
  },
  {
    id: "3.4-006",
    domain: 3,
    task: "3.4",
    front: "Match: JSON documents / graphs / time-series / ledger.",
    back: "DocumentDB (documents, MongoDB-compatible), Neptune (graphs - social networks, fraud rings), Timestream (time-series/metrics), QLDB (immutable, verifiable ledger).",
    tags: ["specialty databases"]
  },
  {
    id: "3.4-007",
    domain: 3,
    task: "3.4",
    front: "\"Petabyte-scale analytics over historical data for BI tools.\"",
    back: "Amazon Redshift - the columnar data warehouse. Not for transactional apps; also listed under analytics in task 3.7.",
    tags: ["redshift"]
  },
  {
    id: "3.4-008",
    domain: 3,
    task: "3.4",
    front: "Reads are overwhelming the database - which two fixes, and which one first?",
    back: "ElastiCache for repeated identical reads (microseconds, offloads the DB), or RDS read replicas for read scaling. Availability problems are a different fix - Multi-AZ.",
    tags: ["elasticache", "read replicas"]
  },
  {
    id: "3.5-001",
    domain: 3,
    task: "3.5",
    front: "What makes a subnet \"public\" vs \"private\"?",
    back: "Public: its route table sends internet-bound traffic to an internet gateway (resources with public IPs are reachable). Private: no IGW route - reachable only from inside the VPC.",
    tags: ["vpc", "subnets"]
  },
  {
    id: "3.5-002",
    domain: 3,
    task: "3.5",
    front: "What does a NAT gateway do for a private subnet?",
    back: "Allows instances in private subnets to initiate outbound internet connections (patches, APIs) while blocking inbound connections from the internet.",
    tags: ["nat"]
  },
  {
    id: "3.5-003",
    domain: 3,
    task: "3.5",
    front: "Security group vs network ACL - scope, statefulness, defaults?",
    back: "SG: instance/ENI level, stateful (return traffic auto-allowed), default deny inbound. NACL: subnet level, stateless (must allow both directions), numbered rules, can explicitly deny.",
    tags: ["security groups", "nacl"]
  },
  {
    id: "3.5-004",
    domain: 3,
    task: "3.5",
    front: "Name the three-tier VPC layout the exam expects.",
    back: "Web tier in public subnets (accepts user traffic); application and database tiers in private subnets (reachable only from inside the VPC).",
    tags: ["vpc", "architecture"]
  },
  {
    id: "3.5-005",
    domain: 3,
    task: "3.5",
    front: "Name five Route 53 routing policies.",
    back: "Simple, weighted (percentage splits), latency-based (lowest-latency healthy Region), failover (primary/standby with health checks), geolocation (answer by user location).",
    tags: ["route 53"]
  },
  {
    id: "3.5-006",
    domain: 3,
    task: "3.5",
    front: "What does CloudFront do, and at what layer?",
    back: "CDN - caches content at global edge locations so users are served from the nearest edge. Cuts latency for users and load/cost on origins; origin can be S3, EC2/ALB, or any HTTP server.",
    tags: ["cloudfront", "cdn"]
  },
  {
    id: "3.5-007",
    domain: 3,
    task: "3.5",
    front: "Site-to-Site VPN vs Direct Connect - path, setup, strengths?",
    back: "VPN: IPsec encrypted over the internet, minutes to set up, cheap, bounded bandwidth. Direct Connect: private dedicated fiber, weeks to provision, predictable high bandwidth and consistent latency, non-internet privacy.",
    tags: ["vpn", "direct connect"]
  },
  {
    id: "3.5-008",
    domain: 3,
    task: "3.5",
    front: "\"Dozens of VPCs plus on-prem - peering mesh is unmanageable.\"",
    back: "AWS Transit Gateway - the hub that connects many VPCs and on-premises networks through one gateway.",
    tags: ["transit gateway"]
  },
  {
    id: "3.5-009",
    domain: 3,
    task: "3.5",
    front: "What is Amazon API Gateway's job?",
    back: "Managed creation, publishing, securing, and monitoring of HTTP/REST (and WebSocket) APIs: throttling, authorization, caching, TLS - fronting Lambda, EC2, or other backends with no servers.",
    tags: ["api gateway"]
  },
  {
    id: "3.6-001",
    domain: 3,
    task: "3.6",
    front: "What kind of storage is S3, and how durable?",
    back: "Object storage (files + metadata in buckets, addressed by key over HTTP/APIs), 11 nines durability, unlimited scale, no servers to manage.",
    tags: ["s3"]
  },
  {
    id: "3.6-002",
    domain: 3,
    task: "3.6",
    front: "Match the S3 classes: frequent / infrequent-instant / archive-ms / archive-minutes-hours / cheapest-hours / unknown-pattern.",
    back: "Standard; Standard-IA (or One Zone-IA, single AZ); Glacier Instant Retrieval; Glacier Flexible Retrieval; Glacier Deep Archive; S3 Intelligent-Tiering (auto-moves, no retrieval fees).",
    tags: ["s3", "storage classes"]
  },
  {
    id: "3.6-003",
    domain: 3,
    task: "3.6",
    front: "What do S3 lifecycle policies automate?",
    back: "Transitions between storage classes and expiration - e.g. Standard to Standard-IA to Glacier to delete - so aging data gets cheaper without manual moves.",
    tags: ["s3", "lifecycle"]
  },
  {
    id: "3.6-004",
    domain: 3,
    task: "3.6",
    front: "EBS volume types and their workloads?",
    back: "gp3: general-purpose SSD (default). io1/io2: high-IOPS SSD for demanding databases. st1: throughput HDD for big sequential I/O. sc1: cold HDD for rarely accessed data.",
    tags: ["ebs"]
  },
  {
    id: "3.6-005",
    domain: 3,
    task: "3.6",
    front: "Instance store vs EBS - the one decisive difference?",
    back: "Instance store is ephemeral: data lost on stop, termination, or host failure (fast and free - caches/scratch only). EBS volumes persist, detach/reattach, and snapshot to S3.",
    tags: ["ebs", "instance store"]
  },
  {
    id: "3.6-006",
    domain: 3,
    task: "3.6",
    front: "EFS vs FSx Windows vs FSx Lustre - which workload each?",
    back: "EFS: elastic NFS shared by thousands of Linux clients across AZs. FSx Windows: SMB shares with Active Directory. FSx Lustre: massive parallel throughput for HPC/ML (can read S3).",
    tags: ["efs", "fsx"]
  },
  {
    id: "3.6-007",
    domain: 3,
    task: "3.6",
    front: "Name the three Storage Gateway modes and what each bridges.",
    back: "File Gateway: S3 over NFS/SMB. Volume Gateway: cloud-backed iSCSI disks with local caching. Tape Gateway: emulates a tape library for existing backup software writing to S3 Glacier.",
    tags: ["storage gateway", "hybrid"]
  },
  {
    id: "3.6-008",
    domain: 3,
    task: "3.6",
    front: "Why use AWS Backup instead of service-by-service backups?",
    back: "One centralized, policy-driven service that schedules, retains, and audits backups across EBS, EC2, RDS, DynamoDB, EFS, S3, Storage Gateway - and on-prem via gateways.",
    tags: ["aws backup"]
  },
  {
    id: "3.6-009",
    domain: 3,
    task: "3.6",
    front: "\"Access patterns are unknown or change monthly - cheapest safe S3 choice?\"",
    back: "S3 Intelligent-Tiering: moves objects automatically between frequent/infrequent/archive tiers and charges no retrieval fees.",
    tags: ["s3", "intelligent-tiering"]
  },
  {
    id: "3.7-001",
    domain: 3,
    task: "3.7",
    front: "Match input to AI service: images/video, audio in, audio out, text analysis, scanned documents, languages, chatbot.",
    back: "Rekognition (vision), Transcribe (speech-to-text), Polly (text-to-speech), Comprehend (NLP insight), Textract (scanned docs/forms/tables), Translate (languages), Lex (chatbots).",
    tags: ["ai services"]
  },
  {
    id: "3.7-002",
    domain: 3,
    task: "3.7",
    front: "Transcribe or Polly: \"give articles a spoken version\" vs \"transcribe support calls\"?",
    back: "Spoken version from text = Polly (text-to-speech). Transcribing calls = Transcribe (speech-to-text). Direction of the arrow decides.",
    tags: ["polly", "transcribe"]
  },
  {
    id: "3.7-003",
    domain: 3,
    task: "3.7",
    front: "Comprehend or Textract: sentiment on feedback text vs vendor names from scanned invoices?",
    back: "Sentiment/insight on existing text = Comprehend. Extracting text/structure from scanned images and PDFs (forms, tables) = Textract.",
    tags: ["comprehend", "textract"]
  },
  {
    id: "3.7-004",
    domain: 3,
    task: "3.7",
    front: "When do you need SageMaker AI instead of the ready-made AI services?",
    back: "When the team must build, train, and deploy a custom model on its own proprietary data with control over algorithms/training. Standard tasks (faces, sentiment, speech) use the purpose-built managed services.",
    tags: ["sagemaker"]
  },
  {
    id: "3.7-005",
    domain: 3,
    task: "3.7",
    front: "What does Amazon Bedrock provide?",
    back: "API access to a choice of foundation models for generative AI - summarization, chat, content generation, knowledge bases - with no model training or hosting to manage.",
    tags: ["bedrock", "generative ai"]
  },
  {
    id: "3.7-006",
    domain: 3,
    task: "3.7",
    front: "\"Ad-hoc SQL over CSV/JSON files sitting in S3, pay per query.\"",
    back: "Amazon Athena - serverless SQL query-in-place on S3, no infrastructure to provision.",
    tags: ["athena"]
  },
  {
    id: "3.7-007",
    domain: 3,
    task: "3.7",
    front: "\"Tens of thousands of sensor readings per second, analyzed in real time.\"",
    back: "Amazon Kinesis - ingests and processes high-volume streaming data as it arrives (clickstreams, IoT feeds, logs).",
    tags: ["kinesis", "streaming"]
  },
  {
    id: "3.7-008",
    domain: 3,
    task: "3.7",
    front: "What are AWS Glue's two jobs?",
    back: "Serverless ETL (clean, transform, combine data) and the Glue Data Catalog that inventories datasets across the estate.",
    tags: ["glue", "etl"]
  },
  {
    id: "3.7-009",
    domain: 3,
    task: "3.7",
    front: "QuickSight vs Redshift - which layer of analytics is each?",
    back: "QuickSight: managed BI - dashboards and visualizations for business users, no code. Redshift: petabyte-scale data warehouse running the complex analytical queries feeding those dashboards.",
    tags: ["quicksight", "redshift"]
  },
  {
    id: "3.7-010",
    domain: 3,
    task: "3.7",
    front: "The classic call-center compliance pipeline on AWS?",
    back: "Amazon Transcribe converts recordings to text, then Amazon Comprehend analyzes the text for sentiment.",
    tags: ["transcribe", "comprehend", "pipeline"]
  },
  {
    id: "3.7-011",
    domain: 3,
    task: "3.7",
    front: "Live dashboard needs seconds-fresh clickstream, plus nightly deep analysis. Pair the services.",
    back: "Kinesis ingests/processes the live stream for the dashboard; the batch side lands data in S3 and queries it with Athena (or loads Redshift).",
    tags: ["kinesis", "athena", "streaming vs batch"]
  },
  {
    id: "3.7-012",
    domain: 3,
    task: "3.7",
    front: "When is Amazon EMR the analytics answer?",
    back: "When you need managed clusters running big-data frameworks (Spark, Hadoop) with fine-grained control of the processing engine.",
    tags: ["emr"]
  },
  {
    id: "3.8-001",
    domain: 3,
    task: "3.8",
    front: "SNS vs SQS in one line each.",
    back: "SNS: publish-subscribe, pushes each message to all subscribers (email/SMS/push/Lambda/queues). SQS: queue, messages wait for a consumer to poll and process - buffering and decoupling in time.",
    tags: ["sns", "sqs"]
  },
  {
    id: "3.8-002",
    domain: 3,
    task: "3.8",
    front: "\"Order service hangs whenever inventory is slow; orders must be accepted instantly and processed later.\"",
    back: "Amazon SQS - a durable queue between the services decouples them: producer freed immediately, consumer drains the queue at its own pace, nothing lost.",
    tags: ["sqs", "decoupling"]
  },
  {
    id: "3.8-003",
    domain: 3,
    task: "3.8",
    front: "What does Amazon EventBridge do?",
    back: "Managed event bus: sources (AWS services, custom apps, SaaS) publish events and rules route each event to targets such as Lambda, SQS, or other services.",
    tags: ["eventbridge"]
  },
  {
    id: "3.8-004",
    domain: 3,
    task: "3.8",
    front: "Connect vs SES - which business problem does each own?",
    back: "Connect: managed cloud contact center (telephony, IVR, agent routing). SES: high-volume transactional and marketing email sending with deliverability management.",
    tags: ["connect", "ses"]
  },
  {
    id: "3.8-005",
    domain: 3,
    task: "3.8",
    front: "One-time passcodes to each user's phone by SMS - SNS or SES?",
    back: "SNS - it delivers messages to individual endpoints (SMS, email, mobile push) on demand. Bulk legitimate email campaigns are SES's specialty.",
    tags: ["sns", "ses"]
  },
  {
    id: "3.8-006",
    domain: 3,
    task: "3.8",
    front: "CodePipeline vs CodeBuild - who orchestrates, who compiles?",
    back: "CodePipeline orchestrates the release pipeline (source, build, test, deploy stages on code changes). CodeBuild is the managed build service that compiles, tests, and produces artifacts inside it.",
    tags: ["codepipeline", "codebuild"]
  },
  {
    id: "3.8-007",
    domain: 3,
    task: "3.8",
    front: "\"Microservices latency, cannot tell which service is responsible.\"",
    back: "AWS X-Ray - distributed tracing that follows a single request across every service it touches and shows where time and errors go.",
    tags: ["x-ray"]
  },
  {
    id: "3.8-008",
    domain: 3,
    task: "3.8",
    front: "WorkSpaces vs AppStream 2.0 vs WorkSpaces Secure Browser?",
    back: "WorkSpaces: full managed virtual desktop per user. AppStream 2.0: streams individual applications on demand. Secure Browser: managed isolated browsing - content renders in the cloud, pixels stream to the endpoint.",
    tags: ["end-user computing"]
  },
  {
    id: "3.8-009",
    domain: 3,
    task: "3.8",
    front: "What does AWS Amplify provide for a small frontend team?",
    back: "Build, deploy, and host web/mobile apps (static sites, SPAs) with continuous deployment, plus ready-made backend building blocks: authentication, APIs, storage.",
    tags: ["amplify"]
  },
  {
    id: "3.8-010",
    domain: 3,
    task: "3.8",
    front: "\"Thousands of trucks with GPS and temperature sensors reporting telemetry and receiving commands.\"",
    back: "AWS IoT Core - the managed broker that connects device fleets, ingests telemetry at scale, and routes messages both directions.",
    tags: ["iot core"]
  },
  {
    id: "3.8-011",
    domain: 3,
    task: "3.8",
    front: "Support tiers: what separates Basic, Business-level, and Enterprise?",
    back: "Basic: free - docs, account help, community. Business-level: 24/7 email/chat/phone with fast production response times. Enterprise: dedicated TAM, concierge billing, proactive architectural guidance, fastest responses.",
    tags: ["support plans"]
  },
  {
    id: "3.8-012",
    domain: 3,
    task: "3.8",
    front: "Which two AWS services form the classic asynchronous decoupling pair for microservices?",
    back: "SQS (queue the work) and SNS (fan out the events) - often combined so one topic feeds multiple queues for event-driven architectures.",
    tags: ["application integration", "sns", "sqs"]
  }
);
