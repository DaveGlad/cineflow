export interface NavLink {
  href: string;
  label: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number | null;
  period: string | null;
  features: string[];
  cta: string;
  popular: boolean;
}

export interface Feature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  rgpdConsent: boolean;
  newsletter: boolean;
}
