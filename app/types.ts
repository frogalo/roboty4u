export interface NavData {
  brand: string;
  links: { href: string; label: string }[];
  cta: string;
}
export interface HeroData {
  label: string;
  headline1: string;
  headline2: string;
  headline3: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: { label: string; value: string }[];
}
export interface AboutData {
  sectionLabel: string;
  heading1: string;
  heading2: string;
  glassLabel: string;
  glassMission: string;
  paragraphs: string[];
  features: { icon: string; title: string; description: string }[];
}
export interface RobotSpec { label: string; value: string; }
export interface Robot {
  index: string;
  title: string;
  imageAlt?: string;
  imageSrc?: string;
  icon?: string;
  isHighlight?: boolean;
  specs: RobotSpec[];
}
export interface OfferData {
  sectionLabel: string;
  heading: string;
  catalogLabel: string;
  robots: Robot[];
}
export interface RealizationItem {
  projectCode: string;
  title: string;
  videoSrc: string;
  description: string;
  tags: string[];
}
export interface RealizationsData {
  sectionLabel: string;
  heading: string;
  items: RealizationItem[];
}
export interface ContactPersonBase {
  icon: string;
  city: string;
}
export interface ContactPerson extends ContactPersonBase {
  person: string;
  street: string;
  postal: string;
  phone: string;
  email: string;
}
export interface ContactData {
  sectionLabel: string;
  heading: string;
  contacts: ContactPersonBase[];
  form: {
    fields: { id: string; label: string; type: string; placeholder: string }[];
    selectLabel: string;
    selectOptions: string[];
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
  };
}
export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
export interface FooterData {
  brand: string;
  tagline: string;
  columns: FooterColumn[];
  copyright: string;
}
