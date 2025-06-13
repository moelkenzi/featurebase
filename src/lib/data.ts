import { Discord, Email, Linkedin, SmallLogo, X } from "@/components/icons";

interface FooterLinks {
  name: string;
  href: string;
  icon?: typeof SmallLogo;
}

export const Navlinks = [
  {
    name: "Features",
    href: "/#features",
  },
  {
    name: "Solutions",
    href: "/#solutions",
  },
  {
    name: "Resources",
    href: "/#resources",
  },
  {
    name: "Company",
    href: "/#company",
  },
];

export const FooterTitles = [
  {
    title: "PRODUCTS",
  },
  {
    title: "COMPARE",
  },
  {
    title: "RESOURCES",
  },
  {
    title: "COMPANY",
  },
];

export const FooterLinks: FooterLinks[] = [
  {
    name: "Support platform",
    href: "/#support-platform",
  },
  {
    name: "Feedback & Roadmaps",
    href: "/#feedback-and-roadmaps",
  },
  {
    name: "Help Center",
    href: "/#help-center",
    icon: SmallLogo,
  },
  {
    name: "Changelog",
    href: "/#changelog",
  },
  {
    name: "Surveys",
    href: "/#surveys",
  },
  {
    name: "Integration",
    href: "/#integration",
  },
];

export const FooterSocialLinks = [
  {
    id: 1,
    icon: Email,
    href: "/#twitter",
  },
  {
    id: 2,
    icon: Linkedin,
    href: "/#linkedin",
  },
  {
    id: 3,
    icon: X,
    href: "/#twitter",
  },
  {
    id: 4,
    icon: Discord,
    href: "/#discord",
  },
];
