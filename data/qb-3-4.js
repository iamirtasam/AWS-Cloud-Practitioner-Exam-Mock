window.QBANK = window.QBANK || [];
window.QBANK.push(
  {
    id: "3.4-001",
    domain: 3,
    task: "3.4",
    type: "single",
    difficulty: "easy",
    stem: "A startup wants a relational database but does not want to handle operating system patching, backups, or failover configuration. Which choice fits best?",
    options: [
      "Install MySQL on an Amazon EC2 instance and maintain it themselves",
      "Use Amazon RDS, which automates patching, backups, and failover",
      "Store the data as JSON files in an Amazon S3 bucket",
      "Use Amazon Route 53 to host the database records"
    ],
    answer: [1],
    explanation: "Amazon RDS is the managed relational database service: it handles provisioning, OS and database patching, automated backups, and Multi-AZ failover so the team manages data, not servers. Self-managing MySQL on EC2 hands all of that work back, and S3 and Route 53 are storage and DNS services, not databases.",
    rationales: [
      "Self-hosting on EC2 means every patch, backup, and failover decision is the team's job - exactly the burden they want to shed.",
      "",
      "S3 stores objects; it cannot run SQL queries or manage relational data.",
      "Route 53 is DNS; it has no database capability."
    ],
    services: ["Amazon RDS"],
    tags: ["rds", "managed databases"]
  },
  {
    id: "3.4-002",
    domain: 3,
    task: "3.4",
    type: "single",
    difficulty: "medium",
    stem: "When would running a database on a self-managed Amazon EC2 instance be the better choice over a managed database service?",
    options: [
      "When the team wants AWS to handle patching and backups for them",
      "When the application needs a database engine or OS-level customization that managed services do not support",
      "When the team wants the lowest possible operational responsibility",
      "When the database must be accessible from the internet"
    ],
    answer: [1],
    explanation: "The trade-off is control versus convenience: EC2-hosted databases make sense when something about the setup - an unsupported engine version, OS-level agents, exotic configuration - exceeds what the managed service allows. In every other respect EC2 hosting means the customer inherits patching, backups, and failover work.",
    rationales: [
      "Handing patching and backups to AWS is the argument FOR managed services, not for EC2 hosting.",
      "",
      "Least operational responsibility is the managed service's whole value proposition.",
      "Internet accessibility is a networking configuration available to both options."
    ],
    services: ["Amazon EC2", "Amazon RDS"],
    tags: ["ec2-hosted vs managed", "database selection"]
  },
  {
    id: "3.4-003",
    domain: 3,
    task: "3.4",
    type: "single",
    difficulty: "easy",
    stem: "A large e-commerce platform needs a MySQL-compatible relational engine with higher performance than standard MySQL, storage that grows automatically, and up to 15 read replicas for reporting traffic. Which service fits?",
    options: [
      "Amazon DynamoDB",
      "Amazon ElastiCache",
      "Amazon Aurora",
      "Amazon Redshift"
    ],
    answer: [2],
    explanation: "Amazon Aurora is AWS's MySQL- and PostgreSQL-compatible relational engine: it delivers significantly higher throughput than stock MySQL on the same hardware, grows its storage automatically, and supports up to 15 Aurora Replicas for read scaling. DynamoDB is NoSQL, ElastiCache is a cache, and Redshift is a data warehouse.",
    rationales: [
      "DynamoDB is a key-value NoSQL service, not a MySQL-compatible relational engine.",
      "ElastiCache accelerates reads by caching, but it is not the system of record.",
      "",
      "Redshift is a petabyte-scale analytics data warehouse, not an operational MySQL-compatible engine."
    ],
    services: ["Amazon Aurora"],
    tags: ["aurora", "rds family"]
  },
  {
    id: "3.4-004",
    domain: 3,
    task: "3.4",
    type: "single",
    difficulty: "medium",
    stem: "A mobile game needs a database that scales to millions of simultaneous players with unpredictable traffic, stores user profiles as flexible key-value data, requires no schema design, and delivers single-digit millisecond responses. Which service fits?",
    options: [
      "Amazon DynamoDB",
      "Amazon Aurora MySQL",
      "Amazon RDS for Oracle",
      "AWS Schema Conversion Tool"
    ],
    answer: [0],
    explanation: "Amazon DynamoDB is serverless NoSQL: key-value and document data, no schema to define, virtually unlimited throughput scaling, and consistent single-digit millisecond latency - built for exactly the unpredictable scale of consumer apps and games. Relational engines add schema and scaling ceilings the requirement does not want.",
    rationales: [
      "",
      "Aurora is a relational engine: schema-bound and scaled by instance sizing rather than serverless throughput.",
      "Oracle on RDS carries licensing cost plus the same relational constraints.",
      "The Schema Conversion Tool converts database schemas during migration; it stores nothing."
    ],
    services: ["Amazon DynamoDB"],
    tags: ["dynamodb", "nosql", "serverless"]
  },
  {
    id: "3.4-005",
    domain: 3,
    task: "3.4",
    type: "single",
    difficulty: "medium",
    stem: "A web application's database is hammered by repeated identical read queries for popular product pages, and latency suffers. Which service relieves that load cheaply?",
    options: [
      "AWS Database Migration Service",
      "Amazon ElastiCache, caching frequent query results in memory",
      "Amazon S3 Glacier, archiving old rows",
      "AWS Direct Connect, adding a faster network link"
    ],
    answer: [1],
    explanation: "Amazon ElastiCache is the managed in-memory cache (Redis or Memcached): frequently read results are served from RAM in sub-millisecond time instead of hitting the database repeatedly. This is the textbook cache-aside pattern for read-heavy workloads. Migration, archival, and network links do not change how often the database is queried.",
    rationales: [
      "DMS moves databases between locations and engines; it does not reduce query frequency.",
      "",
      "Glacier is archive storage for compliance and cold data, not a live query cache.",
      "A faster link does not help if every request still requires the database to compute the answer."
    ],
    services: ["Amazon ElastiCache"],
    tags: ["elasticache", "caching"]
  },
  {
    id: "3.4-006",
    domain: 3,
    task: "3.4",
    type: "single",
    difficulty: "medium",
    stem: "A team is migrating its on-premises PostgreSQL database to AWS and wants minimal downtime, with the source database remaining fully operational while data is continuously replicated to the target. Which service fits?",
    options: [
      "AWS Database Migration Service (AWS DMS)",
      "Amazon ElastiCache",
      "Amazon S3 Transfer Acceleration",
      "AWS CloudFormation"
    ],
    answer: [0],
    explanation: "AWS DMS replicates data from a live source database to a target - on-premises to AWS, or between engines - using continuous change capture so the application keeps running during the migration and the cutover is brief. It is purpose-built for exactly the 'move without stopping the business' requirement.",
    rationales: [
      "",
      "ElastiCache is an in-memory cache, not a replication or migration tool.",
      "Transfer Acceleration speeds uploads into S3 over the internet; it does not replicate databases.",
      "CloudFormation provisions infrastructure from templates; it does not move data."
    ],
    services: ["AWS DMS"],
    tags: ["dms", "migration"]
  },
  {
    id: "3.4-007",
    domain: 3,
    task: "3.4",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO statements about Amazon RDS Multi-AZ deployments are correct? (Select TWO.)",
    options: [
      "A standby copy runs in another Availability Zone and takes over automatically if the primary fails",
      "It is primarily a read-scaling feature that spreads queries across copies",
      "Failover happens automatically without manual intervention",
      "It requires the application to be rewritten for a different database engine",
      "It removes the need for database backups"
    ],
    answer: [0, 2],
    explanation: "Multi-AZ is the high-availability configuration: RDS maintains a standby in a second Availability Zone and fails over to it automatically when the primary has problems. Read scaling is the job of read replicas - a different feature that is frequently confused with Multi-AZ on exams.",
    rationales: [
      "",
      "That describes read replicas; Multi-AZ's standby does not serve traffic in normal operation.",
      "",
      "Multi-AZ works with the same engine; no rewrite is involved.",
      "Backups remain essential; high availability and backup are separate protections."
    ],
    services: ["Amazon RDS"],
    tags: ["rds", "multi-az", "high availability"]
  },
  {
    id: "3.4-008",
    domain: 3,
    task: "3.4",
    type: "single",
    difficulty: "hard",
    stem: "A reporting workload is slowing the production database because heavy analytical queries run against it during business hours. Which RDS feature lets the reports run against a separate copy while production stays fast?",
    options: [
      "Multi-AZ standby instance",
      "A read replica that serves the reporting queries independently",
      "Turning off automated backups during business hours",
      "Deleting the analytics tables"
    ],
    answer: [1],
    explanation: "A read replica is an independently queryable copy kept current by replication: analytical and reporting queries move to it, and the production primary is freed for transactional work. The Multi-AZ standby is reserved for failure and does not serve reads in normal operation - the classic exam confusion.",
    rationales: [
      "The Multi-AZ standby exists for failover and does not accept read traffic; using it for reports is the common mix-up.",
      "",
      "Backups protect data; suspending them solves nothing about query load and adds risk.",
      "Deleting data the business needs is not a performance strategy."
    ],
    services: ["Amazon RDS"],
    tags: ["read replicas", "rds"]
  },
  {
    id: "3.4-009",
    domain: 3,
    task: "3.4",
    type: "single",
    difficulty: "medium",
    stem: "A company is migrating from an on-premises Oracle database to Amazon Aurora PostgreSQL. Which tools make up the correct migration pair?",
    options: [
      "AWS DMS alone, with no preparation of the target",
      "AWS SCT to convert the schema to the target engine, then AWS DMS to move the data",
      "Amazon ElastiCache followed by Amazon QuickSight",
      "AWS Backup to copy the database and restore it by hand"
    ],
    answer: [1],
    explanation: "Changing engines is a heterogeneous migration: the AWS Schema Conversion Tool first converts the Oracle schema to PostgreSQL-compatible form, and DMS then moves the data with minimal downtime. DMS can move data between engines, but the schema conversion is what SCT exists for.",
    rationales: [
      "Cross-engine moves need schema conversion; DMS alone would land data in a mismatched target.",
      "",
      "ElastiCache is a cache and QuickSight is business intelligence; neither migrates anything.",
      "Backup-and-restore is slow, downtime-heavy, and skips schema conversion entirely."
    ],
    services: ["AWS DMS", "AWS SCT", "Amazon Aurora"],
    tags: ["dms", "sct", "heterogeneous migration"]
  },
  {
    id: "3.4-010",
    domain: 3,
    task: "3.4",
    type: "single",
    difficulty: "medium",
    stem: "Which pairing of workload and database service is correct?",
    options: [
      "Storing sessions and leaderboards with microsecond reads - Amazon RDS for SQL Server",
      "A finance application requiring complex joins and strict relational integrity - Amazon RDS",
      "A content delivery cache for large video files - Amazon DynamoDB",
      "An email marketing engine - Amazon ElastiCache"
    ],
    answer: [1],
    explanation: "Relational integrity, joins, and transactional consistency are the relational engine's home ground, and RDS is the managed way to run one. Session data at microsecond speed belongs in ElastiCache, video delivery belongs to a CDN with object storage, and email sending is a dedicated application service.",
    rationales: [
      "Session and leaderboard data with microsecond reads is the ElastiCache use case, not a relational engine.",
      "",
      "Video delivery is CloudFront with S3 storage, not a NoSQL database concern.",
      "ElastiCache caches data in memory; it does not send marketing email."
    ],
    services: ["Amazon RDS", "Amazon ElastiCache"],
    tags: ["database selection"]
  },
  {
    id: "3.4-011",
    domain: 3,
    task: "3.4",
    type: "single",
    difficulty: "easy",
    stem: "What is Amazon DynamoDB's data model?",
    options: [
      "Relational tables joined with foreign keys",
      "A hierarchical file system with folders",
      "A key-value and document store, schemaless apart from a primary key",
      "A tape-based archive format"
    ],
    answer: [2],
    explanation: "DynamoDB is NoSQL: items are retrieved by primary key, attributes are flexible from item to item, and there is no schema to migrate when data shapes evolve. That flexibility plus serverless scaling is what separates it from the relational engines.",
    rationales: [
      "Joins and foreign keys are relational concepts; DynamoDB is built around key access.",
      "File-system hierarchy is a storage service concept, not DynamoDB's model.",
      "",
      "Archive formats belong to storage classes like Glacier, not databases."
    ],
    services: ["Amazon DynamoDB"],
    tags: ["dynamodb", "nosql"]
  },
  {
    id: "3.4-012",
    domain: 3,
    task: "3.4",
    type: "single",
    difficulty: "hard",
    stem: "An application stores user sessions in ElastiCache, and an engineer proposes deleting the production database because 'the cache already has the data'. What is wrong with the proposal?",
    options: [
      "Nothing - ElastiCache is designed as the permanent system of record",
      "A cache is an accelerator, not a system of record; entries can be evicted or lost, and the authoritative data must live in a durable database",
      "The problem is only that ElastiCache does not support encryption",
      "The sessions would need to be moved to Route 53 instead"
    ],
    answer: [1],
    explanation: "Caches hold copies for speed and are built to evict entries under memory pressure; treating ElastiCache as the system of record risks permanent data loss. The durable database remains the source of truth, with the cache layered in front for performance - the roles must not be swapped.",
    rationales: [
      "In-memory caches explicitly trade durability for speed; they are not systems of record.",
      "",
      "ElastiCache supports encryption; durability, not encryption, is the flaw in the proposal.",
      "Route 53 is DNS and unrelated to session storage."
    ],
    services: ["Amazon ElastiCache"],
    tags: ["elasticache", "caching", "durability"]
  },
  {
    id: "3.4-013",
    domain: 3,
    task: "3.4",
    type: "single",
    difficulty: "easy",
    stem: "Which database engines can Amazon Aurora emulate with high compatibility?",
    options: [
      "MongoDB and Cassandra",
      "MySQL and PostgreSQL",
      "Oracle and SQL Server",
      "Redis and Memcached"
    ],
    answer: [1],
    explanation: "Aurora comes in two editions - MySQL-compatible and PostgreSQL-compatible - delivering those engines' behavior with Aurora's performance and storage architecture. MongoDB, Oracle, and Redis emulation are not Aurora offerings; Oracle and SQL Server run on standard RDS, and Redis and Memcached run on ElastiCache.",
    rationales: [
      "Document and wide-column stores are different NoSQL families, not Aurora editions.",
      "",
      "Oracle and SQL Server are available on RDS itself, not emulated by Aurora.",
      "Those are ElastiCache's two caching engines."
    ],
    services: ["Amazon Aurora"],
    tags: ["aurora", "engines"]
  },
  {
    id: "3.4-014",
    domain: 3,
    task: "3.4",
    type: "single",
    difficulty: "medium",
    stem: "A global application stores its data in Amazon DynamoDB, and the team is worried about scaling because traffic could grow tenfold in weeks. Why is DynamoDB a low-stress answer here?",
    options: [
      "Because it is serverless, scaling throughput and storage automatically without instances to size",
      "Because the team must pre-warm it like a physical server",
      "Because it runs on a single large instance that AWS upgrades nightly",
      "Because it converts to a relational engine under load"
    ],
    answer: [0],
    explanation: "DynamoDB is serverless NoSQL: capacity and storage scale automatically with demand - including on-demand mode for unpredictable spikes - and there are no instances to size, patch, or babysit. That operational profile is precisely why it suits explosive-growth applications.",
    rationales: [
      "",
      "Pre-warming is a technique for some managed services under known spikes; DynamoDB's design goal is not needing it.",
      "DynamoDB is distributed across many servers by AWS; there is no single instance to upgrade.",
      "It stays a NoSQL service regardless of load."
    ],
    services: ["Amazon DynamoDB"],
    tags: ["dynamodb", "scaling"]
  },
  {
    id: "3.4-015",
    domain: 3,
    task: "3.4",
    type: "single",
    difficulty: "easy",
    stem: "What does Amazon ElastiCache primarily improve?",
    options: [
      "Application read latency by serving frequent results from in-memory cache instead of the database",
      "The durability of archived data",
      "The strength of password policies",
      "Domain name resolution speed"
    ],
    answer: [0],
    explanation: "ElastiCache manages Redis and Memcached clusters that hold hot data in RAM, so repeated reads return in microseconds without touching the primary database - the standard fix for read-heavy latency. Archives, password policies, and DNS are other services' jobs entirely.",
    rationales: [
      "",
      "Archive durability belongs to storage classes such as Glacier Deep Archive.",
      "Password policies are an identity and access concern.",
      "DNS resolution is Route 53's responsibility."
    ],
    services: ["Amazon ElastiCache"],
    tags: ["elasticache", "caching"]
  },
  {
    id: "3.4-016",
    domain: 3,
    task: "3.4",
    type: "single",
    difficulty: "hard",
    stem: "An application currently calls a database directly for every request. The architect adds ElastiCache in front of it. What is the key new responsibility the application takes on?",
    options: [
      "The application must now manage the cache's underlying server patching",
      "The application must apply a cache strategy - what to cache, and how and when to invalidate entries so users never see stale data",
      "The application must convert all SQL to JSON before caching",
      "The application must provision the cache's storage volumes"
    ],
    answer: [1],
    explanation: "Caching moves complexity into the application: it decides what to cache, when to read from cache versus database, and how to invalidate or expire entries when underlying data changes - get this wrong and users see stale results. The ElastiCache service itself still handles servers, patching, and infrastructure.",
    rationales: [
      "ElastiCache is managed; patching stays with AWS regardless of how the application uses it.",
      "",
      "Serialization format is an implementation detail, not the core new responsibility.",
      "Provisioning storage volumes is not part of using a managed cache."
    ],
    services: ["Amazon ElastiCache"],
    tags: ["elasticache", "caching", "trade-offs"]
  },
  {
    id: "3.4-017",
    domain: 3,
    task: "3.4",
    type: "single",
    difficulty: "easy",
    stem: "Which service is AWS's managed relational database offering that supports multiple engines including MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server?",
    options: [
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon EFS",
      "Amazon QuickSight"
    ],
    answer: [1],
    explanation: "Amazon RDS is the managed relational service spanning MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server, automating the operational work for whichever engine the application needs. DynamoDB is NoSQL, EFS is a file system, QuickSight is business intelligence dashboards.",
    rationales: [
      "DynamoDB is NoSQL key-value, not a relational engine host.",
      "",
      "EFS is shared file storage for compute instances.",
      "QuickSight visualizes data; it does not host databases."
    ],
    services: ["Amazon RDS"],
    tags: ["rds", "engines"]
  },
  {
    id: "3.4-018",
    domain: 3,
    task: "3.4",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO are characteristic strengths of Amazon Aurora compared with standard MySQL on self-managed servers? (Select TWO.)",
    options: [
      "Its storage grows automatically as the database grows, without pre-provisioning volumes",
      "It only supports a single read replica",
      "It replicates data across multiple Availability Zones for durability and failover by design",
      "It requires manual failover coordinated by the operations team",
      "It is incompatible with MySQL tooling and drivers"
    ],
    answer: [0, 2],
    explanation: "Aurora's architecture stores six copies of data across three Availability Zones and grows storage automatically in increments as data grows - both built in, not configured by hand. It supports far more than one replica, fails over automatically, and is deliberately compatible with MySQL tooling.",
    rationales: [
      "",
      "Aurora supports up to 15 read replicas.",
      "",
      "Automatic failover is one of Aurora's headline features.",
      "High MySQL compatibility is central to Aurora's design."
    ],
    services: ["Amazon Aurora"],
    tags: ["aurora"]
  },
  {
    id: "3.4-019",
    domain: 3,
    task: "3.4",
    type: "single",
    difficulty: "medium",
    stem: "A finance application stores accounts, transactions, and balances, and requires strict ACID transactions with complex joins across tables. Which service class fits?",
    options: [
      "A relational database such as Amazon RDS or Amazon Aurora",
      "Amazon S3 with lifecycle policies",
      "Amazon ElastiCache in Memcached mode",
      "Amazon CloudFront with Lambda@Edge"
    ],
    answer: [0],
    explanation: "ACID guarantees, structured schemas, and multi-table joins are the defining strengths of relational databases, which is why financial systems almost universally use them - managed here by RDS or Aurora. Object storage, caching, and CDN layers do not provide transactional semantics.",
    rationales: [
      "",
      "S3 stores objects and has no query or transaction engine.",
      "Memcached is a pure cache without transactions or joins.",
      "A CDN delivers content at the edge and cannot execute relational queries."
    ],
    services: ["Amazon RDS", "Amazon Aurora"],
    tags: ["database selection", "relational"]
  },
  {
    id: "3.4-020",
    domain: 3,
    task: "3.4",
    type: "single",
    difficulty: "medium",
    stem: "During a DMS migration, what does 'the source database remains operational' mean in practice?",
    options: [
      "The source must be shut down before data starts moving",
      "Ongoing changes on the source are captured and applied to the target, so the application can keep running until a short cutover",
      "The source is converted into an ElastiCache cluster",
      "Only schema, and never data, can be migrated"
    ],
    answer: [1],
    explanation: "DMS's minimal-downtime approach replicates the initial load and then continuously streams ongoing changes to the target, so the application keeps using the source until the business is ready for a brief cutover. This is precisely why DMS exists, and it is the opposite of the dump-and-restore approach.",
    rationales: [
      "Shutting down the source is the downtime-heavy pattern DMS is designed to avoid.",
      "",
      "DMS moves data; it does not convert databases into caches.",
      "DMS migrates both schema context and data; data is certainly included."
    ],
    services: ["AWS DMS"],
    tags: ["dms", "migration"]
  },
  {
    id: "3.4-021",
    domain: 3,
    task: "3.4",
    type: "single",
    difficulty: "hard",
    stem: "A team wants in-memory caching for session state and must choose an engine. They need rich data structures, replication, and persistence options. Which ElastiCache engine fits?",
    options: [
      "Redis, which offers those capabilities",
      "Memcached, which offers those capabilities",
      "MySQL, because it can be configured as a cache",
      "DynamoDB, because sessions are key-value data"
    ],
    answer: [0],
    explanation: "Within ElastiCache, Redis is the feature-rich engine: data structures such as sorted sets, replication, and optional persistence. Memcached is deliberately simpler - a fast, pure cache without those features. MySQL is a database, and DynamoDB is a durable NoSQL store rather than an in-memory cache.",
    rationales: [
      "",
      "Memcached is the simpler engine: no replication or persistence by design.",
      "MySQL is a relational database, not an ElastiCache engine.",
      "DynamoDB is a durable database, not an in-memory cache layer."
    ],
    services: ["Amazon ElastiCache"],
    tags: ["elasticache", "redis", "memcached"]
  },
  {
    id: "3.4-022",
    domain: 3,
    task: "3.4",
    type: "multi",
    difficulty: "easy",
    stem: "Which TWO services help move databases into AWS? (Select TWO.)",
    options: [
      "AWS Database Migration Service",
      "AWS Schema Conversion Tool",
      "Amazon Polly",
      "Amazon Connect",
      "AWS IoT Core"
    ],
    answer: [0, 1],
    explanation: "DMS performs the data migration with minimal downtime, and SCT converts schemas when the target engine differs from the source - the standard migration pair. Polly speaks, Connect runs contact centers, and IoT Core connects devices; none of them touch database migration.",
    rationales: [
      "",
      "",
      "Polly is text-to-speech.",
      "Connect is a cloud contact center service.",
      "IoT Core manages connected devices and their messages."
    ],
    services: ["AWS DMS", "AWS SCT"],
    tags: ["dms", "sct", "migration"]
  }
);
