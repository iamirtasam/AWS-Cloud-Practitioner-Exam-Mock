window.QBANK = window.QBANK || [];
window.QBANK.push(
  {
    id: "3.1-001",
    domain: 3,
    task: "3.1",
    type: "single",
    difficulty: "easy",
    stem: "A cloud intern is new to AWS and wants to explore what services exist and try a small task using a visual, point-and-click interface. Which access method fits best?",
    options: [
      "AWS Command Line Interface (AWS CLI)",
      "Infrastructure as code with AWS CloudFormation",
      "AWS Management Console",
      "AWS SDKs embedded in an application"
    ],
    answer: [2],
    explanation: "The AWS Management Console is the browser-based, point-and-click interface built for interactive, human-driven work - exploring services, checking dashboards, and performing one-off tasks. The CLI and SDKs are for scripting and application code, and infrastructure as code is for repeatable provisioning, none of which matches 'visual, point-and-click'.",
    rationales: [
      "The CLI is a terminal tool for typed or scripted commands, not a visual interface.",
      "CloudFormation provisions resources from templates; it is for repeatable provisioning, not interactive exploration.",
      "",
      "SDKs are for calling AWS from inside application code, not for hands-on browsing."
    ],
    services: ["AWS Management Console"],
    tags: ["access methods", "console"]
  },
  {
    id: "3.1-002",
    domain: 3,
    task: "3.1",
    type: "single",
    difficulty: "easy",
    stem: "A systems administrator wants to start and stop a set of Amazon EC2 instances every evening using a scheduled script on a Linux server. Which access method fits best?",
    options: [
      "AWS CLI invoked from the script",
      "AWS Management Console",
      "The AWS Console mobile application",
      "AWS re:Post"
    ],
    answer: [0],
    explanation: "The AWS CLI is a command-line tool that can be called from shell scripts and schedulers, making it the natural fit for unattended, automated tasks. The console requires a human clicking through pages, the mobile app is for monitoring from a phone, and re:Post is a community Q&A site.",
    rationales: [
      "",
      "The console requires manual, interactive clicks and cannot run unattended from a cron job.",
      "The console mobile application is for monitoring and alerts on a phone, not scripted automation.",
      "AWS re:Post is a community question-and-answer site, not a tool for controlling resources."
    ],
    services: ["AWS CLI"],
    tags: ["access methods", "cli", "automation"]
  },
  {
    id: "3.1-003",
    domain: 3,
    task: "3.1",
    type: "single",
    difficulty: "medium",
    stem: "A startup is building a Node.js web application that must upload files to Amazon S3 from within its own backend code whenever a customer submits a form. Which access method is designed for this?",
    options: [
      "AWS Management Console",
      "AWS SDK for JavaScript",
      "The AWS CLI run manually by an operator",
      "AWS Marketplace"
    ],
    answer: [1],
    explanation: "AWS SDKs exist precisely so application code can call AWS services programmatically in the language of the app - JavaScript, Python, Java, and others. The console and a manually run CLI both require a human in the loop, which does not work for uploads triggered by customer actions.",
    rationales: [
      "The console is a human interface and cannot be called from application code.",
      "",
      "A manually run CLI still depends on an operator typing commands, not on the application itself.",
      "AWS Marketplace is a catalog of third-party software, not an access method for AWS services."
    ],
    services: ["AWS SDK", "Amazon S3"],
    tags: ["access methods", "sdk"]
  },
  {
    id: "3.1-004",
    domain: 3,
    task: "3.1",
    type: "single",
    difficulty: "medium",
    stem: "An engineering team provisions identical development, test, and production environments every sprint. Manual console setup has caused configuration differences between the environments. Which approach makes provisioning repeatable and consistent?",
    options: [
      "Write a detailed runbook of console steps and follow it carefully each time",
      "Hire additional operators so environments can be provisioned faster",
      "Document the differences between environments in a shared spreadsheet",
      "Define each environment as an AWS CloudFormation template stored in version control"
    ],
    answer: [3],
    explanation: "Infrastructure as code with AWS CloudFormation turns an environment into a template file: the same template produces the same environment every time, and storing it in version control gives review and history. Runbooks, more people, and documentation all still rely on humans repeating steps correctly, which is exactly what caused the drift.",
    rationales: [
      "A runbook still depends on a human executing every step identically; it reduces but does not remove drift.",
      "More operators doing manual work scales the problem, not the consistency.",
      "Documenting drift records the problem instead of preventing it.",
      ""
    ],
    services: ["AWS CloudFormation"],
    tags: ["iac", "cloudformation", "repeatability"]
  },
  {
    id: "3.1-005",
    domain: 3,
    task: "3.1",
    type: "multi",
    difficulty: "medium",
    stem: "A team is deciding whether to adopt infrastructure as code instead of continuing manual console provisioning. Which TWO outcomes does infrastructure as code directly deliver? (Select TWO.)",
    options: [
      "Identical environments can be reproduced from the same template",
      "It removes the need for any access controls on AWS accounts",
      "Template changes can be reviewed like code before they are applied",
      "It guarantees the architecture is always well-architected",
      "It eliminates all cloud spending"
    ],
    answer: [0, 2],
    explanation: "Infrastructure as code expresses an environment as a file, so the same template reproduces the same environment anywhere, and changes to that file can be reviewed, approved, and versioned like any other code. It does not change who is allowed to do what, does not certify design quality by itself, and does not change what resources cost.",
    rationales: [
      "",
      "Identity and access controls are still required; IaC changes how resources are created, not who may act.",
      "",
      "A well-architected design is a human discipline applied to the template; IaC alone certifies nothing.",
      "IaC changes how resources are provisioned, not how many run or what they cost."
    ],
    services: ["AWS CloudFormation"],
    tags: ["iac", "benefits"]
  },
  {
    id: "3.1-006",
    domain: 3,
    task: "3.1",
    type: "single",
    difficulty: "easy",
    stem: "A company runs its legacy database in its own data center and its new customer portal on AWS. The two systems must communicate with each other. Which deployment model describes this?",
    options: [
      "All-in cloud",
      "Hybrid",
      "On-premises",
      "Serverless"
    ],
    answer: [1],
    explanation: "A hybrid deployment connects cloud resources with on-premises infrastructure, which is exactly the situation of an on-premises database working together with a cloud-hosted portal. All-in cloud means nothing runs on-premises, and on-premises means nothing runs in the cloud.",
    rationales: [
      "All-in cloud would mean no infrastructure remains in the company data center.",
      "",
      "On-premises would mean the portal also runs in the company data center.",
      "Serverless is an application architecture choice, not a deployment model spanning data center and cloud."
    ],
    services: [],
    tags: ["deployment models", "hybrid"]
  },
  {
    id: "3.1-007",
    domain: 3,
    task: "3.1",
    type: "single",
    difficulty: "medium",
    stem: "An insurance company must keep policyholder records on infrastructure it controls because of a regulation, but still wants to use AWS for burst compute and analytics. Which deployment model fits?",
    options: [
      "All-in cloud, because AWS is always the cheaper option",
      "On-premises only, with no AWS usage permitted",
      "Hybrid, keeping regulated data on-premises while using AWS for other workloads",
      "Serverless only, because it has no physical servers"
    ],
    answer: [2],
    explanation: "This is the textbook hybrid scenario: regulation keeps one class of data on controlled infrastructure while the cloud serves workloads without that constraint. The regulation applies to the policyholder records, not to every workload the company runs, so on-premises-only overreacts and all-in cloud violates the requirement.",
    rationales: [
      "Moving regulated records into the cloud would breach the requirement, regardless of cost.",
      "The regulation restricts the records, not all company workloads, so AWS remains usable for the rest.",
      "",
      "Serverless describes how an application is built, and the records would still have to live somewhere compliant."
    ],
    services: [],
    tags: ["deployment models", "hybrid", "compliance"]
  },
  {
    id: "3.1-008",
    domain: 3,
    task: "3.1",
    type: "single",
    difficulty: "easy",
    stem: "Which statement describes an on-premises deployment?",
    options: [
      "All workloads run on hardware the company owns and operates in its own data center",
      "All workloads run on AWS with no company-owned hardware",
      "Workloads are split between AWS and another cloud provider",
      "Workloads run exclusively at AWS edge locations"
    ],
    answer: [0],
    explanation: "On-premises (sometimes called private cloud) means the company owns, houses, and operates all the hardware itself, including the cost and burden of capacity planning, power, cooling, and maintenance. Splitting between two clouds is multi-cloud, and edge locations serve AWS caching, not customer data centers.",
    rationales: [
      "",
      "That describes an all-in cloud deployment, the opposite of on-premises.",
      "Splitting between two providers is multi-cloud, not on-premises.",
      "Edge locations are part of the AWS network for content caching, not a customer deployment model."
    ],
    services: [],
    tags: ["deployment models", "on-premises"]
  },
  {
    id: "3.1-009",
    domain: 3,
    task: "3.1",
    type: "single",
    difficulty: "medium",
    stem: "A small team wants to deploy a Java web application quickly without deciding on instance sizes, load balancer settings, or capacity numbers. They want to upload code and let the platform handle provisioning, capacity, and health monitoring. Which service fits?",
    options: [
      "AWS CloudFormation",
      "AWS Elastic Beanstalk",
      "Amazon EC2 configured manually",
      "AWS Organizations"
    ],
    answer: [1],
    explanation: "AWS Elastic Beanstalk is the platform-as-a-service style option: developers upload application code, and Beanstalk provisions and manages the underlying EC2 capacity, load balancing, and health monitoring automatically. CloudFormation would still require the team to write the infrastructure definition themselves, and manual EC2 is precisely the work they want to avoid.",
    rationales: [
      "CloudFormation automates provisioning but the team would have to author the infrastructure definition, including all those sizing and load balancer decisions.",
      "",
      "Manually configured EC2 is the workload they explicitly want to avoid.",
      "AWS Organizations manages multiple accounts and billing, not application deployment."
    ],
    services: ["AWS Elastic Beanstalk"],
    tags: ["elastic beanstalk", "deployment"]
  },
  {
    id: "3.1-010",
    domain: 3,
    task: "3.1",
    type: "single",
    difficulty: "hard",
    stem: "Which pairing of task and access method is the most appropriate?",
    options: [
      "Nightly automated backups of 200 databases - clicking through the Management Console",
      "Exploring a brand-new service once to learn it - writing a CloudFormation template first",
      "A one-time check of today's spending - the Management Console",
      "Provisioning 40 identical resources - repeating the steps from memory in the console"
    ],
    answer: [2],
    explanation: "The principle is one-time tasks suit interactive tools, repeatable tasks suit automation. Checking spend once is a perfect console task. Nightly backups and 40 identical resources are repeatable and belong in scripts or templates, and building a template to explore a service once inverts the rule by automating a one-time task.",
    rationales: [
      "Nightly automated work must run unattended; console clicking cannot be scheduled by itself.",
      "A one-time exploration does not justify building and maintaining a template; the console is the right tool.",
      "",
      "Repeating steps from memory across 40 resources is exactly how drift and missed steps happen; use automation."
    ],
    services: [],
    tags: ["one-time vs repeatable", "access methods"]
  },
  {
    id: "3.1-011",
    domain: 3,
    task: "3.1",
    type: "single",
    difficulty: "medium",
    stem: "An operations team wants a reviewable history of exactly what changed in its AWS infrastructure, with changes peer-reviewed before anything is applied. Which capability delivers this?",
    options: [
      "Saving screenshots of the console after each change",
      "Keeping an email thread describing each change informally",
      "Storing AWS CloudFormation templates in version control and applying changes through pull-request review",
      "Bookmarking the console pages most often changed"
    ],
    answer: [2],
    explanation: "Infrastructure as code makes the infrastructure itself reviewable: the template diff shows exactly what will change, pull requests provide peer review, and version control keeps the full history. Screenshots, emails, and bookmarks describe changes after the fact and enforce nothing before they happen.",
    rationales: [
      "Screenshots capture a state after it already exists and cannot be reviewed before application.",
      "Informal email descriptions are neither complete nor enforced before the change runs.",
      "",
      "Bookmarks navigate the console; they record nothing about what changed."
    ],
    services: ["AWS CloudFormation"],
    tags: ["iac", "governance", "change management"]
  },
  {
    id: "3.1-012",
    domain: 3,
    task: "3.1",
    type: "single",
    difficulty: "medium",
    stem: "An AWS service is described as fully managed. What does that mean for the customer?",
    options: [
      "The customer must patch the underlying operating systems themselves",
      "The customer owns and operates the physical data centers",
      "AWS writes and maintains the customer's application code",
      "AWS handles provisioning, patching, and the underlying infrastructure so the customer focuses on data and application logic"
    ],
    answer: [3],
    explanation: "Fully managed means AWS operates the layers beneath what the customer actually provides: no servers to provision, no operating systems to patch, no hardware to own. The customer still owns its data, configuration, and application logic - AWS never writes the customer's application.",
    rationales: [
      "Patching the platform is exactly the work a managed service removes from the customer.",
      "Physical data centers always belong to AWS; ownership is never transferred.",
      "AWS never writes or maintains the customer's application code - that responsibility stays with the customer.",
      ""
    ],
    services: [],
    tags: ["managed services", "shared operations"]
  },
  {
    id: "3.1-013",
    domain: 3,
    task: "3.1",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO are legitimate reasons for a company to run a hybrid deployment rather than moving everything to AWS at once? (Select TWO.)",
    options: [
      "Hybrid removes the need for any network connectivity between environments",
      "Some legacy systems are not worth re-architecting before a phased migration",
      "AWS forbids customers from running all of their workloads in the cloud",
      "Regulations require certain data to remain on infrastructure the company controls",
      "Hybrid always costs less than an all-in cloud deployment"
    ],
    answer: [1, 3],
    explanation: "Hybrid is the standard answer for phased migration of systems that are costly to re-platform, and for data that regulation keeps on controlled infrastructure. Hybrid actually requires connecting the environments, nothing in AWS forbids all-in cloud, and hybrid adds integration cost rather than guaranteeing savings.",
    rationales: [
      "The opposite is true: hybrid depends on reliable connectivity between on-premises and cloud, such as a VPN or Direct Connect.",
      "",
      "There is no such rule; many customers are all-in on AWS.",
      "",
      "Hybrid adds connection and integration overhead; it is chosen for constraint and risk, not guaranteed savings."
    ],
    services: [],
    tags: ["deployment models", "hybrid"]
  },
  {
    id: "3.1-014",
    domain: 3,
    task: "3.1",
    type: "multi",
    difficulty: "easy",
    stem: "Which TWO are programmatic access methods for AWS services? (Select TWO.)",
    options: [
      "AWS SDKs",
      "AWS CLI",
      "AWS Management Console",
      "AWS Marketplace",
      "AWS Well-Architected Tool"
    ],
    answer: [0, 1],
    explanation: "Programmatic access means calling AWS from software rather than a human-driven interface: SDKs from application code and the CLI from scripts or terminals. The console is deliberately a visual human interface, Marketplace is a software catalog, and the Well-Architected Tool is a review questionnaire.",
    rationales: [
      "",
      "",
      "The console is a graphical interface operated by a person, the opposite of programmatic.",
      "AWS Marketplace is a catalog of software and services to deploy, not an access method.",
      "The Well-Architected Tool reviews architectures against best practices; it does not operate resources."
    ],
    services: ["AWS SDK", "AWS CLI"],
    tags: ["access methods", "programmatic"]
  },
  {
    id: "3.1-015",
    domain: 3,
    task: "3.1",
    type: "single",
    difficulty: "medium",
    stem: "An administrator needs to patch hundreds of Amazon EC2 instances and run maintenance scripts across an entire fleet from one place, without opening an SSH session on each machine. Which service fits?",
    options: [
      "Amazon EventBridge",
      "AWS Organizations",
      "AWS Systems Manager",
      "Amazon CloudWatch"
    ],
    answer: [2],
    explanation: "AWS Systems Manager gives administrators a managed way to run commands, patch, and configure fleets of instances at scale without individually logging in - Patch Manager handles OS patching and Run Command executes scripts across tagged groups of instances. EventBridge routes events, Organizations manages accounts, and CloudWatch observes rather than operates.",
    rationales: [
      "EventBridge delivers events between services on schedules or triggers; it does not patch or operate fleets.",
      "Organizations consolidates billing and governs accounts, not instance maintenance.",
      "",
      "CloudWatch collects metrics and logs and raises alarms; it observes fleets but does not patch them."
    ],
    services: ["AWS Systems Manager", "Amazon EC2"],
    tags: ["systems manager", "operations", "fleet management"]
  },
  {
    id: "3.1-016",
    domain: 3,
    task: "3.1",
    type: "single",
    difficulty: "hard",
    stem: "After a year of manual console changes, a production environment no longer matches its documentation, and nobody can explain several of the differences. Which practice prevents this situation?",
    options: [
      "Buying a more sophisticated documentation tool",
      "Managing the environment as code so every change is a reviewed, versioned template update",
      "Limiting console access to a single senior administrator",
      "Rebooting the environment weekly to reset any drift"
    ],
    answer: [1],
    explanation: "The failure described is configuration drift, and the standing cure is infrastructure as code: the template is the single source of truth, every change is a reviewed diff against it, and out-of-band edits are visible. Better documentation describes drift after it happens, one administrator merely slows it, and reboots change nothing about how the environment was modified.",
    rationales: [
      "Documentation tools record what someone claims is true; they do not enforce what is deployed.",
      "",
      "Concentrating access in one person reduces the number of drift sources but not the mechanism, and adds a bottleneck.",
      "Reboots do not revert configuration changes made outside a template."
    ],
    services: ["AWS CloudFormation"],
    tags: ["iac", "configuration drift"]
  },
  {
    id: "3.1-017",
    domain: 3,
    task: "3.1",
    type: "single",
    difficulty: "easy",
    stem: "What is the relationship between the AWS Management Console, the AWS CLI, and the AWS SDKs?",
    options: [
      "They are three unrelated products from different vendors",
      "Only the console can create or modify resources",
      "The CLI and SDKs work only with Amazon EC2",
      "They are different interfaces that call the same underlying AWS APIs"
    ],
    answer: [3],
    explanation: "Every AWS action eventually becomes an authenticated API call. The console, the CLI, and the SDKs are three front doors to the same APIs, chosen for the situation: humans exploring, operators scripting, and applications integrating. Nothing is console-exclusive, and programmatic tools cover the entire service catalog.",
    rationales: [
      "They are all first-party AWS interfaces to AWS services.",
      "All three can create and modify resources; the console is not privileged.",
      "The CLI and SDKs cover the full AWS service catalog, not just EC2.",
      ""
    ],
    services: [],
    tags: ["access methods", "apis"]
  },
  {
    id: "3.1-018",
    domain: 3,
    task: "3.1",
    type: "single",
    difficulty: "medium",
    stem: "A company must provision a three-tier training environment every Monday and tear it down on Friday. Doing this manually takes two engineers a full day each way. What is the best improvement?",
    options: [
      "Train more engineers to perform the manual steps in parallel",
      "Leave the environment running over weekends to avoid teardowns",
      "Run the training only once per month to reduce the work",
      "Provision and tear down the environment automatically from an infrastructure as code template"
    ],
    answer: [3],
    explanation: "A predictable, repeated create-and-destroy cycle is the ideal infrastructure as code pattern: one template provisions the stack on schedule, and deleting the stack removes everything cleanly, so engineers spend minutes instead of days. Adding people, accepting waste, or shrinking the schedule all work around the manual process rather than fixing it.",
    rationales: [
      "Parallel manual work still costs the day and still produces drift.",
      "Running unused infrastructure over weekends wastes money; it treats the symptom of manual teardown.",
      "Reducing frequency reduces value delivered; the underlying cost per cycle is unchanged.",
      ""
    ],
    services: ["AWS CloudFormation"],
    tags: ["iac", "repeatability", "cost"]
  },
  {
    id: "3.1-019",
    domain: 3,
    task: "3.1",
    type: "single",
    difficulty: "easy",
    stem: "A developer wants to prototype a dashboard idea this week without buying hardware and without paying for idle machines. Which approach fits best?",
    options: [
      "Purchase a physical server and host it in the office",
      "Use managed or serverless AWS services and pay only while the prototype runs",
      "Lease a rack in a colocation facility",
      "Commit to a one-year reserved contract for compute before writing any code"
    ],
    answer: [1],
    explanation: "A core operating advantage of the cloud model is provisioned-on-demand, pay-for-use infrastructure: a prototype can run on managed or serverless services, cost almost nothing while idle, and be deleted without stranding hardware. Buying servers or leasing racks locks in capital cost before the idea is validated, and a long-term commitment is the opposite of a short experiment.",
    rationales: [
      "Physical hardware takes weeks to arrive and costs the same whether the idea succeeds or fails.",
      "",
      "Colocation is still fixed physical capacity with the same upfront commitment problem.",
      "Long-term commitments suit steady, predictable workloads, not an unvalidated prototype."
    ],
    services: [],
    tags: ["cloud economics", "prototype", "managed services"]
  },
  {
    id: "3.1-020",
    domain: 3,
    task: "3.1",
    type: "single",
    difficulty: "medium",
    stem: "A company wants to deploy a vendor's pre-built, maintained software stack into its account quickly rather than assembling it from scratch. Where should it look?",
    options: [
      "AWS Marketplace and AWS Quick Starts",
      "AWS re:Post",
      "The AWS Management Console home page",
      "AWS Health Dashboard"
    ],
    answer: [0],
    explanation: "AWS Marketplace is the catalog of third-party and vendor software that deploys into a customer account, and AWS Quick Starts are maintained reference deployments built by AWS and partners. re:Post answers questions, the console home page is a navigation screen, and Health Dashboard reports AWS operational events.",
    rationales: [
      "",
      "re:Post is a community Q&A forum, not a distribution channel for deployments.",
      "The console home page lists services and shortcuts; it is not a catalog of vendor stacks.",
      "Health Dashboard shows the operational status of AWS services, not deployable software."
    ],
    services: ["AWS Marketplace"],
    tags: ["marketplace", "quick starts", "deployment"]
  },
  {
    id: "3.1-021",
    domain: 3,
    task: "3.1",
    type: "single",
    difficulty: "hard",
    stem: "Why is infrastructure as code especially valuable in disaster recovery, when an entire environment has been destroyed?",
    options: [
      "Templates physically protect data centers from disasters",
      "Infrastructure as code reduces the unit price of Amazon EC2 instances",
      "The environment can be re-provisioned from the same reviewed template instead of being rebuilt from memory",
      "Infrastructure as code prevents all future failures from occurring"
    ],
    answer: [2],
    explanation: "Because the environment exists as a versioned template, recovery is a controlled re-provisioning run rather than an archaeology project under pressure - the same reviewed definition that built it rebuilds it. Templates do not protect physical facilities, do not change prices, and do not stop failures; they make recovery repeatable and fast.",
    rationales: [
      "No template changes the physical exposure of a data center or Region.",
      "IaC has no effect on listed pricing; recovery speed, not unit cost, is the benefit.",
      "",
      "Outages still happen; IaC shortens and standardizes the recovery, it does not prevent the event."
    ],
    services: ["AWS CloudFormation"],
    tags: ["iac", "disaster recovery"]
  },
  {
    id: "3.1-022",
    domain: 3,
    task: "3.1",
    type: "single",
    difficulty: "easy",
    stem: "Which task is a natural fit for the AWS CLI but impractical to perform by hand in the Management Console?",
    options: [
      "Changing the console's display theme",
      "Looping over 300 Amazon S3 buckets and applying a tag to each one in a script",
      "Reading the AWS documentation for a service",
      "Opening the billing summary page once to check this month's spend"
    ],
    answer: [1],
    explanation: "Repetitive bulk operations across many resources are where the CLI shines: a small script loops over 300 buckets in seconds and can be rerun or scheduled, while doing the same by hand is slow and error-prone. Theme changes and one-off page visits are human console tasks, and documentation is read in a browser.",
    rationales: [
      "Console preferences are set in the console itself.",
      "",
      "Documentation lives on the AWS website; neither the CLI nor the console is the right tool for reading it.",
      "A single one-time lookup is exactly the kind of task the console is designed for."
    ],
    services: ["AWS CLI", "Amazon S3"],
    tags: ["cli", "bulk operations"]
  }
);
