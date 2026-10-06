window.QBANK = window.QBANK || [];
window.QBANK.push(
  {
    id: "2.3-001",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "easy",
    stem: "What does AWS Identity and Access Management (IAM) enable an account to do?",
    options: [
      "Protect applications from DDoS attacks",
      "Securely control who is authenticated (signed in) and who is authorized (allowed to do what)",
      "Automatically patch the operating systems of EC2 instances",
      "Store and manage encryption keys for data at rest"
    ],
    answer: [1],
    explanation: "IAM is the account's identity layer: it authenticates principals (who you are) and authorizes every request (what you may do), free of charge and global across Regions. Threat mitigation is Shield, OS patching is customer work, and key management is KMS.",
    rationales: [
      "DDoS protection is the job of AWS Shield and related services.",
      "",
      "Operating system patching is not an IAM capability at all.",
      "Encryption key management belongs to AWS KMS."
    ],
    services: ["AWS IAM"],
    tags: ["iam", "fundamentals"]
  },
  {
    id: "2.3-002",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "easy",
    stem: "What is an IAM user?",
    options: [
      "A saved configuration template for launching EC2 instances",
      "A billing entity that pays for AWS usage",
      "A Region-specific container for resources",
      "An identity with long-term credentials (password for console, access keys for CLI/API) representing a person or application"
    ],
    answer: [3],
    explanation: "An IAM user is a permanent identity in one account, holding a console password and/or access keys, with permissions attached directly or through groups. Templates are launch templates, billing identity is the account, and resource containers are VPCs.",
    rationales: [
      "That describes a launch template, not an identity.",
      "The AWS account is the billing entity; IAM users cost nothing.",
      "Resources live in VPCs; users are account-level identities.",
      ""
    ],
    services: ["AWS IAM"],
    tags: ["iam", "users"]
  },
  {
    id: "2.3-003",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "easy",
    stem: "A team wants to attach one set of permissions to all of its database administrators at once, and update it in one place. Which IAM construct fits?",
    options: [
      "An IAM role assumed by each administrator individually",
      "A separate customer-managed policy copied onto each user's account",
      "An IAM group with the permissions policy attached to the group",
      "A service control policy applied to one user"
    ],
    answer: [2],
    explanation: "Groups bundle users so permissions are attached once and inherited by every member - add the administrator to the group, they get the permissions; change the group's policy, everyone updates together. It is the standard answer for managing sets of people with the same duties.",
    rationales: [
      "A role could work in federated setups, but the plain construct for bundling human users is a group.",
      "Copying policies per user defeats single-point management - the exact problem being solved.",
      "",
      "SCPs are organization-level guardrails, not per-user permission grants."
    ],
    services: ["AWS IAM"],
    tags: ["iam", "groups"]
  },
  {
    id: "2.3-004",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "What is an IAM role?",
    options: [
      "An identity that can be assumed to obtain temporary credentials, with no long-term password or access keys of its own",
      "A permanent user account for a human administrator",
      "A physical hardware token for MFA",
      "A JSON document describing the network rules of a VPC"
    ],
    answer: [0],
    explanation: "A role is an assumable identity: when assumed - by a service, a user, another account, or a federation - it issues temporary credentials that expire automatically. That lack of long-term secrets is what makes roles the best-practice choice for applications and cross-account access.",
    rationales: [
      "",
      "A permanent human account is an IAM user, not a role.",
      "MFA hardware tokens are authentication devices, unrelated to roles.",
      "Network rules are security groups and NACLs."
    ],
    services: ["AWS IAM"],
    tags: ["iam", "roles"]
  },
  {
    id: "2.3-005",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "An application running on an EC2 instance must read objects from a private S3 bucket. What is the best-practice way to grant that access?",
    options: [
      "Store the account root user's access keys on the instance",
      "Create an IAM user, embed its access keys in the application code, and rotate them manually",
      "Make the bucket public so no credentials are needed",
      "Attach an IAM role with the needed S3 permissions to the instance"
    ],
    answer: [3],
    explanation: "Attaching a role to the instance gives the application temporary, auto-rotated credentials through the instance metadata - no secrets to store, leak, or rotate. Embedding keys in code or on the instance is a standing anti-pattern, and public buckets expose the data to the world.",
    rationales: [
      "Using root credentials anywhere - especially on a server - is the worst practice available.",
      "Embedded long-lived keys leak through code and logs; roles exist precisely to avoid this.",
      "A public bucket is a data exposure, not an access strategy.",
      ""
    ],
    services: ["Amazon EC2", "Amazon S3", "AWS IAM"],
    tags: ["roles", "ec2", "s3", "best practices"]
  },
  {
    id: "2.3-006",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "easy",
    stem: "What is the recommended practice for the AWS account root user?",
    options: [
      "Use it for daily administration since it has full access",
      "Share its credentials with the whole operations team",
      "Do not use it for everyday tasks; secure it with MFA and use IAM identities for all work",
      "Delete the root user after creating IAM users"
    ],
    answer: [2],
    explanation: "The root user owns the account and can bypass every restriction, so it is kept for the rare tasks that require it - and protected with MFA in the meantime. Day-to-day work happens through least-privilege IAM identities. The root user cannot be deleted at all.",
    rationales: [
      "Daily root use means every mistake and every credential leak is catastrophic.",
      "Root credentials are never shared; individual accountability requires individual identities.",
      "",
      "The root user cannot be deleted; it is protected, not removed."
    ],
    services: ["AWS IAM"],
    tags: ["root user", "best practices"]
  },
  {
    id: "2.3-007",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "What is an IAM policy?",
    options: [
      "A billing report of service charges",
      "A JSON document that defines permissions - which actions are allowed or denied on which resources, under which conditions",
      "The physical security standard of AWS data centers",
      "A template for launching identical instances"
    ],
    answer: [1],
    explanation: "Policies are the currency of IAM permissions: JSON documents declaring Effect, Action, Resource, and optional Conditions, attached to identities (users, groups, roles) or resources (bucket policies). Everything else in IAM is machinery for attaching and evaluating them.",
    rationales: [
      "Cost reporting belongs to billing tools, not IAM.",
      "",
      "Physical security is AWS's infrastructure responsibility.",
      "That describes launch templates."
    ],
    services: ["AWS IAM"],
    tags: ["iam", "policies"]
  },
  {
    id: "2.3-008",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "An S3 bucket policy grants read access to a specific role. What kind of policy is this?",
    options: [
      "A resource-based policy - attached to the resource (the bucket) rather than to an identity",
      "An identity-based policy attached to a user",
      "A service control policy from AWS Organizations",
      "An access key rotation policy"
    ],
    answer: [0],
    explanation: "Resource-based policies live on the resource itself - S3 bucket policies are the canonical example - and can grant access to principals, including from other accounts. Identity-based policies attach to users/groups/roles; SCPs are organization guardrails.",
    rationales: [
      "",
      "Identity-based policies attach to identities, not buckets.",
      "SCPs constrain accounts organization-wide; they are not bucket policies.",
      "Key rotation is unrelated to bucket access grants."
    ],
    services: ["Amazon S3", "AWS IAM"],
    tags: ["policies", "s3", "resource-based"]
  },
  {
    id: "2.3-009",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "hard",
    stem: "A user's identity-based policies allow s3:GetObject on a bucket, but a policy evaluated in the same request contains an explicit Deny for that action. What is the result?",
    options: [
      "The allow wins, because it appears first",
      "The request is evaluated on a random basis for load balancing",
      "Both policies cancel out and the request is allowed by default",
      "The explicit Deny wins - a deny in any applicable policy overrides every allow"
    ],
    answer: [3],
    explanation: "AWS evaluates requests starting from implicit deny: nothing is allowed unless a policy allows it, and an explicit Deny anywhere in the evaluation wins over any allow. This is the rule that makes SCP guardrails and emergency locks effective.",
    rationales: [
      "Order of appearance is irrelevant - deny always dominates.",
      "Authorization is deterministic, never randomized.",
      "Denials do not cancel allows; they override them.",
      ""
    ],
    services: ["AWS IAM"],
    tags: ["policies", "evaluation", "explicit deny"]
  },
  {
    id: "2.3-010",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "A company wants its employees to sign in to the AWS console using their existing corporate directory credentials rather than new AWS-only passwords. Which capability supports this?",
    options: [
      "Creating one shared IAM user for all employees",
      "Disabling authentication on the console",
      "Identity federation with the corporate identity provider (for example via IAM Identity Center)",
      "Emailing employees root user passwords"
    ],
    answer: [2],
    explanation: "Federation lets an external identity provider authenticate users, who then assume an IAM role mapped to their corporate identity - one identity for the employee, no duplicate AWS passwords, automatic deprovisioning when they leave the company.",
    rationales: [
      "A shared user destroys accountability and is a standing anti-pattern.",
      "Authentication can never be disabled; the question is who performs it.",
      "",
      "Root credentials are never distributed - this inverts best practice."
    ],
    services: ["AWS IAM Identity Center"],
    tags: ["federation", "identity center"]
  },
  {
    id: "2.3-011",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "What is AWS IAM Identity Center (successor to AWS Single Sign-On)?",
    options: [
      "A service that rotates EC2 key pairs nightly",
      "The central place to manage workforce single sign-on across AWS accounts and applications, connecting to an external identity provider if desired",
      "A Regional load balancer for authentication traffic",
      "A replacement for S3 bucket policies"
    ],
    answer: [1],
    explanation: "IAM Identity Center centralizes workforce identity: create or federate users once, grant them access to accounts and applications, and they sign in through a single portal. In multi-account organizations it is the recommended way to manage human access.",
    rationales: [
      "Key pair rotation is not an identity-center function.",
      "",
      "It is an identity service, not a network load balancer.",
      "Authorization policies are unaffected - Identity Center manages sign-in and permission assignment."
    ],
    services: ["AWS IAM Identity Center"],
    tags: ["identity center", "sso", "federation"]
  },
  {
    id: "2.3-012",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "easy",
    stem: "What are IAM access keys used for?",
    options: [
      "Signing in to the console with a browser",
      "Encrypting S3 objects at rest",
      "Signing in to the AWS account as root",
      "Making programmatic calls to AWS from the CLI, SDKs, or API"
    ],
    answer: [3],
    explanation: "Access keys (an access key ID and secret access key) are the programmatic credential pair - what the CLI and SDKs sign requests with. Console sign-in uses a password; object encryption uses KMS keys; root sign-in uses the root user's own credentials.",
    rationales: [
      "Console sign-in uses the user's password, not access keys.",
      "Data encryption is handled by KMS keys, not IAM access keys.",
      "Root sign-in uses the root user's credentials - and root should not be used at all.",
      ""
    ],
    services: ["AWS IAM"],
    tags: ["iam", "access keys", "cli"]
  },
  {
    id: "2.3-013",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "An IAM user needs to use the Management Console and also run scripts with the AWS CLI. Which credentials match which need?",
    options: [
      "Access keys for the console; the root password for the CLI",
      "The same access keys work for both console and CLI",
      "IAM users cannot use the CLI",
      "A password for the console; access keys for the CLI"
    ],
    answer: [3],
    explanation: "The two credential types map to the two access paths: passwords authenticate console sessions, access keys sign programmatic requests. Users routinely hold both; they are distinct credentials with distinct lifecycles.",
    rationales: [
      "Root credentials must never be used for routine CLI work.",
      "Access keys do not work in the console login form.",
      "IAM users are fully supported for CLI and API access.",
      ""
    ],
    services: ["AWS IAM"],
    tags: ["iam", "credentials"]
  },
  {
    id: "2.3-014",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "A reporting job only ever needs to read objects from one specific S3 bucket. Which policy design reflects least privilege?",
    options: [
      "AdministratorAccess so the job never fails on permissions",
      "A wildcard allow on every S3 action in every bucket in the account",
      "s3:GetObject and s3:ListBucket scoped to that specific bucket only",
      "ReadOnly access to every service in the account"
    ],
    answer: [2],
    explanation: "Least privilege names the exact actions (read object, list bucket) on the exact resource (that one bucket) and nothing else. Broad admin or account-wide grants 'to be safe' create exactly the over-permission the principle exists to prevent.",
    rationales: [
      "AdministratorAccess grants far beyond the job's needs - a major violation.",
      "An account-wide S3 wildcard still vastly exceeds the stated need.",
      "",
      "Account-wide read access is broader than the single-bucket requirement."
    ],
    services: ["Amazon S3", "AWS IAM"],
    tags: ["least privilege", "policies"]
  },
  {
    id: "2.3-015",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "Why are IAM roles preferred over long-lived access keys for applications that call AWS APIs?",
    options: [
      "Roles are cheaper to run than access keys",
      "Roles provide temporary, automatically rotated credentials with no secrets to embed, store, or leak",
      "Roles bypass the need for any permissions",
      "Access keys are deprecated and no longer function"
    ],
    answer: [1],
    explanation: "Role credentials are issued on demand and expire automatically - AWS handles rotation, and there is no static secret in code, config, or environment to steal. That is why instance profiles, Lambda execution roles, and federated access are all role-based.",
    rationales: [
      "Cost is not a factor - both IAM roles and access keys are free.",
      "",
      "Roles never bypass permissions; they are evaluated like any other identity.",
      "Access keys still work; they are simply the less safe pattern for applications."
    ],
    services: ["AWS IAM"],
    tags: ["roles", "best practices"]
  },
  {
    id: "2.3-016",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "easy",
    stem: "What is the effect of enabling MFA for IAM users with privileged access?",
    options: [
      "It encrypts the resources those users create",
      "It signs in users automatically without passwords",
      "It removes the users' permissions after 90 days",
      "A stolen password alone no longer grants access - a second factor is also required"
    ],
    answer: [3],
    explanation: "MFA defends the sign-in itself: the password is no longer sufficient without the second factor, which neutralizes the most common credential-theft scenario. It does not change permissions, encryption, or session mechanics.",
    rationales: [
      "Resource encryption is a KMS/storage configuration, unrelated to MFA.",
      "MFA adds a factor; it does not remove the password step.",
      "Permission expiry is a different mechanism entirely.",
      ""
    ],
    services: ["AWS IAM"],
    tags: ["mfa", "iam"]
  },
  {
    id: "2.3-017",
    domain: 2,
    task: "2.3",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO statements about IAM roles are TRUE? (Select TWO.)",
    options: [
      "Assuming a role yields temporary credentials that expire automatically",
      "Roles can be assumed by AWS services, IAM users, federated identities, and principals from other accounts",
      "Every role ships with a permanent password for console access",
      "A role cannot be used for cross-account access of any kind",
      "Roles are physical devices attached to servers"
    ],
    answer: [0, 1],
    explanation: "The two defining properties of roles: temporary credentials and assumability by many kinds of principals - services, users, federations, external accounts. Roles have no permanent passwords and are the standard cross-account access mechanism.",
    rationales: [
      "",
      "",
      "Roles issue temporary credentials; they carry no permanent password.",
      "Cross-account role assumption is one of roles' primary uses.",
      "Roles are logical identities, not hardware."
    ],
    services: ["AWS IAM"],
    tags: ["roles"]
  },
  {
    id: "2.3-018",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "hard",
    stem: "An application in Account A must read objects from an S3 bucket in Account B. Which pattern is the standard solution?",
    options: [
      "Copy Account B's objects into Account A's buckets every night",
      "Share Account B's root user credentials with Account A's developers",
      "Create a role in Account B trusting Account A, grant it bucket access, and have the application assume that role",
      "Make the bucket world-readable so both accounts can read it"
    ],
    answer: [2],
    explanation: "Cross-account role assumption is the canonical pattern: Account B defines a role with a trust policy naming Account A and a permissions policy granting the bucket access; Account A's identity assumes it and receives temporary credentials. No credential sharing, no public exposure.",
    rationales: [
      "Nightly copying adds latency and cost without solving authorization - and both copies then need protection.",
      "Sharing root credentials across accounts violates every access-management rule.",
      "",
      "World-readable buckets expose the data to the entire internet."
    ],
    services: ["Amazon S3", "AWS IAM"],
    tags: ["cross-account", "roles", "s3"]
  },
  {
    id: "2.3-019",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "A developer belongs to two IAM groups: one grants access to the development S3 buckets, the other to the deployment pipelines. What permissions does the developer have?",
    options: [
      "Only the permissions of the first group, alphabetically",
      "Nothing - multiple group memberships cancel each other out",
      "The union of both groups' permissions, evaluated with explicit denies taking precedence",
      "Only the permissions of the most recently joined group"
    ],
    answer: [2],
    explanation: "Permissions are additive across all attached and group-inherited policies: the user holds the union, and any explicit Deny in any of them overrides allows. There is no 'latest wins' or alphabetical rule.",
    rationales: [
      "No ordering or naming rule picks a winner - all permissions accumulate.",
      "Multiple memberships are normal and simply add up.",
      "",
      "Membership history has no effect on the evaluation."
    ],
    services: ["AWS IAM"],
    tags: ["groups", "policy evaluation"]
  },
  {
    id: "2.3-020",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "What is the security benefit of role credentials being temporary?",
    options: [
      "They cost less than permanent credentials",
      "Stolen credentials stop working when they expire, shrinking the window an attacker can exploit",
      "They allow the account to skip IAM configuration",
      "They make the resources they access automatically encrypted"
    ],
    answer: [1],
    explanation: "Expiry bounds the damage: a leaked set of temporary credentials becomes worthless at expiration, unlike a static access key that remains valid until someone notices and rotates it. This bounded exposure is the core argument for roles everywhere.",
    rationales: [
      "Both credential types are free - there is no price difference.",
      "",
      "Roles still require correct permission configuration.",
      "Encryption of resources is configured separately, via KMS and service settings."
    ],
    services: ["AWS IAM"],
    tags: ["roles", "temporary credentials"]
  },
  {
    id: "2.3-021",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "easy",
    stem: "In IAM terminology, what is a principal?",
    options: [
      "The senior administrator of an AWS account",
      "The physical server where IAM stores identities",
      "An entity (user, role, federated identity, or application) that can make a request against an AWS resource",
      "The billing owner of the account"
    ],
    answer: [2],
    explanation: "A principal is anything that can make an authenticated request: IAM users and roles, federated users, and applications acting through them. Policies are written to allow or deny principals on resources.",
    rationales: [
      "'Principal' is not a job title.",
      "IAM is a service with no customer-accessible 'storage server'.",
      "",
      "Billing ownership is the account holder, a different concept."
    ],
    services: ["AWS IAM"],
    tags: ["iam", "terminology"]
  },
  {
    id: "2.3-022",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "A new developer joins the platform team, which already has a group with the correct policies. What is the correct onboarding step?",
    options: [
      "Create the user with AdministratorAccess while they learn the system",
      "Have the developer use the root account for their first month",
      "Give the developer no access until they write their own policies",
      "Create an IAM user and add them to the existing group"
    ],
    answer: [3],
    explanation: "The group exists precisely for this: create the user, add them to the group, and they inherit the team's least-privilege permissions immediately and consistently. Root use and blanket admin access are the classic onboarding anti-patterns.",
    rationales: [
      "Starting with admin access violates least privilege from day one and is hard to walk back.",
      "Root credentials are never used for daily work by any team member.",
      "Pre-built group policies exist - nobody needs to write their own on arrival.",
      ""
    ],
    services: ["AWS IAM"],
    tags: ["iam", "groups", "onboarding"]
  },
  {
    id: "2.3-023",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "easy",
    stem: "A newly created IAM user with no policies attached attempts to launch an EC2 instance. What happens?",
    options: [
      "The request is denied - with no permissions granted, nothing is allowed (implicit deny)",
      "The request succeeds, because new users receive full access by default",
      "The request succeeds only during business hours",
      "The request is escalated automatically to the root user for approval"
    ],
    answer: [0],
    explanation: "IAM starts from implicit deny: everything is forbidden until a policy allows it. A fresh user with no permissions can do nothing - which is why permissions are always added deliberately.",
    rationales: [
      "",
      "There is no default access; the opposite - implicit deny - is the default.",
      "Time-of-day has no role in IAM evaluation.",
      "There is no automatic escalation path; permissions come from policies."
    ],
    services: ["AWS IAM"],
    tags: ["iam", "implicit deny"]
  },
  {
    id: "2.3-024",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "hard",
    stem: "Which scenario correctly describes a resource-based policy granting cross-account access on its own?",
    options: [
      "An SCP on Account B banning all S3 actions",
      "An S3 bucket policy in Account B that directly allows a principal in Account A to read objects",
      "A password policy in Account A requiring long passwords",
      "An IAM group in Account A listing Account B's users"
    ],
    answer: [1],
    explanation: "A bucket policy lives on the resource and can name principals from other accounts directly - when the other account also allows it (for same-account roles, that is sufficient), access flows without any role assumption. The distractors are unrelated controls from other layers.",
    rationales: [
      "An SCP is a guardrail that can only restrict, not grant access.",
      "",
      "Password policies have no bearing on cross-account authorization.",
      "IAM groups hold identities from their own account only."
    ],
    services: ["Amazon S3", "AWS IAM"],
    tags: ["resource-based policies", "cross-account"]
  },
  {
    id: "2.3-025",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "What does IAM cost an AWS account?",
    options: [
      "A fixed monthly fee per IAM user",
      "A per-API-call charge for authorization decisions",
      "It is offered at no charge - users, groups, roles, and policies are free",
      "One percent of the account's monthly spend"
    ],
    answer: [2],
    explanation: "IAM is free: create as many users, groups, roles, and policies as needed. (The resources those identities provision cost money - the identity machinery itself does not.)",
    rationales: [
      "There is no per-user fee for IAM.",
      "Authorization decisions are not billed.",
      "",
      "IAM has no spend-based pricing."
    ],
    services: ["AWS IAM"],
    tags: ["iam", "pricing"]
  },
  {
    id: "2.3-026",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "An administrator signs in to the console and switches to a role in another account to perform a maintenance task. What has the administrator done?",
    options: [
      "Assumed the role, receiving temporary credentials scoped to that role's permissions",
      "Permanently merged the two accounts",
      "Upgraded the account's support plan",
      "Copied the other account's IAM users into their own"
    ],
    answer: [0],
    explanation: "Role switching is assumption in action: the user exchanges their current session context for temporary credentials bound to the target role's permissions, for as long as the session lasts. Nothing merges, copies, or persists.",
    rationales: [
      "",
      "Accounts remain entirely separate; switching is a session-level operation.",
      "Support plans are unrelated to role switching.",
      "No identities move between accounts."
    ],
    services: ["AWS IAM"],
    tags: ["roles", "cross-account"]
  },
  {
    id: "2.3-027",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "easy",
    stem: "What is the difference between authentication and authorization?",
    options: [
      "They are two spellings of the same word",
      "Authentication encrypts data; authorization compresses it",
      "Authorization happens once at account creation; authentication happens on every request",
      "Authentication verifies who you are; authorization determines what you are allowed to do"
    ],
    answer: [3],
    explanation: "Authentication proves identity (password, MFA, federation); authorization checks what that identity may do (policies). IAM handles both, and the exam likes options that blur the two into one.",
    rationales: [
      "They are distinct steps of every request.",
      "Neither step concerns encryption or compression of data.",
      "Both occur constantly - authentication at sign-in (and per request with signed API calls), authorization on every action.",
      ""
    ],
    services: ["AWS IAM"],
    tags: ["iam", "terminology"]
  },
  {
    id: "2.3-028",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "A Lambda function must write records to DynamoDB. How should the function be given that access?",
    options: [
      "Store an IAM user's access keys in the function's environment variables",
      "Attach the needed DynamoDB permissions to the function's execution role",
      "Grant the function root user access for maximum compatibility",
      "Make the DynamoDB table publicly writable"
    ],
    answer: [1],
    explanation: "Every Lambda function runs with an execution role; permissions for the function are attached to that role, and AWS supplies temporary credentials to the code automatically. Embedded keys and public tables are the anti-patterns this design exists to eliminate.",
    rationales: [
      "Long-lived keys in environment variables are exactly what the execution role replaces.",
      "",
      "Root access is never available to - or appropriate for - application code.",
      "A publicly writable table is a severe data-integrity and security hole."
    ],
    services: ["AWS Lambda", "Amazon DynamoDB"],
    tags: ["lambda", "roles", "execution role"]
  },
  {
    id: "2.3-029",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "hard",
    stem: "A user's policy allows all S3 actions, but one group policy explicitly denies s3:DeleteBucket. What can the user do?",
    options: [
      "Nothing at all - the deny disables the user's other permissions",
      "Everything including DeleteBucket, because the broader allow wins",
      "Only DeleteBucket - denies convert into the only allowed action",
      "All S3 actions except DeleteBucket - the allow grants broadly and the explicit deny carves out that one action"
    ],
    answer: [3],
    explanation: "Evaluation is additive with deny dominance: the allow contributes its whole scope, and the explicit deny subtracts exactly what it names. Result: full S3 access minus DeleteBucket.",
    rationales: [
      "A deny is surgical - it removes the named action, not the user's other permissions.",
      "Explicit deny overrides allows, so DeleteBucket specifically is impossible.",
      "Denies do not invert into grants.",
      ""
    ],
    services: ["AWS IAM"],
    tags: ["policy evaluation", "explicit deny"]
  },
  {
    id: "2.3-030",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "Which service issues the temporary credentials an identity receives when it assumes a role?",
    options: [
      "AWS Security Token Service (STS)",
      "Amazon Route 53",
      "AWS Config",
      "AWS Trusted Advisor"
    ],
    answer: [0],
    explanation: "STS is the token service behind every role assumption: it validates the trust policy and returns short-lived credentials (access key, secret, session token). The exam rarely goes deeper, but 'STS issues temporary credentials' is the fact to know.",
    rationales: [
      "",
      "Route 53 is DNS.",
      "Config records and evaluates configurations.",
      "Trusted Advisor provides recommendations across cost, security, and more."
    ],
    services: ["AWS STS"],
    tags: ["sts", "roles", "temporary credentials"]
  },
  {
    id: "2.3-031",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "easy",
    stem: "Beyond enabling MFA on the root user, what should be done with the root user's access keys?",
    options: [
      "Distribute them to the operations team for emergencies",
      "Embed them in deployment scripts for reliability",
      "Rotate them weekly and store them in a shared spreadsheet",
      "Delete them so no programmatic root credentials exist, and use IAM identities instead"
    ],
    answer: [3],
    explanation: "The recommendation is blunt: do not generate root access keys at all, and delete any that exist. Root should be reserved for the few console-only tasks that require it, behind MFA, with all programmatic work done by IAM roles and users.",
    rationales: [
      "Distributing root keys destroys accountability and multiplies exposure.",
      "Embedding root keys in scripts is the classic catastrophic credential leak.",
      "A shared spreadsheet of root keys is barely better than publishing them.",
      ""
    ],
    services: ["AWS IAM"],
    tags: ["root user", "best practices"]
  },
  {
    id: "2.3-032",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "A security team wants to find resources in the account that are shared with external accounts or the public. Which tool is designed for this?",
    options: [
      "AWS IAM Access Analyzer, which identifies resources shared with entities outside the trusted zone",
      "Amazon QuickSight",
      "AWS Storage Gateway",
      "Amazon Polly"
    ],
    answer: [0],
    explanation: "Access Analyzer continuously analyzes resource policies (buckets, KMS keys, roles, and more) and flags anything reachable from outside the trusted zone - external accounts or the public. It is the go-to answer for 'find unintended external access'.",
    rationales: [
      "",
      "QuickSight builds BI dashboards.",
      "Storage Gateway bridges on-premises systems to cloud storage.",
      "Polly is text-to-speech."
    ],
    services: ["AWS IAM Access Analyzer"],
    tags: ["access analyzer", "external access"]
  },
  {
    id: "2.3-033",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "Which of the following is NOT a capability of IAM?",
    options: [
      "Defining fine-grained permissions with policies",
      "Hosting a company's public website",
      "Federating external identity providers for console access",
      "Creating users, groups, and roles"
    ],
    answer: [1],
    explanation: "IAM is purely the identity and permissions layer - it hosts no websites. Hosting belongs to services like Amplify, S3 static hosting, or EC2-backed stacks; the other options are core IAM features.",
    rationales: [
      "Policy authorship is IAM's core function.",
      "",
      "Federation with external providers is supported via IAM and IAM Identity Center.",
      "Identity management is the 'I' in IAM."
    ],
    services: ["AWS IAM"],
    tags: ["iam", "scope"]
  },
  {
    id: "2.3-034",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "A mobile app lets end users sign in with Google or Facebook and then read their own data from AWS services. Which pattern fits this at the highest level?",
    options: [
      "Creating one IAM user per end user, manually, each day",
      "Sharing a single IAM user's keys inside the app binary",
      "Web identity federation (for example with Amazon Cognito) so users authenticate with the external provider and receive scoped AWS credentials",
      "Making all the data public so no credentials are needed"
    ],
    answer: [2],
    explanation: "Web identity federation - typically via Amazon Cognito - maps external-provider logins to scoped AWS credentials, at scale, without managing an IAM user per end user. Hardcoded keys and public data are the classic wrong answers here.",
    rationales: [
      "Manual per-user IAM creation cannot scale to consumer identities.",
      "Keys in a distributed binary are effectively public.",
      "",
      "Public data removes both authentication and privacy - never the answer."
    ],
    services: ["Amazon Cognito"],
    tags: ["cognito", "federation", "mobile"]
  },
  {
    id: "2.3-035",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "Within an IAM role, what is the difference between the trust policy and the permissions policy?",
    options: [
      "The trust policy defines which principals are allowed to assume the role; the permissions policy defines what the role can do once assumed",
      "The trust policy defines the role's costs; the permissions policy defines its Region",
      "The trust policy encrypts the role's credentials; the permissions policy deletes them daily",
      "They are two names for the same policy"
    ],
    answer: [0],
    explanation: "Every role has two halves: the trust policy (who can assume it - a service, an account, a federation) and the permissions policy (what the assumers may do). Both must line up for access to flow, and questions love swapping their purposes.",
    rationales: [
      "",
      "Costs and Regions are unrelated to role policies.",
      "Neither policy performs encryption or deletion.",
      "They are distinct policies answering different questions - who may assume, and what may be done."
    ],
    services: ["AWS IAM"],
    tags: ["roles", "trust policy"]
  },
  {
    id: "2.3-036",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "hard",
    stem: "A policy evaluation grants an identity AmazonS3FullAccess, but a service control policy in the organization denies s3:DeleteBucket for the account. What happens when the identity attempts to delete a bucket?",
    options: [
      "The deletion succeeds - SCPs never affect IAM users",
      "The deletion succeeds because the identity's own policy allows it",
      "Only the root user can attempt bucket deletions",
      "The deletion is denied - an SCP sets a ceiling that no identity permission can exceed"
    ],
    answer: [3],
    explanation: "SCPs bound what any principal in the account can do: even a full-access IAM policy cannot exceed the organization's guardrails. This is how enterprises enforce limits - like Region bans - that individuals cannot override.",
    rationales: [
      "SCPs apply to every principal in the account, IAM users included.",
      "The identity-level allow is capped by the account-level deny.",
      "Bucket deletions need no root; the outcome is governed by the policies above.",
      ""
    ],
    services: ["AWS Organizations", "AWS IAM"],
    tags: ["scp", "policy evaluation"]
  },
  {
    id: "2.3-037",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "easy",
    stem: "What is the Regional scope of IAM itself?",
    options: [
      "IAM is a global service - users, roles, and policies apply across all Regions",
      "IAM must be configured separately in every Region",
      "IAM exists only in us-east-1",
      "IAM becomes Regional when a support plan is purchased"
    ],
    answer: [0],
    explanation: "IAM is one of AWS's global services: identities and policies defined once apply everywhere, with no Regional replication to manage. (S3, CloudFront, and Route 53 are other commonly cited global services.)",
    rationales: [
      "",
      "There is nothing to replicate; the service is already global.",
      "IAM's control plane is global, not pinned to one Region.",
      "Support plans do not change service scope."
    ],
    services: ["AWS IAM"],
    tags: ["iam", "global service"]
  },
  {
    id: "2.3-038",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "medium",
    stem: "A contractor needs AWS console access for a two-week project, limited to one S3 bucket. What is the appropriate setup?",
    options: [
      "Share the root user credentials for the two weeks",
      "Grant the contractor AdministratorAccess so the work is never blocked",
      "Create an identity with MFA and a policy scoped to that single bucket, and remove access when the project ends",
      "Add the contractor as a co-owner of the AWS account"
    ],
    answer: [2],
    explanation: "The pattern is least privilege plus lifecycle: scoped policy (one bucket), MFA, and planned removal at project end. Root sharing and blanket admin access turn a two-week need into a permanent, unbounded risk.",
    rationales: [
      "Root credentials are never shared, for any duration.",
      "Admin access vastly exceeds the stated need.",
      "",
      "Account co-ownership is not a concept that exists - and would be even broader than admin access."
    ],
    services: ["AWS IAM"],
    tags: ["least privilege", "contractors"]
  },
  {
    id: "2.3-039",
    domain: 2,
    task: "2.3",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO are IAM identity types that can be granted permissions? (Select TWO.)",
    options: [
      "IAM users",
      "IAM roles",
      "S3 buckets",
      "VPC subnets",
      "EC2 instances"
    ],
    answer: [0, 1],
    explanation: "Identities are the things that act: users, groups, and roles. Buckets, subnets, and instances are resources - the things acted upon - and cannot hold permissions.",
    rationales: [
      "",
      "",
      "A bucket is a resource with a resource-based policy, not an identity.",
      "Subnets are network structures, not actors.",
      "Instances are compute resources; they use roles but are not identities."
    ],
    services: ["AWS IAM"],
    tags: ["iam", "identities"]
  },
  {
    id: "2.3-040",
    domain: 2,
    task: "2.3",
    type: "single",
    difficulty: "hard",
    stem: "An auditor reviews an account and finds: one role attached to each EC2 instance, Lambda execution roles per function, no long-lived access keys in code, and users federating through IAM Identity Center. What is the auditor's most likely assessment of the access design?",
    options: [
      "Non-compliant - access keys must be present for every identity",
      "Non-compliant - roles must not be used on compute",
      "Compliant - the account follows the recommended pattern of roles for workloads and federation for humans, with no static credentials to leak",
      "Compliant only if the account also enables the root user for daily tasks"
    ],
    answer: [2],
    explanation: "This is the textbook target state: roles everywhere for compute, federation for human access, zero static keys. Root is never part of daily work, and the absence of access keys is a strength, not a gap.",
    rationales: [
      "Access keys being absent is the goal - long-lived keys are the liability.",
      "Roles on compute are the explicitly recommended pattern.",
      "",
      "Root for daily tasks would convert a compliant design into a failing one."
    ],
    services: ["AWS IAM", "AWS IAM Identity Center"],
    tags: ["best practices", "capstone"]
  }
);
