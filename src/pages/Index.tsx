import { useState, useCallback } from "react";
import { FormData } from "@/lib/skillData";
import { LandingScreen } from "@/components/calculator/screens/LandingScreen";
import { WizardScreen } from "@/components/calculator/screens/WizardScreen";
import { LoadingScreen } from "@/components/calculator/screens/LoadingScreen";
import { PreviewScreen } from "@/components/calculator/screens/PreviewScreen";
import { ReportScreen } from "@/components/calculator/screens/ReportScreen";

type Screen = "landing" | "wizard" | "loading" | "preview" | "report";

const initialFormData: FormData = {
  currentRole: "",
  experience: 3,
  currentSalary: "",
  targetRole: "",
};

const Index = () => {
  const [screen, setScreen] = useState<Screen>("landing");
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleFormChange = useCallback((data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  }, []);

  const handleRestart = useCallback(() => {
    setFormData(initialFormData);
    setScreen("landing");
  }, []);

  switch (screen) {
    case "landing":
      return <LandingScreen onStart={() => setScreen("wizard")} />;
    
    case "wizard":
      return (
        <WizardScreen
          formData={formData}
          onFormChange={handleFormChange}
          onComplete={() => setScreen("loading")}
          onBack={() => setScreen("landing")}
        />
      );
    
    case "loading":
      return <LoadingScreen onComplete={() => setScreen("preview")} />;
    
    case "preview":
      return (
        <PreviewScreen
          formData={formData}
          onUnlock={() => setScreen("report")}
        />
      );
    
    case "report":
      return (
        <ReportScreen
          formData={formData}
          onRestart={handleRestart}
        />
      );
    
    default:
      return <LandingScreen onStart={() => setScreen("wizard")} />;
  }
};

export default Index;
