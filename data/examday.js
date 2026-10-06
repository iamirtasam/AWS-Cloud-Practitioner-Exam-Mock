window.EXAMDAY = {
  format: {
    questions: "65 questions total: 50 scored and 15 unscored pretest items that do not affect your score",
    time: "90 minutes",
    passing: "700 on a 100-1000 scaled range",
    cost: "100 USD",
    delivery: "Pearson VUE test center or online proctored from home",
    validity: "3 years",
    types: "Multiple choice (one correct of four) and multiple response (two or more correct of five or more options)"
  },

  pacing: [
    { at: "Question 15", by: "18 minutes elapsed", note: "Slightly ahead of the 1.38 minute per question average. If you are past 22 minutes here, start deciding faster and flag more aggressively." },
    { at: "Question 30", by: "38 minutes elapsed", note: "Just past halfway on questions, comfortably under halfway on time. If you are past 45 minutes, stop re-reading stems and commit to your first read." },
    { at: "Question 45", by: "58 minutes elapsed", note: "Two thirds done with a third of the time left. If you are behind here, answer every remaining question quickly rather than perfecting a few." },
    { at: "Question 58", by: "75 minutes elapsed", note: "Leave roughly 15 minutes. If you are at question 50 or earlier at this point, prioritise finishing over reviewing." },
    { at: "Question 65", by: "80 minutes elapsed", note: "Aim to reach the end with 10 minutes spare. Never leave the last questions unread because you were polishing earlier ones." },
    { at: "Review pass", by: "80-90 minutes", note: "Revisit only flagged questions. Change an answer only if you can name the specific reason your first choice was wrong." }
  ],

  strategy: [
    { title: "Read the last sentence first", body: "The final sentence carries the actual ask and its qualifier: MOST cost-effective, LEAST operational overhead, in the LEAST amount of time, or which service FITS. Reading it before the scenario tells you what to look for while you read the body." },
    { title: "Qualifiers decide between correct answers", body: "AWS items frequently offer two or three technically workable options. The qualifier is what makes exactly one of them best. If two answers both work, you have not yet applied the qualifier." },
    { title: "Eliminate on the service's actual job", body: "Most wrong options are real AWS services doing the wrong job. Ask what each service is fundamentally for: SQS queues, SNS fans out, EventBridge routes by rule. The stem names one of those jobs." },
    { title: "Answer every question", body: "There is no penalty for a wrong answer, so an unanswered question is a guaranteed zero and a guess is not. Never leave a blank, even at time expiry." },
    { title: "Use flag-and-return deliberately", body: "Flag anything that takes more than about 90 seconds and move on. A flagged question you return to with fresh eyes is often obvious. A question you grind on burns time you need elsewhere." },
    { title: "For Select TWO, evaluate each option independently", body: "Judge every option as true or false on its own rather than looking for the best pair. Exactly two should stand up as correct and clearly in scope for the stem's requirement." },
    { title: "Trust your first instinct unless you find a concrete error", body: "Change an answer only when you can articulate what specifically makes your original choice wrong. Vague unease is a worse predictor than your first read." },
    { title: "Remember the unscored items", body: "15 of the 65 questions do not count. If a question feels bizarre or far outside the exam guide, it may well be a pretest item. Answer it, flag it, and let it go rather than letting it shake your confidence." },
    { title: "Managed beats self-managed by default", body: "At foundational level, the intended answer is nearly always the more managed option unless the stem gives a reason it will not work. RDS over a database on EC2, Fargate over self-run nodes, managed services over bespoke builds." },
    { title: "Shared responsibility questions have one clean split", body: "Anything below the hypervisor, the physical facilities, and managed-service internals is AWS. Your data, your access decisions, your configuration, and the EC2 guest OS are yours. The exam punishes over-sharing responsibility in both directions." },
    { title: "Match the pricing model to the demand shape", body: "Steady 24/7 baseline means Reserved Instances or Savings Plans. Interruptible batch means Spot. Spiky unpredictable means On-Demand with Auto Scaling. Guaranteed capacity means Capacity Reservations. The workload shape in the stem picks the answer." },
    { title: "Scan for absolute wording", body: "Options containing always, never, guarantees, or eliminates all are usually wrong, because AWS documentation rarely makes absolute claims. This is a tiebreaker, not a rule to apply blindly." },
    { title: "Do not add facts the stem did not give", body: "Answer the scenario as written. If the stem never mentions latency, do not eliminate an option because you imagine latency might matter." },
    { title: "Take the ten-second reset", body: "If you notice yourself rereading the same sentence, look away, breathe once, and reread the final sentence only. This costs ten seconds and recovers more than it spends." },
    { title: "Budget the review pass", body: "Plan to reach question 65 with about ten minutes left, and spend that time only on flagged items. Reviewing questions you were confident about wastes the margin." }
  ],

  traps: [
    { title: "Misplacing the shared responsibility line", body: "AWS: facilities, hardware, hypervisor, and the internals of managed services (RDS engine patching, S3 durability). Customer: data, IAM decisions, configuration, and the EC2 guest OS. 'Who patches' is the classic: hypervisor = AWS, RDS engine = AWS, EC2 OS = customer." },
    { title: "Confusing SNS, SQS, and EventBridge", body: "SQS is a pull-based queue that buffers work. SNS pushes one message out to many subscribers (email, SMS, push). EventBridge routes events to targets by rules. 'Notify many subscribers' = SNS; 'absorb spikes with a queue' = SQS; 'route based on event patterns' = EventBridge." },
    { title: "Confusing EBS, EFS, and S3", body: "EBS is a block volume attached to one instance. EFS is a shared NFS file system mounted by many instances. S3 is object storage accessed over HTTP. Attached disk = EBS; shared files = EFS; objects and backups = S3." },
    { title: "Mixing up CloudTrail, CloudWatch, and Config", body: "CloudTrail records API calls (who did what). CloudWatch collects metrics and alarms (is it healthy). Config records resource configuration and compliance (what did it look like). Match the question to the tool." },
    { title: "Reaching for Dedicated Hosts when isolation alone is needed", body: "Dedicated Hosts exist for per-socket/core software licensing and host-level visibility. If the stem only says 'isolate from other customers' with no licensing angle, Dedicated Instances is the lighter answer." },
    { title: "Treating Capacity Reservations as a discount", body: "Capacity Reservations guarantee capacity in an AZ but bill at On-Demand rates whether used or not. The discount products are Reserved Instances and Savings Plans. Read whether the stem asks to save money or to guarantee capacity." },
    { title: "Using Spot for work that must not stop", body: "Spot is up to 90% off but can be interrupted. Production APIs, checkout flows, and stateful databases never belong on Spot. 'Fault-tolerant and can resume' is the green light; anything else is On-Demand, RI, or Savings Plans." },
    { title: "Mixing up the support plan lineup", body: "The current plans are Basic, AWS Business Support+, AWS Enterprise Support, and AWS Unified Operations. 24x7 engineers without a TAM = Business Support+. Designated TAM and 15-minute response = Enterprise. TAM plus Domain Specialist Engineers and runbooks = Unified Operations." },
    { title: "Confusing Regions, Availability Zones, and edge locations", body: "A Region is a geographic area with multiple isolated AZs. An AZ is one or more data centers. Edge locations are CloudFront caching sites - for content delivery, not deployment. Multi-AZ = availability; multi-Region = disaster recovery and latency." },
    { title: "Swapping security groups and network ACLs", body: "Security groups are stateful, instance-level, allow-only. NACLs are stateless, subnet-level, with numbered allow AND deny rules. 'Block a specific malicious IP at the subnet' points to a NACL; default instance protection is a security group." },
    { title: "Assuming data transfer is free everywhere", body: "Inbound is free; outbound to the internet is charged; Region-to-Region transfer bills BOTH sides; cross-AZ traffic bills per GB each direction. 'Free over the AWS backbone' options for cross-Region replication are wrong." },
    { title: "Thinking TCO proves the cloud is always cheaper", body: "TCO is a data-driven per-workload comparison including facilities, power, staff, and refresh - not a blanket guarantee. Options claiming the cloud is always cheaper, or that TCO only counts hardware, are wrong." },
    { title: "Tagging without activating", body: "A user-defined tag appears in cost reports only after it is ACTIVATED as a cost allocation tag in the Billing console. Options that stop at 'tag the resources' miss the activation step." },
    { title: "Reversing Budgets and Cost Explorer", body: "Budgets alerts against thresholds you set BEFORE overspend lands. Cost Explorer analyzes and forecasts what happened AFTER. 'Warn me at 80%' = Budgets; 'what drove this bill' = Cost Explorer." },
    { title: "Forgetting the migration Rs' order of effort", body: "Rehost changes nothing (fastest), replatform swaps small pieces, refactor rebuilds everything (slowest, largest benefit). 'Exit the data center this quarter' is rehost, never refactor-everything-first." }
  ],

  keywordMap: [
    { keyword: "least operational overhead", means: "Pick the most managed or serverless option: Lambda over EC2, Fargate over self-run nodes, RDS over a database on EC2." },
    { keyword: "most cost-effective", means: "Right-size first, then match the pricing model: commitments for steady baselines, Spot for interruptible, On-Demand for spiky." },
    { keyword: "guarantee capacity in an Availability Zone", means: "On-Demand Capacity Reservations - certainty, not discount." },
    { keyword: "interruptible batch, up to 90% off", means: "Spot Instances." },
    { keyword: "steady 24/7 baseline, one or three years", means: "Reserved Instances or Savings Plans." },
    { keyword: "flexible commitment across instance families and sizes", means: "Savings Plans (dollar-per-hour commitment)." },
    { keyword: "per-socket license, BYOL, physical host compliance", means: "Dedicated Hosts." },
    { keyword: "pay only for requests and milliseconds, no servers", means: "AWS Lambda (watch the 15-minute limit)." },
    { keyword: "attached virtual disk, boot volume", means: "Amazon EBS (gp3 is the low-cost general type)." },
    { keyword: "shared file storage mounted by many instances", means: "Amazon EFS (or FSx for Windows/SMB shares)." },
    { keyword: "objects, backups, static website, unlimited files", means: "Amazon S3; archive patterns mean Glacier classes." },
    { keyword: "absorb spikes, queue, process asynchronously", means: "Amazon SQS." },
    { keyword: "notify many subscribers, email SMS push fanout", means: "Amazon SNS." },
    { keyword: "route events to targets by rules", means: "Amazon EventBridge." },
    { keyword: "cache content at the edge, global low latency delivery", means: "Amazon CloudFront." },
    { keyword: "DNS, register domain, translate names, health-based routing", means: "Amazon Route 53." },
    { keyword: "distribute traffic across instances with health checks", means: "Elastic Load Balancing, paired with Auto Scaling." },
    { keyword: "private instances need outbound internet only", means: "NAT gateway (inbound requires an internet gateway path)." },
    { keyword: "dedicated private line, no internet, consistent latency", means: "AWS Direct Connect (Site-to-Site VPN if speed of setup matters)." },
    { keyword: "who called the API, audit trail", means: "AWS CloudTrail." },
    { keyword: "metrics, logs, alarms, dashboards", means: "Amazon CloudWatch." },
    { keyword: "resource configuration history and compliance", means: "AWS Config." },
    { keyword: "malicious activity, compromised credentials detection", means: "Amazon GuardDuty." },
    { keyword: "software vulnerabilities, CVEs, missing patches", means: "Amazon Inspector." },
    { keyword: "find PII or sensitive data in S3", means: "Amazon Macie." },
    { keyword: "manage encryption keys across AWS services", means: "AWS KMS (CloudHSM for dedicated HSM compliance)." },
    { keyword: "store and rotate database credentials", means: "AWS Secrets Manager." },
    { keyword: "download AWS SOC, ISO, PCI reports", means: "AWS Artifact." },
    { keyword: "one invoice for all accounts, shared RI discounts", means: "Consolidated billing in AWS Organizations." },
    { keyword: "alert me at 80% of budget", means: "AWS Budgets with a threshold alert." },
    { keyword: "what drove last month's bill, visualize and forecast spend", means: "AWS Cost Explorer." },
    { keyword: "estimate a design before deploying", means: "AWS Pricing Calculator." },
    { keyword: "idle load balancers, unassociated Elastic IPs, service limits", means: "AWS Trusted Advisor checks." },
    { keyword: "event affecting MY resources, scheduled maintenance", means: "AWS Health Dashboard (personal view); AWS Health API for automation." },
    { keyword: "spam, phishing, abuse from AWS resources", means: "Report to the AWS Trust and Safety team." },
    { keyword: "third-party software catalog, private offers", means: "AWS Marketplace." },
    { keyword: "employees sign on once to all accounts", means: "IAM Identity Center; application end users mean Amazon Cognito." }
  ],

  checklist: [
    {
      when: "Two weeks out",
      items: [
        "Take one full 65-question timed exam to get a baseline and find your weak domains.",
        "Read the official CLF-C02 exam guide once, end to end, and confirm nothing in it is unfamiliar.",
        "Work through the study notes for any domain scoring below 70 percent.",
        "Book your exam slot if you have not already, so the date is fixed and real.",
        "Drill the Easily Confused tables until service-versus-service questions feel automatic."
      ]
    },
    {
      when: "One week out",
      items: [
        "Take two more full timed exams on different days and confirm you score 80 percent or better.",
        "Review every missed question and write down the specific distinction you got wrong.",
        "Run the flashcard deck in due-only mode daily.",
        "Re-read the keyword map above until each keyword triggers its service instantly.",
        "Confirm your ID matches your registration name exactly, and check the testing requirements."
      ]
    },
    {
      when: "The day before",
      items: [
        "Do one short sprint session only. Do not take a full exam.",
        "Re-read the Must Know boxes across all 19 task statements.",
        "Re-read the traps and keyword map one final time.",
        "If testing online, run the Pearson VUE system check and clear your desk area.",
        "Set out your ID, confirm the start time and time zone, and sleep normally."
      ]
    },
    {
      when: "Exam morning",
      items: [
        "Eat something and hydrate, but not so much that you need a break mid-exam.",
        "Skim the Must Know bullets once. Do not attempt to learn anything new.",
        "Arrive or log in 30 minutes early to absorb check-in delays without stress.",
        "Close every other application and silence your phone if testing online.",
        "Remind yourself that 15 questions do not count and you can miss roughly 15 scored items and still pass."
      ]
    },
    {
      when: "During the exam",
      items: [
        "Read the final sentence of each question first, then the scenario.",
        "Flag anything over 90 seconds and move on without guilt.",
        "Answer every question, even the ones you are guessing on.",
        "Check the clock at questions 15, 30, and 45 against the pacing table.",
        "Reserve the last ten minutes for flagged questions only.",
        "Change an answer only when you can state exactly why the first one was wrong."
      ]
    }
  ],

  afterAction: [
    "Day 1: Take a full timed 65-question exam. Record the score and the per-domain breakdown without reviewing yet.",
    "Day 2: Review every missed question from day 1. For each, write the one sentence that explains the distinction you missed.",
    "Day 3: Drill your two weakest task statements with 20-question domain sessions until each clears 80 percent.",
    "Day 4: Read the study notes for the weakest domain in full, then run its flashcard deck.",
    "Day 5: Take a second full timed exam. Compare the domain breakdown against day 1 to confirm the weak areas moved.",
    "Day 6: Work the Missed and Flagged session until the pool is empty, then re-read the Easily Confused tables.",
    "Day 7: Rest, or do a single 10-question sprint. Recovery matters more than another exam here.",
    "Day 8: Take a third full timed exam. You want 80 percent or better on questions you have not seen recently.",
    "Day 9: Review misses from day 8, then re-read every Must Know box and the keyword map.",
    "Day 10: Light review only. Re-read the traps and pacing plan, confirm logistics, and stop studying by early evening."
  ]
};
