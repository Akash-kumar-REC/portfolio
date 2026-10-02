import {
  PersonalInfo,
  QuickStat,
  SkillCategory,
  Project,
  Achievement,
  Education,
  CPPlatform
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Akash Kumar",
  gradientTitle: "Akash Kumar",
  statusBadge: "Open to internships & collaborations",
  heroRoles: [
    "Aspiring AI/ML Engineer",
    "Frontend Developer",
    "DSA Problem Solver"
  ],
  heroIntro: "B.Tech CSE student with a strong foundation in Data Structures & Algorithms and frontend development, building skills in Python, Machine Learning and Generative AI.",
  resumeFileName: "/Akash_Kumar_Resume.pdf",
  aboutParagraph: "I am an enthusiastic B.Tech Computer Science & Engineering student at Rajkiya Engineering College, Sonbhadra (2025–2029). Driven by curiosity and analytical problem solving, I enjoy building sleek, intuitive web applications and tackling challenging algorithmic problems. Currently expanding my skill set into Machine Learning and Generative AI, I aim to merge high-performance frontend interfaces with intelligent AI backend solutions.",
  email: "2508410100012@recsonbhadra.ac.in",
  phone: "+91 9889709881",
  github: "https://github.com/Akash-kumar-REC",
  linkedin: "https://linkedin.com/in/akash-kumar-8967a2381",
  leetcodeUrl: "https://leetcode.com/u/iTz-Akku15",
  gfgUrl: "https://www.geeksforgeeks.org/user/itzakku15"
};

export const quickStats: QuickStat[] = [
  {
    id: "stat-dsa",
    value: "85+",
    label: "DSA Problems Solved",
    subtext: "LeetCode & GeeksforGeeks",
    iconName: "Code2"
  },
  {
    id: "stat-projects",
    value: "2",
    label: "Featured AI/Web Projects",
    subtext: "Full-stack & UI/UX design",
    iconName: "FolderGit2"
  },
  {
    id: "stat-sih",
    value: "SIH",
    label: "Smart India Hackathon",
    subtext: "National level participant",
    iconName: "Award"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    description: "Core programming foundations",
    iconName: "Terminal",
    skills: ["C", "C++", "Python"]
  },
  {
    category: "Frontend",
    description: "Web interfaces & modern UI frameworks",
    iconName: "Layout",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"]
  },
  {
    category: "Backend",
    description: "Server architecture & databases",
    iconName: "Server",
    skills: ["Python", "Node.js", "Express.js", "MongoDB"]
  },
  {
    category: "Python Libraries (Learning)",
    description: "Data science & Machine Learning stack",
    iconName: "Cpu",
    skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-Learn"]
  },
  {
    category: "Core CS",
    description: "Computer science fundamentals",
    iconName: "BrainCircuit",
    skills: ["Data Structures & Algorithms", "Problem Solving"]
  },
  {
    category: "Tools & Platforms",
    description: "Development environments & CP platforms",
    iconName: "Wrench",
    skills: ["Git", "GitHub", "VS Code", "LeetCode", "GeeksforGeeks","codeforces"]
  }
];

export const projects: Project[] = [
  {
    id: "ai-interview-prep",
    title: "AI Interview Preparation Portal",
    subtitle: "Comprehensive Web Application for Practice & Evaluation",
    badge: "AI & Full-Stack",
    description: "An AI-powered web portal crafted to streamline technical, HR, and aptitude interview preparation. Built with modular practice zones connected via RESTful endpoints, with active exploration into local Hugging Face transformer workflows.",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "AI/ML"],
    highlights: [
      "Designed specialized practice zones for HR, Technical, and Aptitude interview sections.",
      "Developed modular frontend pages connected seamlessly to a Node.js + Express.js backend via REST APIs.",
      "Exploring a local Hugging Face / transformer-based model workflow as a cost-effective, private alternative to paid AI APIs."
    ],
    githubUrl: "https://github.com/Akash-kumar-REC/ai-interview-prep-portal",
    featured: true
  },
  {
    id: "innovate-hub",
    title: "InnovateHub",
    subtitle: "Civic & Academic Innovation Solution Platform",
    badge: "Frontend & UI/UX",
    description: "Contributed to an AI-driven problem-solving platform connecting citizens, Higher Education Institutions (HEIs), industry partners, and government bodies to identify, prioritize, and resolve localized societal issues.",
    techStack: ["TypeScript", "CSS", "Python", "Frontend / UI/UX"],
    highlights: [
      "Collaborated on UI/UX design and architecture using TypeScript and modern CSS for intuitive navigation.",
      "Structured workflow pipelines for problem identification, citizen feedback, and multi-stakeholder collaboration.",
      "Integrated clean responsive components tailored for multi-device civic engagement."
    ],
    githubUrl: "https://github.com/Akash-kumar-REC/InnovateHub",
    featured: true
  }
];

export const achievements: Achievement[] = [
  {
    id: "achieve-sih",
    title: "Smart India Hackathon (SIH)",
    roleOrResult: "National Participant",
    organization: "Ministry of Education, Govt. of India",
    badge: "National Hackathon",
    description: "Participated in one of India's largest innovation contests, collaborating in a team to build tech solutions for pressing real-world issues under tight time constraints.",
    iconName: "Flame"
  },
  {
    id: "achieve-adobe",
    title: "Adobe Hackathon",
    roleOrResult: "participant",
    organization: "Adobe",
    badge: "participant",
    description: "Achieved 1st round status by designing and prototyping innovative digital solutions evaluated on technical design, creativity, and execution.",
    iconName: "Sparkles"
  },
  {
    id: "achieve-team-hackathons",
    title: "Rapid Prototyping & Team Hackathons",
    roleOrResult: "Collaborative Developer",
    organization: "Various Tech Communities",
    badge: "Team Innovation",
    description: "Regular participant in competitive hackathons, mastering rapid iteration, git version control collaboration, and high-pressure problem solving.",
    iconName: "Zap"
  }
];

export const education: Education = {
  institution: "Rajkiya Engineering College, Sonbhadra",
  degree: "Bachelor of Technology (B.Tech)",
  duration: "2025 - 2029 (Pursuing)",
  status: "Currently in 2nd Year",
  sgpa1: 7.95,
  sgpa2: 8.27,
  cgpa: 8.11,
  description: "Specializing in Computer Science & Engineering. Actively engaged in algorithmic problem solving, modern web application development, and AI research fundamentals.",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (C++)",
    "Computer Organization",
    "Discrete Mathematics",
    "Web Engineering",
    "Python Programming"
  ]
};

export const cpPlatforms: CPPlatform[] = [
  {
    id: "leetcode",
    platform: "LeetCode",
    username: "iTz-Akku15",
    solvedCount: 48,
    highlightLabel: "Longest Streak",
    highlightValue: "27 Days",
    profileUrl: "https://leetcode.com/u/iTz-Akku15",
    badgeText: "Active Solver",
    iconName: "Code",
    accentColor: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30"
  },
  {
    id: "gfg",
    platform: "GeeksforGeeks",
    username: "itzakku15",
    solvedCount: 38,
    highlightLabel: "Institute Rank",
    highlightValue: "188",
    profileUrl: "https://www.geeksforgeeks.org/user/itzakku15",
    badgeText: "Top Contender",
    iconName: "BookOpen",
    accentColor: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30"
  }
];

export const footerContent = {
  copyright: "© 2026 Akash Kumar. Built with React, TypeScript & Tailwind CSS.",
  socials: [
    { name: "GitHub", url: "https://github.com/Akash-kumar-REC", iconName: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/akash-kumar-8967a2381", iconName: "Linkedin" },
    { name: "LeetCode", url: "https://leetcode.com/u/iTz-Akku15", iconName: "Code" },
    { name: "Email", url: "mailto:2508410100012@recsonbhadra.ac.in", iconName: "Mail" }
  ]
};
