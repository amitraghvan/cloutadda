import type { Metadata } from "next";
import { BizfluenceView } from "@/components/work/BizfluenceView";

export const metadata: Metadata = {
  title: "Bizfluence 2.0 Case Study | CLOUT ADDA®",
  description:
    "Case study: Bizfluence 2.0 featuring Shantanu Deshpande, L. V. Navaneeth, Vivek Law, Sohrab Sitaram, and Navan Jaiswal.",
  alternates: {
    canonical: "https://cloutadda.com/work/bizfluence-2",
  },
  openGraph: {
    title: "Bizfluence 2.0 — CLOUT ADDA® Case Study",
    description: "Deconstructing modern commerce, retail and venture building with industry leaders.",
    url: "https://cloutadda.com/work/bizfluence-2",
    type: "website",
  },
};

export default function BizfluencePage() {
  return <BizfluenceView />;
}
