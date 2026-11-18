import type { Metadata } from "next";
import { MyntraGlamfestView } from "@/components/work/MyntraGlamfestView";

export const metadata: Metadata = {
  title: "Myntra Glamfest × LPU Case Study | CLOUT ADDA®",
  description:
    "Case study: Myntra Glamfest × LPU featuring headline performer Farhan Akhtar at Baldev Raj Mittal Unipolis.",
  alternates: {
    canonical: "https://cloutadda.com/work/myntra-glamfest",
  },
  openGraph: {
    title: "Myntra Glamfest — CLOUT ADDA® Case Study",
    description: "High-energy fashion meets cinematic rock stage performance with Farhan Akhtar.",
    url: "https://cloutadda.com/work/myntra-glamfest",
    type: "website",
  },
};

export default function MyntraGlamfestPage() {
  return <MyntraGlamfestView />;
}
