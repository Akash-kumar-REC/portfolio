export interface PersonalInfo {
  name: string;
  gradientTitle: string;
  heroRoles: string[];
  heroIntro: string;
  statusBadge: string;
  resumeFileName: string;
  aboutParagraph: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  leetcodeUrl: string;
  gfgUrl: string;
}

export interface QuickStat {
  id: string;
  value: string;
  label: string;
  subtext: string;
  iconName: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  techStack: string[];
  highlights: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  roleOrResult: string;
  organization: string;
  badge: string;
  description: string;
  iconName: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  status: string;
  sgpa1: number;
  sgpa2: number;
  cgpa: number;
  description: string;
  coursework: string[];
}

export interface CPPlatform {
  id: string;
  platform: string;
  username: string;
  solvedCount: number;
  highlightLabel: string;
  highlightValue: string;
  profileUrl: string;
  badgeText: string;
  iconName: string;
  accentColor: string;
}
