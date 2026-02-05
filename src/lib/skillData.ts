 // Role-to-skills mapping for deterministic demo results
 
 export type CurrentRole = 
   | "software_engineer"
   | "backend_developer"
   | "frontend_developer"
   | "data_analyst"
  | "devops_engineer"
  | "fullstack_developer"
  | "mobile_developer"
  | "qa_engineer"
  | "product_manager";
 
 export type TargetRole = 
   | "senior_engineer"
   | "cloud_engineer"
   | "data_scientist"
   | "tech_lead"
  | "solutions_architect"
  | "engineering_manager"
  | "principal_engineer"
  | "ml_engineer"
  | "staff_engineer";
 
 export interface SkillGap {
   name: string;
   currentLevel: string;
   targetLevel: string;
   learningTime: string;
   salaryImpact: string;
   salaryRange: [number, number];
  courseUrl?: string;
  courseName?: string;
 }
 
 export interface FormData {
   currentRole: CurrentRole | "";
   experience: number;
   currentSalary: string;
   targetRole: TargetRole | "";
 }
 
 export const currentRoles = [
   { value: "software_engineer", label: "Software Engineer" },
   { value: "backend_developer", label: "Backend Developer" },
   { value: "frontend_developer", label: "Frontend Developer" },
   { value: "data_analyst", label: "Data Analyst" },
   { value: "devops_engineer", label: "DevOps Engineer" },
  { value: "fullstack_developer", label: "Full Stack Developer" },
  { value: "mobile_developer", label: "Mobile Developer" },
  { value: "qa_engineer", label: "QA Engineer" },
  { value: "product_manager", label: "Product Manager" },
 ] as const;
 
 export const targetRoles = [
   { value: "senior_engineer", label: "Senior Engineer" },
   { value: "cloud_engineer", label: "Cloud Engineer" },
   { value: "data_scientist", label: "Data Scientist" },
   { value: "tech_lead", label: "Tech Lead" },
   { value: "solutions_architect", label: "Solutions Architect" },
  { value: "engineering_manager", label: "Engineering Manager" },
  { value: "principal_engineer", label: "Principal Engineer" },
  { value: "ml_engineer", label: "ML Engineer" },
  { value: "staff_engineer", label: "Staff Engineer" },
 ] as const;
 
 export const skillMappings: Record<CurrentRole, SkillGap[]> = {
   software_engineer: [
     {
       name: "Cloud Computing (AWS)",
       currentLevel: "Beginner",
       targetLevel: "Intermediate",
       learningTime: "3-4 months",
       salaryImpact: "₹4-6L",
       salaryRange: [4, 6],
      courseName: "Scaler Academy - Cloud Computing",
      courseUrl: "https://www.scaler.com/courses/cloud-computing/",
     },
     {
       name: "System Design",
       currentLevel: "Basic",
       targetLevel: "Advanced",
       learningTime: "4-5 months",
       salaryImpact: "₹3-5L",
       salaryRange: [3, 5],
      courseName: "Scaler Academy - System Design",
      courseUrl: "https://www.scaler.com/courses/system-design/",
     },
     {
       name: "Data Structures & Algorithms",
       currentLevel: "Intermediate",
       targetLevel: "Expert",
       learningTime: "2-3 months",
       salaryImpact: "₹2-4L",
       salaryRange: [2, 4],
      courseName: "Scaler Academy - DSA",
      courseUrl: "https://www.scaler.com/courses/data-structures-algorithms/",
     },
   ],
   backend_developer: [
     {
       name: "Microservices Architecture",
       currentLevel: "Basic",
       targetLevel: "Advanced",
       learningTime: "3-4 months",
       salaryImpact: "₹4-6L",
       salaryRange: [4, 6],
      courseName: "Scaler Academy - Backend Development",
      courseUrl: "https://www.scaler.com/courses/backend-development/",
     },
     {
       name: "Database Optimization",
       currentLevel: "Intermediate",
       targetLevel: "Expert",
       learningTime: "2-3 months",
       salaryImpact: "₹3-5L",
       salaryRange: [3, 5],
      courseName: "Scaler Academy - SQL & Databases",
      courseUrl: "https://www.scaler.com/courses/sql/",
     },
     {
       name: "API Design Patterns",
       currentLevel: "Basic",
       targetLevel: "Advanced",
       learningTime: "2-3 months",
       salaryImpact: "₹2-4L",
       salaryRange: [2, 4],
      courseName: "Scaler Academy - API Design",
      courseUrl: "https://www.scaler.com/courses/backend-development/",
     },
   ],
   frontend_developer: [
     {
       name: "React Advanced Patterns",
       currentLevel: "Intermediate",
       targetLevel: "Expert",
       learningTime: "2-3 months",
       salaryImpact: "₹4-6L",
       salaryRange: [4, 6],
      courseName: "Scaler Academy - Full Stack Development",
      courseUrl: "https://www.scaler.com/courses/full-stack-development/",
     },
     {
       name: "TypeScript Mastery",
       currentLevel: "Basic",
       targetLevel: "Advanced",
       learningTime: "3-4 months",
       salaryImpact: "₹3-5L",
       salaryRange: [3, 5],
      courseName: "Scaler Academy - JavaScript & TypeScript",
      courseUrl: "https://www.scaler.com/courses/javascript/",
     },
     {
       name: "Performance Optimization",
       currentLevel: "Beginner",
       targetLevel: "Intermediate",
       learningTime: "2-3 months",
       salaryImpact: "₹2-4L",
       salaryRange: [2, 4],
      courseName: "Scaler Academy - Web Performance",
      courseUrl: "https://www.scaler.com/courses/full-stack-development/",
     },
   ],
   data_analyst: [
     {
       name: "Advanced SQL",
       currentLevel: "Intermediate",
       targetLevel: "Expert",
       learningTime: "2-3 months",
       salaryImpact: "₹4-6L",
       salaryRange: [4, 6],
      courseName: "Scaler Academy - SQL Mastery",
      courseUrl: "https://www.scaler.com/courses/sql/",
     },
     {
       name: "Python for Data Science",
       currentLevel: "Basic",
       targetLevel: "Advanced",
       learningTime: "4-5 months",
       salaryImpact: "₹3-5L",
       salaryRange: [3, 5],
      courseName: "Scaler Academy - Data Science",
      courseUrl: "https://www.scaler.com/courses/data-science/",
     },
     {
       name: "Data Visualization (Tableau/PowerBI)",
       currentLevel: "Beginner",
       targetLevel: "Intermediate",
       learningTime: "2-3 months",
       salaryImpact: "₹2-4L",
       salaryRange: [2, 4],
      courseName: "Scaler Academy - Data Analytics",
      courseUrl: "https://www.scaler.com/courses/data-analytics/",
     },
   ],
   devops_engineer: [
     {
       name: "Kubernetes & Container Orchestration",
       currentLevel: "Basic",
       targetLevel: "Advanced",
       learningTime: "3-4 months",
       salaryImpact: "₹4-6L",
       salaryRange: [4, 6],
      courseName: "Scaler Academy - DevOps",
      courseUrl: "https://www.scaler.com/courses/devops/",
     },
     {
       name: "CI/CD Pipeline Design",
       currentLevel: "Intermediate",
       targetLevel: "Expert",
       learningTime: "2-3 months",
       salaryImpact: "₹3-5L",
       salaryRange: [3, 5],
      courseName: "Scaler Academy - CI/CD",
      courseUrl: "https://www.scaler.com/courses/devops/",
     },
     {
       name: "Infrastructure as Code (Terraform)",
       currentLevel: "Beginner",
       targetLevel: "Advanced",
       learningTime: "3-4 months",
       salaryImpact: "₹2-4L",
       salaryRange: [2, 4],
      courseName: "Scaler Academy - Cloud Infrastructure",
      courseUrl: "https://www.scaler.com/courses/cloud-computing/",
    },
  ],
  fullstack_developer: [
    {
      name: "System Design",
      currentLevel: "Basic",
      targetLevel: "Advanced",
      learningTime: "4-5 months",
      salaryImpact: "₹4-6L",
      salaryRange: [4, 6],
      courseName: "Scaler Academy - System Design",
      courseUrl: "https://www.scaler.com/courses/system-design/",
    },
    {
      name: "Cloud Architecture",
      currentLevel: "Beginner",
      targetLevel: "Intermediate",
      learningTime: "3-4 months",
      salaryImpact: "₹3-5L",
      salaryRange: [3, 5],
      courseName: "Scaler Academy - Cloud Computing",
      courseUrl: "https://www.scaler.com/courses/cloud-computing/",
    },
    {
      name: "DevOps Fundamentals",
      currentLevel: "Basic",
      targetLevel: "Advanced",
      learningTime: "2-3 months",
      salaryImpact: "₹2-4L",
      salaryRange: [2, 4],
      courseName: "Scaler Academy - DevOps",
      courseUrl: "https://www.scaler.com/courses/devops/",
    },
  ],
  mobile_developer: [
    {
      name: "Cross-Platform Development",
      currentLevel: "Basic",
      targetLevel: "Advanced",
      learningTime: "3-4 months",
      salaryImpact: "₹4-6L",
      salaryRange: [4, 6],
      courseName: "Scaler Academy - Mobile Development",
      courseUrl: "https://www.scaler.com/courses/full-stack-development/",
    },
    {
      name: "System Design for Mobile",
      currentLevel: "Beginner",
      targetLevel: "Intermediate",
      learningTime: "3-4 months",
      salaryImpact: "₹3-5L",
      salaryRange: [3, 5],
      courseName: "Scaler Academy - System Design",
      courseUrl: "https://www.scaler.com/courses/system-design/",
    },
    {
      name: "Performance Optimization",
      currentLevel: "Basic",
      targetLevel: "Advanced",
      learningTime: "2-3 months",
      salaryImpact: "₹2-4L",
      salaryRange: [2, 4],
      courseName: "Scaler Academy - Mobile Performance",
      courseUrl: "https://www.scaler.com/courses/full-stack-development/",
    },
  ],
  qa_engineer: [
    {
      name: "Test Automation",
      currentLevel: "Basic",
      targetLevel: "Advanced",
      learningTime: "3-4 months",
      salaryImpact: "₹4-6L",
      salaryRange: [4, 6],
      courseName: "Scaler Academy - Automation Testing",
      courseUrl: "https://www.scaler.com/courses/automation-testing/",
    },
    {
      name: "Performance Testing",
      currentLevel: "Beginner",
      targetLevel: "Intermediate",
      learningTime: "2-3 months",
      salaryImpact: "₹3-5L",
      salaryRange: [3, 5],
      courseName: "Scaler Academy - QA Engineering",
      courseUrl: "https://www.scaler.com/courses/automation-testing/",
    },
    {
      name: "CI/CD Integration",
      currentLevel: "Basic",
      targetLevel: "Advanced",
      learningTime: "2-3 months",
      salaryImpact: "₹2-4L",
      salaryRange: [2, 4],
      courseName: "Scaler Academy - DevOps",
      courseUrl: "https://www.scaler.com/courses/devops/",
    },
  ],
  product_manager: [
    {
      name: "Technical Product Management",
      currentLevel: "Basic",
      targetLevel: "Advanced",
      learningTime: "4-5 months",
      salaryImpact: "₹5-8L",
      salaryRange: [5, 8],
      courseName: "Scaler Academy - Product Management",
      courseUrl: "https://www.scaler.com/courses/product-management/",
    },
    {
      name: "Data Analytics",
      currentLevel: "Beginner",
      targetLevel: "Intermediate",
      learningTime: "3-4 months",
      salaryImpact: "₹3-5L",
      salaryRange: [3, 5],
      courseName: "Scaler Academy - Data Analytics",
      courseUrl: "https://www.scaler.com/courses/data-analytics/",
    },
    {
      name: "SQL for Product Managers",
      currentLevel: "Basic",
      targetLevel: "Advanced",
      learningTime: "2-3 months",
      salaryImpact: "₹2-4L",
      salaryRange: [2, 4],
      courseName: "Scaler Academy - SQL",
      courseUrl: "https://www.scaler.com/courses/sql/",
     },
   ],
 };
 
 export function getSkillsForRole(role: CurrentRole): SkillGap[] {
   return skillMappings[role] || skillMappings.software_engineer;
 }
 
 export function calculateTotalImpact(skills: SkillGap[]): { min: number; max: number } {
   return skills.reduce(
     (acc, skill) => ({
       min: acc.min + skill.salaryRange[0],
       max: acc.max + skill.salaryRange[1],
     }),
     { min: 0, max: 0 }
   );
 }