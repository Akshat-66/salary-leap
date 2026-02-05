 import { useState } from "react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Card, CardContent } from "@/components/ui/card";
 import { SkillCard } from "../SkillCard";
 import { ArrowRight, Mail, TrendingUp, Zap } from "lucide-react";
 import { FormData, getSkillsForRole, calculateTotalImpact, CurrentRole, currentRoles } from "@/lib/skillData";
 
 interface PreviewScreenProps {
   formData: FormData;
   onUnlock: () => void;
 }
 
 export function PreviewScreen({ formData, onUnlock }: PreviewScreenProps) {
   const [email, setEmail] = useState("");
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [error, setError] = useState("");
 
   const skills = getSkillsForRole(formData.currentRole as CurrentRole);
   const totalImpact = calculateTotalImpact(skills);
   
   const currentRoleLabel = currentRoles.find(r => r.value === formData.currentRole)?.label || "Professional";
 
   const validateEmail = (email: string) => {
     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
   };
 
   const handleSubmit = () => {
     if (!validateEmail(email)) {
       setError("Please enter a valid email address");
       return;
     }
     setError("");
     setIsSubmitting(true);
     
     // Simulate API call
     setTimeout(() => {
       setIsSubmitting(false);
       onUnlock();
     }, 1000);
   };
 
   return (
     <div className="min-h-screen gradient-hero">
       {/* Header */}
       <header className="px-6 py-4">
         <div className="max-w-6xl mx-auto flex items-center gap-2">
           <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
             <Zap className="w-5 h-5 text-primary-foreground" />
           </div>
           <span className="text-xl font-bold text-gradient">Scaler Demo</span>
         </div>
       </header>
 
       <main className="px-6 py-8 max-w-2xl mx-auto">
         {/* Success Message */}
         <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Analysis Complete</span>
           </div>
           
           <h1 className="text-3xl md:text-4xl font-bold mb-4">
             Good news, {currentRoleLabel}!
           </h1>
           <p className="text-lg text-muted-foreground">
             You're <span className="font-semibold text-primary">3 skills</span> away from your target role
           </p>
         </div>
 
         {/* Locked Skill Cards */}
         <div className="space-y-4 mb-8">
           {skills.map((skill, index) => (
             <SkillCard
               key={skill.name}
               name={skill.name}
               salaryImpact={skill.salaryImpact}
               locked={true}
               index={index}
             />
           ))}
         </div>
 
         {/* Total Impact */}
         <Card className="glass border-primary/30 mb-8 animate-fade-in">
           <CardContent className="p-6 text-center">
             <p className="text-muted-foreground mb-2">Total Salary Growth Potential</p>
             <p className="text-4xl font-bold text-gradient">
               ₹{totalImpact.min}–{totalImpact.max}L
             </p>
             <p className="text-sm text-muted-foreground mt-2">
               Based on industry benchmarks for your experience level
             </p>
           </CardContent>
         </Card>
 
         {/* Email Gate */}
         <Card className="glass border-border/50 shadow-xl animate-fade-in">
           <CardContent className="p-6">
             <div className="text-center mb-6">
               <Mail className="w-10 h-10 text-primary mx-auto mb-3" />
               <h3 className="text-xl font-bold mb-2">Unlock Your Full Report</h3>
               <p className="text-muted-foreground text-sm">
                 Get detailed learning paths and personalized recommendations
               </p>
             </div>
 
             <div className="space-y-4">
               <Input
                 type="email"
                 placeholder="Enter your email address"
                 value={email}
                 onChange={(e) => {
                   setEmail(e.target.value);
                   if (error) setError("");
                 }}
                 className={`h-12 ${error ? "border-destructive" : ""}`}
               />
               {error && (
                 <p className="text-sm text-destructive">{error}</p>
               )}
               <Button
                 onClick={handleSubmit}
                 disabled={isSubmitting}
                 className="w-full gradient-primary text-primary-foreground h-12 text-base"
               >
                 {isSubmitting ? (
                   "Unlocking..."
                 ) : (
                   <>
                     Get Full Report
                     <ArrowRight className="w-4 h-4 ml-2" />
                   </>
                 )}
               </Button>
               <p className="text-xs text-muted-foreground text-center">
                 We'll send your personalized roadmap to this email
               </p>
             </div>
           </CardContent>
         </Card>
       </main>
 
       {/* Decorative */}
       <div className="fixed top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
       <div className="fixed bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
     </div>
   );
 }