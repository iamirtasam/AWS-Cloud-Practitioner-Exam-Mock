window.QBANK = window.QBANK || [];
window.QBANK.push(
  {
    id: "3.3-001",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "easy",
    stem: "What does Amazon EC2 provide?",
    options: [
      "A managed relational database with automatic failover",
      "Resizable virtual servers in the cloud, with a choice of operating system and instance size",
      "A global content delivery network",
      "A service for registering domain names"
    ],
    answer: [1],
    explanation: "Amazon Elastic Compute Cloud (EC2) is the foundational compute service: virtual machines you can launch in minutes, resize as needs change, and configure with your choice of OS and software. The database, CDN, and domain registration descriptions point to RDS, CloudFront, and Route 53 respectively.",
    rationales: [
      "That describes Amazon RDS, a database service rather than raw compute.",
      "",
      "That describes Amazon CloudFront's content delivery network.",
      "That describes Amazon Route 53's DNS service."
    ],
    services: ["Amazon EC2"],
    tags: ["ec2", "compute"]
  },
  {
    id: "3.3-002",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "easy",
    stem: "A company runs batch-processing jobs and scientific modeling workloads that are CPU-bound and do little I/O. Which Amazon EC2 instance family should it choose?",
    options: [
      "Storage optimized",
      "Memory optimized",
      "Compute optimized",
      "A t-family burstable instance sized for small websites"
    ],
    answer: [2],
    explanation: "Compute optimized instances (the C families) deliver the highest processor performance per instance, which is exactly what CPU-bound work such as batch processing, scientific modeling, HPC, and dedicated gaming servers needs. Storage and memory families optimize for different bottlenecks entirely.",
    rationales: [
      "Storage optimized instances exist for workloads that need massive fast local disk, not raw CPU.",
      "Memory optimized instances serve workloads that hold huge datasets in RAM, such as in-memory caches.",
      "",
      "Burstable general-purpose instances are sized for everyday web and dev workloads and would throttle under sustained CPU load."
    ],
    services: ["Amazon EC2"],
    tags: ["ec2 instance types", "compute optimized"]
  },
  {
    id: "3.3-003",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "easy",
    stem: "A team operates an in-memory analytics engine whose dataset must sit entirely in RAM for speed. Which instance family is designed for this?",
    options: [
      "Memory optimized",
      "Compute optimized",
      "General purpose",
      "Accelerated computing with GPUs"
    ],
    answer: [0],
    explanation: "Memory optimized instances (the R families) pack the most RAM per vCPU for workloads like in-memory caches, real-time analytics, and memory-intensive databases. GPUs accelerate parallel computation, not memory capacity, and general-purpose instances balance resources rather than maximizing any one of them.",
    rationales: [
      "",
      "Compute optimized maximizes processor throughput, which does not help a dataset that does not fit in memory.",
      "General purpose instances offer a balance and are the wrong choice when one resource dominates.",
      "GPU instances accelerate parallel math for ML and graphics; the bottleneck here is memory capacity."
    ],
    services: ["Amazon EC2"],
    tags: ["ec2 instance types", "memory optimized"]
  },
  {
    id: "3.3-004",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "medium",
    stem: "A NoSQL database cluster needs tens of thousands of low-latency I/O operations per second against large amounts of fast local SSD storage. Which Amazon EC2 instance family fits?",
    options: [
      "Memory optimized, for holding the dataset in cache",
      "Burstable general purpose, for balanced performance",
      "Accelerated computing, for parallel graphics processing",
      "Storage optimized, for high sequential read/write access to large local storage"
    ],
    answer: [3],
    explanation: "Storage optimized instances pair dense, fast local SSDs with the throughput NoSQL clusters, distributed file systems, and data warehouse-style workloads demand. The memory story matters too, but the stated bottleneck - tens of thousands of low-latency I/O operations against local storage - is the storage-optimized signature.",
    rationales: [
      "Memory capacity helps caching layers but does not deliver local disk I/O performance.",
      "Burstable instances throttle under sustained load and carry no special local storage capability.",
      "Graphics acceleration is unrelated to disk I/O latency.",
      ""
    ],
    services: ["Amazon EC2"],
    tags: ["ec2 instance types", "storage optimized"]
  },
  {
    id: "3.3-005",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "easy",
    stem: "A small business hosts its company website and development servers - ordinary workloads with no unusual resource demands. Which instance family is the sensible default?",
    options: [
      "Accelerated computing with GPUs",
      "General purpose",
      "Storage optimized",
      "Compute optimized"
    ],
    answer: [1],
    explanation: "General purpose instances (the T and M families) balance compute, memory, and networking, making them the default for web servers, development environments, and small to mid-size databases - the vast majority of everyday workloads. Specialized families cost more and are justified only when a specific resource dominates.",
    rationales: [
      "GPUs would sit idle on a website and multiply the bill.",
      "",
      "Dense local storage adds cost with no benefit for a small website.",
      "Compute optimized pricing pays for CPU headroom that ordinary web traffic never uses."
    ],
    services: ["Amazon EC2"],
    tags: ["ec2 instance types", "general purpose"]
  },
  {
    id: "3.3-006",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "medium",
    stem: "A research group will train machine learning models and render 3D graphics. Both workloads need massive parallel floating-point computation. Which instance choice fits?",
    options: [
      "Burstable general purpose instances",
      "Storage optimized instances",
      "Accelerated computing instances with GPUs",
      "Memory optimized instances"
    ],
    answer: [2],
    explanation: "Accelerated computing instances carry GPUs, hardware built for thousands of parallel operations - the profile of ML training and graphics rendering. CPU-only families, whatever their memory or storage strengths, cannot match a GPU on this class of work.",
    rationales: [
      "Burstable CPU instances throttle precisely when sustained parallel computation is needed.",
      "Local disk capacity does not address parallel compute at all.",
      "",
      "Memory helps feed the GPUs, but the acceleration itself comes from GPU hardware."
    ],
    services: ["Amazon EC2"],
    tags: ["ec2 instance types", "accelerated computing", "gpu"]
  },
  {
    id: "3.3-007",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "medium",
    stem: "Which description matches AWS Lambda?",
    options: [
      "A service that runs your code in response to events, scaling automatically and charging only for the compute time consumed",
      "A physical server rented exclusively to one customer",
      "A Kubernetes control plane operated by AWS",
      "A service that provides fixed monthly pricing for pre-provisioned servers"
    ],
    answer: [0],
    explanation: "Lambda is the canonical serverless compute service: upload code, define the trigger, and Lambda runs it on demand - scaling from a handful of invocations to thousands per second with no capacity to provision and no charge while nothing runs. Fixed-price pre-provisioned models are the opposite of its economics.",
    rationales: [
      "",
      "Dedicated physical servers describe Dedicated Hosts, not Lambda.",
      "A managed Kubernetes control plane describes Amazon EKS.",
      "Lambda is billed per invocation and duration; there is no fixed monthly server bill."
    ],
    services: ["AWS Lambda"],
    tags: ["lambda", "serverless"]
  },
  {
    id: "3.3-008",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "medium",
    stem: "A video transcoder must run continuously for several hours per file. A team wants to move it off its own servers. Why is AWS Lambda the wrong fit here?",
    options: [
      "Because Lambda cannot run code written in popular languages",
      "Because Lambda requires an EC2 instance behind it",
      "Because Lambda charges even when no function is running",
      "Because Lambda imposes a maximum execution time per invocation (15 minutes), which multi-hour jobs exceed"
    ],
    answer: [3],
    explanation: "Lambda's model is short, event-driven functions with a hard 15-minute limit per invocation. Multi-hour jobs need a different shape of compute - EC2, or containers on ECS or EKS with Fargate. Language support, instance requirements, and idle billing are all non-issues for Lambda.",
    rationales: [
      "Lambda supports multiple popular runtimes including Python, Node.js, and Java.",
      "Lambda runs its own managed fleet; no EC2 instance is required.",
      "Lambda charges only while a function runs; idle time costs nothing.",
      ""
    ],
    services: ["AWS Lambda"],
    tags: ["lambda", "limits"]
  },
  {
    id: "3.3-009",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "easy",
    stem: "An e-commerce site sees traffic triple during evening promotions and drop back overnight. Which capability provides the elasticity to match capacity to this demand automatically?",
    options: [
      "Amazon Route 53",
      "AWS Organizations",
      "Amazon EC2 Auto Scaling",
      "AWS CloudTrail"
    ],
    answer: [2],
    explanation: "Amazon EC2 Auto Scaling adds instances as demand rises and removes them as it falls, keeping capacity matched to load automatically - the definition of elasticity on AWS, and a direct cost optimization since you stop paying for idle servers overnight. Route 53 is DNS, Organizations governs accounts, CloudTrail logs API activity.",
    rationales: [
      "Route 53 answers DNS queries; it does not change how many servers run.",
      "Organizations consolidates accounts and billing, not application capacity.",
      "",
      "CloudTrail records who did what; it manages no capacity."
    ],
    services: ["Amazon EC2 Auto Scaling"],
    tags: ["auto scaling", "elasticity"]
  },
  {
    id: "3.3-010",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "medium",
    stem: "What does Elastic Load Balancing do in front of a fleet of application servers?",
    options: [
      "It stores object backups of each server's disk",
      "It distributes incoming traffic across multiple targets and stops sending requests to unhealthy ones",
      "It encrypts all database traffic by default",
      "It registers domain names for the application"
    ],
    answer: [1],
    explanation: "A load balancer is a single entry point that spreads requests across a fleet - in one or many Availability Zones - and uses health checks to route only to targets that can actually serve traffic. It is a traffic director; storage, encryption defaults, and DNS registration belong to other services.",
    rationales: [
      "Disk backups are a storage and AWS Backup concern, not load balancing.",
      "",
      "Encryption in transit is configured via listeners and certificates, not an inherent load balancer function as stated here.",
      "DNS registration is Route 53's job."
    ],
    services: ["Elastic Load Balancing"],
    tags: ["load balancing", "health checks"]
  },
  {
    id: "3.3-011",
    domain: 3,
    task: "3.3",
    type: "multi",
    difficulty: "medium",
    stem: "A production web tier uses Elastic Load Balancing with Amazon EC2 Auto Scaling across two Availability Zones. Which TWO benefits does this combination directly deliver? (Select TWO.)",
    options: [
      "Failed instances are replaced automatically, and traffic routes only to healthy instances",
      "It eliminates the need for any database",
      "Capacity grows and shrinks with demand, so the site stays responsive at peaks and cheaper at troughs",
      "It removes the need for Availability Zones",
      "It guarantees the application can never contain a bug"
    ],
    answer: [0, 2],
    explanation: "This pairing is the standard resilient web tier: the load balancer's health checks mask instance failures while Auto Scaling replaces them and matches capacity to demand in both directions. It changes nothing about databases, zone architecture, or software quality.",
    rationales: [
      "",
      "A database is a separate component; the web tier's scaling setup does not remove it.",
      "",
      "The design spans Availability Zones; it cannot remove them.",
      "Infrastructure resilience and application correctness are different disciplines."
    ],
    services: ["Elastic Load Balancing", "Amazon EC2 Auto Scaling"],
    tags: ["auto scaling", "load balancing", "high availability"]
  },
  {
    id: "3.3-012",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "easy",
    stem: "What is a container, as compared with a virtual machine?",
    options: [
      "A container is a physical server shared by many tenants",
      "A container is a full guest operating system running on a hypervisor",
      "A container is a DNS record type",
      "A container packages an application with its dependencies and shares the host operating system's kernel, making it lightweight and fast to start"
    ],
    answer: [3],
    explanation: "Containers virtualize at the OS level: each container bundles the application and its libraries, but they all share the host kernel, so containers start in seconds, carry far less overhead, and run identically wherever the image runs. Virtual machines virtualize hardware and boot a whole guest OS, which is heavier.",
    rationales: [
      "Shared physical servers describe tenancy models, not containers.",
      "That is the description of a virtual machine, the comparison point rather than the container.",
      "DNS records have nothing to do with containerization.",
      ""
    ],
    services: [],
    tags: ["containers"]
  },
  {
    id: "3.3-013",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "medium",
    stem: "A company standardizes on Kubernetes and wants its existing Kubernetes tooling and expertise to keep working in the cloud. Which service fits?",
    options: [
      "Amazon ECS, because it is AWS's own orchestrator",
      "Amazon EKS, because it runs managed Kubernetes clusters compatible with the open-source ecosystem",
      "Amazon EC2, because Kubernetes runs only on raw instances",
      "Amazon S3, because it stores container images"
    ],
    answer: [1],
    explanation: "Amazon EKS is managed Kubernetes: AWS operates the control plane, and the customer keeps the upstream Kubernetes APIs, tooling, and community ecosystem they have standardized on. ECS is an excellent AWS-native orchestrator, but it is not Kubernetes and does not preserve that ecosystem compatibility.",
    rationales: [
      "ECS is a strong choice for AWS-native shops, but it does not speak the Kubernetes API.",
      "",
      "Kubernetes needs a control plane and node management, which is what EKS manages; raw EC2 alone provides neither.",
      "S3 stores objects; container images live in a registry such as ECR."
    ],
    services: ["Amazon EKS", "Amazon ECS"],
    tags: ["containers", "eks", "ecs", "kubernetes"]
  },
  {
    id: "3.3-014",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "easy",
    stem: "A team builds container images in its CI pipeline and needs a place to store and manage them so that Amazon ECS can pull them at deployment time. Which service fits?",
    options: [
      "Amazon Elastic Container Registry (Amazon ECR)",
      "Amazon Route 53",
      "Amazon ElastiCache",
      "AWS Storage Gateway"
    ],
    answer: [0],
    explanation: "Amazon ECR is the managed container image registry: CI pipelines push images there, and ECS or EKS pull them when launching tasks. Caching, DNS, and hybrid file access are unrelated to image storage.",
    rationales: [
      "",
      "Route 53 is DNS, not an image store.",
      "ElastiCache is an in-memory cache for application data.",
      "Storage Gateway connects on-premises systems to cloud storage, not container registries."
    ],
    services: ["Amazon ECR", "Amazon ECS"],
    tags: ["containers", "ecr", "registry"]
  },
  {
    id: "3.3-015",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "medium",
    stem: "A team runs containers on Amazon ECS but does not want to select, patch, or pay for idle EC2 instances underneath them. Which compute option fits?",
    options: [
      "Amazon EC2 with manual scaling",
      "Amazon ECR with an instance fleet",
      "AWS Fargate",
      "Amazon S3 hosting"
    ],
    answer: [2],
    explanation: "AWS Fargate is the serverless compute engine for containers: you define CPU and memory per task, and Fargate runs the container without any instances to manage, charging only for what runs. It removes exactly the work described - choosing, patching, and absorbing the cost of idle hosts.",
    rationales: [
      "Manual EC2 is precisely the server management the team wants to avoid.",
      "ECR stores images; it does not execute containers or remove instances.",
      "",
      "S3 is object storage and cannot run containerized applications."
    ],
    services: ["AWS Fargate", "Amazon ECS"],
    tags: ["fargate", "serverless", "containers"]
  },
  {
    id: "3.3-016",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "hard",
    stem: "A platform team runs containers on Amazon ECS around the clock at a steady, predictable scale, and wants maximum control over the underlying instances for cost tuning. Another team runs spiky batch containers occasionally and wants zero server management. Which pairing is correct?",
    options: [
      "Both teams should use Fargate; serverless is always the answer",
      "Steady workload on ECS with EC2 launch type; spiky workload on Fargate",
      "Both teams should use EC2 launch type for maximum control",
      "Steady workload on Fargate; spiky workload on EC2 with manual provisioning"
    ],
    answer: [1],
    explanation: "This is the practical trade-off: at steady scale, managing EC2 instances yourself lets you pack containers densely and optimize costs, while Fargate's per-task pricing buys freedom from server management - worth most when usage is spiky and administration would dominate. 'Serverless always' and 'control always' both ignore the economics on one side.",
    rationales: [
      "At steady 24/7 scale, Fargate's convenience premium can exceed the cost of well-packed instances; 'always' answers are wrong on principle.",
      "",
      "The spiky team would be stuck patching idle instances between runs.",
      "Inverted: this puts server management where usage is unpredictable and takes it away where scale is steady."
    ],
    services: ["Amazon ECS", "AWS Fargate"],
    tags: ["fargate", "ecs", "cost optimization"]
  },
  {
    id: "3.3-017",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "medium",
    stem: "A nightly job validates thousands of uploaded files in short bursts triggered by new uploads, and a separate legacy application must run 24/7 with full control over its operating system. Which compute pairing fits?",
    options: [
      "Both on AWS Lambda",
      "Both on long-running EC2 instances",
      "The validator on EC2; the legacy app on Lambda",
      "The validator on AWS Lambda; the legacy application on Amazon EC2"
    ],
    answer: [3],
    explanation: "Short, event-driven, bursty work is Lambda's signature - triggered per upload, scaled automatically, billed only while running. A 24/7 application needing full OS control is the classic long-running EC2 case, where a persistent server is the economical and flexible choice.",
    rationales: [
      "Lambda's execution model and time limits do not suit a permanent, fully controlled application.",
      "Paying for a 24/7 server to sit idle between nightly bursts wastes most of the bill.",
      "This pairing is reversed.",
      ""
    ],
    services: ["AWS Lambda", "Amazon EC2"],
    tags: ["lambda", "ec2", "service selection"]
  },
  {
    id: "3.3-018",
    domain: 3,
    task: "3.3",
    type: "multi",
    difficulty: "easy",
    stem: "Which TWO statements describe AWS Lambda correctly? (Select TWO.)",
    options: [
      "There are servers to provision, patch, and size in advance",
      "It scales automatically from a few requests per day to thousands per second",
      "It is billed at a fixed monthly rate regardless of usage",
      "There is no infrastructure to manage; you provide the code",
      "Each invocation may run for a maximum of 24 hours"
    ],
    answer: [1, 3],
    explanation: "Lambda's two defining properties are automatic scaling and zero infrastructure management, with billing based on requests and duration. Invocations are capped at 15 minutes, not 24 hours, and nothing is billed at a fixed monthly rate.",
    rationales: [
      "Provisioning servers is exactly what Lambda eliminates.",
      "",
      "Lambda pricing is per request and per compute duration; usage drives the bill.",
      "",
      "The per-invocation limit is 15 minutes."
    ],
    services: ["AWS Lambda"],
    tags: ["lambda", "serverless"]
  },
  {
    id: "3.3-019",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "medium",
    stem: "An operations team wants to launch pre-configured EC2 instances with the operating system, web server, and application already installed, so every instance starts identically. What should it use?",
    options: [
      "A bare instance and a manual checklist applied after launch",
      "A different instance type for each launch",
      "An Amazon Machine Image (AMI) built once with the required configuration",
      "An Amazon S3 bucket listing"
    ],
    answer: [2],
    explanation: "An AMI is the launch template for EC2: a machine image containing the operating system, patches, and installed software, from which every new instance boots identically. Building the golden image once and launching from it is the standard pattern for consistent fleets.",
    rationales: [
      "Manual post-launch steps reintroduce inconsistency, which is the problem being solved.",
      "Instance type changes size, not the software stack; the inconsistency remains.",
      "",
      "S3 lists objects in storage; it does not define an operating system image."
    ],
    services: ["Amazon EC2"],
    tags: ["ec2", "ami"]
  },
  {
    id: "3.3-020",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "medium",
    stem: "A company has a legacy application built for x86 servers running Windows. It wants to move it to AWS with minimal changes as a first step. Which compute service fits?",
    options: [
      "Amazon EC2, running the application on an equivalent instance with minimal modification",
      "Amazon CloudFront, to cache the application at the edge",
      "Amazon Polly, to convert the application's output to speech",
      "AWS Glue, to catalog the application's data files"
    ],
    answer: [0],
    explanation: "Applications built for standard x86 servers are the textbook EC2 lift-and-shift: choose a matching Windows instance, migrate the app, and modernize later. The other options are a CDN, a text-to-speech service, and a data catalog - none of them run a legacy application.",
    rationales: [
      "",
      "CloudFront caches and delivers content; it does not host the application itself.",
      "Polly converts text to speech; it has nothing to do with hosting applications.",
      "Glue prepares and catalogs data for analytics; it does not run applications."
    ],
    services: ["Amazon EC2"],
    tags: ["ec2", "migration", "lift and shift"]
  },
  {
    id: "3.3-021",
    domain: 3,
    task: "3.3",
    type: "multi",
    difficulty: "medium",
    stem: "A developer wants to run code without managing any servers. Which TWO options are serverless compute services? (Select TWO.)",
    options: [
      "Amazon EC2 with Auto Scaling",
      "AWS Lambda",
      "Amazon EC2 Dedicated Hosts",
      "AWS Fargate for containers",
      "AWS Direct Connect"
    ],
    answer: [1, 3],
    explanation: "Lambda runs functions without servers, and Fargate runs containers without servers - together the two serverless compute options in the CLF-C02 scope. Auto Scaling EC2 still means managing instances, Dedicated Hosts are physical servers you rent entirely, and Direct Connect is a network link.",
    rationales: [
      "EC2 still requires choosing, patching, and paying for instances even with Auto Scaling attached.",
      "",
      "Dedicated Hosts are the most server-involving option of all: whole physical machines.",
      "",
      "Direct Connect is a private network connection to AWS, not compute."
    ],
    services: ["AWS Lambda", "AWS Fargate"],
    tags: ["serverless", "lambda", "fargate"]
  },
  {
    id: "3.3-022",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "hard",
    stem: "An instance behind a load balancer begins failing its health checks. The workload runs in an Auto Scaling group. What happens in a correctly configured setup?",
    options: [
      "The load balancer keeps sending traffic to the failing instance until an engineer intervenes",
      "The Auto Scaling group pauses all activity until the failing instance recovers",
      "The load balancer stops routing to the unhealthy instance, and the Auto Scaling group terminates and replaces it",
      "The instance heals itself and no monitoring is needed anywhere in the setup"
    ],
    answer: [2],
    explanation: "This is the self-healing loop of a resilient tier: health checks take the bad instance out of rotation immediately, while the Auto Scaling group treats it as failed and replaces it with a fresh one. Traffic never queues behind a dead target, and no human has to notice first.",
    rationales: [
      "Routing to known-bad targets is precisely what health checks exist to prevent.",
      "The group's job is to replace the failure, not to pause the fleet.",
      "",
      "Self-healing here comes from the configured health checks and scaling policies; it is not magic, and monitoring remains important."
    ],
    services: ["Amazon EC2 Auto Scaling", "Elastic Load Balancing"],
    tags: ["auto scaling", "health checks", "fault tolerance"]
  },
  {
    id: "3.3-023",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "medium",
    stem: "A three-tier web application runs instances in two Availability Zones. Which component lets traffic flow to whichever instances are healthy at any moment, across both zones?",
    options: [
      "Elastic Load Balancing, distributing traffic across targets in multiple Availability Zones",
      "AWS IAM, which decides which instances may receive requests",
      "Amazon S3, which fronts the application",
      "AWS Config, which records the instances' configuration state"
    ],
    answer: [0],
    explanation: "A load balancer sits in front of the fleet across zones and continuously routes only to healthy targets, making multi-zone resilience real for end users. IAM authorizes identities, S3 stores objects, and Config records configuration - none of them direct live traffic.",
    rationales: [
      "",
      "IAM controls permissions for identities and services, not traffic distribution.",
      "S3 is object storage; it does not proxy application traffic.",
      "Config is an audit and compliance recorder, not a traffic router."
    ],
    services: ["Elastic Load Balancing"],
    tags: ["load balancing", "multi-az"]
  },
  {
    id: "3.3-024",
    domain: 3,
    task: "3.3",
    type: "single",
    difficulty: "easy",
    stem: "Which compute option gives a customer the MOST direct control over the guest operating system?",
    options: [
      "AWS Lambda",
      "AWS Fargate",
      "Amazon S3",
      "Amazon EC2"
    ],
    answer: [3],
    explanation: "EC2 hands the customer the machine: they choose and log into the operating system, install anything, and manage patching - maximum control along with maximum responsibility. Lambda and Fargate remove the operating system from view by design, and S3 stores objects, not operating systems.",
    rationales: [
      "Lambda abstracts the operating system away entirely; customers provide functions only.",
      "Fargate abstracts away even the container hosts, not just the OS.",
      "S3 stores files; there is no operating system to control.",
      ""
    ],
    services: ["Amazon EC2"],
    tags: ["ec2", "control", "service selection"]
  }
);
