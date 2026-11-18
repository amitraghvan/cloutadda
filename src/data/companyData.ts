interface TeamContact {
  name: string;
  role: string;
  email: string;
  phone: string;
}

interface MetricItem {
  value: string;
  label: string;
  description: string;
}

export const COMPANY_INFO = {
  name: "CLOUT ADDA",
  registered: "CLOUT ADDA®",
  tagline: "YOUR EXPERIENCE ELEVATED.",
  primaryStatement: "YOUR PRESENCE NEEDS TO BE ELEVATED.",
  story: "BRANDS. CREATORS. CONTENT. CULTURE. CONVERSATIONS. EXPERIENCES.",
  generalEmail: "connect@cloutadda.com",
  contacts: [
    {
      name: "Rudransh Mishra",
      role: "Leadership & Partnerships",
      email: "rudransh@cloutadda.com",
      phone: "+91 92350 63201",
    },
    {
      name: "Yash Patel",
      role: "Campaign Strategy & Operations",
      email: "yash@cloutadda.com",
      phone: "+91 88155 13965",
    },
  ] as TeamContact[],
  metrics: [
    {
      value: "500M+",
      label: "TOTAL VIEWS DELIVERED",
      description: "Organic attention earned across high-impact video, meme and creator campaigns.",
    },
    {
      value: "50+",
      label: "COMPANIES SERVED",
      description: "Direct brand engagements, enterprise activations, startups and institutions.",
    },
    {
      value: "5000+",
      label: "INFLUENCER POOL",
      description: "Broad creator and influencer network spanning pan-India digital subcultures.",
    },
    {
      value: "500+",
      label: "VERIFIED INFLUENCERS",
      description: "Curated, vetted creators across 10+ niche vertical categories.",
    },
  ] as MetricItem[],
  manifesto: {
    headline: "PEOPLE SCROLL PAST ADS. THEY REMEMBER WHAT MAKES THEM FEEL SOMETHING.",
    copy: "Attention is valuable. Earning it takes more than publishing another post. We bring strategy, creativity and cultural understanding together to help brands become part of conversations that matter.",
    keywords: ["STRATEGY", "CULTURE", "INFLUENCE", "EXPERIENCE"],
  },
  workflow: [
    {
      step: "01",
      name: "UNDERSTAND",
      summary: "Learn about the brand, audience, objective and challenge.",
      description:
        "We dissect your target demographic, current brand perception, competitive whitespace, and strategic ambition before putting pen to paper.",
    },
    {
      step: "02",
      name: "PLAN",
      summary: "Develop the creative direction and campaign approach.",
      description:
        "We architect format-specific concepts, tone guidelines, distribution roadmaps, and creator shortlists calibrated to real audience behavior.",
    },
    {
      step: "03",
      name: "CREATE & EXECUTE",
      summary: "Bring together content, creators, PR and experiences as required.",
      description:
        "High-velocity production, meme generation, creator briefing, physical stage activations, and cross-channel publication with precision timing.",
    },
    {
      step: "04",
      name: "REVIEW & IMPROVE",
      summary: "Evaluate available results and identify opportunities to improve.",
      description:
        "We monitor engagement sentiment, reach efficiency, content saves, community feedback, and learnings to inform sustainable growth.",
    },
  ],
};
