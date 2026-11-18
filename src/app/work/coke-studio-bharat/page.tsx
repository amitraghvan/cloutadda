import type { Metadata } from "next";
import { CokeStudioBharatView } from "@/components/work/CokeStudioBharatView";

export const metadata: Metadata = {
  title: "Coke Studio Bharat × LPU Case Study | CLOUT ADDA®",
  description:
    "Case study: Coke Studio Bharat × LPU with 30,000+ students and headline performances by Sunidhi Chauhan and Rashmeet Kaur.",
  alternates: {
    canonical: "https://cloutadda.com/work/coke-studio-bharat",
  },
  openGraph: {
    title: "Coke Studio Bharat — CLOUT ADDA® Case Study",
    description: "30,000+ voices singing under one electric stadium stage at Baldev Raj Mittal Unipolis.",
    url: "https://cloutadda.com/work/coke-studio-bharat",
    type: "website",
  },
};

export default function CokeStudioBharatPage() {
  return <CokeStudioBharatView />;
}
