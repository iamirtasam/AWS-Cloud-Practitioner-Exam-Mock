window.QBANK = window.QBANK || [];
window.QBANK.push(
  {
    id: "3.2-001",
    domain: 3,
    task: "3.2",
    type: "single",
    difficulty: "easy",
    stem: "Which statement correctly describes the hierarchy of the AWS global infrastructure?",
    options: [
      "Availability Zones contain Regions, and edge locations contain Availability Zones",
      "Each Region contains multiple Availability Zones, and edge locations sit around the world to cache content close to users",
      "Each Availability Zone contains multiple Regions",
      "There is one global Region that contains all data centers"
    ],
    answer: [1],
    explanation: "The hierarchy runs Region first: a Region is a physical geographic area containing multiple, separate Availability Zones, and edge locations are the outermost layer, spread across many cities to cache content near end users. Reversing the first two levels or claiming a single global Region are the standard wrong drawings of this diagram.",
    rationales: [
      "The first two levels are inverted: Regions contain Availability Zones, not the other way around.",
      "",
      "Inverted again: an Availability Zone is inside a Region, never the container of one.",
      "AWS infrastructure is explicitly divided into separate geographic Regions."
    ],
    services: [],
    tags: ["global infrastructure", "regions", "availability zones", "edge locations"]
  },
  {
    id: "3.2-002",
    domain: 3,
    task: "3.2",
    type: "single",
    difficulty: "easy",
    stem: "What is an AWS Availability Zone?",
    options: [
      "A city where AWS keeps marketing staff",
      "A single rack of servers inside one warehouse",
      "One or more discrete data centers with independent power, cooling, and networking, located in the same geographic area as other Availability Zones",
      "A backup copy of customer data stored on tape"
    ],
    answer: [2],
    explanation: "An Availability Zone is a cluster of one or more data centers with its own independent utilities and connectivity, and every Availability Zone in a Region is physically separate from the others but connected by low-latency links. This combination - isolated yet close - is what makes multi-AZ designs resilient without adding meaningful latency.",
    rationales: [
      "Availability Zones are about data center infrastructure, not offices.",
      "Even a single Availability Zone typically spans multiple data centers; a rack is far below the concept.",
      "",
      "Availability Zones are live infrastructure you deploy into, not an archival backup concept."
    ],
    services: [],
    tags: ["availability zones"]
  },
  {
    id: "3.2-003",
    domain: 3,
    task: "3.2",
    type: "single",
    difficulty: "medium",
    stem: "A company runs its production application entirely inside a single Availability Zone and suffers an outage when that zone loses power. What is the standard AWS architectural response?",
    options: [
      "Deploy the application across multiple Availability Zones in the same Region",
      "Move the application to a single larger instance with a bigger battery backup",
      "Ask AWS to repair the zone faster",
      "Copy the database to tape every night"
    ],
    answer: [0],
    explanation: "Multi-AZ deployment is the fundamental high-availability pattern on AWS: because Availability Zones are independently powered and networked, spreading the application across several of them removes any single zone as a point of failure. Bigger hardware in the same zone still shares that zone's fate.",
    rationales: [
      "",
      "A larger instance is still a single point of failure in the same failed zone.",
      "Zone-level incidents are handled by AWS operations; the customer's lever is architecture, not repair speed.",
      "Backups restore data; they do not keep an application serving during an outage."
    ],
    services: [],
    tags: ["high availability", "multi-az"]
  },
  {
    id: "3.2-004",
    domain: 3,
    task: "3.2",
    type: "single",
    difficulty: "medium",
    stem: "A German company is legally required to keep certain customer data within Germany. How should it choose where to store that data on AWS?",
    options: [
      "Store it in the Region with the lowest price, since all Regions are legally identical",
      "Store it in a Germany-based Region such as Europe (Frankfurt), so the data stays within the required jurisdiction",
      "Store it in the Region geographically closest to the company's headquarters, regardless of country",
      "Store it in edge locations, which are inside every country"
    ],
    answer: [1],
    explanation: "Data residency requirements are answered at the Region level: data stored in the Europe (Frankfurt) Region does not leave Germany, so a German residency requirement points directly there. Price and office proximity are legitimate secondary factors but can never override a legal constraint, and edge locations are caches, not residency-grade storage.",
    rationales: [
      "Legal requirements do not bend for price; a cheaper Region outside Germany would breach the rule.",
      "",
      "Headquarters proximity is a latency argument; the requirement here is jurisdictional, not geographic convenience.",
      "Edge locations cache content and are not where authoritative customer data is stored."
    ],
    services: [],
    tags: ["data sovereignty", "region selection", "compliance"]
  },
  {
    id: "3.2-005",
    domain: 3,
    task: "3.2",
    type: "single",
    difficulty: "medium",
    stem: "A gaming company headquartered in London has most of its players in Australia complaining about slow response times. Where should it primarily deploy the application to fix the user experience?",
    options: [
      "In a Region close to the company's headquarters in London",
      "In the Region with the cheapest pricing anywhere in the world",
      "Across edge locations only, with no regional deployment",
      "In an Australian Region, close to where the latency complaints originate"
    ],
    answer: [3],
    explanation: "Latency is experienced by users, so compute belongs near the users: deploying into an Australian Region puts the application physically closer to Australian players and cuts round-trip time. Headquarters location matters for the business, not for the speed the players feel.",
    rationales: [
      "Deploying near London optimizes for the company's commute, not the players' latency.",
      "A cheap Region on another continent makes the latency problem worse.",
      "Edge locations cache content at the edge but do not replace running the application in a Region.",
      ""
    ],
    services: [],
    tags: ["latency", "region selection"]
  },
  {
    id: "3.2-006",
    domain: 3,
    task: "3.2",
    type: "single",
    difficulty: "easy",
    stem: "What is the purpose of AWS edge locations?",
    options: [
      "To store long-term archive backups",
      "To replace Availability Zones for running customer databases",
      "To cache content close to end users so it is delivered with lower latency",
      "To provide a place for customers to physically house their own servers"
    ],
    answer: [2],
    explanation: "Edge locations are the front line of Amazon CloudFront's content delivery network: popular content is cached at many points around the world and served to users from nearby, cutting latency and offloading the origin. They are cache endpoints, not general-purpose compute or storage locations.",
    rationales: [
      "Archive storage is an object storage class concern, not an edge location function.",
      "Edge locations cache content; they do not run customer databases.",
      "",
      "Customers do not colocate their own hardware at AWS edge locations."
    ],
    services: ["Amazon CloudFront"],
    tags: ["edge locations", "caching"]
  },
  {
    id: "3.2-007",
    domain: 3,
    task: "3.2",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO statements about Availability Zones are correct? (Select TWO.)",
    options: [
      "Each Availability Zone has independent power, cooling, and networking from the others",
      "All Availability Zones in a Region are housed in the same building",
      "Availability Zones are connected by high-latency satellite links that make multi-AZ designs slow",
      "Availability Zones in a Region are connected by low-latency, high-bandwidth networking",
      "Availability Zones are only used for disaster recovery, never for live production traffic"
    ],
    answer: [0, 3],
    explanation: "The design point of Availability Zones is the pairing of independence and proximity: each zone has separate utilities and network paths so one failure does not propagate, while low-latency interconnection lets an application replicate and fail over between zones almost instantly. Same-building, satellite, and DR-only descriptions all contradict how zones are built and used.",
    rationales: [
      "",
      "Zones are deliberately separate facilities, often kilometers apart, to survive building-level events.",
      "Multi-AZ networking is low-latency fiber; slowness would defeat the purpose of replication.",
      "",
      "Multi-AZ is the standard production high-availability pattern, not merely a recovery posture."
    ],
    services: [],
    tags: ["availability zones", "high availability"]
  },
  {
    id: "3.2-008",
    domain: 3,
    task: "3.2",
    type: "single",
    difficulty: "medium",
    stem: "A team is choosing an AWS Region for a new workload. Which factor should NOT influence the decision, and why?",
    options: [
      "Latency to end users, because it cannot be measured",
      "Compliance requirements, because AWS applies them uniformly everywhere",
      "Service availability, because every service runs in every Region",
      "Physical security of the data centers, because it is a uniform AWS responsibility across all Regions"
    ],
    answer: [3],
    explanation: "The four standard Region-selection factors are latency to users, cost, compliance and data residency, and service availability - and physical security is deliberately excluded because AWS operates it to the same standard everywhere as part of its side of the shared responsibility. Note that the three wrong options each hide a false premise: latency is measurable, compliance varies by jurisdiction, and service availability genuinely differs between Regions.",
    rationales: [
      "Latency is measurable and is one of the primary Region-selection factors.",
      "Compliance requirements vary by jurisdiction and frequently decide the Region.",
      "New and specialized services often launch in a subset of Regions, so availability matters.",
      ""
    ],
    services: [],
    tags: ["region selection"]
  },
  {
    id: "3.2-009",
    domain: 3,
    task: "3.2",
    type: "single",
    difficulty: "hard",
    stem: "A video platform has viewers on every continent. Its leadership wants both low latency worldwide and protection against a Regional outage. Which architecture best serves both goals?",
    options: [
      "A single Availability Zone with a very large instance",
      "One Region, relying on edge locations to run the whole application",
      "No deployment at all, with viewers downloading directly from storage",
      "Deployment across multiple Regions, with Amazon CloudFront caching content at edge locations near viewers"
    ],
    answer: [3],
    explanation: "Multi-Region deployment provides both latency proximity for users everywhere and survival of a Regional disaster, while CloudFront caches content at edge locations so most requests never cross an ocean. A single zone or single Region cannot meet either goal, and edge locations cache content - they do not host an entire application stack.",
    rationales: [
      "A single zone is the smallest possible blast radius and a terrible match for a global outage requirement.",
      "Edge locations cache content; they do not run a full application stack in place of a Region.",
      "Without an application deployment there is nothing to serve dynamic requests or handle the platform's logic.",
      ""
    ],
    services: ["Amazon CloudFront"],
    tags: ["multi-region", "global architecture", "cloudfront"]
  },
  {
    id: "3.2-010",
    domain: 3,
    task: "3.2",
    type: "single",
    difficulty: "easy",
    stem: "What does high availability mean in the context of an AWS workload?",
    options: [
      "The workload runs with redundant components across isolated failure domains so it keeps operating through component failures",
      "The workload never costs anything to run",
      "The workload is guaranteed never to fail under any circumstance, including user error",
      "The workload runs on the most expensive instance type available"
    ],
    answer: [0],
    explanation: "High availability is about surviving failure with minimal disruption: redundancy across isolated failure domains (like Availability Zones) plus automatic replacement or failover keeps the application serving when individual components die. It is an engineering property, not a guarantee, and price or instance class have nothing to do with it.",
    rationales: [
      "",
      "Availability and cost are unrelated; redundancy usually adds cost.",
      "No architecture guarantees immunity to every failure mode, including mistakes made in configuration.",
      "Paying more for bigger machines does not make them more available; isolation and redundancy do."
    ],
    services: [],
    tags: ["high availability"]
  },
  {
    id: "3.2-011",
    domain: 3,
    task: "3.2",
    type: "single",
    difficulty: "medium",
    stem: "An application runs across two Availability Zones. One zone experiences a significant network failure while the other continues working normally. What should happen in a well-architected multi-AZ design?",
    options: [
      "Traffic continues on the healthy zone while failed components are replaced automatically",
      "The application stops entirely until engineers manually restore the failed zone",
      "Both zones must fail together because they share a power feed",
      "The application must be migrated to a different Region by hand"
    ],
    answer: [0],
    explanation: "This is exactly what multi-AZ buys: the zones are independent failure domains, so a health-check-driven load balancer keeps routing to the surviving zone while an Auto Scaling group replaces lost capacity. Shared fate between zones is false by design, and nothing about a zone failure requires a Regional migration.",
    rationales: [
      "",
      "Automatic failover to the healthy zone is the point of the design; waiting for humans defeats it.",
      "Independence of utilities and networking between zones is a foundational design property.",
      "A zone failure is far below the threshold that would call for moving Regions."
    ],
    services: [],
    tags: ["multi-az", "fault isolation"]
  },
  {
    id: "3.2-012",
    domain: 3,
    task: "3.2",
    type: "multi",
    difficulty: "medium",
    stem: "A company is evaluating whether to deploy a workload in more than one AWS Region. Which THREE reasons justify a multi-Region deployment? (Select THREE.)",
    options: [
      "To guarantee the workload never incurs any data transfer charges",
      "Disaster recovery and business continuity beyond a single Region",
      "Lower latency for end users distributed across the world",
      "Single Availability Zone deployment is no longer supported",
      "Data sovereignty laws that require data to reside in specific countries or regions"
    ],
    answer: [1, 2, 4],
    explanation: "The exam guide's own list of multi-Region reasons is disaster recovery and business continuity, low latency for globally distributed users, and data sovereignty. Data transfer between Regions still costs money, and single-AZ deployments remain technically possible - they are just a bad idea for production.",
    rationales: [
      "Cross-Region traffic is billed; multi-Region architectures generally increase data transfer costs.",
      "",
      "",
      "Single-AZ deployment is still supported everywhere; it is an availability choice, not a removed feature.",
      ""
    ],
    services: [],
    tags: ["multi-region", "region selection"]
  },
  {
    id: "3.2-013",
    domain: 3,
    task: "3.2",
    type: "single",
    difficulty: "easy",
    stem: "Which AWS service delivers content to users from edge locations around the world?",
    options: [
      "Amazon EC2",
      "Amazon RDS",
      "Amazon CloudFront",
      "AWS Organizations"
    ],
    answer: [2],
    explanation: "Amazon CloudFront is the content delivery network: it caches images, videos, pages, and API responses at edge locations close to viewers. EC2 is compute, RDS is databases, and Organizations governs accounts - none of them are edge-delivery services.",
    rationales: [
      "EC2 provides virtual servers; it does not distribute content through edge caches.",
      "RDS is a managed relational database service.",
      "",
      "Organizations manages accounts and billing across a company."
    ],
    services: ["Amazon CloudFront"],
    tags: ["cloudfront", "edge locations"]
  },
  {
    id: "3.2-014",
    domain: 3,
    task: "3.2",
    type: "single",
    difficulty: "medium",
    stem: "A solutions architect tells a client: 'Multi-AZ protects you from a data center failure; multi-Region protects you from a Regional disaster.' What distinction is being drawn?",
    options: [
      "Multi-AZ and multi-Region are two names for the same thing",
      "Availability Zones isolate failures at the facility level within a Region, while a second Region protects against events large enough to affect an entire Region",
      "Multi-Region is cheaper than multi-AZ",
      "A Regional disaster can be survived with multi-AZ alone, because Regions and zones are equivalent"
    ],
    answer: [1],
    explanation: "The two patterns answer different failure sizes. Multi-AZ survives zone-level events - power, cooling, networking at one facility cluster - with near-zero latency penalty. Multi-Region addresses disasters whose blast radius is a whole Region, at the cost of data replication and more complex operation. Treating zones and Regions as equivalent is the dangerous misunderstanding the sentence corrects.",
    rationales: [
      "They differ in blast radius, cost, complexity, and latency profile.",
      "",
      "Multi-Region is strictly more complex and usually more expensive than multi-AZ.",
      "A Region-scale event affects every Availability Zone inside it; zone redundancy does not survive it."
    ],
    services: [],
    tags: ["multi-az", "multi-region", "disaster recovery"]
  },
  {
    id: "3.2-015",
    domain: 3,
    task: "3.2",
    type: "single",
    difficulty: "hard",
    stem: "A trading platform has a strict business requirement: a catastrophic event taking out an entire AWS Region must not end the business. Its data must also stay within the European Union. Which architecture satisfies both requirements?",
    options: [
      "A single Region with instances spread across all of its Availability Zones",
      "Two Regions both outside the EU, chosen purely for price",
      "An on-premises backup of the database restored from tape each week",
      "Deployment in a second EU Region with data replication, satisfying both business continuity and the residency requirement"
    ],
    answer: [3],
    explanation: "Surviving a full Regional disaster requires a second Region - Availability Zones all fall inside the one Region. Adding the residency constraint means that second Region must also sit inside the EU, so both requirements are met together. Price-only Region selection and non-EU Regions each violate one of the two stated requirements.",
    rationales: [
      "Every Availability Zone shares the fate of its Region; zone spreading does not survive a Regional event.",
      "A second Region is the right instinct, but placing it outside the EU breaks the residency requirement.",
      "Tape backups restore data slowly and do not by themselves keep the platform running within the required timeframe or jurisdiction.",
      ""
    ],
    services: [],
    tags: ["multi-region", "disaster recovery", "data sovereignty"]
  },
  {
    id: "3.2-016",
    domain: 3,
    task: "3.2",
    type: "single",
    difficulty: "medium",
    stem: "A company plans to use a newly announced AWS service in its application. Why must service availability be checked as part of Region selection?",
    options: [
      "Because new and specialized services sometimes launch in only a subset of Regions before wider rollout",
      "Because services can only be used in the Region nearest to the customer's headquarters",
      "Because every service is guaranteed to be available in every Region",
      "Because services automatically appear in all Regions the moment they are announced"
    ],
    answer: [0],
    explanation: "Not every service runs everywhere: new launches and specialized offerings often begin in a few Regions, and some services remain permanently limited to particular geographies. Checking availability before committing to a Region prevents designing an architecture around a service the chosen Region cannot provide.",
    rationales: [
      "",
      "No such restriction exists; the constraint is AWS's rollout, not customer geography.",
      "This is precisely the assumption the check exists to correct.",
      "Rollouts are progressive; announcement does not mean universal availability."
    ],
    services: [],
    tags: ["region selection", "service availability"]
  },
  {
    id: "3.2-017",
    domain: 3,
    task: "3.2",
    type: "single",
    difficulty: "easy",
    stem: "What best describes the geographical nature of AWS Regions?",
    options: [
      "All Regions are located in a single country",
      "Regions are separate geographic areas distributed around the world, such as North America, Europe, and Asia Pacific",
      "Regions exist only in the United States",
      "A Region changes location based on where the customer is"
    ],
    answer: [1],
    explanation: "AWS operates dozens of physically separate Regions across the Americas, Europe, Asia Pacific, and beyond, each an independent cluster of Availability Zones. Customers choose the Region or Regions their users and regulations point to; a Region's location is fixed, not dynamic.",
    rationales: [
      "Regions span every inhabited continent by design.",
      "",
      "The United States hosts several Regions but far from all of them.",
      "Regions are fixed physical infrastructure; they do not move with customers."
    ],
    services: [],
    tags: ["regions"]
  },
  {
    id: "3.2-018",
    domain: 3,
    task: "3.2",
    type: "single",
    difficulty: "medium",
    stem: "A batch-processing workload has no users waiting on it and no legal constraints on location. Finance notices the identical workload costs meaningfully less in a different Region. What is the correct response?",
    options: [
      "Region prices are fixed by law and can never differ",
      "Move the workload, since latency is irrelevant for batch processing and no compliance rule restricts the location",
      "Complain to AWS that prices should be identical everywhere",
      "Keep it where it is, because moving workloads between Regions is impossible"
    ],
    answer: [1],
    explanation: "Pricing genuinely varies between Regions, and for a workload with no latency sensitivity and no residency constraints, running in the lower-cost Region is a straightforward cost-optimization decision. Price differences are real and published; migration between Regions is routine.",
    rationales: [
      "Regional price differences are published and significant, particularly for compute and data transfer.",
      "",
      "Prices legitimately differ by Region, reflecting AWS's own infrastructure and operating costs there.",
      "Workloads move between Regions routinely; it is a normal architectural decision."
    ],
    services: [],
    tags: ["region selection", "cost optimization"]
  },
  {
    id: "3.2-019",
    domain: 3,
    task: "3.2",
    type: "multi",
    difficulty: "medium",
    stem: "A content-heavy website moves its static assets behind Amazon CloudFront. Which TWO benefits do the edge locations directly provide? (Select TWO.)",
    options: [
      "Cached content is served from a location physically closer to each user, reducing latency",
      "Edge locations permanently replace the need for any AWS Region",
      "Edge locations host the customer's relational databases close to users",
      "The origin server is shielded from much of the request load, since cached content is served at the edge",
      "Edge locations encrypt data by default, unlike all other AWS services"
    ],
    answer: [0, 3],
    explanation: "The two direct benefits of edge caching are latency - content travels a much shorter distance to the viewer - and origin offload: because popular objects are served from cache, the origin handles fewer requests. Edge locations complement Regions rather than replacing them, do not host databases, and encryption defaults are not an edge-specific property.",
    rationales: [
      "",
      "Edge caching works alongside the Regional origin; the application and its source of truth still live in a Region.",
      "Databases run in Regions and Availability Zones, not in edge caches.",
      "",
      "Encryption is a per-service configuration matter across AWS, not something unique to edge locations."
    ],
    services: ["Amazon CloudFront"],
    tags: ["cloudfront", "edge locations", "caching"]
  },
  {
    id: "3.2-020",
    domain: 3,
    task: "3.2",
    type: "single",
    difficulty: "hard",
    stem: "A healthcare company serves users worldwide, but patient records must remain in the United States. Users in Asia and Europe report slow access to their records. Which approach is correct?",
    options: [
      "Keep the records in a US Region to satisfy residency, and use caching and content delivery to reduce latency for the parts of the experience that can be served closer to users",
      "Move the records to the Region nearest each user, since latency always outranks compliance",
      "Store the records in edge locations worldwide so everyone is close to their data",
      "Ignore the latency reports, because compliance and latency cannot be considered together"
    ],
    answer: [0],
    explanation: "Compliance constraints are non-negotiable and answered first: the records stay in a US Region. Latency is then improved within that constraint - content delivery networks cache cacheable content near users, and application-level techniques reduce round trips. Latency and compliance are weighed together in every real architecture; compliance simply wins any direct conflict.",
    rationales: [
      "",
      "Moving regulated records to whichever Region is nearest each user breaches the residency requirement outright.",
      "Edge locations are caches, not authoritative storage for regulated records.",
      "They are considered together constantly; the residency rule simply bounds the set of acceptable designs."
    ],
    services: ["Amazon CloudFront"],
    tags: ["data sovereignty", "latency", "compliance"]
  },
  {
    id: "3.2-021",
    domain: 3,
    task: "3.2",
    type: "single",
    difficulty: "easy",
    stem: "AWS documentation says each Availability Zone is 'isolated' from the others in its Region. What does that isolation refer to?",
    options: [
      "Availability Zones cannot communicate with each other at all",
      "Customer data cannot be copied between Availability Zones",
      "Isolation refers to separate facilities with independent utilities and network paths, so a failure in one does not propagate to the others",
      "Isolation means each Availability Zone belongs to a different AWS account"
    ],
    answer: [2],
    explanation: "Isolation is physical and operational: separate facilities, separate power and cooling, separate network paths - the properties that stop a zone-level event from cascading. It does not mean zones are unreachable from each other; they are deliberately connected by low-latency links precisely so applications can replicate across them.",
    rationales: [
      "Zones are interconnected by design; total separation would make replication impossible.",
      "Data replication between zones is routine and encouraged.",
      "",
      "Availability Zones belong to AWS's infrastructure, not to individual customer accounts."
    ],
    services: [],
    tags: ["availability zones", "fault isolation"]
  },
  {
    id: "3.2-022",
    domain: 3,
    task: "3.2",
    type: "single",
    difficulty: "medium",
    stem: "A startup launched its first product running entirely in one Availability Zone. A power incident in that zone took the product offline for six hours. What is the lesson the startup should apply?",
    options: [
      "The outage proves the cloud is less reliable than on-premises servers",
      "The company should stop using Availability Zones entirely",
      "The company should replicate its database to a different Region across the world to fix any future incident",
      "Distributing the application across multiple Availability Zones would have removed the single point of failure that caused the outage"
    ],
    answer: [3],
    explanation: "The outage was a design problem, not a cloud problem: running everything in one zone makes that zone a single point of failure. Spreading across multiple zones in the same Region is the standard, low-cost, low-latency fix - and a full multi-Region architecture would be an oversized response to a zone-level incident.",
    rationales: [
      "On-premises hardware in one building has at least this much exposure, usually far more.",
      "Availability Zones are the mechanism that would have prevented the outage; abandoning them doubles down on the mistake.",
      "Multi-Region adds real cost and complexity and answers a bigger failure than the one that occurred.",
      ""
    ],
    services: [],
    tags: ["multi-az", "single point of failure"]
  }
);
