 // Role-to-skills mapping for deterministic demo results
 
 export type CurrentRole = 
   | "software_engineer"
   | "backend_developer"
   | "frontend_developer"
   | "data_analyst"
   | "devops_engineer";
 
 export type TargetRole = 
   | "senior_engineer"
   | "cloud_engineer"
   | "data_scientist"
   | "tech_lead"
   | "solutions_architect";
 
 export interface SkillGap {
   name: string;
   currentLevel: string;
   targetLevel: string;
   learningTime: string;
   salaryImpact: string;
   salaryRange: [number, number];
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
 ] as const;
 
 export const targetRoles = [
   { value: "senior_engineer", label: "Senior Engineer" },
   { value: "cloud_engineer", label: "Cloud Engineer" },
   { value: "data_scientist", label: "Data Scientist" },
   { value: "tech_lead", label: "Tech Lead" },
   { value: "solutions_architect", label: "Solutions Architect" },
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
     },
     {
       name: "System Design",
       currentLevel: "Basic",
       targetLevel: "Advanced",
       learningTime: "4-5 months",
       salaryImpact: "₹3-5L",
       salaryRange: [3, 5],
     },
     {
       name: "Data Structures & Algorithms",
       currentLevel: "Intermediate",
       targetLevel: "Expert",
       learningTime: "2-3 months",
       salaryImpact: "₹2-4L",
       salaryRange: [2, 4],
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
     },
     {
       name: "Database Optimization",
       currentLevel: "Intermediate",
       targetLevel: "Expert",
       learningTime: "2-3 months",
       salaryImpact: "₹3-5L",
       salaryRange: [3, 5],
     },
     {
       name: "API Design Patterns",
       currentLevel: "Basic",
       targetLevel: "Advanced",
       learningTime: "2-3 months",
       salaryImpact: "₹2-4L",
       salaryRange: [2, 4],
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
     },
     {
       name: "TypeScript Mastery",
       currentLevel: "Basic",
       targetLevel: "Advanced",
       learningTime: "3-4 months",
       salaryImpact: "₹3-5L",
       salaryRange: [3, 5],
     },
     {
       name: "Performance Optimization",
       currentLevel: "Beginner",
       targetLevel: "Intermediate",
       learningTime: "2-3 months",
       salaryImpact: "₹2-4L",
       salaryRange: [2, 4],
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
     },
     {
       name: "Python for Data Science",
       currentLevel: "Basic",
       targetLevel: "Advanced",
       learningTime: "4-5 months",
       salaryImpact: "₹3-5L",
       salaryRange: [3, 5],
     },
     {
       name: "Data Visualization (Tableau/PowerBI)",
       currentLevel: "Beginner",
       targetLevel: "Intermediate",
       learningTime: "2-3 months",
       salaryImpact: "₹2-4L",
       salaryRange: [2, 4],
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
     },
     {
       name: "CI/CD Pipeline Design",
       currentLevel: "Intermediate",
       targetLevel: "Expert",
       learningTime: "2-3 months",
       salaryImpact: "₹3-5L",
       salaryRange: [3, 5],
     },
     {
       name: "Infrastructure as Code (Terraform)",
       currentLevel: "Beginner",
       targetLevel: "Advanced",
       learningTime: "3-4 months",
       salaryImpact: "₹2-4L",
       salaryRange: [2, 4],
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