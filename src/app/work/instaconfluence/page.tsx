import type { Metadata } from "next";
import { InstaConfluenceView } from "@/components/work/InstaConfluenceView";

export const metadata: Metadata = {
  title: "InstaConfluence Case Study | CLOUT ADDA®",
  description:
    "Case study: InstaConfluence held on 30 April 2024 in partnership with Lovely Professional University.",
  alternates: {
    canonical: "https://cloutadda.com/work/instaconfluence",
  },
  openGraph: {
    title: "InstaConfluence — CLOUT ADDA® Case Study",
    description: "Where the internet's top voices gathered off-screen at Lovely Professional University.",
    url: "https://cloutadda.com/work/instaconfluence",
    type: "website",
  },
};

export default function InstaConfluencePage() {
  return <InstaConfluenceView />;
}
