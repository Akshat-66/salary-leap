 import { cn } from "@/lib/utils";
 
 interface ProgressBarProps {
   currentStep: number;
   totalSteps: number;
 }
 
 const steps = ["Role", "Experience", "Salary", "Target"];
 
 export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
   const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
 
   return (
    <div className="w-full max-w-md mx-auto mb-8 px-2">
      {/* Steps with dots inline */}
      <div className="relative">
        {/* Progress track */}
        <div className="absolute top-3 left-0 right-0 h-1 bg-secondary rounded-full mx-6">
          <div
            className="absolute h-full gradient-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Step indicators and labels */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => (
            <div key={step} className="flex flex-col items-center">
              {/* Dot */}
              <div
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 z-10",
                  index + 1 <= currentStep
                    ? "gradient-primary shadow-glow"
                    : "bg-secondary border-2 border-muted-foreground/30"
                )}
              >
                <span className={cn(
                  "text-xs font-bold",
                  index + 1 <= currentStep ? "text-primary-foreground" : "text-muted-foreground"
                )}>
                  {index + 1}
                </span>
              </div>
              {/* Label */}
              <span
                className={cn(
                  "text-xs font-medium mt-2 transition-colors duration-300",
                  index + 1 <= currentStep ? "text-primary" : "text-muted-foreground"
                )}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
       </div>
     </div>
   );
 }