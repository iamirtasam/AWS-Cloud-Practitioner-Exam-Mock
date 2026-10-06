window.QBANK = window.QBANK || [];
window.QBANK.push(
  {
    id: "2.2-001",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "easy",
    stem: "What is the difference between encryption at rest and encryption in transit?",
    options: [
      "At rest uses longer keys; in transit uses shorter keys",
      "They are two names for the same mechanism",
      "At rest applies only to databases; in transit applies only to files",
      "At rest protects stored data on disk and in storage services; in transit protects data moving across networks"
    ],
    answer: [3],
    explanation: "The two states of data: at rest is data sitting still - on disks, in buckets, in databases - protected by encryption of the storage layer; in transit is data on the move - between users and services, or between services - protected by transport protocols such as TLS. Questions usually test whether you can classify a scenario into one of the two states.",
    rationales: [
      "Key length is not the distinguishing factor - the data's state is.",
      "They protect different states of data and use different mechanisms.",
      "Both apply across every service type; the state of the data is the divider.",
      ""
    ],
    services: ["AWS KMS"],
    tags: ["encryption", "at rest", "in transit"]
  },
  {
    id: "2.2-002",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "easy",
    stem: "Users connect to a web application over HTTPS. Which property of their data does this protect?",
    options: [
      "Data at rest on the web servers",
      "Data in backups",
      "Data stored in the database",
      "Data in transit between the users and the application"
    ],
    answer: [3],
    explanation: "HTTPS is HTTP wrapped in TLS encryption, protecting the data as it travels across the network - the in-transit state. What happens to the data once it is stored (on servers, in backups, in databases) is governed separately by at-rest controls.",
    rationales: [
      "Storage-level protection of server disks is an at-rest control, separate from TLS.",
      "Backup encryption is an at-rest control applied to backup storage.",
      "Database encryption at rest is configured independently of the site's HTTPS.",
      ""
    ],
    services: [],
    tags: ["encryption", "in transit", "tls"]
  },
  {
    id: "2.2-003",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "Which AWS service is the central place to create and manage the encryption keys used by other AWS services?",
    options: [
      "AWS Artifact",
      "AWS Key Management Service (KMS)",
      "AWS Organizations",
      "Amazon Inspector"
    ],
    answer: [1],
    explanation: "AWS KMS is the managed key service: create, store, and control cryptographic keys (KMS keys), with direct integration across S3, EBS, RDS, DynamoDB, and more. When a question asks who manages encryption keys or where keys live, KMS is the answer.",
    rationales: [
      "Artifact distributes compliance reports, not keys.",
      "",
      "Organizations centralizes accounts and policies, not cryptography.",
      "Inspector scans for vulnerabilities; it does not manage keys."
    ],
    services: ["AWS KMS"],
    tags: ["kms", "encryption", "keys"]
  },
  {
    id: "2.2-004",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "Which of the following is an example of protecting data at rest?",
    options: [
      "Enabling encryption on an EBS volume and on the S3 buckets that store documents",
      "Requiring all API clients to use TLS",
      "Forcing browsers to connect over HTTPS",
      "Using SSH instead of Telnet to reach a server"
    ],
    answer: [0],
    explanation: "Encrypting stored data - a volume's contents, objects in a bucket - is at-rest protection. Every other option encrypts data while it moves: TLS for APIs and HTTPS for browsers, SSH for a terminal session. Classify by whether the data is moving or sitting still.",
    rationales: [
      "",
      "TLS protects data on the move between client and API.",
      "HTTPS is transport-layer protection - in transit.",
      "SSH encrypts a network session - in transit."
    ],
    services: ["Amazon EBS", "Amazon S3"],
    tags: ["encryption", "at rest"]
  },
  {
    id: "2.2-005",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "A payments company must comply with the standard governing card payment data. Which compliance framework applies?",
    options: [
      "ISO 27001",
      "NIST Cybersecurity Framework",
      "GDPR",
      "PCI DSS"
    ],
    answer: [3],
    explanation: "PCI DSS (Payment Card Industry Data Security Standard) is the framework for handling cardholder data - the payments tell. ISO 27001 is a general information security standard, NIST is US-origin security guidance, and GDPR is European privacy law; none of them is card-specific.",
    rationales: [
      "ISO 27001 is a broad information-security management standard, not card-specific.",
      "NIST provides security frameworks widely used in the US, not card-specific.",
      "GDPR regulates personal data privacy in the EU, not payment cards.",
      ""
    ],
    services: [],
    tags: ["compliance", "pci dss"]
  },
  {
    id: "2.2-006",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "A healthcare application stores patient records and must comply with US health-data regulations. Which framework is its compliance work most likely tied to?",
    options: [
      "HIPAA",
      "FedRAMP",
      "SOC 2",
      "CIS Benchmarks"
    ],
    answer: [0],
    explanation: "HIPAA governs protected health information in the US - patient records are its signature. FedRAMP covers US federal cloud systems, SOC 2 is an audit report on service organizations' controls, and CIS Benchmarks are configuration hardening guides.",
    rationales: [
      "",
      "FedRAMP is for US federal agencies' cloud services, not healthcare specifically.",
      "SOC 2 is an attestation report about an organization's controls, not a health-data law.",
      "CIS Benchmarks are hardening checklists for systems configuration."
    ],
    services: [],
    tags: ["compliance", "hipaa"]
  },
  {
    id: "2.2-007",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "easy",
    stem: "What is AWS Artifact?",
    options: [
      "A vulnerability scanner for customer applications",
      "The AWS key management service",
      "A portal providing access to AWS compliance reports and agreements on demand",
      "A tool that migrates on-premises servers to AWS"
    ],
    answer: [2],
    explanation: "AWS Artifact is the self-service compliance portal: download AWS's audit reports (SOC, PCI, ISO) and sign agreements. It exists so customers can answer their own auditors about the AWS infrastructure layer without contacting support.",
    rationales: [
      "Scanning is Inspector's job; Artifact holds documents, not scan results.",
      "Key management is KMS.",
      "",
      "Migration tooling is unrelated; Artifact is a document portal."
    ],
    services: ["AWS Artifact"],
    tags: ["artifact", "compliance"]
  },
  {
    id: "2.2-008",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "A customer's auditor requests proof that AWS's infrastructure is audited against security standards. Where should the customer obtain that evidence?",
    options: [
      "AWS Artifact, downloading the relevant audit reports and certifications",
      "AWS Config, exporting the configuration of the customer's resources",
      "By scheduling an on-site visit to an AWS data center",
      "Amazon GuardDuty, which produces audit certifications"
    ],
    answer: [0],
    explanation: "AWS's own third-party audit reports are published through Artifact - that is its purpose. Config reports on the customer's resources (not AWS's infrastructure audits), data centers do not admit customer auditors, and GuardDuty is a threat detection service.",
    rationales: [
      "",
      "Config evaluates the customer's own resource configurations, not AWS's infrastructure certifications.",
      "On-site customer inspections of AWS facilities are not part of the model.",
      "GuardDuty detects malicious activity; it does not certify AWS infrastructure."
    ],
    services: ["AWS Artifact"],
    tags: ["artifact", "compliance", "audits"]
  },
  {
    id: "2.2-009",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "What does the principle of least privilege require?",
    options: [
      "Granting every user administrator access so they are never blocked",
      "Using the fewest possible AWS Regions to reduce the attack surface",
      "Encrypting only the most sensitive data",
      "Granting each identity only the permissions it needs to perform its task - nothing more"
    ],
    answer: [3],
    explanation: "Least privilege means minimal permissions per identity, scoped to the task: no standing admin rights, no shared super-users. It is the single most-cited access principle on the exam and the baseline an IAM design is judged against.",
    rationales: [
      "Blanket admin access is the opposite of least privilege and a prime audit finding.",
      "Region count is a latency/compliance decision, not the least-privilege principle.",
      "Encryption scope is a data protection decision, separate from permissions scope.",
      ""
    ],
    services: ["AWS IAM"],
    tags: ["least privilege", "access"]
  },
  {
    id: "2.2-010",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "In security governance, what is the practical difference between a policy and a procedure?",
    options: [
      "Policies are technical runbooks; procedures are executive intent",
      "There is no difference; the terms are interchangeable",
      "A policy states the organization's required intentions and rules; a procedure gives the step-by-step way those rules are carried out",
      "Procedures apply to AWS resources; policies apply only to people"
    ],
    answer: [2],
    explanation: "Policies are the 'what and why' - mandatory statements of intent (all data must be encrypted). Procedures are the 'how' - the concrete steps that implement the policy. Standards specify the required specifics, and guidelines offer flexible recommendations.",
    rationales: [
      "Exactly reversed: policy is intent, procedure is the detailed steps.",
      "They are distinct layers of governance documentation.",
      "",
      "Both apply across the organization - the distinction is abstraction level, not target."
    ],
    services: [],
    tags: ["governance", "policy", "procedure"]
  },
  {
    id: "2.2-011",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "A company document states: \"All customer data must be encrypted, both at rest and in transit.\" In governance terms, this sentence is best classified as a:",
    options: [
      "Policy - a mandatory statement of organizational intent",
      "Procedure - the steps engineers follow",
      "Guideline - a flexible suggestion",
      "Baseline scan result"
    ],
    answer: [0],
    explanation: "A mandatory, tool-agnostic statement of what must be true is a policy. The procedure would be the specific steps (enable KMS encryption on X, enforce TLS on Y); a guideline would be advisory, not mandatory.",
    rationales: [
      "",
      "No concrete steps are given - this is intent, not a runbook.",
      "The phrasing 'must be' makes it mandatory, which excludes a guideline.",
      "This is authored governance text, not a scan output."
    ],
    services: [],
    tags: ["governance", "policy"]
  },
  {
    id: "2.2-012",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "hard",
    stem: "A security architect stacks multiple controls: IAM permissions, security groups, encryption, network ACLs, and auditing - so that a failure in any one layer does not expose the system. Which concept is this?",
    options: [
      "Single sign-on",
      "Defense in depth",
      "Data sovereignty",
      "Infrastructure as code"
    ],
    answer: [1],
    explanation: "Defense in depth layers independent controls - identity, network, encryption, detection - so no single failure is fatal. The exam presents the layered-control story and expects this name; the distractors are unrelated concepts.",
    rationales: [
      "Single sign-on is about user authentication convenience, not layered controls.",
      "",
      "Data sovereignty concerns where data legally must live.",
      "IaC is about reproducible provisioning, not layered security."
    ],
    services: [],
    tags: ["defense in depth", "concepts"]
  },
  {
    id: "2.2-013",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "What does multi-factor authentication (MFA) add to password-based sign-in?",
    options: [
      "It removes the need to ever rotate passwords",
      "It shares authentication across multiple accounts at once",
      "It guarantees the user's device is malware-free",
      "It requires a second proof of identity (something you have or are) in addition to the password (something you know)"
    ],
    answer: [3],
    explanation: "MFA combines factors: something you know (password) plus something you have (a hardware token, authenticator app code) or are (biometric). A stolen password alone then is not enough to break in - which is why MFA on privileged users, especially root, is exam-critical advice.",
    rationales: [
      "Password rotation practice is separate; MFA does not eliminate it.",
      "MFA strengthens a single identity's sign-in; it does not link accounts.",
      "MFA proves identity, not device health.",
      ""
    ],
    services: [],
    tags: ["mfa", "authentication"]
  },
  {
    id: "2.2-014",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "An administrator wants all IAM users to be forced to choose long, complex passwords and change them periodically. Which capability provides this?",
    options: [
      "AWS Shield's password protection",
      "Amazon Inspector's password rules",
      "An IAM password policy set for the account",
      "AWS Artifact's security standards"
    ],
    answer: [2],
    explanation: "The IAM password policy is the account-level control for password length, complexity, reuse, and rotation. It is basic customer-side account hygiene - one of the standard actions listed in the exam guide's security hygiene examples.",
    rationales: [
      "Shield mitigates DDoS attacks; it has nothing to do with passwords.",
      "Inspector scans for software vulnerabilities, not password settings.",
      "",
      "Artifact distributes compliance documents; it sets no account policies."
    ],
    services: ["AWS IAM"],
    tags: ["iam", "password policy", "hygiene"]
  },
  {
    id: "2.2-015",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "easy",
    stem: "What does data sovereignty mean?",
    options: [
      "Data is subject to the laws and governance of the country where it is physically stored",
      "Data must always be stored in the United States",
      "Data automatically becomes the property of the cloud provider",
      "Data cannot leave a company's own data center under any circumstances"
    ],
    answer: [0],
    explanation: "Sovereignty ties data to the jurisdiction of its storage location: store in Germany, German and EU law applies. This is why Region selection (task 3.2) is a compliance decision - and why some organizations must keep data in-country regardless of latency or cost.",
    rationales: [
      "",
      "No rule mandates the US; the governing jurisdiction is where the data resides.",
      "Customers retain ownership of their data on AWS.",
      "Sovereignty constrains location by law; it does not forbid cloud storage."
    ],
    services: [],
    tags: ["data sovereignty", "compliance"]
  },
  {
    id: "2.2-016",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "A European regulation requires that customer records remain within the EU. How does a company meet this while using AWS?",
    options: [
      "Encrypt all data, which legally relocates it to any Region",
      "Deploy the workloads storing those records in European AWS Regions",
      "Store the data in the nearest Region for performance and rely on AWS's certifications",
      "Use a higher support plan, which includes data residency guarantees"
    ],
    answer: [1],
    explanation: "Residency is satisfied by physical placement: choose EU Regions so the data lives under EU jurisdiction. Encryption protects the data but does not change where it is stored, and support plans carry no residency guarantees.",
    rationales: [
      "Encryption secures content; it does not move or change the legal location of storage.",
      "",
      "Proximity and certifications do not override a legal residency requirement.",
      "Support plans affect response and guidance, never legal data location."
    ],
    services: [],
    tags: ["data sovereignty", "regions", "compliance"]
  },
  {
    id: "2.2-017",
    domain: 2,
    task: "2.2",
    type: "multi",
    difficulty: "medium",
    stem: "A company is adopting a multi-account structure on AWS. Which TWO benefits does AWS Organizations provide for governance? (Select TWO.)",
    options: [
      "Centralized management of multiple AWS accounts under one organization",
      "Consolidated billing across all accounts in the organization",
      "Automatic patching of guest operating systems in every account",
      "Replacing the need for IAM entirely",
      "Issuing free TLS certificates for all workloads"
    ],
    answer: [0, 1],
    explanation: "Organizations brings accounts under one roof for centralized governance - including service control policies that guardrail what accounts may do - and consolidates billing. It neither patches operating systems, replaces IAM, nor issues certificates.",
    rationales: [
      "",
      "",
      "Guest OS patching remains a customer duty inside each account.",
      "IAM continues to govern identities within each account; Organizations sits above accounts.",
      "TLS certificates come from ACM, not Organizations."
    ],
    services: ["AWS Organizations"],
    tags: ["organizations", "governance", "multi-account"]
  },
  {
    id: "2.2-018",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "hard",
    stem: "In a multi-account setup, the security team wants to forbid every account in the organization from launching resources in expensive or non-compliant Regions, regardless of individual users' IAM permissions. Which capability does this?",
    options: [
      "An IAM password policy",
      "Amazon GuardDuty findings",
      "S3 bucket policies",
      "Service control policies (SCPs) applied through AWS Organizations"
    ],
    answer: [3],
    explanation: "SCPs are organization-level guardrails: attached to accounts or organizational units, they cap what any IAM permission inside those accounts can do - including banning Region use. IAM grants permissions; SCPs define the ceiling they cannot exceed.",
    rationales: [
      "A password policy governs credential rules, not resource or Region permissions.",
      "GuardDuty detects threats; it does not enforce preventive limits.",
      "Bucket policies scope to individual S3 buckets, not organization-wide account behavior.",
      ""
    ],
    services: ["AWS Organizations"],
    tags: ["scp", "organizations", "guardrails"]
  },
  {
    id: "2.2-019",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "Which statement best describes the zero trust approach to security?",
    options: [
      "Requests are trusted if they originate from inside the corporate network",
      "Only external traffic needs authentication; internal traffic is trusted",
      "Zero trust means no users are ever granted any permissions",
      "Every request is authenticated and authorized regardless of where it comes from - never trust, always verify"
    ],
    answer: [3],
    explanation: "Zero trust removes implicit trust based on network location: inside or outside, every request must prove identity and authorization. On AWS this translates to least-privilege IAM, authentication on every API call, and encryption everywhere.",
    rationales: [
      "Trusting internal traffic is the perimeter model zero trust explicitly rejects.",
      "Internal traffic receives the same verification as external under zero trust.",
      "Zero trust verifies everything; it does not mean granting nothing.",
      ""
    ],
    services: [],
    tags: ["zero trust", "concepts"]
  },
  {
    id: "2.2-020",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "How does AWS KMS protect the keys it manages?",
    options: [
      "Keys are exported to customers and stored on their laptops",
      "Keys are emailed to the account root user when created",
      "Keys never leave KMS unencrypted; use of a key requires a permission-checked API call, and key policies define who may use it",
      "Keys are stored in plain text alongside the data they encrypt"
    ],
    answer: [2],
    explanation: "KMS keys are generated and used inside the service: plaintext key material never leaves KMS, every use is an audited API call guarded by key policies and IAM, and usage is logged. That is the whole value of managed keys versus managing your own.",
    rationales: [
      "Exporting keys would defeat the purpose; KMS keys stay in the service.",
      "No key material is ever emailed or exported.",
      "",
      "Storing keys beside the data would provide no protection."
    ],
    services: ["AWS KMS"],
    tags: ["kms", "keys"]
  },
  {
    id: "2.2-021",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "easy",
    stem: "Which scenario describes encryption in transit?",
    options: [
      "Encrypting objects as they sit in an S3 bucket",
      "Encrypting a database's stored files",
      "Encrypting traffic between a microservice and its database using TLS",
      "Encrypting a backup archive on tape"
    ],
    answer: [2],
    explanation: "The microservice-database link is data on the move, so TLS there is in-transit protection. Objects in a bucket, database files, and backup archives are all sitting still - at-rest scenarios.",
    rationales: [
      "Objects at rest in a bucket are protected by at-rest encryption settings.",
      "Stored database files are at rest.",
      "",
      "A backup archive sitting on media is at rest."
    ],
    services: [],
    tags: ["encryption", "in transit"]
  },
  {
    id: "2.2-022",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "Which service provisions and manages the TLS certificates used to enable HTTPS on load balancers and CloudFront distributions?",
    options: [
      "AWS KMS",
      "AWS Artifact",
      "AWS Config",
      "AWS Certificate Manager (ACM)"
    ],
    answer: [3],
    explanation: "ACM issues, renews, and deploys TLS certificates - the certificates that make HTTPS possible - with automatic renewal for AWS-integrated resources. KMS manages encryption keys (not public TLS certificates), Artifact holds compliance documents, and Config tracks configuration.",
    rationales: [
      "KMS manages symmetric/asymmetric keys for encryption, not public TLS certificate lifecycle.",
      "Artifact distributes audit reports and agreements.",
      "Config records and evaluates resource configurations.",
      ""
    ],
    services: ["AWS Certificate Manager"],
    tags: ["acm", "tls", "in transit"]
  },
  {
    id: "2.2-023",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "Why is encrypting data at rest considered important even when the storage system already has strong access controls?",
    options: [
      "Encryption replaces the need for any access controls",
      "Access controls are optional on AWS services",
      "Encryption only matters for data leaving the company",
      "It protects the data if the underlying storage media is lost, stolen, or accessed through a control failure - a second, independent layer"
    ],
    answer: [3],
    explanation: "Defense in depth: access controls are one layer, encryption another. If a disk is decommissioned improperly, stolen, or reached through a permission mistake, encrypted data remains unreadable without the keys. Neither control substitutes for the other.",
    rationales: [
      "Encryption complements access control; it does not replace it.",
      "Access controls (IAM, bucket policies) are fundamental on AWS.",
      "At-rest encryption protects stored data regardless of where it travels.",
      ""
    ],
    services: [],
    tags: ["encryption", "defense in depth"]
  },
  {
    id: "2.2-024",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "hard",
    stem: "A retailer is PCI DSS compliant for its card-processing workload on AWS. What is true about its compliance scope?",
    options: [
      "AWS's PCI certification covers the customer's whole application end to end",
      "AWS's certified infrastructure supports the retailer's compliance, but the card-data flows, storage, and access controls the retailer configures remain the retailer's to validate",
      "PCI DSS does not apply to workloads running on cloud infrastructure",
      "The retailer must certify AWS's data centers as part of its PCI scope"
    ],
    answer: [1],
    explanation: "Compliance layering: AWS holds its own PCI DSS certification for the infrastructure (evidence via Artifact), which the retailer builds on. But everything touching cardholder data at the application layer - flows, segmentation, access, monitoring - is the retailer's scope to implement and prove.",
    rationales: [
      "AWS's certification stops at its infrastructure boundary; the application is the customer's scope.",
      "",
      "PCI DSS absolutely applies wherever cardholder data is processed, cloud or not.",
      "Retailers reference AWS's published artifacts rather than certifying AWS themselves."
    ],
    services: [],
    tags: ["compliance", "pci dss", "shared responsibility"]
  },
  {
    id: "2.2-025",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "What is ISO 27001?",
    options: [
      "An AWS-specific encryption algorithm",
      "A tool for scanning instances for vulnerabilities",
      "An international standard for information security management systems, against which organizations are certified",
      "A US government-only cloud authorization program"
    ],
    answer: [2],
    explanation: "ISO 27001 is the international standard for how an organization manages information security - and AWS holds certifications against it for its infrastructure. US-government cloud authorization is FedRAMP's territory, scanning is Inspector's, and encryption algorithms are mathematics, not standards bodies.",
    rationales: [
      "It is not an algorithm at all, and it predates and transcends AWS.",
      "Vulnerability scanning is a tool capability, not a management-system standard.",
      "",
      "US government cloud authorization is FedRAMP."
    ],
    services: [],
    tags: ["compliance", "iso"]
  },
  {
    id: "2.2-026",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "A US government agency evaluates cloud providers using a dedicated authorization program. Which one?",
    options: [
      "PCI DSS",
      "ISO 27001",
      "SOC 2",
      "FedRAMP"
    ],
    answer: [3],
    explanation: "FedRAMP (Federal Risk and Authorization Management Program) is the US government's standardization and authorization program for cloud services. PCI DSS covers payments, ISO 27001 is the international security-management standard, and SOC 2 is an audit report type.",
    rationales: [
      "PCI DSS governs payment card data.",
      "ISO 27001 is the international ISM standard, not a government authorization program.",
      "SOC 2 reports on a service organization's controls; it is not a government authorization.",
      ""
    ],
    services: [],
    tags: ["compliance", "fedramp"]
  },
  {
    id: "2.2-027",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "easy",
    stem: "In the context of security, what does governance mean?",
    options: [
      "The framework of policies, roles, and processes by which an organization directs and controls its security",
      "The physical locks on data center doors",
      "The encryption algorithms used for data",
      "The speed at which incident tickets are closed"
    ],
    answer: [0],
    explanation: "Security governance is the top-of-the-pyramid structure: who decides, which policies apply, how risk is accepted, how compliance is verified. Physical security and technical controls implement governance; ticket metrics measure operations.",
    rationales: [
      "",
      "Physical controls are one implementation layer, not governance itself.",
      "Algorithms are technical mechanisms beneath the governance layer.",
      "Ticket handling is an operational metric, not the definition of governance."
    ],
    services: [],
    tags: ["governance"]
  },
  {
    id: "2.2-028",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "A company requires that changes to production infrastructure go through review and approval before deployment. Which governance capability is this?",
    options: [
      "Change management",
      "Data classification",
      "Key rotation",
      "Multi-Region failover"
    ],
    answer: [0],
    explanation: "Change management is the controlled path for modifications - review, approval, traceability - preventing unreviewed changes from destabilizing or weakening production. On AWS it is often implemented through code review on IaC and pipeline approvals.",
    rationales: [
      "",
      "Classification labels data by sensitivity - a different governance activity.",
      "Key rotation is a cryptographic hygiene practice.",
      "Failover is an availability architecture pattern."
    ],
    services: [],
    tags: ["governance", "change management"]
  },
  {
    id: "2.2-029",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "Recording who made every API call in an AWS account, so activity can be reviewed after the fact, is an example of which type of control?",
    options: [
      "A detective control",
      "A preventive control",
      "A physical control",
      "A compensating pricing model"
    ],
    answer: [0],
    explanation: "Detective controls observe and record so misuse can be discovered and investigated - audit logging is the canonical example (CloudTrail does this on AWS). Preventive controls block the action before it happens; physical controls guard the material world.",
    rationales: [
      "",
      "Preventive controls stop actions proactively; logging records them for later review.",
      "This is a logical/technical control, not a physical one.",
      "Pricing has no control category in security taxonomy."
    ],
    services: ["AWS CloudTrail"],
    tags: ["detective controls", "logging", "concepts"]
  },
  {
    id: "2.2-030",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "A security group rule that blocks all database traffic except from the application tier is an example of which control type?",
    options: [
      "A preventive control - it stops undesired access before it happens",
      "A detective control - it reports access after the fact",
      "A corrective control - it restores service after failure",
      "An administrative control - it documents expected behavior"
    ],
    answer: [0],
    explanation: "The rule prevents unwanted connections at the moment they are attempted - preventive by definition. Detective controls (logs, alarms) watch, corrective controls repair, administrative controls are process documents.",
    rationales: [
      "",
      "Nothing is being observed for later review; the block happens up front.",
      "Corrective actions restore state after an incident, which a firewall rule does not do.",
      "The rule actively enforces behavior; it is not documentation."
    ],
    services: [],
    tags: ["preventive controls", "concepts"]
  },
  {
    id: "2.2-031",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "hard",
    stem: "A company plans to encrypt all EU customer data and replicate it to a US Region for resilience. Its legal team objects. What is the core legal issue?",
    options: [
      "US Regions are technically incapable of storing EU data",
      "Encryption keys cannot be used across Regions",
      "Replication costs more than the regulation allows",
      "Data residency laws may require EU customer data to remain within the EU jurisdiction - encryption does not change where the data physically resides"
    ],
    answer: [3],
    explanation: "Residency regulation constrains location, not readability: encrypted or not, data stored in the US is stored under US jurisdiction. Resilience must be achieved within the required jurisdiction (multi-AZ or another EU Region), not by replicating outside it.",
    rationales: [
      "US Regions can technically store any bytes; the objection is legal, not technical.",
      "Cross-Region key usage is solvable technically; it is not the legal blocker.",
      "Cost is a business concern; the objection raised is about law.",
      ""
    ],
    services: [],
    tags: ["data sovereignty", "replication", "compliance"]
  },
  {
    id: "2.2-032",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "A team wants S3 objects automatically encrypted with keys it controls, with usage tracked and permissions enforced by key policy. Which approach fits?",
    options: [
      "Client-side encryption with keys stored on a spreadsheet",
      "No encryption, relying on S3's obscurity",
      "Server-side encryption using an AWS KMS key, with a key policy defining who can use it",
      "Emailing files as password-protected attachments"
    ],
    answer: [2],
    explanation: "KMS-integrated server-side encryption gives exactly this: S3 encrypts on write and decrypts on authorized read, the key never leaves KMS unencrypted, key policy plus IAM control usage, and CloudTrail logs use. Homemade key handling lacks all of those guarantees.",
    rationales: [
      "Spreadsheet key storage has no permissions enforcement, no audit trail, and terrible key hygiene.",
      "Obscurity is not a control; the data needs encryption.",
      "",
      "Email attachment encryption is ad hoc, unauditable, and not a data-platform pattern."
    ],
    services: ["Amazon S3", "AWS KMS"],
    tags: ["kms", "s3", "encryption"]
  },
  {
    id: "2.2-033",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "easy",
    stem: "MFA combines which categories of authentication factors?",
    options: [
      "Something you know plus something you have (or are)",
      "Two passwords chosen by the user",
      "A username entered twice",
      "The same password on two different accounts"
    ],
    answer: [0],
    explanation: "Multi-factor means distinct factor categories: knowledge (password/PIN) combined with possession (token, phone code) or inherence (fingerprint). Two passwords are the same factor - knowledge - and provide no second dimension.",
    rationales: [
      "",
      "Two passwords are one factor used twice - not multi-factor.",
      "Repeating a username adds no verification at all.",
      "Reusing a password across accounts weakens security rather than adding a factor."
    ],
    services: [],
    tags: ["mfa", "authentication"]
  },
  {
    id: "2.2-034",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "Which set of actions represents good customer security hygiene on AWS?",
    options: [
      "Enabling MFA on privileged users, enforcing least privilege, keeping guest systems patched, and enabling audit logging",
      "Sharing the root account among administrators for convenience",
      "Granting all users full admin access to avoid permission errors",
      "Disabling logging to reduce storage costs"
    ],
    answer: [0],
    explanation: "These four - MFA on privileged identities, least privilege, patching what you operate, and audit logging - are the exam guide's core hygiene examples and the base of every secure account. The distractors are the classic anti-patterns.",
    rationales: [
      "",
      "Root sharing removes accountability and is one of the worst practices possible.",
      "Broad admin grants violate least privilege and multiply blast radius.",
      "Disabling logging blinds the account to exactly the activity that matters."
    ],
    services: ["AWS IAM", "AWS CloudTrail"],
    tags: ["hygiene", "best practices"]
  },
  {
    id: "2.2-035",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "How does a guideline differ from a standard in security governance?",
    options: [
      "A guideline is mandatory; a standard is optional",
      "They are identical documents with different names",
      "A standard is written by AWS; a guideline by the customer",
      "A guideline offers recommended, flexible guidance; a standard specifies mandatory, required specifics"
    ],
    answer: [3],
    explanation: "The governance hierarchy runs policy (mandatory intent) → standard (mandatory specifics, e.g. 'AES-256, TLS 1.2+') → procedure (mandatory steps) with guidelines as the advisory layer. Standards bind; guidelines suggest.",
    rationales: [
      "Backwards: standards are the mandatory layer; guidelines are advisory.",
      "They sit at different layers of the hierarchy with different force.",
      "All governance documents here are authored by the organization, not AWS.",
      ""
    ],
    services: [],
    tags: ["governance", "standards", "guidelines"]
  },
  {
    id: "2.2-036",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "A company separates production, development, and security-tooling workloads into separate AWS accounts. What is the security benefit of this multi-account strategy?",
    options: [
      "Accounts eliminate the need for encryption",
      "It provides isolation and independent limits per workload, so a mistake or compromise in one account does not automatically reach the others - with governance applied centrally via Organizations",
      "It makes all resources automatically public",
      "It removes the need for any IAM configuration in each account"
    ],
    answer: [1],
    explanation: "Account boundaries are the strongest isolation AWS offers: separate resources, permissions, and blast radius per workload, with Organizations layering central guardrails (SCPs) and consolidated management on top. IAM is still needed inside every account.",
    rationales: [
      "Encryption needs are unchanged by account structure.",
      "",
      "Account separation does not change resource publicity - that is configured per resource.",
      "Each account still requires its own identity and permission configuration."
    ],
    services: ["AWS Organizations"],
    tags: ["organizations", "multi-account", "isolation"]
  },
  {
    id: "2.2-037",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "hard",
    stem: "A team encrypts an RDS database with a customer-managed KMS key. Later, an intern attempts to restore a backup and is denied. Which explanation is correct?",
    options: [
      "KMS randomly denies requests to test security posture",
      "The restore failed because RDS backups cannot be encrypted",
      "RDS automatically grants all users key access; the denial indicates a platform fault",
      "Use of a KMS key is gated by the key's policy and IAM permissions - the intern's identity lacks permission to use the key, and the denial is enforced and logged"
    ],
    answer: [3],
    explanation: "Customer-managed keys put the customer in control of exactly this: key policies and IAM decide who may use the key, denied use is enforced at the KMS API, and every attempt is logged in CloudTrail. Granting the intern's role kms:Decrypt/UseKey permission (if appropriate) resolves it.",
    rationales: [
      "Denials are deterministic - driven by policy evaluation, never randomness.",
      "RDS backups fully support encryption with KMS keys.",
      "Nothing is auto-granted with customer-managed keys; enforcement working correctly is the opposite of a fault.",
      ""
    ],
    services: ["Amazon RDS", "AWS KMS"],
    tags: ["kms", "rds", "key policy"]
  },
  {
    id: "2.2-038",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "medium",
    stem: "A governance team wants continuous checks that production resources stay compliant with tagging and encryption rules, with violations flagged automatically. Which service provides this?",
    options: [
      "AWS Config, evaluating resource configurations against rules and flagging noncompliance",
      "AWS Artifact",
      "Amazon QuickSight",
      "AWS Application Migration Service"
    ],
    answer: [0],
    explanation: "AWS Config records resource configurations and evaluates them against rules - desired state expressed as code - so drift (untagged resources, unencrypted volumes) surfaces automatically. Artifact is documents, QuickSight is dashboards, Migration Service moves servers.",
    rationales: [
      "",
      "Artifact distributes AWS compliance documents, not customer resource checks.",
      "QuickSight visualizes business data; it does not evaluate configurations.",
      "Migration Service is for moving workloads to AWS."
    ],
    services: ["AWS Config"],
    tags: ["config", "governance", "compliance"]
  },
  {
    id: "2.2-039",
    domain: 2,
    task: "2.2",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO AWS services directly support encryption needs? (Select TWO.)",
    options: [
      "AWS Key Management Service (KMS)",
      "AWS Certificate Manager (ACM)",
      "AWS Organizations",
      "AWS Artifact",
      "Amazon Connect"
    ],
    answer: [0, 1],
    explanation: "KMS manages the encryption keys used for data at rest (and more), and ACM manages the TLS certificates that enable encryption in transit - together they cover both data states. Organizations governs accounts, Artifact distributes compliance documents, and Connect is a contact center.",
    rationales: [
      "",
      "",
      "Organizations provides account governance, not encryption.",
      "Artifact is a compliance document portal.",
      "Connect runs contact centers."
    ],
    services: ["AWS KMS", "AWS Certificate Manager"],
    tags: ["encryption", "kms", "acm"]
  },
  {
    id: "2.2-040",
    domain: 2,
    task: "2.2",
    type: "single",
    difficulty: "hard",
    stem: "A bank must encrypt customer data in transit and at rest, and prove to auditors that its AWS infrastructure layer is independently certified. Which combination satisfies all three needs?",
    options: [
      "Organizations SCPs, GuardDuty, and Lightsail",
      "Shared root credentials, RDS, and CloudWatch alarms",
      "Instance store volumes, plain HTTP, and a spreadsheet of compliance claims",
      "ACM certificates with TLS on endpoints, KMS encryption for stored data, and AWS Artifact for the infrastructure audit reports"
    ],
    answer: [3],
    explanation: "One service per need: ACM provides the TLS certificates for in-transit encryption, KMS keys encrypt the stored data, and Artifact delivers AWS's third-party audit reports for the infrastructure layer. The other options mix unrelated services or outright anti-patterns.",
    rationales: [
      "SCPs guardrail accounts, GuardDuty detects threats, Lightsail hosts simple sites - none addresses the three requirements.",
      "Shared root credentials are a severe anti-pattern, and nothing here provides certificates or audit artifacts.",
      "Plain HTTP leaves transit unencrypted, instance store is ephemeral, and spreadsheets are not evidence.",
      ""
    ],
    services: ["AWS Certificate Manager", "AWS KMS", "AWS Artifact"],
    tags: ["encryption", "compliance", "capstone"]
  }
);
