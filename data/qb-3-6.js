window.QBANK = window.QBANK || [];
window.QBANK.push(
  {
    id: "3.6-001",
    domain: 3,
    task: "3.6",
    type: "single",
    difficulty: "easy",
    stem: "A website serves product images and videos to users worldwide. The files must be accessible over HTTP, stored cheaply at any scale, and delivered through CloudFront. Which storage type fits?",
    options: [
      "Amazon S3 object storage",
      "Amazon EBS volumes attached to an instance",
      "An EC2 instance store",
      "Amazon Route 53 records"
    ],
    answer: [0],
    explanation: "S3 is object storage: any amount of data, accessed over HTTP(S) by URL, priced cheaply per GB, and the standard origin for CloudFront distributions - exactly the profile of website media. Block volumes and instance stores attach to single instances rather than serving web objects, and Route 53 handles DNS, not files.",
    rationales: [
      "",
      "EBS block storage attaches to one EC2 instance at a time; it is not a web-serving store.",
      "Instance store is ephemeral scratch space on the instance's host, unsuitable for durable media.",
      "Route 53 manages DNS records, not content files."
    ],
    services: ["Amazon S3"],
    tags: ["s3", "object storage"]
  },
  {
    id: "3.6-002",
    domain: 3,
    task: "3.6",
    type: "single",
    difficulty: "medium",
    stem: "A company's monthly invoices are written once and read roughly once a month, and storage cost matters. Which Amazon S3 storage class fits?",
    options: [
      "S3 Standard",
      "S3 Standard-Infrequent Access",
      "S3 Express One Zone",
      "S3 One Zone-IA, because single-zone storage is always the cheapest and most durable choice"
    ],
    answer: [1],
    explanation: "S3 Standard-IA is priced for data accessed less than once a month: much cheaper storage than Standard, with a per-GB retrieval fee that roughly monthly access easily tolerates. S3 Standard pays a premium for always-hot access, Express One Zone serves latency-critical workloads at higher cost, and One Zone-IA trades resilience for price - the wrong trade for financial records.",
    rationales: [
      "S3 Standard's higher storage price suits frequently accessed data, not monthly reports.",
      "",
      "Express One Zone is the high-performance, highest-cost class - the opposite of the requirement.",
      "One Zone-IA is cheaper but keeps data in a single Availability Zone, reducing resilience for no reason here."
    ],
    services: ["Amazon S3"],
    tags: ["s3 storage classes", "standard-ia"]
  },
  {
    id: "3.6-003",
    domain: 3,
    task: "3.6",
    type: "single",
    difficulty: "medium",
    stem: "A data lake receives files whose access pattern is unpredictable - some months hot, some cold. The team does not want to monitor usage or pay retrieval fees. Which S3 storage class fits?",
    options: [
      "S3 Standard-Infrequent Access",
      "S3 Glacier Deep Archive",
      "S3 Intelligent-Tiering, which moves objects between tiers automatically and charges no retrieval fees",
      "S3 One Zone-IA"
    ],
    answer: [2],
    explanation: "Intelligent-Tiering is purpose-built for unknown or changing access patterns: it monitors each object and moves it between hot and cool tiers automatically, with no retrieval fees and no operational effort. Retrieval-fee classes punish exactly the unpredictable access this workload has.",
    rationales: [
      "Standard-IA charges a retrieval fee per GB fetched, which unpredictable access turns into an unpredictable bill.",
      "Deep Archive is for long-term retention with hour-scale retrievals - far too cold.",
      "",
      "One Zone-IA is a fixed class with reduced resilience; it does not adapt to usage."
    ],
    services: ["Amazon S3"],
    tags: ["s3 storage classes", "intelligent-tiering"]
  },
  {
    id: "3.6-004",
    domain: 3,
    task: "3.6",
    type: "single",
    difficulty: "hard",
    stem: "A regulator requires financial records to be retained for 7 years, accessed essentially never, retrieved only in rare audits where waiting many hours is acceptable, at the lowest possible storage cost. Which S3 storage class fits?",
    options: [
      "S3 Standard",
      "S3 Intelligent-Tiering",
      "S3 Express One Zone",
      "S3 Glacier Deep Archive"
    ],
    answer: [3],
    explanation: "Glacier Deep Archive is the lowest-cost storage class in the cloud, designed for retention measured in years and retrieval measured in hours - the compliance-archive profile. Every other option either costs far more per GB or serves access speeds the requirement does not need.",
    rationales: [
      "Standard costs many times more per GB for always-hot access the records never receive.",
      "Intelligent-Tiering adds monitoring cost for a workload with no hot phase to optimize.",
      "Express One Zone is the highest-performance, highest-price class in the S3 family.",
      ""
    ],
    services: ["Amazon S3"],
    tags: ["s3 storage classes", "glacier deep archive", "compliance"]
  },
  {
    id: "3.6-005",
    domain: 3,
    task: "3.6",
    type: "single",
    difficulty: "easy",
    stem: "What does an S3 lifecycle policy do?",
    options: [
      "It automatically transitions objects to cheaper storage classes as they age, or expires them, according to defined rules",
      "It blocks all public access to a bucket",
      "It versions every object automatically",
      "It replicates the bucket to another account"
    ],
    answer: [0],
    explanation: "Lifecycle rules automate the object's journey through storage classes - for example, Standard now, Standard-IA after 30 days, Deep Archive after 90 - and can expire objects entirely when their retention ends. This is how storage cost optimization happens without anyone moving files by hand.",
    rationales: [
      "",
      "Public access blocking is a separate bucket setting, not lifecycle.",
      "Versioning is its own bucket feature, independent of lifecycle.",
      "Cross-Region or cross-account replication is configured separately."
    ],
    services: ["Amazon S3"],
    tags: ["s3 lifecycle", "cost optimization"]
  },
  {
    id: "3.6-006",
    domain: 3,
    task: "3.6",
    type: "single",
    difficulty: "easy",
    stem: "Which storage type is attached to an Amazon EC2 instance like a virtual hard disk, used for the operating system, applications, and databases?",
    options: [
      "Amazon S3",
      "Amazon EBS (Elastic Block Store)",
      "Amazon EFS",
      "Amazon Route 53"
    ],
    answer: [1],
    explanation: "Amazon EBS provides block storage volumes that attach to EC2 instances and behave like virtual hard drives - boot volumes, application disks, database storage. S3 is object storage accessed over HTTP, EFS is a shared file system, and Route 53 is DNS.",
    rationales: [
      "S3 is accessed by API and URL over the network; it cannot be formatted as an instance's disk.",
      "",
      "EFS mounts as a shared network file system across many instances, not as a single instance's boot disk.",
      "Route 53 is a DNS service."
    ],
    services: ["Amazon EBS"],
    tags: ["ebs", "block storage"]
  },
  {
    id: "3.6-007",
    domain: 3,
    task: "3.6",
    type: "single",
    difficulty: "medium",
    stem: "What happens to data on an EC2 instance store volume when the instance is stopped or fails?",
    options: [
      "It is automatically copied to Glacier",
      "It persists unchanged until manually deleted",
      "It is lost - instance store is ephemeral, physically attached to the host, and does not survive stop or failure",
      "It is encrypted and uploaded to DynamoDB"
    ],
    answer: [2],
    explanation: "Instance store is temporary block storage physically attached to the host machine: ideal for scratch data, buffers, and caches that can be recreated, and worthless for anything that must survive - because stop, termination, or host failure erases it. Durable block storage needs EBS.",
    rationales: [
      "No automatic archival exists for instance store.",
      "Persistence is exactly what instance store does not provide.",
      "",
      "Nothing uploads instance store data anywhere automatically."
    ],
    services: ["Amazon EC2"],
    tags: ["instance store", "ephemeral"]
  },
  {
    id: "3.6-008",
    domain: 3,
    task: "3.6",
    type: "single",
    difficulty: "medium",
    stem: "A database on Amazon EC2 needs its data to survive instance stop, restart, and failure. Which storage choice meets the requirement?",
    options: [
      "Instance store",
      "Amazon EBS volume, which persists independently of the instance's lifecycle",
      "Amazon S3 Standard-IA as the database's live disk",
      "Route 53 hosted zones"
    ],
    answer: [1],
    explanation: "EBS volumes are network-attached block devices with a lifecycle independent of the instance: stop the instance, replace it, and the volume re-attaches with data intact - plus snapshots for backup. Instance store evaporates with the host, and object storage and DNS cannot serve as a live database disk.",
    rationales: [
      "Instance store data is erased on stop and failure.",
      "",
      "S3 cannot be mounted as a block device for a live database.",
      "Hosted zones are DNS constructs, not storage."
    ],
    services: ["Amazon EBS"],
    tags: ["ebs", "persistence"]
  },
  {
    id: "3.6-009",
    domain: 3,
    task: "3.6",
    type: "single",
    difficulty: "medium",
    stem: "A point-in-time backup of an Amazon EBS volume is needed, stored durably and usable to restore the volume or launch new ones. What is the mechanism?",
    options: [
      "An EBS snapshot, stored in Amazon S3",
      "An AMI of the running database process",
      "A Route 53 record of the volume",
      "An S3 lifecycle policy on the volume"
    ],
    answer: [0],
    explanation: "EBS snapshots capture the volume's state at a point in time, stored durably in S3, and can restore volumes or seed new ones in any Availability Zone - the standard EBS backup mechanism. Snapshots are also incremental, so repeated backups stay efficient.",
    rationales: [
      "",
      "An AMI packages an instance's boot configuration; the volume backup mechanism is the snapshot.",
      "DNS records describe names, not disk state.",
      "Lifecycle policies apply to S3 objects, not to EBS volumes."
    ],
    services: ["Amazon EBS"],
    tags: ["ebs", "snapshots", "backup"]
  },
  {
    id: "3.6-010",
    domain: 3,
    task: "3.6",
    type: "single",
    difficulty: "medium",
    stem: "A fleet of Linux instances must share one file system simultaneously - the same files visible to every instance at once, with capacity that grows and shrinks automatically. Which service fits?",
    options: [
      "Amazon EBS, one volume per instance",
      "Amazon EFS, an elastic network file system mountable by many instances concurrently",
      "Instance store",
      "Amazon S3 Express One Zone"
    ],
    answer: [1],
    explanation: "Amazon EFS is managed shared file storage: thousands of instances mount it at once over NFS, and it expands and contracts automatically as files are added and removed. EBS volumes attach to one instance at a time, instance store is ephemeral and local, and S3 is object storage rather than a mountable file system.",
    rationales: [
      "An EBS volume binds to a single instance; sharing requires EFS.",
      "",
      "Instance store cannot even survive a stop, let alone share across a fleet.",
      "Express One Zone stores objects accessed by API, not a POSIX file system mounted by instances."
    ],
    services: ["Amazon EFS"],
    tags: ["efs", "file storage", "shared"]
  },
  {
    id: "3.6-011",
    domain: 3,
    task: "3.6",
    type: "single",
    difficulty: "medium",
    stem: "A company runs Windows workloads that need a managed file share integrated with Active Directory and the SMB protocol. Which service fits?",
    options: [
      "Amazon EFS",
      "Amazon FSx for Windows File Server",
      "Amazon S3 Glacier",
      "AWS Storage Gateway tape gateway"
    ],
    answer: [1],
    explanation: "Amazon FSx for Windows File Server provides fully managed Windows file shares with native SMB access and Active Directory integration - the purpose-built answer for Windows file workloads. EFS is the Linux/NFS-oriented shared file system, Glacier is archive object storage, and the tape gateway is a backup-target interface.",
    rationales: [
      "EFS serves Linux workloads over NFS and does not integrate with Active Directory as a Windows file server.",
      "",
      "Glacier stores archive objects; it is not a live Windows file share.",
      "The tape gateway presents virtual tapes for backup software, not SMB shares."
    ],
    services: ["Amazon FSx"],
    tags: ["fsx", "windows", "file storage"]
  },
  {
    id: "3.6-012",
    domain: 3,
    task: "3.6",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO statements correctly distinguish Amazon EBS from Amazon EFS? (Select TWO.)",
    options: [
      "EBS volumes attach to a single instance at a time; EFS mounts concurrently across many instances",
      "EBS capacity shrinks and grows automatically with usage; EFS volumes are fixed-size",
      "EFS is designed for shared access; EBS is designed for per-instance block devices",
      "EFS is only usable from a single Availability Zone by a single instance",
      "EBS and EFS are two names for the same service"
    ],
    answer: [0, 2],
    explanation: "The distinction is access model: EBS is a block device bound to one instance (in one AZ, with snapshots for portability), while EFS is a shared, elastic file system for concurrent multi-instance access. The automatic-growth property belongs to EFS, not EBS, and the two are entirely different services.",
    rationales: [
      "",
      "Inverted: EFS grows and shrinks automatically; EBS volumes are provisioned at a fixed size.",
      "",
      "EFS is Regional and reachable from multiple zones by many instances.",
      "Different access models, different APIs, different use cases."
    ],
    services: ["Amazon EBS", "Amazon EFS"],
    tags: ["ebs", "efs", "comparison"]
  },
  {
    id: "3.6-013",
    domain: 3,
    task: "3.6",
    type: "single",
    difficulty: "hard",
    stem: "A hybrid workload runs in a data center with limited bandwidth. Its file server should store data in the cloud but serve on-premises users from a local cache of frequently used files. Which service fits?",
    options: [
      "AWS Storage Gateway (file gateway), which caches frequently accessed files locally while storing data in Amazon S3",
      "Amazon EBS, attached to an on-premises server",
      "Amazon Route 53",
      "AWS Backup"
    ],
    answer: [0],
    explanation: "Storage Gateway is the hybrid storage bridge: a file gateway keeps hot files cached on-premises while their authoritative copies live in S3, giving cloud economics and durability with local access speed. EBS cannot attach to on-premises servers, and Route 53 and AWS Backup solve different problems entirely.",
    rationales: [
      "",
      "EBS is an AWS-native block service; it does not attach to customer data center hardware.",
      "Route 53 is DNS and unrelated to file caching.",
      "AWS Backup centralizes backup jobs; it is not a live hybrid file cache."
    ],
    services: ["AWS Storage Gateway"],
    tags: ["storage gateway", "hybrid", "caching"]
  },
  {
    id: "3.6-014",
    domain: 3,
    task: "3.6",
    type: "single",
    difficulty: "medium",
    stem: "A company wants one place to define backup policies - schedules and retention - applied consistently across Amazon EBS volumes, Amazon RDS databases, Amazon EFS file systems, and DynamoDB tables. Which service fits?",
    options: [
      "AWS Backup",
      "Amazon EventBridge",
      "AWS Config",
      "Amazon QuickSight"
    ],
    answer: [0],
    explanation: "AWS Backup is the centralized, policy-driven backup service: define a plan once - what to back up, when, how long to retain - and apply it across the supported services including EBS, RDS, EFS, and DynamoDB. EventBridge routes events, Config audits configuration, QuickSight builds dashboards.",
    rationales: [
      "",
      "EventBridge delivers events on schedules, but it is not a backup engine.",
      "Config records and evaluates resource configurations, not backup execution.",
      "QuickSight is business intelligence visualization."
    ],
    services: ["AWS Backup"],
    tags: ["aws backup", "policies"]
  },
  {
    id: "3.6-015",
    domain: 3,
    task: "3.6",
    type: "single",
    difficulty: "easy",
    stem: "What is the practical difference between Amazon S3 and Amazon EBS?",
    options: [
      "None - they are interchangeable for every workload",
      "S3 stores objects accessed over HTTP at internet scale; EBS provides block volumes attached to a single EC2 instance",
      "EBS is accessed over the internet by URL; S3 is mounted as a disk",
      "S3 is only for databases; EBS is only for websites"
    ],
    answer: [1],
    explanation: "The access model defines them: S3 is object storage - unlimited scale, HTTP access, ideal for files, backups, and static content - while EBS is block storage bound to an instance, formatted like a disk for boot volumes and databases. They are complementary, never interchangeable.",
    rationales: [
      "Different access models, different performance profiles, different failure domains - never interchangeable.",
      "",
      "Both halves of this statement are reversed.",
      "Both services serve a broad range of workloads; neither is tied to one application type."
    ],
    services: ["Amazon S3", "Amazon EBS"],
    tags: ["s3", "ebs", "comparison"]
  },
  {
    id: "3.6-016",
    domain: 3,
    task: "3.6",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO are Amazon S3 storage classes? (Select TWO.)",
    options: [
      "S3 Glacier Flexible Retrieval",
      "S3 Intelligent-Tiering",
      "EBS gp3",
      "EFS Standard",
      "Amazon RDS Single-AZ"
    ],
    answer: [0, 1],
    explanation: "The S3 family includes Standard, Standard-IA, One Zone-IA, Intelligent-Tiering, Express One Zone, Glacier Instant Retrieval, Glacier Flexible Retrieval, and Glacier Deep Archive. gp3 is an EBS volume type, EFS Standard is a file system class, and Single-AZ is an RDS deployment option.",
    rationales: [
      "",
      "",
      "gp3 is an Amazon EBS volume type.",
      "EFS Standard is a storage class of Amazon EFS, not S3.",
      "Single-AZ describes an RDS database deployment."
    ],
    services: ["Amazon S3"],
    tags: ["s3 storage classes"]
  },
  {
    id: "3.6-017",
    domain: 3,
    task: "3.6",
    type: "single",
    difficulty: "medium",
    stem: "An S3 bucket holds user-uploaded videos. Upload traffic is steady, but the team is confused about durability versus availability. Which statement is correct?",
    options: [
      "Durability and availability are two names for the same property",
      "Durability describes how unlikely it is that an object is ever lost; availability describes how reliably the service can respond to requests right now",
      "Availability means data is never lost; durability means the site loads fast",
      "Durability only applies to Glacier classes"
    ],
    answer: [1],
    explanation: "Durability is about not losing data over time - S3 Standard's 11 nines of durability means odds of object loss are astronomically small, achieved by redundant storage across multiple facilities. Availability is about being able to reach the service when you call it, year in, year out. Both matter, and they measure different things.",
    rationales: [
      "They are distinct metrics measuring data loss and service reachability respectively.",
      "",
      "Both halves are swapped: durability is about not losing data; availability is about access.",
      "Every S3 storage class carries a durability guarantee; the classes differ mainly in availability, price, and retrieval speed."
    ],
    services: ["Amazon S3"],
    tags: ["s3", "durability", "availability"]
  },
  {
    id: "3.6-018",
    domain: 3,
    task: "3.6",
    type: "single",
    difficulty: "hard",
    stem: "A team stores daily database exports in S3. Last week's export is accessed often; exports older than 30 days are almost never touched; after 1 year they must be retained but never accessed. What is the most cost-effective configuration?",
    options: [
      "Everything in S3 Standard forever",
      "An S3 lifecycle policy: begin in Standard, transition to Standard-IA at 30 days, and to Glacier Deep Archive at 365 days",
      "Everything in Glacier Deep Archive from day one",
      "Everything in S3 Express One Zone"
    ],
    answer: [1],
    explanation: "This is the lifecycle policy pattern exactly: match each phase of the data's life to the cheapest class that still meets its access needs - hot in Standard, cool in Standard-IA, and effectively frozen in Deep Archive once access stops. Uniform Standard wastes money; uniform Deep Archive would make last week's popular exports painfully slow to reach; Express One Zone is the most expensive option in the family.",
    rationales: [
      "Paying hot-storage prices for year-old, never-touched data is the cost problem lifecycle policies exist to solve.",
      "",
      "Deep Archive retrievals take hours - unusable for exports users are reading this week.",
      "The highest-cost, single-zone class is wrong for every phase of this data's life."
    ],
    services: ["Amazon S3"],
    tags: ["s3 lifecycle", "cost optimization", "storage classes"]
  },
  {
    id: "3.6-019",
    domain: 3,
    task: "3.6",
    type: "single",
    difficulty: "easy",
    stem: "Which statement about S3 storage capacity is correct?",
    options: [
      "Buckets must be pre-sized, like a disk volume",
      "Storage must be reserved 30 days in advance",
      "S3 scales automatically - store essentially unlimited data without provisioning capacity",
      "Each bucket is limited to 1 GB"
    ],
    answer: [2],
    explanation: "S3 is elastic by design: buckets hold as little or as much as needed - bytes to petabytes and beyond - with no capacity to provision and pricing per GB used. Pre-sizing, reservations, and small caps describe nothing about S3.",
    rationales: [
      "There is no size to choose when creating a bucket.",
      "No reservation step exists; you pay for what you store.",
      "",
      "Buckets hold virtually unlimited objects and total data."
    ],
    services: ["Amazon S3"],
    tags: ["s3", "elasticity"]
  },
  {
    id: "3.6-020",
    domain: 3,
    task: "3.6",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO are block or file storage services rather than object storage? (Select TWO.)",
    options: [
      "Amazon EBS",
      "Amazon EFS",
      "Amazon S3",
      "Amazon S3 Glacier Deep Archive",
      "Amazon Route 53"
    ],
    answer: [0, 1],
    explanation: "EBS (block volumes for single instances) and EFS (shared file system) are the block and file storage options; S3 and Glacier are object storage, and Route 53 is DNS. Object versus block versus file is one of the exam's core distinctions.",
    rationales: [
      "",
      "",
      "S3 is the object storage service itself.",
      "Glacier Deep Archive is an object storage class within S3.",
      "Route 53 provides DNS, not storage of any kind."
    ],
    services: ["Amazon EBS", "Amazon EFS"],
    tags: ["block storage", "file storage", "object storage"]
  },
  {
    id: "3.6-021",
    domain: 3,
    task: "3.6",
    type: "single",
    difficulty: "medium",
    stem: "A high-performance computing cluster needs a file system optimized for massive parallel throughput with sub-millisecond latencies for its compute nodes. Which managed file service fits?",
    options: [
      "Amazon FSx for Lustre",
      "Amazon S3 Glacier Flexible Retrieval",
      "Amazon Route 53",
      "Amazon ElastiCache"
    ],
    answer: [0],
    explanation: "FSx for Lustre delivers the parallel, high-throughput, low-latency file performance HPC workloads demand, and can even source its data from S3. Glacier is archive storage, Route 53 is DNS, and ElastiCache is an in-memory data cache rather than a file system.",
    rationales: [
      "",
      "Glacier Flexible Retrieval stores archives retrieved in minutes to hours - the opposite of live HPC I/O.",
      "Route 53 resolves domain names.",
      "ElastiCache caches application data in memory; it is not a file system."
    ],
    services: ["Amazon FSx"],
    tags: ["fsx", "lustre", "hpc"]
  },
  {
    id: "3.6-022",
    domain: 3,
    task: "3.6",
    type: "single",
    difficulty: "hard",
    stem: "An architect must choose storage for three workloads: (1) a boot disk for each web server, (2) shared config files read by a 40-instance Linux fleet, (3) 10 PB of compliance archives untouched for years. Which mapping is correct?",
    options: [
      "(1) EBS, (2) EFS, (3) S3 Glacier Deep Archive",
      "(1) S3 Standard, (2) EBS, (3) EFS",
      "(1) EFS, (2) instance store, (3) S3 Standard",
      "(1) instance store, (2) EBS, (3) DynamoDB"
    ],
    answer: [0],
    explanation: "Boot disks are block devices: EBS. Shared read-mostly files across a fleet: EFS. Petabytes of never-touched retention at minimum cost: Deep Archive. Each other option assigns at least one workload to storage whose access model simply does not fit - instance store for a boot disk, for instance, would erase the operating system on the first stop.",
    rationales: [
      "",
      "S3 cannot serve as a boot disk, and EFS is not a per-instance volume; only the archive answer is close but the first two are wrong.",
      "Instance store for a boot disk loses the OS on every stop, and S3 Standard is vastly overpriced for cold archives.",
      "Instance store erases on stop, EBS does not share across 40 instances, and DynamoDB is a database, not an archive."
    ],
    services: ["Amazon EBS", "Amazon EFS", "Amazon S3"],
    tags: ["storage selection", "comparison"]
  }
);
