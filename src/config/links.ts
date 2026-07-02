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
  follow: "#support",
  support: "https://ko-fi.com/dexteraiasystent",
  github: "https://github.com/dexterasystentai-netizen/dexter-ai-website",
};
