import icons from "./icons";
import images from "./images";
import logos from "./logos";

const features = [
  {
    id: 1,
    icon: icons.planets,
    title: "Cross-platform",
    description:
      "Utilize React Native and Expo for smooth performance on both iOS and Android.",
  },
  {
    id: 2,
    icon: icons.plane,
    title: "Production ready",
    description:
      "Crafted for efficiency with clean, scalable, and maintainable code.",
  },
  {
    id: 3,
    icon: icons.bot,
    title: "Design and code",
    description:
      "Speed up development with a library of adaptable React Native components.",
  },
];

const strong_points = [
  {
    id: 1,
    title: "01",
    description: "Cross-platform",
  },
  {
    id: 2,
    title: "02",
    description: "Production-ready",
  },
  {
    id: 3,
    title: "03",
    description: "Design + Code",
  },
  {
    id: 4,
    title: "04",
    description: "Style guide",
  },
  {
    id: 5,
    title: "05",
    description: "Design system",
  },
  {
    id: 5,
    title: "06",
    description: "Organized layers",
  },
];

const showcase = [
  images.home_mockup,
  images.product_mockup,
  images.login_mockup,
  images.basket_mockup,
  images.profile_mockup,
  images.favorites_mockup,
  images.search_mockup,
  images.guide_mockup,
];

const tools = [
  {
    id: 1,
    title: "Figma",
    logo: logos.figma,
  },
  {
    id: 2,
    title: "React Native",
    logo: logos.react,
  },
  {
    id: 3,
    title: "Expo",
    logo: logos.expo,
  },
];

const steps = [
  {
    id: 1,
    title: "Download & Unzip",
    description: "Buy and download the UI Kit from UI8, then unzip it.",
  },
  {
    id: 2,
    title: "Install dependencies",
    description:
      "Open your terminal, go to the project folder, and run npm install.",
  },
  {
    id: 2,
    title: "Start the project",
    description: "Launch the project by running expo start.",
  },
  {
    id: 4,
    title: "Explore & Customize",
    description: "Start customizing the UI Kit to fit your app’s needs.",
  },
];

const socials = [
  {
    id: 1,
    title: "Instagram",
    url: "https://www.instagram.com/anguriostegui",
  },
  {
    id: 2,
    title: "Twitter",
    url: "https://twitter.com/anguriostegui",
  },
  {
    id: 3,
    title: "Dribbble",
    url: "https://dribbble.com/anguriostegui",
  },
  {
    id: 4,
    title: "UI8",
    url: "https://ui8.net/users/angel-uriostegui?status=6",
  },
];

export default {
  features,
  strong_points,
  showcase,
  tools,
  steps,
  socials,
};
