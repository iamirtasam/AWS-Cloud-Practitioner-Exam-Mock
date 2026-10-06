window.FLASHCARDS = window.FLASHCARDS || [];
window.FLASHCARDS.push(
  {
    id: "2.1-001",
    domain: 2,
    task: "2.1",
    front: "State the shared responsibility model's core sentence.",
    back: "AWS secures security OF the cloud (facilities, hardware, networking, hypervisor); the customer secures security IN the cloud (data, access decisions, configuration, guest OS).",
    tags: ["shared responsibility"]
  },
  {
    id: "2.1-002",
    domain: 2,
    task: "2.1",
    front: "Who patches: the hypervisor? The RDS engine? The EC2 guest OS?",
    back: "Hypervisor = AWS. RDS engine (and its hosts) = AWS. EC2 guest OS = customer, always, regardless of AMI source.",
    tags: ["patching", "shared responsibility"]
  },
  {
    id: "2.1-003",
    domain: 2,
    task: "2.1",
    front: "How does the customer's responsibility change from EC2 to RDS to Lambda?",
    back: "It shrinks: EC2 keeps OS patching and platform with the customer; RDS moves OS/engine to AWS (customer keeps data layer); serverless Lambda leaves only code, data, and access decisions.",
    tags: ["shared responsibility", "service types"]
  },
  {
    id: "2.1-004",
    domain: 2,
    task: "2.1",
    front: "Name the three shared controls.",
    back: "Patch management, configuration management, and security awareness/training - each side covers its own layer (AWS its infrastructure and staff; customer its OSes, apps, and people).",
    tags: ["shared controls"]
  },
  {
    id: "2.1-005",
    domain: 2,
    task: "2.1",
    front: "Who handles secure disposal of retired storage drives?",
    back: "AWS - documented, audited destruction procedures; customers never touch physical media at any point in its lifecycle.",
    tags: ["hardware lifecycle"]
  },
  {
    id: "2.1-006",
    domain: 2,
    task: "2.1",
    front: "An S3 bucket is publicly readable and an audit tool flags it. Who remediates?",
    back: "The customer - bucket permissions are customer configuration. Tooling can be AWS-provided; the configuration it inspects belongs to the customer.",
    tags: ["shared responsibility", "s3"]
  },
  {
    id: "2.1-007",
    domain: 2,
    task: "2.1",
    front: "How do AWS compliance certifications relate to a customer's compliance work?",
    back: "AWS's certifications cover its infrastructure; customers obtain the reports (AWS Artifact) to support their own audits. The customer's use of services - application, data handling, config - is the customer's compliance scope.",
    tags: ["compliance", "artifact"]
  },
  {
    id: "2.1-008",
    domain: 2,
    task: "2.1",
    front: "Root account duties under the model?",
    back: "Customer-side: enable MFA, never use for daily tasks, never share credentials, delete (or never create) root access keys.",
    tags: ["root user"]
  },
  {
    id: "2.1-009",
    domain: 2,
    task: "2.1",
    front: "Which service type leaves the customer with the FEWEST security responsibilities?",
    back: "The most managed/serverless one - Lambda, S3, DynamoDB. No OS or platform is visible; only code, data, and access decisions remain.",
    tags: ["serverless", "shared responsibility"]
  },
  {
    id: "2.2-001",
    domain: 2,
    task: "2.2",
    front: "Define data at rest vs data in transit, with the protecting mechanism for each.",
    back: "At rest = stored data (disks, buckets, databases, backups) protected by encryption, typically with AWS KMS keys. In transit = data moving across networks, protected by TLS with certificates from AWS Certificate Manager (ACM).",
    tags: ["encryption"]
  },
  {
    id: "2.2-002",
    domain: 2,
    task: "2.2",
    front: "What does AWS KMS do, and what never leaves it in plaintext?",
    back: "Creates, stores, and manages encryption keys used by AWS services. Key material never leaves KMS unencrypted; every use is a permission-checked, logged API call gated by key policy.",
    tags: ["kms", "keys"]
  },
  {
    id: "2.2-003",
    domain: 2,
    task: "2.2",
    front: "Which service provisions TLS certificates for HTTPS on load balancers and CloudFront?",
    back: "AWS Certificate Manager (ACM) - issues, renews, and deploys TLS certificates (in-transit protection).",
    tags: ["acm", "tls"]
  },
  {
    id: "2.2-004",
    domain: 2,
    task: "2.2",
    front: "Match the compliance framework: cards / US health / EU privacy / international ISM standard / US government cloud.",
    back: "PCI DSS / HIPAA / GDPR / ISO 27001 / FedRAMP.",
    tags: ["compliance", "frameworks"]
  },
  {
    id: "2.2-005",
    domain: 2,
    task: "2.2",
    front: "An auditor wants proof about AWS's own infrastructure compliance. Where do you get it?",
    back: "AWS Artifact - the self-service portal for AWS audit reports (SOC, PCI, ISO) and agreements.",
    tags: ["artifact", "compliance"]
  },
  {
    id: "2.2-006",
    domain: 2,
    task: "2.2",
    front: "Order the governance documents: guideline, policy, procedure, standard.",
    back: "Policy (mandatory intent) > standard (mandatory specifics) > procedure (mandatory steps); guideline = advisory, flexible.",
    tags: ["governance"]
  },
  {
    id: "2.2-007",
    domain: 2,
    task: "2.2",
    front: "Define least privilege, defense in depth, and zero trust.",
    back: "Least privilege: only the permissions a task needs. Defense in depth: independent stacked controls so one failure is not fatal. Zero trust: authenticate and authorize every request regardless of origin.",
    tags: ["concepts"]
  },
  {
    id: "2.2-008",
    domain: 2,
    task: "2.2",
    front: "Security group blocking a port vs CloudTrail logging an API call - which control type is each?",
    back: "Security group rule = preventive (blocks before it happens). CloudTrail = detective (records for later review).",
    tags: ["control types"]
  },
  {
    id: "2.2-009",
    domain: 2,
    task: "2.2",
    front: "What does MFA combine, and what does a stolen password alone no longer grant?",
    back: "MFA combines factor categories: something you know (password) plus something you have (token/app code) or are (biometric). With MFA, a stolen password alone no longer grants access.",
    tags: ["mfa"]
  },
  {
    id: "2.2-010",
    domain: 2,
    task: "2.2",
    front: "What are SCPs and what do they bound?",
    back: "Service control policies, applied through AWS Organizations - a ceiling on what ANY principal in an account can do, even with full IAM permissions (e.g., banning Regions).",
    tags: ["scp", "organizations"]
  },
  {
    id: "2.2-011",
    domain: 2,
    task: "2.2",
    front: "Why encrypt at rest when access controls already exist?",
    back: "Defense in depth - an independent layer that protects data if media is lost/stolen or a permission fails. Neither control substitutes for the other.",
    tags: ["encryption", "defense in depth"]
  },
  {
    id: "2.2-012",
    domain: 2,
    task: "2.2",
    front: "EU law requires data to stay in the EU. Does encrypting and copying it to a US Region satisfy the law?",
    back: "No - residency law constrains physical location, not readability. Keep the data in EU Regions (multi-AZ or a second EU Region for resilience).",
    tags: ["data sovereignty"]
  },
  {
    id: "2.3-001",
    domain: 2,
    task: "2.3",
    front: "IAM user vs group vs role - credential type and typical use of each?",
    back: "User: long-term password/access keys, individual humans or apps. Group: holds users, carries policies once for all members. Role: temporary credentials, assumable - for services, cross-account, and federation.",
    tags: ["iam", "identities"]
  },
  {
    id: "2.3-002",
    domain: 2,
    task: "2.3",
    front: "How should an EC2-hosted app access S3, and why not keys in code?",
    back: "Attach an IAM role to the instance - temporary auto-rotated credentials from metadata, nothing to embed, store, leak, or rotate. Keys in code are a standing anti-pattern.",
    tags: ["roles", "ec2", "s3"]
  },
  {
    id: "2.3-003",
    domain: 2,
    task: "2.3",
    front: "Within a role, trust policy vs permissions policy?",
    back: "Trust policy: WHO may assume the role. Permissions policy: WHAT they may do once assumed. Both must align.",
    tags: ["roles", "policies"]
  },
  {
    id: "2.3-004",
    domain: 2,
    task: "2.3",
    front: "State the three policy evaluation rules.",
    back: "1) Implicit deny by default (nothing allowed unless a policy allows it). 2) Explicit deny always wins over any allow. 3) Permissions from user + all groups add up (union).",
    tags: ["policy evaluation"]
  },
  {
    id: "2.3-005",
    domain: 2,
    task: "2.3",
    front: "Identity-based vs resource-based policy - and the canonical example of the latter?",
    back: "Identity-based attaches to users/groups/roles; resource-based attaches to the resource itself and can grant cross-account principals directly - the S3 bucket policy is the canonical example.",
    tags: ["policies", "s3"]
  },
  {
    id: "2.3-006",
    domain: 2,
    task: "2.3",
    front: "A user has S3FullAccess; a group policy explicitly denies s3:DeleteBucket. What can they do?",
    back: "All S3 actions EXCEPT DeleteBucket - allows add up, and the explicit deny carves out exactly what it names.",
    tags: ["policy evaluation", "explicit deny"]
  },
  {
    id: "2.3-007",
    domain: 2,
    task: "2.3",
    front: "What is IAM Identity Center (ex-AWS SSO) for?",
    back: "Centralized WORKFORCE access: manage or federate employees once, grant account/application access, single sign-on portal. Recommended for human access in multi-account setups.",
    tags: ["identity center", "sso"]
  },
  {
    id: "2.3-008",
    domain: 2,
    task: "2.3",
    front: "App end users signing in with Google/Facebook - which service?",
    back: "Amazon Cognito (web identity federation) - consumer-scale sign-up/sign-in mapped to scoped AWS credentials.",
    tags: ["cognito", "federation"]
  },
  {
    id: "2.3-009",
    domain: 2,
    task: "2.3",
    front: "Which service issues the temporary credentials when a role is assumed?",
    back: "AWS Security Token Service (STS).",
    tags: ["sts", "roles"]
  },
  {
    id: "2.3-010",
    domain: 2,
    task: "2.3",
    front: "Root user best practices - four rules.",
    back: "Enable MFA; never use for daily tasks; never share credentials; delete/never create root access keys. All work via least-privilege IAM identities.",
    tags: ["root user", "best practices"]
  },
  {
    id: "2.3-011",
    domain: 2,
    task: "2.3",
    front: "Is IAM Regional or global, and what does it cost?",
    back: "Global (identities and policies apply across all Regions) and free - the resources identities create cost money, the identity machinery does not.",
    tags: ["iam"]
  },
  {
    id: "2.3-012",
    domain: 2,
    task: "2.3",
    front: "What does IAM Access Analyzer find?",
    back: "Resources reachable from outside the trusted zone - unintended public or cross-account sharing (buckets, KMS keys, roles, and more).",
    tags: ["access analyzer"]
  },
  {
    id: "2.3-013",
    domain: 2,
    task: "2.3",
    front: "A new user with NO policies attempts an action. Result, and why?",
    back: "Denied - implicit deny: everything is forbidden until a policy allows it.",
    tags: ["implicit deny"]
  },
  {
    id: "2.4-001",
    domain: 2,
    task: "2.4",
    front: "CloudTrail vs AWS Config - what does each record?",
    back: "CloudTrail: API activity (who called what, when, from where) - actions. Config: resource configurations over time plus compliance rules - states.",
    tags: ["cloudtrail", "config", "comparison"]
  },
  {
    id: "2.4-002",
    domain: 2,
    task: "2.4",
    front: "What are GuardDuty's data sources and its job?",
    back: "Agentless threat detection: ML over CloudTrail logs, VPC Flow Logs, and DNS logs to find compromised credentials, unusual API behavior, reconnaissance, crypto-mining.",
    tags: ["guardduty"]
  },
  {
    id: "2.4-003",
    domain: 2,
    task: "2.4",
    front: "Which service aggregates findings from GuardDuty, Inspector, and Macie into one posture view?",
    back: "AWS Security Hub - central security findings aggregation and standards compliance, including organization-wide.",
    tags: ["security hub"]
  },
  {
    id: "2.4-004",
    domain: 2,
    task: "2.4",
    front: "Inspector vs Macie - what does each scan?",
    back: "Inspector: compute - EC2 instances and container images - for CVEs and network exposure. Macie: data - ML discovery of sensitive info (PII) in S3.",
    tags: ["inspector", "macie", "comparison"]
  },
  {
    id: "2.4-005",
    domain: 2,
    task: "2.4",
    front: "Shield Standard vs Shield Advanced.",
    back: "Standard: free, automatic for every account, common DDoS defense. Advanced: paid - sophisticated detection, cost protection while scaling under attack, 24/7 Shield Response Team.",
    tags: ["shield", "ddos"]
  },
  {
    id: "2.4-006",
    domain: 2,
    task: "2.4",
    front: "What does AWS WAF do, and where does it attach?",
    back: "Layer-7 web request filtering - blocks SQL injection, XSS, abusive rates. Attaches to CloudFront, Application Load Balancers, and API Gateway.",
    tags: ["waf"]
  },
  {
    id: "2.4-007",
    domain: 2,
    task: "2.4",
    front: "WAF vs Shield in one line each.",
    back: "WAF filters malicious web requests (exploits, patterns). Shield absorbs DDoS traffic floods. Different attack classes.",
    tags: ["waf", "shield", "comparison"]
  },
  {
    id: "2.4-008",
    domain: 2,
    task: "2.4",
    front: "KMS vs Secrets Manager - keys vs what?",
    back: "KMS manages encryption KEYS for data at rest. Secrets Manager stores and rotates SECRETS - passwords, tokens, connection strings - with runtime retrieval.",
    tags: ["kms", "secrets manager", "comparison"]
  },
  {
    id: "2.4-009",
    domain: 2,
    task: "2.4",
    front: "Name Trusted Advisor's five recommendation categories.",
    back: "Cost optimization, performance, security, fault tolerance, service limits (quotas).",
    tags: ["trusted advisor"]
  },
  {
    id: "2.4-010",
    domain: 2,
    task: "2.4",
    front: "Which Trusted Advisor security checks are the classic examples?",
    back: "Unrestricted ports on security groups, MFA on the root user, and IAM use - plus the core checks free to all accounts.",
    tags: ["trusted advisor", "security checks"]
  },
  {
    id: "2.4-011",
    domain: 2,
    task: "2.4",
    front: "What do VPC Flow Logs capture, and for what purpose?",
    back: "IP traffic metadata (source, destination, ports, accept/reject) for interfaces/subnets/VPC - used for forensics and network troubleshooting. Metadata, not packet contents.",
    tags: ["flow logs", "forensics"]
  },
  {
    id: "2.4-012",
    domain: 2,
    task: "2.4",
    front: "Assemble the six-part security baseline: audit trail, config compliance, threat detection, edge protection, encryption, recommendations.",
    back: "CloudTrail + AWS Config + GuardDuty + WAF (with Shield) + KMS-enabled storage + Trusted Advisor.",
    tags: ["security baseline", "capstone"]
  }
);
