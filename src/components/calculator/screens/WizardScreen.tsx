 import { useState } from "react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { Slider } from "@/components/ui/slider";
 import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
 } from "@/components/ui/select";
 import { Card, CardContent } from "@/components/ui/card";
 import { ProgressBar } from "../ProgressBar";
import { ArrowLeft, ArrowRight } from "lucide-react";
 import { cn } from "@/lib/utils";
 import {
   FormData,
   currentRoles,
   targetRoles,
   CurrentRole,
   TargetRole,
 } from "@/lib/skillData";
import scalerLogo from "@/assets/scaler-logo.svg";
 
 interface WizardScreenProps {
   formData: FormData;
   onFormChange: (data: Partial<FormData>) => void;
   onComplete: () => void;
   onBack: () => void;
 }
 
 export function WizardScreen({
   formData,
   onFormChange,
   onComplete,
   onBack,
 }: WizardScreenProps) {
   const [step, setStep] = useState(1);
   const [direction, setDirection] = useState<"forward" | "backward">("forward");
 
   const nextStep = () => {
     if (step < 4) {
       setDirection("forward");
       setStep(step + 1);
     } else {
       onComplete();
     }
   };
 
   const prevStep = () => {
     if (step > 1) {
       setDirection("backward");
       setStep(step - 1);
     } else {
       onBack();
     }
   };
 
   const canProceed = () => {
     switch (step) {
       case 1:
         return formData.currentRole !== "";
       case 2:
         return true;
       case 3:
         return true; // Salary is optional
       case 4:
         return formData.targetRole !== "";
       default:
         return false;
     }
   };
 
   return (
     <div className="min-h-screen gradient-hero flex flex-col">
       {/* Header */}
       <header className="px-6 py-4">
         <div className="max-w-6xl mx-auto flex items-center gap-2">
          <img src={scalerLogo} alt="Scaler" className="h-8" />
         </div>
       </header>
 
       {/* Main Content */}
       <main className="flex-1 px-6 py-8 flex flex-col items-center justify-center">
         <div className="w-full max-w-lg">
           <ProgressBar currentStep={step} totalSteps={4} />
 
           <Card className="glass border-border/50 shadow-xl overflow-hidden">
             <CardContent className="p-8">
               {/* Step Content with Animation */}
               <div
                 key={step}
                 className={cn(
                   "animate-fade-in",
                   direction === "forward"
                     ? "animate-[fade-in_0.3s_ease-out]"
                     : "animate-[fade-in_0.3s_ease-out]"
                 )}
               >
                 {step === 1 && (
                   <StepCurrentRole
                     value={formData.currentRole}
                     onChange={(value) => onFormChange({ currentRole: value as CurrentRole })}
                   />
                 )}
                 {step === 2 && (
                   <StepExperience
                     value={formData.experience}
                     onChange={(value) => onFormChange({ experience: value })}
                   />
                 )}
                 {step === 3 && (
                   <StepSalary
                     value={formData.currentSalary}
                     onChange={(value) => onFormChange({ currentSalary: value })}
                   />
                 )}
                 {step === 4 && (
                   <StepTargetRole
                     value={formData.targetRole}
                     onChange={(value) => onFormChange({ targetRole: value as TargetRole })}
                   />
                 )}
               </div>
 
               {/* Navigation */}
               <div className="flex justify-between mt-8">
                 <Button
                   variant="ghost"
                   onClick={prevStep}
                   className="gap-2"
                 >
                   <ArrowLeft className="w-4 h-4" />
                   Back
                 </Button>
                 <Button
                   onClick={nextStep}
                   disabled={!canProceed()}
                   className="gradient-primary text-primary-foreground gap-2 px-6"
                 >
                   {step === 4 ? "Calculate" : "Continue"}
                   <ArrowRight className="w-4 h-4" />
                 </Button>
               </div>
             </CardContent>
           </Card>
         </div>
       </main>
 
       {/* Decorative */}
       <div className="fixed top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
       <div className="fixed bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
     </div>
   );
 }
 
 // Step Components
 function StepCurrentRole({
   value,
   onChange,
 }: {
   value: string;
   onChange: (value: string) => void;
 }) {
   return (
     <div className="space-y-4">
       <div className="text-center mb-6">
         <h2 className="text-2xl font-bold mb-2">What's your current role?</h2>
         <p className="text-muted-foreground">
           This helps us identify relevant skill gaps
         </p>
       </div>
       <Label htmlFor="role">Select your role</Label>
       <Select value={value} onValueChange={onChange}>
         <SelectTrigger id="role" className="h-12">
           <SelectValue placeholder="Choose your current role" />
         </SelectTrigger>
         <SelectContent>
           {currentRoles.map((role) => (
             <SelectItem key={role.value} value={role.value}>
               {role.label}
             </SelectItem>
           ))}
         </SelectContent>
       </Select>
     </div>
   );
 }
 
 function StepExperience({
   value,
   onChange,
 }: {
   value: number;
   onChange: (value: number) => void;
 }) {
   return (
     <div className="space-y-6">
       <div className="text-center mb-6">
         <h2 className="text-2xl font-bold mb-2">Years of experience?</h2>
         <p className="text-muted-foreground">
           Experience level affects salary benchmarks
         </p>
       </div>
       <div className="text-center">
         <span className="text-5xl font-bold text-gradient">{value}</span>
         <span className="text-xl text-muted-foreground ml-2">
           {value === 1 ? "year" : "years"}
         </span>
       </div>
       <div className="px-4">
         <Slider
           value={[value]}
           onValueChange={([v]) => onChange(v)}
           min={0}
           max={10}
           step={1}
           className="py-4"
         />
         <div className="flex justify-between text-sm text-muted-foreground mt-2">
           <span>0 years</span>
           <span>10+ years</span>
         </div>
       </div>
     </div>
   );
 }
 
 function StepSalary({
   value,
   onChange,
 }: {
   value: string;
   onChange: (value: string) => void;
 }) {
   const formatSalary = (val: string) => {
     const num = val.replace(/\D/g, "");
     if (!num) return "";
     return Number(num).toLocaleString("en-IN");
   };
 
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const raw = e.target.value.replace(/\D/g, "");
     onChange(raw);
   };
 
   return (
     <div className="space-y-4">
       <div className="text-center mb-6">
         <h2 className="text-2xl font-bold mb-2">Current annual salary</h2>
         <p className="text-muted-foreground">
           Optional — helps personalize your results
         </p>
       </div>
       <Label htmlFor="salary">Annual CTC (₹)</Label>
       <div className="relative">
         <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
           ₹
         </span>
         <Input
           id="salary"
           type="text"
           value={formatSalary(value)}
           onChange={handleChange}
           placeholder="Enter your salary"
           className="h-12 pl-8 text-lg"
         />
       </div>
       <p className="text-xs text-muted-foreground text-center">
         Your data is not stored or shared
       </p>
     </div>
   );
 }
 
 function StepTargetRole({
   value,
   onChange,
 }: {
   value: string;
   onChange: (value: string) => void;
 }) {
   return (
     <div className="space-y-4">
       <div className="text-center mb-6">
         <h2 className="text-2xl font-bold mb-2">Where do you want to be?</h2>
         <p className="text-muted-foreground">
           Select your target career goal
         </p>
       </div>
       <Label htmlFor="target">Target role</Label>
       <Select value={value} onValueChange={onChange}>
         <SelectTrigger id="target" className="h-12">
           <SelectValue placeholder="Choose your target role" />
         </SelectTrigger>
         <SelectContent>
           {targetRoles.map((role) => (
             <SelectItem key={role.value} value={role.value}>
               {role.label}
             </SelectItem>
           ))}
         </SelectContent>
       </Select>
     </div>
   );
 }