import {
  UserSearch,
  Target,
  TrendingUp,
  Wallet,
  GraduationCap,
  ShieldCheck,
  Search,
  PencilRuler,
  Settings,
  BarChart3,
  Building2,
  Users,
  Handshake,
  Award,
  type LucideIcon,
} from "lucide-react";

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

export type Stat = { value: string; label: string; icon?: LucideIcon };

export const stats: Stat[] = [
  { icon: Building2, value: "100+", label: "Companies Served" },
  { icon: Users, value: "1000+", label: "Employee Impacted" },
  { icon: Award, value: "15+", label: "Years Of Experience" },
  { icon: Handshake, value: "98%", label: "Clients Satisfaction" },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Feature[] = [
  {
    icon: UserSearch,
    title: "Talent Acquisition",
    description:
      "Finding the right talent for the right roles, we source, screen and hire top performers.",
  },
  {
    icon: Target,
    title: "HR Strategy & Consulting",
    description:
      "Align HR strategies with business goals to drive growth, engagement and performance.",
  },
  {
    icon: TrendingUp,
    title: "Performance Management",
    description:
      "Design performance frameworks that inspire, measure and drive employee excellence.",
  },
  {
    icon: Wallet,
    title: "Compensation & Benefits",
    description:
      "Competitive pay structure and benefits programs that attract and retain top talent.",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description:
      "Up-skill your workforce with customized training programs that build capabilities.",
  },
  {
    icon: ShieldCheck,
    title: "HR Compliance",
    description:
      "Ensure regulatory compliance and mitigate risk with our expert HR compliance services.",
  },
];

export type Step = {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
};

export const process: Step[] = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description: "We understand your business, challenges and people goals.",
  },
  {
    icon: PencilRuler,
    number: "02",
    title: "Design",
    description: "We craft customised HR solutions trained to your needs.",
  },
  {
    icon: Settings,
    number: "03",
    title: "Implement",
    description: "We execute the plan seamlessly with expert guidance.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Deliver Results",
    description: "We measure impact and help you achieve sustained success.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: "first" | "second" | "third";
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Nexus HR transformed our hiring process. Their team is professional, responsive and truly understands our needs.",
    name: "Rahul Mehta",
    role: "CEO, Tech Solutions",
    avatar: "first",
  },
  {
    quote:
      "Their HR strategy helped us improve employee engagement and performance significantly. Highly recommended.",
    name: "Sneha Kapoor",
    role: "COO, BrightWave",
    avatar: "second",
  },
  {
    quote:
      "A reliable partner for HR needs. Their expertise in compliance and HR policies is exceptional.",
    name: "Arjun Nair",
    role: "Founder, Growthly",
    avatar: "third",
  },
];

export const footerServices: NavLink[] = [
  { label: "Talent Acquisition", href: "/services" },
  { label: "HR Consulting", href: "/services" },
  { label: "Performance Management", href: "/services" },
  { label: "Compensation & Benefits", href: "/services" },
  { label: "Training & Development", href: "/services" },
  { label: "HR Compliance", href: "/services" },
];

export const quickLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Contact Us", href: "/contact" },
];
