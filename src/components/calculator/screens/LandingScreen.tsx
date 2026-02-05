 import { Button } from "@/components/ui/button";
 import { ArrowRight, Shield, Users, Zap } from "lucide-react";
 
 interface LandingScreenProps {
   onStart: () => void;
 }
 
 export function LandingScreen({ onStart }: LandingScreenProps) {
   return (
     <div className="min-h-screen gradient-hero">
       {/* Header */}
       <header className="px-6 py-4">
         <div className="max-w-6xl mx-auto flex items-center justify-between">
           <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
               <Zap className="w-5 h-5 text-primary-foreground" />
             </div>
             <span className="text-xl font-bold text-gradient">Scaler Demo</span>
           </div>
         </div>
       </header>
 
       {/* Hero Section */}
       <main className="px-6 py-16 md:py-24">
         <div className="max-w-4xl mx-auto text-center">
           {/* Badge */}
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
             <span className="text-sm font-medium text-muted-foreground">
               Free Career Analysis Tool
             </span>
           </div>
 
           {/* Main Headline */}
           <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
             Calculate Your{" "}
             <span className="text-gradient">Salary Growth</span>
             <br />
             Potential
           </h1>
 
           {/* Subtext */}
           <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in">
             Discover which skills can increase your salary by{" "}
             <span className="font-semibold text-foreground">₹5–15 Lakhs</span>.
             Get a personalized roadmap in under 2 minutes.
           </p>
 
           {/* CTA Button */}
           <Button
             size="lg"
             onClick={onStart}
             className="gradient-primary text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-glow hover:scale-105 transition-transform duration-300 animate-fade-in group"
           >
             Start Free Analysis
             <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
           </Button>
 
           {/* Trust Badges */}
           <div className="flex flex-wrap justify-center gap-6 mt-12 animate-fade-in">
             <div className="flex items-center gap-2 text-muted-foreground">
               <Shield className="w-5 h-5 text-primary" />
               <span className="text-sm">No Sign-up Required</span>
             </div>
             <div className="flex items-center gap-2 text-muted-foreground">
               <Users className="w-5 h-5 text-primary" />
               <span className="text-sm">50,000+ Professionals Analyzed</span>
             </div>
             <div className="flex items-center gap-2 text-muted-foreground">
               <Zap className="w-5 h-5 text-primary" />
               <span className="text-sm">2-Minute Assessment</span>
             </div>
           </div>
         </div>
       </main>
 
       {/* Decorative Elements */}
       <div className="fixed top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 animate-float" />
       <div className="fixed bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: "1s" }} />
     </div>
   );
 }