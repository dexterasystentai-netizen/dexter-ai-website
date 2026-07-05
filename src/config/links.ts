import {
  Coffee,
  Github,
  HeartHandshake,
  Instagram,
  Music2,
  Play,
  type LucideIcon,
} from "lucide-react";

export type ProjectLink = {
  label: string;
  href?: string;
  icon: LucideIcon;
};

export const supportLinks: ProjectLink[] = [
  {
    label: "Zrzutka.pl",
    href: "https://zrzutka.pl/z/dexter-asystent-ai",
    icon: HeartHandshake,
  },
  {
    label: "Ko-fi",
    href: "https://ko-fi.com/dexteraiasystent",
    icon: Coffee,
  },
  {
    label: "Patreon",
    href: "https://www.patreon.com/Dextersystentai",
    icon: HeartHandshake,
  },
  {
    label: "Buy Me a Coffee",
    icon: Coffee,
  },
];

export const socialLinks: ProjectLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/dexterasystentai-netizen/dexter-ai-website",
    icon: Github,
  },
  {
    label: "YouTube",
    icon: Play,
  },
  {
    label: "TikTok",
    icon: Music2,
  },
  {
    label: "Instagram",
    icon: Instagram,
  },
  {
    label: "X",
    href: "https://x.com/Dexteraiasysten",
    icon: Github,
  },
];

export const primaryLinks = {
  follow: "#creator-support",
  support: "https://zrzutka.pl/z/dexter-asystent-ai",
  zrzutka: "https://zrzutka.pl/z/dexter-asystent-ai",
  github: "https://github.com/dexterasystentai-netizen/dexter-ai-website",
};
