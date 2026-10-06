window.QBANK = window.QBANK || [];
window.QBANK.push(
  {
    id: "3.8-001",
    domain: 3,
    task: "3.8",
    type: "single",
    difficulty: "easy",
    stem: "A system must notify many subscribers at once - sending order-status updates by email, SMS, and mobile push whenever an event occurs. Which service fits?",
    options: [
      "Amazon SQS",
      "Amazon EFS",
      "Amazon SNS",
      "AWS Backup"
    ],
    answer: [2],
    explanation: "Amazon SNS is the publish-subscribe notification service: one message published to a topic is delivered to every subscriber, whether that is an email address, a phone number, a mobile push endpoint, or another AWS service. Fan-out to many receivers is the SNS signature.",
    rationales: [
      "SQS queues messages for one consumer to pull; it does not push to subscribers.",
      "EFS is a shared file system.",
      "",
      "AWS Backup centralizes backup jobs."
    ],
    services: ["Amazon SNS"],
    tags: ["sns", "notifications"]
  },
  {
    id: "3.8-002",
    domain: 3,
    task: "3.8",
    type: "single",
    difficulty: "easy",
    stem: "An order-processing system must survive spikes: orders are written to a queue and a worker fleet processes them at its own pace, so a burst of orders never overwhelms the workers. Which service fits?",
    options: [
      "Amazon SQS",
      "Amazon Route 53",
      "Amazon Polly",
      "AWS Config"
    ],
    answer: [0],
    explanation: "Amazon SQS is managed message queuing: producers drop messages on the queue and consumers process them when ready, absorbing bursts and decoupling the two sides. This buffering-and-drain pattern is the SQS use case in one sentence.",
    rationales: [
      "",
      "Route 53 resolves DNS names.",
      "Polly converts text to speech.",
      "Config records resource configurations for audit."
    ],
    services: ["Amazon SQS"],
    tags: ["sqs", "queuing", "decoupling"]
  },
  {
    id: "3.8-003",
    domain: 3,
    task: "3.8",
    type: "single",
    difficulty: "medium",
    stem: "What is the core difference between Amazon SNS and Amazon SQS?",
    options: [
      "SNS pushes each message to all subscribers (publish-subscribe); SQS holds messages for a consumer to poll and process (queue)",
      "SQS pushes messages to subscribers; SNS queues them",
      "SNS is for storing files; SQS is for sending emails only",
      "There is no difference; they are two names for the same service"
    ],
    answer: [0],
    explanation: "The models point in different directions: SNS is push-based fan-out - one event, many receivers - while SQS is pull-based buffering - messages wait in the queue until a worker takes them. Choosing between them starts with asking whether the message goes to many listeners or to a processing pipeline.",
    rationales: [
      "",
      "Both halves are reversed.",
      "Neither stores files; SNS is not email-only, and SQS is not an email service at all.",
      "They are distinct services with different delivery models."
    ],
    services: ["Amazon SNS", "Amazon SQS"],
    tags: ["sns", "sqs", "comparison"]
  },
  {
    id: "3.8-004",
    domain: 3,
    task: "3.8",
    type: "single",
    difficulty: "medium",
    stem: "An architecture needs events from many AWS services and custom applications routed to different targets - Lambda functions, queues, other services - based on rules. Which service fits?",
    options: [
      "Amazon ECR",
      "Amazon Connect",
      "Amazon SES",
      "Amazon EventBridge"
    ],
    answer: [3],
    explanation: "Amazon EventBridge is the event bus: sources publish events, and rules match and route each event to the right targets. It is the connective tissue for event-driven architectures, distinct from SNS fan-out and SQS buffering.",
    rationales: [
      "ECR stores container images.",
      "Connect runs contact centers.",
      "SES sends email at scale.",
      ""
    ],
    services: ["Amazon EventBridge"],
    tags: ["eventbridge", "event-driven"]
  },
  {
    id: "3.8-005",
    domain: 3,
    task: "3.8",
    type: "multi",
    difficulty: "medium",
    stem: "A microservices platform needs asynchronous integration between services. Which TWO services are application integration messaging services? (Select TWO.)",
    options: [
      "Amazon EC2",
      "Amazon SNS",
      "Amazon SQS",
      "Amazon SageMaker AI",
      "AWS Backup"
    ],
    answer: [1, 2],
    explanation: "SNS and SQS - with EventBridge - are the application integration family named in the exam guide: push notifications and queuing for decoupled systems. EC2 is compute, SageMaker is machine learning, Backup is backup orchestration.",
    rationales: [
      "EC2 provides virtual servers.",
      "",
      "",
      "SageMaker builds and hosts machine learning models.",
      "AWS Backup runs and tracks backups."
    ],
    services: ["Amazon SNS", "Amazon SQS"],
    tags: ["application integration", "messaging"]
  },
  {
    id: "3.8-006",
    domain: 3,
    task: "3.8",
    type: "single",
    difficulty: "easy",
    stem: "A company wants a managed cloud contact center with telephony, call routing, and agent queues, able to scale with call volume. Which service fits?",
    options: [
      "Amazon Connect",
      "Amazon Polly",
      "Amazon QuickSight",
      "AWS Systems Manager"
    ],
    answer: [0],
    explanation: "Amazon Connect is the managed contact center service: phone numbers, interactive voice response, agent routing, and analytics, all scaling on demand. The name is the tell - it connects customers to agents.",
    rationales: [
      "",
      "Polly converts text to speech; it is a component inside voice systems, not the contact center itself.",
      "QuickSight builds BI dashboards.",
      "Systems Manager operates fleets of instances."
    ],
    services: ["Amazon Connect"],
    tags: ["connect", "contact center"]
  },
  {
    id: "3.8-007",
    domain: 3,
    task: "3.8",
    type: "single",
    difficulty: "easy",
    stem: "A marketing platform must send large volumes of legitimate transactional and marketing email - receipts, confirmations, campaigns. Which service fits?",
    options: [
      "Amazon SNS",
      "Amazon SES",
      "Amazon SQS",
      "AWS IoT Core"
    ],
    answer: [1],
    explanation: "Amazon Simple Email Service is the purpose-built email-sending platform: high-volume transactional and marketing email with deliverability management. SNS pushes short notifications to subscribed endpoints; the email-marketing-at-scale job belongs to SES.",
    rationales: [
      "SNS fans out notifications to subscribers; bulk email sending is SES's specialty.",
      "",
      "SQS queues messages for polling consumers.",
      "IoT Core connects internet-of-things devices."
    ],
    services: ["Amazon SES"],
    tags: ["ses", "email"]
  },
  {
    id: "3.8-008",
    domain: 3,
    task: "3.8",
    type: "single",
    difficulty: "medium",
    stem: "A development team wants its software releases to flow automatically through build, test, and deploy stages whenever code changes are merged. Which service orchestrates this pipeline?",
    options: [
      "AWS Config",
      "AWS CodePipeline",
      "Amazon EventBridge",
      "Amazon WorkSpaces"
    ],
    answer: [1],
    explanation: "AWS CodePipeline models releases as pipelines - source, build, test, deploy stages that run automatically on code changes. It is the CI/CD orchestrator among the developer tools; Config audits configuration and WorkSpaces provides desktops.",
    rationales: [
      "Config records and evaluates resource configurations for compliance.",
      "",
      "EventBridge routes events between services; it does not define release pipelines.",
      "WorkSpaces delivers managed virtual desktops."
    ],
    services: ["AWS CodePipeline"],
    tags: ["codepipeline", "ci/cd", "developer tools"]
  },
  {
    id: "3.8-009",
    domain: 3,
    task: "3.8",
    type: "single",
    difficulty: "medium",
    stem: "Within a release pipeline, which service compiles the source code, runs the unit tests, and produces the build artifacts?",
    options: [
      "Amazon Route 53",
      "Amazon Polly",
      "AWS X-Ray",
      "AWS CodeBuild"
    ],
    answer: [3],
    explanation: "AWS CodeBuild is the managed build service: it runs the compile-and-test step and produces artifacts, without the team maintaining build servers. CodePipeline orchestrates the stages; the build itself is CodeBuild's job.",
    rationales: [
      "Route 53 is DNS.",
      "Polly is text-to-speech.",
      "X-Ray traces requests for debugging, and does not build software.",
      ""
    ],
    services: ["AWS CodeBuild"],
    tags: ["codebuild", "developer tools"]
  },
  {
    id: "3.8-010",
    domain: 3,
    task: "3.8",
    type: "single",
    difficulty: "medium",
    stem: "A distributed application with many microservices shows intermittent latency, and developers cannot tell which service is responsible. Which developer tool helps them trace a single request across all the services it touches?",
    options: [
      "Amazon Polly",
      "AWS X-Ray",
      "Amazon SES",
      "Amazon Connect"
    ],
    answer: [1],
    explanation: "AWS X-Ray traces requests end to end across a distributed application, showing exactly where time goes and where errors occur - the standard tool for debugging microservice latency. The other options are speech, email, and contact center services.",
    rationales: [
      "Polly converts text to speech.",
      "",
      "SES sends email at scale.",
      "Connect provides cloud contact centers."
    ],
    services: ["AWS X-Ray"],
    tags: ["x-ray", "tracing", "developer tools"]
  },
  {
    id: "3.8-011",
    domain: 3,
    task: "3.8",
    type: "single",
    difficulty: "easy",
    stem: "A company's remote staff each need a full managed Windows desktop in the cloud, accessible from their laptops, with no local machines to maintain. Which service fits?",
    options: [
      "Amazon WorkSpaces",
      "Amazon EC2 Spot Instances",
      "Amazon EventBridge",
      "AWS IoT Core"
    ],
    answer: [0],
    explanation: "Amazon WorkSpaces delivers managed virtual desktops - a full desktop operating system per user, running in AWS and streamed to the employee's device. Spot instances are discounted interruptible compute, EventBridge routes events, and IoT Core connects devices.",
    rationales: [
      "",
      "Spot instances are cheap interruptible compute for fault-tolerant workloads, not user desktops.",
      "EventBridge is an event routing bus.",
      "IoT Core manages connected devices and their messaging."
    ],
    services: ["Amazon WorkSpaces"],
    tags: ["workspaces", "end-user computing"]
  },
  {
    id: "3.8-012",
    domain: 3,
    task: "3.8",
    type: "single",
    difficulty: "medium",
    stem: "A university wants students to use a heavyweight engineering application from any browser-managed device, streaming just the application - not a full desktop. Which service fits?",
    options: [
      "Amazon AppStream 2.0, which streams individual applications on demand",
      "Amazon EC2 instance store",
      "Amazon Route 53",
      "AWS Glue"
    ],
    answer: [0],
    explanation: "Amazon AppStream 2.0 streams specific applications to users on demand - the app without the whole desktop - which is the distinction from WorkSpaces' full desktop delivery. 'Stream the application' in the stem is the AppStream tell.",
    rationales: [
      "",
      "Instance store is ephemeral disk space on a host, unrelated to delivering software to students.",
      "Route 53 resolves domain names.",
      "Glue integrates data for analytics."
    ],
    services: ["Amazon AppStream 2.0"],
    tags: ["appstream", "end-user computing"]
  },
  {
    id: "3.8-013",
    domain: 3,
    task: "3.8",
    type: "single",
    difficulty: "medium",
    stem: "A small team is building a web application with a React frontend and wants hosting, deployment, and backend integration (authentication, APIs, storage) bundled for web and mobile development. Which service fits?",
    options: [
      "AWS Storage Gateway",
      "AWS Direct Connect",
      "Amazon ElastiCache",
      "AWS Amplify"
    ],
    answer: [3],
    explanation: "AWS Amplify is the frontend web and mobile development platform: build, deploy, and host the app, with ready-made backend building blocks for authentication, APIs, and storage. The other options are hybrid storage, network links, and caching - none of them serve a web frontend.",
    rationales: [
      "Storage Gateway bridges on-premises systems to cloud storage.",
      "Direct Connect provides private network connectivity.",
      "ElastiCache is an in-memory cache.",
      ""
    ],
    services: ["AWS Amplify"],
    tags: ["amplify", "frontend", "mobile"]
  },
  {
    id: "3.8-014",
    domain: 3,
    task: "3.8",
    type: "single",
    difficulty: "medium",
    stem: "A logistics firm fits thousands of trucks with GPS trackers and temperature sensors that must send telemetry to the cloud continuously and receive commands back. Which service fits?",
    options: [
      "AWS IoT Core",
      "Amazon QuickSight",
      "Amazon Polly",
      "AWS CodeBuild"
    ],
    answer: [0],
    explanation: "AWS IoT Core is the managed service for connected devices: it ingests telemetry from fleets of things at scale and routes messages both to and from the devices. Sensors reporting to the cloud and receiving commands is the IoT Core scenario verbatim.",
    rationales: [
      "",
      "QuickSight visualizes business data in dashboards.",
      "Polly converts text to speech.",
      "CodeBuild compiles and tests software."
    ],
    services: ["AWS IoT Core"],
    tags: ["iot core", "iot"]
  },
  {
    id: "3.8-015",
    domain: 3,
    task: "3.8",
    type: "single",
    difficulty: "medium",
    stem: "A contractor needs to browse untrusted websites from a corporate laptop without exposing the laptop to web-borne threats. Which service provides a managed, isolated browser that streams only the display?",
    options: [
      "Amazon Connect",
      "Amazon SES",
      "Amazon WorkSpaces Secure Browser",
      "Amazon ECR"
    ],
    answer: [2],
    explanation: "Amazon WorkSpaces Secure Browser delivers browsing from an isolated, managed environment: the web content renders in the cloud and only pixels stream to the user, keeping threats away from the endpoint. Connect, SES, and ECR serve contact centers, email, and container images.",
    rationales: [
      "Connect is a contact center service.",
      "SES is an email-sending platform.",
      "",
      "ECR is a container image registry."
    ],
    services: ["Amazon WorkSpaces Secure Browser"],
    tags: ["workspaces secure browser", "end-user computing"]
  },
  {
    id: "3.8-016",
    domain: 3,
    task: "3.8",
    type: "multi",
    difficulty: "medium",
    stem: "A company is equipping remote staff with cloud-delivered computing experiences. Which TWO services belong to AWS's end-user computing category? (Select TWO.)",
    options: [
      "Amazon WorkSpaces",
      "Amazon RDS",
      "Amazon AppStream 2.0",
      "Amazon S3",
      "Amazon EventBridge"
    ],
    answer: [0, 2],
    explanation: "WorkSpaces (full virtual desktops) and AppStream 2.0 (application streaming) - joined by WorkSpaces Secure Browser - form the end-user computing category. RDS is databases, S3 is object storage, EventBridge is messaging.",
    rationales: [
      "",
      "RDS is the managed relational database service.",
      "",
      "S3 is object storage.",
      "EventBridge is an event routing bus."
    ],
    services: ["Amazon WorkSpaces", "Amazon AppStream 2.0"],
    tags: ["end-user computing"]
  },
  {
    id: "3.8-017",
    domain: 3,
    task: "3.8",
    type: "single",
    difficulty: "medium",
    stem: "A company runs a customer-facing production workload and wants a support plan with 24/7 access to cloud support engineers and fast response times when production is impaired. Which support tier fits?",
    options: [
      "Basic Support, which is free with all accounts",
      "AWS Business Support+ (or higher)",
      "AWS re:Post only",
      "No plan supports production workloads"
    ],
    answer: [1],
    explanation: "Business Support+ adds 24/7 email, chat, and phone access to cloud support engineers with fast response times for production-impacting issues; higher tiers add more. Basic Support covers account questions and documentation only - the standard trap is assuming the free tier covers production incidents.",
    rationales: [
      "Basic Support provides account and billing help plus community resources, not 24/7 engineering response.",
      "",
      "re:Post is a community Q&A forum, not a support contract.",
      "Paid plans exist precisely for production workloads."
    ],
    services: ["AWS Support"],
    tags: ["support plans", "business support"]
  },
  {
    id: "3.8-018",
    domain: 3,
    task: "3.8",
    type: "single",
    difficulty: "hard",
    stem: "A large enterprise wants proactive architectural guidance, a dedicated technical account manager, and concierge billing support alongside the fastest response times. Which support tier matches?",
    options: [
      "Basic Support",
      "Community forums",
      "AWS Documentation",
      "AWS Enterprise Support"
    ],
    answer: [3],
    explanation: "Enterprise Support is the top tier: a dedicated technical account manager, proactive architectural reviews and guidance, concierge billing, and the fastest response commitments. The other options are free resources without any of those features.",
    rationales: [
      "Basic Support is the free tier with account help only.",
      "Community forums are peer-to-peer, with no AWS commitments.",
      "Documentation is reference material, not a support relationship.",
      ""
    ],
    services: ["AWS Support"],
    tags: ["support plans", "enterprise support"]
  },
  {
    id: "3.8-019",
    domain: 3,
    task: "3.8",
    type: "single",
    difficulty: "medium",
    stem: "An application must send individual one-time passcodes to each user's phone by SMS during login, and separately deliver the same code by email as a backup channel. Which service best fits sending these point-to-point messages?",
    options: [
      "Amazon S3",
      "Amazon SNS",
      "Amazon QuickSight",
      "AWS Glue"
    ],
    answer: [1],
    explanation: "SNS delivers messages to individual endpoints - SMS to phone numbers, email, mobile push - on demand, which fits per-user one-time passcodes (and can also fan out via topics when needed). S3 stores files, QuickSight visualizes, Glue transforms data.",
    rationales: [
      "S3 is object storage; it does not send messages.",
      "",
      "QuickSight is business intelligence dashboards.",
      "Glue is data integration and cataloging."
    ],
    services: ["Amazon SNS"],
    tags: ["sns", "sms", "otp"]
  },
  {
    id: "3.8-020",
    domain: 3,
    task: "3.8",
    type: "single",
    difficulty: "hard",
    stem: "In a microservices order system, the order service currently calls the inventory service synchronously and hangs whenever inventory is slow. The architect wants orders accepted immediately and inventory updated when it can, with no messages lost. Which service fits?",
    options: [
      "Amazon Route 53, to route requests to a faster inventory service",
      "Amazon QuickSight, to report on the failures",
      "Amazon Polly, to announce the errors",
      "Amazon SQS, so orders are queued durably and the inventory service processes them at its own pace"
    ],
    answer: [3],
    explanation: "This is the decoupling pattern: a durable queue between the services accepts every order instantly, and the slow consumer drains the queue when it can - no blocking, no lost messages. Faster routing and reporting change the symptom, not the coupling.",
    rationales: [
      "Routing to a different endpoint keeps the synchronous dependency; the hang risk remains.",
      "Dashboards observe the problem without fixing the architecture.",
      "Text-to-speech has no role in service integration.",
      ""
    ],
    services: ["Amazon SQS"],
    tags: ["sqs", "decoupling", "resilience"]
  },
  {
    id: "3.8-021",
    domain: 3,
    task: "3.8",
    type: "single",
    difficulty: "easy",
    stem: "A startup wants to deploy and host its static website frontend with a simple, low-cost AWS offering. Which service fits?",
    options: [
      "AWS Amplify Hosting",
      "Amazon ElastiCache",
      "Amazon Connect",
      "AWS Config"
    ],
    answer: [0],
    explanation: "AWS Amplify Hosting deploys and hosts modern web frontends - static sites and single-page apps - straight from a repository with continuous deployment. Caching, contact centers, and configuration auditing are unrelated to hosting a frontend.",
    rationales: [
      "",
      "ElastiCache is an in-memory cache for application data.",
      "Connect is a managed contact center.",
      "Config audits resource configurations for compliance."
    ],
    services: ["AWS Amplify"],
    tags: ["amplify", "hosting", "frontend"]
  },
  {
    id: "3.8-022",
    domain: 3,
    task: "3.8",
    type: "multi",
    difficulty: "easy",
    stem: "Which TWO services are developer tools for building and running applications on AWS? (Select TWO.)",
    options: [
      "AWS CodeBuild",
      "AWS CodePipeline",
      "Amazon Polly",
      "Amazon QuickSight",
      "Amazon Connect"
    ],
    answer: [0, 1],
    explanation: "CodeBuild (managed builds and tests) and CodePipeline (release orchestration) are the developer tools in scope, alongside X-Ray for tracing. Polly, QuickSight, and Connect serve speech, business intelligence, and contact centers respectively.",
    rationales: [
      "",
      "",
      "Polly converts text to speech.",
      "QuickSight builds BI dashboards.",
      "Connect provides cloud contact centers."
    ],
    services: ["AWS CodeBuild", "AWS CodePipeline"],
    tags: ["developer tools"]
  },
  {
    id: "3.8-023",
    domain: 3,
    task: "3.8",
    type: "single",
    difficulty: "medium",
    stem: "A company wants fully managed business email and calendaring for its employees, without operating its own email servers. Which service fits?",
    options: [
      "Amazon Connect",
      "Amazon SES",
      "Amazon WorkSpaces",
      "Amazon WorkMail"
    ],
    answer: [3],
    explanation: "Amazon WorkMail is the managed business email and calendar service - mailboxes, calendaring, and scheduling without running Exchange-style servers. The other services solve different problems: contact centers, application email, and cloud desktops.",
    rationales: [
      "Connect provides cloud contact centers with telephony and agent queues.",
      "SES sends and receives application-level email (receipts, notifications) at scale - it does not provide employee mailboxes and calendars.",
      "WorkSpaces provides managed cloud desktops.",
      ""
    ],
    services: ["Amazon WorkMail"],
    tags: ["business applications", "workmail"]
  }
);
