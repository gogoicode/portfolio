// ============================================================
// SINGLE SOURCE OF TRUTH — edit content here only.
// Components never hardcode text; they read from this file.
// Adding/removing a section here automatically updates nav.
// ============================================================

export const profile = {
  name: "Aayan Krishna Gogoi",
  role: "MCA Student — Data Science & IoT",
  phone: "+91-84039-85134",
  email: "aayankrishnagogoi@gmail.com",
  linkedin: "https://www.linkedin.com/in/aayan-krishna-gogoi",
  github: "https://github.com/gogoicode",
  summary:
    "MCA student with expertise in Data Science and IoT, experienced in building data-driven applications and IoT-based automation systems. Proficient in Python, AI/ML, and data visualization, with hands-on experience using Kaggle, Google Colab, and IoT technologies to develop real-world solutions.",
};

export const education = [
  {
    degree: "Master of Computer Application",
    place: "Vellore Institute of Technology, Chennai, Tamil Nadu",
    period: "July 2025 – Present",
  },
  {
    degree: "Bachelor of Computer Application",
    place: "North-Eastern Hill University, Shillong, Meghalaya",
    period: "Aug 2022 – June 2025",
  },
];

export const experience = [
  {
    title: "Smart Home (NIELIT) Internship",
    subtitle: "IoT-based Home Automation",
    points: [
      "Designed and implemented an IoT-powered smart home system for remote monitoring and automation of home appliances.",
    ],
    tech: ["React", "Figma", "Supabase", "Arduino", "IoT"],
  },
];

export const projects = [
  {
    title: "CubeAvg",
    subtitle: "Speed-cubing Scorecard Data Analysis App — Bachelor's Final Year Project",
    points: [
      "Developed a mobile app to capture WCA scorecards, extract data, and calculate the average, best, and worst times for speed-cubing.",
    ],
    tech: ["Python", "Flutter", "Flask"],
  },
  {
    title: "Plastic Points",
    subtitle: "Eco-Friendly Recycling System — Science Mela Project",
    points: [
      "Built a plastic disposal machine that rewards users for recycling plastic bottles, encouraging eco-friendly practices.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Node MCU", "IoT"],
  },
];

export const skills = {
  Languages: ["Java", "Python", "C", "SQL", "JavaScript", "HTML/CSS"],
  Frameworks: ["Flutter", "React", "Node.js", "Flask", "TensorFlow", "PyTorch"],
  "Developer Tools": ["Git", "Google Colab", "VS Code", "Visual Studio", "PyCharm"],
  "IoT Technologies": ["Arduino", "Node MCU", "Blynk"],
  "Soft Skills": ["Good Listener", "Adaptability", "Team Collaboration", "Communication", "Leadership"],
  Additional: ["Canva", "Photography", "Visual Design", "Attention to Detail"],
};

export const certifications = [
  {
    title: "100 Hours Training Program on IoT (S Grade Certificate)",
    issuer: "NIELIT, Shillong, India",
  },
  {
    title: "Python 3.4.3 Training",
    issuer: "Spoken Tutorial Project, IIT Bombay",
  },
  {
    title: "Workshop on Python, Data Science & ML",
    issuer: "Google Developer Clubs, NEHU, Shillong, India",
  },
  {
    title: "Data Science & Analytics Course",
    issuer: "HP Life",
  },
  {
    title: "Data Visualization: Empowering Business with Effective Insights",
    issuer: "Forage",
  },
];

// Nav is generated FROM this list — add a section object here only.
export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
