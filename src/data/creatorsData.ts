export interface CreatorProfile {
  id: string;
  name: string;
  category: string;
  audienceMetric: string;
  metricLabel: string;
  focus: string;
  summary: string;
  image: string;
  verified: boolean;
}

export const CREATORS_LIST: CreatorProfile[] = [
  {
    id: "yash-garg",
    name: "Yash Garg",
    category: "Finance & Wealth Creation",
    audienceMetric: "500K+",
    metricLabel: "Engaged Audience",
    focus: "Stock markets, personal finance, investing psychology, fintech apps",
    summary:
      "Demystifying wealth building and market fundamentals for young professionals through disciplined, actionable financial commentary.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    verified: true,
  },
  {
    id: "ayush-bhandari",
    name: "Ayush Bhandari",
    category: "Technology & Consumer Electronics",
    audienceMetric: "650K+",
    metricLabel: "Tech Community",
    focus: "Hardware reviews, smartphones, productivity setups, AI tools",
    summary:
      "High-fidelity hardware stress tests and real-world tech usability reviews that help discerning buyers make confident purchasing choices.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    verified: true,
  },
  {
    id: "abhi-and-niyu",
    name: "Abhi and Niyu",
    category: "Social Impact & Storytelling",
    audienceMetric: "5M+",
    metricLabel: "Digital Community",
    focus: "National development, environmental innovations, unsung heroes, positive culture",
    summary:
      "Pioneering solution-driven digital journalism in India, crafting viral visual essays on indigenous innovation, sustainability, and civic pride.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    verified: true,
  },
  {
    id: "ashu-sir",
    name: "Ashu Sir",
    category: "Science, Education & EdTech",
    audienceMetric: "7M+",
    metricLabel: "Learners Reached",
    focus: "Practical physics, science experiments, conceptual clarity, exam preparation",
    summary:
      "Transforming complex physics laws into captivating, explosive real-world kitchen experiments loved by millions of school and college students.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    verified: true,
  },
  {
    id: "gaurav-taneja",
    name: "Gaurav Taneja",
    category: "Fitness, Aviation & Lifestyle",
    audienceMetric: "10M+",
    metricLabel: "Cross-Platform Following",
    focus: "Fitness discipline, commercial aviation lore, family lifestyle vlogging",
    summary:
      "One of India's most recognized lifestyle personalities, connecting with household audiences through disciplined fitness ethos and candid vlogging.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    verified: true,
  },
];
