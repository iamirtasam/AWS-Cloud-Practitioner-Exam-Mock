window.QBANK = window.QBANK || [];
window.QBANK.push(
  {
    id: "3.7-001",
    domain: 3,
    task: "3.7",
    type: "single",
    difficulty: "easy",
    stem: "A data science team wants to build, train, and deploy its own custom machine learning models on AWS, with managed infrastructure for each stage. Which service fits?",
    options: [
      "Amazon Polly",
      "Amazon QuickSight",
      "Amazon SageMaker AI",
      "Amazon Route 53"
    ],
    answer: [2],
    explanation: "Amazon SageMaker AI is the platform for the full custom ML lifecycle - preparing data, training models on managed compute, tuning, and deploying them to endpoints. When the stem says 'build and train our own models', SageMaker is the answer; the ready-made AI services are for standard tasks that need no custom model.",
    rationales: [
      "Polly converts text into spoken audio.",
      "QuickSight builds business intelligence dashboards.",
      "",
      "Route 53 is the DNS service."
    ],
    services: ["Amazon SageMaker AI"],
    tags: ["sagemaker", "ml platform"]
  },
  {
    id: "3.7-002",
    domain: 3,
    task: "3.7",
    type: "single",
    difficulty: "easy",
    stem: "A company wants to add a conversational chatbot to its website that understands customer questions in text and voice and responds naturally. Which service fits?",
    options: [
      "Amazon Lex",
      "Amazon Comprehend",
      "AWS Glue",
      "Amazon EFS"
    ],
    answer: [0],
    explanation: "Amazon Lex builds conversational interfaces - chatbots and voice assistants - using automatic speech recognition and natural language understanding; it is the technology behind Alexa. Comprehend analyzes text for insight, and the other two options are an ETL tool and a file system.",
    rationales: [
      "",
      "Comprehend extracts sentiment and entities from text; it does not hold a conversation.",
      "Glue prepares and catalogs data for analytics.",
      "EFS is shared file storage."
    ],
    services: ["Amazon Lex"],
    tags: ["lex", "chatbots"]
  },
  {
    id: "3.7-003",
    domain: 3,
    task: "3.7",
    type: "single",
    difficulty: "easy",
    stem: "A security team wants to automatically detect faces, objects, and unsafe content in millions of user-uploaded photos and videos. Which service fits?",
    options: [
      "Amazon Transcribe",
      "Amazon Textract",
      "Amazon Translate",
      "Amazon Rekognition"
    ],
    answer: [3],
    explanation: "Amazon Rekognition is the computer vision service: image and video analysis including object and scene detection, face recognition, and inappropriate content filtering. Transcribe works on audio, Textract on scanned documents, and Translate on language conversion - the data type in the stem (images and video) selects the service.",
    rationales: [
      "Transcribe converts speech in audio files into text.",
      "Textract extracts text and forms from scanned documents.",
      "Translate converts text between languages.",
      ""
    ],
    services: ["Amazon Rekognition"],
    tags: ["rekognition", "computer vision"]
  },
  {
    id: "3.7-004",
    domain: 3,
    task: "3.7",
    type: "single",
    difficulty: "easy",
    stem: "A call center records thousands of hours of customer calls and wants the audio converted into searchable text. Which service fits?",
    options: [
      "Amazon Transcribe",
      "Amazon Polly",
      "Amazon Rekognition",
      "Amazon Athena"
    ],
    answer: [0],
    explanation: "Amazon Transcribe performs speech-to-text: audio in, accurate transcript out, with speaker identification and custom vocabulary support. Polly is the reverse direction - text to speech - and confusing the two is a standard exam trap.",
    rationales: [
      "",
      "Polly converts text into spoken audio - the opposite direction of the requirement.",
      "Rekognition analyzes images and video.",
      "Athena queries data in S3 with SQL."
    ],
    services: ["Amazon Transcribe"],
    tags: ["transcribe", "speech to text"]
  },
  {
    id: "3.7-005",
    domain: 3,
    task: "3.7",
    type: "single",
    difficulty: "easy",
    stem: "A news site wants to give every article a spoken-audio version so users can listen instead of reading. Which service fits?",
    options: [
      "Amazon Transcribe",
      "Amazon Translate",
      "Amazon Polly",
      "Amazon Comprehend"
    ],
    answer: [2],
    explanation: "Amazon Polly is text-to-speech: it turns written text into lifelike spoken audio in many voices and languages - exactly a listen-to-the-article feature. Transcribe is speech-to-text, the opposite direction, and Translate changes the language rather than the medium.",
    rationales: [
      "Transcribe turns existing audio into text, not text into audio.",
      "Translate converts text between languages while keeping it as text.",
      "",
      "Comprehend analyzes text for sentiment and entities."
    ],
    services: ["Amazon Polly"],
    tags: ["polly", "text to speech"]
  },
  {
    id: "3.7-006",
    domain: 3,
    task: "3.7",
    type: "single",
    difficulty: "medium",
    stem: "A team processes customer feedback text to detect sentiment and extract product names mentioned. Separately, it scans paper feedback forms into images and needs the text pulled out of them. Which pairing of services is correct?",
    options: [
      "Textract for the text analysis; Comprehend for the scanned images",
      "Comprehend for the text analysis; Textract for the scanned images",
      "Rekognition for both, since both involve documents",
      "Polly for the text analysis; Transcribe for the scanned images"
    ],
    answer: [1],
    explanation: "The two needs are different stages of text work: Comprehend analyzes text you already have - sentiment, entities, key phrases - while Textract extracts text from scanned documents and images in the first place. Both halves of the wrong pairings swap the two, and the vision and speech services do neither job.",
    rationales: [
      "Swapped: analysis belongs to Comprehend, and reading scanned images belongs to Textract.",
      "",
      "Rekognition detects objects and faces in images; it does not perform form-level text extraction or sentiment analysis.",
      "Polly and Transcribe are the text-to-speech and speech-to-text pair, unrelated to documents."
    ],
    services: ["Amazon Comprehend", "Amazon Textract"],
    tags: ["comprehend", "textract", "comparison"]
  },
  {
    id: "3.7-007",
    domain: 3,
    task: "3.7",
    type: "single",
    difficulty: "medium",
    stem: "A finance department receives thousands of scanned invoices as PDFs and images and needs the vendor names, totals, and table line items extracted automatically. Which service fits?",
    options: [
      "Amazon Textract",
      "Amazon Polly",
      "Amazon Translate",
      "Amazon Lex"
    ],
    answer: [0],
    explanation: "Amazon Textract goes beyond plain OCR: it pulls printed text, handwriting, form key-value pairs, and table structures out of scanned documents - built for exactly the invoice problem. The stem's words 'scanned', 'PDF', 'forms', and 'tables' are the exam tell for Textract.",
    rationales: [
      "",
      "Polly produces spoken audio from text.",
      "Translate converts text between languages.",
      "Lex builds conversational chatbots."
    ],
    services: ["Amazon Textract"],
    tags: ["textract", "documents"]
  },
  {
    id: "3.7-008",
    domain: 3,
    task: "3.7",
    type: "single",
    difficulty: "easy",
    stem: "A content platform localizes its articles into a dozen languages automatically. Which service performs the translation?",
    options: [
      "Amazon Transcribe",
      "Amazon Rekognition",
      "Amazon Textract",
      "Amazon Translate"
    ],
    answer: [3],
    explanation: "Amazon Translate provides managed neural machine translation between languages. The other three cover speech-to-text, image analysis, and document text extraction - none of them translate.",
    rationales: [
      "Transcribe converts audio to text.",
      "Rekognition analyzes images and video.",
      "Textract reads scanned documents.",
      ""
    ],
    services: ["Amazon Translate"],
    tags: ["translate"]
  },
  {
    id: "3.7-009",
    domain: 3,
    task: "3.7",
    type: "single",
    difficulty: "medium",
    stem: "An analyst wants to run ad-hoc SQL queries directly against CSV and JSON files sitting in Amazon S3, with no servers to provision and payment only for the queries run. Which service fits?",
    options: [
      "Amazon RDS",
      "Amazon ElastiCache",
      "Amazon Athena",
      "AWS Direct Connect"
    ],
    answer: [2],
    explanation: "Amazon Athena is serverless, query-in-place analytics: standard SQL against data in S3, billed per query, with nothing to provision or manage. It is the standard answer whenever the stem says 'query data in S3 with SQL' and 'no infrastructure'.",
    rationales: [
      "RDS hosts relational databases with provisioned instances; the data here already lives in S3.",
      "ElastiCache is an in-memory cache for applications.",
      "",
      "Direct Connect is a private network link, not a query engine."
    ],
    services: ["Amazon Athena"],
    tags: ["athena", "analytics"]
  },
  {
    id: "3.7-010",
    domain: 3,
    task: "3.7",
    type: "single",
    difficulty: "medium",
    stem: "A smart-factory produces tens of thousands of sensor readings per second that must be collected, processed, and analyzed in real time as they arrive. Which service fits?",
    options: [
      "Amazon S3 Glacier Flexible Retrieval",
      "Amazon Kinesis",
      "Amazon QuickSight",
      "Amazon Route 53"
    ],
    answer: [1],
    explanation: "Amazon Kinesis ingests and processes high-volume streaming data in real time - sensor feeds, clickstreams, logs - so analysis happens on the live flow rather than hours later in a batch. The words 'real time' plus 'per second' are the Kinesis signature on the exam.",
    rationales: [
      "Glacier is archival storage retrieved in minutes to hours - the opposite of real time.",
      "",
      "QuickSight renders dashboards over prepared data; it does not ingest streams.",
      "Route 53 is DNS."
    ],
    services: ["Amazon Kinesis"],
    tags: ["kinesis", "streaming", "real-time"]
  },
  {
    id: "3.7-011",
    domain: 3,
    task: "3.7",
    type: "single",
    difficulty: "medium",
    stem: "A data engineering team needs to clean, transform, and combine data from many sources before loading it into analytics systems, plus a catalog of what data exists and where. Which service fits?",
    options: [
      "AWS Glue",
      "Amazon Polly",
      "Amazon Lex",
      "Amazon EBS"
    ],
    answer: [0],
    explanation: "AWS Glue is the serverless data integration service: it prepares and transforms data (ETL) and provides the Data Catalog that inventories datasets across the estate. 'Prepare', 'transform', 'catalog' in a data context point to Glue.",
    rationales: [
      "",
      "Polly speaks text aloud.",
      "Lex builds chatbots.",
      "EBS provides block storage volumes."
    ],
    services: ["AWS Glue"],
    tags: ["glue", "etl", "data catalog"]
  },
  {
    id: "3.7-012",
    domain: 3,
    task: "3.7",
    type: "single",
    difficulty: "easy",
    stem: "Business analysts want interactive dashboards and visualizations built on top of the company's data, without writing code. Which service fits?",
    options: [
      "Amazon Kinesis",
      "AWS Glue",
      "Amazon Textract",
      "Amazon QuickSight"
    ],
    answer: [3],
    explanation: "Amazon QuickSight is the managed business intelligence service: dashboards, visualizations, and reports for business users. Ingestion, transformation, and document reading are other services' jobs.",
    rationales: [
      "Kinesis handles streaming data ingestion.",
      "Glue transforms and catalogs data.",
      "Textract extracts text from documents.",
      ""
    ],
    services: ["Amazon QuickSight"],
    tags: ["quicksight", "bi"]
  },
  {
    id: "3.7-013",
    domain: 3,
    task: "3.7",
    type: "single",
    difficulty: "medium",
    stem: "A company wants a managed data warehouse purpose-built for analytics over petabytes of historical data, queried by BI tools with complex aggregations. Which service fits?",
    options: [
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon ElastiCache",
      "Amazon Route 53"
    ],
    answer: [1],
    explanation: "Amazon Redshift is the petabyte-scale data warehouse: columnar storage and massively parallel queries tuned for analytics, feeding tools like QuickSight. Operational NoSQL, caching, and DNS are different animals entirely.",
    rationales: [
      "DynamoDB serves key-value access at operational scale, not analytical aggregations over history.",
      "",
      "ElastiCache accelerates application reads; it is not an analytics warehouse.",
      "Route 53 is DNS."
    ],
    services: ["Amazon Redshift"],
    tags: ["redshift", "data warehouse"]
  },
  {
    id: "3.7-014",
    domain: 3,
    task: "3.7",
    type: "single",
    difficulty: "medium",
    stem: "A startup wants to add generative AI features - summarizing documents and answering questions over company content - using large foundation models through an API, without training or hosting any models itself. Which service fits?",
    options: [
      "Amazon ElastiCache",
      "AWS Glue",
      "Amazon Bedrock",
      "Amazon Connect"
    ],
    answer: [2],
    explanation: "Amazon Bedrock provides API access to a choice of foundation models for text and image generation, with capabilities such as knowledge bases for grounding answers in company content - no model training or infrastructure to manage. The 'use foundation models via API' phrasing is the Bedrock tell.",
    rationales: [
      "ElastiCache is an in-memory cache.",
      "Glue prepares data for analytics.",
      "",
      "Connect is a cloud contact center."
    ],
    services: ["Amazon Bedrock"],
    tags: ["bedrock", "generative ai"]
  },
  {
    id: "3.7-015",
    domain: 3,
    task: "3.7",
    type: "single",
    difficulty: "hard",
    stem: "A social platform needs to automatically identify objects and unsafe content in uploaded images, and separately gauge the sentiment of the captions users write. Which pair of services covers both?",
    options: [
      "Amazon Rekognition for the images; Amazon Comprehend for the captions",
      "Amazon Textract for the images; Amazon Translate for the captions",
      "Amazon SageMaker AI for both, with a custom model built for each",
      "Amazon Polly for the images; Amazon Transcribe for the captions"
    ],
    answer: [0],
    explanation: "Rekognition handles the vision tasks - objects, scenes, faces, content moderation - and Comprehend handles the language task of sentiment analysis. A custom SageMaker model would work but violates the managed-service principle at this level: for standard tasks, the purpose-built service is the answer.",
    rationales: [
      "",
      "Textract reads text out of scanned documents, and Translate converts languages - neither matches either need.",
      "Technically possible but the wrong exam answer: both are standard, fully managed tasks served by purpose-built services.",
      "Polly generates speech from text and Transcribe converts audio to text - neither analyzes images or captions."
    ],
    services: ["Amazon Rekognition", "Amazon Comprehend"],
    tags: ["rekognition", "comprehend", "service selection"]
  },
  {
    id: "3.7-016",
    domain: 3,
    task: "3.7",
    type: "multi",
    difficulty: "medium",
    stem: "Which TWO of the following are AI services? (Select TWO.)",
    options: [
      "AWS Glue",
      "Amazon Lex",
      "Amazon Rekognition",
      "Amazon QuickSight",
      "AWS Direct Connect"
    ],
    answer: [1, 2],
    explanation: "Lex (chatbots) and Rekognition (image and video analysis) are AI services. Glue is data integration, QuickSight is business intelligence, and Direct Connect is a private network link - none of them apply machine learning.",
    rationales: [
      "Glue is an ETL and data catalog service.",
      "",
      "",
      "QuickSight builds dashboards from data.",
      "Direct Connect provides private connectivity to AWS."
    ],
    services: ["Amazon Lex", "Amazon Rekognition"],
    tags: ["ai services"]
  },
  {
    id: "3.7-017",
    domain: 3,
    task: "3.7",
    type: "multi",
    difficulty: "medium",
    stem: "A team is building an analytics platform on AWS. Which TWO of the following are analytics services it should consider? (Select TWO.)",
    options: [
      "Amazon Athena",
      "Amazon Polly",
      "Amazon Rekognition",
      "Amazon Kinesis",
      "Amazon WorkSpaces"
    ],
    answer: [0, 3],
    explanation: "Athena (SQL queries over S3) and Kinesis (real-time streaming ingestion) are analytics services - the guide itself names them in this task statement. Polly and Rekognition are AI services, and WorkSpaces provides virtual desktops.",
    rationales: [
      "",
      "Polly converts text to speech.",
      "Rekognition analyzes images and video.",
      "",
      "WorkSpaces delivers managed virtual desktops."
    ],
    services: ["Amazon Athena", "Amazon Kinesis"],
    tags: ["analytics services"]
  },
  {
    id: "3.7-018",
    domain: 3,
    task: "3.7",
    type: "single",
    difficulty: "hard",
    stem: "A retailer collects website clickstream events and must power a live dashboard that updates within seconds, alongside nightly deep analysis of the day's accumulated history. Which service pairing matches the two speeds of analysis?",
    options: [
      "Amazon S3 Glacier for the live dashboard; Amazon Athena for the nightly batch",
      "Amazon QuickSight for ingestion; Amazon Polly for analysis",
      "Amazon Textract for ingestion; Amazon Translate for analysis",
      "Amazon Kinesis for the live streaming dashboard; Amazon Athena (or a warehouse) over S3 for the nightly batch"
    ],
    answer: [3],
    explanation: "The two speeds need two tools: Kinesis ingests and processes the live event stream for the seconds-fresh dashboard, while the batch side lands data in S3 and queries it with Athena or loads it into a warehouse. Nothing in the archive, speech, or document families belongs anywhere in this architecture.",
    rationales: [
      "Glacier is archive storage with hour-scale retrieval - unusable for a live dashboard.",
      "QuickSight visualizes data; it does not ingest event streams, and Polly speaks.",
      "Textract reads scanned documents and Translate converts languages; neither ingests clickstreams.",
      ""
    ],
    services: ["Amazon Kinesis", "Amazon Athena"],
    tags: ["kinesis", "athena", "streaming vs batch"]
  },
  {
    id: "3.7-019",
    domain: 3,
    task: "3.7",
    type: "single",
    difficulty: "medium",
    stem: "A data analyst who knows SQL but no programming languages must explore terabytes of log files in S3 today. Which service lets them start immediately?",
    options: [
      "Amazon SageMaker AI, after building a custom model",
      "Amazon ElastiCache, after designing a cache key scheme",
      "Amazon Bedrock Agents",
      "Amazon Athena, writing standard SQL directly against the files"
    ],
    answer: [3],
    explanation: "Athena requires exactly one skill the analyst already has - SQL - and zero infrastructure: point it at the S3 data and query. Training a model, designing a cache, or building an agent adds weeks of work for a job that is a SELECT statement away.",
    rationales: [
      "Custom model building is unnecessary for running queries over existing files.",
      "Caching accelerates reads of hot data; it does not provide a query interface.",
      "Agents orchestrate generative AI tasks; the requirement is plain analytics.",
      ""
    ],
    services: ["Amazon Athena"],
    tags: ["athena", "serverless"]
  },
  {
    id: "3.7-020",
    domain: 3,
    task: "3.7",
    type: "single",
    difficulty: "hard",
    stem: "A compliance team must process recorded customer calls: convert each recording to text, then determine whether the conversation was positive or negative. Which pipeline is correct?",
    options: [
      "Amazon Polly to transcribe, then Amazon Translate to score sentiment",
      "Amazon Rekognition to transcribe, then Amazon Textract to score sentiment",
      "Amazon Transcribe to convert audio to text, then Amazon Comprehend to detect sentiment",
      "Amazon Textract to convert audio to text, then Amazon Polly to detect sentiment"
    ],
    answer: [2],
    explanation: "The pipeline pairs the two directions of the speech and text families: Transcribe converts the audio recordings into text, and Comprehend then analyzes that text for sentiment. Every wrong option mangles the chain by assigning transcription or sentiment to services that do neither.",
    rationales: [
      "Polly produces speech from text - the reverse of transcription - and Translate changes languages, not sentiment.",
      "Rekognition analyzes images and Textract reads documents; neither processes audio or sentiment.",
      "",
      "Textract cannot take audio input, and Polly generates audio rather than analyzing it."
    ],
    services: ["Amazon Transcribe", "Amazon Comprehend"],
    tags: ["transcribe", "comprehend", "pipeline"]
  },
  {
    id: "3.7-021",
    domain: 3,
    task: "3.7",
    type: "single",
    difficulty: "medium",
    stem: "When does a workload call for Amazon SageMaker AI rather than a ready-made AI service such as Amazon Rekognition?",
    options: [
      "When the task is a standard one such as face detection that managed services already perform",
      "When the team needs to train a custom model on its own proprietary data with control over algorithms and training",
      "When the team wants to avoid all machine learning infrastructure",
      "When the data consists of scanned paper forms"
    ],
    answer: [1],
    explanation: "The dividing line is custom versus standard: SageMaker exists for building and training your own models on your own data, while Rekognition, Transcribe, Comprehend, and friends deliver pre-trained capability for common tasks. Scanned forms point to Textract, and 'avoid infrastructure' points to the managed AI services.",
    rationales: [
      "Standard tasks are exactly when the pre-trained managed services are the better answer.",
      "",
      "SageMaker involves the most infrastructure of the options, managed though it is.",
      "Scanned forms with text extraction needs point to Amazon Textract."
    ],
    services: ["Amazon SageMaker AI"],
    tags: ["sagemaker", "service selection"]
  },
  {
    id: "3.7-022",
    domain: 3,
    task: "3.7",
    type: "multi",
    difficulty: "easy",
    stem: "A podcast platform needs both directions of speech processing. Which TWO services provide them? (Select TWO.)",
    options: [
      "Amazon Textract",
      "Amazon Transcribe, to convert recordings into text",
      "Amazon Translate",
      "Amazon Polly, to create spoken audio from text",
      "AWS Glue"
    ],
    answer: [1, 3],
    explanation: "Transcribe is speech-to-text and Polly is text-to-speech - the two directions of the speech pipeline, and a frequent exam pairing. Textract reads documents, Translate swaps languages in text, and Glue moves data.",
    rationales: [
      "Textract extracts text from scanned documents, not from audio.",
      "",
      "Translate converts text between languages; audio is untouched.",
      "",
      "Glue is a data integration service."
    ],
    services: ["Amazon Transcribe", "Amazon Polly"],
    tags: ["transcribe", "polly", "speech"]
  }
);
