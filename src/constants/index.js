import { images, videos } from "../utils/index";

export const navLists = [
  { path: "/Home", label: "Home" }, // مسیر به صفحه اصلی
  { path: "/Mac", label: "Mac" }, // مسیر به صفحه Mac
  { path: "/Support", label: "Support" },
  { path: "/About", label: "About" }, // مسیر به صفحه Support
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: videos.highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: videos.highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: videos.highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: videos.highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: images.yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: images.blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: images.whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: images.blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
export const Support = [
  { id: 1, title: "iPhone", img: images.supportIphone },
  { id: 2, title: "Mac", img: images.supportMac },
  { id: 3, title: "iPad", img: images.supportIpad },
  { id: 4, title: "Apple Watch", img: images.supportWatch },
  { id: 5, title: "Apple Vision Pro", img: images.supportVision },
  { id: 6, title: "AirPods", img: images.supportAirPods },
  { id: 7, title: "Apple TV", img: images.supportAppleTv },
];
export const SupportOption = [
  { id: 1, title: "Apple Repair", img: images.supportAppleRepair },
  {
    id: 2,
    title: "Forgot Apple Account password",
    img: images.supportPassword,
  },
  { id: 3, title: "Billing and subscriptions", img: images.supportTopic },
];
