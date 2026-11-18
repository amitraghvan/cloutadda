export interface ChallengeOption {
  id: string;
  question: string;
  diagnosis: string;
  recommendedService: string;
  serviceSlug: string;
  actionText: string;
  detail: string;
}

export const CLOUT_CHECK_OPTIONS: ChallengeOption[] = [
  {
    id: "recognition",
    question: "People do not recognise our brand.",
    diagnosis:
      "Your brand lacks top-of-funnel visual memorability and consistent earned media touchpoints.",
    recommendedService: "PR & MEME MARKETING",
    serviceSlug: "pr-meme-marketing",
    actionText: "EXPLORE PR & MEME MARKETING ↗",
    detail:
      "Break through feed blindness with relatable cultural angles and earned storytelling that people voluntarily share.",
  },
  {
    id: "repetitive",
    question: "Our social media content feels repetitive.",
    diagnosis:
      "Your brand needs a clearer content direction, diverse visual formats, and a more engaging social presence.",
    recommendedService: "SOCIAL MEDIA MARKETING",
    serviceSlug: "social-media-marketing",
    actionText: "EXPLORE SOCIAL MEDIA MARKETING ↗",
    detail:
      "We replace predictable corporate announcements with platform-native reels, swipeable carousels, and high-retention storytelling.",
  },
  {
    id: "creators",
    question: "We want to reach the right creators.",
    diagnosis:
      "You need creator curation focused on authentic audience alignment rather than vanity follower counts.",
    recommendedService: "INFLUENCER MARKETING",
    serviceSlug: "influencer-marketing",
    actionText: "EXPLORE INFLUENCER MARKETING ↗",
    detail:
      "Connect with our 500+ verified creators across 10+ categories with strict vetting on engagement quality and category authority.",
  },
  {
    id: "cultural-relevance",
    question: "We need more cultural relevance.",
    diagnosis:
      "Your communication is too formal or detached from how your audience talks, laughs, and shares online.",
    recommendedService: "PR & MEME MARKETING",
    serviceSlug: "pr-meme-marketing",
    actionText: "EXPLORE PR & MEME MARKETING ↗",
    detail:
      "Learn to participate in current internet conversations responsibly without looking like a brand that tries too hard.",
  },
  {
    id: "event",
    question: "We are planning an event.",
    diagnosis:
      "You need an experience partner who knows how to build hype before, energy during, and digital longevity after the doors open.",
    recommendedService: "SOCIAL EVENTS MARKETING",
    serviceSlug: "social-events-marketing",
    actionText: "EXPLORE SOCIAL EVENTS MARKETING ↗",
    detail:
      "From campus activations to stadium-scale concerts with top artists, we handle talent curation, production, and crowd engagement.",
  },
  {
    id: "podcast",
    question: "We want to start a podcast.",
    diagnosis:
      "Your brand has valuable stories and thought-leadership that deserve long-form depth and multichannel distribution.",
    recommendedService: "PODCASTING",
    serviceSlug: "podcasting",
    actionText: "EXPLORE PODCASTING ↗",
    detail:
      "From concept design and VIP guest booking to 4K studio production and bite-sized social cuts that distribute your insights.",
  },
];
