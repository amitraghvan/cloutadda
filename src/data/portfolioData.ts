export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  heroTagline: string;
  date?: string;
  venue?: string;
  partner?: string;
  audience?: string;
  speakersOrArtists: string[];
  overview: string;
  cloutAddaContribution: string[];
  keyHighlights: string[];
  heroImage: string;
  gallery: string[];
  accentColor: string;
}

export const PORTFOLIO_LIST: CaseStudyItem[] = [
  {
    id: "leadership-summit",
    slug: "leadership-summit",
    title: "Leadership Summit",
    category: "Conclave & Leadership",
    heroTagline: "Bridging National Thought-Leaders, Ethics & Innovation",
    overview:
      "A flagship national conclave convening some of India's most influential policymakers, educators, spiritual icons, and defence leaders to address nation-building, modern governance, youth empowerment, and technological evolution.",
    speakersOrArtists: [
      "Jaya Kishori",
      "Khan Sir",
      "Smriti Irani",
      "Anurag Thakur",
      "V. Narayanan",
      "Suresh Prabhu",
      "Rahul Shivshankar",
      "Temjen Along",
      "Lt. Gen. Ajay Chandpuria",
      "Imran Pratapgarhi",
    ],
    cloutAddaContribution: [
      "Speaker hospitality and VIP guest coordination",
      "Stage environment programming and run-of-show synchronization",
      "On-ground video and photographic documentation",
      "Dynamic social storytelling and speech quote dissemination",
    ],
    keyHighlights: [
      "Convened 10+ distinguished national leaders across diverse public sectors",
      "In-depth discussions on youth mentorship, governance, and institutional innovation",
      "Seamless multi-session stage coordination with zero schedule overruns",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
    ],
    accentColor: "#ED1021",
  },
  {
    id: "instaconfluence",
    slug: "instaconfluence",
    title: "InstaConfluence",
    category: "Creator Summit & Creator Economy",
    heroTagline: "Where the Internet's Top Voices Gathered Off-Screen",
    date: "30 April 2024",
    partner: "Lovely Professional University",
    overview:
      "A landmark gathering designed around the creators driving modern digital discourse. InstaConfluence created an immersive campus forum where top digital storytellers, video creators, brand executives, and aspiring student makers explored algorithmic evolution and the future of creator entrepreneurship.",
    speakersOrArtists: [
      "Leading Indian Digital Creators",
      "Viral Storytellers & Content Architects",
      "Social Media Strategists",
    ],
    cloutAddaContribution: [
      "Creator curation, outreach, and accommodation management",
      "Interactive stage panel architecture and fireside chat facilitation",
      "Experiential creator-student interactive zones",
      "Real-time social media content amplification across feeds",
    ],
    keyHighlights: [
      "Documented April 30, 2024 summit focused on the creator economy",
      "Direct engagement between verified creators and thousands of passionate youth",
      "High-engagement behind-the-scenes content produced on ground",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    ],
    accentColor: "#FF481E",
  },
  {
    id: "bizfluence-2",
    slug: "bizfluence-2",
    title: "Bizfluence 2.0",
    category: "Business & Entrepreneurship",
    heroTagline: "Deconstructing Modern Commerce, Retail & Venture Building",
    overview:
      "A high-calibre entrepreneurship symposium bringing frontline startup founders, corporate leaders, and seasoned media minds together to unpack direct-to-consumer disruption, capital allocation, and sustainable brand building in India.",
    speakersOrArtists: [
      "Shantanu Deshpande (Founder & CEO, Bombay Shaving Company)",
      "L. V. Navaneeth (CEO, The Hindu Group)",
      "Vivek Law (Senior Financial Journalist & Media Leader)",
      "Sohrab Sitaram (Co-Founder, Keventers)",
      "Navan Jaiswal (Business & Strategy Leader)",
    ],
    cloutAddaContribution: [
      "Thought-leadership speaker curation and executive liaison",
      "Keynote theme design and panel synchronization",
      "Stage environment management and audio-visual production",
      "Curated networking session architecture",
    ],
    keyHighlights: [
      "Practical case study breakdowns on scaling physical and digital brands",
      "Candid debates on media transformation and modern consumer attention",
      "Direct question-and-answer exchange between visionary founders and student builders",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
    ],
    accentColor: "#ED1021",
  },
  {
    id: "myntra-glamfest",
    slug: "myntra-glamfest",
    title: "Myntra Glamfest × LPU",
    category: "Fashion & Live Experience",
    heroTagline: "High-Energy Fashion Meets Cinematic Rock Energy",
    date: "13 April 2026",
    venue: "Baldev Raj Mittal Unipolis · Lovely Professional University",
    partner: "Myntra & Lovely Professional University",
    speakersOrArtists: ["Farhan Akhtar (Headlining Live Performance)"],
    overview:
      "A marquee lifestyle and music activation orchestrating youth fashion, brand presence, and a powerhouse live performance by multi-hyphenate artist Farhan Akhtar at one of India's largest campus amphitheaters.",
    cloutAddaContribution: [
      "Artist outreach and booking negotiations",
      "Talent curation and rider execution",
      "Comprehensive event planning and stage run-of-show",
      "Stakeholder coordination between corporate brand, university administration, and production crews",
      "Entertainment ecosystem support and backstage artist liaison",
    ],
    keyHighlights: [
      "Staged at the iconic Baldev Raj Mittal Unipolis",
      "Electrifying headline performance commanding unprecedented stadium resonance",
      "Seamless brand visibility integration for Myntra across all physical and digital touchpoints",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1200&auto=format&fit=crop",
    ],
    accentColor: "#FF2638",
  },
  {
    id: "coke-studio-bharat",
    slug: "coke-studio-bharat",
    title: "Coke Studio Bharat × LPU",
    category: "Live Music & Brand Experience",
    heroTagline: "30,000+ Voices Singing Under One Electric Stage",
    date: "November 2023",
    venue: "Baldev Raj Mittal Unipolis · Lovely Professional University",
    partner: "Coke Studio Bharat & Lovely Professional University",
    audience: "30,000+ Students",
    speakersOrArtists: ["Sunidhi Chauhan", "Rashmeet Kaur"],
    overview:
      "A monumental stadium-scale music activation celebrating indigenous sounds and pan-Indian musical heritage. In partnership with Coke Studio Bharat, the amphitheater transformed into a massive unison choir of 30,000+ young music lovers.",
    cloutAddaContribution: [
      "Artist outreach and talent coordination",
      "Artist management and backstage protocol execution",
      "Live event operational synchronization with campus security and sound engineering",
      "Event planning and crowd flow logistics",
    ],
    keyHighlights: [
      "Official brochure-documented audience of 30,000+ students in attendance",
      "Showstopping performances by vocal powerhouse Sunidhi Chauhan and folk-fusion artist Rashmeet Kaur",
      "Immersive brand integration celebrating Indian youth culture and sonic storytelling",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
    ],
    accentColor: "#ED1021",
  },
];
