window.NOTES = window.NOTES || [];
window.NOTES.push(
  {
    id: "2.1",
    domain: 2,
    task: "2.1",
    title: "Understand the AWS shared responsibility model",
    weight: "Domain 2 is 30% of the exam",
    readMinutes: 11,
    summary: "Task 2.1 is the most conceptually tested topic in Domain 2: the shared responsibility model defines who secures what, and the split changes with every service you choose. Expect scenario questions that name a duty - patching, encryption, facility security, credential hygiene - and ask whose it is, plus the two special concepts: shared controls and the way the split shifts as services become more managed.",
    sections: [
      {
        heading: "The core split: OF the cloud vs IN the cloud",
        body: [
          "**Security OF the cloud** is AWS's half: the facilities (buildings, power, cooling, physical access), the hardware, the networking fabric, and the hypervisor that isolates instances. AWS operates, patches, and disposes of all of it under audited procedures - customers never touch any layer of it.",
          "**Security IN the cloud** is the customer's half: everything the customer puts on the platform - data and its classification, IAM users and permissions, encryption decisions, security group and network configuration, and the guest operating systems and applications on IaaS like EC2.",
          "The sentence to memorize: **AWS secures the cloud; the customer secures what they put in the cloud.** Nearly every 2.1 question is this sentence applied to a specific duty."
        ],
        table: {
          headers: ["Duty", "Owner", "Why"],
          rows: [
            ["Facility power, cooling, physical access", "AWS", "Physical infrastructure"],
            ["Hardware lifecycle and secure drive disposal", "AWS", "Physical infrastructure"],
            ["Hypervisor patching", "AWS", "Isolation layer beneath customers"],
            ["Guest OS patching on EC2", "Customer", "Inside the customer's virtual machine"],
            ["Encrypting customer data", "Customer", "Data-owner decision"],
            ["IAM users, MFA, credentials", "Customer", "Account-level identity work"]
          ]
        }
      },
      {
        heading: "The split shifts with service type",
        body: [
          "**Infrastructure services (EC2, EBS, VPC)** leave the most with the customer: the guest OS, its patching, applications, and network configuration are all customer work. AWS's share stops at the hypervisor.",
          "**Managed services (RDS, EKS, Elastic Beanstalk)** move OS and platform layers to AWS: RDS customers never patch the database hosts or engine; EKS customers never operate the Kubernetes control plane. The customer keeps the data layer - schema, database users, encryption settings, application code.",
          "**Serverless services (Lambda, S3, DynamoDB, SQS)** shrink the customer's list to its minimum: code, data, and access decisions. There is no OS to patch because there is no OS the customer can see. The rule of thumb: **the more managed the service, the further down the stack AWS absorbs duties** - but they never reach zero, because data and access decisions are always the customer's.",
          "This direction - EC2 leaves most, serverless leaves least - is tested directly, often as 'which service leaves the customer with the fewest security responsibilities?' (answer: the most managed one)."
        ]
      },
      {
        heading: "Shared controls: one duty, two halves",
        body: [
          "**Shared controls** are duties that exist on both sides of the line, each party responsible for their own layer. The exam names three:",
          "**Patch and configuration management** - AWS patches the infrastructure it operates; the customer patches their guest OSes, applications, and dependencies, and configures services correctly. **Awareness and training** - AWS trains its staff to operate the platform; the customer trains their people to protect credentials and handle data. **Configuration management** in general follows the same split.",
          "Watch for options that present a shared control as fully one side's duty - 'patching is entirely AWS's job' is wrong because the guest OS half is customer work, and 'training is entirely the customer's job' is wrong because AWS has its own training duty for its own staff."
        ],
        bullets: [
          "**Shared**: patch management, configuration management, awareness and training.",
          "**AWS-only**: facilities, hardware, hypervisor, managed service platforms.",
          "**Customer-only**: data classification, encryption decisions, IAM configuration, application code."
        ]
      },
      {
        heading: "Compliance and the model",
        body: [
          "Compliance layers the same way the model does. AWS is audited and certified for its infrastructure (SOC reports, ISO certifications, PCI DSS for its platform), and customers obtain that evidence through **AWS Artifact** to support their own audits. The customer's use of the services - their application, data handling, and configuration - is the customer's compliance scope to implement and prove.",
          "Two consequences worth memorizing: regulators interact with the customer, who references AWS's published artifacts rather than inspecting data centers; and a compliance obligation such as 'data must be encrypted at rest' remains a customer duty even where AWS provides the mechanism and sensible defaults.",
          "Finally, the model does **not** mean AWS watches the customer's account for them: a publicly readable S3 bucket that an audit tool flags is a customer misconfiguration to remediate - tooling can be AWS's, configuration is the customer's."
        ]
      }
    ],
    mustKnow: [
      "AWS = security OF the cloud (facilities, hardware, networking, hypervisor); customer = security IN the cloud (data, access, configuration, guest OS).",
      "The split shifts by service: EC2 leaves the most with the customer; managed services (RDS) move OS/platform; serverless (Lambda, S3, DynamoDB) leaves only code, data, and access.",
      "Shared controls: patch management, configuration management, and awareness/training - each side covers its own layer.",
      "With RDS, engine and OS patching are AWS's; database users, schemas, and encryption settings stay with the customer.",
      "Guest OS patching on EC2 is always customer work, regardless of the AMI's source.",
      "Root account hygiene (MFA, no daily use, no shared credentials) is customer duty.",
      "Compliance: AWS's certifications cover its infrastructure (evidence via AWS Artifact); the customer's use of services is the customer's compliance scope.",
      "Hardware disposal, drive destruction, and facility access are AWS-only; data classification and encryption decisions are customer-only."
    ],
    examTips: [
      "Classify the duty first: is it physical/infrastructure (AWS), data/access/config (customer), or both (shared control)?",
      "'Who patches what' is the most frequent phrasing: hypervisor and RDS engine = AWS; EC2 guest OS and application dependencies = customer.",
      "If a stem says a company assumed AWS protects or backs up its data by default, the flaw is that data lifecycle and access decisions belong to the customer.",
      "Options claiming a 50/50 fixed split, or that support plans change responsibility, are always wrong."
    ]
  },
  {
    id: "2.2",
    domain: 2,
    task: "2.2",
    title: "Understand AWS Cloud security, governance, and compliance concepts",
    weight: "Domain 2 is 30% of the exam",
    readMinutes: 11,
    summary: "Task 2.2 is the concepts layer of Domain 2: encryption's two states and the services behind them, the compliance frameworks and where AWS's evidence lives, and the governance vocabulary - policies, standards, procedures, least privilege, zero trust, defense in depth, and control types. Questions are definition-and-scenario matching with reliable tell phrases.",
    sections: [
      {
        heading: "Encryption: the two states of data",
        body: [
          "**Data at rest** is stored data - on disks, in buckets, in databases, in backups - and is protected by storage-layer encryption, typically with keys from **AWS KMS**. **Data in transit** is data on the move - browser to app, service to service - and is protected by transport encryption, chiefly **TLS**, with certificates managed by **AWS Certificate Manager (ACM)**.",
          "**AWS KMS** creates and manages encryption keys: keys never leave KMS in plaintext, every use is an audited, permission-checked API call, and key policies (plus IAM) decide who may use a key. Nearly every AWS service's 'encrypt this' checkbox is KMS underneath.",
          "Why both: defense in depth. Access controls are one layer; encryption is an independent layer that protects data if media is lost, stolen, or reached through a permission failure. Neither substitutes for the other, and the exam tests whether you can classify a scenario as at-rest or in-transit."
        ],
        table: {
          headers: ["Scenario", "State", "Protection"],
          rows: [
            ["Objects sitting in S3", "At rest", "S3 encryption with a KMS key"],
            ["HTTPS on a public site", "In transit", "TLS certificate from ACM"],
            ["Database files on disk", "At rest", "Storage/engine encryption (KMS)"],
            ["Microservice calling its database", "In transit", "TLS on the connection"],
            ["Backup archives", "At rest", "Encrypted backup storage"]
          ]
        }
      },
      {
        heading: "Compliance frameworks and AWS compliance resources",
        body: [
          "Frameworks the exam expects you to recognize: **PCI DSS** (payment card data), **HIPAA** (US health data), **GDPR** (EU personal data privacy), **ISO 27001** (international information-security management standard), **SOC reports** (audited controls of a service organization), **NIST** (US-origin security frameworks), and **FedRAMP** (US government cloud authorization).",
          "**AWS Artifact** is the compliance portal: it provides on-demand access to AWS's audit reports and certifications and is where customers sign agreements. When a stem says an auditor wants proof about AWS's infrastructure, the answer is Artifact - not Config (customer resources), not GuardDuty (threat detection), and never an on-site data center visit.",
          "The compliance layering rule from task 2.1 applies: AWS's certifications cover AWS's side; the customer's own configuration and data handling remains the customer's compliance work - for example, a PCI workload's card-data flows are the retailer's scope even though AWS's platform is PCI certified."
        ]
      },
      {
        heading: "Governance vocabulary: policies, standards, procedures, guidelines",
        body: [
          "**Governance** is the structure by which an organization directs and controls security: who decides, which rules apply, how risk is accepted. Its documents form a hierarchy with decreasing (then disappearing) force:",
          "**Policy** - mandatory intent ('all customer data must be encrypted'). **Standard** - mandatory specifics ('AES-256, TLS 1.2 minimum'). **Procedure** - mandatory steps (the runbook that implements the standard). **Guideline** - advisory, flexible recommendations. The exam tests the policy-vs-procedure distinction hardest: policy says what and why; procedure says how, step by step.",
          "Two governance capabilities appear by name: **change management** (reviewed, approved, traceable changes to production - often implemented as code review plus pipeline approvals on IaC) and **data classification** (labeling data by sensitivity so controls match value)."
        ],
        bullets: [
          "Policy = mandatory intent; standard = mandatory specifics; procedure = mandatory steps; guideline = advisory.",
          "Change management = controlled review and approval of changes.",
          "Security hygiene basics: MFA on privileged users, strong IAM password policies, least privilege, patching, audit logging enabled."
        ]
      },
      {
        heading: "Security principles and control types",
        body: [
          "**Least privilege**: grant each identity only the permissions its task needs - nothing more. **Defense in depth**: stack independent controls (identity, network, encryption, detection) so no single failure is fatal. **Zero trust**: never trust, always verify - every request is authenticated and authorized regardless of network location; being 'inside the network' grants nothing.",
          "Control types by timing: **preventive** controls stop an action before it happens (security group rules blocking a port, IAM explicit deny); **detective** controls record and reveal activity for review (CloudTrail logging, GuardDuty alerts, Config rules flagging drift); **corrective** controls restore state after an event. Classify by whether the control blocks, watches, or repairs.",
          "Multi-factor authentication belongs here as a concept: it combines factor categories - something you know (password) with something you have (token, app code) or are (biometric) - so a stolen password alone no longer grants access."
        ],
        table: {
          headers: ["Concept", "One-line definition", "Tell phrase"],
          rows: [
            ["Least privilege", "Minimum permissions per identity", "\"only what is needed\""],
            ["Defense in depth", "Independent stacked layers", "\"additional layer\", \"no single failure\""],
            ["Zero trust", "Verify every request, no implicit trust", "\"regardless of origin\", \"never trust\""],
            ["Preventive control", "Blocks before it happens", "\"blocks\", \"denies\", \"prevents\""],
            ["Detective control", "Records for later review", "\"logs\", \"records\", \"alerts\", \"audits\""]
          ]
        }
      }
    ],
    mustKnow: [
      "At rest = stored data (KMS-keyed encryption); in transit = moving data (TLS, certificates from ACM).",
      "KMS: managed keys, never leave KMS in plaintext, every use audited and permission-gated by key policy.",
      "Compliance frameworks: PCI DSS (cards), HIPAA (US health), GDPR (EU privacy), ISO 27001 (international ISM), NIST (US frameworks), FedRAMP (US government).",
      "AWS Artifact distributes AWS audit reports and agreements - the answer to 'prove AWS infrastructure compliance'.",
      "Governance hierarchy: policy (intent) > standard (specifics) > procedure (steps); guidelines are advisory.",
      "Least privilege = only needed permissions; defense in depth = independent stacked layers; zero trust = verify every request.",
      "Preventive controls block (SG rules); detective controls record (CloudTrail, Config, GuardDuty).",
      "MFA = password plus a second factor category (have or are)."
    ],
    examTips: [
      "Classify the data first: moving = in transit (TLS/ACM); sitting = at rest (KMS encryption). Most encryption questions end there.",
      "\"Auditor wants AWS-side proof\" = AWS Artifact; \"auditor wants proof about YOUR resources\" = AWS Config plus CloudTrail.",
      "\"What and why\" documents are policies; \"step-by-step how\" documents are procedures; anything advisory is a guideline.",
      "A control that blocks is preventive; a control that records and alerts is detective - read the verb in the stem."
    ]
  },
  {
    id: "2.3",
    domain: 2,
    task: "2.3",
    title: "Identify AWS access management capabilities",
    weight: "Domain 2 is 30% of the exam",
    readMinutes: 11,
    summary: "Task 2.3 is the IAM task: identities (users, groups, roles), permissions (policies and how they evaluate), federation (identity providers and IAM Identity Center), and the hygiene practices - least privilege, MFA, root protection. It is the most mechanical Domain 2 task: most questions resolve once you identify the identity type or the policy evaluation rule the stem describes.",
    sections: [
      {
        heading: "The identity types: users, groups, roles",
        body: [
          "An **IAM user** is a permanent identity with long-term credentials: a password for console access and access keys for CLI/SDK/API use. An **IAM group** bundles users so a policy attaches once and every member inherits it - the standard answer for managing people with the same duties. An **IAM role** is an assumable identity with **temporary credentials and no long-term secrets**: services, users, federated identities, and principals in other accounts can assume it.",
          "The role-vs-user decision is the most-tested split in the task: **applications use roles** - an EC2 instance gets a role attached, a Lambda function uses its execution role - so credentials are temporary, automatic, and never embedded in code. **Humans get users or, better, federation** - with groups carrying their permissions. Access keys (the programmatic credential pair) belong to users; if a stem shows keys in application code, that is the anti-pattern the role option fixes.",
          "A role has two policy halves: the **trust policy** (who may assume it) and the **permissions policy** (what they may do once assumed). Both must align for access to flow."
        ],
        table: {
          headers: ["Identity", "Credential type", "Typical use"],
          rows: [
            ["IAM user", "Long-term password and/or access keys", "Individual humans needing direct access"],
            ["IAM group", "None - holds users, carries policies", "Managing sets of users with same duties"],
            ["IAM role", "Temporary, auto-expiring credentials", "Applications (EC2, Lambda), cross-account, federation"]
          ]
        }
      },
      {
        heading: "Policies: who may do what, and how evaluation works",
        body: [
          "An **IAM policy** is a JSON document of Effect/Action/Resource/Condition statements. **Identity-based** policies attach to users, groups, and roles; **resource-based** policies attach to resources - the S3 bucket policy is the canonical example, and it can grant access to principals in other accounts directly. **Service control policies (SCPs)** attach through AWS Organizations and set a ceiling on what any principal in an account can do.",
          "Evaluation rules worth memorizing: everything starts as **implicitly denied** (no policy allows it, nothing happens); any **explicit deny wins** over any allow; permissions from multiple sources (user plus all their groups) **add up**. So: user with S3FullAccess plus a group policy explicitly denying s3:DeleteBucket can do everything except delete buckets; an SCP denying an action blocks every user in the account regardless of their own policies.",
          "**Least privilege** is the design rule all policies are judged against: name the exact actions on the exact resources. Broad admin grants 'so nothing breaks' are the classic wrong answer, and a fresh user with no policies can do nothing - because of the implicit deny."
        ]
      },
      {
        heading: "Federation and IAM Identity Center",
        body: [
          "**Federation** lets an external identity provider authenticate users who then assume mapped AWS roles: employees sign in with corporate directory credentials instead of separate AWS passwords, and access is removed automatically when they leave the company. For web and mobile **end users**, web identity federation (commonly via **Amazon Cognito**) maps external logins (Google, Facebook, custom) to scoped AWS credentials at consumer scale.",
          "**AWS IAM Identity Center** (the successor to AWS SSO) is the workforce access hub: manage or federate users once, grant access to accounts and applications, and sign in through a single portal - the recommended approach for human access in multi-account organizations.",
          "The workforce-vs-consumer split matters: **employees/workforce** = IAM Identity Center or IAM users; **application end users at scale** = Amazon Cognito. And **STS** is the service issuing the temporary credentials whenever any role is assumed."
        ]
      },
      {
        heading: "Access hygiene and the root user",
        body: [
          "**Root user** rules: protect with MFA, do not use for daily tasks, never share its credentials, delete (or never create) its access keys, and do all work through least-privilege IAM identities. Root bypasses every permission boundary, which is exactly why it must stay locked away.",
          "The hygiene checklist: MFA on privileged identities, account-level **IAM password policy** (length, complexity, rotation), least-privilege permissions, no shared accounts (accountability requires individual identities), and audit logging enabled. **IAM Access Analyzer** rounds out the toolkit by flagging resources reachable from outside the trusted zone - unintended public or cross-account sharing.",
          "IAM itself is a **global** service (identities and policies apply across all Regions) and is free of charge - the resources identities create cost money, the identity machinery does not."
        ]
      }
    ],
    mustKnow: [
      "User = long-term credentials for a person/app; group = bundle of users with shared policies; role = assumable identity with temporary credentials.",
      "Applications authenticate via roles (instance profiles, execution roles) - never embedded access keys.",
      "Trust policy = who assumes the role; permissions policy = what they can do.",
      "Policy evaluation: implicit deny by default, explicit deny always wins, permissions add up across policies and groups.",
      "Resource-based policies (S3 bucket policies) attach to resources and can grant cross-account access; SCPs cap what any principal in an account may do.",
      "Federation: employees via IAM Identity Center/identity providers; app end users via Cognito; STS issues the temporary credentials.",
      "Root: MFA on, no daily use, no access keys, never shared; root cannot be deleted.",
      "IAM is global and free; Access Analyzer finds unintended external access."
    ],
    examTips: [
      "Spot the identity type first: 'temporary credentials', 'assumable', 'no passwords' = role; 'long-term keys in code' = the anti-pattern a role fixes.",
      "Any option containing an explicit Deny question resolves by the rule: deny wins over everything, then allows add up.",
      "\"Users sign in with corporate credentials\" = federation/IAM Identity Center; \"app customers sign in with Google/Facebook\" = Cognito.",
      "Least-privilege answers name exact actions on exact resources; anything with AdministratorAccess 'for convenience' is wrong."
    ]
  },
  {
    id: "2.4",
    domain: 2,
    task: "2.4",
    title: "Identify components and resources for security",
    weight: "Domain 2 is 30% of the exam",
    readMinutes: 11,
    summary: "Task 2.4 is the security services tour: the recorders (CloudTrail, Config), the detectors (GuardDuty, Security Hub), the scanners (Inspector, Macie), the protectors (Shield, WAF), the secret-keepers (Secrets Manager, KMS), and the advisor (Trusted Advisor). It is pure service-matching - each service has a one-line purpose and a tell phrase, and the comparisons (CloudTrail vs Config, WAF vs Shield, Macie vs Inspector) are the tested pairs.",
    sections: [
      {
        heading: "The recorders: CloudTrail and Config",
        body: [
          "**AWS CloudTrail** records API activity: who made which call, when, from where - console actions, CLI commands, SDK calls. It is the audit trail for forensics ('who deleted that object?') and compliance evidence. **AWS Config** records resource configurations over time and evaluates them against rules: what a resource looked like, when it changed, and whether it was compliant (encrypted? tagged? public?).",
          "The pairing to memorize: **CloudTrail = actions** (API call history), **Config = states** (configuration history and compliance). An audit combines them - Config flags the drift, CloudTrail names the actor. This pair is among the most-tested comparisons in Domain 2."
        ],
        table: {
          headers: ["Service", "Records", "Question it answers"],
          rows: [
            ["CloudTrail", "API calls: actor, time, source, parameters", "Who did what, when?"],
            ["AWS Config", "Resource configurations and rule compliance over time", "What did it look like - was it compliant?"]
          ]
        }
      },
      {
        heading: "The detectors and scanners: GuardDuty, Security Hub, Inspector, Macie",
        body: [
          "**Amazon GuardDuty** is agentless threat detection: machine learning over CloudTrail logs, VPC Flow Logs, and DNS logs raises findings for compromised credentials, unusual API activity, reconnaissance, and cryptocurrency mining. **AWS Security Hub** aggregates security findings from GuardDuty, Inspector, Macie, and partners into one posture view with standards-based compliance checks - the multi-account answer.",
          "**Amazon Inspector** scans compute - EC2 instances and container images - for known software vulnerabilities (CVEs) and unintended network exposure, producing prioritized findings. **Amazon Macie** scans data - applying ML to discover sensitive information, especially PII, sitting in S3 buckets and alerting on exposure.",
          "The comparison: Inspector's subject is **hosts and images**, Macie's subject is **data in S3**. And GuardDuty detects **behavior**, Inspector finds **known vulnerabilities** - three different scan targets, and the exam mixes them freely."
        ],
        bullets: [
          "GuardDuty - behavioral threats, agentless, feeds: CloudTrail + VPC Flow Logs + DNS logs.",
          "Security Hub - central findings aggregation and posture, organization-wide.",
          "Inspector - vulnerability scanning of EC2/containers (CVEs, exposure).",
          "Macie - sensitive data discovery (PII) in S3."
        ]
      },
      {
        heading: "The protectors and the vault: Shield, WAF, Secrets Manager, KMS",
        body: [
          "**AWS Shield** defends against DDoS: **Standard** is free and automatically enabled for every account against common volumetric attacks; **Shield Advanced** adds sophisticated detection, cost protection when scaling under attack, and 24/7 access to the Shield Response Team. **AWS WAF** is the web application firewall attached to CloudFront, Application Load Balancers, or API Gateway: layer-7 rules block SQL injection, XSS, and abusive rates before requests reach the app. Split: **WAF filters malicious requests; Shield absorbs traffic floods**.",
          "**AWS Secrets Manager** stores secrets - database passwords, API tokens, connection strings - encrypted, with automatic rotation and runtime retrieval via API. **AWS KMS** manages the encryption keys that protect data at rest across S3, EBS, RDS, and more. The dividing line: **KMS = keys; Secrets Manager = secrets** (credentials and tokens, often encrypted with KMS underneath).",
          "A secret-handling stem ('store DB passwords securely and rotate them') is Secrets Manager; an 'encrypt the data' stem is KMS. Putting passwords in S3 buckets, environment variables, or code is always the wrong option."
        ]
      },
      {
        heading: "The advisor and the baseline",
        body: [
          "**AWS Trusted Advisor** continuously checks the account against best practices across five categories - **cost optimization, performance, security, fault tolerance, and service limits** - and surfaces prioritized recommendations. Its core security checks (unrestricted security group ports, root MFA, IAM use) are the tells: 'a service warns us port 22 is open to the world' is Trusted Advisor.",
          "A sensible security baseline assembles this task's tools, and the exam occasionally asks for the full set: **CloudTrail** (audit trail), **Config** (configuration compliance), **GuardDuty** (threat detection), **WAF + Shield** (edge protection), **KMS** (encryption), and **Trusted Advisor** (recommendations). Recognizing each service's single role lets you assemble or verify such lists quickly.",
          "AWS Support itself is also a security resource: plan-dependent access to cloud support engineers for security incidents, with 24/7 channels and faster responses at Business-level and above - a fact reused from tasks 3.8 and 4.3."
        ],
        table: {
          headers: ["Need", "Service", "One-liner"],
          rows: [
            ["Audit trail of API activity", "CloudTrail", "Who did what, when"],
            ["Configuration history and compliance rules", "AWS Config", "Was it compliant, what changed"],
            ["Behavioral threat detection", "GuardDuty", "Suspicious activity, no agents"],
            ["Central security posture", "Security Hub", "Aggregated findings across accounts"],
            ["Vulnerability scanning", "Inspector", "CVEs and exposure on compute"],
            ["Sensitive data discovery", "Macie", "PII in S3"],
            ["DDoS protection", "Shield", "Standard free/automatic, Advanced paid"],
            ["Web request filtering", "WAF", "SQLi/XSS/rates on CloudFront, ALB, API GW"],
            ["Secrets storage and rotation", "Secrets Manager", "Passwords, tokens, connection strings"],
            ["Best-practice recommendations", "Trusted Advisor", "Five categories, security checks included"]
          ]
        }
      }
    ],
    mustKnow: [
      "CloudTrail records API activity (actions); Config records configurations and evaluates compliance (states).",
      "GuardDuty = agentless behavioral threat detection over CloudTrail, VPC Flow Logs, and DNS logs.",
      "Security Hub aggregates findings from security services for one posture view, including across an organization.",
      "Inspector scans EC2/containers for CVEs; Macie finds sensitive data (PII) in S3.",
      "Shield Standard is free and always on; Shield Advanced adds cost protection and 24/7 DDoS response. WAF filters layer-7 requests (SQLi, XSS) on CloudFront/ALB/API Gateway.",
      "Secrets Manager stores and rotates secrets; KMS manages encryption keys - keys vs secrets is the split.",
      "Trusted Advisor's five categories: cost optimization, performance, security, fault tolerance, service limits.",
      "VPC Flow Logs capture IP traffic metadata for forensics."
    ],
    examTips: [
      "\"Who did it\" = CloudTrail; \"was it configured correctly / when did it change\" = Config; \"is something suspicious happening\" = GuardDuty.",
      "Data leaks or PII hunting in S3 = Macie; software vulnerabilities on instances/images = Inspector.",
      "DDoS floods = Shield; malicious HTTP request patterns = WAF - both often appear together as options, so read the attack type in the stem.",
      "\"Store and rotate database passwords\" = Secrets Manager; \"encrypt stored data\" = KMS; a bucket named 'passwords' is always wrong."
    ]
  }
);
