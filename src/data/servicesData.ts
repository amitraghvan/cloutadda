interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroCopy: string;
  primaryCtaText: string;
  closingHeadline: string;
  closingCtaText: string;
  accentColor: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "social-media-marketing",
    slug: "social-media-marketing",
    number: "01",
    title: "Social Media Marketing",
    shortDescription:
      "Strategy, content creation and growth across Instagram, YouTube and LinkedIn. We help your brand build a social presence with a clear voice and a reason for people to engage.",
    heroHeadline: "YOUR BRAND DESERVES MORE THAN ANOTHER POST.",
    heroCopy:
      "People are already spending time on social media. The challenge is giving them a reason to notice your brand. We bring strategy, creative content and consistent storytelling together to help your brand build a stronger social presence.",
    primaryCtaText: "LET'S IMPROVE YOUR SOCIAL PRESENCE ↗",
    closingHeadline: "LET'S GIVE YOUR BRAND A BETTER FEED.",
    closingCtaText: "DISCUSS YOUR SOCIAL MEDIA GOALS ↗",
    accentColor: "#ED1021",
  },
  {
    id: "pr-meme-marketing",
    slug: "pr-meme-marketing",
    number: "02",
    title: "PR & Meme Marketing",
    shortDescription:
      "From relatable memes and trending formats to brand storytelling and earned media, we help your brand join conversations people already care about.",
    heroHeadline: "YOUR BRAND SHOULD BE PART OF THE CONVERSATION.",
    heroCopy:
      "People scroll past traditional promotions every day. But a relatable idea, a timely meme or a story worth sharing can make them stop. We help brands connect with internet culture through relevant meme content, creative campaigns and PR storytelling.",
    primaryCtaText: "LET'S START A CAMPAIGN ↗",
    closingHeadline: "YOUR BRAND HAS A STORY. LET'S MAKE PEOPLE TALK ABOUT IT.",
    closingCtaText: "LET'S TALK MEME MARKETING ↗",
    accentColor: "#FF481E",
  },
  {
    id: "influencer-marketing",
    slug: "influencer-marketing",
    number: "03",
    title: "Influencer Marketing",
    shortDescription:
      "Find the right voices for your brand. We help plan and execute creator campaigns built around audience relevance and campaign objectives.",
    heroHeadline: "THE RIGHT CREATOR CAN CHANGE THE WHOLE CONVERSATION.",
    heroCopy:
      "Finding an influencer is easy. Finding someone whose audience, content and personality actually fit your brand takes more thought. We help brands plan and execute creator campaigns with a focus on relevance and communication.",
    primaryCtaText: "FIND THE RIGHT VOICES ↗",
    closingHeadline: "LET'S FIND THE RIGHT VOICES FOR YOUR BRAND.",
    closingCtaText: "DISCUSS A CREATOR CAMPAIGN ↗",
    accentColor: "#ED1021",
  },
  {
    id: "social-events-marketing",
    slug: "social-events-marketing",
    number: "04",
    title: "Social Events Marketing",
    shortDescription:
      "From campus conclaves to brand activations, we help create experiences that bring people together and give them something to talk about.",
    heroHeadline: "DON'T JUST HOST AN EVENT. CREATE A MOMENT.",
    heroCopy:
      "Great events bring people together. Great event marketing gives people a reason to know about them, attend them and remember them. We help bring brands and audiences together through social events, activations and experiences.",
    primaryCtaText: "PLAN YOUR NEXT EXPERIENCE ↗",
    closingHeadline: "LET'S CREATE AN EXPERIENCE WORTH REMEMBERING.",
    closingCtaText: "DISCUSS AN EVENT ↗",
    accentColor: "#FF2638",
  },
  {
    id: "podcasting",
    slug: "podcasting",
    number: "05",
    title: "Podcasting",
    shortDescription:
      "Build meaningful conversations through branded podcast concepts, production, guest placement and distribution.",
    heroHeadline: "SOME STORIES DESERVE MORE THAN A SCROLL.",
    heroCopy:
      "Podcasts give brands the space to explore ideas, share expertise and build meaningful conversations. We help bring branded podcast concepts to life through planning, production, guest placement and distribution.",
    primaryCtaText: "LET'S START A CONVERSATION ↗",
    closingHeadline: "LET'S MAKE YOUR BRAND WORTH LISTENING TO.",
    closingCtaText: "START A PODCAST PROJECT ↗",
    accentColor: "#78000E",
  },
];

/* Detailed Content Formats for Social Media Marketing */
export const SOCIAL_CONTENT_FORMATS = [
  {
    id: "reels",
    title: "Short-Form Reels",
    platform: "Instagram & YouTube Shorts",
    headline: "Hook within 2 seconds. Deliver value in 30.",
    description:
      "Algorithm-favored vertical video that focuses on an immediate curiosity gap, clear visual pacing, and sound design native to platform trends.",
    exampleAngle:
      "Illustrative Direction: Breakdown of a counter-intuitive product insight or raw behind-the-scenes reveal without sounding like an advertisement.",
    tags: ["High Reach", "Algorithmic Growth", "Sound Design"],
  },
  {
    id: "carousels",
    title: "Swipeable Carousels",
    platform: "Instagram & LinkedIn",
    headline: "Engineered for saves and repeat impressions.",
    description:
      "Step-by-step visual teardowns, frameworks, and curated swipeable guides that turn complex brand propositions into bite-sized, bookmarkable knowledge.",
    exampleAngle:
      "Illustrative Direction: 'The 5 hidden traps brands make in product launches (and how to bypass them).' High typography contrast.",
    tags: ["High Saves", "Deep Dwell Time", "Educational"],
  },
  {
    id: "educational-posts",
    title: "Category Authority Posts",
    platform: "LinkedIn & Instagram",
    headline: "Earn credibility by educating instead of pitching.",
    description:
      "Data-backed graphics, industry comparisons, and clear thought-leadership posts designed to build long-term brand trust with discerning decision-makers.",
    exampleAngle:
      "Illustrative Direction: Proprietary framework diagrams and benchmark charts comparing traditional vs modern consumer habits.",
    tags: ["Authority Building", "B2B Trust", "Thought Leadership"],
  },
  {
    id: "brand-stories",
    title: "Humanized Brand Stories",
    platform: "Instagram Stories & Feeds",
    headline: "Make the brand feel approachable and alive.",
    description:
      "Candid stories showcasing the makers, values, customer encounters, and culture behind the logo. Strips away corporate distance.",
    exampleAngle:
      "Illustrative Direction: Day-in-the-life glimpses of founders or real customer problem-solving sessions without polished studio pretense.",
    tags: ["Relatability", "Community Loyalty", "Authenticity"],
  },
  {
    id: "campaign-creatives",
    title: "Hero Campaign Creatives",
    platform: "Multi-Platform",
    headline: "Single-minded visual impact for major announcements.",
    description:
      "High-aesthetic digital posters, teaser videos, and launch assets crafted to establish visual memorability for major milestones or activations.",
    exampleAngle:
      "Illustrative Direction: Bold dark-room editorial imagery with singular punchlines that leave zero ambiguity on the core message.",
    tags: ["Launch Milestones", "Brand Recall", "Art Direction"],
  },
  {
    id: "short-form-videos",
    title: "Conversational Shorts",
    platform: "YouTube & TikTok/Reels",
    headline: "Natural conversational hooks that spark discussion.",
    description:
      "Casual, direct-to-camera or conversational interview cuts that tackle common community questions and trigger comment-section debates.",
    exampleAngle:
      "Illustrative Direction: Candid street-style or studio micro-interviews testing popular myths in the brand's industry.",
    tags: ["Comment Engagement", "Shareability", "Casual Tone"],
  },
];

/* PR & Meme Marketing Core Principles and Checks */
export const MEME_MARKETING_CHECKS = [
  {
    number: "01",
    title: "Audience Relevance",
    question:
      "Is this trend or joke something our specific target demographic actually cares about?",
    explanation:
      "If your audience consists of B2B founders, an edgy teen gaming meme will feel out of touch. Relevance always precedes virality.",
  },
  {
    number: "02",
    title: "Brand Tone Suitability",
    question: "Does this format align with the brand's natural personality and values?",
    explanation:
      "A luxury or fintech brand communicates differently than a youth beverage brand. The humour must reinforce, not undermine, credibility.",
  },
  {
    number: "03",
    title: "Natural Product Fit",
    question: "Can our product, service, or message integrate without feeling forced?",
    explanation:
      "Forcing a brand into an unrelated meme creates second-hand embarrassment. The product should feel like the natural punchline or resolution.",
  },
  {
    number: "04",
    title: "Understandable & Appropriate",
    question: "Is the humour clear, culturally sensitive, and respectful?",
    explanation:
      "Humour is subjective. If a joke can easily be misinterpreted, alienate customers, or cause brand safety concerns, it gets rewritten or scrapped.",
  },
  {
    number: "05",
    title: "Trend Timeliness",
    question: "Is the trend currently peaking or has the internet already moved on?",
    explanation:
      "Internet culture moves in 48-hour cycles. A meme deployed two weeks late signals cultural obsolescence rather than cultural agility.",
  },
];

export const MEME_MARKETING_BENEFITS = [
  {
    number: "01",
    title: "Easier Brand Recall",
    description:
      "People are more likely to remember content that feels familiar, entertaining and emotionally engaging rather than a dry billboard.",
  },
  {
    number: "02",
    title: "More Natural Engagement",
    description:
      "Relatable content encourages people to tag colleagues, forward to group chats, and leave genuine comments without being begged.",
  },
  {
    number: "03",
    title: "Approachable Brand Voice",
    description:
      "Strategic humour strips away cold corporate distance and signals self-awareness, making your brand genuinely likeable.",
  },
  {
    number: "04",
    title: "Active Cultural Participation",
    description:
      "Tapping into live moments lets your brand participate in real-time internet conversations while attention is already gathered.",
  },
  {
    number: "05",
    title: "Creative Clarity",
    description:
      "A simple visual combined with a relatable tension can communicate a complex value proposition in 2 seconds flat.",
  },
];

export const MEME_MARKETING_FAQS = [
  {
    question: "What is meme marketing?",
    answer:
      "Meme marketing is the strategic use of internet humor, relatable everyday situations, and established digital formats to communicate a brand's proposition naturally. Rather than interrupt audiences with traditional sales pitches, it enables brands to participate in cultural conversations people are already actively enjoying.",
  },
  {
    question: "Is meme marketing suitable for every business?",
    answer:
      "Yes, when calibrated properly. While consumer lifestyle and fintech brands often adopt bolder humor, B2B SaaS and enterprise brands can leverage witty, relatable workplace scenarios and industry observations. The key is adapting the tone to your audience's context.",
  },
  {
    question: "Does every meme campaign need a trending template?",
    answer:
      "Not at all. In fact, relying solely on ephemeral templates can look lazy. The most durable meme campaigns use original brand-first scenarios, relatable dialogues, and custom visual treatments that reflect the brand's unique point of view.",
  },
  {
    question: "Can a meme campaign promote a product or service?",
    answer:
      "Absolutely. The key is making the product the organic solution to a relatable friction point. Rather than shouting 'Buy our software', a meme illustrates the painful manual spreadsheet nightmare that our software effortlessly fixes.",
  },
  {
    question: "How do you decide which trend is relevant?",
    answer:
      "We run every prospective format through our 5-point check: audience relevance, tone alignment, organic product fit, cultural brand safety, and trend timeliness. If it fails even one check, we skip it.",
  },
  {
    question: "Can meme marketing be combined with PR?",
    answer:
      "Yes, and this is where Clout Adda excels. Memes build immediate grassroots buzz and social conversation, while strategic PR storytelling provides the broader narrative, founder perspective, and industry validation for media and stakeholders.",
  },
  {
    question: "How do you evaluate a meme campaign?",
    answer:
      "We examine qualitative and quantitative indicators: organic shares, comment sentiment, brand mentions, direct saves, profile visits, and brand search lift—prioritizing genuine resonance over hollow vanity metrics.",
  },
  {
    question: "Can a brand review content before it is published?",
    answer:
      "Always. Every concept, caption, visual treatment, and collaborator shortlist is submitted for formal brand approval prior to release to guarantee zero surprises and absolute brand alignment.",
  },
];

/* Creator Fit Selector Data */
export const CREATOR_CATEGORIES = [
  {
    id: "lifestyle",
    name: "Lifestyle & Fashion",
    stat: "150+ Verified Creators",
    idealFor: "Apparel, D2C, grooming, travel, premium accessories",
    approach:
      "Integrated aesthetic storytelling, outfit transitions, and organic 'day in my life' placement highlighting practical utility.",
    kpiFocus: "Brand perception, aesthetic resonance, product link clicks",
  },
  {
    id: "fitness",
    name: "Fitness & Wellness",
    stat: "80+ Verified Creators",
    idealFor: "Nutrition, sportswear, recovery tech, health supplements",
    approach:
      "Authentic routine integration, workout challenges, and ingredient transparency driven by certified athletes and coaches.",
    kpiFocus: "Credibility, sustained usage proof, discount code conversions",
  },
  {
    id: "education",
    name: "Education & EdTech",
    stat: "75+ Verified Creators",
    idealFor: "Learning platforms, career prep, books, universities, skill tools",
    approach:
      "Clear concept breakdowns, mentorship narratives, and real student outcome discussions by respected educators and rankers.",
    kpiFocus: "Lead generation, course enrollments, deep webinar signups",
  },
  {
    id: "technology",
    name: "Technology & Gadgets",
    stat: "110+ Verified Creators",
    idealFor: "Smartphones, peripherals, developer tools, AI apps, hardware",
    approach:
      "Feature stress-testing, real-world utility reviews, and comparison teardowns that simplify complex engineering into clear consumer benefits.",
    kpiFocus: "Specification clarity, launch day search lift, wishlist additions",
  },
  {
    id: "entertainment",
    name: "Entertainment & Comedy",
    stat: "120+ Verified Creators",
    idealFor: "OTT releases, festivals, consumer apps, beverage brands",
    approach:
      "High-energy comedic sketches, character skits, and dialogue hooks seamlessly wrapped around the brand message.",
    kpiFocus: "Viral shareability, tag volume, mass brand awareness",
  },
  {
    id: "business",
    name: "Business & Finance",
    stat: "65+ Verified Creators",
    idealFor: "Fintech, trading apps, SaaS, investments, venture funds",
    approach:
      "Data-backed financial literacy, case studies on market disruption, and actionable founder insights without exaggerated hype.",
    kpiFocus: "High trust scores, KYC signups, qualified enterprise inquiries",
  },
];

/* Event Type Selector Data */
export const EVENT_TYPES = [
  {
    id: "activation",
    title: "Brand Activations & Pop-ups",
    highlight: "Real-world consumer touchpoints",
    focus: "Interactive experiential booths, product sampling, UGC photo-ops",
    strategy:
      "Transforming passive bystanders into active participants through tactile brand experiences and social-first staging.",
    deliverables: [
      "Visual booth architecture",
      "On-ground influencer invites",
      "Real-time social coverage",
    ],
  },
  {
    id: "youth",
    title: "Campus & Youth Conclaves",
    highlight: "Direct connection with Gen-Z",
    focus: "Large-scale campus fests, student leadership summits, talent competitions",
    strategy:
      "Partnering with major universities to curate memorable student gatherings with relevant cultural figures and interactive zones.",
    deliverables: [
      "University stakeholder alignment",
      "Youth community engagement",
      "High-volume turnout",
    ],
  },
  {
    id: "music",
    title: "Music & Live Entertainment",
    highlight: "High-octane stadium energy",
    focus: "Concerts, artist tours, live music festivals, stage production",
    strategy:
      "Seamless artist curation, stadium-grade sound/light coordination, and end-to-end artist hospitality for monumental live memories.",
    deliverables: [
      "Artist outreach & booking",
      "Hospitality & stage coordination",
      "Broadcast capture",
    ],
  },
  {
    id: "creators",
    title: "Creator Gatherings & Summits",
    highlight: "Bridging the creator economy",
    focus: "Creator mixers, masterclasses, brand-creator networking stages",
    strategy:
      "Curating peer-to-peer discussions, live collaborative zones, and sponsor integrations for digital tastemakers.",
    deliverables: ["Creator curation", "Session programming", "Organic digital dissemination"],
  },
  {
    id: "conference",
    title: "Executive Summits & Conferences",
    highlight: "Thought-leadership & enterprise prestige",
    focus: "Industry keynotes, policy panels, founder symposiums",
    strategy:
      "Elevating corporate discourse with renowned keynote speakers, seamless audio-visual production, and dignified stage management.",
    deliverables: ["VIP speaker management", "Agenda architecture", "Media PR distribution"],
  },
];

/* Podcast Concept Selector Data */
export const PODCAST_CONCEPTS = [
  {
    id: "founders",
    title: "Founder & Disrupter Stories",
    suggestedName: "THE ELEVATED FOUNDER",
    vibe: "Intimate, high-conviction, tactical",
    sampleTopic:
      "From zero to product-market fit: The unromanticized truths of Indian venture building.",
    format: "60-minute deep dive with 4K multi-cam studio recording & 10 platform-specific shorts.",
  },
  {
    id: "culture",
    title: "Culture, Trends & Internet Lore",
    suggestedName: "GROUP CHAT DECODED",
    vibe: "Fast-paced, witty, internet-fluent",
    sampleTopic:
      "Why some memes make millions while legacy ads get ignored: Decoding consumer attention.",
    format: "45-minute roundtable with prominent digital creators and viral strategists.",
  },
  {
    id: "industry",
    title: "Industry & Enterprise Conversations",
    suggestedName: "THE BOARDROOM PULSE",
    vibe: "Authoritative, insightful, strategic",
    sampleTopic: "The next decade of retail tech, brand longevity, and shifting media consumption.",
    format: "30-minute structured dialogue with CXOs and tier-1 brand leaders.",
  },
  {
    id: "expertise",
    title: "Education, Science & Mastery",
    suggestedName: "MASTERY UNLOCKED",
    vibe: "Instructive, inspiring, accessible",
    sampleTopic:
      "Demystifying deep tech, algorithmic psychology, and modern cognitive performance.",
    format:
      "40-minute educational breakdown with whiteboard integration and visual chapter markers.",
  },
];
