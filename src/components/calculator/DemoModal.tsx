 import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
 } from "@/components/ui/dialog";
 import { Button } from "@/components/ui/button";
 import { Sparkles } from "lucide-react";
 
 interface DemoModalProps {
   open: boolean;
   onClose: () => void;
   actionName: string;
 }
 
 export function DemoModal({ open, onClose, actionName }: DemoModalProps) {
   return (
     <Dialog open={open} onOpenChange={onClose}>
       <DialogContent className="sm:max-w-md">
         <DialogHeader className="text-center">
           <div className="mx-auto mb-4 w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
             <Sparkles className="w-6 h-6 text-primary-foreground" />
           </div>
           <DialogTitle className="text-xl">Demo Mode</DialogTitle>
           <DialogDescription className="text-base">
             <span className="font-semibold text-foreground">{actionName}</span>
             {" "}has been simulated successfully!
           </DialogDescription>
         </DialogHeader>
         
         <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground text-center">
           In a live product, this would connect you to our career counseling team
           or redirect to course enrollment.
         </div>
         
         <Button onClick={onClose} className="w-full gradient-primary text-primary-foreground">
           Got it!
         </Button>
       </DialogContent>
     </Dialog>
   );
 }