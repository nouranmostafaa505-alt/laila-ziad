/* ============================================================
   ✏️  كل حاجة هتعدلها في الملف ده بس
   ============================================================ */
const CONFIG = {
  lang: "en",              // "en" أو "ar"
  dir: "ltr",              // "ltr" أو "rtl"
  pageTitle: "Laila & Ziad — Engagement",

  couple: { first: "Laila", second: "Ziad" },

  // التاريخ (YYYY-MM-DDTHH:MM:SS) — غيّر الساعة لمعاد الحفل
  date: "2026-11-22T19:00:00",
  showTime: false,          // خليها true لو عايزة الساعة تظهر
  timeText: "7:00 PM",      // النص اللي هيظهر لو showTime = true

  colors: { bg1: "#fbf7f2", bg2: "#efe4e1", ink: "#6b5a5f", accent: "#a98f95" },

  // الصور (في فولدر images)
  images: {
    hero: "images/hero.jpg",
    gallery: ["images/photo2.jpg", "images/photo3.jpg", "images/photo4.jpg"]
  },

  hero: {
    top: "WELCOME TO OUR FOREVER",
    bottom: "WE'RE SO GRATEFUL YOU'RE HERE"
  },

  invite: {
    title: "You're invited",
    text: "Two hearts, one beautiful beginning. We would be so happy to celebrate our engagement with the people we love the most. Your presence will make our day even more special."
  },

  location: {
    label: "LOCATION",
    name: "Golden Gate Villa",                         // اسم المكان (اختياري)
    text: "",                         // وصف قصير (اختياري)
    mapsButton: "Open in Google Maps",
    mapsUrl: "https://maps.app.goo.gl/25yhNNV7Vfbf8GnL7"
  },

  galleryLabel: "OUR STORY",

  rsvp: {
    label: "RSVP",
    title: "We can't wait to see you",
    nameLabel: "Your name",
    attendLabel: "Will you attend?",
    yes: "Yes, with joy",
    no: "Sadly, no",
    noteLabel: "A note for us (optional)",
    button: "Send our love",
    thanks: "Thank you! We got your reply 💌",
    // "googleform" = الردود تروح Google Form/Sheet (لو الحقول تحت فاضية بيشتغل واتساب لحد ما تملاها)
    // "whatsapp"   = بيفتح واتساب برسالة جاهزة
    mode: "googleform",
    googleForm: {
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfwDTtIDcnz0VIVumh1cMevLrlbYJKceNzDkBtGhkgZJcqUvA/formResponse",          // رابط الفورم بالشكل: https://docs.google.com/forms/d/e/XXXX/formResponse
      nameEntry: "entry.2006776757",    // مثال: entry.1234567890
      attendEntry: "entry.2076613157",  // مثال: entry.2345678901
      noteEntry: "entry.320994884"     // مثال: entry.3456789012
    },
    whatsappNumber: "201000000000"
  },

  closing: { text: "Thank you for being part of our story.", signature: "With love, Laila & Ziad" },

  countdownLabels: { d: "days", h: "hours", m: "min", s: "sec" }
};
