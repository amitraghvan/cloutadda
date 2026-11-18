export interface MemeItem {
  id: string;
  topText: string;
  bottomText: string;
  category: string;
  situation: string;
  caption: string;
  badge: string;
}

export const CLOUT_MEMES: MemeItem[] = [
  {
    id: "meme-01",
    topText: "WE NEED MORE ENGAGEMENT.",
    bottomText: "HAVE WE TRIED MAKING SOMETHING PEOPLE ACTUALLY WANT TO SHARE?",
    category: "Creative Reality",
    situation: "When the quarterly marketing review looks at flat analytics graphs.",
    caption:
      "Engagement isn't an algorithm secret. It starts when you make content someone would voluntarily forward to their group chat. #CloutAdda",
    badge: "Meme 01 · Feed Reality",
  },
  {
    id: "meme-02",
    topText: "THE TREND IS EVERYWHERE.",
    bottomText: "GREAT. NOW LET'S SEE IF IT MAKES SENSE FOR THE BRAND.",
    category: "Strategic Fit",
    situation: "When every brand on Twitter tries to hijack an unrelated pop-culture moment.",
    caption:
      "Just because a dance or audio is trending doesn't mean your B2B enterprise software should do it. Relevance > Rush. #CloutAdda",
    badge: "Meme 02 · Trend Check",
  },
  {
    id: "meme-03",
    topText: "CAN WE MAKE THIS GO VIRAL?",
    bottomText: "LET'S START WITH MAKING IT RELEVANT.",
    category: "Reality Check",
    situation: "The classic client brief opening question.",
    caption:
      "Virality is a byproduct of cultural resonance, not a checkbox you order off a menu. Give them a reason to care first. #CloutAdda",
    badge: "Meme 03 · Strategy First",
  },
  {
    id: "meme-04",
    topText: "THE POST IS READY.",
    bottomText: "THE TREND HAS ALREADY MOVED ON.",
    category: "Internet Speed",
    situation: "When 7 layers of legal and brand approval take 3 weeks to review a 10-second meme.",
    caption:
      "Internet culture runs on 48-hour shelf lives. If your approval cycle takes 3 weeks, you are publishing digital archaeology. #CloutAdda",
    badge: "Meme 04 · Shelf Life",
  },
  {
    id: "meme-05",
    topText: "OUR AUDIENCE IS GEN Z.",
    bottomText: "THAT IS A GENERATION, NOT A CONTENT STRATEGY.",
    category: "Persona Check",
    situation: "When brand decks treat 2 billion people as one single homogenous human being.",
    caption:
      "Gamers, fashion archivists, finance geeks, and tech builders don't speak the same language just because they share a birth decade. Niche down. #CloutAdda",
    badge: "Meme 05 · Demographic Myth",
  },
  {
    id: "meme-06",
    topText: "ANOTHER GENERIC BRAND POST?",
    bottomText: "THE AUDIENCE HAS LEFT THE CHAT.",
    category: "Feed Fatigue",
    situation: "A corporate flyer masquerading as a modern social post.",
    caption:
      "Nobody wakes up excited to look at a PDF exported as a JPEG. Elevate your presence or watch them scroll straight past. #CloutAdda",
    badge: "Meme 06 · Feed Fatigue",
  },
  {
    id: "meme-07",
    topText: "SHOULD WE SPEND $50K ON BILLBOARDS?",
    bottomText: "HOW ABOUT 3 CREATIVE MEMES THAT PEOPLE ACTUALLY SCREENSHOT?",
    category: "Budget Allocation",
    situation: "Budgeting for traditional media vs culture-first digital resonance.",
    caption:
      "People look at their phones while driving past billboards. Meet them where their eyes and thumbs actually live. #CloutAdda",
    badge: "Meme 07 · Modern Media",
  },
  {
    id: "meme-08",
    topText: "WE HIRED AN INFLUENCER WITH 2 MILLION FOLLOWERS.",
    bottomText: "AND 12 PEOPLE CLICKED THE LINK.",
    category: "Influence Quality",
    situation: "Chasing follower vanity metrics over genuine audience affinity.",
    caption:
      "Followers are cheap. Credibility is priceless. Match your brand with creators whose audience genuinely values their opinion. #CloutAdda",
    badge: "Meme 08 · Creator Fit",
  },
];

/* Interactive Meme Lab Combinations */
export interface MemeLabPreset {
  personality: string;
  objective: string;
  audience: string;
  suggestedTone: string;
  format: string;
  sampleHeadline: string;
  explanation: string;
}

export const MEME_LAB_DATA: Record<
  string,
  { suggestedTone: string; format: string; sampleHeadline: string; explanation: string }
> = {
  default: {
    suggestedTone: "Sharp, self-aware & culturally grounded",
    format: "Two-panel observational carousel + relatable Twitter-style visual card",
    sampleHeadline:
      "When the product solves the problem before your team can finish explaining the problem.",
    explanation:
      "This creative direction anchors the product's primary advantage in a familiar daily friction point, using humor to eliminate skepticism without compromising brand authority.",
  },
};

export function getMemeLabCreativeIdea(personality: string, objective: string, audience: string) {
  const tones: Record<string, string> = {
    "Funny & playful": "Unapologetically comedic, self-deprecating and fast-paced",
    "Smart & witty": "Subtle industry irony, sharp intellectual punchlines and clever observations",
    "Premium & subtle": "Understated editorial humour, clean typography and dry self-awareness",
    "Bold & expressive":
      "High-contrast visual agitation, unapologetic hot takes and conversational banter",
  };

  const formats: Record<string, string> = {
    "Brand awareness": "Relatable situational dialogue image with bold contrasting typography",
    "Product launch":
      "Problem vs Solution split carousel showcasing the 'Before & After' without corporate fluff",
    Engagement:
      "Interactive community poll or 'Pick Your Fighter' meme grid featuring everyday dilemmas",
    "Event promotion":
      "Urgency-driven 'What actually happens at the meetup' behind-the-scenes sketch",
    "Brand storytelling":
      "Founder journey reality check meme showing the real struggle vs the polished headline",
  };

  const headlines: Record<string, string> = {
    "Students & young adults":
      "When you have 4 exams tomorrow but the brand just dropped something actually worth your attention.",
    "Working professionals":
      "When the meeting could have been an email, but the email could have been this single meme.",
    Entrepreneurs:
      "When everyone talks about venture capital, but your real superpower is organic cultural distribution.",
    "General consumers":
      "When you promised yourself you'd spend less, but this was designed specifically for your exact impulse.",
  };

  const explanations: Record<string, string> = {
    "Students & young adults":
      "Younger audiences have instant anti-advertising radars. By acknowledging their daily stress and speaking their native internet dialect, the brand feels like a peer in the group chat rather than an intrusive corporation.",
    "Working professionals":
      "Workplace frustration is universal. Tapping into shared corporate ironies positions your brand as an empathetic ally who understands the absurdity of modern busywork.",
    Entrepreneurs:
      "Founders respect clarity and execution over buzzwords. Framing your message around leverage and velocity builds immediate peer-level credibility.",
    "General consumers":
      "Simplicity and everyday emotion win. Anchoring the core benefit in a familiar household or daily situation makes comprehension immediate and shareable.",
  };

  return {
    suggestedTone: tones[personality] || "Self-aware, culturally agile and audience-first",
    format: formats[objective] || "Split observational visual with bold typographic hierarchy",
    sampleHeadline:
      headlines[audience] ||
      "When the trend finally matches your brand instead of just matching the calendar.",
    explanation:
      explanations[audience] ||
      "Combines strategic restraint with cultural relevance to maximize earned attention.",
  };
}
