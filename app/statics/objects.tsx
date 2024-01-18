import { BiCandles } from "react-icons/bi";
import { MdRadar, MdSpaceDashboard } from "react-icons/md";
import {
  FaRegCalendar,
  FaChartArea,
  FaBoxOpen,
  FaSignOutAlt,
  FaSignInAlt,
} from "react-icons/fa";
import {
  RiInstagramFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiYoutubeFill,
  RiInboxArchiveFill,
} from "react-icons/ri";
import { SiHomeassistant } from "react-icons/si";
import { PiNewspaperFill } from "react-icons/pi";
import { CgMore } from "react-icons/cg";
export const Product_First = [
  {
    logo: <BiCandles className="text-2xl" />,
    href: "/",
    key: "Supercharts",
    label: "Supercharts",
    description: "Often limitated , never duplicated",
    sub: false,
  },
  {
    logo: <MdRadar className="text-2xl" />,
    href: "/",
    key: "Screeners",
    label: "Screeners",
    description: "Plis heatmaps = find anything",
    sub: true,
    subs: [
      { label: "Stock", href: "/" },
      { label: "Forex", href: "/" },
      { label: "Crypto", href: "/" },
      { label: "Eft", href: "/" },
    ],
  },
  {
    logo: <FaRegCalendar className="text-xl" />,
    href: "/",
    key: "Economic Calender",
    label: "Economic Calender",
    description: "All the pivotal global events",
    sub: false,
  },
];
export const Product_Second = [
  {
    href: "/",
    key: "Pricing",
    label: "Pricing",
  },
  {
    href: "/",
    key: "Features",
    label: "Features",
  },
  {
    href: "/",
    key: "Market data",
    label: "Market data",
  },
];

export const NavbarDropdownTitle = [
  "Products",
  "Community",
  "Markets",
  "News",
  "More",
];

export const tabsTitleHomePage = ["Stocks", "Crypto", "Forex", "Futures"];

import Prisma from "@/prisma/client";

///////
// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "how_hilink_work", label: "How Hilink Work?" },
  { href: "/", key: "services", label: "Services" },
  { href: "/", key: "pricing ", label: "Pricing " },
  { href: "/", key: "contact_us", label: "Contact Us" },
];

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Real maps can be offline",
    icon: "/map.svg",
    variant: "green",
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Set an adventure schedule",
    icon: "/calendar.svg",
    variant: "green",
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: "Technology using augment reality",
    icon: "/tech.svg",
    variant: "green",
    description:
      "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
  },
  {
    title: "Many new locations every month",
    icon: "/location.svg",
    variant: "orange",
    description:
      "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Us",
      "Trading view",
      "Future",
      "Jobs",
      "Privacy Policy",
      "Pricing",
    ],
  },
  {
    title: "Our Community",
    links: ["Chat", "Ideas", "Moderators"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Number ", value: "09174528612" },
    { label: "Email ", value: "naderi.mehdi.mnm@gmail.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    { lable: "instagram", icon: <RiInstagramFill className="text-xl" /> },
    { lable: "facebook", icon: <RiFacebookBoxFill className="text-xl" /> },
    { lable: "twitter", icon: <RiTwitterFill className="text-xl" /> },
    { lable: "youtube", icon: <RiYoutubeFill className="text-xl" /> },
  ],
};

export const Motto = [
  {
    lable: "50M+",
    logo: "/Star.png",
    text: "Traders and investors use our platform.",
  },
  {
    lable: "#1",
    logo: "/billing.png",
    text: " Top website in the world when it comes to all things investing.",
  },
  {
    lable: "4.9",
    logo: "/r2-d2.svg",
    text: "Rating from 1M+ reviews. No other finance apps are more loved.",
  },
  {
    lable: "10M+",
    logo: "/mando.svg",
    text: "Custom scripts and ideas shared by our users.",
  },
];

export const UserPhoto = [
  { link: "/UserPhotos/1.jpeg", Username: "amir" },
  { link: "/UserPhotos/2.jpeg", Username: "Tripledot" },
  { link: "/UserPhotos/3.jpeg", Username: "XQC" },
  { link: "/UserPhotos/4.jpeg", Username: "pokimane" },
  { link: "/UserPhotos/5.jpeg", Username: "dragonball" },
  { link: "/UserPhotos/6.jpeg", Username: "mohesn" },
  { link: "/UserPhotos/7.jpeg", Username: "khalse" },
  { link: "/UserPhotos/8.jpeg", Username: "pishro" },
  { link: "/UserPhotos/9.jpg", Username: "Godpoori" },
  { link: "/UserPhotos/10.jpeg", Username: "hiphopologist" },
  { link: "/UserPhotos/11.jpg", Username: "zanya" },
];

// SIDEBAR SECTION
export const Sidebar = [
  {
    id: 1,
    title: "Dashboard",
    href: "/home",
    logo: <MdSpaceDashboard />,
    authenticated: true,
  },
  {
    id: 2,
    title: "Inbox",
    href: "/home",
    logo: <RiInboxArchiveFill />,
    authenticated: true,
    notification: 3,
  },
  {
    id: 3,
    title: "Products",
    href: "/home",
    logo: <FaBoxOpen />,
    authenticated: true,
  },
  {
    id: 4,
    title: "Community",
    href: "/home",
    logo: <SiHomeassistant />,
    authenticated: true,
  },
  {
    id: 5,
    title: "Markets",
    href: "/home",
    logo: <FaChartArea />,
    authenticated: true,
  },
  {
    id: 6,
    title: "News",
    href: "/home",
    logo: <PiNewspaperFill />,
    authenticated: true,
  },
  {
    id: 7,
    title: "More",
    href: "/home",
    logo: <CgMore />,
    authenticated: true,
  },
  {
    id: 8,
    title: "Sign out",
    href: "../authentication/signout",
    logo: <FaSignOutAlt />,
    authenticated: true,
  },
  {
    id: 9,
    title: "Products",
    href: "/root",
    logo: <FaBoxOpen />,
    authenticated: false,
  },
  {
    id: 10,
    title: "Community",
    href: "/root",
    logo: <SiHomeassistant />,
    authenticated: false,
  },
  {
    id: 11,
    title: "Markets",
    href: "/root",
    logo: <FaChartArea />,
    authenticated: false,
  },
  {
    id: 12,
    title: "News",
    href: "/root",
    logo: <PiNewspaperFill />,
    authenticated: false,
  },
  {
    id: 13,
    title: "More",
    href: "/root",
    logo: <CgMore />,
    authenticated: false,
  },
  {
    id: 14,
    title: "Sign In",
    href: "../authentication",
    logo: <FaSignInAlt />,
    authenticated: false,
  },
  {
    id: 15,
    title: "Sign Up",
    href: "../authentication",
    logo: <FaSignOutAlt />,
    authenticated: false,
  },
];
