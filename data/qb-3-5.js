window.QBANK = window.QBANK || [];
window.QBANK.push(
  {
    id: "3.5-001",
    domain: 3,
    task: "3.5",
    type: "single",
    difficulty: "easy",
    stem: "What is an Amazon VPC?",
    options: [
      "A physical AWS data center that customers can tour",
      "A logically isolated section of the AWS cloud where the customer launches resources in a network they define",
      "A virtual private assistant for cloud billing",
      "A managed Kubernetes cluster"
    ],
    answer: [1],
    explanation: "A Virtual Private Cloud is the customer's own slice of the AWS network: they choose the IP address range, create subnets, and control routing and gateways, with logical isolation from other customers' networks. It is the foundational networking construct for nearly everything deployed on AWS.",
    rationales: [
      "VPCs are virtual network constructs, not physical facilities.",
      "",
      "There is no such service; this is a distractor built from the word 'virtual private'.",
      "A managed Kubernetes cluster describes Amazon EKS."
    ],
    services: ["Amazon VPC"],
    tags: ["vpc", "networking"]
  },
  {
    id: "3.5-002",
    domain: 3,
    task: "3.5",
    type: "single",
    difficulty: "easy",
    stem: "Within a VPC, what is a subnet?",
    options: [
      "A range of IP addresses within the VPC, tied to a single Availability Zone, into which resources are placed",
      "A second VPC nested inside the first",
      "A physical firewall appliance",
      "A DNS record that points to the VPC"
    ],
    answer: [0],
    explanation: "A subnet is a subdivision of the VPC's address space that lives entirely inside one Availability Zone - which is how multi-AZ designs are built, by placing resources in subnets across different zones. Whether a subnet is public or private depends on its routing to the internet gateway.",
    rationales: [
      "",
      "Subnets partition a VPC's address space; they are not nested VPCs.",
      "Firewalling in a VPC is done with security groups and network ACLs, software-defined.",
      "DNS records are Route 53's domain, not subnets."
    ],
    services: ["Amazon VPC"],
    tags: ["vpc", "subnets"]
  },
  {
    id: "3.5-003",
    domain: 3,
    task: "3.5",
    type: "single",
    difficulty: "medium",
    stem: "Instances in a private subnet need to download security patches from the internet, but they must not be reachable from the internet. Which component provides this one-way outbound access?",
    options: [
      "An internet gateway attached directly to the instances",
      "A NAT gateway, which lets instances initiate outbound connections while blocking unsolicited inbound traffic",
      "AWS Direct Connect",
      "A second VPC"
    ],
    answer: [1],
    explanation: "A NAT gateway sits in a public subnet and forwards outbound requests from private-subnet instances to the internet, while refusing unsolicited inbound connections - exactly the 'patch but stay unreachable' pattern. An internet gateway makes instances directly internet-addressable, which is what a private subnet avoids.",
    rationales: [
      "Routing private instances through an internet gateway makes them publicly reachable, defeating the purpose.",
      "",
      "Direct Connect is a private link to corporate networks and other VPCs, not an internet egress path for patching.",
      "Adding another VPC does not provide egress by itself."
    ],
    services: ["Amazon VPC"],
    tags: ["nat gateway", "private subnet"]
  },
  {
    id: "3.5-004",
    domain: 3,
    task: "3.5",
    type: "single",
    difficulty: "medium",
    stem: "Which statement distinguishes security groups from network ACLs?",
    options: [
      "Security groups operate at the subnet level; network ACLs operate at the instance level",
      "Security groups are stateful and evaluate at the instance level; network ACLs are stateless and evaluate at the subnet level",
      "Both are stateless, but only security groups support deny rules",
      "Network ACLs replace the need for any other security control"
    ],
    answer: [1],
    explanation: "The pairing is: security groups - stateful, instance level, allow rules only, return traffic automatically permitted; network ACLs - stateless, subnet level, numbered rules that can allow or deny, with return traffic checked separately. Swapping the levels or the statefulness is the standard exam trap.",
    rationales: [
      "Exactly reversed: security groups attach to instances, ACLs to subnets.",
      "",
      "Only network ACLs support explicit deny rules, and security groups are stateful.",
      "Defense in depth uses both layers together; ACLs do not replace anything."
    ],
    services: ["Amazon VPC"],
    tags: ["security groups", "nacl", "vpc"]
  },
  {
    id: "3.5-005",
    domain: 3,
    task: "3.5",
    type: "single",
    difficulty: "medium",
    stem: "An administrator removes an inbound rule from an instance's security group, yet existing established connections to the instance continue to work. Why?",
    options: [
      "Security groups are stateful, so traffic already part of an established connection continues to be allowed",
      "The rule deletion failed silently and should be retried",
      "Network ACLs always override security group changes",
      "Security groups take up to 24 hours to apply"
    ],
    answer: [0],
    explanation: "Statefulness is the explanation: a security group tracks connections it allowed, and return traffic for an established flow is permitted regardless of rule changes. New connections must match the rules; established ones continue until they end. Changes apply immediately - there is no propagation delay to wait out.",
    rationales: [
      "",
      "Security group changes take effect immediately; the behavior observed is by design.",
      "ACLs and security groups are evaluated independently at different layers; neither overrides the other's statefulness.",
      "There is no 24-hour delay; security group edits are near-instant."
    ],
    services: ["Amazon VPC"],
    tags: ["security groups", "stateful"]
  },
  {
    id: "3.5-006",
    domain: 3,
    task: "3.5",
    type: "single",
    difficulty: "easy",
    stem: "What does Amazon Route 53 do?",
    options: [
      "It is a managed DNS service that translates domain names into IP addresses, and can also register domains",
      "It routes delivery trucks for logistics customers",
      "It caches web content at edge locations",
      "It stores database backups"
    ],
    answer: [0],
    explanation: "Route 53 is AWS's DNS service: it answers 'where is this domain' for users worldwide, registers domain names, and can route traffic intelligently based on health, latency, or geography. The number 53 references DNS's port, a hint worth remembering. Caching content at the edge is CloudFront's job.",
    rationales: [
      "",
      "The name refers to DNS port 53, not transportation.",
      "Edge caching is Amazon CloudFront.",
      "Database backups belong to AWS Backup and database services."
    ],
    services: ["Amazon Route 53"],
    tags: ["route 53", "dns"]
  },
  {
    id: "3.5-007",
    domain: 3,
    task: "3.5",
    type: "single",
    difficulty: "medium",
    stem: "A website's primary deployment in one Region fails its health checks. Route 53 automatically sends users to a healthy deployment in another Region. Which capability is this?",
    options: [
      "DNS failover routing backed by health checks",
      "Auto Scaling group cooldowns",
      "S3 bucket versioning",
      "Elastic Load Balancing connection draining"
    ],
    answer: [0],
    explanation: "Route 53 can continuously health-check endpoints and steer DNS answers to healthy ones - failover routing policy in action, giving disaster recovery at the DNS layer without users noticing anything except a working site. The other options are useful features, but none of them change where DNS points users.",
    rationales: [
      "",
      "Auto Scaling manages instance counts within a deployment; it does not redirect DNS.",
      "Bucket versioning protects objects in S3, not user traffic flow.",
      "Connection draining smooths load balancer deregistrations, not Regional redirection."
    ],
    services: ["Amazon Route 53"],
    tags: ["route 53", "failover", "health checks"]
  },
  {
    id: "3.5-008",
    domain: 3,
    task: "3.5",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO statements about AWS Site-to-Site VPN and AWS Direct Connect are correct? (Select TWO.)",
    options: [
      "A Site-to-Site VPN sends encrypted traffic over the public internet and can be established quickly",
      "Direct Connect sends encrypted traffic over the public internet",
      "Direct Connect provides a dedicated private network connection with more consistent latency than an internet path",
      "A VPN is always faster than Direct Connect",
      "Direct Connect can be fully provisioned in about ten minutes"
    ],
    answer: [0, 2],
    explanation: "The two services answer different needs: VPN - encrypted tunnels over the public internet, fast to stand up, variable performance; Direct Connect - a private physical link into AWS with consistent latency and bandwidth, but requiring weeks of provisioning lead time. Neither 'always faster' claim survives contact with reality.",
    rationales: [
      "",
      "Direct Connect's entire point is bypassing the public internet with a private line.",
      "",
      "Direct Connect's consistent private path typically outperforms an internet-based VPN for large steady workloads.",
      "Physical fiber provisioning takes weeks to months, not minutes."
    ],
    services: ["AWS Direct Connect", "AWS Site-to-Site VPN"],
    tags: ["vpn", "direct connect", "hybrid networking"]
  },
  {
    id: "3.5-009",
    domain: 3,
    task: "3.5",
    type: "single",
    difficulty: "medium",
    stem: "A bank moves large nightly data feeds between its data center and AWS and needs predictable bandwidth and latency, without traffic touching the public internet. After weeks of planning it accepts a longer provisioning lead time. Which option fits?",
    options: [
      "AWS Site-to-Site VPN",
      "AWS Direct Connect",
      "Amazon CloudFront",
      "AWS Transfer Family"
    ],
    answer: [1],
    explanation: "Direct Connect is the dedicated private circuit into AWS: predictable performance, no public internet in the path, and the right answer when consistency matters enough to accept the provisioning lead time. VPN would run over the public internet with variable latency - the opposite of the requirement.",
    rationales: [
      "VPN meets the encryption need but rides the public internet, so latency and bandwidth vary.",
      "",
      "CloudFront is a content delivery network for end users, not a private corporate link.",
      "Transfer Family moves files over managed protocols; it is not a dedicated network circuit."
    ],
    services: ["AWS Direct Connect"],
    tags: ["direct connect", "hybrid networking"]
  },
  {
    id: "3.5-010",
    domain: 3,
    task: "3.5",
    type: "single",
    difficulty: "easy",
    stem: "A company needs a secure connection between its on-premises network and its VPC, and wants it running today, accepting performance that varies with internet conditions. Which option fits?",
    options: [
      "AWS Site-to-Site VPN, which encrypts traffic over the internet and can be established quickly",
      "AWS Direct Connect, because it is always the first choice",
      "Amazon WorkSpaces",
      "AWS X-Ray"
    ],
    answer: [0],
    explanation: "Site-to-Site VPN is the fast, pragmatic hybrid link: encrypted tunnels over the internet, up and running in minutes to hours, with throughput that varies with internet conditions. Direct Connect is the upgrade path when consistent performance justifies its provisioning timeline.",
    rationales: [
      "",
      "Direct Connect's weeks-long lead time contradicts 'running today'; it is chosen for performance, not speed of setup.",
      "WorkSpaces provides virtual desktops for end users.",
      "X-Ray traces application requests for debugging."
    ],
    services: ["AWS Site-to-Site VPN"],
    tags: ["vpn", "hybrid networking"]
  },
  {
    id: "3.5-011",
    domain: 3,
    task: "3.5",
    type: "single",
    difficulty: "medium",
    stem: "Where should a database server with no need for internet access be placed, according to VPC best practice?",
    options: [
      "In a public subnet, so it can be reached directly from the internet",
      "In a private subnet with no route to an internet gateway",
      "Outside any VPC, on the public internet",
      "In an S3 bucket"
    ],
    answer: [1],
    explanation: "The classic VPC layout puts anything that should not be internet-facing in a private subnet - no route to the internet gateway - and lets public-facing tiers in public subnets reach it internally. Databases exposed directly to the internet are one of the most common and costly misconfigurations.",
    rationales: [
      "A public subnet with direct internet reachability is exactly the exposure to avoid for a database.",
      "",
      "Resources live inside VPCs; the public internet is not an addressable home for a server.",
      "S3 stores objects; a database server cannot live in a bucket."
    ],
    services: ["Amazon VPC"],
    tags: ["vpc", "private subnet", "best practices"]
  },
  {
    id: "3.5-012",
    domain: 3,
    task: "3.5",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO components are part of VPC networking? (Select TWO.)",
    options: [
      "Internet gateway",
      "Subnets",
      "Amazon Polly voices",
      "AWS Budgets thresholds",
      "AWS CodePipeline stages"
    ],
    answer: [0, 1],
    explanation: "VPCs are built from address ranges divided into subnets, routing tables, and gateways - internet gateways for public access, NAT for outbound-only egress. Polly, Budgets, and CodePipeline belong to speech, cost management, and CI/CD, none of which are network constructs.",
    rationales: [
      "",
      "",
      "Polly converts text to speech.",
      "Budgets manages cost alerts, not network topology.",
      "CodePipeline orchestrates software releases."
    ],
    services: ["Amazon VPC"],
    tags: ["vpc", "components"]
  },
  {
    id: "3.5-013",
    domain: 3,
    task: "3.5",
    type: "single",
    difficulty: "hard",
    stem: "A web tier must accept traffic from the internet, while its application and database tiers must not be directly reachable from outside. How should the VPC be laid out?",
    options: [
      "Everything in one public subnet for simplicity",
      "Web tier in public subnets; application and database tiers in private subnets",
      "Everything in private subnets, with the internet gateway deleted",
      "Database in a public subnet; web tier in a private subnet"
    ],
    answer: [1],
    explanation: "This is the standard layered VPC: only the internet-facing tier lives in public subnets routed to an internet gateway, while inner tiers sit in private subnets reachable only from inside the VPC. Each layer of separation shrinks the attack surface - and inverting the layout exposes the database, the worst possible outcome.",
    rationales: [
      "A single public subnet puts every tier, including the database, on the internet.",
      "",
      "With no internet path at all, the web tier could not serve users either.",
      "Exposing the database while hiding the web servers inverts every rule of tiered security."
    ],
    services: ["Amazon VPC"],
    tags: ["vpc", "tiered architecture", "best practices"]
  },
  {
    id: "3.5-014",
    domain: 3,
    task: "3.5",
    type: "single",
    difficulty: "medium",
    stem: "What does it mean that a subnet is 'public'?",
    options: [
      "The subnet's resources have public IP addresses assigned by default to everyone",
      "The subnet has a route to an internet gateway, so resources in it can communicate with the internet",
      "The subnet is visible to other AWS customers",
      "The subnet is located outside any Availability Zone"
    ],
    answer: [1],
    explanation: "Public and private are routing concepts: a public subnet has a route to an internet gateway, private subnets do not. Resources in a public subnet typically also get public IP addresses, but the defining property is the route. Subnets are always private to the customer's VPC, and every subnet lives in an Availability Zone.",
    rationales: [
      "The public IP is common but secondary; the route to the internet gateway is what makes the subnet public.",
      "",
      "Every VPC is logically isolated; other customers can never see inside it.",
      "All subnets exist within an Availability Zone."
    ],
    services: ["Amazon VPC"],
    tags: ["vpc", "public subnet"]
  },
  {
    id: "3.5-015",
    domain: 3,
    task: "3.5",
    type: "single",
    difficulty: "easy",
    stem: "A company registers its brand-new domain name and wants AWS to manage its DNS records. Which service handles both?",
    options: [
      "Amazon CloudFront",
      "Amazon Route 53",
      "Amazon VPC",
      "AWS Certificate Manager"
    ],
    answer: [1],
    explanation: "Route 53 registers domains and hosts the DNS zones that answer queries for them - one service for both jobs. CloudFront delivers content, VPC provides networks, and Certificate Manager issues TLS certificates but does not host DNS or register domains.",
    rationales: [
      "CloudFront caches and delivers content; it neither registers domains nor hosts DNS zones.",
      "",
      "VPC is the network container for resources, not a DNS service.",
      "Certificate Manager provisions certificates for HTTPS; it does not manage domain records."
    ],
    services: ["Amazon Route 53"],
    tags: ["route 53", "dns", "domain registration"]
  },
  {
    id: "3.5-016",
    domain: 3,
    task: "3.5",
    type: "single",
    difficulty: "hard",
    stem: "An engineer proposes allowing all inbound traffic on a database security group and restricting access only with the network ACL, arguing the two are interchangeable. What is the strongest objection?",
    options: [
      "Security groups cannot be changed after creation",
      "The layers differ: ACLs are stateless subnet filters evaluated by rule number, while security groups are stateful instance-level controls - relying on one instead of both removes defense in depth",
      "Network ACLs cannot contain any rules",
      "Security groups only support IPv6"
    ],
    answer: [1],
    explanation: "The objection is architectural: the two mechanisms work at different layers with different semantics - instance-level stateful filtering versus subnet-level stateless numbered rules. Using both is defense in depth; collapsing them into one layer concentrates risk and discards the other layer's strengths, such as the security group's automatic return-traffic handling.",
    rationales: [
      "Security groups are modified constantly; there is no immutability.",
      "",
      "Network ACLs are rule containers by definition; they cannot work without rules.",
      "Security groups fully support IPv4 alongside IPv6."
    ],
    services: ["Amazon VPC"],
    tags: ["security groups", "nacl", "defense in depth"]
  },
  {
    id: "3.5-017",
    domain: 3,
    task: "3.5",
    type: "single",
    difficulty: "easy",
    stem: "Which statement about security group rules is correct?",
    options: [
      "They support both allow and deny rules evaluated in numbered order",
      "They are allow-only, and everything not explicitly allowed is denied by default",
      "They permit all traffic by default until rules are added",
      "They apply only to traffic leaving the instance"
    ],
    answer: [1],
    explanation: "Security groups work on allow-only logic: with no rules, all inbound traffic is denied; adding rules opens specific paths. Explicit deny rules and numbered evaluation belong to network ACLs - a distinction the exam tests repeatedly.",
    rationales: [
      "That describes network ACLs, not security groups.",
      "",
      "The default posture is deny, not allow.",
      "Security groups govern inbound and outbound traffic."
    ],
    services: ["Amazon VPC"],
    tags: ["security groups"]
  },
  {
    id: "3.5-018",
    domain: 3,
    task: "3.5",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO are true about network ACLs? (Select TWO.)",
    options: [
      "They are evaluated at the subnet level",
      "They are stateful, automatically permitting return traffic",
      "They support both allow and deny rules",
      "They attach directly to individual instances",
      "They can only ever contain a single rule"
    ],
    answer: [0, 2],
    explanation: "Network ACLs filter at the subnet boundary, support explicit allow and deny entries, and evaluate numbered rules in order. Their statelessness means return traffic must be allowed by rules in the other direction - the mirror image of security groups, which attach to instances and remember established flows.",
    rationales: [
      "",
      "Stateful return-traffic handling is the security group's property, not the ACL's.",
      "",
      "Instance-level attachment defines security groups.",
      "ACLs hold any number of numbered rules within service limits."
    ],
    services: ["Amazon VPC"],
    tags: ["nacl"]
  },
  {
    id: "3.5-019",
    domain: 3,
    task: "3.5",
    type: "single",
    difficulty: "medium",
    stem: "A multi-tier application needs its instances in different Availability Zones to communicate privately, without traffic crossing the public internet. What makes this possible inside a VPC spanning multiple zones?",
    options: [
      "AWS's regional network, which interconnects Availability Zones with low-latency private links",
      "Courier-delivered disks between zones",
      "The public internet with a VPN at each instance",
      "S3 Transfer Acceleration"
    ],
    answer: [0],
    explanation: "A VPC can span Availability Zones in its Region, and AWS's Regional network carries inter-zone traffic over private, low-latency links - which is what makes multi-AZ architectures both resilient and fast. Traffic between zones never traverses the public internet.",
    rationales: [
      "",
      "Physical transport belongs to the Snow Family for bulk data import, not live inter-zone traffic.",
      "Inter-zone traffic stays on AWS's private network by design.",
      "Transfer Acceleration speeds uploads into S3 over the internet; it is unrelated here."
    ],
    services: ["Amazon VPC"],
    tags: ["vpc", "multi-az", "networking"]
  },
  {
    id: "3.5-020",
    domain: 3,
    task: "3.5",
    type: "single",
    difficulty: "medium",
    stem: "Which service would a company use to inspect and troubleshoot the path requests take through its application's network and services?",
    options: [
      "AWS X-Ray",
      "Amazon Route 53",
      "AWS Budgets",
      "Amazon Comprehend"
    ],
    answer: [0],
    explanation: "AWS X-Ray traces requests end-to-end through an application's components and network hops, surfacing latency and errors - the debugging lens for distributed systems. Route 53 answers DNS, Budgets watches spend, and Comprehend analyzes text.",
    rationales: [
      "",
      "Route 53 resolves domain names; it does not trace request paths.",
      "Budgets tracks costs and sends alerts.",
      "Comprehend performs natural language analysis."
    ],
    services: ["AWS X-Ray"],
    tags: ["x-ray", "troubleshooting"]
  },
  {
    id: "3.5-021",
    domain: 3,
    task: "3.5",
    type: "single",
    difficulty: "hard",
    stem: "A security review finds a database instance in a private subnet, but its security group allows inbound access from the entire internet (0.0.0.0/0). What is the correct assessment?",
    options: [
      "No action needed - private subnets make security group rules irrelevant",
      "The security group should allow inbound only from the specific sources that need it, such as the application tier's security group; 0.0.0.0/0 on a database is a critical finding",
      "The fix is to move the database to a public subnet",
      "The fix is to add a second internet gateway"
    ],
    answer: [1],
    explanation: "Layered security requires every layer to be right: the private subnet removes public routing, but a wide-open security group is still a critical finding because other paths (peering, misconfiguration, insider access) could exploit it. Best practice is to reference the application tier's security group as the source - least privilege at the network layer.",
    rationales: [
      "Security groups and subnets are independent layers; a wrong rule at one layer is dangerous even when the other is correct.",
      "",
      "Moving to a public subnet makes the exposure worse, not better.",
      "More internet gateways add more public paths - the opposite of remediation."
    ],
    services: ["Amazon VPC"],
    tags: ["security groups", "least privilege", "best practices"]
  },
  {
    id: "3.5-022",
    domain: 3,
    task: "3.5",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO services connect a company's on-premises infrastructure to AWS? (Select TWO.)",
    options: [
      "AWS Site-to-Site VPN",
      "AWS Direct Connect",
      "Amazon Polly",
      "Amazon QuickSight",
      "Amazon Lightsail containers"
    ],
    answer: [0, 1],
    explanation: "Site-to-Site VPN (encrypted tunnels over the internet) and Direct Connect (a dedicated private circuit) are the two hybrid connectivity options in scope. Polly speaks, QuickSight visualizes, and Lightsail containers host small container workloads - none connect networks.",
    rationales: [
      "",
      "",
      "Polly is a text-to-speech service.",
      "QuickSight is a business intelligence dashboard service.",
      "Lightsail containers run applications; they are not private network links."
    ],
    services: ["AWS Site-to-Site VPN", "AWS Direct Connect"],
    tags: ["hybrid networking", "connectivity"]
  }
);
