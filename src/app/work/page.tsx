import type { Metadata } from "next";
import { WorkArchiveClient } from "@/components/work/WorkArchiveClient";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | Documented Execution",
  description:
    "Ideas are nice. Execution is better. Explore Clout Adda's documented case studies: Leadership Summit, InstaConfluence, Bizfluence 2.0, Myntra Glamfest, and Coke Studio Bharat.",
  alternates: {
    canonical: "https://cloutadda.com/work",
  },
  openGraph: {
    title: "Selected Work — CLOUT ADDA®",
    description:
      "Explore Clout Adda's documented case studies and large-scale experiential activations.",
    url: "https://cloutadda.com/work",
    type: "website",
  },
};

export default function WorkPage() {
  return <WorkArchiveClient />;
}
