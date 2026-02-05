 import { Lock, TrendingUp } from "lucide-react";
 import { cn } from "@/lib/utils";
 
 interface SkillCardProps {
   name: string;
   salaryImpact: string;
   locked?: boolean;
   currentLevel?: string;
   targetLevel?: string;
   learningTime?: string;
   index?: number;
 }
 
 export function SkillCard({
   name,
   salaryImpact,
   locked = true,
   currentLevel,
   targetLevel,
   learningTime,
   index = 0,
 }: SkillCardProps) {
   return (
     <div
       className={cn(
         "relative p-5 rounded-xl transition-all duration-500",
         "animate-fade-in",
         locked
           ? "glass border border-border/50"
           : "bg-card border border-primary/20 shadow-lg"
       )}
       style={{ animationDelay: `${index * 150}ms` }}
     >
       {locked && (
         <div className="absolute inset-0 bg-background/60 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
           <Lock className="w-5 h-5 text-muted-foreground" />
         </div>
       )}
       
       <div className={cn(locked && "blur-[2px]")}>
         <div className="flex items-start justify-between mb-3">
           <h4 className="font-semibold text-foreground">{name}</h4>
           <div className="flex items-center gap-1 text-primary">
             <TrendingUp className="w-4 h-4" />
             <span className="text-sm font-bold">{salaryImpact}</span>
           </div>
         </div>
         
         {!locked && currentLevel && targetLevel && (
           <div className="space-y-2 text-sm">
             <div className="flex justify-between">
               <span className="text-muted-foreground">Current Level:</span>
               <span className="font-medium">{currentLevel}</span>
             </div>
             <div className="flex justify-between">
               <span className="text-muted-foreground">Target Level:</span>
               <span className="font-medium text-primary">{targetLevel}</span>
             </div>
             {learningTime && (
               <div className="flex justify-between">
                 <span className="text-muted-foreground">Learning Time:</span>
                 <span className="font-medium">{learningTime}</span>
               </div>
             )}
           </div>
         )}
       </div>
     </div>
   );
 }