window.QBANK = window.QBANK || [];
window.QBANK.push(
  {
    id: "2.4-001",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "easy",
    stem: "What does AWS CloudTrail provide?",
    options: [
      "Automatic patching of EC2 instances",
      "A content delivery network for logs",
      "A record of API calls and user activity in the account - who did what, when, and from where",
      "Real-time blocking of SQL injection attacks"
    ],
    answer: [2],
    explanation: "CloudTrail is the account's audit log: every API call - console clicks, CLI commands, SDK calls - is recorded with actor, time, source IP, and parameters. It is the backbone of auditing, forensics, and 'who deleted that bucket' questions.",
    rationales: [
      "Patching is customer work or a managed-service duty, not CloudTrail's.",
      "There is no such CDN; CloudTrail delivers log files to S3.",
      "",
      "Web attack blocking is the job of AWS WAF."
    ],
    services: ["AWS CloudTrail"],
    tags: ["cloudtrail", "auditing"]
  },
  {
    id: "2.4-002",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "easy",
    stem: "What does AWS Config do?",
    options: [
      "Configures network equipment in AWS data centers",
      "Generates TLS certificates for websites",
      "Stores passwords for IAM users",
      "Records resource configurations over time and evaluates them against rules for compliance"
    ],
    answer: [3],
    explanation: "Config answers 'what did this resource look like and was it compliant' - it snapshots configurations, tracks their history, and runs compliance rules (encrypted? tagged? publicly accessible?) that flag drift. It records the state of resources; CloudTrail records the actions taken.",
    rationales: [
      "Data center networking is AWS infrastructure work, not a customer service.",
      "Certificate management is ACM.",
      "Password storage and policy are IAM; Config does not hold credentials.",
      ""
    ],
    services: ["AWS Config"],
    tags: ["config", "compliance"]
  },
  {
    id: "2.4-003",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "easy",
    stem: "Which pairing best distinguishes CloudTrail from AWS Config?",
    options: [
      "CloudTrail records the actions (who called which API when); Config records the states (how resources were configured and whether that was compliant)",
      "CloudTrail is for networking; Config is for compute",
      "Config logs API calls; CloudTrail evaluates compliance rules",
      "They are competing products that do the identical job"
    ],
    answer: [0],
    explanation: "The exam's favorite pairing: CloudTrail = activity history (API calls, actor, time), Config = configuration history and rule evaluation (what changed and whether it was compliant). Investigations typically join both: Config flags the drift, CloudTrail names the actor.",
    rationales: [
      "",
      "Neither service is tied to a single layer like that.",
      "The roles are swapped in this option.",
      "They are complementary services with distinct purposes."
    ],
    services: ["AWS CloudTrail", "AWS Config"],
    tags: ["cloudtrail", "config", "comparison"]
  },
  {
    id: "2.4-004",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "Which service analyzes an AWS environment and produces recommendations across cost optimization, performance, security, fault tolerance, and service limits?",
    options: [
      "Amazon Inspector",
      "AWS Trusted Advisor",
      "Amazon Macie",
      "AWS Shield"
    ],
    answer: [1],
    explanation: "Trusted Advisor is the automated advisor: it checks the account against AWS best practices in those five categories - including core security checks like open security group ports, MFA on root, and IAM use. The five-category list is its signature.",
    rationales: [
      "Inspector scans compute for vulnerabilities - a narrower job.",
      "",
      "Macie finds sensitive data in S3.",
      "Shield defends against DDoS attacks."
    ],
    services: ["AWS Trusted Advisor"],
    tags: ["trusted advisor"]
  },
  {
    id: "2.4-005",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "Which service uses machine learning over CloudTrail logs, VPC flow logs, and DNS logs to detect suspicious activity such as compromised credentials or cryptocurrency mining?",
    options: [
      "AWS Config",
      "Amazon QuickSight",
      "Amazon GuardDuty",
      "AWS Glue"
    ],
    answer: [2],
    explanation: "GuardDuty is the managed threat detection service: it continuously analyzes those log sources with ML and threat intelligence and raises findings for unusual API calls, reconnaissance, and mining behavior - no agents to deploy.",
    rationales: [
      "Config tracks resource configurations, not behavioral threats.",
      "QuickSight builds business dashboards.",
      "",
      "Glue is a data integration and ETL service."
    ],
    services: ["Amazon GuardDuty"],
    tags: ["guardduty", "threat detection"]
  },
  {
    id: "2.4-006",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "A company is worried about DDoS attacks saturating its public application. Which AWS service is the dedicated protection layer?",
    options: [
      "Amazon Inspector",
      "AWS Trusted Advisor",
      "AWS Organizations",
      "AWS Shield"
    ],
    answer: [3],
    explanation: "AWS Shield is the managed DDoS protection service: Shield Standard defends every AWS customer automatically at no cost against common volumetric attacks, and Shield Advanced adds higher protections, cost safeguards, and 24/7 response support.",
    rationales: [
      "Inspector scans for software vulnerabilities, not traffic floods.",
      "Trusted Advisor advises; it does not absorb attacks.",
      "Organizations manages accounts and policies.",
      ""
    ],
    services: ["AWS Shield"],
    tags: ["shield", "ddos"]
  },
  {
    id: "2.4-007",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "Which service inspects web traffic at layer 7 and blocks common exploits such as SQL injection and cross-site scripting on CloudFront distributions and load balancers?",
    options: [
      "AWS WAF",
      "AWS Secrets Manager",
      "Amazon CloudWatch",
      "AWS DataSync"
    ],
    answer: [0],
    explanation: "AWS WAF is the web application firewall: attach it to CloudFront, an Application Load Balancer, or API Gateway, define rules (managed or custom) against SQLi, XSS, rate abuse, and bad origins, and it filters requests before they reach the application.",
    rationales: [
      "",
      "Secrets Manager stores credentials and tokens.",
      "CloudWatch collects metrics and logs; it does not filter HTTP requests.",
      "DataSync moves data between storage systems."
    ],
    services: ["AWS WAF"],
    tags: ["waf", "web protection"]
  },
  {
    id: "2.4-008",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "What is the difference between AWS WAF and AWS Shield?",
    options: [
      "WAF blocks volumetric floods; Shield inspects HTTP request contents",
      "WAF filters web requests by content rules (exploits, patterns); Shield defends against DDoS attacks at the network/transport scale",
      "They are two names for the same firewall",
      "Shield only works on-premises; WAF only works in the cloud"
    ],
    answer: [1],
    explanation: "The split is by attack type: WAF is application-layer request filtering (malformed payloads, injection, abusive rates), Shield is denial-of-service defense (overwhelming traffic volumes). They are commonly deployed together on the same edge.",
    rationales: [
      "The halves are swapped.",
      "",
      "Distinct services for distinct attack classes.",
      "Both are AWS services protecting AWS-fronted applications."
    ],
    services: ["AWS WAF", "AWS Shield"],
    tags: ["waf", "shield", "comparison"]
  },
  {
    id: "2.4-009",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "easy",
    stem: "Which service automatically scans Amazon EC2 instances and container images for software vulnerabilities and unintended network exposure?",
    options: [
      "Amazon Inspector",
      "Amazon EventBridge",
      "Amazon Route 53",
      "AWS Amplify"
    ],
    answer: [0],
    explanation: "Amazon Inspector is the automated vulnerability management service: it scans EC2 workloads and container images for known CVEs and network reachability issues, then prioritizes findings. Discovery of vulnerabilities, not their blocking, is its role.",
    rationales: [
      "",
      "EventBridge routes events between systems.",
      "Route 53 is DNS.",
      "Amplify builds and hosts web frontends."
    ],
    services: ["Amazon Inspector"],
    tags: ["inspector", "vulnerabilities"]
  },
  {
    id: "2.4-010",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "A company must locate personally identifiable information accidentally stored across thousands of S3 objects. Which service uses machine learning to discover and help protect that sensitive data?",
    options: [
      "AWS CodeBuild",
      "AWS Step Functions",
      "Amazon Connect",
      "Amazon Macie"
    ],
    answer: [3],
    explanation: "Amazon Macie is the S3 data-discovery service: it applies ML to detect personally identifiable and sensitive data at scale and alerts on exposure risks. 'Find PII in S3' is its one-line job description.",
    rationales: [
      "CodeBuild compiles and tests software.",
      "Step Functions orchestrates workflows.",
      "Connect runs contact centers.",
      ""
    ],
    services: ["Amazon Macie"],
    tags: ["macie", "sensitive data"]
  },
  {
    id: "2.4-011",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "easy",
    stem: "A security team wants one place that aggregates findings from GuardDuty, Inspector, Macie, and other tools, and tracks the account's overall security posture. Which service fits?",
    options: [
      "AWS Security Hub",
      "Amazon QuickSight",
      "AWS Backup",
      "Amazon ECR"
    ],
    answer: [0],
    explanation: "Security Hub is the security aggregation layer: it collects and prioritizes findings from the security services and partners, runs compliance checks against standards, and gives one posture view. Aggregation across detectors is its defining trait.",
    rationales: [
      "",
      "QuickSight is business intelligence.",
      "Backup centralizes backup jobs.",
      "ECR stores container images."
    ],
    services: ["AWS Security Hub"],
    tags: ["security hub", "aggregation"]
  },
  {
    id: "2.4-012",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "An administrator receives an alert about unusually timed API calls from an unfamiliar location, suggesting compromised credentials. Which service most likely produced this finding?",
    options: [
      "Amazon Polly",
      "Amazon GuardDuty",
      "AWS CodePipeline",
      "Amazon ElastiCache"
    ],
    answer: [1],
    explanation: "Anomalous API behavior - odd timing, unusual geography, unfamiliar patterns - is GuardDuty's specialty, since it ML-analyzes CloudTrail activity for credential-compromise signals. The other services are speech, CI/CD, and caching.",
    rationales: [
      "Polly converts text to speech.",
      "",
      "CodePipeline orchestrates software releases.",
      "ElastiCache is an in-memory cache."
    ],
    services: ["Amazon GuardDuty"],
    tags: ["guardduty", "threat detection"]
  },
  {
    id: "2.4-013",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "Which service would flag that a security group allows unrestricted SSH access from the entire internet, as a best-practice warning?",
    options: [
      "AWS Trusted Advisor",
      "AWS Glue",
      "Amazon Transcribe",
      "Amazon Connect"
    ],
    answer: [0],
    explanation: "Unrestricted-port security groups are among Trusted Advisor's core security checks - alongside root MFA and IAM use - offered to every account. It inspects configuration against best practice and advises.",
    rationales: [
      "",
      "Glue integrates data for analytics.",
      "Transcribe converts speech to text.",
      "Connect provides contact centers."
    ],
    services: ["AWS Trusted Advisor"],
    tags: ["trusted advisor", "security checks"]
  },
  {
    id: "2.4-014",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "An application needs to store database passwords securely, rotate them automatically, and hand them to Lambda functions at runtime. Which service fits?",
    options: [
      "Amazon S3, in a bucket named passwords",
      "A text file on the Lambda deployment package",
      "AWS Config",
      "AWS Secrets Manager"
    ],
    answer: [3],
    explanation: "Secrets Manager is purpose-built for secrets: encrypted storage, automatic rotation (including native RDS support), fine-grained access, and runtime retrieval via API. Hardcoded or bucket-stored credentials have none of those properties.",
    rationales: [
      "S3 buckets can be encrypted, but they provide no secret rotation or access pattern - and 'passwords' buckets are a notorious anti-pattern.",
      "Credentials baked into deployment artifacts leak through repositories and logs.",
      "Config records configurations; it does not store or rotate secrets.",
      ""
    ],
    services: ["AWS Secrets Manager"],
    tags: ["secrets manager", "credentials"]
  },
  {
    id: "2.4-015",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "What is the difference between AWS KMS and AWS Secrets Manager?",
    options: [
      "KMS creates, stores, and controls encryption keys; Secrets Manager stores and rotates secrets such as passwords, tokens, and connection strings",
      "They are two names for the same key service",
      "KMS stores passwords; Secrets Manager stores certificates only",
      "Secrets Manager encrypts EBS volumes; KMS rotates IAM passwords"
    ],
    answer: [0],
    explanation: "The dividing line is keys versus secrets: KMS manages cryptographic keys used to encrypt data, while Secrets Manager manages credential-type values - with rotation built in - often themselves encrypted by KMS underneath.",
    rationales: [
      "",
      "Related but distinct services with different purposes.",
      "Reversed and wrong: KMS handles keys, Secrets Manager handles credential values of all kinds.",
      "EBS encryption uses KMS keys; IAM password policy is an IAM setting."
    ],
    services: ["AWS KMS", "AWS Secrets Manager"],
    tags: ["kms", "secrets manager", "comparison"]
  },
  {
    id: "2.4-016",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "hard",
    stem: "A retailer suspects that card numbers were copied into ordinary data files in S3 by mistake, and must find every occurrence before an audit. Which service is built for this hunt?",
    options: [
      "Amazon Inspector",
      "Amazon Macie",
      "AWS Shield",
      "AWS CloudTrail"
    ],
    answer: [1],
    explanation: "This is Macie's exact scenario: ML-driven discovery of sensitive data (card numbers are a built-in detection type) across S3 at scale, with dashboards and alerts on where it lives. Inspector scans hosts, Shield blocks floods, CloudTrail records API activity - none reads object contents.",
    rationales: [
      "Inspector scans instances and images for vulnerabilities, not S3 object contents.",
      "",
      "Shield mitigates DDoS traffic.",
      "CloudTrail records who did what; it cannot look inside objects."
    ],
    services: ["Amazon Macie"],
    tags: ["macie", "sensitive data", "s3"]
  },
  {
    id: "2.4-017",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "Which service provides managed sign-up, sign-in, and user pools for application end users, such as customers of a web or mobile app?",
    options: [
      "AWS IAM Identity Center, designed for workforce employees only",
      "Amazon Cognito",
      "AWS Directory Service",
      "Amazon WorkSpaces"
    ],
    answer: [1],
    explanation: "Amazon Cognito handles consumer-scale identity: user pools for sign-up/sign-in (including social and SAML federation), identity pools for scoped AWS credentials. Workforce access is IAM Identity Center's lane - the two are the classic pairing to distinguish.",
    rationales: [
      "Identity Center targets workforce/employee access, not millions of app end users.",
      "",
      "Directory Service integrates corporate directories, not consumer app sign-up flows.",
      "WorkSpaces delivers virtual desktops."
    ],
    services: ["Amazon Cognito"],
    tags: ["cognito", "identity"]
  },
  {
    id: "2.4-018",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "An object was deleted from a critical S3 bucket last night. Which service answers \"which identity, from where, at what time\"?",
    options: [
      "AWS Config, showing the bucket's current configuration",
      "Amazon Route 53",
      "Amazon Macie",
      "AWS CloudTrail, which recorded the DeleteObject API call with actor and timestamp"
    ],
    answer: [3],
    explanation: "The question is about an action - an API call - so the answer is the activity log: CloudTrail. Config could show when the bucket's configuration changed, but identity, source, and timestamp of the data-plane deletion come from CloudTrail.",
    rationales: [
      "Current configuration does not identify the actor of a past data deletion.",
      "Route 53 resolves domain names.",
      "Macie inspects object contents for sensitive data.",
      ""
    ],
    services: ["AWS CloudTrail"],
    tags: ["cloudtrail", "forensics"]
  },
  {
    id: "2.4-019",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "A compliance rule requires that any change to security group rules triggers an alert and records the configuration before and after. Which service provides this?",
    options: [
      "AWS Config, watching resource configurations and evaluating them against rules",
      "Amazon Polly",
      "Amazon Redshift",
      "AWS Amplify"
    ],
    answer: [0],
    explanation: "Security groups are resources with configurations, so Config is the watcher: it records each version and can trigger evaluation and notifications when rules drift from the required state. Event-driven alerting is commonly layered on top of Config's stream.",
    rationales: [
      "",
      "Polly is text-to-speech.",
      "Redshift is a data warehouse.",
      "Amplify builds and hosts frontend apps."
    ],
    services: ["AWS Config"],
    tags: ["config", "change tracking"]
  },
  {
    id: "2.4-020",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "easy",
    stem: "Which service should be attached to a CloudFront distribution to block requests matching known SQL injection patterns?",
    options: [
      "AWS WAF",
      "AWS Backup",
      "Amazon Inspector",
      "AWS Trusted Advisor"
    ],
    answer: [0],
    explanation: "WAF is the web request filter: its managed rule groups include SQL injection detection, and it attaches directly to CloudFront, ALB, and API Gateway. Scanning, backup, and advisory services do not sit in the request path.",
    rationales: [
      "",
      "Backup protects data, not requests.",
      "Inspector scans for vulnerabilities after deployment.",
      "Trusted Advisor produces recommendations, not request filtering."
    ],
    services: ["AWS WAF", "Amazon CloudFront"],
    tags: ["waf", "cloudfront"]
  },
  {
    id: "2.4-021",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "hard",
    stem: "A platform team operates dozens of AWS accounts under one organization and wants a single security posture view with standardized compliance checks across all of them. Which approach fits?",
    options: [
      "Log in to each account weekly and review settings by hand",
      "Ask each account's users to email screenshots of their dashboards",
      "Enable AWS Security Hub centrally, aggregating findings and compliance status across the organization's accounts",
      "Create one shared IAM user for all accounts"
    ],
    answer: [2],
    explanation: "Security Hub supports organization-wide aggregation: findings and standards compliance roll up from member accounts to an administrator account for one posture view. Manual reviews and shared credentials do not scale and destroy accountability.",
    rationales: [
      "Manual weekly reviews are stale on arrival and do not scale to dozens of accounts.",
      "Screenshots are not security telemetry.",
      "",
      "A shared user collapses accountability and cannot even span accounts cleanly."
    ],
    services: ["AWS Security Hub"],
    tags: ["security hub", "multi-account"]
  },
  {
    id: "2.4-022",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "What is true about AWS Shield Standard?",
    options: [
      "It must be purchased per Region before use",
      "It is available only to Enterprise Support customers",
      "It only protects workloads running in Local Zones",
      "It is automatically enabled for all AWS customers at no extra cost, protecting against common DDoS attacks"
    ],
    answer: [3],
    explanation: "Shield Standard is always-on and free: every AWS customer gets automatic protection against the most common network and transport layer DDoS techniques. Shield Advanced is the optional paid tier with additional protections and support.",
    rationales: [
      "No purchase is needed - Standard is default-on.",
      "Support plans are unrelated to Shield Standard's availability.",
      "It protects AWS-fronted workloads generally, not only Local Zones.",
      ""
    ],
    services: ["AWS Shield"],
    tags: ["shield", "ddos"]
  },
  {
    id: "2.4-023",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "A security team notices compute instances behaving as if they are running cryptocurrency miners - abnormal network and API patterns. Which service detects this behavior without installing agents?",
    options: [
      "Amazon GuardDuty",
      "Amazon RDS",
      "AWS Backup",
      "Amazon QuickSight"
    ],
    answer: [0],
    explanation: "Crypto-mining detection is a flagship GuardDuty finding type: it spots the telltale API and network behavior from its log analysis, with no agents to install or manage on the instances.",
    rationales: [
      "",
      "RDS runs databases; it does not perform behavioral threat detection.",
      "Backup orchestrates backup jobs.",
      "QuickSight renders dashboards."
    ],
    services: ["Amazon GuardDuty"],
    tags: ["guardduty", "threat detection"]
  },
  {
    id: "2.4-024",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "Which list correctly names the Trusted Advisor recommendation categories?",
    options: [
      "Compute, storage, database, networking, security",
      "Cost optimization, performance, security, fault tolerance, service limits",
      "Training, certification, documentation, forums, blogs",
      "Plan, migrate, operate, optimize, retire"
    ],
    answer: [1],
    explanation: "The five Trusted Advisor categories are memorization-grade exam material: cost optimization, performance, security, fault tolerance, and service limits (quotas). The other lists are service families, learning resources, and lifecycle phases.",
    rationales: [
      "That is a list of service families, not Trusted Advisor categories.",
      "",
      "That is a list of learning resources.",
      "That resembles a cloud adoption lifecycle, not advisor categories."
    ],
    services: ["AWS Trusted Advisor"],
    tags: ["trusted advisor", "categories"]
  },
  {
    id: "2.4-025",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "Beyond tooling, which resource can customers use to get help with security incidents and guidance, scaling with their support plan?",
    options: [
      "The weather service in each Region",
      "A public mailing list of all AWS customers",
      "AWS Support - with plan-dependent response times and channels (up to 24/7 engineering contact)",
      "Amazon Brantis"
    ],
    answer: [2],
    explanation: "AWS Support is the human channel for security help: higher plans add 24/7 access to cloud support engineers and faster response commitments for production-impacting events - including security incidents. Support tiers were detailed in tasks 3.8 and 4.3.",
    rationales: [
      "There is no such thing as a weather service in Regions.",
      "Customer-wide mailing lists do not exist and would leak everyone's incidents.",
      "",
      "There is no service by that name - the correct answer is the support organization itself."
    ],
    services: ["AWS Support"],
    tags: ["support", "security"]
  },
  {
    id: "2.4-026",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "What kind of output does Amazon Inspector produce?",
    options: [
      "Business intelligence dashboards for executives",
      "DNS resolution statistics",
      "Contact center transcripts",
      "Prioritized findings of software vulnerabilities and network exposure on scanned compute resources"
    ],
    answer: [3],
    explanation: "Inspector's output is actionable findings: which CVEs affect which instances or images, plus unintended reachability, ranked by severity. Finding-prioritization is what distinguishes a vulnerability scanner from general monitoring.",
    rationales: [
      "Dashboards for executives are QuickSight's domain.",
      "DNS statistics are not vulnerability findings.",
      "Transcripts belong to contact centers.",
      ""
    ],
    services: ["Amazon Inspector"],
    tags: ["inspector", "findings"]
  },
  {
    id: "2.4-027",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "hard",
    stem: "Which trio correctly matches each service to its detection role?",
    options: [
      "CloudTrail - API activity history; Config - configuration state and compliance; GuardDuty - behavioral threat detection",
      "CloudTrail - threat detection; GuardDuty - configuration compliance; Config - API history",
      "Config - DNS logging; CloudTrail - data discovery; GuardDuty - certificate management",
      "GuardDuty - CI/CD orchestration; Config - data warehousing; CloudTrail - email sending"
    ],
    answer: [0],
    explanation: "Three distinct detection layers: activity (CloudTrail), state (Config), and behavior (GuardDuty). The wrong options shuffle the roles across services - the standard exam mechanic for this trio.",
    rationales: [
      "",
      "Roles are shuffled: CloudTrail records history, Config evaluates compliance, GuardDuty detects threats.",
      "None of these mappings is correct for any of the three services.",
      "These services belong to entirely different categories."
    ],
    services: ["AWS CloudTrail", "AWS Config", "Amazon GuardDuty"],
    tags: ["detection", "comparison"]
  },
  {
    id: "2.4-028",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "A forensics team needs records of the IP-level traffic flowing to and from instances in a VPC for an investigation. Which capability provides this?",
    options: [
      "Amazon Connect call recordings",
      "VPC Flow Logs, capturing metadata about IP traffic going to and from network interfaces",
      "AWS Organizations audit trail",
      "Amazon Polly speech marks"
    ],
    answer: [1],
    explanation: "VPC Flow Logs record IP traffic metadata - source, destination, ports, accept/reject - for interfaces, subnets, or the whole VPC, feeding analysis in CloudWatch or S3. They show that traffic happened (and whether it was allowed), not packet contents.",
    rationales: [
      "Call recordings are Connect's contact-center feature.",
      "",
      "Organizations has no traffic logging role.",
      "Polly speech marks are text-to-speech timing data."
    ],
    services: ["Amazon VPC"],
    tags: ["flow logs", "networking", "forensics"]
  },
  {
    id: "2.4-029",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "Which service centralizes security findings from GuardDuty, Inspector, Macie, and partner tools into one format and place?",
    options: [
      "AWS Security Hub",
      "Amazon EventBridge",
      "Amazon EBS",
      "AWS App Runner"
    ],
    answer: [0],
    explanation: "Security Hub ingests findings from the security services into a standard format (ASFF), deduplicates and prioritizes them, and adds its own compliance checks. EventBridge routes events but is not the security posture aggregator.",
    rationales: [
      "",
      "EventBridge is a general event-routing bus, not a security findings aggregator.",
      "EBS provides block storage volumes.",
      "App Runner runs web applications."
    ],
    services: ["AWS Security Hub"],
    tags: ["security hub"]
  },
  {
    id: "2.4-030",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "easy",
    stem: "A team wants every EBS volume it creates to be encrypted with a managed key by default. Which service provides the keys?",
    options: [
      "Amazon QuickSight",
      "AWS Organizations",
      "AWS CodeArtifact",
      "AWS KMS"
    ],
    answer: [3],
    explanation: "KMS is the key provider behind EBS (and S3, RDS, DynamoDB...) encryption: the volume's data is encrypted with a KMS key, whose policy controls who may use it. Setting the default is an account/Region-level encryption setting.",
    rationales: [
      "QuickSight is business intelligence.",
      "Organizations manages accounts and guardrails.",
      "CodeArtifact is a package repository.",
      ""
    ],
    services: ["AWS KMS", "Amazon EBS"],
    tags: ["kms", "ebs", "encryption"]
  },
  {
    id: "2.4-031",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "To which resources can an AWS WAF web ACL be attached?",
    options: [
      "DynamoDB tables, EBS volumes, and S3 buckets",
      "CloudFront distributions, Application Load Balancers, and API Gateway APIs",
      "IAM users, groups, and roles",
      "RDS instances, Redshift clusters, and Neptune graphs"
    ],
    answer: [1],
    explanation: "WAF protects HTTP endpoints: CloudFront, ALB, and API Gateway are the classic attachment points - the places web requests enter. Databases, storage, and identities are not HTTP request paths.",
    rationales: [
      "Those are data resources without HTTP front doors.",
      "",
      "IAM identities are not web endpoints.",
      "Those are database systems, not request entry points."
    ],
    services: ["AWS WAF"],
    tags: ["waf", "attachment points"]
  },
  {
    id: "2.4-032",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "What is the difference between Amazon Macie and Amazon Inspector?",
    options: [
      "Macie scans instances for CVEs; Inspector finds PII in S3",
      "There is no difference; both scan S3 for sensitive data",
      "Macie discovers sensitive data in S3; Inspector scans compute and images for software vulnerabilities",
      "Inspector guards against DDoS; Macie manages DNS"
    ],
    answer: [2],
    explanation: "They scan different objects: Macie's target is data in S3 (PII, credentials, sensitive files), Inspector's target is compute (EC2, container images) for known vulnerabilities and exposure. Both produce findings; their subjects do not overlap.",
    rationales: [
      "Exactly reversed.",
      "Distinct services with distinct subjects - data versus compute.",
      "",
      "DDoS is Shield's domain and DNS is Route 53's."
    ],
    services: ["Amazon Macie", "Amazon Inspector"],
    tags: ["macie", "inspector", "comparison"]
  },
  {
    id: "2.4-033",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "hard",
    stem: "An auditor asks for proof that no security group was modified out of policy during last quarter. Which combination provides the evidence?",
    options: [
      "Amazon QuickSight dashboards of sales data",
      "A verbal assurance from the operations team",
      "AWS Config's configuration history of the security groups plus CloudTrail records of the API calls that changed them",
      "The S3 bucket's storage class distribution"
    ],
    answer: [2],
    explanation: "The evidence pairs the two recorders: Config holds the configuration timeline (what the rules were and when they changed), CloudTrail holds the activity log (who made each change and from where). Together they prove or disprove the compliance claim.",
    rationales: [
      "Sales dashboards say nothing about security group history.",
      "Verbal assurances are not audit evidence.",
      "",
      "Storage class distribution is a storage-cost property, unrelated to change history."
    ],
    services: ["AWS Config", "AWS CloudTrail"],
    tags: ["config", "cloudtrail", "auditing"]
  },
  {
    id: "2.4-034",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "Which benefits does AWS Shield Advanced add over Shield Standard?",
    options: [
      "It removes the need for IAM policies on protected resources",
      "It provides free TLS certificates for websites",
      "It stores database passwords with automatic rotation",
      "Cost protection against scaling during attacks, detection of more sophisticated events, and 24/7 access to the DDoS Response Team"
    ],
    answer: [3],
    explanation: "Shield Advanced is the paid tier for serious DDoS exposure: expanded detection, expense reimbursement protection (Shield Responses/Savings when scaling under attack), and direct 24/7 access to the Shield Response Team. Identity, certificates, and secrets are other services' jobs.",
    rationales: [
      "IAM policies remain mandatory regardless of DDoS protection.",
      "TLS certificates come from ACM.",
      "Secrets storage and rotation is Secrets Manager.",
      ""
    ],
    services: ["AWS Shield"],
    tags: ["shield advanced"]
  },
  {
    id: "2.4-035",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "medium",
    stem: "Which data sources does Amazon GuardDuty analyze to produce its findings?",
    options: [
      "CloudTrail management and data events, VPC Flow Logs, and DNS query logs",
      "Only the customer's spreadsheets and tickets",
      "QuickSight dashboard renderings",
      "S3 storage class transitions only"
    ],
    answer: [0],
    explanation: "GuardDuty's three primary feeds are CloudTrail events (what API calls happened), VPC Flow Logs (network traffic), and DNS logs (lookups - including mining-pool domains). ML and threat intelligence run over these to raise findings, agentlessly.",
    rationales: [
      "",
      "GuardDuty analyzes AWS telemetry, not business documents.",
      "Dashboards are not a security telemetry feed.",
      "Storage transitions carry no network or API behavior signal."
    ],
    services: ["Amazon GuardDuty"],
    tags: ["guardduty", "data sources"]
  },
  {
    id: "2.4-036",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "easy",
    stem: "Which service continuously checks an account against best practices and displays a score with prioritized recommendations?",
    options: [
      "AWS Trusted Advisor",
      "Amazon Lex",
      "Amazon Rekognition",
      "AWS AppStream 2.0"
    ],
    answer: [0],
    explanation: "Trusted Advisor's entire design is continuous best-practice checking with a prioritized action list - spanning cost, performance, security, fault tolerance, and service limits. The distractors are AI and end-user computing services.",
    rationales: [
      "",
      "Lex builds chatbots.",
      "Rekognition analyzes images and video.",
      "AppStream 2.0 streams applications to users."
    ],
    services: ["AWS Trusted Advisor"],
    tags: ["trusted advisor"]
  },
  {
    id: "2.4-037",
    domain: 2,
    task: "2.4",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO services provide protection against active attacks on AWS workloads? (Select TWO.)",
    options: [
      "Amazon QuickSight",
      "AWS Shield",
      "AWS Glue",
      "Amazon GuardDuty",
      "Amazon EFS"
    ],
    answer: [1, 3],
    explanation: "Shield actively absorbs DDoS attacks and GuardDuty detects hostile behavior in the account - both are attack-facing security services. QuickSight, Glue, and EFS are business intelligence, data integration, and file storage with no attack-protection role.",
    rationales: [
      "QuickSight builds dashboards.",
      "",
      "Glue integrates and catalogs data.",
      "",
      "EFS is shared file storage."
    ],
    services: ["AWS Shield", "Amazon GuardDuty"],
    tags: ["threat protection"]
  },
  {
    id: "2.4-038",
    domain: 2,
    task: "2.4",
    type: "single",
    difficulty: "hard",
    stem: "A startup wants a sensible security baseline on its new account: an audit trail, configuration compliance checks, threat detection, web protection at the edge, encrypted storage, and best-practice recommendations. Which service set covers all six needs?",
    options: [
      "Connect, QuickSight, Glue, EFS, Polly, Translate",
      "Elastic Beanstalk, Lightsail, AppStream 2.0, WorkSpaces, Amplify, IoT Core",
      "CloudTrail, AWS Config, GuardDuty, WAF (with Shield), KMS-enabled storage, and Trusted Advisor",
      "Redshift, EMR, Athena, Kinesis, Glue, QuickSight"
    ],
    answer: [2],
    explanation: "One service per need: CloudTrail (audit trail), Config (configuration compliance), GuardDuty (threat detection), WAF plus Shield at the edge (web protection), KMS (encryption), Trusted Advisor (recommendations). The other sets are business apps, end-user compute, and analytics - none of them security tools.",
    rationales: [
      "That set is business applications and AI services - no audit, no threat detection, no web firewall.",
      "That set is app platforms and end-user computing - nothing in it provides security telemetry.",
      "",
      "That is the analytics family from task 3.7."
    ],
    services: ["AWS CloudTrail", "AWS Config", "Amazon GuardDuty", "AWS WAF", "AWS KMS", "AWS Trusted Advisor"],
    tags: ["security baseline", "capstone"]
  }
);
