export interface CoupleInfo {
  groomName: string;
  groomFullName: string;
  groomParents: string;
  groomInstagram: string;
  groomBio: string;
  groomPhoto: string;

  brideName: string;
  brideFullName: string;
  brideParents: string;
  brideInstagram: string;
  brideBio: string;
  bridePhoto: string;

  weddingDate: string; // ISO
  weddingDayName: string;
  weddingDateFormatted: string;
  receptionTime: string;
  holyCeremonyTime: string;
  locationName: string;
  locationAddress: string;
  locationCity: string;
  locationMapUrl: string;
  locationEmbedUrl: string;
}

export interface StoryItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "all" | "outdoor" | "moments" | "studio";
  url: string;
}

export interface WishMessage {
  id: string;
  name: string;
  attendance: "attending" | "declined" | "tentative";
  guestCount?: number;
  message: string;
  timestamp: string;
  likes: number;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  qrCodeUrl?: string;
  iconType: "bank" | "wallet" | "gift";
}

export const defaultWeddingData: {
  couple: CoupleInfo;
  quote: {
    verse: string;
    source: string;
    translation: string;
  };
  stories: StoryItem[];
  gallery: GalleryPhoto[];
  initialWishes: WishMessage[];
  bankAccounts: BankAccount[];
  giftAddress: {
    recipient: string;
    street: string;
    cityStateZip: string;
    phone: string;
    note: string;
  };
} = {
  couple: {
    groomName: "Kavishan",
    groomFullName: "Kavishan Gunasekara",
    groomParents: "Son of Mr. Mahinda Gunasekara & Mrs. Priyanthi Gunasekara",
    groomInstagram: "@kavishan_g",
    groomBio:
      "A software engineer with a deep love for Sri Lankan heritage, adorned in traditional Kandyan Mul Anduma (Nilame regalia) for this sacred milestone.",
    groomPhoto: "/images/sri-lankan/groom_nilame.jpg",

    brideName: "Dilani",
    brideFullName: "Dilani Wickramasinghe",
    brideParents: "Daughter of Dr. Anura Wickramasinghe & Mrs. Chandani Wickramasinghe",
    brideInstagram: "@dilani_w",
    brideBio:
      "Adorned in the timeless Kandyan bridal Osariya, Nalalpatiya, and the traditional seven ceremonial gold necklaces symbolizing beauty and prosperity.",
    bridePhoto: "/images/sri-lankan/bride_kandyan.jpg",

    weddingDate: "2026-08-20T08:42:00",
    weddingDayName: "Thursday (සුබ බ්‍රහස්පතින්දා)",
    weddingDateFormatted: "20 / 08 / 2026",
    holyCeremonyTime: "08.42 AM (සුබ නැකතින් - Poruwa)",
    receptionTime: "12.30 - 16.30 PM (Grand Lunch)",
    locationName: "The Kingsbury Hotel (The Balmoral Ballroom)",
    locationAddress: "48 Janadhipathi Mawatha, Colombo 01",
    locationCity: "Colombo, Sri Lanka",
    locationMapUrl: "https://maps.google.com/?q=The+Kingsbury+Hotel+Colombo",
    locationEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6868600812754!2d79.84074807484414!3d6.927974518337775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259231fcf5499%3A0xe54930d6bfdc5257!2sThe%20Kingsbury%20Hotel!5e0!3m2!1sen!2slk!4v1710000000000!5m2!1sen!2slk",
  },
  quote: {
    verse:
      "“මහාකාරුණිකෝ නාථෝ හිතාය සබ්බපාණිනං - පූරෙත්වා පාරමී සබ්බා පත්තෝ සම්බෝධිමුත්තමං - ඒතේන සච්චවජ්ජේන හෝතු තේ ජයමංගලං”",
    source: "ජයමංගල ගාථා & දෙමව්පිය ආශිර්වාදය (Jayamangala Blessings)",
    translation:
      "“With the supreme blessings of the Triple Gem and our beloved parents, we invite you to grace our sacred Poruwa ceremony as we unite in eternal love and harmony.”",
  },
  stories: [
    {
      year: "2020",
      title: "Royal Botanical Encounter",
      subtitle: "Peradeniya Botanical Gardens",
      description:
        "A chance meeting beneath the blooming Tabebuia canopies in Peradeniya. Long evening strolls talking about history, books, and family sparked an unbreakable bond.",
      image: "/images/sri-lankan/sri_lankan_traditional_wedding_decoration_01.jpg",
    },
    {
      year: "2022",
      title: "Misty Highlands & Coastlines",
      subtitle: "From Ella to Southern Shores",
      description:
        "Exploring tea plantations in Nuwara Eliya and watching golden Indian Ocean sunsets together, realizing home was wherever we were side by side.",
      image: "/images/sri-lankan/traditional_sinhalese_marriage-poruwa_ceremony_iv.jpg",
    },
    {
      year: "2024",
      title: "The Proposal by Kandy Lake",
      subtitle: "Beneath the Temple Golden Lights",
      description:
        "Overlooking the historic Temple of the Tooth under a twilight sky, Kavishan asked the question. Surrounded by temple bells and joyful tears, Dilani said 'Yes'.",
      image: "/images/sri-lankan/poruwa_feature.jpg",
    },
    {
      year: "2026",
      title: "The Sacred Poruwa Siritha",
      subtitle: "In Ancestral Kandyan Splendor",
      description:
        "Stepping onto the decorated Poruwa platform, accompanied by Magul Bera drums, Jayamangala chants, and the lighting of the traditional brass oil lamp.",
      image: "/images/sri-lankan/couple_hero.jpg",
    },
  ],
  gallery: [
    {
      id: "g1",
      title: "The Kandyan Couple in Royal Regalia",
      category: "studio",
      url: "/images/sri-lankan/couple_hero.jpg",
    },
    {
      id: "g2",
      title: "Kandyan Bride in Traditional Osariya",
      category: "moments",
      url: "/images/sri-lankan/bride_kandyan.jpg",
    },
    {
      id: "g3",
      title: "The Sacred Poruwa Ceremony",
      category: "moments",
      url: "/images/sri-lankan/poruwa_feature.jpg",
    },
    {
      id: "g4",
      title: "Lighting of the Brass Oil Lamp (පහන)",
      category: "moments",
      url: "/images/sri-lankan/oil_lamp_ritual.jpg",
    },
    {
      id: "g5",
      title: "Traditional Magul Bera Drummers",
      category: "outdoor",
      url: "/images/sri-lankan/magul_bera.jpg",
    },
    {
      id: "g6",
      title: "Floral Poruwa & Gokum Artistry",
      category: "outdoor",
      url: "/images/sri-lankan/sri_lankan_traditional_wedding_decoration_01.jpg",
    },
  ],
  initialWishes: [
    {
      id: "w1",
      name: "Dr. & Mrs. Gamage",
      attendance: "attending",
      guestCount: 2,
      message:
        "ඔබ දෙපළට සුබ මංගලම් වේවා! May the Noble Triple Gem shower you with peace, health, and endless happiness as you start your married life.",
      timestamp: "1 hour ago",
      likes: 18,
    },
    {
      id: "w2",
      name: "Sachith & Hashini Senanayake",
      attendance: "attending",
      guestCount: 2,
      message:
        "Kavishan and Dilani, so happy for you both! Dilani is going to look radiant in the Kandyan Osariya. Can't wait to hear the Magul Bera at The Kingsbury!",
      timestamp: "3 hours ago",
      likes: 14,
    },
    {
      id: "w3",
      name: "Kusal Perera (Melbourne)",
      attendance: "attending",
      guestCount: 1,
      message:
        "Congratulations machan! Flying in specially for the Poruwa ceremony. Wishing you both a lifetime of laughter, prosperity, and adventure!",
      timestamp: "6 hours ago",
      likes: 9,
    },
    {
      id: "w4",
      name: "Roshani & Nalin Wickramasinghe",
      attendance: "attending",
      guestCount: 2,
      message:
        "දෙපාර්ශවයේම ආශිර්වාදය මැද ඇරඹෙන මේ නව දිවිය සතුටින් සපිරි වේවා! Subha Mangalam to the most wonderful couple!",
      timestamp: "1 day ago",
      likes: 22,
    },
  ],
  bankAccounts: [
    {
      bankName: "Commercial Bank of Ceylon",
      accountNumber: "8002-918-4721",
      accountHolder: "Kavishan Gunasekara",
      iconType: "bank",
    },
    {
      bankName: "Sampath Bank PLC",
      accountNumber: "1034-5820-9182",
      accountHolder: "Dilani Wickramasinghe",
      iconType: "bank",
    },
    {
      bankName: "Hatton National Bank (HNB)",
      accountNumber: "0390-2018-4729",
      accountHolder: "Kavishan & Dilani Joint Fund",
      iconType: "wallet",
    },
  ],
  giftAddress: {
    recipient: "Gunasekara Walauwa / Residence",
    street: "No. 42, Independence Avenue, Cinnamon Gardens",
    cityStateZip: "Colombo 07, Sri Lanka",
    phone: "+94 77 123 4567",
    note: "Kindly include your name with the gift parcel so we may personally convey our warmest gratitude.",
  },
};
