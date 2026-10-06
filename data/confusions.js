window.CONFUSIONS = window.CONFUSIONS || [];
window.CONFUSIONS.push(
  {
    id: "conf-001",
    domain: 3,
    topic: "Compute execution models",
    why: "All three run applications - the stem's control, duration, and management requirements decide which one.",
    items: [
      {
        name: "Amazon EC2",
        use: "Run virtual machines with full OS control for long-lived or specialized workloads.",
        notFor: "Event-driven code that runs in milliseconds - Lambda is cheaper and simpler there.",
        tell: "Stem says full control, custom OS, long-running, licensed software, or persistent server."
      },
      {
        name: "AWS Lambda",
        use: "Run event-triggered code without servers, paying per request and millisecond.",
        notFor: "Jobs longer than 15 minutes, persistent connections, or anything needing OS-level access.",
        tell: "Stem says run code in response to events, no servers to manage, unpredictable or intermittent load."
      },
      {
        name: "Amazon Lightsail",
        use: "Launch small prepackaged compute-plus-storage-plus-networking bundles at a fixed price.",
        notFor: "Deep customization, enterprise architecture, or variable enterprise-scale workloads.",
        tell: "Stem says small website, blog, simple project, fixed monthly price, or beginner-friendly."
      }
    ]
  },
  {
    id: "conf-002",
    domain: 3,
    topic: "Container services",
    why: "ECS and EKS both orchestrate containers; Fargate is orthogonal - it is how the containers run.",
    items: [
      {
        name: "Amazon ECS",
        use: "AWS-native container orchestration with deep AWS integration (IAM, ELB, monitoring).",
        notFor: "Teams that need the Kubernetes ecosystem and API compatibility.",
        tell: "Stem says run containers on AWS with AWS-native tooling and no vendor specifics."
      },
      {
        name: "Amazon EKS",
        use: "Managed Kubernetes control plane for teams standardizing on Kubernetes APIs and tooling.",
        notFor: "Simple deployments where Kubernetes' flexibility is unneeded overhead.",
        tell: "Stem says Kubernetes, kubectl, Helm, or portability across clusters."
      },
      {
        name: "AWS Fargate",
        use: "Serverless compute engine for ECS or EKS tasks - no nodes to patch or scale.",
        notFor: "Workloads needing host-level access, GPU passthrough, or custom daemons on the node.",
        tell: "Stem says containers without managing servers or clusters."
      }
    ]
  },
  {
    id: "conf-003",
    domain: 3,
    topic: "Block, file, and object storage",
    why: "Three storage shapes solve three attachment patterns - the access pattern in the stem decides.",
    items: [
      {
        name: "Amazon EBS",
        use: "Block storage volume attached to ONE EC2 instance (mostly) - boot disks, databases, virtual hard drives.",
        notFor: "Shared access by many instances, or unstructured object storage.",
        tell: "Stem says attached volume, virtual disk, boot volume, or database storage."
      },
      {
        name: "Amazon EFS",
        use: "Managed NFS file system mounted concurrently by MANY instances, growing automatically.",
        notFor: "Single-instance high IOPS block performance, or archive blobs.",
        tell: "Stem says shared file storage, many servers mounting together, Linux NFS, lift-and-shift file shares."
      },
      {
        name: "Amazon S3",
        use: "Object storage for files, images, backups, static sites, and data lakes at any scale.",
        notFor: "Boot volumes, databases needing block IOPS, or POSIX file semantics.",
        tell: "Stem says objects, unlimited files, static website hosting, backups, or data lake."
      }
    ]
  },
  {
    id: "conf-004",
    domain: 3,
    topic: "File and hybrid storage services",
    why: "EFS, FSx, and Storage Gateway all touch files - the protocol and location decide.",
    items: [
      {
        name: "Amazon EFS",
        use: "Linux-native NFS file system shared across instances and AZs, elastic capacity.",
        notFor: "Windows/SMB shares or extreme high-performance compute file systems.",
        tell: "Stem says Linux, NFS, simple elastic shared storage."
      },
      {
        name: "Amazon FSx",
        use: "Managed third-party file systems: Windows File Server (SMB/AD), Lustre for HPC, ONTAP, OpenZFS.",
        notFor: "Generic Linux NFS shares where EFS is simpler and cheaper.",
        tell: "Stem says Windows file shares, Active Directory, or Lustre high-performance computing."
      },
      {
        name: "AWS Storage Gateway",
        use: "Connects ON-PREMISES applications to AWS storage via file/volume/tape interfaces.",
        notFor: "Cloud-native applications that can use EFS or S3 directly.",
        tell: "Stem says on-premises systems, hybrid storage, backup appliance, or local cache to cloud."
      }
    ]
  },
  {
    id: "conf-005",
    domain: 3,
    topic: "Relational database options",
    why: "RDS, Aurora, and EC2-hosted databases differ in who manages what.",
    items: [
      {
        name: "Amazon RDS",
        use: "Managed relational database for six engines with automated patching, backups, Multi-AZ failover.",
        notFor: "Extreme scale or availability beyond RDS's ceilings - or OS-level access.",
        tell: "Stem says managed SQL, automated backups and patching, standard engines."
      },
      {
        name: "Amazon Aurora",
        use: "AWS's MySQL/PostgreSQL-compatible engine with self-healing multi-AZ storage and up to 15 read replicas.",
        notFor: "Non-MySQL/PostgreSQL engines like Oracle or SQL Server (use RDS).",
        tell: "Stem says high performance, replicas in milliseconds, MySQL or PostgreSQL compatible at scale."
      },
      {
        name: "Database on Amazon EC2",
        use: "Self-managed database on EC2 for full OS and version control, or engine RDS does not offer.",
        notFor: "Anyone wanting managed operations - you keep patching, backups, and failover yourself.",
        tell: "Stem says custom OS access, unusual engine, or legacy versions - otherwise managed wins."
      }
    ]
  },
  {
    id: "conf-006",
    domain: 3,
    topic: "Databases by purpose",
    why: "All are databases - the access pattern (rows, documents, cache, analytics) picks the service.",
    items: [
      {
        name: "Amazon RDS / Aurora",
        use: "Transactional relational data with joins and ACID guarantees.",
        notFor: "Massive key-value scale or dashboard analytics.",
        tell: "Stem says relationships, transactions, SQL schema."
      },
      {
        name: "Amazon DynamoDB",
        use: "Serverless NoSQL key-value store at any scale with single-digit-millisecond latency.",
        notFor: "Complex joins and multi-row transactions as the core need.",
        tell: "Stem says key-value, huge scale, unpredictable traffic, serverless, single-digit milliseconds."
      },
      {
        name: "Amazon ElastiCache",
        use: "In-memory cache (Redis/Memcached) shielding databases from repeated reads and holding sessions.",
        notFor: "The system of record - data must be recreatable.",
        tell: "Stem says cache frequent reads, reduce database load, store session state."
      },
      {
        name: "Amazon Redshift",
        use: "Petabyte data warehouse for analytics and BI with columnar storage.",
        notFor: "The application's operational database.",
        tell: "Stem says analytics, data warehouse, dashboards, aggregate across millions of rows."
      }
    ]
  },
  {
    id: "conf-007",
    domain: 3,
    topic: "Messaging and integration services",
    why: "SQS, SNS, and EventBridge all move messages - direction and routing decide.",
    items: [
      {
        name: "Amazon SQS",
        use: "Pull-based QUEUES: one producer, one or more consumers pulling at their own pace; spikes absorbed.",
        notFor: "Pushing to many different endpoint types, or rule-based event routing.",
        tell: "Stem says queue, buffer, process asynchronously, decouple producer from consumer."
      },
      {
        name: "Amazon SNS",
        use: "Push-based PUB/SUB: one publisher fans out to email, SMS, push, HTTP, and queues.",
        notFor: "Durable queuing with per-message processing - use SQS (often behind SNS).",
        tell: "Stem says notify many subscribers at once, send SMS/email/push, fanout."
      },
      {
        name: "Amazon EventBridge",
        use: "Event bus routing events from AWS services and SaaS to targets by rules.",
        notFor: "Simple point-to-point queues or SMS fanout.",
        tell: "Stem says route events based on rules, react to AWS service state changes, SaaS events."
      }
    ]
  },
  {
    id: "conf-008",
    domain: 3,
    topic: "Traffic handling: DNS, CDN, load balancing",
    why: "All sit in front of applications - the layer they operate at decides.",
    items: [
      {
        name: "Amazon Route 53",
        use: "DNS: translate names to addresses, register domains, route by latency/geolocation/health.",
        notFor: "Caching content or distributing request load across instances.",
        tell: "Stem says domain names, DNS, register domain, route users to nearest region."
      },
      {
        name: "Amazon CloudFront",
        use: "CDN: cache content at edge locations worldwide, terminate TLS, shield origins.",
        notFor: "DNS resolution or distributing requests among backend servers.",
        tell: "Stem says global low latency, cache at the edge, deliver content to users worldwide."
      },
      {
        name: "Elastic Load Balancing",
        use: "Distribute incoming requests across multiple targets in multiple AZs with health checks.",
        notFor: "Global content caching or DNS-level answers.",
        tell: "Stem says distribute traffic across instances, health checks, pair with Auto Scaling."
      }
    ]
  },
  {
    id: "conf-009",
    domain: 3,
    topic: "Hybrid connectivity",
    why: "Both connect on-premises to AWS - the medium and guarantees differ.",
    items: [
      {
        name: "AWS Site-to-Site VPN",
        use: "Encrypted IPsec tunnels over the public internet - fast to establish, minutes not months.",
        notFor: "Guaranteed bandwidth and latency - the internet varies.",
        tell: "Stem says quick to set up, encrypted over the internet, temporary or backup link."
      },
      {
        name: "AWS Direct Connect",
        use: "Dedicated private physical line to AWS with consistent bandwidth and latency.",
        notFor: "Rapid setup - provisioning takes weeks; VPN is the fast option.",
        tell: "Stem says dedicated connection, consistent performance, private line, does not traverse the internet."
      }
    ]
  },
  {
    id: "conf-010",
    domain: 3,
    topic: "Internet access in a VPC",
    why: "Both gateways touch the internet - the direction of initiation decides.",
    items: [
      {
        name: "Internet gateway",
        use: "Gives PUBLIC subnets bidirectional internet access - in and out.",
        notFor: "Private subnets that must never accept inbound internet connections.",
        tell: "Stem says public subnet resources reachable from the internet."
      },
      {
        name: "NAT gateway",
        use: "Lets PRIVATE subnet instances initiate OUTBOUND internet traffic while blocking inbound.",
        notFor: "Resources that must be reached from the internet - that needs an IGW path.",
        tell: "Stem says private instances need updates from the internet, but must not be exposed."
      }
    ]
  },
  {
    id: "conf-011",
    domain: 2,
    topic: "Firewall layers: security group vs NACL",
    why: "Both filter traffic - the attachment point and statefulness differ.",
    items: [
      {
        name: "Security group",
        use: "STATEFUL instance-level firewall: allow rules only, return traffic automatic.",
        notFor: "Explicit DENY rules or whole-subnet blocks.",
        tell: "Stem says instance firewall, allow port from source, stateful."
      },
      {
        name: "Network ACL",
        use: "STATELESS subnet-level firewall with numbered allow AND deny rules evaluated in order.",
        notFor: "Default instance protection - it does not track connections.",
        tell: "Stem says deny specific IP, subnet-wide rules, stateless."
      }
    ]
  },
  {
    id: "conf-012",
    domain: 2,
    topic: "IAM identity types",
    why: "Users, groups, roles, and policies are all IAM - who or what assumes it decides.",
    items: [
      {
        name: "IAM user",
        use: "Long-lived identity for one person or system with permanent credentials.",
        notFor: "Human workforce at scale (prefer Identity Center) or AWS services (roles).",
        tell: "Stem says a specific person or system needs permanent programmatic access."
      },
      {
        name: "IAM group",
        use: "Bundle users to share permission sets by job function.",
        notFor: "Attaching to services or applications - groups hold users only.",
        tell: "Stem says grant the same permissions to many people at once."
      },
      {
        name: "IAM role",
        use: "Temporary, assumable identity for services, applications, federated users, cross-account access.",
        notFor: "Anything needing permanent stored credentials.",
        tell: "Stem says an AWS service, application, or federated identity needs permissions - no new credentials."
      },
      {
        name: "IAM policy",
        use: "The JSON permission document attached to identities or resources defining who can do what.",
        notFor: "Acting as an identity itself - it only defines permissions.",
        tell: "Stem says define or attach permissions."
      }
    ]
  },
  {
    id: "conf-013",
    domain: 2,
    topic: "Root user vs administrative access",
    why: "Both can do everything - that is exactly why one stays locked away.",
    items: [
      {
        name: "Root user",
        use: "The rare tasks that require it: change account settings, close the account, some support plan changes.",
        notFor: "Daily administration - it has no limits, so a mistake or leak is catastrophic.",
        tell: "Stem says account-level settings change or account closure - and best practice is MFA + minimal use."
      },
      {
        name: "IAM administrative user (or Identity Center admin)",
        use: "Day-to-day administration under MFA with auditable, removable credentials.",
        notFor: "The few account-level operations reserved for root.",
        tell: "Stem says daily administration of the account - never root."
      }
    ]
  },
  {
    id: "conf-014",
    domain: 2,
    topic: "Keys, secrets, and certificates",
    why: "All protect cryptographic material - the type of material decides.",
    items: [
      {
        name: "AWS KMS",
        use: "Create and control encryption keys integrated across AWS services - the default for encryption at rest.",
        notFor: "Storing application secrets like passwords (Secrets Manager) or dedicated HSM control (CloudHSM).",
        tell: "Stem says manage encryption keys, enable encryption on services."
      },
      {
        name: "AWS CloudHSM",
        use: "Dedicated single-tenant hardware security modules with customer-sole key control.",
        notFor: "General workloads - KMS is the managed shared default.",
        tell: "Stem says dedicated HSM, compliance requires customer-held keys, FIPS hardware."
      },
      {
        name: "AWS Secrets Manager",
        use: "Store and auto-rotate application secrets: database passwords, API keys, tokens.",
        notFor: "Service-integrated data encryption keys (KMS's job).",
        tell: "Stem says database credentials in code must move out, rotate passwords automatically."
      },
      {
        name: "AWS Certificate Manager (ACM)",
        use: "Provision and auto-renew TLS certificates for load balancers, CloudFront, and APIs.",
        notFor: "Key management or secret storage.",
        tell: "Stem says HTTPS certificate, TLS on the load balancer, automatic renewal."
      }
    ]
  },
  {
    id: "conf-015",
    domain: 2,
    topic: "Encryption states",
    why: "At rest and in transit protect different moments of the data's life.",
    items: [
      {
        name: "Encryption at rest",
        use: "Protect stored data - disks, snapshots, objects, database files - via KMS-backed encryption.",
        notFor: "Network interception - that is transit's threat model.",
        tell: "Stem says stored data, stolen disk or snapshot, compliance requires encrypted storage."
      },
      {
        name: "Encryption in transit",
        use: "Protect data moving over networks - TLS/HTTPS, IPsec VPN tunnels.",
        notFor: "Data sitting idle on storage media.",
        tell: "Stem says data crossing networks, HTTPS only, protect against interception."
      }
    ]
  },
  {
    id: "conf-016",
    domain: 2,
    topic: "Detection and assessment services",
    why: "GuardDuty, Inspector, Macie, and Security Hub all 'find problems' - the problem type decides.",
    items: [
      {
        name: "Amazon GuardDuty",
        use: "Threat detection: analyze CloudTrail, VPC Flow Logs, DNS for compromised instances and suspicious API use.",
        notFor: "Software vulnerabilities inside instances or finding PII in buckets.",
        tell: "Stem says malicious activity, compromised credentials, unusual API behavior."
      },
      {
        name: "Amazon Inspector",
        use: "Vulnerability scanning: CVEs on EC2, container images, Lambda; unintended network exposure.",
        notFor: "Behavioral threat detection or sensitive-data discovery.",
        tell: "Stem says software vulnerabilities, missing patches, open ports on instances."
      },
      {
        name: "Amazon Macie",
        use: "Discover and classify SENSITIVE DATA (PII, credentials) in S3 buckets.",
        notFor: "Instance vulnerabilities or network threats.",
        tell: "Stem says find personally identifiable information in S3, data privacy discovery."
      },
      {
        name: "AWS Security Hub",
        use: "Aggregate and prioritize findings from GuardDuty, Inspector, Macie, and standards checks (CIS).",
        notFor: "Being the detector itself - it aggregates and scores.",
        tell: "Stem says single security posture view, central findings aggregation."
      }
    ]
  },
  {
    id: "conf-017",
    domain: 2,
    topic: "Network protection services",
    why: "WAF, Shield, and Firewall Manager stack - the threat and scope decide.",
    items: [
      {
        name: "AWS WAF",
        use: "Filter HTTP requests by rules: block SQL injection, XSS, bad patterns, rate abuse.",
        notFor: "Volumetric DDoS - that is Shield's layer.",
        tell: "Stem says block malicious web requests, SQL injection, application-layer rules."
      },
      {
        name: "AWS Shield",
        use: "DDoS protection: Standard automatic and free; Advanced adds enhanced mitigation and cost protection.",
        notFor: "Application-layer request inspection (WAF's job).",
        tell: "Stem says DDoS attack on the infrastructure."
      },
      {
        name: "AWS Firewall Manager",
        use: "Centrally manage WAF, Shield Advanced, and security group policies across an Organization.",
        notFor: "Single-account setups where the service console is enough.",
        tell: "Stem says apply the same firewall policy across many accounts centrally."
      }
    ]
  },
  {
    id: "conf-018",
    domain: 2,
    topic: "Audit, monitor, and record",
    why: "CloudTrail, CloudWatch, and Config each answer a different question about the same account.",
    items: [
      {
        name: "AWS CloudTrail",
        use: "API audit log: who called what, when, from where - 'who did this?'.",
        notFor: "Metric thresholds or resource configuration snapshots.",
        tell: "Stem says audit trail, API history, compliance recording, who changed this."
      },
      {
        name: "Amazon CloudWatch",
        use: "Metrics, logs, dashboards, alarms - 'is the system healthy and performing?'.",
        notFor: "Attributing API calls to identities or tracking configuration state.",
        tell: "Stem says monitor performance, alarm on CPU, view logs and metrics."
      },
      {
        name: "AWS Config",
        use: "Resource configuration timeline and rule compliance - 'what did this resource look like and was it compliant?'.",
        notFor: "API call attribution (CloudTrail) or operational metrics (CloudWatch).",
        tell: "Stem says configuration history, compliance of resource settings, what changed in the resource."
      }
    ]
  },
  {
    id: "conf-019",
    domain: 2,
    topic: "Workforce vs application identity",
    why: "IAM Identity Center and Cognito both provide sign-in - the audience decides.",
    items: [
      {
        name: "IAM Identity Center",
        use: "Workforce sign-on to AWS accounts and business apps - employees with SSO from corporate IdP.",
        notFor: "End customers of your application - they are not employees.",
        tell: "Stem says employees, single sign-on, manage access to multiple AWS accounts."
      },
      {
        name: "Amazon Cognito",
        use: "Application identity: sign-up/sign-in for your APP's users with MFA and federation, issuing AWS credentials.",
        notFor: "Your employees' access to the AWS console.",
        tell: "Stem says application users, social login, web/mobile app authentication."
      }
    ]
  },
  {
    id: "conf-020",
    domain: 4,
    topic: "AWS Support plan tiers",
    why: "The plan names changed in 2026 - matching features to the CURRENT lineup is the test.",
    items: [
      {
        name: "Basic Support",
        use: "Free: 24x7 account/billing Q&A, forums, health checks, docs, core Trusted Advisor checks.",
        notFor: "Technical cases - no engineer access at all.",
        tell: "Stem says free, billing questions only, no technical support."
      },
      {
        name: "AWS Business Support+",
        use: "24x7 Cloud Support Engineers, <30-min business-critical response, 500+ TA checks, Support API, from $29/month.",
        notFor: "Those needing a designated TAM - that is Enterprise.",
        tell: "Stem says production down, fast response 24/7, no mention of TAM."
      },
      {
        name: "AWS Enterprise Support",
        use: "Adds designated TAM, 15-min production-critical response, Security Incident Response, business reviews.",
        notFor: "Small accounts - the cost is not justified.",
        tell: "Stem says dedicated TAM, fastest response, mission-critical at enterprise scale."
      },
      {
        name: "AWS Unified Operations",
        use: "TAM plus Domain Specialist Engineers, runbooks, critical workload reviews, event management.",
        notFor: "Standard support needs - it is the deepest operations engagement.",
        tell: "Stem says TAM plus specialist engineers, personalized runbooks, deep operations partnership."
      }
    ]
  },
  {
    id: "conf-021",
    domain: 4,
    topic: "Proactive operations tools",
    why: "Trusted Advisor and Health both tell you things before incidents - different subjects.",
    items: [
      {
        name: "AWS Trusted Advisor",
        use: "Best-practice checks: idle resources, unassociated IPs, security posture, service limits.",
        notFor: "Live AWS service incidents affecting your account.",
        tell: "Stem says cost savings recommendations, best practices, service limits approaching."
      },
      {
        name: "AWS Health Dashboard",
        use: "AWS service status plus events affecting YOUR resources (maintenance, degradation).",
        notFor: "Account best-practice scoring.",
        tell: "Stem says scheduled maintenance on my instances, AWS service issue, event affecting my resources."
      },
      {
        name: "AWS Health API",
        use: "Programmatic health events for automation - route into EventBridge runbooks.",
        notFor: "Human dashboard viewing - that is the console's role.",
        tell: "Stem says automate responses to health events, integrate with internal tooling."
      }
    ]
  },
  {
    id: "conf-022",
    domain: 4,
    topic: "Cost management tools",
    why: "Four tools, four moments in time - estimation, analysis, guarding, and raw records.",
    items: [
      {
        name: "AWS Pricing Calculator",
        use: "Estimate and compare architectures BEFORE deployment.",
        notFor: "Analyzing spend that already happened.",
        tell: "Stem says estimate, before deploying, compare designs, not yet built."
      },
      {
        name: "AWS Cost Explorer",
        use: "Analyze history, group and filter spend, forecast, RI/Savings recommendations, anomaly detection.",
        notFor: "Threshold ALERTS - it reports, it does not guard.",
        tell: "Stem says what drove this month's bill, visualize spend, forecast costs."
      },
      {
        name: "AWS Budgets",
        use: "Threshold-based alerts by email/SNS before overspend lands.",
        notFor: "Line-item drill-down or architecture estimation.",
        tell: "Stem says alert when spend reaches 80%, notify before exceeding budget."
      },
      {
        name: "AWS Cost and Usage Report (CUR)",
        use: "Most detailed line-item data delivered to S3 for custom analysis and audits.",
        notFor: "Interactive dashboards or alerts.",
        tell: "Stem says most detailed billing data, audit, per-resource hourly breakdown."
      }
    ]
  },
  {
    id: "conf-023",
    domain: 4,
    topic: "Spend attribution mechanisms",
    why: "Both slice a single bill - the mechanism and scope differ.",
    items: [
      {
        name: "Cost allocation tags",
        use: "Attribute spend WITHIN accounts by team/project/environment - activate, then slice in Cost Explorer/CUR.",
        notFor: "Account-level structure - tags are per-resource metadata.",
        tell: "Stem says which team or project used this resource, within one account."
      },
      {
        name: "Consolidated billing (Organizations)",
        use: "One invoice across accounts with shared RI/Savings discounts and volume tiers.",
        notFor: "Resource-level metadata - it consolidates payment, not tagging.",
        tell: "Stem says multiple accounts, one bill, share reservation discounts."
      }
    ]
  },
  {
    id: "conf-024",
    domain: 4,
    topic: "Commitment and reservation products",
    why: "Three ways to pre-purchase compute - what you commit to decides.",
    items: [
      {
        name: "Reserved Instances",
        use: "Commit to a specific configuration for 1-3 years at up to ~72% off; size flexibility within family.",
        notFor: "Constantly changing instance families or unpredictable spend.",
        tell: "Stem says steady baseline on known instance types, deepest discount."
      },
      {
        name: "Savings Plans",
        use: "Commit to a DOLLAR-per-hour spend; discount follows across families, sizes, OS, Regions.",
        notFor: "Those needing configuration lock-in guarantees rather than flexibility.",
        tell: "Stem says flexible commitment across instance types and regions."
      },
      {
        name: "Capacity Reservations",
        use: "Guarantee capacity in a chosen AZ, billed On-Demand regardless of use.",
        notFor: "Saving money - it provides certainty, not discount.",
        tell: "Stem says must guarantee capacity in this AZ even during shortages."
      }
    ]
  },
  {
    id: "conf-025",
    domain: 4,
    topic: "Hardware isolation options",
    why: "Both isolate hardware to you - the level of visibility and control differs.",
    items: [
      {
        name: "Dedicated Instances",
        use: "Run on hardware dedicated to your account; AWS controls placement invisibly.",
        notFor: "Per-socket licensing or host affinity requirements.",
        tell: "Stem says isolation from other customers, no licensing specifics."
      },
      {
        name: "Dedicated Hosts",
        use: "Whole physical server under your control - per-socket/core/VM licenses (BYOL), compliance, host affinity.",
        notFor: "Cost-sensitive generic workloads - hosts carry a premium.",
        tell: "Stem says per-socket license, BYOL compliance, visibility into the physical host."
      }
    ]
  },
  {
    id: "conf-026",
    domain: 4,
    topic: "Spot vs On-Demand economics",
    why: "Both are commitment-free - the interruption contract is the entire difference.",
    items: [
      {
        name: "Spot Instances",
        use: "Up to ~90% off for spare capacity - batch, CI, rendering, stateless workers that checkpoint.",
        notFor: "Anything that must not stop: checkout APIs, production databases, license servers.",
        tell: "Stem says interruptible, fault-tolerant, can resume, deep discount."
      },
      {
        name: "On-Demand Instances",
        use: "Guaranteed availability at full rate by the second/hour - no planning required.",
        notFor: "Steady always-on baselines (commitments discount better) or interruptible batch (Spot is far cheaper).",
        tell: "Stem says unpredictable spiky load, short-lived, must keep running."
      }
    ]
  },
  {
    id: "conf-027",
    domain: 1,
    topic: "Migration strategy depth",
    why: "Rehost, replatform, and refactor differ only in how much changes.",
    items: [
      {
        name: "Rehost (lift and shift)",
        use: "Move servers as-is with minimal change - fastest exit from the data center.",
        notFor: "Requirements for cloud-native scale or immediate modernization.",
        tell: "Stem says as-is, minimal changes, migrate fast, optimize later."
      },
      {
        name: "Replatform (lift, tinker, shift)",
        use: "Small swaps during migration - self-managed database becomes RDS, core unchanged.",
        notFor: "Deep re-architecture or zero-change deadlines.",
        tell: "Stem says swap one component for a managed one, otherwise same."
      },
      {
        name: "Refactor (re-architect)",
        use: "Rebuild cloud-native - microservices, serverless - for maximum long-term benefit.",
        notFor: "Urgent deadlines or minimal-change mandates.",
        tell: "Stem says cloud-native, rebuild, major rework for scale and agility."
      }
    ]
  },
  {
    id: "conf-028",
    domain: 1,
    topic: "Migration data tools",
    why: "DMS, SCT, DataSync, and Snow Family all move data - the payload and network decide.",
    items: [
      {
        name: "AWS DMS",
        use: "Replicate DATABASE contents with continuous change capture for near-zero-downtime cutover.",
        notFor: "Converting schemas (SCT) or moving file systems (DataSync).",
        tell: "Stem says move database data, minimal downtime, continuous replication."
      },
      {
        name: "AWS SCT",
        use: "Convert schemas and code objects between database engines before heterogeneous DMS runs.",
        notFor: "Moving the data itself.",
        tell: "Stem says Oracle to PostgreSQL, schema conversion, stored procedures rewrite."
      },
      {
        name: "AWS DataSync",
        use: "Online file transfer NFS/SMB into S3, EFS, FSx with scheduling and validation.",
        notFor: "Networks too slow for the volume - go physical.",
        tell: "Stem says sync file shares to AWS over the network on a schedule."
      },
      {
        name: "AWS Snow Family",
        use: "Physical encrypted appliances for bulk transfer when the network is the bottleneck.",
        notFor: "Routine small transfers - the network is fine for those.",
        tell: "Stem says petabytes, network too slow, ship devices."
      }
    ]
  },
  {
    id: "conf-029",
    domain: 3,
    topic: "Deployment and provisioning tools",
    why: "CloudFormation, Beanstalk, and Lightsail all deploy - the control/convenience balance decides.",
    items: [
      {
        name: "AWS CloudFormation",
        use: "Full infrastructure as code in templates - repeatable, reviewable, versioned, any service.",
        notFor: "Teams wanting zero template authoring for standard apps.",
        tell: "Stem says repeatable infrastructure, version-controlled templates, identical environments."
      },
      {
        name: "AWS Elastic Beanstalk",
        use: "Upload application code; it provisions the surrounding EC2, LB, and Auto Scaling automatically.",
        notFor: "Non-standard stacks outside its supported platforms.",
        tell: "Stem says just deploy my application quickly, keep control underneath, Java/.NET/Python app."
      },
      {
        name: "Amazon Lightsail",
        use: "Fixed-price prepackaged bundles - the simplest path for small projects.",
        notFor: "Enterprise-scale or complex multi-service architectures.",
        tell: "Stem says simple, small, predictable monthly cost, minimal AWS knowledge."
      }
    ]
  },
  {
    id: "conf-030",
    domain: 1,
    topic: "Scaling concepts",
    why: "Vertical, horizontal, and elasticity get swapped in options - the direction and automation differ.",
    items: [
      {
        name: "Vertical scaling (up)",
        use: "Make one instance bigger - simple, no architecture change.",
        notFor: "Elastic demand - it has a hardware ceiling and usually needs downtime.",
        tell: "Stem says resize the single instance."
      },
      {
        name: "Horizontal scaling (out)",
        use: "Add more instances behind a load balancer - incremental and automatable.",
        notFor: "Stateful instances holding local sessions without shared state.",
        tell: "Stem says add instances as demand grows, load balancer in front."
      },
      {
        name: "Elasticity",
        use: "Automatic scaling in BOTH directions tracking real demand, so cost follows the curve.",
        notFor: "Static workloads - nothing to gain from scaling in.",
        tell: "Stem says scale out AND in automatically, pay only for what is used, Black Friday spikes."
      }
    ]
  }
);
