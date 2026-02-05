 import { cn } from "@/lib/utils";
 
 interface ProgressBarProps {
   currentStep: number;
   totalSteps: number;
 }
 
 const steps = ["Role", "Experience", "Salary", "Target"];
 
 export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
   const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
 
   return (
     <div className="w-full max-w-md mx-auto mb-8">
       {/* Step labels */}
       <div className="flex justify-between mb-3">
         {steps.map((step, index) => (
           <div
             key={step}
             className={cn(
               "text-xs font-medium transition-colors duration-300",
               index + 1 <= currentStep ? "text-primary" : "text-muted-foreground"
             )}
           >
             {step}
           </div>
         ))}
       </div>
       
       {/* Progress track */}
       <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
         <div
           className="absolute h-full gradient-primary rounded-full transition-all duration-500 ease-out"
           style={{ width: `${progress}%` }}
         />
       </div>
       
       {/* Step indicators */}
       <div className="flex justify-between mt-2">
         {steps.map((_, index) => (
           <div
             key={index}
             className={cn(
               "w-3 h-3 rounded-full transition-all duration-300 -mt-[14px]",
               index + 1 <= currentStep
                 ? "gradient-primary shadow-glow scale-110"
                 : "bg-secondary border-2 border-muted-foreground/30"
             )}
           />
         ))}
       </div>
     </div>
   );
 }