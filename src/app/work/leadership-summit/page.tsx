import type { Metadata } from "next";
import { LeadershipSummitView } from "@/components/work/LeadershipSummitView";

export const metadata: Metadata = {
  title: "Leadership Summit Case Study | CLOUT ADDA®",
  description:
    "Case study: Leadership Summit convening national leaders Jaya Kishori, Khan Sir, Smriti Irani, Anurag Thakur, Suresh Prabhu and more.",
  alternates: {
    canonical: "https://cloutadda.com/work/leadership-summit",
  },
  openGraph: {
    title: "Leadership Summit — CLOUT ADDA® Case Study",
    description:
      "Convening national thought-leaders on governance, ethics, and innovation.",
    url: "https://cloutadda.com/work/leadership-summit",
    type: "website",
  },
};

export default function LeadershipSummitPage() {
  return <LeadershipSummitView />;
}
