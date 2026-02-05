 import { useState } from "react";
 import { Button } from "@/components/ui/button";
 import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
 import { SkillCard } from "../SkillCard";
 import { DemoModal } from "../DemoModal";
import { Calendar, GraduationCap, RotateCcw, ExternalLink, BookOpen } from "lucide-react";
 import { FormData, getSkillsForRole, calculateTotalImpact, CurrentRole, currentRoles, targetRoles } from "@/lib/skillData";
import scalerLogo from "@/assets/scaler-logo.svg";
 
 interface ReportScreenProps {
   formData: FormData;
   onRestart: () => void;
 }
 
 export function ReportScreen({ formData, onRestart }: ReportScreenProps) {
   const [modalOpen, setModalOpen] = useState(false);
   const [modalAction, setModalAction] = useState("");
 
   const skills = getSkillsForRole(formData.currentRole as CurrentRole);
   const totalImpact = calculateTotalImpact(skills);
   const prioritySkill = skills[0];
   
   const currentRoleLabel = currentRoles.find(r => r.value === formData.currentRole)?.label || "";
   const targetRoleLabel = targetRoles.find(r => r.value === formData.targetRole)?.label || "";
 
   const handleAction = (action: string) => {
     setModalAction(action);
     setModalOpen(true);
   };
 
   return (
     <div className="min-h-screen gradient-hero">
       {/* Header */}
       <header className="px-6 py-4">
         <div className="max-w-6xl mx-auto flex items-center justify-between">
           <div className="flex items-center gap-2">
            <img src={scalerLogo} alt="Scaler" className="h-8" />
           </div>
           <Button variant="ghost" onClick={onRestart} className="gap-2">
             <RotateCcw className="w-4 h-4" />
             Start Over
           </Button>
         </div>
       </header>
 
       <main className="px-6 py-8 max-w-3xl mx-auto">
         {/* Header Section */}
         <div className="text-center mb-8 animate-fade-in">
           <h1 className="text-3xl md:text-4xl font-bold mb-4">
             Your Career Roadmap
           </h1>
           <p className="text-lg text-muted-foreground">
             From <span className="font-semibold text-foreground">{currentRoleLabel}</span>
             {" → "}
             <span className="font-semibold text-primary">{targetRoleLabel}</span>
           </p>
         </div>
 
         {/* Priority Skill Card */}
         <Card className="mb-6 border-primary/30 shadow-xl animate-fade-in overflow-hidden">
           <div className="gradient-primary p-4">
             <CardTitle className="text-primary-foreground flex items-center gap-2">
               <GraduationCap className="w-5 h-5" />
               Priority Skill to Learn
             </CardTitle>
           </div>
           <CardContent className="p-6">
             <h3 className="text-2xl font-bold mb-4">{prioritySkill.name}</h3>
             <div className="grid grid-cols-2 gap-4 mb-6">
               <div className="p-4 rounded-lg bg-secondary/50">
                 <p className="text-sm text-muted-foreground mb-1">Current Level</p>
                 <p className="font-semibold">{prioritySkill.currentLevel}</p>
               </div>
               <div className="p-4 rounded-lg bg-primary/10">
                 <p className="text-sm text-muted-foreground mb-1">Target Level</p>
                 <p className="font-semibold text-primary">{prioritySkill.targetLevel}</p>
               </div>
               <div className="p-4 rounded-lg bg-secondary/50">
                 <p className="text-sm text-muted-foreground mb-1">Learning Time</p>
                 <p className="font-semibold">{prioritySkill.learningTime}</p>
               </div>
              <div className="p-4 rounded-lg bg-primary/10">
                 <p className="text-sm text-muted-foreground mb-1">Salary Impact</p>
                <p className="font-semibold text-primary">{prioritySkill.salaryImpact}</p>
               </div>
             </div>
           </CardContent>
         </Card>
 
         {/* All Skills */}
         <h3 className="text-xl font-bold mb-4">All Recommended Skills</h3>
         <div className="space-y-4 mb-8">
           {skills.map((skill, index) => (
             <SkillCard
               key={skill.name}
               name={skill.name}
               salaryImpact={skill.salaryImpact}
               currentLevel={skill.currentLevel}
               targetLevel={skill.targetLevel}
               learningTime={skill.learningTime}
               locked={false}
               index={index}
             />
           ))}
         </div>
 
        {/* Recommended Courses Section */}
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          Recommended Scaler Courses
        </h3>
        <div className="space-y-3 mb-8">
          {skills.map((skill) => (
            <Card key={`course-${skill.name}`} className="glass border-border/50 hover:border-primary/30 transition-all">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{skill.courseName || `Scaler - ${skill.name}`}</h4>
                  <p className="text-sm text-muted-foreground">
                    Learn {skill.name} • {skill.learningTime}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleAction(`View ${skill.courseName || skill.name}`)}
                  className="gap-2 border-primary/30 hover:bg-primary/5"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Course
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

         {/* Total Impact Summary */}
         <Card className="glass border-primary/30 mb-8 animate-fade-in">
           <CardContent className="p-6 text-center">
             <p className="text-muted-foreground mb-2">Total Potential Salary Increase</p>
             <p className="text-5xl font-bold text-gradient mb-2">
               ₹{totalImpact.min}–{totalImpact.max}L
             </p>
             <p className="text-sm text-muted-foreground">
               Achievable within 12-18 months with focused learning
             </p>
           </CardContent>
         </Card>
 
         {/* CTAs */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
           <Button
             size="lg"
             onClick={() => handleAction("Book Free Career Call")}
             className="gradient-primary text-primary-foreground h-14 text-base"
           >
             <Calendar className="w-5 h-5 mr-2" />
             Book Free Career Call
           </Button>
           <Button
             size="lg"
             variant="outline"
             onClick={() => handleAction("View Courses")}
             className="h-14 text-base border-primary/30 hover:bg-primary/5"
           >
             <GraduationCap className="w-5 h-5 mr-2" />
             View Courses
           </Button>
         </div>
       </main>
 
       {/* Demo Modal */}
       <DemoModal
         open={modalOpen}
         onClose={() => setModalOpen(false)}
         actionName={modalAction}
       />
 
       {/* Decorative */}
       <div className="fixed top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
       <div className="fixed bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
     </div>
   );
 }