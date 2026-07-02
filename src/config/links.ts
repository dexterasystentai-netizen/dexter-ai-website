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
  href: string;
  icon: LucideIcon;
};

export const supportLinks: ProjectLink[] = [
  {
    label: "Ko-fi",
    href: "https://ko-fi.com/your-dexter-page",
    icon: Coffee,
  },
  {
    label: "Patreon",
    href: "https://patreon.com/your-dexter-page",
    icon: HeartHandshake,
  },
  {
    label: "Buy Me a Coffee",
    href: "https://buymeacoffee.com/your-dexter-page",
    icon: Coffee,
  },
];

export const socialLinks: ProjectLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/your-username/dexter-ai",
    icon: Github,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@your-dexter-channel",
    icon: Play,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@your-dexter-page",
    icon: Music2,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/your-dexter-page",
    icon: Instagram,
  },
  {
    label: "X",
    href: "https://x.com/your-dexter-page",
    icon: Github,
  },
];

export const primaryLinks = {
  follow: "https://x.com/your-dexter-page",
  support: "https://ko-fi.com/your-dexter-page",
  github: "https://github.com/your-username/dexter-ai",
};
