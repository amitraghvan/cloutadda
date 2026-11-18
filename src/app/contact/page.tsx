import type { Metadata } from "next";
import { ContactFormClient } from "@/components/contact/ContactFormClient";

export const metadata: Metadata = {
  title: "Contact Us | Let's Elevate Your Brand",
  description:
    "Connect directly with Clout Adda's leadership team (Rudransh Mishra, Yash Patel). Plan an upcoming campaign, creator activation, meme project, or branded experience.",
  alternates: {
    canonical: "https://cloutadda.com/contact",
  },
  openGraph: {
    title: "Contact CLOUT ADDA®",
    description:
      "Tell us the idea. We'll bring the energy. Direct contact with our creative and business leadership.",
    url: "https://cloutadda.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactFormClient />;
}
