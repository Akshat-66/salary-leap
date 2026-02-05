 import { useEffect, useState } from "react";
 import { Check, Loader2, Zap } from "lucide-react";
 import { cn } from "@/lib/utils";
 
 interface LoadingScreenProps {
   onComplete: () => void;
 }
 
 const checklistItems = [
   "Comparing salary benchmarks",
   "Identifying skill gaps",
   "Calculating ROI potential",
 ];
 
 export function LoadingScreen({ onComplete }: LoadingScreenProps) {
   const [currentItem, setCurrentItem] = useState(0);
 
   useEffect(() => {
     const timers: NodeJS.Timeout[] = [];
 
     // Progress through checklist items
     checklistItems.forEach((_, index) => {
       const timer = setTimeout(() => {
         setCurrentItem(index + 1);
       }, (index + 1) * 700);
       timers.push(timer);
     });
 
     // Complete after all items
     const completeTimer = setTimeout(() => {
       onComplete();
     }, 2500);
     timers.push(completeTimer);
 
     return () => {
       timers.forEach(clearTimeout);
     };
   }, [onComplete]);
 
   return (
     <div className="min-h-screen gradient-hero flex flex-col items-center justify-center px-6">
       {/* Header */}
       <header className="absolute top-0 left-0 right-0 px-6 py-4">
         <div className="max-w-6xl mx-auto flex items-center gap-2">
           <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
             <Zap className="w-5 h-5 text-primary-foreground" />
           </div>
           <span className="text-xl font-bold text-gradient">Scaler Demo</span>
         </div>
       </header>
 
       <div className="text-center">
         {/* Spinner */}
         <div className="relative w-24 h-24 mx-auto mb-8">
           <div className="absolute inset-0 rounded-full gradient-primary opacity-20 animate-ping" />
           <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
             <Loader2 className="w-10 h-10 text-primary animate-spin" />
           </div>
         </div>
 
         <h2 className="text-2xl font-bold mb-2 animate-fade-in">
           Analyzing your profile...
         </h2>
         <p className="text-muted-foreground mb-8 animate-fade-in">
           This will only take a moment
         </p>
 
         {/* Checklist */}
         <div className="space-y-4 text-left max-w-xs mx-auto">
           {checklistItems.map((item, index) => (
             <div
               key={item}
               className={cn(
                 "flex items-center gap-3 transition-all duration-300",
                 index < currentItem
                   ? "opacity-100"
                   : index === currentItem
                   ? "opacity-70"
                   : "opacity-30"
               )}
             >
               <div
                 className={cn(
                   "w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300",
                   index < currentItem
                     ? "gradient-primary"
                     : "border-2 border-muted-foreground/30"
                 )}
               >
                 {index < currentItem ? (
                   <Check className="w-4 h-4 text-primary-foreground" />
                 ) : index === currentItem ? (
                   <Loader2 className="w-3 h-3 text-primary animate-spin" />
                 ) : null}
               </div>
               <span
                 className={cn(
                   "font-medium transition-colors duration-300",
                   index < currentItem ? "text-foreground" : "text-muted-foreground"
                 )}
               >
                 {item}
               </span>
             </div>
           ))}
         </div>
       </div>
 
       {/* Decorative */}
       <div className="fixed top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 animate-float" />
       <div className="fixed bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-float" />
     </div>
   );
 }