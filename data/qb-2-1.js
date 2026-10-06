window.QBANK = window.QBANK || [];
window.QBANK.push(
  {
    id: "2.1-001",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "easy",
    stem: "What is the fundamental division of the AWS shared responsibility model?",
    options: [
      "AWS is responsible for all security, including the customer's data and access decisions",
      "The customer is responsible for all security, since AWS only provides hardware",
      "AWS handles security OF the cloud (infrastructure); the customer handles security IN the cloud (data, configuration, and access)",
      "Responsibility is split 50/50 on every control, regardless of the service used"
    ],
    answer: [2],
    explanation: "The model's core sentence: AWS secures what runs beneath you - facilities, hardware, networking, and the hypervisor (security OF the cloud) - while you secure what you put on it: your data, your identities and permissions, and your configurations (security IN the cloud). The 50/50 idea is a classic trap because the split shifts with each service.",
    rationales: [
      "AWS never takes over responsibility for the customer's data classification, permissions, or encryption choices.",
      "AWS does operate and secure the underlying infrastructure - this overstates the customer's side.",
      "",
      "The split is not fixed; it varies by service - Lambda leaves far less for the customer than EC2."
    ],
    services: [],
    tags: ["shared responsibility", "fundamentals"]
  },
  {
    id: "2.1-002",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "easy",
    stem: "A company runs a Linux application on Amazon EC2. Who is responsible for applying security patches to the operating system inside the instance?",
    options: [
      "AWS, because it operates the underlying host hardware",
      "AWS, because the AMI came from the AWS Marketplace",
      "The customer, because with EC2 the guest operating system falls on the customer's side",
      "The operating system vendor, with no involvement from the customer or AWS"
    ],
    answer: [2],
    explanation: "EC2 is infrastructure-as-a-service: AWS secures the physical host and hypervisor, and the customer owns everything inside the virtual machine - the guest OS, its patches, the applications, and their configuration. Unpatched guest operating systems are one of the model's most-tested customer duties.",
    rationales: [
      "AWS patches the underlying hosts and hypervisor, not the customer's guest operating system.",
      "The AMI's source does not transfer patching duty - whatever image is used, the running OS is the customer's to maintain.",
      "",
      "The OS vendor supplies the patches, but applying them on the customer's instances is the customer's responsibility."
    ],
    services: ["Amazon EC2"],
    tags: ["shared responsibility", "ec2", "patching"]
  },
  {
    id: "2.1-003",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "easy",
    stem: "A team uses Amazon RDS for its production database. Who is responsible for keeping the database engine software patched?",
    options: [
      "The customer, during a scheduled maintenance window they configure",
      "The customer's database administrator, as with any on-premises database",
      "Nobody - RDS requires no patching at all",
      "AWS, because RDS is a managed service and engine patching sits on AWS's side"
    ],
    answer: [3],
    explanation: "RDS moves the OS and database engine patching to AWS - that is precisely what 'managed' buys. The customer keeps the data-layer duties: schema decisions, database user accounts, parameter and option settings, and encrypting the data. Maintenance windows the customer sets only influence when AWS applies its patches.",
    rationales: [
      "The customer chooses a preferred maintenance window but does not perform engine patching.",
      "Database administration of data and users stays with the customer, but engine and OS patching do not.",
      "Patching absolutely still happens - AWS just performs it.",
      ""
    ],
    services: ["Amazon RDS"],
    tags: ["shared responsibility", "rds", "patching"]
  },
  {
    id: "2.1-004",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "easy",
    stem: "Which of these is a CUSTOMER responsibility when storing data in Amazon S3?",
    options: [
      "Replacing failed disk drives in the underlying storage fleet",
      "Encrypting the stored data and controlling who can access the buckets",
      "Ensuring the S3 service is available across multiple Availability Zones",
      "Maintaining the physical security of the data centers holding the buckets"
    ],
    answer: [1],
    explanation: "S3 is serverless object storage: durability, redundancy, and facility security are entirely AWS's work. What remains on the customer's plate is everything about the data itself - whether to encrypt it, which bucket policies and permissions apply, and who may read or write it.",
    rationales: [
      "Hardware replacement in the storage fleet is invisible to customers and handled by AWS.",
      "",
      "S3's cross-AZ durability is engineered and operated by AWS.",
      "Data center physical security is the definition of an AWS-side duty."
    ],
    services: ["Amazon S3"],
    tags: ["shared responsibility", "s3", "encryption"]
  },
  {
    id: "2.1-005",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "medium",
    stem: "A team builds an application entirely from serverless services: Lambda functions, API Gateway, and DynamoDB. Compared with running the same app on EC2, how does their responsibility change?",
    options: [
      "It grows, because serverless services hide more of the system from view",
      "It is unchanged - the shared responsibility model applies identically to every service",
      "It shrinks only if they purchase a higher support plan",
      "It shrinks substantially: with no servers, the customer's duties reduce to code, data, and access configuration"
    ],
    answer: [3],
    explanation: "Serverless is the far end of the responsibility shift: AWS operates everything from facility to runtime, so the customer's remaining duties are the function code, the data, and who may access what. The same application on EC2 would add guest OS patching, capacity, and network configuration to the customer's list.",
    rationales: [
      "Hiding servers from view is exactly what reduces, not grows, the customer's workload.",
      "The model always applies, but its content varies by service - that variance is the point.",
      "Support plans affect help and response times, never responsibility allocation.",
      ""
    ],
    services: ["AWS Lambda", "Amazon DynamoDB"],
    tags: ["shared responsibility", "serverless"]
  },
  {
    id: "2.1-006",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "easy",
    stem: "Which duty is ALWAYS AWS's responsibility, no matter which service a customer uses?",
    options: [
      "Classifying which data is sensitive",
      "Rotating the customer's IAM access keys",
      "Applying security patches to the customer's applications",
      "Operating and physically securing the data center facilities"
    ],
    answer: [3],
    explanation: "Facilities - buildings, power, cooling, physical access controls, guards - sit at the very bottom of the stack and are AWS's under every service, from EC2 to Lambda. Everything the customer touches (data classification, credentials, application security) is on the other side of the line.",
    rationales: [
      "Only the customer knows which of its data is sensitive; classification is a customer duty.",
      "IAM access keys belong to the customer's account and are theirs to rotate.",
      "Application code, including its patching and dependencies, is customer content.",
      ""
    ],
    services: [],
    tags: ["shared responsibility", "physical security"]
  },
  {
    id: "2.1-007",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "medium",
    stem: "Which of the following falls under \"security IN the cloud\" - the customer's side of the model?",
    options: [
      "Patching the hypervisor that isolates EC2 instances from each other",
      "Shredding decommissioned storage drives before disposal",
      "Configuring security groups and IAM policies to restrict access",
      "Protecting the power and cooling systems of a Region"
    ],
    answer: [2],
    explanation: "Security IN the cloud covers what the customer configures: identities and permissions, network rules such as security groups and NACLs, encryption settings, and the data itself. The hypervisor, drive disposal, and facility power are all AWS-side infrastructure duties.",
    rationales: [
      "The hypervisor is the heart of AWS's isolation duty - never the customer's.",
      "Drive disposal and destruction are handled by AWS under its data-destruction processes.",
      "",
      "Facility power and cooling are physical-infrastructure responsibilities of AWS."
    ],
    services: [],
    tags: ["shared responsibility", "security in the cloud"]
  },
  {
    id: "2.1-008",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "medium",
    stem: "A company currently self-manages a database on EC2, manually patching the OS and engine each month. It migrates the same data to Amazon RDS. What is the practical effect on the shared responsibility split?",
    options: [
      "The customer's duties stay the same; only pricing changes",
      "The customer now additionally manages the underlying RDS host machines",
      "AWS takes over the customer's data-level duties, such as database user accounts",
      "The OS and engine patching move to AWS; the customer keeps data, users, and configuration settings"
    ],
    answer: [3],
    explanation: "Moving from EC2-hosted databases to RDS shifts the OS and engine layers to AWS. The customer does not inherit host management - instead it keeps and focuses on the data layer: schemas, database accounts, parameter groups, backups configuration, and encryption choices.",
    rationales: [
      "The whole point of the migration is that the patching duties change hands.",
      "Customers never manage the hosts beneath RDS - that is the service's managed core.",
      "Data-level duties such as user accounts and access decisions remain firmly with the customer.",
      ""
    ],
    services: ["Amazon EC2", "Amazon RDS"],
    tags: ["shared responsibility", "rds", "comparison"]
  },
  {
    id: "2.1-009",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "medium",
    stem: "In the shared responsibility model, patch management is described as a \"shared control\". What does that mean in practice?",
    options: [
      "AWS patches the infrastructure it runs; the customer patches their guest operating systems and applications",
      "Both parties must jointly approve every patch before it is applied",
      "The customer patches AWS's infrastructure on request, and vice versa",
      "Patching is fully delegated to AWS for every service, including customer applications"
    ],
    answer: [0],
    explanation: "A shared control is one duty with two halves: AWS is responsible for patching the layers it operates (hosts, hypervisor, managed service software), while the customer is responsible for patching the layers they operate (guest OS, application code, containers, dependencies). Configuration management and security awareness training split the same way.",
    rationales: [
      "",
      "Neither side needs the other's approval for its own layers - the halves are independent.",
      "Customers never patch AWS's infrastructure; the boundary is layer ownership.",
      "AWS patches only its own layers; customer application patching always remains customer work."
    ],
    services: [],
    tags: ["shared controls", "patching"]
  },
  {
    id: "2.1-010",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "medium",
    stem: "An audit finds that a company's AWS root account has no MFA and its IAM users share one set of long-lived credentials. Under the shared responsibility model, whose responsibility is fixing this?",
    options: [
      "AWS's, because credential policies are a platform-level control",
      "The customer's, because identity and access management is security IN the cloud",
      "AWS's, but only if the company is on the Enterprise Support plan",
      "Shared - AWS enables MFA on all root accounts automatically"
    ],
    answer: [1],
    explanation: "How identities are created, protected, and credentialed is the customer's side of the line: root account hygiene, MFA, individual users, and key rotation are all security IN the cloud. AWS provides the IAM tooling and enforces its own platform controls, but configuring them in the customer's account is the customer's duty.",
    rationales: [
      "Credential policy inside the customer's account is not a platform-level control - it is account-level customer work.",
      "",
      "The support plan changes the help available, never the allocation of responsibility.",
      "AWS strongly recommends and can restrict some root actions, but enabling MFA and managing users is the customer's job."
    ],
    services: ["AWS IAM"],
    tags: ["shared responsibility", "iam", "mfa"]
  },
  {
    id: "2.1-011",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "easy",
    stem: "A compliance policy requires all customer data to be encrypted at rest. Whose responsibility is enabling that encryption on services such as S3 and RDS?",
    options: [
      "AWS's, since encryption at rest is enabled platform-wide by default",
      "The encryption vendor's, with no customer involvement",
      "Nobody's - encryption at rest is automatic for every AWS service",
      "The customer's - encryption settings for their data are part of security IN the cloud"
    ],
    answer: [3],
    explanation: "Deciding that data must be encrypted, choosing the mechanism, and verifying it stays on are customer duties wherever the service runs. AWS supplies the encryption capabilities (and applies some defaults), but the compliance obligation and its configuration belong to the data's owner.",
    rationales: [
      "AWS provides defaults in some services, but the duty to ensure encryption for the customer's compliance sits with the customer.",
      "There is no third-party vendor in this relationship - the customer configures AWS's built-in encryption options.",
      "Encryption is not universal and automatic in all cases; verifying coverage is customer work.",
      ""
    ],
    services: ["Amazon S3", "Amazon RDS"],
    tags: ["shared responsibility", "encryption"]
  },
  {
    id: "2.1-012",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "medium",
    stem: "Which task is AWS's responsibility even for the most customer-controlled service, Amazon EC2?",
    options: [
      "Encrypting the data volumes attached to instances",
      "Choosing which Regions and AZs to launch instances into",
      "Securing the network cabling, racks, and hardware in the data center",
      "Configuring the security groups attached to the instances"
    ],
    answer: [2],
    explanation: "Even on EC2 - the service where customers keep the most responsibility - the physical layer remains AWS's: buildings, cabling, racks, power, and hardware lifecycle. Encryption, Region selection, and security group configuration are all customer choices made on top of that substrate.",
    rationales: [
      "Volume encryption settings are configured by the customer.",
      "Launching in specific Regions and AZs is an architectural decision the customer makes.",
      "",
      "Security groups are customer-configured virtual firewalls."
    ],
    services: ["Amazon EC2"],
    tags: ["shared responsibility", "ec2", "physical security"]
  },
  {
    id: "2.1-013",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "hard",
    stem: "An executive states: \"Our data is on AWS, so AWS is responsible for backing it up, restricting access to it, and deleting it when we ask.\" What is the flaw in this statement?",
    options: [
      "It is correct - those are all AWS responsibilities for any storage service",
      "It is correct only for data stored in S3, not for data in other services",
      "Those duties belong to the customer's end users, not to either party formally",
      "It confuses the sides: backup configuration, access control, and data lifecycle decisions belong to the customer"
    ],
    answer: [3],
    explanation: "The executive has absorbed the most common misconception. AWS guarantees the durability and security of the infrastructure; the customer owns the data lifecycle - what is backed up and when, which permissions apply, and when data is deleted. AWS executes what the customer configures; it does not decide on the customer's behalf.",
    rationales: [
      "This reverses the model: data management decisions are customer duties on every service.",
      "The split does not flip between services - only the amount of infrastructure the customer manages changes.",
      "Formal responsibility rests with the customer organization, which may delegate execution internally but still owns the duty.",
      ""
    ],
    services: [],
    tags: ["shared responsibility", "misconceptions"]
  },
  {
    id: "2.1-014",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "medium",
    stem: "What does AWS do with storage devices that reach the end of their life?",
    options: [
      "Leaves disposal to the customer of the account that used the devices",
      "Sells them at auction after wiping them once",
      "Follows documented decommissioning and secure destruction procedures that no customer data survives",
      "Stores retired drives indefinitely in a secure facility"
    ],
    answer: [2],
    explanation: "Hardware lifecycle and disposal are AWS-side responsibilities, executed with documented, audited destruction procedures so data cannot be recovered from decommissioned media. Customers never touch, or need to touch, the physical media their data once lived on.",
    rationales: [
      "Customers have no interaction with physical devices at any point in their lifecycle.",
      "AWS does not resell used storage media; secure destruction is the standard.",
      "",
      "Drives are destroyed as part of the documented decommissioning process, not warehoused forever."
    ],
    services: [],
    tags: ["shared responsibility", "hardware lifecycle"]
  },
  {
    id: "2.1-015",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "medium",
    stem: "Which action is the customer performing their side of the shared responsibility model?",
    options: [
      "Configuring security group rules so a database instance accepts traffic only from the application tier",
      "Replacing a failed network switch in an Availability Zone",
      "Patching the firmware of AWS's edge routers",
      "Adding an Availability Zone to an existing Region"
    ],
    answer: [0],
    explanation: "Tightening security group rules is a textbook customer-side network control. The switch hardware, AWS's router firmware, and the composition of Regions and AZs are all AWS's infrastructure work that customers never perform.",
    rationales: [
      "",
      "Hardware repair inside AWS facilities is AWS's operational duty.",
      "Router and switch firmware belong to AWS's network layer.",
      "Regions and Availability Zones are AWS's infrastructure design; customers only choose where to deploy."
    ],
    services: ["Amazon EC2"],
    tags: ["shared responsibility", "security groups"]
  },
  {
    id: "2.1-016",
    domain: 2,
    task: "2.1",
    type: "multi",
    difficulty: "medium",
    stem: "A company runs a production database on Amazon RDS. Which TWO responsibilities belong to the CUSTOMER? (Select TWO.)",
    options: [
      "Managing the database user accounts and their permissions",
      "Deciding whether to encrypt the stored data and managing the keys",
      "Patching the underlying operating system of the database hosts",
      "Replacing failed hardware in the database fleet",
      "Replicating storage across Availability Zones for durability"
    ],
    answer: [0, 1],
    explanation: "On RDS the customer keeps the data layer: which accounts exist, what they may do, whether data is encrypted, and how the database is configured. The host OS patching, hardware replacement, and cross-AZ storage replication are exactly what AWS took over by managing the service.",
    rationales: [
      "",
      "",
      "OS patching beneath RDS is performed by AWS - that is part of the managed offering.",
      "Hardware lifecycle in the fleet is AWS's infrastructure responsibility.",
      "S3-style durability replication of the underlying storage is engineered by AWS."
    ],
    services: ["Amazon RDS"],
    tags: ["shared responsibility", "rds"]
  },
  {
    id: "2.1-017",
    domain: 2,
    task: "2.1",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO are AWS-side responsibilities under the shared responsibility model? (Select TWO.)",
    options: [
      "Patching the hypervisor that isolates customer instances",
      "Managing the lifecycle and secure disposal of storage hardware",
      "Encrypting customer application databases",
      "Creating and removing IAM users in customer accounts",
      "Classifying which customer data is sensitive"
    ],
    answer: [0, 1],
    explanation: "The hypervisor and the physical hardware lifecycle - including secure disposal - are core AWS infrastructure duties. Encrypting the customer's databases, managing the customer's IAM users, and classifying the customer's data are all things only the customer can decide and do.",
    rationales: [
      "",
      "",
      "Database encryption is enabled and managed by the customer for their data.",
      "IAM users live in the customer's account and are managed by the customer.",
      "Only the customer knows which of its data is sensitive."
    ],
    services: [],
    tags: ["shared responsibility", "aws duties"]
  },
  {
    id: "2.1-018",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "hard",
    stem: "A company runs containerized workloads on Amazon EKS. Which division of responsibility is correct?",
    options: [
      "AWS patches the customer's container images; the customer maintains the control plane",
      "The customer maintains the Kubernetes control plane; AWS secures the container images",
      "AWS operates and secures the Kubernetes control plane; the customer secures their nodes, images, and workloads",
      "AWS handles everything; customers only write application code with no operational duties"
    ],
    answer: [2],
    explanation: "EKS is a managed control plane: AWS runs, scales, and patches the Kubernetes management layer. The customer's side covers what they deploy - node configuration when using self-managed or managed node groups, container images, pod security, and application code. Option A reverses the halves entirely.",
    rationales: [
      "Reversed: container images are customer artifacts, and the control plane is AWS's managed layer.",
      "Reversed: maintaining the control plane is exactly what AWS does in EKS.",
      "",
      "EKS removes control-plane work, but node, image, and workload security remain customer duties."
    ],
    services: ["Amazon EKS"],
    tags: ["shared responsibility", "containers", "eks"]
  },
  {
    id: "2.1-019",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "medium",
    stem: "Security awareness and training are listed as a \"shared control\" in the model. How is that duty split?",
    options: [
      "AWS writes the customer's internal security policies",
      "It is entirely the customer's duty, with no AWS component",
      "It is entirely AWS's duty, since AWS operates the platform",
      "AWS trains its own staff on its duties; the customer trains their own staff on theirs"
    ],
    answer: [3],
    explanation: "The shared control splits along the same line as everything else: AWS ensures its personnel are trained to operate and secure the platform, and the customer ensures their own people know their duties - protecting credentials, handling data, and configuring services correctly.",
    rationales: [
      "Internal policy authorship is customer governance work; AWS does not write customer policies.",
      "AWS does have a training duty - for its own personnel and infrastructure.",
      "The customer's staff are not AWS employees and cannot be trained by AWS.",
      ""
    ],
    services: [],
    tags: ["shared controls", "training"]
  },
  {
    id: "2.1-020",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "medium",
    stem: "As a company moves workloads from self-managed EC2 to container services and finally to serverless platforms, what happens to its share of security responsibilities?",
    options: [
      "It stays constant; the model never changes with service choice",
      "It shrinks, because AWS absorbs the operating-system and platform layers as services become more managed",
      "It grows, because abstracted services are harder to secure",
      "It disappears entirely; serverless platforms need no customer-side security"
    ],
    answer: [1],
    explanation: "This is the direction of the model: the more managed the service, the further down the stack AWS absorbs duties, and the customer's list shrinks toward data, code, and access decisions. It never disappears - even serverless leaves the customer responsible for function code, data, and permissions.",
    rationales: [
      "The model's content changes with every service choice - that is its central lesson.",
      "",
      "Abstraction reduces what the customer must secure, even though new configuration surfaces appear.",
      "Duties shrink but never vanish; code, data, and access decisions always remain."
    ],
    services: [],
    tags: ["shared responsibility", "serverless"]
  },
  {
    id: "2.1-021",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "hard",
    stem: "A regulator asks a company to prove that its data at rest is encrypted. Which statement about that obligation is correct?",
    options: [
      "The customer must configure and verify the encryption; AWS provides the mechanisms and documentation to support the customer's proof",
      "AWS will supply the evidence, since all data on AWS is encrypted by regulation",
      "The regulator must query AWS directly, since encryption is AWS's responsibility",
      "The obligation cannot be met on AWS; the data must be moved on-premises"
    ],
    answer: [0],
    explanation: "Compliance for the customer's data is customer-side: the customer enables encryption, verifies coverage, and produces their own evidence, aided by AWS tooling (encryption defaults, configuration audits) and AWS's published compliance artifacts. AWS does not certify the customer's specific configuration on their behalf.",
    rationales: [
      "",
      "Regulation does not auto-encrypt anything, and compliance evidence gathering is a shared effort led by the customer for their own scope.",
      "Regulators interact with the customer; AWS supplies its own certifications through channels like AWS Artifact, not per-customer audits.",
      "AWS is widely used in regulated industries precisely because customers can meet such obligations."
    ],
    services: ["AWS Artifact"],
    tags: ["shared responsibility", "compliance", "encryption"]
  },
  {
    id: "2.1-022",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "medium",
    stem: "Which layer of network control does the CUSTOMER configure in a VPC?",
    options: [
      "The physical firewalls at the data center edge",
      "The routing tables of AWS's backbone network",
      "The hypervisor's packet-filtering firmware",
      "Security groups, network ACLs, and route tables"
    ],
    answer: [3],
    explanation: "Everything inside the customer's VPC is theirs to define: security groups, NACLs, route tables, subnets, and gateways. The physical edge, AWS's global backbone, and the hypervisor layer beneath the VPC are all AWS-operated.",
    rationales: [
      "Data center edge security is physical infrastructure under AWS's control.",
      "AWS's global backbone routing is invisible to and untouchable by customers.",
      "Hypervisor-level filtering is part of AWS's isolation machinery.",
      ""
    ],
    services: ["Amazon VPC"],
    tags: ["shared responsibility", "vpc", "networking"]
  },
  {
    id: "2.1-023",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "easy",
    stem: "Enabling MFA on the AWS account root user is whose responsibility?",
    options: [
      "The customer's - protecting their own credentials is security IN the cloud",
      "AWS's - the root user is an AWS-managed entity",
      "AWS's, but only during account creation",
      "Nobody's - the root user cannot have MFA"
    ],
    answer: [0],
    explanation: "The root user belongs to the customer's account, and everything about protecting it - MFA, minimal use, locked-away credentials - is customer duty. It is also one of the most-recommended actions in the entire certification.",
    rationales: [
      "",
      "The root user is created in the customer's account and controlled by the customer.",
      "MFA on root is enabled by the customer at any time, not something AWS does once.",
      "MFA on the root user is fully supported and strongly recommended."
    ],
    services: ["AWS IAM"],
    tags: ["shared responsibility", "root user", "mfa"]
  },
  {
    id: "2.1-024",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "medium",
    stem: "Who applies security patches to the hypervisor software that isolates EC2 instances?",
    options: [
      "The customer, using the EC2 Systems console",
      "AWS, as part of its responsibility for the underlying infrastructure",
      "The instance's operating system vendor",
      "A third-party auditor engaged by the customer"
    ],
    answer: [1],
    explanation: "The hypervisor sits below the customer's reach and is a core part of AWS's 'security OF the cloud' duties - patching it, hardening it, and operating it are AWS's work. Customers interact with the guest OS level, never the virtualization layer.",
    rationales: [
      "Customers have no access to the hypervisor layer on EC2.",
      "",
      "The guest OS vendor's patches are the customer's to apply inside instances; they do not reach the hypervisor.",
      "Auditors verify; they do not perform infrastructure patching."
    ],
    services: ["Amazon EC2"],
    tags: ["shared responsibility", "hypervisor"]
  },
  {
    id: "2.1-025",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "medium",
    stem: "A managed service such as Amazon RDS changes the responsibility split mainly by doing what?",
    options: [
      "Transferring the customer's data ownership to AWS",
      "Removing all security duties from both parties",
      "Making the customer responsible for AWS's hardware",
      "Moving operating-system and platform duties from the customer to AWS, while data-level duties stay with the customer"
    ],
    answer: [3],
    explanation: "'Managed' means AWS takes over the layers beneath the customer's data: OS, engine, patching, backups infrastructure. Ownership of the data and all decisions about it remain with the customer - management changes the split, not the ownership.",
    rationales: [
      "Data ownership never transfers to AWS under any service or agreement.",
      "Security duties are redistributed, never eliminated.",
      "Customers become responsible for less on managed services, never for AWS's hardware.",
      ""
    ],
    services: ["Amazon RDS"],
    tags: ["shared responsibility", "managed services"]
  },
  {
    id: "2.1-026",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "hard",
    stem: "Which action demonstrates the CUSTOMER'S half of the shared patch-management control?",
    options: [
      "Applying operating system updates to their EC2 instances",
      "Updating firmware on AWS's core network devices",
      "Patching the hypervisor during a scheduled window",
      "Rotating the encryption keys AWS uses for its own infrastructure"
    ],
    answer: [0],
    explanation: "The customer's patching scope is everything they run: guest operating systems, applications, and their dependencies. AWS's network devices, hypervisor, and infrastructure keys are on the other side of the split and unreachable by customers.",
    rationales: [
      "",
      "Customers cannot and do not patch AWS's network infrastructure.",
      "Hypervisor patching is AWS's infrastructure duty.",
      "AWS-managed infrastructure keys are never rotated by customers."
    ],
    services: ["Amazon EC2"],
    tags: ["shared controls", "patching"]
  },
  {
    id: "2.1-027",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "easy",
    stem: "Which of the following is AWS's responsibility in every Region?",
    options: [
      "Tagging resources for cost allocation",
      "Configuring the customer's VPC route tables",
      "Choosing between RDS and self-managed databases",
      "Maintaining power, cooling, and generators in the data centers"
    ],
    answer: [3],
    explanation: "Facilities infrastructure - power, cooling, generators, and the physical plant - is permanently AWS's side of the model. Tagging, VPC configuration, and service selection are all decisions made inside the customer's account.",
    rationales: [
      "Cost allocation tagging is a customer practice in the customer's account.",
      "Route tables inside a customer VPC are customer-configured.",
      "Service selection is an architectural decision the customer makes.",
      ""
    ],
    services: [],
    tags: ["shared responsibility", "physical security"]
  },
  {
    id: "2.1-028",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "medium",
    stem: "A configuration audit reports that several S3 buckets are publicly readable. Under the shared responsibility model, who must remediate this finding?",
    options: [
      "AWS, because S3 is an AWS-operated service",
      "The customer, because bucket permissions are customer-configured even though AWS provides the audit tooling",
      "AWS, since public access is always a platform defect",
      "The auditor, who must close the finding before the customer acts"
    ],
    answer: [1],
    explanation: "Audit tooling can be provided or enabled by AWS, but the configurations it inspects belong to the customer. Bucket policies, public access settings, and their remediation are customer-side duties; AWS's tools just make the visibility easier.",
    rationales: [
      "The service being AWS-operated does not extend to the customer's permission settings.",
      "",
      "A readable bucket is a customer misconfiguration, not a platform defect.",
      "Auditors report findings; the audited party owns the fix."
    ],
    services: ["Amazon S3"],
    tags: ["shared responsibility", "s3", "remediation"]
  },
  {
    id: "2.1-029",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "hard",
    stem: "How does AWS's own compliance program (audits of its infrastructure, certifications such as SOC and ISO) relate to a customer's compliance obligations?",
    options: [
      "AWS's certifications transfer completely; customers have no compliance work of their own",
      "Compliance is independent - AWS certifications provide no support for customer obligations",
      "Customers must personally audit AWS data centers each year",
      "AWS's certifications cover the infrastructure side, which customers can reference, while customers remain responsible for compliance of their own use of the services"
    ],
    answer: [3],
    explanation: "The compliance layering mirrors the responsibility model: AWS is audited and certified for its infrastructure and operations, and customers can obtain those artifacts (for example via AWS Artifact) to support their own audits - but the customer's application, data handling, and configuration compliance remains theirs to achieve.",
    rationales: [
      "Certifications cover AWS's scope only; the customer's use of the services still needs its own compliance work.",
      "AWS's certifications are precisely what customers build on - they are highly relevant support.",
      "Customers use published artifacts rather than walking through data centers.",
      ""
    ],
    services: ["AWS Artifact"],
    tags: ["shared responsibility", "compliance", "certifications"]
  },
  {
    id: "2.1-030",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "medium",
    stem: "Which statement about the shared responsibility model is TRUE?",
    options: [
      "The customer's share is identical for every AWS service",
      "The model only applies to compute services such as EC2 and Lambda",
      "The model applies to all AWS services, and the customer's share varies by how managed the service is",
      "The model applies only while the customer is on a paid support plan"
    ],
    answer: [2],
    explanation: "The model is universal across all AWS services; what varies is the split. Infrastructure services leave OS and platform duties with the customer; managed and serverless services absorb most or all of those, shrinking the customer's share to data, code, and access decisions.",
    rationales: [
      "The share ranges from nearly everything (EC2) to nearly nothing (Lambda/S3) - identical shares would defeat the model.",
      "It applies to every service category: compute, storage, databases, networking, and beyond.",
      "",
      "Support plans have no bearing on the responsibility split."
    ],
    services: [],
    tags: ["shared responsibility", "fundamentals"]
  },
  {
    id: "2.1-031",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "easy",
    stem: "Protecting IAM user credentials and access keys from compromise is whose responsibility?",
    options: [
      "The customer's - managing their identities and credentials is security IN the cloud",
      "AWS's - AWS automatically rotates all customer access keys",
      "Shared equally - AWS rotates keys every 90 days by default",
      "The identity provider's, with no customer or AWS involvement"
    ],
    answer: [0],
    explanation: "Credentials the customer creates - IAM users, access keys, passwords - are the customer's to protect: rotation policies, least privilege, MFA, and no sharing. AWS secures the platform that stores and evaluates those credentials, but never manages their contents or lifecycle for the customer.",
    rationales: [
      "",
      "AWS does not rotate customer access keys; that is account-side work.",
      "There is no default 90-day automatic rotation of customer keys by AWS.",
      "Even when federating with an external identity provider, the customer owns the integration and credential hygiene."
    ],
    services: ["AWS IAM"],
    tags: ["shared responsibility", "iam", "credentials"]
  },
  {
    id: "2.1-032",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "medium",
    stem: "For an Elastic Load Balancer in front of an application, which division is correct?",
    options: [
      "The customer maintains the load balancer's hardware; AWS writes the routing rules",
      "AWS operates and maintains the load balancer service; the customer configures listeners, rules, and health checks",
      "AWS configures all load balancer settings; the customer merely pays for it",
      "The customer patches the load balancer's firmware; AWS sets its TLS policies"
    ],
    answer: [1],
    explanation: "ELB is fully operated infrastructure on AWS's side - its hosts, scaling, and maintenance. What the customer owns is the configuration on top: listeners, routing rules, target groups, health check definitions, and TLS policy choices.",
    rationales: [
      "Reversed: hardware is AWS's; the rules and listeners are the customer's.",
      "",
      "The customer actively configures listeners, rules, and health checks - it is not a passive product.",
      "Load balancer firmware is AWS's to patch, and TLS policies are chosen in the customer's configuration."
    ],
    services: ["Elastic Load Balancing"],
    tags: ["shared responsibility", "elb"]
  },
  {
    id: "2.1-033",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "medium",
    stem: "A Lambda function written by a developer contains a vulnerable third-party library. Whose responsibility is fixing that vulnerability?",
    options: [
      "AWS's, because Lambda's runtime is maintained by AWS",
      "AWS's, since the shared responsibility model covers code dependencies",
      "The customer's - function code and its dependencies are customer content, even on a fully managed runtime",
      "The library vendor's, with no duty on the customer to update"
    ],
    answer: [2],
    explanation: "Lambda shifts the runtime and infrastructure to AWS, but the function code - including the libraries it bundles - remains customer content with customer-side patching duties. Choosing, updating, and deploying safe dependencies is exactly the slice of responsibility that survives even on serverless.",
    rationales: [
      "AWS maintains the runtime environment, not the code and libraries the customer deploys into it.",
      "The model never extends to customer code dependencies - that is the surviving customer duty.",
      "",
      "Using a vendor's library does not transfer the duty to update it within the customer's application."
    ],
    services: ["AWS Lambda"],
    tags: ["shared responsibility", "lambda", "dependencies"]
  },
  {
    id: "2.1-034",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "hard",
    stem: "Which pairing of duty and responsible party is CORRECT?",
    options: [
      "Securing customer data and access decisions - AWS; operating data center generators - customer",
      "Patching guest operating systems on EC2 - AWS; configuring IAM policies - AWS",
      "Operating the hypervisor - customer; encrypting S3 data - AWS",
      "Operating data center generators - AWS; securing customer data and access decisions - customer"
    ],
    answer: [3],
    explanation: "Facilities work belongs to AWS; everything about the customer's data and access belongs to the customer. The other options shuffle duties across the line - and that shuffle, not the individual facts, is what hard questions test.",
    rationales: [
      "Both halves are reversed: data and access are customer duties; generators are AWS infrastructure.",
      "Guest OS patching is the classic customer duty, and IAM policy configuration is customer work too.",
      "Reversed: the hypervisor is AWS's core isolation duty, and S3 encryption settings are the customer's.",
      ""
    ],
    services: [],
    tags: ["shared responsibility", "matching"]
  },
  {
    id: "2.1-035",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "easy",
    stem: "Which service leaves the customer with the SMALLEST set of security responsibilities?",
    options: [
      "Amazon EC2 with self-managed instances",
      "Amazon EC2 with Auto Scaling groups configured manually",
      "Amazon EKS with self-managed worker nodes",
      "AWS Lambda"
    ],
    answer: [3],
    explanation: "Lambda sits at the extreme managed end: no OS, no runtime maintenance, no fleet, no network stack to configure - the customer writes code, supplies data, and sets permissions. Every option involving EC2 or self-managed nodes leaves infrastructure duties on the customer's side.",
    rationales: [
      "EC2 self-managed leaves the customer with the largest share of any option here.",
      "Auto Scaling automates capacity, but the OS and instances remain customer-managed.",
      "Self-managed nodes add Kubernetes administration to the customer's duties.",
      ""
    ],
    services: ["AWS Lambda", "Amazon EC2", "Amazon EKS"],
    tags: ["shared responsibility", "serverless", "comparison"]
  },
  {
    id: "2.1-036",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "hard",
    stem: "A company compares running its application database as a DynamoDB table versus installing MySQL on EC2 instances it manages. How do the customer's security duties differ?",
    options: [
      "Identical duties in both cases, because both are databases",
      "With EC2 MySQL the customer additionally patches the OS and database, manages capacity, and hardens the instance; with DynamoDB the duties reduce to data design and access policy",
      "DynamoDB imposes more duties, because NoSQL requires manual durability engineering",
      "DynamoDB requires the customer to patch the storage fleet, while EC2 MySQL requires nothing"
    ],
    answer: [1],
    explanation: "This is the responsibility spectrum in one comparison: self-managed EC2 keeps OS patching, database patching, capacity, and hardening on the customer; DynamoDB is serverless, so only data modeling and access permissions remain. Durability on DynamoDB is AWS-engineered, not customer work.",
    rationales: [
      "The service choice changes the split dramatically - that is the lesson of the comparison.",
      "",
      "DynamoDB's durability is handled by AWS automatically; the customer's list is shorter, not longer.",
      "Both halves are reversed: DynamoDB leaves almost no infrastructure duties, EC2 MySQL leaves many."
    ],
    services: ["Amazon DynamoDB", "Amazon EC2"],
    tags: ["shared responsibility", "dynamodb", "comparison"]
  },
  {
    id: "2.1-037",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "medium",
    stem: "Why does a customer never patch the servers underneath Amazon RDS?",
    options: [
      "Because RDS servers require no patching of any kind",
      "Because operating and patching the RDS host fleet is part of AWS's managed-service responsibilities",
      "Because the customer's support plan forbids direct server access",
      "Because RDS runs on the customer's behalf in the customer's own data center"
    ],
    answer: [1],
    explanation: "RDS's managed nature means AWS operates and patches the entire host fleet - OS and engine alike. Customers administer the database, not the machines. (Support plans and data center location are red herrings with no effect on this.)",
    rationales: [
      "The servers are patched constantly - just by AWS, not by customers.",
      "",
      "Support plans affect assistance levels, not patching responsibility or access rights.",
      "RDS runs in AWS's data centers on AWS's infrastructure."
    ],
    services: ["Amazon RDS"],
    tags: ["shared responsibility", "rds"]
  },
  {
    id: "2.1-038",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "easy",
    stem: "A team enables S3 versioning and MFA-delete on its buckets. Under the model, this activity is best described as:",
    options: [
      "An AWS-side infrastructure control being applied on the customer's behalf",
      "A shared control that requires AWS approval for each bucket",
      "A customer-side data protection control - configuration of their own data's safeguards",
      "A platform setting that only AWS support can modify"
    ],
    answer: [2],
    explanation: "Versioning and MFA-delete are protections the customer configures over their own data - squarely security IN the cloud. AWS provides the mechanisms; choosing and enabling them for the data is customer work, done without any approval cycle.",
    rationales: [
      "The control operates over customer data and is applied by the customer.",
      "No AWS approval is involved; these are settings the customer toggles directly.",
      "",
      "These are standard customer-configurable bucket settings."
    ],
    services: ["Amazon S3"],
    tags: ["shared responsibility", "s3", "data protection"]
  },
  {
    id: "2.1-039",
    domain: 2,
    task: "2.1",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO of the following are examples of SHARED controls in the AWS shared responsibility model? (Select TWO.)",
    options: [
      "Patch and configuration management - AWS for its layers, customer for theirs",
      "Security awareness and training - AWS for its staff, customer for theirs",
      "Physical access controls inside AWS data centers",
      "Creating IAM users in the customer's account",
      "Classifying customer data as public or sensitive"
    ],
    answer: [0, 1],
    explanation: "Shared controls are duties with an AWS half and a customer half: patch and configuration management, and awareness and training are the textbook pair. Physical access is purely AWS-side; IAM user creation and data classification are purely customer-side with no AWS component.",
    rationales: [
      "",
      "",
      "Physical data center access has no customer half - it is entirely AWS's.",
      "IAM user creation happens only in the customer's account, by the customer.",
      "Data classification is a customer duty alone - AWS never labels customer data."
    ],
    services: [],
    tags: ["shared controls"]
  },
  {
    id: "2.1-040",
    domain: 2,
    task: "2.1",
    type: "single",
    difficulty: "hard",
    stem: "During an audit, a customer needs evidence about the security of AWS's own operations and facilities. What is the correct path under the shared responsibility model?",
    options: [
      "Request on-site inspection rights in the AWS customer agreement",
      "The customer's auditor must independently test AWS's facilities controls",
      "Obtain AWS's audit certifications and reports (for example through AWS Artifact) covering the infrastructure, then layer the customer's own controls on top",
      "No such evidence exists; customers rely on AWS's public reputation"
    ],
    answer: [2],
    explanation: "AWS publishes its third-party audit reports and certifications, downloadable through AWS Artifact, precisely so customers can satisfy their auditors about the infrastructure layer. The customer then documents their own in-cloud controls - both halves together complete the audit story.",
    rationales: [
      "On-site customer inspections of AWS facilities are not part of the model.",
      "Auditors assess the customer and rely on AWS's published artifacts for the infrastructure scope - they do not re-test AWS's controls.",
      "",
      "Formal audit reports exist and are the sanctioned evidence channel."
    ],
    services: ["AWS Artifact"],
    tags: ["shared responsibility", "compliance", "aws artifact"]
  }
);
