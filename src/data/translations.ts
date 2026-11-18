export type Language = "en" | "si" | "ta";

export interface Translations {
  nav: {
    details: string;
    timeline: string;
    info: string;
    rsvpNow: string;
  };
  hero: {
    monogram: string;
    subtitle: string;
    coupleNames: string;
    tagline: string;
    date: string;
    venue: string;
    city: string;
    subVenue: string;
    event1Highlight: string;
    event2Highlight: string;
    confirmAttendance: string;
    addToCalendar: string;
    downloadIcs: string;
    countdownDays: string;
    countdownHours: string;
    countdownMinutes: string;
    countdownSeconds: string;
  };
  blessing: {
    tag: string;
    quote: string;
    description: string;
    signature: string;
  };
  celebration: {
    tag: string;
    title: string;
    dateFull: string;
    card1Tag: string;
    card1Number: string;
    card1Title: string;
    card1Time: string;
    card1Desc: string;
    card1Action: string;
    card2Tag: string;
    card2Number: string;
    card2Title: string;
    card2Time: string;
    card2Desc: string;
    card2Action: string;
  };
  orderOfDay: {
    tag: string;
    title: string;
    event1Time: string;
    event1Title: string;
    event1Desc: string;
    event2Time: string;
    event2Title: string;
    event2Desc: string;
    event3Time: string;
    event3Title: string;
    event3Desc: string;
    event4Time: string;
    event4Title: string;
    event4Desc: string;
  };
  guestInfo: {
    tag: string;
    title: string;
    dressCodeTitle: string;
    dressCodeDesc: string;
    dressCodeAction: string;
    locationTitle: string;
    locationDesc: string;
    locationAction: string;
    giftTitle: string;
    giftDesc: string;
    giftAction: string;
  };
  rsvp: {
    tag: string;
    title: string;
    subtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    attendanceLabel: string;
    acceptOption: string;
    declineOption: string;
    guestCountLabel: string;
    guestOption1: string;
    guestOption2: string;
    guestOption3: string;
    guestOption4: string;
    dietaryLabel: string;
    dietaryPlaceholder: string;
    submitButton: string;
    submittingButton: string;
    thankYouMessage: string;
    withLove: string;
  };
  footer: {
    coupleNames: string;
    details: string;
    quote: string;
    credits: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      details: "Details",
      timeline: "Timeline",
      info: "Guest Info",
      rsvpNow: "Book RSVP",
    },
    hero: {
      monogram: "A | S",
      subtitle: "THE WEDDING INVITATION",
      coupleNames: "Amaya & Supun",
      tagline: "CELEBRATION OF LOVE & TRADITION",
      date: "THURSDAY, AUGUST 20, 2026",
      venue: "Galle Face Hotel",
      city: "Colombo, Sri Lanka",
      subVenue: "Poruwa Ceremony & Reception",
      event1Highlight: "8:45 AM Poruwa Ceremony",
      event2Highlight: "1:30 PM Grand Reception",
      confirmAttendance: "CONFIRM ATTENDANCE",
      addToCalendar: "ADD TO CALENDAR",
      downloadIcs: "DOWNLOAD .ICS",
      countdownDays: "Days",
      countdownHours: "Hours",
      countdownMinutes: "Minutes",
      countdownSeconds: "Seconds",
    },
    blessing: {
      tag: "WITH DEEP GRATITUDE & JOY",
      quote: "“With the blessings of our parents, and the love of those who mean the most...”",
      description:
        "...we invite you to join us as we begin our journey together as husband and wife, united in love and heritage.",
      signature: "Amaya & Supun",
    },
    celebration: {
      tag: "SCHEDULE & CEREMONY",
      title: "A day close to our hearts",
      dateFull: "THURSDAY, AUGUST 20, 2026",
      card1Tag: "THE PORUWA CEREMONY",
      card1Number: "01",
      card1Title: "Where our forever begins",
      card1Time: "08:45 AM",
      card1Desc:
        "Poruwa Ceremony • Traditional rituals, auspicious blessings, exchange of vows and rings amidst the beats of traditional drums.",
      card1Action: "The Grand Ballroom, Galle Face Hotel",
      card2Tag: "THE WEDDING RECEPTION",
      card2Number: "02",
      card2Title: "Love, laughter & a lavish evening",
      card2Time: "01:30 PM",
      card2Desc:
        "Celebratory luncheon, heartfelt toasts, joyful dancing, and memories to cherish for a lifetime.",
      card2Action: "The Grand Ballroom, Galle Face Hotel",
    },
    orderOfDay: {
      tag: "AN AUSPICIOUS TIMELINE",
      title: "Order of the day",
      event1Time: "08:15 AM",
      event1Title: "Arrival & welcome",
      event1Desc: "Guests arrive at the Grand Ballroom foyer",
      event2Time: "08:45 AM",
      event2Title: "Poruwa ceremony",
      event2Desc: "Traditional rituals begin with magul bera",
      event3Time: "10:30 AM",
      event3Title: "Family blessings",
      event3Desc: "Photographs and congratulations",
      event4Time: "01:30 PM",
      event4Title: "Wedding luncheon",
      event4Desc: "Buffet reception, speeches and toasts",
    },
    guestInfo: {
      tag: "GUEST ESSENTIALS & FAQ",
      title: "A little before you arrive",
      dressCodeTitle: "Graceful and festive",
      dressCodeDesc:
        "Traditional Sri Lankan attire, formal national dress, or elegant western formal wear are warmly welcomed.",
      dressCodeAction: "COLOUR PALETTE: WARM TONES",
      locationTitle: "In the heart of Colombo",
      locationDesc:
        "Special room rates are available for wedding guests staying at Galle Face Hotel.",
      locationAction: "VIEW HOTEL DETAILS",
      giftTitle: "Your presence is our present",
      giftDesc:
        "Having you celebrate with us is the greatest gift of all. Should you wish to honor us with a gift, a wishing well will be present.",
      giftAction: "GIFT REGISTRY DETAILS",
    },
    rsvp: {
      tag: "RSVP NOW",
      title: "We've saved a place for you.",
      subtitle:
        "Kindly let us know if you can attend before July 20, 2026. We look forward to celebrating with you.",
      fullNameLabel: "Full Name *",
      fullNamePlaceholder: "eg. John Doe & Partner",
      emailLabel: "Email Address *",
      emailPlaceholder: "eg. john@example.com",
      attendanceLabel: "Will you be joining us? *",
      acceptOption: "Yes, I will attend",
      declineOption: "Regretfully cannot attend",
      guestCountLabel: "Number of Guests *",
      guestOption1: "1 Guest",
      guestOption2: "2 Guests",
      guestOption3: "3 Guests",
      guestOption4: "4 Guests",
      dietaryLabel: "Dietary requirements or a note for the couple",
      dietaryPlaceholder:
        "Please let us know of any dietary preferences...",
      submitButton: "Send RSVP",
      submittingButton: "Sending RSVP...",
      thankYouMessage:
        "Thank you! Your RSVP has been received. We cannot wait to celebrate with you!",
      withLove: "With love,",
    },
    footer: {
      coupleNames: "Amaya & Supun",
      details: "COLOMBO, SRI LANKA • AUGUST 20, 2026",
      quote: "Together is a beautiful place to be",
      credits: "Handcrafted with love for Amaya and Supun's Wedding",
    },
  },
  si: {
    nav: {
      details: "තොරතුරු",
      timeline: "වැඩසටහන",
      info: "උපදෙස්",
      rsvpNow: "පැමිණීම ස්ථිර කරන්න",
    },
    hero: {
      monogram: "අ | සු",
      subtitle: "අපගේ විවාහ මංගල්‍යය",
      coupleNames: "අමායා සහ සුපුන්",
      tagline: "ආදරයේ සහ සම්ප්‍රදායේ මංගල්‍යය",
      date: "2026 අගෝස්තු 20 වන බ්‍රහස්පතින්දා",
      venue: "ගෝල්ෆේස් හෝටලය (Galle Face Hotel)",
      city: "කොළඹ, ශ්‍රී ලංකා",
      subVenue: "සාම්ප්‍රදායික පෝරුව චාරිත්‍ර සහ මංගල සාදය",
      event1Highlight: "පෙ.ව. 08:45 පෝරුව චාරිත්‍රය",
      event2Highlight: "ප.ව. 01:30 මංගල සාදය",
      confirmAttendance: "පැමිණීම දන්වන්න",
      addToCalendar: "දින දර්ශනයට එක් කරන්න",
      downloadIcs: "දින දර්ශනය බාගත කරන්න",
      countdownDays: "දින",
      countdownHours: "පැය",
      countdownMinutes: "මිනිත්තු",
      countdownSeconds: "තත්පර",
    },
    blessing: {
      tag: "දෙමව්පිය ආශිර්වාදය",
      quote: "“දෙපාර්ශවයේ දෙමව්පියන්ගේ ආශිර්වාදය මැද, ආදරණීය ඔබ සැමගේ සුභපැතුම් පෙරටු කොට...”",
      description:
        "...අපගේ ජීවිතයේ නව පරිච්ඡේදය ආරම්භ කරන මේ උතුම් මංගල දිනයේදී ඔබ සැමට සාදරයෙන් ආරාධනා කර සිටිමු.",
      signature: "අමායා සහ සුපුන්",
    },
    celebration: {
      tag: "මංගල උත්සවය",
      title: "අපේ හදවතට සමීප දවසක්",
      dateFull: "2026 අගෝස්තු 20 වන දින",
      card1Tag: "පෝරුව චාරිත්‍ර",
      card1Number: "01",
      card1Title: "අපේ නව දිවිය ඇරඹෙන තැන",
      card1Time: "පෙරවරු 08:45 ට (සුබ නැකතින්)",
      card1Desc:
        "පාරම්පරික පෝරුව චාරිත්‍ර, මුදු මාරු කිරීම, ජයමංගල ගාථා සජ්ඣායනය සහ සාම්ප්‍රදායික පිත්තල පහන දැල්වීම.",
      card1Action: "ස්ථානය නරඹන්න",
      card2Tag: "මංගල භෝජන සංග්‍රහය",
      card2Number: "02",
      card2Title: "සතුට, සිනහව හා ආදරය පිරි මොහොතක්",
      card2Time: "දහවල් 12:30 සිට",
      card2Desc:
        "අප හා එක්ව මංගල දිවා භෝජනය භුක්ති විඳිමින්, සුහද සතුට බෙදාහදා ගැනීමට ඔබ සැමට ආරාධනා කරමු.",
      card2Action: "ග්‍රෑන්ඩ් බෝල්රූම්, ගෝල්ෆේස් හෝටලය",
    },
    orderOfDay: {
      tag: "දවසේ කාලසටහන",
      title: "වැඩසටහන් පිළිවෙළ",
      event1Time: "පෙරවරු 08:00",
      event1Title: "ආරාධිත අමුත්තන් පිළිගැනීම",
      event1Desc: "සාම්ප්‍රදායික තේ පැන් සහ උදෑසන සංග්‍රහය",
      event2Time: "පෙරවරු 08:45",
      event2Title: "පෝරුව චාරිත්‍ර ආරම්භය",
      event2Desc: "සුබ නැකතින් පෝරුවට නැගීම, ජයමංගල ගාථා සහ මංගල පහන දැල්වීම",
      event3Time: "පෙරවරු 10:15",
      event3Title: "දෙමව්පිය ආශිර්වාද සහ ඡායාරූප",
      event3Desc: "ඥාති හිතමිතුරන් සමඟ සුබපැතුම් සහ සමූහ ඡායාරූප ගැනීම",
      event4Time: "දහවල් 12:30",
      event4Title: "මංගල දිවා භෝජනය",
      event4Desc: "කේක් කැපීම, සංගීතය හා ප්‍රීතිමත් මංගල සාදය",
    },
    guestInfo: {
      tag: "ආරාධිතයින් සඳහා උපදෙස්",
      title: "ඔබ පැමිණීමට පෙර",
      dressCodeTitle: "ඇඳුම් විලාසිතාව (Dress Code)",
      dressCodeDesc:
        "ශ්‍රී ලාංකේය සාම්ප්‍රදායික මංගල ඇඳුම් (බතික්, සාරි, කුර්තා) හෝ විධිමත් මංගල ඇඳුමින් සැරසී පැමිණෙන්න.",
      dressCodeAction: "ඇඳුම් මාර්ගෝපදේශය",
      locationTitle: "කොළඹ හදවතේ",
      locationDesc:
        "ගෝල්ෆේස් හෝටලය, අංක 02, ගාලු පාර, කොළඹ 03. හෝටල් පිවිසුමේදී රථගාල් පහසුකම් (Valet Parking) සලසා ඇත.",
      locationAction: "Google Maps හරහා බලන්න",
      giftTitle: "ඔබේ පැමිණීමයි අපේ සතුට",
      giftDesc:
        "අප සමඟ මෙම දිනය සැමරීමට ඔබ පැමිණීම අප ලබන උසස්ම ත්‍යාගයයි. ආදරයෙන් තිළිණ පිරිනැමීමට කැමති අය සඳහා විස්තර පහත දැක්වේ.",
      giftAction: "තෑගි සහ බැංකු ගිණුම් විස්තර",
    },
    rsvp: {
      tag: "පැමිණීම දන්වන්න",
      title: "ඔබ වෙනුවෙන් ආසනයක් වෙන් කර ඇත.",
      subtitle:
        "කටයුතු මැනවින් සංවිධානය කරගැනීම සඳහා කරුණාකර 2026 ජූලි 01 දිනට පෙර ඔබගේ පැමිණීම තහවුරු කරන්න.",
      fullNameLabel: "සම්පූර්ණ නම *",
      fullNamePlaceholder: "උදා: වෛද්‍ය ගමගේ මහතා සහ මහත්මිය",
      emailLabel: "විද්‍යුත් තැපැල් ලිපිනය *",
      emailPlaceholder: "උදා: gamage@example.com",
      attendanceLabel: "ඔබ මංගල්‍යයට සහභාගී වන්නේද? *",
      acceptOption: "සතුටින් සහභාගී වෙමි",
      declineOption: "සහභාගී විය නොහැක",
      guestCountLabel: "පැමිණෙන සාමාජිකයින් ගණන *",
      guestOption1: "1 දෙනෙකි",
      guestOption2: "2 දෙනෙකි",
      guestOption3: "3 දෙනෙකි",
      guestOption4: "4 දෙනෙකි (පවුල)",
      dietaryLabel: "ආහාර අවශ්‍යතා හෝ ආදරණීය සුබපැතුම්",
      dietaryPlaceholder:
        "අමායා සහ සුපුන් වෙත ඔබේ සුබපැතුම් මෙහි සටහන් කරන්න...",
      submitButton: "පැමිණීම තහවුරු කරන්න",
      submittingButton: "තහවුරු වෙමින් පවතී...",
      thankYouMessage:
        "ස්තූතියි! ඔබේ පැමිණීම සටහන් කරගන්නා ලදී. ඔබව දැකබලා ගැනීමට අපි මහත් බලාපොරොත්තුවෙන් සිටිමු!",
      withLove: "ආදරයෙන්,",
    },
    footer: {
      coupleNames: "අමායා සහ සුපුන්",
      details: "2026.08.20 · ගෝල්ෆේස් හෝටලය, කොළඹ",
      quote: "එකට සිටීම සුන්දරම හැඟීමයි.",
      credits: "ශ්‍රී ලාංකේය සාම්ප්‍රදායික මංගල්‍යයක් වෙනුවෙන් ආදරයෙන් නිර්මාණය කරන ලදී.",
    },
  },
  ta: {
    nav: {
      details: "விவரங்கள்",
      timeline: "நிகழ்வுகள்",
      info: "தகவல்",
      rsvpNow: "வருகையை உறுதிசெய்க",
    },
    hero: {
      monogram: "அ | சு",
      subtitle: "எங்கள் திருமண அழைப்பிதழ்",
      coupleNames: "அமயா & சுபுன்",
      tagline: "அன்பு மற்றும் பாரம்பரியத்தின் கொண்டாட்டம்",
      date: "வியாழக்கிழமை, 20 ஆகஸ்ட் 2026",
      venue: "கால் பேஸ் ஹோட்டல் (Galle Face Hotel)",
      city: "கொழும்பு, இலங்கை",
      subVenue: "பாரம்பரிய போருவ சடங்கு மற்றும் வரவேற்பு",
      event1Highlight: "காலை 08:45 போருவ சடங்கு",
      event2Highlight: "பிற்பகல் 01:30 திருமண வரவேற்பு",
      confirmAttendance: "வருகையை உறுதிசெய்க",
      addToCalendar: "நாட்காட்டியில் சேர்க்கவும்",
      downloadIcs: ".ICS கோப்பைப் பதிவிறக்குக",
      countdownDays: "நாட்கள்",
      countdownHours: "மணி",
      countdownMinutes: "நிமிடம்",
      countdownSeconds: "நொடிகள்",
    },
    blessing: {
      tag: "எங்கள் திருமண ஆசீர்வாதம்",
      quote: "“பெற்றோரின் நல்லாசியுடனும், அனைவரின் அன்போடும்...”",
      description:
        "...எங்கள் புதிய வாழ்வின் தொடக்கத்தை உங்களுடன் கொண்டாடுவதில் பெருமகிழ்ச்சி அடைகிறோம்.",
      signature: "அமயா & சுபுன்",
    },
    celebration: {
      tag: "திருமணக் கொண்டாட்டம்",
      title: "எங்கள் நெஞ்சிற்கு நெருக்கமான நாள்",
      dateFull: "சனிக்கிழமை, 20 ஆகஸ்ட் 2026",
      card1Tag: "போருவ சடங்கு",
      card1Number: "01",
      card1Title: "எங்கள் புதிய பயணம் தொடங்கும் இடம்",
      card1Time: "காலை 08:45 (சுப நேரத்தில்)",
      card1Desc:
        "பாரம்பரிய போருவ சடங்குகள், மோதிரம் மாற்றுதல், ஜயமங்கல காதை ஓதுதல் மற்றும் மங்கள விளக்கேற்றுதல்.",
      card1Action: "இடத்தை பார்வையிடுக",
      card2Tag: "திருமண வரவேற்பு மற்றும் விருந்து",
      card2Number: "02",
      card2Title: "மகிழ்ச்சி, அன்பு மற்றும் கொண்டாட்டம்",
      card2Time: "மதியம் 12:30 முதல்",
      card2Desc:
        "எங்களுடன் இணைந்து மதிய விருந்தில் கலந்துகொண்டு மணமக்களை வாழ்த்த அன்போடு அழைக்கின்றோம்.",
      card2Action: "தி கிராண்ட் பால்ரூம், கால் பேஸ் ஹோட்டல்",
    },
    orderOfDay: {
      tag: "நிகழ்ச்சி நிரல்",
      title: "அன்றைய நிகழ்வுகள்",
      event1Time: "காலை 08:00",
      event1Title: "விருந்தினர் வரவேற்பு",
      event1Desc: "பாரம்பரிய இலங்கை தேநீர் மற்றும் சிற்றுண்டி",
      event2Time: "காலை 08:45",
      event2Title: "போருவ சடங்கு ஆரம்பம்",
      event2Desc: "சுப நேரத்தில் போருவ ஏறுதல் மற்றும் மங்கள விளக்கேற்றுதல்",
      event3Time: "காலை 10:15",
      event3Title: "குடும்ப ஆசீர்வாதம் & புகைப்படம்",
      event3Desc: "உறவினர்கள், நண்பர்களுடன் வாழ்த்துகள் மற்றும் புகைப்படங்கள்",
      event4Time: "மதியம் 12:30",
      event4Title: "திருமண விருந்து & கொண்டாட்டம்",
      event4Desc: "மதிய விருந்து, கேக் வெட்டுதல் மற்றும் இசை கொண்டாட்டங்கள்",
    },
    guestInfo: {
      tag: "விருந்தினர்களுக்கான தகவல்",
      title: "நீங்கள் வருவதற்கு முன்",
      dressCodeTitle: "ஆடை முறை (Dress Code)",
      dressCodeDesc:
        "பாரம்பரிய இலங்கை ஆடைகள் (பத்திக், புடவைகள், குர்தா) அல்லது முறையான விழா ஆடைகள் வரவேற்கப்படுகின்றன.",
      dressCodeAction: "ஆடை வழிகாட்டி",
      locationTitle: "கொழும்பின் மையப்பகுதியில்",
      locationDesc:
        "கால் பேஸ் ஹோட்டல், 2 கால் ரோடு, கொழும்பு 03. இலவச வாகன நிறுத்துமிடம் (Valet Parking) உள்ளது.",
      locationAction: "Google Maps-ல் பார்க்கவும்",
      giftTitle: "உங்கள் வருகையே எங்கள் பரிசு",
      giftDesc:
        "நீங்கள் வந்து வாழ்த்துவதே எங்களுக்கு மிகப்பெரிய பரிசு. அன்பளிப்புகள் வழங்க விரும்புவோருக்கு விபரங்கள் கீழே தரப்பட்டுள்ளன.",
      giftAction: "வங்கி மற்றும் பரிசு விபரங்கள்",
    },
    rsvp: {
      tag: "வருகையை உறுதிசெய்க",
      title: "உங்களுக்கான இடம் ஒதுக்கப்பட்டுள்ளது.",
      subtitle:
        "ஏற்பாடுகளைச் சிறப்பாகச் செய்ய தயவுசெய்து 1 ஜூலை 2026-க்குள் உங்கள் வருகையை உறுதிப்படுத்தவும்.",
      fullNameLabel: "முழுப் பெயர் *",
      fullNamePlaceholder: "உதாரணம்: திரு மற்றும் திருமதி கமகேயின் குடும்பத்தினர்",
      emailLabel: "மின்னஞ்சல் முகவரி *",
      emailPlaceholder: "உதாரணம்: name@example.com",
      attendanceLabel: "நிகழ்வில் கலந்துகொள்வீர்களா? *",
      acceptOption: "மகிழ்ச்சியுடன் கலந்துகொள்கிறேன்",
      declineOption: "கலந்துகொள்ள இயலவில்லை",
      guestCountLabel: "வருகை தரும் நபர்களின் எண்ணிக்கை *",
      guestOption1: "1 நபர்",
      guestOption2: "2 நபர்கள்",
      guestOption3: "3 நபர்கள்",
      guestOption4: "4 நபர்கள் (குடும்பம்)",
      dietaryLabel: "உணவு விருப்பங்கள் அல்லது வாழ்த்துகள்",
      dietaryPlaceholder:
        "மணமக்களுக்கான உங்கள் அன்பான வாழ்த்துகளை இங்கு பதிவு செய்யவும்...",
      submitButton: "பதிவை அனுப்பவும்",
      submittingButton: "உறுதிப்படுத்தப்படுகிறது...",
      thankYouMessage:
        "நன்றி! உங்கள் பதிவு பெறப்பட்டது. உங்களைச் சந்திப்பதில் பெருமகிழ்ச்சி அடைகிறோம்!",
      withLove: "அன்புடன்,",
    },
    footer: {
      coupleNames: "அமயா & சுபுன்",
      details: "20.08.2026 · கால் பேஸ் ஹோட்டல், கொழும்பு",
      quote: "ஒன்றாக இருப்பது மிக அழகான உணர்வு.",
      credits: "இலங்கை பாரம்பரிய திருமணங்களுக்காக அன்போடு வடிவமைக்கப்பட்டது.",
    },
  },
};
