export const initialUserData = {
  name: "Alex Morgan",
  handle: "@alex_dev",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
  level: "Senior Apprentice",
  xp: 3420,
  xpToNextLevel: 5000,
  loopCoins: 480,
  streakDays: 14,
  streakGoal: 30,
  rank: "#12 Global",
  hoursLearned: 58.5,
  completedCoursesCount: 3,
  completedTestsCount: 7,
  weeklyActivity: [
    { day: "Mon", hours: 2.5 },
    { day: "Tue", hours: 3.8 },
    { day: "Wed", hours: 1.5 },
    { day: "Thu", hours: 4.2 },
    { day: "Fri", hours: 3.0 },
    { day: "Sat", hours: 5.5 },
    { day: "Sun", hours: 4.0 },
  ],
  skills: [
    { name: "React & Next.js", level: 85, color: "bg-indigo-500" },
    { name: "Node.js & Express", level: 78, color: "bg-emerald-500" },
    { name: "System Architecture", level: 65, color: "bg-cyan-500" },
    { name: "TypeScript & Typing", level: 90, color: "bg-blue-500" },
    { name: "Database Design (Postgres/Redis)", level: 70, color: "bg-amber-500" },
  ]
};

export const coursesData = [
  {
    id: "course-1",
    title: "Modern Full-Stack React & Node Enterprise Architecture",
    description: "Master modern micro-frontends, React 18 concurrent mode, high-throughput Node.js streaming APIs, and Docker deployments.",
    category: "Full Stack",
    level: "Advanced",
    rating: 4.9,
    reviewsCount: 1420,
    studentsEnrolled: 8940,
    duration: "24 hours",
    lessonsCount: 36,
    instructor: {
      name: "Dr. Elena Rostova",
      role: "Staff Engineer & Cloud Architect",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    },
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tags: ["React 18", "Node.js", "Docker", "Microservices", "PostgreSQL"],
    enrolled: true,
    progress: 68,
    modules: [
      {
        id: "m1",
        title: "Module 1: Foundations & Concurrent React",
        lessons: [
          { id: "l101", title: "Concurrent Rendering & Transitions in React 18", duration: "25 min", completed: true, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
          { id: "l102", title: "Custom Hooks for Resilient Server Cache", duration: "32 min", completed: true, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
          { id: "l103", title: "State Machines with XState & React Context", duration: "40 min", completed: true, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
        ]
      },
      {
        id: "m2",
        title: "Module 2: High Performance Node.js Backend",
        lessons: [
          { id: "l201", title: "Node.js Event Loop Under Pressure & Memory Leaks", duration: "45 min", completed: true, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
          { id: "l202", title: "Stream Processing & Backpressure Architecture", duration: "38 min", completed: false, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
          { id: "l203", title: "Distributed Caching with Redis Cluster & Pub/Sub", duration: "50 min", completed: false, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
        ]
      },
      {
        id: "m3",
        title: "Module 3: Database Optimization & Microservices",
        lessons: [
          { id: "l301", title: "PostgreSQL Indexing, EXPLAIN ANALYZE & Partitioning", duration: "55 min", completed: false, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
          { id: "l302", title: "Docker Compose & Zero-Downtime Deployments", duration: "42 min", completed: false, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
        ]
      }
    ]
  },
  {
    id: "course-2",
    title: "AI Agents & LLM Application Engineering",
    description: "Design autonomous AI agent workflows, vector embeddings with Pinecone/Qdrant, LangChain pipelines, and function calling systems.",
    category: "AI & ML",
    level: "Intermediate",
    rating: 4.95,
    reviewsCount: 960,
    studentsEnrolled: 6200,
    duration: "18 hours",
    lessonsCount: 28,
    instructor: {
      name: "Marcus Vance",
      role: "Lead AI Researcher at Cognition Labs",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["LLM", "LangChain", "Vector DB", "RAG", "Python"],
    enrolled: true,
    progress: 35,
    modules: [
      {
        id: "m201",
        title: "Module 1: Foundations of Prompt Engineering & Embeddings",
        lessons: [
          { id: "l211", title: "High-Dimensional Vector Embeddings & Similarity", duration: "30 min", completed: true, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
          { id: "l212", title: "RAG Pipeline Design from Scratch", duration: "45 min", completed: true, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
          { id: "l213", title: "Managing Context Windows & Hybrid Search", duration: "35 min", completed: false, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
        ]
      },
      {
        id: "m202",
        title: "Module 2: Autonomous Agents & Tool Use",
        lessons: [
          { id: "l221", title: "ReAct Pattern & Tool Invocation Loops", duration: "50 min", completed: false, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
          { id: "l222", title: "Multi-Agent Coordination & Shared Memory", duration: "60 min", completed: false, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
        ]
      }
    ]
  },
  {
    id: "course-3",
    title: "Distributed Systems & Cloud Scalability",
    description: "Build fault-tolerant cloud platforms using Kafka event streams, gRPC microservices, consensus algorithms, and Kubernetes orchestration.",
    category: "Cloud & DevOps",
    level: "Advanced",
    rating: 4.88,
    reviewsCount: 780,
    studentsEnrolled: 4100,
    duration: "30 hours",
    lessonsCount: 42,
    instructor: {
      name: "Sarah Jenkins",
      role: "Principal Infrastructure Architect",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
    },
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    tags: ["Kubernetes", "Kafka", "gRPC", "Distributed Systems", "AWS"],
    enrolled: false,
    progress: 0,
    modules: [
      {
        id: "m301",
        title: "Module 1: Event-Driven Systems & Kafka Core",
        lessons: [
          { id: "l311", title: "Kafka Partitions, Consumer Groups & Offsets", duration: "40 min", completed: false, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
          { id: "l312", title: "Exactly-Once Semantics & Idempotency", duration: "48 min", completed: false, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
        ]
      }
    ]
  },
  {
    id: "course-4",
    title: "Algorithmic Problem Solving & System Design Masterclass",
    description: "Crush senior coding interviews: dynamic programming, graphs, trie structures, rate limiters, key-value stores, and distributed caching.",
    category: "Computer Science",
    level: "Intermediate",
    rating: 4.92,
    reviewsCount: 2310,
    studentsEnrolled: 15400,
    duration: "40 hours",
    lessonsCount: 60,
    instructor: {
      name: "Devon Thorne",
      role: "Ex-Google Staff Engineer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    thumbnail: "https://images.unsplash.com/photo-1516116211227-bbc141e6e9b4?auto=format&fit=crop&w=800&q=80",
    tags: ["Algorithms", "System Design", "LeetCode", "Data Structures"],
    enrolled: true,
    progress: 82,
    modules: [
      {
        id: "m401",
        title: "Module 1: Graph Traversal & Shortest Path Algorithms",
        lessons: [
          { id: "l411", title: "BFS/DFS Topological Sort and Cycle Detection", duration: "35 min", completed: true, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
          { id: "l412", title: "Dijkstra & A* Pathfinding in Real-World Maps", duration: "50 min", completed: true, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
        ]
      }
    ]
  },
  {
    id: "course-5",
    title: "TypeScript 5.x Deep Dive & Type-Level Metaprogramming",
    description: "Master conditional types, template literal types, mapped types, AST transformers, and bulletproof API schemas with Zod and tRPC.",
    category: "Language Mastery",
    level: "Advanced",
    rating: 4.96,
    reviewsCount: 650,
    studentsEnrolled: 5120,
    duration: "14 hours",
    lessonsCount: 20,
    instructor: {
      name: "Tariq Mansoor",
      role: "TypeScript Core Contributor",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80"
    },
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    tags: ["TypeScript", "Zod", "tRPC", "Metaprogramming"],
    enrolled: false,
    progress: 0,
    modules: [
      {
        id: "m501",
        title: "Module 1: Type-Level Programming Essentials",
        lessons: [
          { id: "l511", title: "Conditional Types & The `infer` Keyword Unlocked", duration: "30 min", completed: false, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
        ]
      }
    ]
  },
  {
    id: "course-6",
    title: "Production Cybersecurity & Threat Modeling for Developers",
    description: "Hands-on OWASP Top 10 defense, JWT vulnerabilities, SQL/NoSQL injection prevention, OAuth2 PKCE flows, and zero-trust auth.",
    category: "Security",
    level: "Intermediate",
    rating: 4.87,
    reviewsCount: 510,
    studentsEnrolled: 3800,
    duration: "16 hours",
    lessonsCount: 24,
    instructor: {
      name: "Alicia Thorne",
      role: "Principal SecOps Engineer",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    },
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    tags: ["Security", "OWASP", "OAuth2", "Cryptography", "Penetration Testing"],
    enrolled: false,
    progress: 0,
    modules: [
      {
        id: "m601",
        title: "Module 1: Modern Auth Attack Vectors & Remediation",
        lessons: [
          { id: "l611", title: "CSRF, XSS, and SameSite Cookie Deep Dive", duration: "35 min", completed: false, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
        ]
      }
    ]
  }
];

export const studyMaterialsData = [
  {
    id: "mat-1",
    title: "React 18 & 19 Core Cheatsheet: Hooks, Actions & Server Components",
    category: "Cheat Sheets",
    format: "Cheatsheet",
    readTime: "8 min read",
    fileSize: "1.2 MB",
    downloads: 4890,
    isBookmarked: true,
    tags: ["React", "Hooks", "RSC", "Frontend"],
    content: `# React 18 & 19 Quick Architectural Reference

## 1. Concurrent Hooks
- \`useTransition()\`: Allows marking UI updates as non-urgent.
\`\`\`jsx
const [isPending, startTransition] = useTransition();

function handleChange(e) {
  setQuery(e.target.value); // Urgent
  startTransition(() => {
    setFilteredList(expensiveFilter(e.target.value)); // Low priority
  });
}
\`\`\`

- \`useDeferredValue(value)\`: Defers updating an expensive derived value until urgent rendering finishes.

## 2. Server Components (RSC) vs Client Components
- Client Components: Include \`'use client'\` at the very top. Required for hooks (\`useState\`, \`useEffect\`), event listeners, and browser APIs.
- Server Components: Default in modern frameworks. Zero client-side JS bundle overhead, direct access to database & file system.

## 3. Optimistic Updates
\`\`\`jsx
const [optimisticLikes, setOptimisticLikes] = useOptimistic(
  likes,
  (current, update) => current + update
);
\`\`\`
`
  },
  {
    id: "mat-2",
    title: "System Design Handouts: 25 High-Throughput Architecture Patterns",
    category: "Architecture Notes",
    format: "PDF Guide",
    readTime: "25 min read",
    fileSize: "4.8 MB",
    downloads: 9420,
    isBookmarked: true,
    tags: ["System Design", "Scalability", "Microservices", "Caching"],
    content: `# High-Throughput System Design Patterns

## Core Scalability Pillars
1. **Cache-Aside Pattern**:
   - Check cache first. On miss, read database, store in cache with TTL, return value.
2. **Write-Through & Write-Behind**:
   - Write-Through: Synchronously updates cache and DB.
   - Write-Behind: Asynchronously batches writes to DB from memory.
3. **Consistent Hashing**:
   - Minimizes key remapping when distributed cache nodes are added or removed (using hash rings and virtual nodes).
4. **Rate Limiting**:
   - Token Bucket: Allows burst traffic up to bucket capacity.
   - Leaky Bucket: Enforces constant outflow rate.
   - Sliding Window Log: Precise timestamp tracking for strict billing.
`
  },
  {
    id: "mat-3",
    title: "TypeScript Generic Metaprogramming & Type Challenges Guide",
    category: "Language Notes",
    format: "Markdown Note",
    readTime: "15 min read",
    fileSize: "850 KB",
    downloads: 3120,
    isBookmarked: false,
    tags: ["TypeScript", "Generics", "Types"],
    content: `# TypeScript Advanced Typing Reference

## 1. Conditional Types and \`infer\`
\`\`\`ts
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type Test = UnwrapPromise<Promise<string>>; // string
\`\`\`

## 2. Template Literal Types
\`\`\`ts
type EventType = "click" | "hover";
type EventHandler = \`on\${Capitalize<EventType>}\`; // "onClick" | "onHover"
\`\`\`

## 3. Deep Partial Recursive Utility
\`\`\`ts
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
\`\`\`
`
  },
  {
    id: "mat-4",
    title: "SQL & PostgreSQL Query Optimization Cheat Sheet",
    category: "Cheat Sheets",
    format: "Cheatsheet",
    readTime: "12 min read",
    fileSize: "2.1 MB",
    downloads: 6200,
    isBookmarked: false,
    tags: ["PostgreSQL", "SQL", "Indexing", "Databases"],
    content: `# PostgreSQL Indexing & Query Tuning

## 1. EXPLAIN ANALYZE Inspection
- **Seq Scan**: Reading entire table. Watch out for large row counts!
- **Index Scan**: Traverses B-Tree and fetches table heap pages.
- **Index Only Scan**: All requested columns exist in the index (Covering Index).

\`\`\`sql
EXPLAIN (ANALYZE, BUFFERS)
SELECT id, title, created_at 
FROM courses 
WHERE category = 'Full Stack'
ORDER BY created_at DESC 
LIMIT 20;
\`\`\`

## 2. Composite Index Column Ordering
Always put high-cardinality equality columns first, followed by range / sorting columns:
\`\`\`sql
CREATE INDEX idx_courses_cat_created ON courses (category, created_at DESC);
\`\`\`
`
  },
  {
    id: "mat-5",
    title: "Docker, Kubernetes & Container Security Checklist",
    category: "DevOps Reference",
    format: "PDF Guide",
    readTime: "18 min read",
    fileSize: "3.5 MB",
    downloads: 4180,
    isBookmarked: true,
    tags: ["Docker", "Kubernetes", "DevOps", "Security"],
    content: `# Container Hardening & K8s Production Checklist

1. **Non-Root Execution**:
   - Always declare \`USER node\` or \`USER nonroot\` in production Dockerfiles.
2. **Multi-Stage Builds**:
   - Strip build tools, headers, and test files from the final production scratch image.
3. **Read-Only Root Filesystem**:
   - Set \`securityContext.readOnlyRootFilesystem: true\` in Kubernetes Pod manifests.
4. **Resource Limits**:
   - Always define both \`requests\` and \`limits\` for CPU and memory to prevent OOM cascade.
`
  },
  {
    id: "mat-6",
    title: "Modern Web Security: OAuth 2.1 & JWT Best Practices",
    category: "Security Guide",
    format: "Markdown Note",
    readTime: "14 min read",
    fileSize: "1.9 MB",
    downloads: 2800,
    isBookmarked: false,
    tags: ["OAuth2", "JWT", "Security", "Auth"],
    content: `# Modern Auth Standards

- **PKCE (Proof Key for Code Exchange)** is now mandatory for ALL clients in OAuth 2.1, including backend services.
- Never store access tokens in \`localStorage\` to mitigate XSS vulnerabilities. Prefer \`HttpOnly\`, \`Secure\`, \`SameSite=Strict\` cookies.
- Keep JWT lifespan short (e.g. 10-15 minutes) paired with rotating refresh tokens stored server-side.
`
  }
];

export const incentiveTestsData = [
  {
    id: "test-react-core",
    title: "React 18 & Concurrent Architecture Challenge",
    description: "Test your mastery over Fiber architecture, custom hooks performance, useTransition, and memory management.",
    category: "Frontend",
    difficulty: "Advanced",
    durationMinutes: 15,
    questionsCount: 5,
    rewardCoins: 120,
    rewardXP: 350,
    badgeAwarded: "React Master Virtuoso",
    passingScorePercentage: 70,
    participantsCount: 3410,
    questions: [
      {
        id: "q1",
        question: "What is the primary architectural purpose of React 18's `useTransition` hook?",
        options: [
          "To trigger CSS animation transitions between page routes",
          "To mark state updates as non-urgent, keeping the UI responsive during expensive renders",
          "To automatically convert client components into server components",
          "To batch synchronous DOM writes into a requestAnimationFrame tick"
        ],
        correctIndex: 1,
        explanation: "`useTransition` tells React that the state update inside `startTransition` has low priority and can be interrupted by higher priority events like clicks or typing."
      },
      {
        id: "q2",
        question: "Why should you NOT store sensitive access tokens in browser `localStorage`?",
        options: [
          "Because localStorage only has a 5MB storage quota",
          "Because localStorage is cleared whenever the browser tab is closed",
          "Because any JavaScript script running on the page (via XSS) has full read access to localStorage",
          "Because localStorage encrypts data with a weak single-DES algorithm"
        ],
        correctIndex: 2,
        explanation: "`localStorage` is vulnerable to Cross-Site Scripting (XSS). If malicious script executes, it can read tokens and exfiltrate them. HttpOnly cookies cannot be read by JS."
      },
      {
        id: "q3",
        question: "In React's Fiber reconciler, what happens when a higher-priority update arrives while a low-priority transition is rendering?",
        options: [
          "The browser completely freezes until both finish",
          "React throws a runtime concurrency conflict error",
          "React interrupts the low-priority work in-memory and renders the urgent update immediately",
          "The urgent update is deferred to the next tick of the Node event loop"
        ],
        correctIndex: 2,
        explanation: "Fiber allows rendering work to be split into chunks and paused/aborted. If high-priority work (like user keystrokes) arrives, React yields immediately."
      },
      {
        id: "q4",
        question: "What problem does `useDeferredValue` solve that standard debounce (`setTimeout`) does NOT?",
        options: [
          "It avoids arbitrary fixed delay milliseconds and renders as soon as the CPU finishes critical work",
          "It forces the CPU to run on a dedicated Web Worker thread",
          "It prevents any network requests from happening",
          "It stores results inside IndexedDB permanently"
        ],
        correctIndex: 0,
        explanation: "`useDeferredValue` adapts dynamically to device speed. Fast devices render with 0ms delay, while slower devices defer rendering without an arbitrary fixed delay."
      },
      {
        id: "q5",
        question: "Which hook should be used when you need to calculate layout measurements before the browser repaints the screen?",
        options: [
          "useEffect",
          "useInsertionEffect",
          "useLayoutEffect",
          "useImperativeHandle"
        ],
        correctIndex: 2,
        explanation: "`useLayoutEffect` fires synchronously after all DOM mutations but before the browser paints. Ideal for reading DOM layout and synchronously re-rendering."
      }
    ]
  },
  {
    id: "test-system-design",
    title: "Senior Distributed Systems & High-Load Architecture",
    description: "Evaluates your knowledge on sharding, consistent hashing, CAP theorem trade-offs, and distributed consensus.",
    category: "Architecture",
    difficulty: "Expert",
    durationMinutes: 20,
    questionsCount: 5,
    rewardCoins: 200,
    rewardXP: 500,
    badgeAwarded: "Scale Titan",
    passingScorePercentage: 75,
    participantsCount: 2150,
    questions: [
      {
        id: "sd-1",
        question: "In consistent hashing, what is the main benefit of using virtual nodes (v-nodes)?",
        options: [
          "To replicate data directly into the browser DOM",
          "To distribute keys evenly across physical servers and prevent hotspots",
          "To reduce network roundtrips to zero",
          "To eliminate the need for hash functions"
        ],
        correctIndex: 1,
        explanation: "Virtual nodes ensure that physical servers are mapped to multiple points on the hash ring, preventing key clustering and uneven load distribution."
      },
      {
        id: "sd-2",
        question: "Under the CAP Theorem, in the presence of a network partition (P), what trade-off must a distributed database make?",
        options: [
          "Between Latency and Cost",
          "Between Consistency (C) and Availability (A)",
          "Between Encryption and Compression",
          "Between Relational and Document schemas"
        ],
        correctIndex: 1,
        explanation: "When nodes cannot communicate across a network partition, the system must either refuse writes/reads to stay consistent (CP) or accept writes/reads risking inconsistency (AP)."
      },
      {
        id: "sd-3",
        question: "Which caching strategy writes data to the cache and the primary database at the same time synchronously?",
        options: [
          "Cache-Aside",
          "Write-Behind (Write-Back)",
          "Write-Through",
          "Refresh-Ahead"
        ],
        correctIndex: 2,
        explanation: "In Write-Through caching, the cache layer intercepts writes and simultaneously writes to both cache and backing datastore before acknowledging success."
      },
      {
        id: "sd-4",
        question: "What is the primary role of Apache Kafka's consumer group offset commit?",
        options: [
          "To encrypt payload messages on disk",
          "To track the last acknowledged message processed by a consumer for failover recovery",
          "To automatically delete old topics",
          "To sort data alphabetically across partitions"
        ],
        correctIndex: 1,
        explanation: "Offsets allow Kafka to know exactly where a consumer in a group left off, enabling seamless resumption if a consumer crashes."
      },
      {
        id: "sd-5",
        question: "When designing an idempotent payment charge API endpoint, what mechanism should be provided by the client?",
        options: [
          "An Idempotency-Key header with a unique UUID",
          "A base64 encoded client IP address",
          "The current millisecond timestamp only",
          "A random HMAC secret key without record"
        ],
        correctIndex: 0,
        explanation: "An Idempotency-Key header with a unique UUID allows the server to verify whether an identical charge request has already been processed and return cached results without double-charging."
      }
    ]
  },
  {
    id: "test-algorithms-sprint",
    title: "Data Structures & Big-O Speed Sprint",
    description: "Rapid-fire assessment on tree balancing, graph traversal complexities, and dynamic programming.",
    category: "Computer Science",
    difficulty: "Intermediate",
    durationMinutes: 10,
    questionsCount: 5,
    rewardCoins: 90,
    rewardXP: 250,
    badgeAwarded: "Algorithm Ace",
    passingScorePercentage: 60,
    participantsCount: 5200,
    questions: [
      {
        id: "algo-1",
        question: "What is the worst-case time complexity of searching in an unbalanced Binary Search Tree (BST)?",
        options: ["O(log N)", "O(1)", "O(N)", "O(N log N)"],
        correctIndex: 2,
        explanation: "If inserted in sorted order, an unbalanced BST degenerates into a singly linked list, resulting in O(N) linear lookup."
      },
      {
        id: "algo-2",
        question: "Which data structure is typically used to implement Breadth-First Search (BFS)?",
        options: ["Stack (LIFO)", "Queue (FIFO)", "Max-Heap", "Trie"],
        correctIndex: 1,
        explanation: "BFS explores neighbors level-by-level using a FIFO Queue to maintain visiting order."
      },
      {
        id: "algo-3",
        question: "What is the amortized time complexity of inserting an element into a dynamic array (like JavaScript Array or Python list)?",
        options: ["O(1)", "O(N)", "O(log N)", "O(N^2)"],
        correctIndex: 0,
        explanation: "While resizing takes O(N), it happens exponentially infrequently (doubling), making the amortized cost per insertion O(1)."
      },
      {
        id: "algo-4",
        question: "Which algorithm finds the shortest path on a weighted graph with non-negative edge weights?",
        options: ["Dijkstra's Algorithm", "Kruskal's Algorithm", "Depth-First Search", "Boyer-Moore"],
        correctIndex: 0,
        explanation: "Dijkstra's algorithm greedily extracts the lowest-cost vertex using a priority queue to guarantee shortest path with non-negative weights."
      },
      {
        id: "algo-5",
        question: "What key technique distinguishes Dynamic Programming from simple Divide-and-Conquer?",
        options: [
          "Memoization / Tabulation of overlapping subproblems",
          "Using multiple CPU threads",
          "Using asymptotic notation",
          "Converting code into WebAssembly"
        ],
        correctIndex: 0,
        explanation: "Dynamic programming stores solutions to overlapping subproblems to prevent recalculating the same sub-tree multiple times."
      }
    ]
  }
];

export const rewardsStoreData = [
  {
    id: "rw-1",
    title: "1-on-1 Senior Staff Mentorship Call",
    description: "45-minute live architecture review & career guidance with a FAANG Staff Engineer.",
    costCoins: 600,
    category: "Mentorship",
    icon: "Video",
    stock: 5
  },
  {
    id: "rw-2",
    title: "Official Verified LearnLoop Certificate of Excellence",
    description: "Cryptographically verified digital certificate & LinkedIn badge for your portfolio.",
    costCoins: 350,
    category: "Certification",
    icon: "Award",
    stock: 999
  },
  {
    id: "rw-3",
    title: "Faang Interview Vault & System Design Blueprints",
    description: "Comprehensive 200+ page interactive breakdown of production interview problems.",
    costCoins: 250,
    category: "Resources",
    icon: "BookOpen",
    stock: 999
  },
  {
    id: "rw-4",
    title: "Pro Dark Mode Holographic Profile Theme & Badge",
    description: "Stand out on the leaderboard with a custom glowing neon badge and animated avatar ring.",
    costCoins: 180,
    category: "Profile Perk",
    icon: "Sparkles",
    stock: 999
  }
];

export const leaderboardData = [
  { rank: 1, name: "Sophia Zhang", handle: "@sophiaz", xp: 14200, coins: 1840, streak: 45, badge: "Master Architect" },
  { rank: 2, name: "Liam O'Connor", handle: "@liam_oc", xp: 12890, coins: 1520, streak: 38, badge: "Algorithm Ace" },
  { rank: 3, name: "Aarav Patel", handle: "@aarav_codes", xp: 11450, coins: 1390, streak: 31, badge: "Scale Titan" },
  { rank: 4, name: "Elena Rostova", handle: "@elena_r", xp: 9800, coins: 1100, streak: 28, badge: "React Virtuoso" },
  { rank: 5, name: "Marcus Chen", handle: "@m_chen", xp: 8750, coins: 950, streak: 22, badge: "Cloud Master" },
  { rank: 12, name: "Alex Morgan (You)", handle: "@alex_dev", xp: 3420, coins: 480, streak: 14, badge: "Senior Apprentice" },
];

